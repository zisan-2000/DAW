import type { ProductCaseStudy } from '../types'

/** Demo case studies per product — replace with verified outcomes before launch */
export const PRODUCT_CASE_STUDIES: ProductCaseStudy[] = [
  {
    id: 'rm-1',
    title: 'Professional search narrative rebuild',
    slug: 'professional-search-narrative-rebuild',
    productId: 'reputation-management',
    audienceIds: ['individuals', 'job-seekers', 'executives'],
    industryLabel: 'Professional services',
    summary:
      '[SAMPLE] Outdated personal results overshadowed current professional credentials.',
    challenge:
      'Legacy content ranked above current profiles, creating confusion for clients and employers.',
    solution:
      'Search audit, preferred asset publishing and ongoing monitoring under a reputation roadmap.',
    resultsNote: '[INSERT VERIFIED RESULTS]',
    results: [
      { value: '[XX]', label: 'Preferred assets strengthened (placeholder)' },
      { value: '[XX]', label: 'Monitoring cadence (placeholder)' },
      { value: '[XX]', label: 'Review cycle (placeholder)' },
    ],
    isSample: true,
  },
  {
    id: 'pp-1',
    title: 'Household data-broker reduction',
    slug: 'household-data-broker-reduction',
    productId: 'privacy-protection',
    audienceIds: ['individuals', 'executives', 'small-businesses'],
    industryLabel: 'Privacy',
    summary:
      '[SAMPLE] Personal contact details repeatedly resurfaced on people-search sites.',
    challenge:
      'Opt-outs were incomplete and listings reappeared without a maintenance process.',
    solution:
      'Exposure map, prioritised opt-outs and recurring re-listing checks.',
    resultsNote: '[INSERT VERIFIED RESULTS]',
    results: [
      { value: '[XX]', label: 'Sources addressed (placeholder)' },
      { value: '[XX]', label: 'Re-scan interval (placeholder)' },
      { value: '[XX]', label: 'Open items tracked (placeholder)' },
    ],
    isSample: true,
  },
  {
    id: 'ep-1',
    title: 'Executive household exposure programme',
    slug: 'executive-household-exposure',
    productId: 'executive-privacy',
    audienceIds: ['executives', 'large-companies'],
    industryLabel: 'Executive',
    summary:
      '[SAMPLE] Leadership home and contact details were easy to find alongside corporate coverage.',
    challenge:
      'Personal and corporate identities mixed in public aggregators, raising safety concerns.',
    solution:
      'Confidential briefing, household-focused opt-outs and EA enablement.',
    resultsNote: '[INSERT VERIFIED RESULTS]',
    results: [
      { value: '[XX]', label: 'Priority sources (placeholder)' },
      { value: '[XX]', label: 'Staff protocols (placeholder)' },
      { value: '[XX]', label: 'Report cadence (placeholder)' },
    ],
    isSample: true,
  },
  {
    id: 'cp-1',
    title: 'Concierge multi-property privacy sprint',
    slug: 'concierge-multi-property-privacy',
    productId: 'concierge-privacy',
    audienceIds: ['executives', 'large-companies', 'individuals'],
    industryLabel: 'Concierge',
    summary:
      '[SAMPLE] Complex multi-person exposure needed a single owner and faster follow-through.',
    challenge:
      'Scattered opt-out attempts lacked ownership and status visibility for the principal.',
    solution:
      'Dedicated concierge lead, priority matrix and weekly status notes.',
    resultsNote: '[INSERT VERIFIED RESULTS]',
    results: [
      { value: '[XX]', label: 'Workstreams owned (placeholder)' },
      { value: '[XX]', label: 'Status cadence (placeholder)' },
      { value: '[XX]', label: 'Open escalations (placeholder)' },
    ],
    isSample: true,
  },
  {
    id: 'ns-1',
    title: 'SERP mix improvement for brand search',
    slug: 'serp-mix-improvement-brand-search',
    productId: 'negative-suppression',
    audienceIds: ['small-businesses', 'large-companies', 'executives'],
    industryLabel: 'Search',
    summary:
      '[SAMPLE] Damaging results dominated brand queries while preferred pages lacked equity.',
    challenge:
      'Limited positive assets competed poorly against older critical coverage.',
    solution:
      'Preferred asset programme plus ethical suppression planning and SERP tracking.',
    resultsNote: '[INSERT VERIFIED RESULTS]',
    results: [
      { value: '[XX]', label: 'Preferred URLs (placeholder)' },
      { value: '[XX]', label: 'Tracking window (placeholder)' },
      { value: '[XX]', label: 'Review checkpoints (placeholder)' },
    ],
    isSample: true,
  },
]
