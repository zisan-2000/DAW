import type { ProductId } from './types'

export type HeroLayout =
  | 'split-orbit'
  | 'centered-shield'
  | 'briefing-panel'
  | 'concierge-wide'
  | 'serp-signal'

export type AudienceLayout = 'bento' | 'list' | 'magazine' | 'rail' | 'matrix'
export type ProcessLayout = 'timeline' | 'cards' | 'rail' | 'steps-wide' | 'serp-flow'
export type SectionTone = 'ink' | 'panel' | 'lift'

export type ProductDesign = {
  heroLayout: HeroLayout
  audienceLayout: AudienceLayout
  processLayout: ProcessLayout
  motifLabel: string
  signalWord: string
  accentNote: string
  sectionOrder: Array<
    | 'audiences'
    | 'capabilities'
    | 'process'
    | 'cases'
    | 'faqs'
    | 'related'
  >
}

export const PRODUCT_DESIGNS: Record<ProductId, ProductDesign> = {
  'reputation-management': {
    heroLayout: 'split-orbit',
    audienceLayout: 'bento',
    processLayout: 'timeline',
    motifLabel: '360° system',
    signalWord: 'Visibility',
    accentNote: 'Search · Reviews · Narrative · Monitor',
    sectionOrder: [
      'audiences',
      'capabilities',
      'process',
      'cases',
      'faqs',
      'related',
    ],
  },
  'privacy-protection': {
    heroLayout: 'centered-shield',
    audienceLayout: 'list',
    processLayout: 'cards',
    motifLabel: 'Exposure control',
    signalWord: 'Privacy',
    accentNote: 'Audit · Opt-out · Recheck · Maintain',
    sectionOrder: [
      'capabilities',
      'audiences',
      'process',
      'cases',
      'faqs',
      'related',
    ],
  },
  'executive-privacy': {
    heroLayout: 'briefing-panel',
    audienceLayout: 'magazine',
    processLayout: 'rail',
    motifLabel: 'Discreet protocol',
    signalWord: 'Discretion',
    accentNote: 'Brief · Baseline · Remediate · Vigilance',
    sectionOrder: [
      'process',
      'audiences',
      'capabilities',
      'cases',
      'faqs',
      'related',
    ],
  },
  'concierge-privacy': {
    heroLayout: 'concierge-wide',
    audienceLayout: 'rail',
    processLayout: 'steps-wide',
    motifLabel: 'Dedicated ownership',
    signalWord: 'Concierge',
    accentNote: 'Assign · Prioritise · Execute · Maintain',
    sectionOrder: [
      'audiences',
      'process',
      'capabilities',
      'cases',
      'faqs',
      'related',
    ],
  },
  'negative-suppression': {
    heroLayout: 'serp-signal',
    audienceLayout: 'matrix',
    processLayout: 'serp-flow',
    motifLabel: 'SERP strategy',
    signalWord: 'Suppression',
    accentNote: 'Audit · Build · Suppress · Measure',
    sectionOrder: [
      'cases',
      'capabilities',
      'audiences',
      'process',
      'faqs',
      'related',
    ],
  },
}

export function getProductDesign(productId: ProductId): ProductDesign {
  return PRODUCT_DESIGNS[productId]
}

/** Secondary visual variants derived from each product’s design identity */
export function getSectionVariants(productId: ProductId) {
  const map = {
    'reputation-management': {
      capabilities: 'featured' as const,
      pains: 'grid' as const,
      outcomes: 'cards' as const,
      cta: 'centered' as const,
      faq: 'boxed' as const,
      cases: 'grid' as const,
    },
    'privacy-protection': {
      capabilities: 'dense' as const,
      pains: 'stacked' as const,
      outcomes: 'editorial' as const,
      cta: 'split' as const,
      faq: 'wide' as const,
      cases: 'stack' as const,
    },
    'executive-privacy': {
      capabilities: 'two-col' as const,
      pains: 'columns' as const,
      outcomes: 'editorial' as const,
      cta: 'minimal' as const,
      faq: 'editorial' as const,
      cases: 'magazine' as const,
    },
    'concierge-privacy': {
      capabilities: 'featured' as const,
      pains: 'grid' as const,
      outcomes: 'strip' as const,
      cta: 'wide' as const,
      faq: 'boxed' as const,
      cases: 'rail' as const,
    },
    'negative-suppression': {
      capabilities: 'dense' as const,
      pains: 'stacked' as const,
      outcomes: 'cards' as const,
      cta: 'signal' as const,
      faq: 'wide' as const,
      cases: 'serp' as const,
    },
  }
  return map[productId]
}
