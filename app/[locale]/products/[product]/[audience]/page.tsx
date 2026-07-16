import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import {
  allAudienceStaticParams,
  getAudienceContent,
} from '@/lib/products/registry'
import {
  productAudiencePath,
  productBasePath,
  productCaseStudiesPath,
} from '@/lib/products/nav'
import { AUDIENCE_ORDER } from '@/lib/products/audiences'
import { getProductDesign, getSectionVariants } from '@/lib/products/design'
import {
  getLocalizedDesign,
  getLocalizedProduct,
} from '@/lib/products/i18n'
import type { ProductId } from '@/lib/products/types'
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
import { JsonLd } from '@/components/seo/json-ld'

type PageProps = {
  params: Promise<{ locale: string; product: string; audience: string }>
}

export function generateStaticParams() {
  return allAudienceStaticParams()
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, product: productId, audience: audienceId } = await params
  const data = getAudienceContent(productId, audienceId)
  const t = await getTranslations({ locale, namespace: 'products' })
  if (!data) return { title: t('ui.pageNotFound') }

  const copy = getLocalizedProduct(t, data.product.id)
  const audience = copy.audiences[data.audienceId]

  return {
    title: `${audience.seoTitle} | ${AGENCY_CONFIG.shortName}`,
    description: audience.seoDescription,
    alternates: {
      canonical: productAudiencePath(data.product.id, data.audienceId),
    },
    openGraph: {
      title: audience.seoTitle,
      description: audience.seoDescription,
      type: 'website',
    },
  }
}

export default async function ProductAudiencePage({ params }: PageProps) {
  const { locale, product: productId, audience: audienceId } = await params

  if (audienceId === 'case-studies') notFound()

  const data = getAudienceContent(productId, audienceId)
  if (!data) notFound()

  const { product, audienceId: aid } = data
  const t = await getTranslations({ locale, namespace: 'products' })
  const copy = getLocalizedProduct(t, product.id)
  const designCopy = getLocalizedDesign(t, product.id)
  const audience = copy.audiences[aid]
  const design = getProductDesign(product.id)
  const variants = getSectionVariants(product.id)
  const base = productBasePath(product.id)

  const siblingAudiences = AUDIENCE_ORDER.filter((id) => id !== aid).map(
    (id) => ({
      label: copy.audiences[id].label,
      description: copy.audiences[id].headline,
      href: productAudiencePath(product.id, id),
    }),
  )

  const relatedProducts = product.relatedProductIds.map((id) => {
    const related = getLocalizedProduct(t, id as ProductId)
    return {
      label: related.name,
      description: related.tagline,
      href: productBasePath(id),
    }
  })

  const faqs = [...audience.faqs, ...copy.faqs].slice(0, 6)

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
        items={copy.capabilities}
        variant={variants.capabilities}
      />
    ),
    process: (
      <ProcessSteps
        key="process"
        steps={copy.process}
        layout={design.processLayout}
      />
    ),
    faqs: (
      <FaqAccordion key="faqs" items={faqs} variant={variants.faq} />
    ),
  }

  return (
    <ProductPageShell>
      <JsonLd id={`faq-${product.id}-${aid}`} data={faqSchema} />
      <ProductHero
        breadcrumbs={[
          { label: t('ui.breadcrumbHome'), href: '/' },
          { label: copy.shortName, href: base },
          { label: audience.label },
        ]}
        eyebrow={`${copy.shortName} · ${audience.label}`}
        title={audience.headline}
        description={audience.supporting}
        primaryCta={{
          label: audience.ctaLabel || t('ui.requestConsultation'),
          href: '/contact?type=consultation',
        }}
        secondaryCta={{
          label: t('ui.viewCaseStudies'),
          href: productCaseStudiesPath(product.id),
        }}
        layout={design.heroLayout}
        motifLabel={designCopy.motifLabel}
        signalWord={designCopy.signalWord}
        accentNote={designCopy.accentNote}
      />

      {sectionRhythm[product.id].map((id) => blocks[id])}

      <RelatedLinks title={t('ui.otherAudiences')} links={siblingAudiences} />
      <RelatedLinks title={t('ui.relatedProducts')} links={relatedProducts} />
      <ProductCta
        variant={variants.cta}
        title={t('ui.ctaTalkAbout', {
          shortName: copy.shortName,
          audience: audience.label,
        })}
      />
    </ProductPageShell>
  )
}
