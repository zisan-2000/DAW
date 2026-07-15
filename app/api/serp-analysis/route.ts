import { NextRequest, NextResponse } from "next/server";

export type SerpOrganicResult = {
  position: number;
  title: string;
  link: string;
  displayedLink: string;
  snippet: string;
};

export type SerpAnalysisResponse = {
  keyword: string;
  domain: string | null;
  domainRank: number | null;
  totalResults: string | null;
  organicResults: SerpOrganicResult[];
};

function normalizeDomain(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  try {
    const withProtocol = /^https?:\/\//i.test(trimmed)
      ? trimmed
      : `https://${trimmed}`;
    return new URL(withProtocol).hostname.replace(/^www\./i, "").toLowerCase();
  } catch {
    return trimmed.replace(/^www\./i, "").toLowerCase();
  }
}

export async function POST(request: NextRequest) {
  let body: { keyword?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const keyword = body.keyword?.trim();
  if (!keyword) {
    return NextResponse.json({ error: "keyword is required" }, { status: 400 });
  }

  const apiKey = process.env.SERPAPI_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error: "serp_api_not_configured",
        message:
          "Live SERP data isn't connected yet. Add a SERPAPI_KEY environment variable to enable real-time search result analysis.",
      },
      { status: 503 },
    );
  }

  const domain = body.website ? normalizeDomain(body.website) : null;

  const params = new URLSearchParams({
    engine: "google",
    q: keyword,
    api_key: apiKey,
    num: "10",
  });

  try {
    const res = await fetch(`https://serpapi.com/search.json?${params.toString()}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "serp_fetch_failed", message: "Could not retrieve search results right now." },
        { status: 502 },
      );
    }

    const data = await res.json();

    const organicResults: SerpOrganicResult[] = (data.organic_results ?? [])
      .slice(0, 10)
      .map((r: Record<string, unknown>) => ({
        position: Number(r.position) || 0,
        title: String(r.title ?? ""),
        link: String(r.link ?? ""),
        displayedLink: String(r.displayed_link ?? r.link ?? ""),
        snippet: String(r.snippet ?? ""),
      }));

    let domainRank: number | null = null;
    if (domain) {
      const match = organicResults.find((r) => {
        try {
          return new URL(r.link).hostname.replace(/^www\./i, "").toLowerCase() === domain;
        } catch {
          return false;
        }
      });
      domainRank = match ? match.position : null;
    }

    const response: SerpAnalysisResponse = {
      keyword,
      domain,
      domainRank,
      totalResults: data.search_information?.total_results
        ? String(data.search_information.total_results)
        : null,
      organicResults,
    };

    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { error: "serp_fetch_failed", message: "Could not retrieve search results right now." },
      { status: 502 },
    );
  }
}
