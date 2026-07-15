import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero'
import { LogoMarqueeSection } from '@/components/sections/logo-marquee'
import { CompanyIntroSection } from '@/components/sections/company-intro'
import { StatisticsSection } from '@/components/sections/statistics'
import { ServicesGridSection } from '@/components/sections/services-grid'
import { ValuePropositionSection } from '@/components/sections/value-proposition'
import { FeaturedCaseStudiesSection } from '@/components/sections/featured-case-studies'
import { ProcessSection } from '@/components/sections/process'
import { IndustriesSection } from '@/components/sections/industries'
import { TechStackSection } from '@/components/sections/tech-stack'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { BlogPreviewSection } from '@/components/sections/blog-preview'
import { FinalCtaSection } from '@/components/sections/final-cta'
import { AGENCY_CONFIG } from '@/lib/content'

export const metadata: Metadata = {
  title: `${AGENCY_CONFIG.shortName} | Digital Growth Partner — Web, SEO, Marketing & Software`,
  description:
    'Strategy, technology and marketing built to accelerate growth. Conversion-focused websites, performance marketing, SEO and scalable software for ambitious businesses.',
  keywords:
    'digital agency, growth partner, web development, SEO, digital marketing, branding, software development',
}

export default function Page() {
  return (
    <div className="w-full overflow-x-clip">
      {/* Phase 1 — First impression */}
      <HeroSection />
      <LogoMarqueeSection />

      {/* Phase 2 — Trust + offer */}
      <CompanyIntroSection />
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
      <FinalCtaSection />
    </div>
  )
}
