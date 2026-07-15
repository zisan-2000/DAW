export const SERVICE_SLUGS = [
  'ai-reputation-management',
  'executive-branding',
  'review-management',
  'reddit-removal',
  'wikipedia',
  'google-maps-seo',
  'earned-media-marketing',
  'expert-witness-services',
  'personal-reputation-management',
  'business-reputation-management',
] as const

export type ServiceSlug = (typeof SERVICE_SLUGS)[number]

export type FaqItem = {
  question: string
  answer: string
}

export type ProcessStep = {
  title: string
  description: string
}

export type ServiceDefinition = {
  slug: ServiceSlug
  name: string
  shortName: string
  tagline: string
  description: string
  challenges: string[]
  outcomes: string[]
  capabilities: string[]
  process: ProcessStep[]
  faqs: FaqItem[]
  whoFor: { label: string; description: string }[]
  relatedSlugs: ServiceSlug[]
  seoTitle: string
  seoDescription: string
  navLabel: string
}
