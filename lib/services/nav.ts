import type { ServiceSlug } from './types'
import { SERVICES_SPECIALTY } from './registry'

/** Match header Services dropdown order */
const NAV_SLUG_ORDER: ServiceSlug[] = [
  'personal-reputation-management',
  'business-reputation-management',
  'ai-reputation-management',
  'executive-branding',
  'review-management',
  'reddit-removal',
  'wikipedia',
  'google-maps-seo',
  'earned-media-marketing',
  'expert-witness-services',
]

export const serviceNavItems = [
  {
    label: 'Fix My Search Results',
    href: '/services/fix-my-search-results',
  },
  ...NAV_SLUG_ORDER.map((slug) => ({
    label: SERVICES_SPECIALTY[slug].navLabel,
    href: `/services/${slug}`,
  })),
]
