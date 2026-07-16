import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'

/**
 * Run with: npx tsx scripts/extract-products-en.ts
 * Builds messages/_products/en.json from lib/products registry.
 */

async function main() {
  const { PRODUCTS, getProductCaseStudies } = await import(
    '../lib/products/registry'
  )
  const { PRODUCT_DESIGNS } = await import('../lib/products/design')
  const { AUDIENCE_LABELS, AUDIENCE_ORDER } = await import(
    '../lib/products/audiences'
  )
  const { PRODUCT_IDS } = await import('../lib/products/types')

  const ui = {
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Products',
    breadcrumbCaseStudies: 'Case Studies',
    breadcrumbAria: 'Breadcrumb',
    whoItsFor: 'Who it’s for',
    audiencesCount: '{count} audiences',
    whatsIncluded: 'What’s included',
    howItWorks: 'How it works',
    faqs: 'Frequently asked questions',
    commonChallenges: 'Common challenges',
    outcomesTitle: 'Outcomes this engagement supports',
    related: 'Related',
    relatedProducts: 'Related products',
    otherAudiences: 'Other audiences',
    exploreByAudience: 'Explore by audience',
    selectedWork: 'Selected work',
    viewAllCaseStudies: 'View all case studies',
    viewCaseStudies: 'View case studies',
    requestConsultation: 'Request a Free Consultation',
    aboutProduct: 'About {shortName}',
    chatWhatsApp: 'Chat on WhatsApp',
    privateConsultation: 'Private consultation',
    priorityIntake: 'Priority intake',
    ctaDefaultTitle: 'Ready to discuss your next step?',
    ctaDefaultDescription:
      'Tell us your goals and constraints. We will recommend a practical roadmap—without pressure or generic pitches.',
    ctaStartConversation: 'Start a {shortName} conversation',
    ctaStartDescription:
      'Share your situation for {productName}. We’ll outline practical next steps—no pressure, no generic pitch.',
    ctaTalkAbout: 'Talk about {shortName} for {audience}',
    whatsappPrefill:
      'Hello, I visited your Products page and would like to discuss a project.',
    sample: 'Sample',
    demo: 'Demo',
    sampleDemo: 'Sample · demo',
    challenge: 'Challenge',
    solution: 'Solution',
    results: 'Results',
    discussSimilar: 'Discuss a similar engagement',
    emptyCases:
      'No demonstration case studies for this product yet. Add verified projects in the product registry.',
    workInPractice: 'Work in this practice',
    archiveEntries: 'Archive · {count} entries',
    caseStudiesHeroTitle: '{shortName} case studies',
    caseStudiesHeroDescription:
      'Demonstration projects with sample challenges and placeholder results. Replace with verified client outcomes and permissioned details before launch.',
    caseStudiesMetaTitle: '{shortName} Case Studies',
    caseStudiesMetaDescription:
      'Demonstration case studies for {productName}. Replace sample results with verified outcomes before launch.',
    notFoundTitle: 'Product not found',
    notFoundDescription: 'The product page you requested does not exist.',
    pageNotFound: 'Page not found',
    caseStudiesNotFound: 'Case studies not found',
    open: 'Open',
    profile: 'Profile {n}',
    stage: 'Stage {n}',
  }

  const nav = {
    caseStudies: 'Case Studies',
    audiences: Object.fromEntries(
      AUDIENCE_ORDER.map((id) => [id, AUDIENCE_LABELS[id]]),
    ),
    products: Object.fromEntries(
      PRODUCT_IDS.map((id) => [id, PRODUCTS[id].shortName]),
    ),
  }

  const design = Object.fromEntries(
    PRODUCT_IDS.map((id) => [
      id,
      {
        motifLabel: PRODUCT_DESIGNS[id].motifLabel,
        signalWord: PRODUCT_DESIGNS[id].signalWord,
        accentNote: PRODUCT_DESIGNS[id].accentNote,
      },
    ]),
  )

  const items = Object.fromEntries(
    PRODUCT_IDS.map((id) => {
      const p = PRODUCTS[id]
      return [
        id,
        {
          name: p.name,
          shortName: p.shortName,
          tagline: p.tagline,
          description: p.description,
          seoTitle: p.seoTitle,
          seoDescription: p.seoDescription,
          capabilities: p.capabilities,
          process: p.process.map((step) => ({
            title: step.title,
            description: step.description,
          })),
          faqs: p.faqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          })),
          audiences: Object.fromEntries(
            AUDIENCE_ORDER.map((aid) => {
              const a = p.audiences[aid]
              return [
                aid,
                {
                  label: a.label,
                  headline: a.headline,
                  supporting: a.supporting,
                  painPoints: a.painPoints,
                  outcomes: a.outcomes,
                  faqs: a.faqs.map((faq) => ({
                    question: faq.question,
                    answer: faq.answer,
                  })),
                  seoTitle: a.seoTitle,
                  seoDescription: a.seoDescription,
                  ctaLabel: a.ctaLabel ?? 'Request a Free Consultation',
                },
              ]
            }),
          ),
        },
      ]
    }),
  )

  const caseStudies = Object.fromEntries(
    PRODUCT_IDS.flatMap((id) =>
      getProductCaseStudies(id).map((study) => [
        study.id,
        {
          title: study.title,
          industryLabel: study.industryLabel,
          summary: study.summary,
          challenge: study.challenge,
          solution: study.solution,
          resultsNote: study.resultsNote,
          results: study.results.map((r) => ({
            value: r.value,
            label: r.label,
          })),
        },
      ]),
    ),
  )

  const payload = { ui, nav, design, items, caseStudies }

  const outDir = path.join(process.cwd(), 'messages', '_products')
  fs.mkdirSync(outDir, { recursive: true })
  const outPath = path.join(outDir, 'en.json')
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
  console.log('Wrote', outPath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
