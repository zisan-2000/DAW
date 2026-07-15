import type { AudienceContent, AudienceId, FaqItem } from '../types'
import { AUDIENCE_LABELS } from '../audiences'

type AudienceBlueprint = {
  focus: string
  painPoints: string[]
  outcomes: string[]
  headlineVerb?: string
}

/** Build unique audience copy from product context + audience focus */
export function buildAudienceContent(
  productName: string,
  productSeoNoun: string,
  audienceId: AudienceId,
  blueprint: AudienceBlueprint,
  extraFaqs: FaqItem[] = [],
): AudienceContent {
  const label = AUDIENCE_LABELS[audienceId]
  const verb = blueprint.headlineVerb ?? 'Protect and strengthen'

  return {
    label,
    headline: `${verb} your reputation as ${label.toLowerCase()}`,
    supporting: `${productName} tailored for ${label.toLowerCase()}—${blueprint.focus}`,
    painPoints: blueprint.painPoints,
    outcomes: blueprint.outcomes,
    faqs: [
      {
        question: `Is ${productName} relevant for ${label.toLowerCase()}?`,
        answer: `Yes. This programme is scoped for ${label.toLowerCase()}, with priorities, messaging and reporting adjusted to your context—not a generic one-size package.`,
      },
      {
        question: 'How do engagements typically start?',
        answer:
          'We begin with a focused consultation to understand visibility risks, goals and constraints, then recommend a practical roadmap you can approve before work begins.',
      },
      ...extraFaqs,
    ],
    seoTitle: `${productName} for ${label} | ${productSeoNoun}`,
    seoDescription: `${productName} for ${label.toLowerCase()}. ${blueprint.focus}`,
    ctaLabel: 'Request a Free Consultation',
  }
}

export function standardAudienceBlueprints(domain: string): Record<
  AudienceId,
  AudienceBlueprint
> {
  return {
    individuals: {
      focus: `personal search results, reviews and public mentions that affect trust in everyday ${domain}.`,
      painPoints: [
        'Outdated or inaccurate personal information ranking too high',
        'Hard-to-answer questions when someone Googles your name',
        'Limited positive assets to balance older content',
      ],
      outcomes: [
        'Clearer personal search narrative',
        'Practical monitoring for new mentions',
        'Guided content and profile improvements',
      ],
    },
    'job-seekers': {
      focus: `employer search checks, professional profiles and content that can influence hiring decisions.`,
      painPoints: [
        'Search results that do not reflect current skills or roles',
        'Inactive or inconsistent profiles across platforms',
        'Uncertainty about what hiring teams may find first',
      ],
      outcomes: [
        'Stronger first-impression search footprint',
        'Aligned LinkedIn and professional assets',
        'Guidance on what to prioritise before interviews',
      ],
    },
    'small-businesses': {
      focus: `local reviews, Maps presence and brand search that drive customer trust and enquiries.`,
      painPoints: [
        'Inconsistent reviews and unanswered customer feedback',
        'Competitor visibility overshadowing your brand search',
        'Limited time to manage listings and response quality',
      ],
      outcomes: [
        'More coherent brand search and listing presence',
        'Structured review response habits',
        'Practical cadence your team can sustain',
      ],
    },
    executives: {
      focus: `leadership visibility, sensitive coverage and the narrative stakeholders see first.`,
      painPoints: [
        'Personal and corporate stories blending in search',
        'Sensitive or outdated coverage resurfacing at the wrong time',
        'Need for discreet, senior-ready communication',
      ],
      outcomes: [
        'Controlled executive search narrative',
        'Discreet monitoring and escalation paths',
        'Assets that support credibility with boards and media',
      ],
      headlineVerb: 'Safeguard and shape',
    },
    'large-companies': {
      focus: `enterprise brand search, multi-location reputation signals and coordinated crisis readiness.`,
      painPoints: [
        'Fragmented reputation signals across brands and locations',
        'Slow internal coordination when coverage spikes',
        'Need for measurable reporting across stakeholders',
      ],
      outcomes: [
        'Enterprise-ready monitoring and playbooks',
        'Aligned messaging across brand properties',
        'Reporting suitable for leadership review',
      ],
      headlineVerb: 'Scale protection for',
    },
  }
}
