import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Shield, Users } from "lucide-react";
import { AGENCY_CONFIG } from "@/lib/content";

export async function generateMetadata() {
  const t = await getTranslations("ourStoryPage");
  return {
    title: `${t("hero.eyebrow")} | ${AGENCY_CONFIG.shortName}`,
    description: t("hero.description"),
  };
}

const valueIcons = [Shield, Compass, Users];

export default async function OurStoryPage() {
  const t = await getTranslations("ourStoryPage");
  const milestones = t.raw("timeline.milestones") as {
    year: string;
    title: string;
    description: string;
  }[];
  const values = t.raw("values.items") as {
    title: string;
    description: string;
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

      {/* Timeline */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
              {t("timeline.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("timeline.title")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex gap-8 pb-12 last:pb-0">
                {index < milestones.length - 1 && (
                  <div className="absolute left-[27px] top-16 bottom-0 w-px bg-border" />
                )}
                <div className="relative flex-shrink-0">
                  <div className="flex size-14 items-center justify-center rounded-full border-2 border-accent/30 bg-card font-mono text-sm font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="pt-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 bg-card/50 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
            {t("mission.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("mission.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("mission.description")}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
              {t("values.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("values.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = valueIcons[i] ?? Shield;
              return (
                <div key={i} className="p-6 border border-border rounded-xl bg-card">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-card/50">
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
