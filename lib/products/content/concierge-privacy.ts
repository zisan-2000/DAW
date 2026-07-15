import type { AudienceId, ProductDefinition } from '../types'
import { buildAudienceContent, standardAudienceBlueprints } from './_helpers'

const name = 'Concierge Privacy'
const blueprints = standardAudienceBlueprints('concierge privacy')

const audiences = Object.fromEntries(
  (Object.keys(blueprints) as AudienceId[]).map((id) => [
    id,
    buildAudienceContent(name, 'Concierge Privacy', id, {
      ...blueprints[id],
      focus:
        'white-glove privacy operations with dedicated coordination, faster turnaround and higher-touch reporting.',
      headlineVerb: 'Premium protection for',
      painPoints: [
        'Complex multi-person or multi-property exposure',
        'Need for a single operator who owns follow-through',
        'Preference for high-touch updates over self-serve portals',
      ],
      outcomes: [
        'Dedicated privacy coordination',
        'Prioritised remediation across key sources',
        'Concise status updates for busy principals',
      ],
    }),
  ]),
) as ProductDefinition['audiences']

export const conciergePrivacy: ProductDefinition = {
  id: 'concierge-privacy',
  name,
  shortName: 'Concierge Privacy',
  tagline: 'High-touch privacy operations with dedicated ownership',
  description:
    'A concierge-style privacy programme for clients who need closer coordination, faster prioritisation and white-glove communication across complex exposure landscapes.',
  capabilities: [
    'Dedicated privacy lead',
    'Household and staff coverage options',
    'Accelerated opt-out queues',
    'Custom reporting for principals and advisors',
    'Escalation paths for emerging risks',
  ],
  process: [
    {
      title: 'Concierge onboarding',
      description: 'Assign ownership, map stakeholders and confirm discretion requirements.',
    },
    {
      title: 'Priority matrix',
      description: 'Rank exposure sources by risk and urgency with the client.',
    },
    {
      title: 'Hands-on remediation',
      description: 'Execute and chase platform processes with continuous status notes.',
    },
    {
      title: 'Live maintenance',
      description: 'Keep scanning, updating and advising as life and roles change.',
    },
  ],
  faqs: [
    {
      question: 'How is Concierge different from standard Privacy Protection?',
      answer:
        'Concierge adds dedicated ownership, tighter communication cadence and capacity for more complex multi-party scopes.',
    },
  ],
  audiences,
  seoTitle: 'Concierge Privacy Services | High-Touch Data Exposure Support',
  seoDescription:
    'Concierge privacy programmes with dedicated coordination for individuals, executives and organisations needing high-touch support.',
  relatedProductIds: [
    'executive-privacy',
    'privacy-protection',
    'reputation-management',
  ],
}
