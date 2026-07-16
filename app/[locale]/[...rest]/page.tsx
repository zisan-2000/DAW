import { notFound } from "next/navigation";

// Catch-all for any URL that no other route matches — renders the
// locale-aware not-found page (app/[locale]/not-found.tsx).
export default function CatchAllPage() {
  notFound();
}
