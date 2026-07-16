import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import {
  allProductStaticParams,
  getProduct,
  getProductCaseStudies,
} from '@/lib/products/registry'
import {
  productBasePath,
  productCaseStudiesPath,
  productAudiencePath,
} from '@/lib/products/nav'
import { getProductDesign, getSectionVariants } from '@/lib/products/design'
import {
  getLocalizedCaseStudy,
  getLocalizedDesign,
  getLocalizedProduct,
} from '@/lib/products/i18n'
import { AGENCY_CONFIG } from '@/lib/content'
import { ProductPageShell } from '@/components/products/product-page-shell'
import { ProductHero } from '@/components/products/product-hero'
import { ProductCaseStudyCards } from '@/components/products/product-case-study-cards'
import { ProductCta } from '@/components/products/product-cta'
import { AudienceShowcase } from '@/components/products/audience-showcase'
import { AUDIENCE_ORDER } from '@/lib/products/audiences'
import { JsonLd } from '@/components/seo/json-ld'

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
  if (!product) return { title: t('ui.caseStudiesNotFound') }

  const copy = getLocalizedProduct(t, product.id)
  const title = t('ui.caseStudiesMetaTitle', { shortName: copy.shortName })
  const description = t('ui.caseStudiesMetaDescription', {
    productName: copy.name,
  })

  return {
    title: `${title} | ${AGENCY_CONFIG.shortName}`,
    description,
    alternates: {
      canonical: productCaseStudiesPath(product.id),
    },
  }
}

export default async function ProductCaseStudiesPage({ params }: PageProps) {
  const { locale, product: productId } = await params
  const product = getProduct(productId)
  if (!product) notFound()

  const t = await getTranslations({ locale, namespace: 'products' })
  const copy = getLocalizedProduct(t, product.id)
  const designCopy = getLocalizedDesign(t, product.id)
  const design = getProductDesign(product.id)
  const variants = getSectionVariants(product.id)
  const studies = getProductCaseStudies(product.id).map((s) => {
    const loc = getLocalizedCaseStudy(t, s.id)
    return loc ? { ...s, ...loc } : s
  })
  const base = productBasePath(product.id)

  const audienceLinks = AUDIENCE_ORDER.map((id) => ({
    label: copy.audiences[id].label,
    description: copy.audiences[id].supporting,
    href: productAudiencePath(product.id, id),
  }))

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('ui.breadcrumbHome'),
        item: '/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: copy.shortName,
        item: base,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: t('ui.breadcrumbCaseStudies'),
        item: productCaseStudiesPath(product.id),
      },
    ],
  }

  return (
    <ProductPageShell>
      <JsonLd
        id={`breadcrumb-${product.id}-cases`}
        data={breadcrumbSchema}
      />

      <ProductHero
        breadcrumbs={[
          { label: t('ui.breadcrumbHome'), href: '/' },
          { label: copy.shortName, href: base },
          { label: t('ui.breadcrumbCaseStudies') },
        ]}
        eyebrow={`${copy.shortName} · ${t('ui.breadcrumbCaseStudies')}`}
        title={t('ui.caseStudiesHeroTitle', { shortName: copy.shortName })}
        description={t('ui.caseStudiesHeroDescription')}
        primaryCta={{
          label: t('ui.requestConsultation'),
          href: '/contact?type=consultation',
        }}
        secondaryCta={{
          label: t('ui.aboutProduct', { shortName: copy.shortName }),
          href: base,
        }}
        layout={design.heroLayout}
        motifLabel={designCopy.motifLabel}
        signalWord={designCopy.signalWord}
        accentNote={designCopy.accentNote}
      />

      <section className="border-t border-border/70 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[11px] tracking-[0.16em] text-accent uppercase">
              {t('ui.archiveEntries', { count: studies.length })}
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {t('ui.workInPractice')}
            </h2>
          </div>
          <ProductCaseStudyCards studies={studies} layout={variants.cases} />
        </div>
      </section>

      <AudienceShowcase
        title={t('ui.exploreByAudience')}
        layout={design.audienceLayout}
        links={audienceLinks}
      />
      <ProductCta variant={variants.cta} />
    </ProductPageShell>
  )
}
