import type { AudienceId, ProductId } from './types'
import { PRODUCT_IDS } from './types'
import { AUDIENCE_ORDER, AUDIENCE_LABELS } from './audiences'

export type ProductNavItem = {
  label: string
  href: string
}

export type ProductNavSection = {
  id: ProductId
  label: string
  basePath: string
  items: ProductNavItem[]
}

const PRODUCT_NAV_LABELS: Record<ProductId, string> = {
  'reputation-management': '360° Reputation Management',
  'privacy-protection': 'Privacy Protection',
  'executive-privacy': 'Executive Privacy',
  'concierge-privacy': 'Concierge Privacy',
  'negative-suppression': 'Negative Suppression',
}

function audienceNavItems(basePath: string): ProductNavItem[] {
  return [
    ...AUDIENCE_ORDER.map((id) => ({
      label: AUDIENCE_LABELS[id],
      href: `${basePath}/${id}`,
    })),
    {
      label: 'Case Studies',
      href: `${basePath}/case-studies`,
    },
  ]
}

export const productNavSections: ProductNavSection[] = PRODUCT_IDS.map((id) => {
  const basePath = `/products/${id}`
  return {
    id,
    label: PRODUCT_NAV_LABELS[id],
    basePath,
    items: audienceNavItems(basePath),
  }
})

export function productBasePath(productId: ProductId) {
  return `/products/${productId}`
}

export function productAudiencePath(productId: ProductId, audienceId: AudienceId) {
  return `/products/${productId}/${audienceId}`
}

export function productCaseStudiesPath(productId: ProductId) {
  return `/products/${productId}/case-studies`
}

export function isProductId(value: string): value is ProductId {
  return (PRODUCT_IDS as readonly string[]).includes(value)
}
