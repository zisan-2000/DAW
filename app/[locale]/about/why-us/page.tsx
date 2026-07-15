import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Users2,
  Layers,
  BarChart3,
  Globe2,
  Check,
  X,
} from "lucide-react";
import { AGENCY_CONFIG } from "@/lib/content";

export async function generateMetadata() {
  const t = await getTranslations("whyUsPage");
  return {
    title: `${t("hero.eyebrow")} | ${AGENCY_CONFIG.shortName}`,
    description: t("hero.description"),
  };
}

const reasonIcons = [Award, ShieldCheck, Users2, Layers, BarChart3, Globe2];

export default async function WhyUsPage() {
  const t = await getTranslations("whyUsPage");
  const reasons = t.raw("reasons.items") as {
    title: string;
    description: string;
    stat: string;
    statLabel: string;
  }[];
  const rows = t.raw("comparison.rows") as {
    feature: string;
    us: boolean;
    others: boolean;
  }[];

  return (
    <div className="about-editorial w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
            {t("hero.eyebrow")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-3xl">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
              {t("reasons.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("reasons.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reasonIcons[i] ?? Award;
              return (
                <div key={i} className="p-6 border border-border rounded-xl bg-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div className="text-right">
                      <span className="block font-mono text-xl font-bold text-accent">
                        {reason.stat}
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        {reason.statLabel}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-32 bg-card/50 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
              {t("comparison.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("comparison.title")}
            </h2>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="grid grid-cols-3 border-b border-border bg-muted/40 px-6 py-4 text-sm font-semibold text-foreground">
              <span>Feature</span>
              <span className="text-center">{AGENCY_CONFIG.shortName}</span>
              <span className="text-center text-muted-foreground">Others</span>
            </div>
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${
                  i !== rows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-foreground">{row.feature}</span>
                <span className="flex justify-center">
                  {row.us ? (
                    <Check size={18} className="text-accent" />
                  ) : (
                    <X size={18} className="text-muted-foreground" />
                  )}
                </span>
                <span className="flex justify-center">
                  {row.others ? (
                    <Check size={18} className="text-muted-foreground" />
                  ) : (
                    <X size={18} className="text-muted-foreground" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t("cta.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t("cta.description")}</p>
          <Link href="/contact?type=consultation">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {t("cta.button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
