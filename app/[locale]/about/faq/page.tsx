"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

type FaqItem = { question: string; answer: string };
type FaqCategory = { title: string; items: FaqItem[] };

export default function FaqPage() {
  const t = useTranslations("faqPage");
  const categories = t.raw("categories") as FaqCategory[];
  const [openId, setOpenId] = useState<string | null>(null);

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

      {/* FAQ Categories */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 md:px-6 space-y-16">
          {categories.map((category, ci) => (
            <div key={ci}>
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
              <div className="space-y-3">
                {category.items.map((item, ii) => {
                  const id = `${ci}-${ii}`;
                  const isOpen = openId === id;
                  return (
                    <div
                      key={id}
                      className="overflow-hidden rounded-xl border border-border bg-card"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-foreground transition-colors hover:text-accent"
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          size={18}
                          className={`shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-accent" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-card/50">
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
