"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Search,
  ExternalLink,
} from "lucide-react";
import type { SerpAnalysisResponse } from "@/app/api/serp-analysis/route";

type ContactData = {
  name: string;
  email: string;
  phone: string;
  company: string;
};

type BusinessData = {
  website: string;
  industry: string;
  challenge: string;
};

type Step = 1 | 2 | 3;

const initialContact: ContactData = {
  name: "",
  email: "",
  phone: "",
  company: "",
};
const initialBusiness: BusinessData = {
  website: "",
  industry: "",
  challenge: "",
};

function StepIndicator({
  current,
  labels,
}: {
  current: Step;
  labels: string[];
}) {
  return (
    <ol className="mb-10 flex items-center gap-2 sm:gap-4">
      {labels.map((label, i) => {
        const stepNum = (i + 1) as Step;
        const isActive = stepNum === current;
        const isDone = stepNum < current;
        return (
          <li key={label} className="flex flex-1 items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                  isDone
                    ? "border-accent bg-accent text-accent-foreground"
                    : isActive
                      ? "border-accent text-accent"
                      : "border-border text-muted-foreground"
                }`}
              >
                {isDone ? <CheckCircle2 size={16} /> : stepNum}
              </span>
              <span
                className={`hidden text-sm font-medium sm:inline ${
                  isActive || isDone
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <div
                className={`h-px flex-1 transition-colors ${
                  isDone ? "bg-accent" : "bg-border"
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function ConsultationOnboarding() {
  const t = useTranslations("consultationOnboarding");
  const [step, setStep] = useState<Step>(1);
  const [contact, setContact] = useState<ContactData>(initialContact);
  const [business, setBusiness] = useState<BusinessData>(initialBusiness);
  const [keyword, setKeyword] = useState("");
  const [serpState, setSerpState] = useState<
    "idle" | "loading" | "success" | "no-api" | "error"
  >("idle");
  const [serpData, setSerpData] = useState<SerpAnalysisResponse | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const stepLabels = [
    t("steps.contact"),
    t("steps.business"),
    t("steps.keyword"),
  ];

  const canGoNextFromContact =
    contact.name.trim() !== "" && contact.email.trim() !== "";
  const canGoNextFromBusiness = business.website.trim() !== "";

  async function runSerpAnalysis() {
    if (!keyword.trim()) return;
    setSerpState("loading");
    setSerpData(null);
    try {
      const res = await fetch("/api/serp-analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword: keyword.trim(),
          website: business.website,
        }),
      });

      if (res.status === 503) {
        setSerpState("no-api");
        return;
      }
      if (!res.ok) {
        setSerpState("error");
        return;
      }

      const data: SerpAnalysisResponse = await res.json();
      setSerpData(data);
      setSerpState("success");
    } catch {
      setSerpState("error");
    }
  }

  async function handleSubmit() {
    setSubmitted(true);
    // Lead capture — integrate with CRM/email backend here.
    console.log("Consultation onboarding submitted:", {
      contact,
      business,
      keyword,
      serpData,
    });
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 size={40} className="mx-auto mb-4 text-accent" />
        <h2 className="text-2xl font-bold text-foreground mb-3">
          {t("success.title")}
        </h2>
        <p className="text-muted-foreground">
          {t("success.description", {
            name: contact.name,
            email: contact.email,
          })}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <StepIndicator current={step} labels={stepLabels} />

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={(e) =>
                    setContact({ ...contact, name: e.target.value })
                  }
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.emailLabel")}
                  </label>
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
                    }
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.phoneLabel")}
                  </label>
                  <input
                    type="tel"
                    value={contact.phone}
                    onChange={(e) =>
                      setContact({ ...contact, phone: e.target.value })
                    }
                    placeholder={t("contact.phonePlaceholder")}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.companyLabel")}
                </label>
                <input
                  type="text"
                  value={contact.company}
                  onChange={(e) =>
                    setContact({ ...contact, company: e.target.value })
                  }
                  placeholder={t("contact.companyPlaceholder")}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t("business.title")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("business.description")}
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("business.websiteLabel")}
                </label>
                <input
                  type="text"
                  value={business.website}
                  onChange={(e) =>
                    setBusiness({ ...business, website: e.target.value })
                  }
                  placeholder={t("business.websitePlaceholder")}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("business.industryLabel")}
                </label>
                <select
                  value={business.industry}
                  onChange={(e) =>
                    setBusiness({ ...business, industry: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="">{t("business.industryPlaceholder")}</option>
                  {(t.raw("business.industries") as string[]).map(
                    (industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ),
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("business.challengeLabel")}
                </label>
                <select
                  value={business.challenge}
                  onChange={(e) =>
                    setBusiness({ ...business, challenge: e.target.value })
                  }
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="">{t("business.challengePlaceholder")}</option>
                  {(t.raw("business.challenges") as string[]).map(
                    (challenge) => (
                      <option key={challenge} value={challenge}>
                        {challenge}
                      </option>
                    ),
                  )}
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t("keyword.title")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("keyword.description")}
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("keyword.keywordLabel")}
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder={t("keyword.keywordPlaceholder")}
                    className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={runSerpAnalysis}
                    disabled={!keyword.trim() || serpState === "loading"}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {serpState === "loading" ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Search size={16} />
                    )}
                    {t("keyword.analyzeButton")}
                  </button>
                </div>
              </div>

              {serpState === "loading" && (
                <p className="text-sm text-muted-foreground">
                  {t("keyword.analyzing")}
                </p>
              )}

              {serpState === "no-api" && (
                <div className="rounded-xl border border-border bg-background p-5">
                  <p className="font-semibold text-foreground mb-1">
                    {t("keyword.noApiTitle")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("keyword.noApiDescription")}
                  </p>
                </div>
              )}

              {serpState === "error" && (
                <div className="rounded-xl border border-border bg-background p-5">
                  <p className="font-semibold text-foreground mb-1">
                    {t("keyword.errorTitle")}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("keyword.errorDescription")}
                  </p>
                  <button
                    type="button"
                    onClick={runSerpAnalysis}
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    {t("keyword.retry")}
                  </button>
                </div>
              )}

              {serpState === "success" && serpData && (
                <div className="rounded-xl border border-border bg-background p-5">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-foreground">
                      {t("keyword.resultsTitle")}
                    </p>
                    {serpData.domain && (
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                          serpData.domainRank
                            ? "bg-accent/10 text-accent"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {serpData.domainRank
                          ? t("keyword.rankedAt", {
                              position: serpData.domainRank,
                            })
                          : t("keyword.notRanked")}
                      </span>
                    )}
                  </div>
                  <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                    {t("keyword.resultsFor")} “{serpData.keyword}”
                  </p>
                  <ol className="space-y-2">
                    {serpData.organicResults.map((result) => {
                      const isOwnDomain =
                        serpData.domain &&
                        result.displayedLink
                          .toLowerCase()
                          .includes(serpData.domain);
                      return (
                        <li
                          key={result.position}
                          className={`rounded-lg border p-3 text-sm ${
                            isOwnDomain
                              ? "border-accent/40 bg-accent/5"
                              : "border-border bg-card"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                              {result.position}
                            </span>
                            <div className="min-w-0 flex-1">
                              <a
                                href={result.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-medium text-foreground hover:text-accent"
                              >
                                <span className="truncate">{result.title}</span>
                                <ExternalLink size={12} className="shrink-0" />
                              </a>
                              <p className="truncate text-xs text-muted-foreground">
                                {result.displayedLink}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s - 1) as Step)}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={16} />
              {t("nav.back")}
            </button>
          ) : (
            <span />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s + 1) as Step)}
              disabled={
                (step === 1 && !canGoNextFromContact) ||
                (step === 2 && !canGoNextFromBusiness)
              }
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t("nav.next")}
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {t("nav.submit")}
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
