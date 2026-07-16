// Central content management for the agency website
// All placeholder values are marked with [BRACKETS] for easy replacement

export const AGENCY_CONFIG = {
  name: "ORM DEFENDER",
  shortName: "ORM DEFENDER",
  tagline: "“ORM” – Online Reputation Management",
  email: "[contact@agency.com]",
  phone: "[+1 (XXX) XXX-XXXX]",
  whatsapp: "[+1234567890]",
  address: "[Your Office Address, City, Country]",
  yearsOfExperience: 8,
  projectsCompleted: 150,
  clientsServed: 80,
  countriesServed: 25,
  socialLinks: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  calendly: "[https://calendly.com/your-calendar]",
  colors: {
    primary: "#1a1f2e",
    secondary: "#f3f5f8",
    accent: "#2eb8a6",
  },
};

/** Homepage copy — edit in one place */
export const HOMEPAGE = {
  announcement: {
    text: "Helping ambitious brands grow through strategy, technology and measurable execution.",
    ctaLabel: "Book a free consultation",
    ctaHref: "/contact?type=consultation",
  },
  hero: {
    headline: "Building digital growth systems for ambitious businesses",
    supporting:
      "Conversion-focused websites, performance marketing, SEO and scalable software—connected as one system to attract better customers and grow with clarity.",
    primaryCta: {
      label: "Get a Free Growth Assessment",
      href: "/contact?type=consultation",
    },
    secondaryCta: {
      label: "View Our Work",
      href: "/case-studies",
    },
    trustLine:
      "Serving Bangladesh, UK, US, Canada, Australia, UAE and international clients. Project count editable in configuration.",
  },
  logoMarquee: {
    heading: "Trusted by Growing Businesses",
    note: "Illustrative client profiles — replace with authorized client marks",
    logos: [
      {
        name: "Sarah Mitchell",
        username: "@sarahmitchell",
        description: "E-commerce Founder, Austin TX",
        initials: "SM",
      },
      {
        name: "James Carter",
        username: "@jamescarter",
        description: "SaaS CEO, Seattle WA",
        initials: "JC",
      },
      {
        name: "Emily Rodriguez",
        username: "@emilyrodriguez",
        description: "Marketing Director, Miami FL",
        initials: "ER",
      },
      {
        name: "Michael Chen",
        username: "@michaelchen",
        description: "Operations Lead, Denver CO",
        initials: "MC",
      },
      {
        name: "Ashley Thompson",
        username: "@ashleythompson",
        description: "Retail Brand Owner, Chicago IL",
        initials: "AT",
      },
      {
        name: "David Nguyen",
        username: "@davidnguyen",
        description: "Product Manager, San Jose CA",
        initials: "DN",
      },
      {
        name: "Jessica Parker",
        username: "@jessicaparker",
        description: "Agency Owner, New York NY",
        initials: "JP",
      },
      {
        name: "Robert Anderson",
        username: "@robertanderson",
        description: "Real Estate Broker, Phoenix AZ",
        initials: "RA",
      },
    ],
  },
  companyIntro: {
    eyebrow: "About the agency",
    title: "A growth partner built for the digital economy",
    body: [
      "We bring strategy, marketing, design, software, data and AI together under one team—so campaigns, products and brand systems move in the same direction.",
      "Whether you are scaling from Bangladesh into new markets or strengthening an international digital presence, we build practical systems that compound over time.",
    ],
    cta: {
      label: "Discover Our Agency",
      href: "/about",
    },
    highlights: [
      { label: "Years of experience", valueKey: "yearsOfExperience" as const },
      { label: "Projects completed", valueKey: "projectsCompleted" as const },
      { label: "Markets served", valueKey: "countriesServed" as const },
      { label: "Clients partnered", valueKey: "clientsServed" as const },
    ],
  },
  statistics: {
    eyebrow: "Outcomes",
    title: "Numbers that track the work—not empty claims",
    note: "Editable placeholders until verified business metrics are confirmed.",
    items: [
      {
        label: "Projects delivered",
        valueKey: "projectsCompleted" as const,
        suffix: "+",
        isPlaceholder: true,
      },
      {
        label: "Clients partnered",
        valueKey: "clientsServed" as const,
        suffix: "+",
        isPlaceholder: true,
      },
      {
        label: "Countries served",
        valueKey: "countriesServed" as const,
        suffix: "+",
        isPlaceholder: true,
      },
      {
        label: "Years in market",
        valueKey: "yearsOfExperience" as const,
        suffix: "+",
        isPlaceholder: true,
      },
    ],
  },
  servicesSection: {
    eyebrow: "Capabilities",
    title: "Services designed to compound growth",
    description:
      "Each engagement connects acquisition, experience and technology—so every channel works harder toward the same commercial goal.",
  },
  valueProposition: {
    eyebrow: "Connected system",
    title: "More than separate services—one connected growth system",
    description:
      "Marketing, design, development, SEO, content, data and automation work as one operating system—not disconnected projects.",
    stages: [
      {
        id: "strategy",
        label: "Strategy",
        detail: "Business goals, audience clarity and prioritised roadmap.",
      },
      {
        id: "experience",
        label: "Experience",
        detail: "Brand, UX and websites that convert attention into trust.",
      },
      {
        id: "acquisition",
        label: "Acquisition",
        detail: "SEO, paid media and content that reach the right demand.",
      },
      {
        id: "conversion",
        label: "Conversion",
        detail: "Offers, funnels and UX friction removal that lift results.",
      },
      {
        id: "retention",
        label: "Retention",
        detail: "Lifecycle messaging, CRM and product loops that return.",
      },
      {
        id: "scale",
        label: "Scale",
        detail: "Measurement, automation and systems ready for growth.",
      },
    ],
  },
  caseStudiesSection: {
    eyebrow: "Selected work",
    title: "Case studies that show the system in action",
    description:
      "Demonstration projects with sample challenges and placeholder results. Replace with verified outcomes before launch.",
    filters: [
      { id: "all", label: "All" },
      { id: "seo", label: "SEO" },
      { id: "paid-advertising", label: "Paid Advertising" },
      { id: "website-development", label: "Website Development" },
      { id: "software", label: "Software" },
      { id: "branding", label: "Branding" },
      { id: "content", label: "Content" },
    ],
  },
  processSection: {
    eyebrow: "How we work",
    title: "A clear process from discovery to continuous optimisation",
    description:
      "Structured collaboration with senior involvement at each stage—so delivery stays practical, measurable and easy to navigate.",
  },
  industriesSection: {
    eyebrow: "Industries",
    title: "Industry outcomes we design for",
    description:
      "Sector context shapes strategy. Explore how digital growth systems adapt to the pressures of your market.",
    cta: {
      label: "Explore Industry Solutions",
      href: "/industries",
    },
  },
  techSection: {
    eyebrow: "Stack",
    title: "Technology and platforms we work with",
    description:
      "Modern tools chosen for performance, maintainability and marketing visibility. Official partnerships claimed only when verified.",
    note: "Tool familiarity listed for clarity—not as endorsement claims.",
  },
  testimonialsSection: {
    eyebrow: "Client voice",
    title: "What collaboration can feel like",
    description:
      "Sample testimonials for layout demonstration. Replace with verified reviews and permissioned quotes before launch.",
  },
  whyChooseUsSection: {
    eyebrow: "Partnership standards",
    title: "Why teams choose to work with us",
    description:
      "Clear operating principles—not guarantees of rankings, leads or revenue.",
  },
  blogSection: {
    eyebrow: "Insights",
    title: "Practical thinking on growth, systems and execution",
    description:
      "Articles drafted as editable placeholders. Replace with published editorial before launch.",
    cta: {
      label: "View All Articles",
      href: "/blog",
    },
  },
  finalCta: {
    eyebrow: "Next step",
    title: "Ready to build your next stage of growth?",
    description:
      "Tell us where your business is today and where you want it to go. Our team will recommend a practical digital roadmap.",
    primaryCta: {
      label: "Request a Free Consultation",
      href: "/contact?type=consultation",
    },
    secondaryCta: {
      label: "Chat on WhatsApp",
    },
    reassurance:
      "No pressure. No generic sales pitch. Just a focused conversation about your goals.",
    whatsappMessage:
      "Hello, I visited your website and would like to discuss a project.",
  },
};

