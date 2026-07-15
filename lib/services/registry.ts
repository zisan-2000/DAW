import type { ServiceDefinition, ServiceSlug } from './types'
import { SERVICE_SLUGS } from './types'

export const SERVICES_SPECIALTY: Record<ServiceSlug, ServiceDefinition> = {
  'ai-reputation-management': {
    slug: 'ai-reputation-management',
    navLabel: 'AI Reputation Management Services',
    name: 'AI Reputation Management',
    shortName: 'AI Reputation',
    tagline: 'Shape what AI systems say about you',
    description:
      'Large language models and AI answer engines increasingly decide first impressions. We audit, correct, and reinforce how AI surfaces present your name, brand, and story—so automated answers stay accurate, balanced, and brand-aligned.',
    challenges: [
      'AI chat answers repeating outdated or inaccurate claims',
      'Brand mentions missing from generative search summaries',
      'Competitor or crisis narratives dominating model outputs',
      'No process to monitor AI visibility alongside classic SERPs',
      'Inconsistent entity data across sources models scrape',
    ],
    outcomes: [
      'Clear baseline of how major AI tools describe you today',
      'Source and entity corrections that improve answer quality',
      'Owned and earned content that models can cite confidently',
      'Ongoing monitoring as model behavior and citations shift',
    ],
    capabilities: [
      'AI visibility audits across leading answer engines',
      'Entity and knowledge-panel consistency reviews',
      'Source landscaping for authoritative citations',
      'Narrative reinforcement through high-trust content',
      'Suppression and correction pathways for harmful output where feasible',
      'Executive-ready reporting on AI mention quality',
    ],
    process: [
      {
        title: 'Map AI exposure',
        description:
          'Query relevant models and answer surfaces with structured prompts tied to your names, brands, and key topics.',
      },
      {
        title: 'Diagnose source gaps',
        description:
          'Identify which pages, profiles, and third-party sources models appear to rely on—and where they go wrong.',
      },
      {
        title: 'Publish and reinforce',
        description:
          'Strengthen authoritative assets and earned placements that improve factual density around your entity.',
      },
      {
        title: 'Monitor and iterate',
        description:
          'Re-test on a cadence, track regressions, and adjust as AI products update.',
      },
    ],
    faqs: [
      {
        question: 'Can you guarantee AI answers will change?',
        answer:
          'No provider can guarantee model behavior. We improve the inputs and sources AI systems lean on, and measure measurable shifts where they occur.',
      },
      {
        question: 'Is this the same as classic SEO?',
        answer:
          'Related, but not identical. We combine SEO, PR, entity hygiene, and AI-specific testing—because generative answers pull from a broader mix than ten blue links.',
      },
      {
        question: 'How soon might we see movement?',
        answer:
          'Some sources update quickly; model behavior can lag. Engagements are built around baselines, checkpoints, and realistic windows—not overnight promises.',
      },
    ],
    whoFor: [
      {
        label: 'Brands facing AI hallucinations',
        description: 'When chatbots invent or recycle harmful claims about your company.',
      },
      {
        label: 'Executives and public figures',
        description: 'When personal bios in AI answers are incomplete or skewed.',
      },
      {
        label: 'Growth and SEO teams',
        description: 'Teams extending reputation work into generative search.',
      },
    ],
    relatedSlugs: [
      'personal-reputation-management',
      'business-reputation-management',
      'earned-media-marketing',
    ],
    seoTitle: 'AI Reputation Management Services',
    seoDescription:
      'Audit and improve how AI answer engines describe your brand. Entity hygiene, source strategy, monitoring, and narrative reinforcement—English-first advisory.',
  },

  'executive-branding': {
    slug: 'executive-branding',
    navLabel: 'Executive Branding',
    name: 'Executive Branding',
    shortName: 'Executive Branding',
    tagline: 'Build a credible leadership presence',
    description:
      'Senior leaders need a deliberate digital footprint—not accidental noise. We design and execute executive branding systems across search, LinkedIn, media, and owned assets so your leadership narrative is clear, consistent, and search-resilient.',
    challenges: [
      'Sparse or outdated executive search results',
      'Inconsistent bios across company, speaker, and social profiles',
      'Limited thought-leadership proof points online',
      'Crisis or legacy content crowding leadership visibility',
      'Boards and stakeholders judging digital presence first',
    ],
    outcomes: [
      'A defined positioning platform for the executive',
      'Cohesive presence across priority channels',
      'Published authority assets that support speaking and deals',
      'Reduced noise from fragmented or low-quality pages',
    ],
    capabilities: [
      'Executive reputation and search audits',
      'Personal brand positioning and message architecture',
      'LinkedIn and profile system design',
      'Owned page and biography optimization',
      'Thought-leadership content and media pathways',
      'Ongoing presence maintenance for key leaders',
    ],
    process: [
      {
        title: 'Leadership brief',
        description:
          'Clarify goals, constraints, audiences, and risks with the executive and communications stakeholders.',
      },
      {
        title: 'Presence baseline',
        description:
          'Audit how the executive appears in search, news, social, and AI surfaces today.',
      },
      {
        title: 'Platform and assets',
        description:
          'Build the message framework, priority channels, and publishing plan that reinforce authority.',
      },
      {
        title: 'Activate and maintain',
        description:
          'Ship the footprint upgrades, media moments, and monitoring cadence.',
      },
    ],
    faqs: [
      {
        question: 'Is this PR or personal branding?',
        answer:
          'Both, delivered as one system: positioning, owned assets, earned media pathways, and search hygiene tailored to senior leaders.',
      },
      {
        question: 'Do you ghostwrite content?',
        answer:
          'We can shape outlines, edits, and ghostwriting support when approved—always in the executive’s voice and risk posture.',
      },
      {
        question: 'Can this stay discreet?',
        answer:
          'Yes. Many engagements run with tight NDAs and limited publicly branded bylines.',
      },
    ],
    whoFor: [
      {
        label: 'C-suite and founders',
        description: 'Leaders preparing for fundraising, IPO, or board scrutiny.',
      },
      {
        label: 'Public company executives',
        description: 'When personal and corporate narratives must stay aligned.',
      },
      {
        label: 'Incoming senior hires',
        description: 'Establishing a clean, authoritative footprint early.',
      },
    ],
    relatedSlugs: [
      'earned-media-marketing',
      'personal-reputation-management',
      'expert-witness-services',
    ],
    seoTitle: 'Executive Branding Services',
    seoDescription:
      'Executive branding for senior leaders—search presence, messaging, LinkedIn systems, thought leadership, and discreet maintenance.',
  },

  'review-management': {
    slug: 'review-management',
    navLabel: 'Review Management',
    name: 'Review Management',
    shortName: 'Review Management',
    tagline: 'Turn reviews into a growth system',
    description:
      'Reviews shape conversion, rankings, and trust. We operate review programs that capture more of the right feedback, respond with discipline, and surface genuine customer proof across Google and major platforms.',
    challenges: [
      'Low review volume despite strong customer satisfaction',
      'Unanswered or poorly handled negative reviews',
      'Inconsistent listings and review profiles',
      'Fake or policy-violating reviews damaging trust',
      'No operating cadence for review requests',
    ],
    outcomes: [
      'Higher review velocity from real customers',
      'Faster, on-brand responses to criticism',
      'Cleaner listing footprint across platforms',
      'Clear reporting on rating trends and themes',
    ],
    capabilities: [
      'Multi-platform review audits',
      'Review generation workflows and timing',
      'Response playbooks and brand voice guides',
      'Flagging and escalation for policy violations',
      'Listing cleanup and NAP consistency',
      'Sentiment themes and leadership dashboards',
    ],
    process: [
      {
        title: 'Inventory platforms',
        description:
          'Map where customers leave reviews and which profiles drive conversion.',
      },
      {
        title: 'Install cadence',
        description:
          'Design ethical request timing, ownership, and tooling for teams.',
      },
      {
        title: 'Respond and remediate',
        description:
          'Stand up response standards and pathways for harmful or fake content.',
      },
      {
        title: 'Optimize and report',
        description:
          'Improve listing SEO signals and report rating, volume, and theme trends.',
      },
    ],
    faqs: [
      {
        question: 'Do you fake reviews?',
        answer:
          'No. We only support authentic customer feedback processes that comply with platform policies.',
      },
      {
        question: 'Can negative reviews be removed?',
        answer:
          'Only when they violate platform rules or applicable policy. Otherwise we focus on response quality and volume of genuine reviews.',
      },
      {
        question: 'Which platforms do you cover?',
        answer:
          'Google is typically primary; we also support other relevant platforms for your industry and geography.',
      },
    ],
    whoFor: [
      {
        label: 'Multi-location businesses',
        description: 'When review ops must scale without losing quality.',
      },
      {
        label: 'Service brands',
        description: 'Where trust scores directly influence bookings.',
      },
      {
        label: 'Reputation teams',
        description: 'Teams that need process, not one-off fixes.',
      },
    ],
    relatedSlugs: [
      'google-maps-seo',
      'business-reputation-management',
      'reddit-removal',
    ],
    seoTitle: 'Review Management Services',
    seoDescription:
      'Professional review management—generation workflows, response playbooks, listing cleanup, and reporting across Google and key platforms.',
  },

  'reddit-removal': {
    slug: 'reddit-removal',
    navLabel: 'Reddit Removal Services',
    name: 'Reddit Removal Services',
    shortName: 'Reddit Removal',
    tagline: 'Address harmful Reddit content with process',
    description:
      'Reddit threads can dominate search and brand conversations. We evaluate harmful posts, build documentation for removal or de-indexing pathways where available, and reduce lasting SERP damage with parallel reputation strategy.',
    challenges: [
      'Damaging threads ranking for brand or personal names',
      'Doxxing, harassment, or defamation in comments',
      'Unclear ownership of who can request removal',
      'Expired or dormant accounts that can’t edit posts',
      'Copycats reuploading removed content elsewhere',
    ],
    outcomes: [
      'Documented inventory of priority Reddit URLs',
      'Action paths: removal, edit, report, or suppress',
      'Reduced visibility where removals aren’t possible',
      'Monitoring for reappearances and new threads',
    ],
    capabilities: [
      'Reddit exposure and SERP impact audits',
      'Policy-aligned removal and report packages',
      'Coordination for author-initiated edits where viable',
      'Legal referral pathways when needed',
      'Suppression and positive SERP strategies in parallel',
      'Reappearance monitoring',
    ],
    process: [
      {
        title: 'Capture and prioritize',
        description:
          'Collect target URLs, subreddits, and search visibility for your name or brand.',
      },
      {
        title: 'Assess levers',
        description:
          'Determine feasible removal, moderation, legal, or suppression options for each item.',
      },
      {
        title: 'Execute requests',
        description:
          'Submit structured reports and track outcomes without escalating risk.',
      },
      {
        title: 'Contain SERP damage',
        description:
          'Where content remains, build parallel assets that reduce its prominence in search.',
      },
    ],
    faqs: [
      {
        question: 'Can every Reddit post be removed?',
        answer:
          'No. Success depends on policy, ownership, and platform response. We are transparent about what is and is not feasible.',
      },
      {
        question: 'Do you engage in astroturfing?',
        answer:
          'No. We do not create fake accounts or artificial upvote campaigns.',
      },
      {
        question: 'Will you work with counsel?',
        answer:
          'Yes. When legal strategies are appropriate, we coordinate with your advisors.',
      },
    ],
    whoFor: [
      {
        label: 'Individuals in crisis',
        description: 'When a viral thread is damaging careers or relationships.',
      },
      {
        label: 'Brands under attack',
        description: 'Consumer or employee discussions skewing public perception.',
      },
      {
        label: 'Legal and privacy teams',
        description: 'Teams needing process documentation and careful handling.',
      },
    ],
    relatedSlugs: [
      'personal-reputation-management',
      'business-reputation-management',
      'wikipedia',
    ],
    seoTitle: 'Reddit Removal Services',
    seoDescription:
      'Reddit removal and containment services—audits, policy-aligned reports, SERP suppression support, and monitoring. No fake engagement.',
  },

  wikipedia: {
    slug: 'wikipedia',
    navLabel: 'Wikipedia Services',
    name: 'Wikipedia Services',
    shortName: 'Wikipedia',
    tagline: 'Navigate Wikipedia with editorial integrity',
    description:
      'Wikipedia is high-trust and high-stakes. We advise on notability, sourcing, article creation or correction pathways, and COI-safe processes—always aligned with Wikipedia’s volunteer-led rules, never paid editing theater.',
    challenges: [
      'Inaccurate or incomplete biographical entries',
      'Articles deleted or declined for notability issues',
      'Conflict-of-interest risks for employees editing pages',
      'Biased sourcing crowding primary narratives',
      'No plan for talk-page and sourcing disputes',
    ],
    outcomes: [
      'Clear assessment of notability and risks',
      'Source packages editors can actually use',
      'Process that minimizes COI violations',
      'Ongoing watch on critical article changes',
    ],
    capabilities: [
      'Notability and risk assessments',
      'Independent source landscaping',
      'Drafting support for volunteer or COI-disclosed routes',
      'Talk-page strategy coaching',
      'Article monitoring and alert setups',
      'Coordination with counsel on sensitive claims',
    ],
    process: [
      {
        title: 'Eligibility review',
        description:
          'Evaluate whether an article should exist, be expanded, or only be corrected—honestly.',
      },
      {
        title: 'Source assembly',
        description:
          'Compile independent, reliable sources that meet community standards.',
      },
      {
        title: 'Safe pathway',
        description:
          'Choose COI-disclosed, volunteer, or editorial routes that reduce rejection risk.',
      },
      {
        title: 'Maintain integrity',
        description:
          'Monitor changes and respond with sourced, policy-aware updates.',
      },
    ],
    faqs: [
      {
        question: 'Can you guarantee a Wikipedia page?',
        answer:
          'No. Wikipedia decisions belong to volunteer communities. We improve readiness and source quality; we do not sell guaranteed articles.',
      },
      {
        question: 'Do you do paid undisclosed editing?',
        answer:
          'No. We follow Wikipedia’s paid-contribution and COI expectations.',
      },
      {
        question: 'What if we fail notability?',
        answer:
          'We recommend earned media and authority building first—then reconsider Wikipedia when sources are sufficient.',
      },
    ],
    whoFor: [
      {
        label: 'Notable individuals',
        description: 'When reliable coverage exists but the article is weak.',
      },
      {
        label: 'Companies and institutions',
        description: 'Entity pages needing accurate, well-sourced treatment.',
      },
      {
        label: 'Communications teams',
        description: 'Teams that want COI-safe Wikipedia literacy.',
      },
    ],
    relatedSlugs: [
      'earned-media-marketing',
      'executive-branding',
      'ai-reputation-management',
    ],
    seoTitle: 'Wikipedia Services',
    seoDescription:
      'Wikipedia advisory: notability assessments, sourcing, COI-safe pathways, corrections, and monitoring—no guaranteed pages or undisclosed paid editing.',
  },

  'google-maps-seo': {
    slug: 'google-maps-seo',
    navLabel: 'Google Maps SEO',
    name: 'Google Maps SEO',
    shortName: 'Maps SEO',
    tagline: 'Rank where local customers decide',
    description:
      'Local pack and Maps visibility drive walks-ins, calls, and leads. We optimize Google Business Profiles, citations, reviews, and on-site locality signals so the right locations surface for high-intent searches.',
    challenges: [
      'Missing or incomplete Google Business Profiles',
      'Incorrect categories, hours, or attributes',
      'Weak local pack rankings despite physical presence',
      'Duplicate listings and citation inconsistency',
      'Photos, posts, and Q&A left unmanaged',
    ],
    outcomes: [
      'Stronger local pack and Maps visibility',
      'Cleaner NAP and category foundations',
      'Higher engagement signals on priority profiles',
      'Clear reporting across locations',
    ],
    capabilities: [
      'GBP audits and optimization',
      'Category and attribute strategy',
      'Citation and duplicate cleanup',
      'Review and photo operating systems',
      'Local landing page and schema alignment',
      'Multi-location dashboards',
    ],
    process: [
      {
        title: 'Location baseline',
        description:
          'Audit profiles, rankings, competitors, and conversion actions per location.',
      },
      {
        title: 'Foundation fixes',
        description:
          'Correct listing data, categories, and technical locality signals.',
      },
      {
        title: 'Authority and engagement',
        description:
          'Improve reviews, posts, photos, and supporting local content.',
      },
      {
        title: 'Scale and govern',
        description:
          'Roll playbooks across locations with monitoring and QA.',
      },
    ],
    faqs: [
      {
        question: 'How is this different from generic SEO?',
        answer:
          'Maps SEO centers on Google Business Profile systems, proximity, categories, reviews, and local intent—not only webpage rankings.',
      },
      {
        question: 'Do you support multi-location brands?',
        answer:
          'Yes. We design governance so each location stays accurate without chaotic edits.',
      },
      {
        question: 'Will rankings improve overnight?',
        answer:
          'Local rankings move with competition and signals. We set expectations around foundation work first, then continuous improvement.',
      },
    ],
    whoFor: [
      {
        label: 'Retail and restaurants',
        description: 'Businesses competing hard in the local pack.',
      },
      {
        label: 'Professional services',
        description: 'Law, healthcare, home services, and clinics.',
      },
      {
        label: 'Franchise operators',
        description: 'Networks needing consistent multi-location SEO.',
      },
    ],
    relatedSlugs: [
      'review-management',
      'business-reputation-management',
      'earned-media-marketing',
    ],
    seoTitle: 'Google Maps SEO Services',
    seoDescription:
      'Google Maps SEO and Google Business Profile optimization—listings, categories, citations, reviews, and multi-location governance.',
  },

  'earned-media-marketing': {
    slug: 'earned-media-marketing',
    navLabel: 'Earned Media Marketing Services',
    name: 'Earned Media Marketing',
    shortName: 'Earned Media',
    tagline: 'Win coverage that compounds authority',
    description:
      'Earned media builds trust search and AI systems respect. We develop newsworthy angles, media targets, and outreach programs that place your story in credible outlets—and amplify those placements for lasting reputational value.',
    challenges: [
      'No clear story worth pitching',
      'Low hit rates from generic blast outreach',
      'Coverage that doesn’t support SEO or reputation goals',
      'Hard-to-reuse one-off articles',
      'Crisis narratives filling the media vacuum',
    ],
    outcomes: [
      'Pitchable narratives tied to business goals',
      'Placements in relevant, high-trust outlets',
      'Assets that strengthen search and Wikipedia readiness',
      'Repeatable media operating rhythm',
    ],
    capabilities: [
      'Narrative and newsroom research',
      'Journalist and outlet mapping',
      'Pitch development and outreach',
      'Executive media training support',
      'Amplification across owned and social channels',
      'Coverage tracking and ROI narratives',
    ],
    process: [
      {
        title: 'Find the story',
        description:
          'Identify data, milestones, expertise, and angles that earn attention honestly.',
      },
      {
        title: 'Build the target map',
        description:
          'Match beats, outlets, and journalists to your goals and risk profile.',
      },
      {
        title: 'Pitch and place',
        description:
          'Run disciplined outreach with tailored pitches—not spray-and-pray.',
      },
      {
        title: 'Amplify and bank',
        description:
          'Reuse coverage in owned assets, bios, sales, and authority building.',
      },
    ],
    faqs: [
      {
        question: 'Is this pay-for-play coverage?',
        answer:
          'No. We pursue earned editorial coverage. Sponsored units are labeled separately when you choose them.',
      },
      {
        question: 'Can you guarantee specific outlets?',
        answer:
          'No reputable PR partner guarantees placements. We optimize positioning, targeting, and persistence.',
      },
      {
        question: 'How does this help reputation?',
        answer:
          'Independent coverage creates high-trust citations that search engines, Wikipedia standards, and AI systems often prefer.',
      },
    ],
    whoFor: [
      {
        label: 'Growth-stage brands',
        description: 'Companies needing authority beyond ads.',
      },
      {
        label: 'Executives and experts',
        description: 'Leaders building citeable public records.',
      },
      {
        label: 'Reputation recoveries',
        description: 'When positive, factual coverage must counter noise.',
      },
    ],
    relatedSlugs: [
      'wikipedia',
      'executive-branding',
      'ai-reputation-management',
    ],
    seoTitle: 'Earned Media Marketing Services',
    seoDescription:
      'Earned media marketing—story development, targeted outreach, placements in credible outlets, and amplification for lasting authority.',
  },

  'expert-witness-services': {
    slug: 'expert-witness-services',
    navLabel: 'Expert Witness Services',
    name: 'Expert Witness Services',
    shortName: 'Expert Witness',
    tagline: 'Reputation counsel for high-stakes testimony',
    description:
      'When digital reputation intersects with litigation, counsel needs clear facts, careful language, and prepared experts. We support attorneys and subject-matter experts with digital-evidence framing, testimony readiness, and narrative hygiene around public profiles.',
    challenges: [
      'Experts with messy or contradictory online footprints',
      'Opposing counsel weaponizing search results',
      'Unclear provenance of digital claims',
      'Experts unprepared for media-adjacent scrutiny',
      'No bridge between legal strategy and reputation ops',
    ],
    outcomes: [
      'Documented digital footprint relevant to the matter',
      'Prepared narrative for deposition and testimony contexts',
      'Reduced avoidable online contradictions',
      'Aligned coordination with legal teams',
    ],
    capabilities: [
      'Matter-scoped digital footprint reviews',
      'Exhibit-friendly summaries of online evidence',
      'Expert bio and CV alignment for digital claims',
      'Testimony prep support on reputation topics',
      'Crisis communications coordination with counsel',
      'Post-matter presence cleanup planning',
    ],
    process: [
      {
        title: 'Counsel intake',
        description:
          'Scope the matter, constraints, and what is discoverable versus advisory.',
      },
      {
        title: 'Evidence map',
        description:
          'Inventory relevant digital materials, URLs, and narrative risks.',
      },
      {
        title: 'Prepare the expert',
        description:
          'Align language, profiles, and talking points with legal strategy.',
      },
      {
        title: 'Support through milestones',
        description:
          'Stay available for hearing windows, media spillover, and post-case hygiene.',
      },
    ],
    faqs: [
      {
        question: 'Are you providing legal advice?',
        answer:
          'No. We provide reputation and digital advisory support under direction of counsel. Legal strategy remains with licensed attorneys.',
      },
      {
        question: 'Can experts be parties or third parties?',
        answer:
          'We support both retained experts and individuals whose digital presence is material to a dispute.',
      },
      {
        question: 'Is confidentiality covered?',
        answer:
          'Engagements typically run under NDA and attorney-directed protocols.',
      },
    ],
    whoFor: [
      {
        label: 'Litigation counsel',
        description: 'Firms needing digital reputation support around experts.',
      },
      {
        label: 'Subject-matter experts',
        description: 'Witnesses preparing for deposition or trial visibility.',
      },
      {
        label: 'High-profile parties',
        description: 'When search narratives spill into the courtroom story.',
      },
    ],
    relatedSlugs: [
      'executive-branding',
      'personal-reputation-management',
      'reddit-removal',
    ],
    seoTitle: 'Expert Witness Services',
    seoDescription:
      'Expert witness reputation support—digital footprint reviews, testimony preparation collaboration, and counsel-aligned narrative hygiene.',
  },

  'personal-reputation-management': {
    slug: 'personal-reputation-management',
    navLabel: 'Personal Reputation Management Services',
    name: 'Personal Reputation Management',
    shortName: 'Personal Reputation',
    tagline: 'Protect and strengthen your name online',
    description:
      'Your name is searched before interviews, deals, and dates. We help individuals understand what’s visible, remove or reduce what should not define them, and build a durable presence that reflects who they are today.',
    challenges: [
      'Negative articles or posts ranking for your name',
      'Old content that no longer reflects your life',
      'Thin or missing positive personal properties',
      'Privacy exposures from people-search sites',
      'Career or relationship impact from search results',
    ],
    outcomes: [
      'A clear picture of personal search risk',
      'Prioritized action plan for removals and builds',
      'Stronger owned and earned positive assets',
      'Ongoing monitoring for new threats',
    ],
    capabilities: [
      'Personal SERP and social audits',
      'Removal and suppression strategy',
      'Personal website and profile systems',
      'Privacy opt-out support pathways',
      'Content and PR for positive proof',
      'Confidential engagement handling',
    ],
    process: [
      {
        title: 'Private audit',
        description:
          'Map search, social, news, and people-search exposure under confidentiality.',
      },
      {
        title: 'Prioritize actions',
        description:
          'Separate what can be removed, suppressed, or outweighed with new assets.',
      },
      {
        title: 'Execute and build',
        description:
          'Run removal requests and publish durable positive properties.',
      },
      {
        title: 'Monitor quietly',
        description:
          'Watch for reappearances and new risks without drama.',
      },
    ],
    faqs: [
      {
        question: 'Will my case stay confidential?',
        answer:
          'Yes. Personal engagements are handled discreetly with limited internal access.',
      },
      {
        question: 'Can everything negative be deleted?',
        answer:
          'Not always. We pursue removals where policy or law allows, and suppression plus positive assets where it does not.',
      },
      {
        question: 'How long do engagements run?',
        answer:
          'Depends on severity. Many start with a 90-day intensive, then move to lighter monitoring.',
      },
    ],
    whoFor: [
      {
        label: 'Professionals and job seekers',
        description: 'When employers search before they interview.',
      },
      {
        label: 'Public-facing individuals',
        description: 'Creators, executives, and community leaders.',
      },
      {
        label: 'People in transition',
        description: 'Name changes, relocations, or life chapter resets.',
      },
    ],
    relatedSlugs: [
      'reddit-removal',
      'executive-branding',
      'ai-reputation-management',
    ],
    seoTitle: 'Personal Reputation Management Services',
    seoDescription:
      'Personal reputation management—private audits, removals where possible, positive presence building, and confidential monitoring.',
  },

  'business-reputation-management': {
    slug: 'business-reputation-management',
    navLabel: 'Business Reputation Management Services',
    name: 'Business Reputation Management',
    shortName: 'Business Reputation',
    tagline: 'Operate brand trust as a system',
    description:
      'Business reputation is search, reviews, news, social, and employee voice—together. We build operating systems that protect brand trust, respond to issues, and continuously improve how customers discover and judge your company.',
    challenges: [
      'Fragmented ownership of brand mentions',
      'Crisis spikes with no playbook',
      'Weak review and local footprint',
      'Negative search results for brand queries',
      'Inconsistent messaging across markets',
    ],
    outcomes: [
      'Unified reputation operating model',
      'Faster response to issues and reviews',
      'Improved branded search composition',
      'Executive visibility into reputation KPIs',
    ],
    capabilities: [
      'Brand SERP and mention audits',
      'Review and Maps reputation programs',
      'Crisis playbooks and escalation paths',
      'Employee and executive presence alignment',
      'Content and PR for brand authority',
      'Ongoing monitoring and reporting',
    ],
    process: [
      {
        title: 'Brand baseline',
        description:
          'Audit search, reviews, news, social, and competitors for your brand set.',
      },
      {
        title: 'Design the system',
        description:
          'Assign owners, cadences, and playbooks across marketing, CX, and legal.',
      },
      {
        title: 'Remediate and grow',
        description:
          'Address urgent risks while publishing assets that strengthen trust.',
      },
      {
        title: 'Govern and report',
        description:
          'Keep leadership informed with metrics that drive decisions.',
      },
    ],
    faqs: [
      {
        question: 'Is this the same as social listening?',
        answer:
          'Listening is one input. We connect monitoring to response, SEO, reviews, PR, and executive accountability.',
      },
      {
        question: 'Do you support multi-brand portfolios?',
        answer:
          'Yes. We design shared standards with brand-specific playbooks.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'Branded SERP composition, review metrics, response SLAs, sentiment themes, and business goals you define.',
      },
    ],
    whoFor: [
      {
        label: 'Consumer brands',
        description: 'Where reputation directly moves revenue.',
      },
      {
        label: 'Multi-location operators',
        description: 'Retail, healthcare, hospitality, and franchises.',
      },
      {
        label: 'Regulated industries',
        description: 'When trust and compliance must move together.',
      },
    ],
    relatedSlugs: [
      'review-management',
      'google-maps-seo',
      'ai-reputation-management',
    ],
    seoTitle: 'Business Reputation Management Services',
    seoDescription:
      'Business reputation management systems—brand SERP strategy, reviews, crisis playbooks, monitoring, and executive reporting.',
  },
}

export function getService(slug: string): ServiceDefinition | undefined {
  if ((SERVICE_SLUGS as readonly string[]).includes(slug)) {
    return SERVICES_SPECIALTY[slug as ServiceSlug]
  }
  return undefined
}

export function allServiceStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }))
}

export function getRelatedServices(slug: ServiceSlug): ServiceDefinition[] {
  return SERVICES_SPECIALTY[slug].relatedSlugs.map((id) => SERVICES_SPECIALTY[id])
}

export { SERVICE_SLUGS }
