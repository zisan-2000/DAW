"use client";

import { useTranslations } from "next-intl";
import { CanvasText } from "@/components/ui/canvas-text";
import {
  HeroParallax,
  type ParallaxProduct,
} from "@/components/ui/hero-parallax";

const CARD_KEYS = [
  "onlineReputationManagement",
  "personalReputation",
  "corporateReputation",
  "reviewManagement",
  "googleSearchCleanup",

  "negativeContentSuppression",
  "seoReputation",
  "generativeEngineOptimization",
  "aiReputationManagement",
  "wikipediaManagement",

  "crisisManagement",
  "executiveBranding",
  "digitalPR",
  "brandMonitoring",
  "contentStrategy",
] as const;

const CARD_IMAGES: Record<(typeof CARD_KEYS)[number], string> = {
  onlineReputationManagement: "/images/onlineReputationManagement.jpg",
  personalReputation: "/images/personalReputation.jpg",
  corporateReputation: "/images/corporateReputation.jpg",
  reviewManagement: "/images/reviewManagement.jpg",
  googleSearchCleanup: "/images/googleSearchCleanup.jpg",

  negativeContentSuppression: "/images/negativeContentSuppression.jpg",
  seoReputation: "/images/seoReputation.jpg",
  generativeEngineOptimization: "/images/generativeEngineOptimization.jpg",
  aiReputationManagement: "/images/aiReputationManagement.jpg",
  wikipediaManagement: "/images/wikipediaManagement.jpg",

  crisisManagement: "/images/crisisManagement.jpg",
  executiveBranding: "/images/executiveBranding.jpg",
  digitalPR: "/images/digitalPR.JPG",
  brandMonitoring: "/images/brandMonitoring.jpg",
  contentStrategy: "/images/contentStrategy.jpg",
};

export function HeroParallaxSection() {
  const t = useTranslations("homepage.heroParallax");

  const products: ParallaxProduct[] = CARD_KEYS.map((key) => ({
    title: t(`cards.${key}.title`),
    description: t(`cards.${key}.description`),
    link: "#",
    thumbnail: CARD_IMAGES[key],
  }));

  return (
    <section
      aria-labelledby="hero-parallax-heading"
      className="relative w-full bg-background"
    >
      <HeroParallax
        products={products}
        header={
          <div className="absolute inset-x-0 top-0 z-20 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-2xl rounded-3xl bg-background/70 p-6 backdrop-blur-md sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                {t("eyebrow")}
              </p>
              <h2
                id="hero-parallax-heading"
                className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl"
              >
                {t("title")}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t("description")}
              </p>
            </div>
          </div>
        }
      />
    </section>
  );
}