export const SERVICES = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Acquire qualified demand with paid media, social and growth programs measured against pipeline—not vanity metrics.",
    icon: "TrendingUp",
    order: 1,
    featured: true,
    capabilities: [
      "Performance & paid media",
      "Lead generation systems",
      "Campaign strategy & creative testing",
    ],
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    slug: "seo",
    description:
      "Earn durable organic visibility through technical foundations, content architecture and search intent alignment.",
    icon: "Search",
    order: 2,
    featured: false,
    capabilities: [
      "Technical & on-page SEO",
      "Content SEO programs",
      "Local & international SEO",
    ],
  },
  {
    id: "web-development",
    title: "Website Development",
    slug: "web-development",
    description:
      "Launch fast, conversion-focused sites and web apps built for speed, clarity and long-term maintainability.",
    icon: "Code",
    order: 3,
    featured: true,
    capabilities: [
      "Corporate & marketing sites",
      "E-commerce & landing systems",
      "Redesign & ongoing care",
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    slug: "software-development",
    description:
      "Build custom platforms, automations and products that remove operational friction as you scale.",
    icon: "Layers",
    order: 4,
    featured: false,
    capabilities: [
      "Custom & SaaS platforms",
      "CRM / ERP & automation",
      "APIs & quality assurance",
    ],
  },
  {
    id: "branding-design",
    title: "Branding and Design",
    slug: "branding-design",
    description:
      "Shape identity and product experiences that signal credibility and make every touchpoint feel intentional.",
    icon: "Palette",
    order: 5,
    featured: false,
    capabilities: [
      "Brand identity systems",
      "UI/UX product design",
      "Visual & graphic systems",
    ],
  },
  {
    id: "content-video",
    title: "Content and Video",
    slug: "content-video",
    description:
      "Produce messaging and media that clarify your offer, support SEO and convert attention into action.",
    icon: "Video",
    order: 6,
    featured: false,
    capabilities: [
      "Content strategy & writing",
      "Video & motion",
      "Social creative systems",
    ],
  },
];

