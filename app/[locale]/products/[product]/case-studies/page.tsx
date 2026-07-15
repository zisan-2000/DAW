import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
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
import { AGENCY_CONFIG } from '@/lib/content'
import { ProductPageShell } from '@/components/products/product-page-shell'
import { ProductHero } from '@/components/products/product-hero'
import { ProductCaseStudyCards } from '@/components/products/product-case-study-cards'
import { ProductCta } from '@/components/products/product-cta'
import { AudienceShowcase } from '@/components/products/audience-showcase'
import { AUDIENCE_ORDER } from '@/lib/products/audiences'

type PageProps = {
  params: Promise<{ locale: string; product: string }>
}

export function generateStaticParams() {
  return allProductStaticParams()
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { product: productId } = await params
  const product = getProduct(productId)
  if (!product) return { title: 'Case studies not found' }

  const title = `${product.shortName} Case Studies`
  const description = `Demonstration case studies for ${product.name}. Replace sample results with verified outcomes before launch.`

  return {
    title: `${title} | ${AGENCY_CONFIG.shortName}`,
    description,
    alternates: {
      canonical: productCaseStudiesPath(product.id),
    },
  }
}

export default async function ProductCaseStudiesPage({ params }: PageProps) {
  const { product: productId } = await params
  const product = getProduct(productId)
  if (!product) notFound()

  const design = getProductDesign(product.id)
  const variants = getSectionVariants(product.id)
  const studies = getProductCaseStudies(product.id)
  const base = productBasePath(product.id)

  const audienceLinks = AUDIENCE_ORDER.map((id) => ({
    label: product.audiences[id].label,
    description: product.audiences[id].supporting,
    href: productAudiencePath(product.id, id),
  }))

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: product.shortName,
        item: base,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Case Studies',
        item: productCaseStudiesPath(product.id),
      },
    ],
  }

  return (
    <ProductPageShell>
      <Script
        id={`breadcrumb-${product.id}-cases`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ProductHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: product.shortName, href: base },
          { label: 'Case Studies' },
        ]}
        eyebrow={`${product.shortName} · Case studies`}
        title={`${product.shortName} case studies`}
        description="Demonstration projects with sample challenges and placeholder results. Replace with verified client outcomes and permissioned details before launch."
        primaryCta={{
          label: 'Request a Free Consultation',
          href: '/contact?type=consultation',
        }}
        secondaryCta={{
          label: `About ${product.shortName}`,
          href: base,
        }}
        layout={design.heroLayout}
        motifLabel={design.motifLabel}
        signalWord={design.signalWord}
        accentNote={design.accentNote}
      />

      <section className="border-t border-white/8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[11px] tracking-[0.16em] text-accent uppercase">
              Archive · {studies.length} entries
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-surface-ink-foreground">
              Work in this practice
            </h2>
          </div>
          <ProductCaseStudyCards studies={studies} layout={variants.cases} />
        </div>
      </section>

      <AudienceShowcase
        title="Explore by audience"
        layout={design.audienceLayout}
        links={audienceLinks}
      />
      <ProductCta variant={variants.cta} />
    </ProductPageShell>
  )
}
