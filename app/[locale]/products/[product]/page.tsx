import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import {
  allProductStaticParams,
  getProduct,
  getProductCaseStudies,
  PRODUCTS,
} from '@/lib/products/registry'
import {
  productAudiencePath,
  productBasePath,
  productCaseStudiesPath,
} from '@/lib/products/nav'
import { AUDIENCE_ORDER } from '@/lib/products/audiences'
import { AGENCY_CONFIG } from '@/lib/content'
import { ProductPageShell } from '@/components/products/product-page-shell'
import { ProductHero } from '@/components/products/product-hero'
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
  const { product: productId } = await params
  const product = getProduct(productId)
  if (!product) return { title: 'Product not found' }

  return {
    title: `${product.seoTitle} | ${AGENCY_CONFIG.shortName}`,
    description: product.seoDescription,
    alternates: {
      canonical: productBasePath(product.id),
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      type: 'website',
    },
  }
}

export default async function ProductHubPage({ params }: PageProps) {
  const { product: productId } = await params
  const product = getProduct(productId)
  if (!product) notFound()

  const caseStudies = getProductCaseStudies(product.id).slice(0, 2)
  const base = productBasePath(product.id)

  const audienceLinks = AUDIENCE_ORDER.map((id) => ({
    label: product.audiences[id].label,
    description: product.audiences[id].supporting,
    href: productAudiencePath(product.id, id),
  }))

  const relatedLinks = product.relatedProductIds.map((id) => ({
    label: PRODUCTS[id].name,
    description: PRODUCTS[id].tagline,
    href: productBasePath(id),
  }))

  return (
    <ProductPageShell>
      <ProductHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: base },
          { label: product.shortName },
        ]}
        eyebrow={product.shortName}
        title={product.name}
        description={product.description}
        primaryCta={{
          label: 'Request a Free Consultation',
          href: '/contact?type=consultation',
        }}
        secondaryCta={{
          label: 'View case studies',
          href: productCaseStudiesPath(product.id),
        }}
      />

      <RelatedLinks title="Who it’s for" links={audienceLinks} />
      <CapabilitiesList items={product.capabilities} />
      <ProcessSteps steps={product.process} />

      <section className="border-t border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-surface-ink-foreground sm:text-3xl">
              Selected work
            </h2>
            <Link
              href={productCaseStudiesPath(product.id)}
              className="text-sm font-semibold text-accent hover:underline"
            >
              View all case studies
            </Link>
          </div>
          <ProductCaseStudyCards studies={caseStudies} />
        </div>
      </section>

      <FaqAccordion items={product.faqs} />
      <RelatedLinks title="Related products" links={relatedLinks} />
      <ProductCta />
    </ProductPageShell>
  )
}
