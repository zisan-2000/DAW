import type { AudienceId, ProductDefinition } from '../types'
import { buildAudienceContent, standardAudienceBlueprints } from './_helpers'

const name = 'Privacy Protection'
const blueprints = standardAudienceBlueprints('privacy')

const audiences = Object.fromEntries(
  (Object.keys(blueprints) as AudienceId[]).map((id) => [
    id,
    buildAudienceContent(name, 'Privacy', id, {
      ...blueprints[id],
      focus:
        id === 'executives' || id === 'large-companies'
          ? 'reducing unnecessary personal data exposure across people-search and data-broker surfaces that affect leadership and team safety.'
          : blueprints[id].focus.replace('reputation', 'privacy'),
      painPoints: [
        'Personal details resurfacing on people-search sites',
        'Unclear where private data was collected or shared',
        'Difficulty coordinating opt-outs across many brokers',
      ],
      outcomes: [
        'Structured data-broker and listing opt-out work',
        'Reduced easy-access exposure where platforms allow',
        'Ongoing checks as new listings appear',
      ],
      headlineVerb: 'Reduce exposure and protect',
    }),
  ]),
) as ProductDefinition['audiences']

export const privacyProtection: ProductDefinition = {
  id: 'privacy-protection',
  name,
  shortName: 'Privacy Protection',
  tagline: 'Reduce unnecessary public exposure of personal data',
  description:
    'Systematic work across data brokers, people-search platforms and public listings to lower easy-access personal exposure—within each platform’s policies and legal limits.',
  capabilities: [
    'Exposure audit across common data sources',
    'Opt-out and suppression workflows',
    'Recurring scans for re-listings',
    'Guidance for household and staff exposure',
    'Coordination with reputation programmes when needed',
  ],
  process: [
    {
      title: 'Map exposure',
      description: 'Identify where personal or staff data is publicly resurfacing.',
    },
    {
      title: 'Prioritise removals',
      description: 'Focus first on high-risk and high-visibility sources.',
    },
    {
      title: 'Execute opt-outs',
      description: 'Work platform processes carefully and document outcomes.',
    },
    {
      title: 'Re-check and maintain',
      description: 'Watch for reappearances and keep exposure lower over time.',
    },
  ],
  faqs: [
    {
      question: 'Can you remove everything online?',
      answer:
        'No. Some information is public record or controlled by third parties. We focus on what can legitimately be reduced and are transparent about limits.',
    },
    {
      question: 'Is this legal and ethical?',
      answer:
        'We follow each platform’s published processes and applicable laws. We do not use deceptive or abusive tactics.',
    },
  ],
  audiences,
  seoTitle: 'Privacy Protection Services | Data Exposure Reduction',
  seoDescription:
    'Privacy protection programmes to reduce personal data exposure across brokers and public listings for individuals, leaders and organisations.',
  relatedProductIds: [
    'executive-privacy',
    'concierge-privacy',
    'reputation-management',
  ],
}
