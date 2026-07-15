import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Lock,
  Search,
  ShieldAlert,
  Trophy,
  ClipboardList,
  Clock,
} from "lucide-react";
import { AGENCY_CONFIG } from "@/lib/content";

export async function generateMetadata() {
  const t = await getTranslations("resourcesPage");
  return {
    title: `${t("hero.eyebrow")} | ${AGENCY_CONFIG.shortName}`,
    description: t("hero.description"),
  };
}

const categoryIcons = [BookOpen, Lock, Search, ShieldAlert, Trophy, ClipboardList];

export default async function ResourcesPage() {
  const t = await getTranslations("resourcesPage");
  const categories = t.raw("categories.items") as {
    title: string;
    description: string;
  }[];
  const articles = t.raw("articles.items") as {
    title: string;
    description: string;
    readTime: string;
  }[];

  return (
    <div className="w-full">
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

      {/* Categories */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
              {t("categories.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("categories.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, i) => {
              const Icon = categoryIcons[i] ?? BookOpen;
              return (
                <div
                  key={i}
                  className="group p-6 border border-border rounded-xl bg-card transition-colors hover:border-accent/40"
                >
                  <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 md:py-32 bg-card/50 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">
              {t("articles.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("articles.title")}
            </h2>
          </div>
          <div className="space-y-4">
            {articles.map((article, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-6 p-6 border border-border rounded-xl bg-card"
              >
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{article.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={13} />
                    {article.readTime}
                  </span>
                </div>
                <ArrowRight size={18} className="mt-1 shrink-0 text-accent" />
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
          <Link href="/contact">
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