export const INDUSTRIES = [
  {
    id: "ecommerce",
    name: "E-commerce",
    slug: "ecommerce",
    order: 1,
    outcome: "More online sales through conversion-focused storefronts and acquisition.",
  },
  {
    id: "saas",
    name: "Software and SaaS",
    slug: "saas",
    order: 2,
    outcome: "Better customer acquisition and clearer product-led growth loops.",
  },
  {
    id: "finance",
    name: "Finance and Fintech",
    slug: "finance",
    order: 3,
    outcome: "Trust-building journeys that support qualified product enquiry.",
  },
  {
    id: "realestate",
    name: "Real Estate",
    slug: "real-estate",
    order: 4,
    outcome: "More qualified property enquiries from search and paid channels.",
  },
  {
    id: "education",
    name: "Education",
    slug: "education",
    order: 5,
    outcome: "Higher enrollment interest through structured digital funnels.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    slug: "healthcare",
    order: 6,
    outcome: "Clearer patient and client pathways without overclaimed outcomes.",
  },
  {
    id: "legal",
    name: "Legal and Professional Services",
    slug: "legal",
    order: 7,
    outcome: "Consistent inbound demand with better qualification and follow-up.",
  },
  {
    id: "travel",
    name: "Travel and Hospitality",
    slug: "travel",
    order: 8,
    outcome: "Stronger booking intent through content, SEO and conversion UX.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    slug: "manufacturing",
    order: 9,
    outcome: "Clearer digital presence that supports B2B demand generation.",
  },
  {
    id: "localbusiness",
    name: "Local Businesses",
    slug: "local-business",
    order: 10,
    outcome: "Stronger local visibility and enquiry systems for nearby customers.",
  },
];

