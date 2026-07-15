import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import {
  allAudienceStaticParams,
  getAudienceContent,
  PRODUCTS,
} from '@/lib/products/registry'
import {
  productAudiencePath,
  productBasePath,
  productCaseStudiesPath,
} from '@/lib/products/nav'
import { AUDIENCE_ORDER } from '@/lib/products/audiences'
import { getProductDesign, getSectionVariants } from '@/lib/products/design'
import { AGENCY_CONFIG } from '@/lib/content'
import { ProductPageShell } from '@/components/products/product-page-shell'
import { ProductHero } from '@/components/products/product-hero'
import { AudiencePains } from '@/components/products/audience-pains'
import { OutcomesGrid } from '@/components/products/outcomes-grid'
import { CapabilitiesList } from '@/components/products/capabilities-list'
import { ProcessSteps } from '@/components/products/process-steps'
import { FaqAccordion } from '@/components/products/faq-accordion'
import { RelatedLinks } from '@/components/products/related-links'
import { ProductCta } from '@/components/products/product-cta'

type PageProps = {
  params: Promise<{ locale: string; product: string; audience: string }>
}

export function generateStaticParams() {
  return allAudienceStaticParams()
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { product: productId, audience: audienceId } = await params
  const data = getAudienceContent(productId, audienceId)
  if (!data) return { title: 'Page not found' }

  return {
    title: `${data.audience.seoTitle} | ${AGENCY_CONFIG.shortName}`,
    description: data.audience.seoDescription,
    alternates: {
      canonical: productAudiencePath(data.product.id, data.audienceId),
    },
    openGraph: {
      title: data.audience.seoTitle,
      description: data.audience.seoDescription,
      type: 'website',
    },
  }
}

export default async function ProductAudiencePage({ params }: PageProps) {
  const { product: productId, audience: audienceId } = await params

  if (audienceId === 'case-studies') notFound()

  const data = getAudienceContent(productId, audienceId)
  if (!data) notFound()

  const { product, audience, audienceId: aid } = data
  const design = getProductDesign(product.id)
  const variants = getSectionVariants(product.id)
  const base = productBasePath(product.id)

  const siblingAudiences = AUDIENCE_ORDER.filter((id) => id !== aid).map(
    (id) => ({
      label: product.audiences[id].label,
      description: product.audiences[id].headline,
      href: productAudiencePath(product.id, id),
    }),
  )

  const relatedProducts = product.relatedProductIds.map((id) => ({
    label: PRODUCTS[id].name,
    description: PRODUCTS[id].tagline,
    href: productBasePath(id),
  }))

  const faqs = [...audience.faqs, ...product.faqs].slice(0, 6)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  /** Per-product content rhythm on audience pages */
  const sectionRhythm = {
    'reputation-management': [
      'pains',
      'outcomes',
      'capabilities',
      'process',
      'faqs',
    ],
    'privacy-protection': [
      'capabilities',
      'pains',
      'outcomes',
      'process',
      'faqs',
    ],
    'executive-privacy': [
      'process',
      'outcomes',
      'pains',
      'capabilities',
      'faqs',
    ],
    'concierge-privacy': [
      'outcomes',
      'process',
      'pains',
      'capabilities',
      'faqs',
    ],
    'negative-suppression': [
      'pains',
      'capabilities',
      'outcomes',
      'process',
      'faqs',
    ],
  } as const

  const blocks: Record<string, ReactNode> = {
    pains: (
      <AudiencePains
        key="pains"
        items={audience.painPoints}
        variant={variants.pains}
      />
    ),
    outcomes: (
      <OutcomesGrid
        key="outcomes"
        items={audience.outcomes}
        variant={variants.outcomes}
      />
    ),
    capabilities: (
      <CapabilitiesList
        key="capabilities"
        items={product.capabilities}
        variant={variants.capabilities}
      />
    ),
    process: (
      <ProcessSteps
        key="process"
        steps={product.process}
        layout={design.processLayout}
      />
    ),
    faqs: (
      <FaqAccordion key="faqs" items={faqs} variant={variants.faq} />
    ),
  }

  return (
    <ProductPageShell>
      <Script
        id={`faq-${product.id}-${aid}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ProductHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: product.shortName, href: base },
          { label: audience.label },
        ]}
        eyebrow={`${product.shortName} · ${audience.label}`}
        title={audience.headline}
        description={audience.supporting}
        primaryCta={{
          label: audience.ctaLabel ?? 'Request a Free Consultation',
          href: '/contact?type=consultation',
        }}
        secondaryCta={{
          label: 'View case studies',
          href: productCaseStudiesPath(product.id),
        }}
        layout={design.heroLayout}
        motifLabel={design.motifLabel}
        signalWord={design.signalWord}
        accentNote={design.accentNote}
      />

      {sectionRhythm[product.id].map((id) => blocks[id])}

      <RelatedLinks title="Other audiences" links={siblingAudiences} />
      <RelatedLinks title="Related products" links={relatedProducts} />
      <ProductCta
        variant={variants.cta}
        title={`Talk about ${product.shortName} for ${audience.label.toLowerCase()}`}
      />
    </ProductPageShell>
  )
}
