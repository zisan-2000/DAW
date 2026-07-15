import type { AudienceId, ProductDefinition } from '../types'
import { buildAudienceContent, standardAudienceBlueprints } from './_helpers'

const name = 'Negative Suppression'
const blueprints = standardAudienceBlueprints('search suppression')

const audiences = Object.fromEntries(
  (Object.keys(blueprints) as AudienceId[]).map((id) => [
    id,
    buildAudienceContent(name, 'Negative Suppression', id, {
      ...blueprints[id],
      focus:
        'reducing the visibility of harmful or outdated search results by strengthening preferred assets and applying ethical suppression strategies.',
      headlineVerb: 'Counteract negative visibility for',
      painPoints: [
        'Damaging or outdated pages dominating the first screen of results',
        'Limited positive content competing for attention',
        'Uncertainty about what can and cannot be removed',
      ],
      outcomes: [
        'Stronger preferred pages and profiles',
        'Clear suppression roadmap with realistic expectations',
        'Measurement of SERP composition over time',
      ],
    }),
  ]),
) as ProductDefinition['audiences']

export const negativeSuppression: ProductDefinition = {
  id: 'negative-suppression',
  name,
  shortName: 'Negative Suppression',
  tagline: 'Ethical strategies to reduce harmful search prominence',
  description:
    'Search-focused work that builds preferred assets and applies legitimate suppression tactics so damaging or outdated results carry less weight—without guarantees of removal or ranking.',
  capabilities: [
    'SERP composition analysis',
    'Preferred asset strategy and publishing',
    'Technical and content improvements',
    'Ethical suppression planning',
    'Progress reporting on result mix',
  ],
  process: [
    {
      title: 'SERP audit',
      description: 'Document which results drive risk and which assets can compete.',
    },
    {
      title: 'Build preferred equity',
      description: 'Strengthen authoritative pages, profiles and earned placements.',
    },
    {
      title: 'Suppression execution',
      description: 'Apply coordinated tactics within platform and legal boundaries.',
    },
    {
      title: 'Measure and iterate',
      description: 'Track result mix and refine based on observed movement.',
    },
  ],
  faqs: [
    {
      question: 'Can you delete negative articles?',
      answer:
        'Removal depends on publishers and applicable law. Where removal is not available, suppression and strengthened preferred content are the practical paths—and we state that clearly upfront.',
    },
    {
      question: 'Do you guarantee page-one changes?',
      answer:
        'No. Search outcomes are competitive and uncontrolled by any agency. We work toward measurable improvement with transparent reporting.',
    },
  ],
  audiences,
  seoTitle: 'Negative Suppression Services | Search Result Strategy',
  seoDescription:
    'Ethical negative suppression and SERP strategy for individuals and organisations dealing with harmful or outdated search prominence.',
  relatedProductIds: [
    'reputation-management',
    'privacy-protection',
    'executive-privacy',
  ],
}