export const CASE_STUDIES = [
  {
    id: 1,
    title: "E-commerce conversion and visibility rebuild",
    slug: "case-study-1",
    clientName: "[DEMO Client — Retail Brand]",
    industry: "ecommerce",
    industryLabel: "E-commerce",
    service: "web-development",
    category: "website-development",
    tags: ["Website Development", "SEO", "Paid Advertising"],
    summary:
      "[SAMPLE] Low conversion rate and weak organic visibility limited revenue growth.",
    challenge:
      "The store loaded slowly, product discovery was unclear, and organic traffic plateaued while paid acquisition costs rose.",
    solution:
      "Website redesign focused on conversion paths, technical SEO foundations, and coordinated paid acquisition.",
    resultsNote: "[INSERT VERIFIED RESULTS]",
    results: {
      metric1: "[XX%]",
      metric1Label: "Conversion lift (placeholder)",
      metric2: "[Xx]",
      metric2Label: "Organic visibility (placeholder)",
      metric3: "[XX%]",
      metric3Label: "Page experience (placeholder)",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Professional services lead system",
    slug: "case-study-2",
    clientName: "[DEMO Client — Professional Services]",
    industry: "legal",
    industryLabel: "Professional Services",
    service: "digital-marketing",
    category: "paid-advertising",
    tags: ["Paid Advertising", "Website Development", "Software"],
    summary:
      "[SAMPLE] Inconsistent lead flow made planning pipeline and hiring unreliable.",
    challenge:
      "Inbound enquiries arrived sporadically, landing pages underperformed, and follow-up lived in scattered spreadsheets.",
    solution:
      "Landing-page system, Google Ads structure, and CRM automation for qualification and response speed.",
    resultsNote: "[INSERT VERIFIED RESULTS]",
    results: {
      metric1: "[XX%]",
      metric1Label: "Qualified lead lift (placeholder)",
      metric2: "[Xx]",
      metric2Label: "Cost efficiency (placeholder)",
      metric3: "[XX%]",
      metric3Label: "Response speed (placeholder)",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Education enrollment funnel",
    slug: "case-study-3",
    clientName: "[DEMO Client — Education]",
    industry: "education",
    industryLabel: "Education",
    service: "seo",
    category: "seo",
    tags: ["SEO", "Content", "Website Development"],
    summary:
      "[SAMPLE] Weak digital enrollment funnel limited program discovery and enquiry quality.",
    challenge:
      "Program pages ranked poorly for intent-rich queries, content lacked structure, and enquiry forms abandoned mid-flow.",
    solution:
      "SEO architecture, content strategy aligned to enrollment intent, and conversion optimisation across key journeys.",
    resultsNote: "[INSERT VERIFIED RESULTS]",
    results: {
      metric1: "[XX%]",
      metric1Label: "Organic enquiries (placeholder)",
      metric2: "[Xx]",
      metric2Label: "Program page reach (placeholder)",
      metric3: "[XX%]",
      metric3Label: "Form completion (placeholder)",
    },
    featured: true,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "[Client Name 1]",
    role: "[Title]",
    company: "[Company Name]",
    initials: "C1",
    serviceCategory: "Website Development",
    text: "[SAMPLE] They helped us rebuild the website around clear conversion paths and reporting we could actually use in weekly decisions.]",
    isSample: true,
  },
  {
    id: 2,
    name: "[Client Name 2]",
    role: "[Title]",
    company: "[Company Name]",
    initials: "C2",
    serviceCategory: "Paid Advertising",
    text: "[SAMPLE] Communication stayed transparent and the paid media structure made performance review much easier for our team.]",
    isSample: true,
  },
  {
    id: 3,
    name: "[Client Name 3]",
    role: "[Title]",
    company: "[Company Name]",
    initials: "C3",
    serviceCategory: "SEO",
    text: "[SAMPLE] The SEO and content work focused on commercial pages first, which made prioritisation feel practical rather than abstract.]",
    isSample: true,
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "How to tighten e-commerce conversion without guessing",
    slug: "maximize-ecommerce-conversions",
    category: "digital-marketing",
    categoryLabel: "Digital Marketing",
    author: "[Author Name]",
    date: "2026-01-15",
    readTime: "5 min read",
    excerpt:
      "A practical checklist for diagnosing funnel friction, page speed and offer clarity before pouring more ad spend into the store.",
    featured: true,
  },
  {
    id: 2,
    title: "What technical SEO should actually unblock first",
    slug: "future-of-seo-2024",
    category: "seo",
    categoryLabel: "SEO",
    author: "[Author Name]",
    date: "2026-01-20",
    readTime: "7 min read",
    excerpt:
      "Prioritise crawlability, indexation and commercial page intent so search work supports pipeline—not just traffic charts.",
    featured: true,
  },
  {
    id: 3,
    title: "Building websites that stay fast as content grows",
    slug: "building-scalable-apps",
    category: "website-development",
    categoryLabel: "Website Development",
    author: "[Author Name]",
    date: "2026-01-25",
    readTime: "8 min read",
    excerpt:
      "Architecture and publishing patterns that keep performance stable when marketing teams ship pages weekly.",
    featured: true,
  },
];

export const TEAM = [
  { id: 1, name: "[Team Member 1]", role: "[Role]", bio: "[Bio]", image: "[/images/team-1.jpg]" },
  { id: 2, name: "[Team Member 2]", role: "[Role]", bio: "[Bio]", image: "[/images/team-2.jpg]" },
  { id: 3, name: "[Team Member 3]", role: "[Role]", bio: "[Bio]", image: "[/images/team-3.jpg]" },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery and business assessment",
    description:
      "Clarify goals, constraints, buyers and current performance so the brief is commercial—not generic.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Market and competitor research",
    description:
      "Map demand, messaging gaps and channel opportunities that can realistically move your numbers.",
    icon: "Compass",
  },
  {
    step: 3,
    title: "Strategy and roadmap",
    description:
      "Prioritise initiatives across experience, acquisition and technology with clear sequencing.",
    icon: "Map",
  },
  {
    step: 4,
    title: "Design and production",
    description:
      "Build brand, interfaces, content and technical assets with senior review at critical checkpoints.",
    icon: "PenTool",
  },
  {
    step: 5,
    title: "Launch and execution",
    description:
      "Ship with QA, tracking and go-live discipline so campaigns and products start measurable from day one.",
    icon: "Rocket",
  },
  {
    step: 6,
    title: "Measurement and optimisation",
    description:
      "Review outcomes, remove friction and compound improvements across channels and systems.",
    icon: "LineChart",
  },
];

export const TECH_STACK = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "Vue", "TypeScript"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Laravel", "Python", "PostgreSQL", "MySQL"],
  },
  {
    category: "CMS and Commerce",
    technologies: ["WordPress", "Shopify", "WooCommerce", "Headless CMS"],
  },
  {
    category: "Infrastructure",
    technologies: ["AWS", "Vercel", "Docker", "Cloudflare"],
  },
  {
    category: "Marketing",
    technologies: [
      "Google Ads",
      "Meta Ads",
      "Google Analytics",
      "Search Console",
      "HubSpot",
      "Semrush",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Business-first strategy",
    description:
      "Priorities start from commercial goals, constraints and buyer journeys—not tool preference.",
    icon: "Target",
  },
  {
    title: "Senior specialist involvement",
    description:
      "Experienced practitioners stay close to discovery, reviews and delivery checkpoints.",
    icon: "Users",
  },
  {
    title: "Transparent communication",
    description:
      "Clear ownership, practical updates and decisions documented without theater.",
    icon: "MessageSquare",
  },
  {
    title: "Measurable reporting",
    description:
      "Tracking and reviews built around indicators your team can act on each cycle.",
    icon: "LineChart",
  },
  {
    title: "Scalable technical solutions",
    description:
      "Architecture choices favour maintainability so systems can grow with demand.",
    icon: "Layers",
  },
  {
    title: "Long-term optimisation",
    description:
      "Launch is a starting line—continuous improvement compounds results over time.",
    icon: "RefreshCw",
  },
];
