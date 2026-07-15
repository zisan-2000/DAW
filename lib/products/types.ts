export const PRODUCT_IDS = [
  'reputation-management',
  'privacy-protection',
  'executive-privacy',
  'concierge-privacy',
  'negative-suppression',
] as const

export type ProductId = (typeof PRODUCT_IDS)[number]

export const AUDIENCE_IDS = [
  'individuals',
  'job-seekers',
  'small-businesses',
  'executives',
  'large-companies',
] as const

export type AudienceId = (typeof AUDIENCE_IDS)[number]

export type FaqItem = {
  question: string
  answer: string
}

export type ProcessStep = {
  title: string
  description: string
}

export type AudienceContent = {
  label: string
  headline: string
  supporting: string
  painPoints: string[]
  outcomes: string[]
  faqs: FaqItem[]
  seoTitle: string
  seoDescription: string
  ctaLabel?: string
}

export type ProductCaseStudy = {
  id: string
  title: string
  slug: string
  productId: ProductId
  audienceIds: AudienceId[]
  industryLabel: string
  summary: string
  challenge: string
  solution: string
  resultsNote: string
  results: { value: string; label: string }[]
  isSample: boolean
}

export type ProductDefinition = {
  id: ProductId
  name: string
  shortName: string
  tagline: string
  description: string
  capabilities: string[]
  process: ProcessStep[]
  faqs: FaqItem[]
  audiences: Record<AudienceId, AudienceContent>
  seoTitle: string
  seoDescription: string
  relatedProductIds: ProductId[]
}
