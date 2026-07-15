import type { AudienceId, ProductDefinition, ProductId } from './types'
import { PRODUCT_IDS } from './types'
import { isAudienceId } from './audiences'
import { isProductId } from './nav'
import { reputationManagement } from './content/reputation-management'
import { privacyProtection } from './content/privacy-protection'
import { executivePrivacy } from './content/executive-privacy'
import { conciergePrivacy } from './content/concierge-privacy'
import { negativeSuppression } from './content/negative-suppression'
import { PRODUCT_CASE_STUDIES } from './content/case-studies'

export const PRODUCTS: Record<ProductId, ProductDefinition> = {
  'reputation-management': reputationManagement,
  'privacy-protection': privacyProtection,
  'executive-privacy': executivePrivacy,
  'concierge-privacy': conciergePrivacy,
  'negative-suppression': negativeSuppression,
}

export function getProduct(id: string): ProductDefinition | undefined {
  if (!isProductId(id)) return undefined
  return PRODUCTS[id]
}

export function getAudienceContent(productId: string, audienceId: string) {
  const product = getProduct(productId)
  if (!product || !isAudienceId(audienceId)) return undefined
  return {
    product,
    audienceId: audienceId as AudienceId,
    audience: product.audiences[audienceId],
  }
}

export function getProductCaseStudies(productId: string) {
  if (!isProductId(productId)) return []
  return PRODUCT_CASE_STUDIES.filter((cs) => cs.productId === productId)
}

export function allProductStaticParams() {
  return PRODUCT_IDS.map((product) => ({ product }))
}

export function allAudienceStaticParams() {
  return PRODUCT_IDS.flatMap((product) =>
    (Object.keys(PRODUCTS[product].audiences) as AudienceId[]).map(
      (audience) => ({ product, audience }),
    ),
  )
}

export { PRODUCT_CASE_STUDIES, PRODUCT_IDS }
