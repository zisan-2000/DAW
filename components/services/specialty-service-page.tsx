import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import type { ServiceDefinition } from '@/lib/services/types'
import { getServiceDesign } from '@/lib/services/design'
import { getRelatedServices } from '@/lib/services/registry'
import { ProductPageShell } from '@/components/products/product-page-shell'
import { ProductHero } from '@/components/products/product-hero'
import { AudiencePains } from '@/components/products/audience-pains'
import { OutcomesGrid } from '@/components/products/outcomes-grid'
import { CapabilitiesList } from '@/components/products/capabilities-list'
import { ProcessSteps } from '@/components/products/process-steps'
import { FaqAccordion } from '@/components/products/faq-accordion'
import { RelatedLinks } from '@/components/products/related-links'
import { ProductCta } from '@/components/products/product-cta'
import { ArrowUpRight } from 'lucide-react'

export function SpecialtyServicePage({ service }: { service: ServiceDefinition }) {
  const design = getServiceDesign(service.slug)
  const related = getRelatedServices(service.slug).map((s) => ({
    label: s.name,
    description: s.tagline,
    href: `/services/${s.slug}`,
  }))

  const blocks: Record<(typeof design.sectionOrder)[number], ReactNode> = {
    whoFor: (
      <section
        key="whoFor"
        className="border-t border-border/70 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Who it’s for
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {service.whoFor.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="font-display text-lg font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ),
    challenges: (
      <AudiencePains
        key="challenges"
        title="Common challenges"
        items={service.challenges}
        variant={design.challengesVariant}
      />
    ),
    outcomes: (
      <OutcomesGrid
        key="outcomes"
        title="Outcomes this service supports"
        items={service.outcomes}
        variant={design.outcomesVariant}
      />
    ),
    capabilities: (
      <CapabilitiesList
        key="capabilities"
        title="What’s included"
        items={service.capabilities}
        variant={design.capabilitiesVariant}
      />
    ),
    process: (
      <ProcessSteps
        key="process"
        title="How we work"
        steps={service.process}
        layout={design.processLayout}
      />
    ),
    faqs: (
      <FaqAccordion
        key="faqs"
        items={service.faqs}
        variant={design.faqVariant}
      />
    ),
    related: (
      <RelatedLinks
        key="related"
        title="Related services"
        links={related}
      />
    ),
  }

  return (
    <ProductPageShell>
      <ProductHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.shortName },
        ]}
        eyebrow={service.shortName}
        title={service.name}
        description={service.description}
        primaryCta={{
          label: 'Request a Free Consultation',
          href: '/contact?type=consultation',
        }}
        secondaryCta={{
          label: 'View all services',
          href: '/services',
        }}
        layout={design.heroLayout}
        motifLabel={design.motifLabel}
        signalWord={design.signalWord}
        accentNote={design.accentNote}
      />

      {/* Tagline strip */}
      <section className="border-b border-border/70 bg-muted/25 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-display text-lg font-medium text-foreground sm:text-xl">
            {service.tagline}
          </p>
          <Link
            href="/contact?type=consultation"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
          >
            Talk to a specialist
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {design.sectionOrder.map((id) => blocks[id])}

      <ProductCta
        variant={design.ctaVariant}
        title={`Start a conversation about ${service.shortName}`}
        description="Share your goals and constraints. We’ll recommend a practical path forward—no pressure, no generic pitch."
      />
    </ProductPageShell>
  )
}
