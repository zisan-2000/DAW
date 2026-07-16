import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero";
import { LogoMarqueeSection } from "@/components/sections/logo-marquee";

import { StatisticsSection } from "@/components/sections/statistics";
import { ServicesGridSection } from "@/components/sections/services-grid";
import { ValuePropositionSection } from "@/components/sections/value-proposition";
import { FeaturedCaseStudiesSection } from "@/components/sections/featured-case-studies";
import { ProcessSection } from "@/components/sections/process";
import { IndustriesSection } from "@/components/sections/industries";
import { TechStackSection } from "@/components/sections/tech-stack";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { BlogPreviewSection } from "@/components/sections/blog-preview";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroParallaxSection } from "@/components/sections/company-intro";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "homepage.meta" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function Page() {
  return (
    <div className="w-full overflow-x-clip">
      {/* Phase 1 — First impression */}
      <HeroSection />
      <LogoMarqueeSection />

      {/* Phase 2 — Trust + offer */}
      <HeroParallaxSection />
      <StatisticsSection />
      <ServicesGridSection />

      {/* Phase 3 — Differentiation */}
      <ValuePropositionSection />
      <FeaturedCaseStudiesSection />
      <ProcessSection />

      {/* Phase 4 — Authority */}
      <IndustriesSection />
      <TechStackSection />
      <TestimonialsSection />
      <WhyChooseUsSection />

      {/* Phase 5 — Insights + close */}
      <BlogPreviewSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
