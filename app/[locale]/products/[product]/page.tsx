import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import {
  allProductStaticParams,
  getProduct,
  getProductCaseStudies,
} from '@/lib/products/registry'
import {
  productAudiencePath,
  productBasePath,
  productCaseStudiesPath,
} from '@/lib/products/nav'
import { AUDIENCE_ORDER } from '@/lib/products/audiences'
import { getProductDesign, getSectionVariants } from '@/lib/products/design'
import {
  getLocalizedCaseStudy,
  getLocalizedDesign,
  getLocalizedProduct,
} from '@/lib/products/i18n'
import type { ProductId } from '@/lib/products/types'
import { AGENCY_CONFIG } from '@/lib/content'
import { ProductPageShell } from '@/components/products/product-page-shell'
import { ProductHero } from '@/components/products/product-hero'
import { AudienceShowcase } from '@/components/products/audience-showcase'
import { CapabilitiesList } from '@/components/products/capabilities-list'
import { ProcessSteps } from '@/components/products/process-steps'
import { FaqAccordion } from '@/components/products/faq-accordion'
import { RelatedLinks } from '@/components/products/related-links'
import { ProductCta } from '@/components/products/product-cta'
import { ProductCaseStudyCards } from '@/components/products/product-case-study-cards'

type PageProps = {
  params: Promise<{ locale: string; product: string }>
}

export function generateStaticParams() {
  return allProductStaticParams()
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, product: productId } = await params
  const product = getProduct(productId)
  const t = await getTranslations({ locale, namespace: 'products' })
  if (!product) return { title: t('ui.notFoundTitle') }

  const copy = getLocalizedProduct(t, product.id)

  return {
    title: `${copy.seoTitle} | ${AGENCY_CONFIG.shortName}`,
    description: copy.seoDescription,
    alternates: {
      canonical: productBasePath(product.id),
    },
    openGraph: {
      title: copy.seoTitle,
      description: copy.seoDescription,
      type: 'website',
    },
  }
}

export default async function ProductHubPage({ params }: PageProps) {
  const { locale, product: productId } = await params
  const product = getProduct(productId)
  if (!product) notFound()

  const t = await getTranslations({ locale, namespace: 'products' })
  const copy = getLocalizedProduct(t, product.id)
  const designCopy = getLocalizedDesign(t, product.id)
  const design = getProductDesign(product.id)
  const variants = getSectionVariants(product.id)
  const caseStudies = getProductCaseStudies(product.id)
    .slice(0, 2)
    .map((s) => {
      const loc = getLocalizedCaseStudy(t, s.id)
      return loc ? { ...s, ...loc } : s
    })
  const base = productBasePath(product.id)

  const audienceLinks = AUDIENCE_ORDER.map((id) => ({
    label: copy.audiences[id].label,
    description: copy.audiences[id].supporting,
    href: productAudiencePath(product.id, id),
  }))

  const relatedLinks = product.relatedProductIds.map((id) => {
    const related = getLocalizedProduct(t, id as ProductId)
    return {
      label: related.name,
      description: related.tagline,
      href: productBasePath(id),
    }
  })

  const sections: Record<(typeof design.sectionOrder)[number], ReactNode> = {
    audiences: (
      <AudienceShowcase
        key="audiences"
        layout={design.audienceLayout}
        links={audienceLinks}
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
    cases: (
      <section
        key="cases"
        className="border-t border-border/70 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[11px] tracking-[0.16em] text-accent uppercase">
                {designCopy.signalWord}
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {t('ui.selectedWork')}
              </h2>
            </div>
            <Link
              href={productCaseStudiesPath(product.id)}
              className="text-sm font-semibold text-accent hover:underline"
            >
              {t('ui.viewAllCaseStudies')}
            </Link>
          </div>
          <ProductCaseStudyCards
            studies={caseStudies}
            layout={variants.cases}
          />
        </div>
      </section>
    ),
    faqs: (
      <FaqAccordion
        key="faqs"
        items={copy.faqs}
        variant={variants.faq}
      />
    ),
    related: (
      <RelatedLinks
        key="related"
        title={t('ui.relatedProducts')}
        links={relatedLinks}
      />
    ),
  }

  return (
    <ProductPageShell>
      <ProductHero
        breadcrumbs={[
          { label: t('ui.breadcrumbHome'), href: '/' },
          { label: t('ui.breadcrumbProducts'), href: base },
          { label: copy.shortName },
        ]}
        eyebrow={copy.shortName}
        title={copy.name}
        description={copy.description}
        primaryCta={{
          label: t('ui.requestConsultation'),
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

      {design.sectionOrder.map((id) => sections[id])}

      <ProductCta
        variant={variants.cta}
        title={t('ui.ctaStartConversation', { shortName: copy.shortName })}
        description={t('ui.ctaStartDescription', { productName: copy.name })}
      />
    </ProductPageShell>
  )
}
