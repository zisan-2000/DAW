import type { AudienceId, ProductDefinition } from '../types'
import { buildAudienceContent, standardAudienceBlueprints } from './_helpers'

const name = 'Executive Privacy'
const blueprints = standardAudienceBlueprints('executive privacy')

const audiences = Object.fromEntries(
  (Object.keys(blueprints) as AudienceId[]).map((id) => [
    id,
    buildAudienceContent(name, 'Executive Privacy', id, {
      ...blueprints[id],
      focus:
        'discreet reduction of executive and household exposure while keeping professional presence intentional.',
      headlineVerb: 'Discreetly protect',
      painPoints: [
        'Home and family details tied to public executive profiles',
        'People-search sites aggregating sensitive contact data',
        'Need for confidentiality with boards and security teams',
      ],
      outcomes: [
        'Lower personal exposure where platforms allow',
        'Clear protocols for staff and household listings',
        'Coordination with reputation and security stakeholders',
      ],
    }),
  ]),
) as ProductDefinition['audiences']

export const executivePrivacy: ProductDefinition = {
  id: 'executive-privacy',
  name,
  shortName: 'Executive Privacy',
  tagline: 'Discreet protection for leaders and their households',
  description:
    'Privacy work designed for executives and high-visibility leaders—balancing reduced personal exposure with the professional presence stakeholders expect.',
  capabilities: [
    'Executive and household exposure mapping',
    'Priority opt-out campaigns',
    'Staff and assistant enablement guides',
    'Integration with personal brand assets',
    'Confidential reporting cadence',
  ],
  process: [
    {
      title: 'Confidential briefing',
      description: 'Align priorities with the executive, EA and security stakeholders.',
    },
    {
      title: 'Exposure baseline',
      description: 'Document high-risk surfaces affecting home, family and contact data.',
    },
    {
      title: 'Remediation sprints',
      description: 'Execute opt-outs and suppressions with discreet communication.',
    },
    {
      title: 'Ongoing vigilance',
      description: 'Monitor re-listings and update playbooks as roles change.',
    },
  ],
  faqs: [
    {
      question: 'Will this make me invisible online?',
      answer:
        'No—and that is rarely desirable for executives. We reduce unnecessary personal exposure while preserving intentional professional visibility.',
    },
  ],
  audiences,
  seoTitle: 'Executive Privacy Services | Leadership Data Exposure Reduction',
  seoDescription:
    'Discreet executive privacy programmes for leaders and organisations seeking lower personal exposure with professional presence intact.',
  relatedProductIds: [
    'privacy-protection',
    'concierge-privacy',
    'reputation-management',
  ],
}
