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
} from '@/lib/products/nav'
import { AGENCY_CONFIG } from '@/lib/content'
import { ProductPageShell } from '@/components/products/product-page-shell'
import { ProductHero } from '@/components/products/product-hero'
import { ProductCaseStudyCards } from '@/components/products/product-case-study-cards'
import { ProductCta } from '@/components/products/product-cta'
import { RelatedLinks } from '@/components/products/related-links'
import { AUDIENCE_ORDER } from '@/lib/products/audiences'
import { productAudiencePath } from '@/lib/products/nav'

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

  const studies = getProductCaseStudies(product.id)
  const base = productBasePath(product.id)

  const audienceLinks = AUDIENCE_ORDER.map((id) => ({
    label: product.audiences[id].label,
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
      />

      <section className="border-t border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductCaseStudyCards studies={studies} />
        </div>
      </section>

      <RelatedLinks title="Explore audiences" links={audienceLinks} />
      <ProductCta />
    </ProductPageShell>
  )
}
