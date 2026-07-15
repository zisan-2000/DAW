import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Newspaper,
  MessageSquareWarning,
  UserX,
  Database,
  Scale,
  Flame,
  MessageCircle,
  ClipboardCheck,
  ListChecks,
} from "lucide-react";
import { AGENCY_CONFIG } from "@/lib/content";

export async function generateMetadata() {
  const t = await getTranslations("concernPage");
  return {
    title: `${t("hero.eyebrow")} | ${AGENCY_CONFIG.shortName}`,
    description: t("hero.description"),
  };
}

const concernIcons = [Newspaper, MessageSquareWarning, UserX, Database, Scale, Flame];
const stepIcons = [MessageCircle, ClipboardCheck, ListChecks];

export default async function ConcernPage() {
  const t = await getTranslations("concernPage");
  const concerns = t.raw("concerns.items") as { title: string; description: string }[];
  const steps = t.raw("process.steps") as { title: string; description: string }[];

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

      {/* Concerns */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
              {t("concerns.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("concerns.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concerns.map((concern, i) => {
              const Icon = concernIcons[i] ?? Newspaper;
              return (
                <div key={i} className="p-6 border border-border rounded-xl bg-card">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{concern.title}</h3>
                  <p className="text-muted-foreground text-sm">{concern.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-card/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
              {t("process.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("process.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => {
              const Icon = stepIcons[i] ?? MessageCircle;
              return (
                <div key={i} className="text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-accent/30 bg-card mb-4">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
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
