import type { AudienceId, ProductDefinition } from '../types'
import { buildAudienceContent, standardAudienceBlueprints } from './_helpers'

const name = '360° Reputation Management'
const blueprints = standardAudienceBlueprints('reputation')

const audiences = Object.fromEntries(
  (Object.keys(blueprints) as AudienceId[]).map((id) => [
    id,
    buildAudienceContent(name, 'Reputation', id, blueprints[id], [
      {
        question: 'Do you guarantee ranking changes?',
        answer:
          'No. Search and platform outcomes vary. We set clear scopes, track progress transparently and adjust tactics—without guaranteeing specific rankings or removals.',
      },
    ]),
  ]),
) as ProductDefinition['audiences']

export const reputationManagement: ProductDefinition = {
  id: 'reputation-management',
  name,
  shortName: 'Reputation Management',
  tagline: 'Full-spectrum visibility, monitoring and narrative control',
  description:
    'A connected programme covering search presence, reviews, content strategy and ongoing monitoring—so your public story stays coherent as you grow.',
  capabilities: [
    'Search narrative audit and prioritisation',
    'Review and mention monitoring',
    'Content and profile strengthening',
    'Suppression strategy where appropriate',
    'Crisis-ready escalation playbooks',
    'Monthly reporting stakeholders can act on',
  ],
  process: [
    {
      title: 'Discovery and risk mapping',
      description:
        'Assess current search, reviews and sensitive coverage against your goals and constraints.',
    },
    {
      title: 'Strategy and roadmap',
      description:
        'Prioritise the few moves that most improve trust signals—without busywork.',
    },
    {
      title: 'Execution and publishing',
      description:
        'Build and refine assets, responses and technical fixes with clear ownership.',
    },
    {
      title: 'Monitor and optimise',
      description:
        'Track new mentions, adjust tactics and report progress in plain language.',
    },
  ],
  faqs: [
    {
      question: 'Who is 360° Reputation Management for?',
      answer:
        'Individuals, professionals, growing businesses and leadership teams who need a durable system—not a one-off cleanup.',
    },
    {
      question: 'How is this different from a single service?',
      answer:
        'We coordinate monitoring, content, reviews and search work under one roadmap so efforts reinforce each other.',
    },
    {
      question: 'How soon will we see movement?',
      answer:
        'Timelines depend on competition, content history and platform policies. We define near-term and longer-horizon indicators during onboarding.',
    },
  ],
  audiences,
  seoTitle: '360° Reputation Management | Digital Reputation Programmes',
  seoDescription:
    'Full-spectrum reputation management spanning search, reviews, content and monitoring for individuals through enterprise teams.',
  relatedProductIds: [
    'privacy-protection',
    'negative-suppression',
    'executive-privacy',
  ],
}
