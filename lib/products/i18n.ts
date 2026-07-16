import type { AudienceId, ProductId } from './types'
import { AUDIENCE_ORDER } from './audiences'

/** Compatible with next-intl `getTranslations` / `useTranslations` return values. */
export type TranslateFn = {
  (key: string, values?: Record<string, string | number | Date>): string
  raw: (key: string) => unknown
  has: (key: string) => boolean
}

export type LocalizedFaq = { question: string; answer: string }
export type LocalizedProcessStep = { title: string; description: string }
export type LocalizedCaseStudyCopy = {
  title: string
  industryLabel: string
  summary: string
  challenge: string
  solution: string
  resultsNote: string
  results: { value: string; label: string }[]
}

export type LocalizedAudienceCopy = {
  label: string
  headline: string
  supporting: string
  painPoints: string[]
  outcomes: string[]
  faqs: LocalizedFaq[]
  seoTitle: string
  seoDescription: string
  ctaLabel: string
}

export type LocalizedProductCopy = {
  name: string
  shortName: string
  tagline: string
  description: string
  seoTitle: string
  seoDescription: string
  capabilities: string[]
  process: LocalizedProcessStep[]
  faqs: LocalizedFaq[]
  audiences: Record<AudienceId, LocalizedAudienceCopy>
}

export type LocalizedDesignCopy = {
  motifLabel: string
  signalWord: string
  accentNote: string
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String) : []
}

function asFaqs(value: unknown): LocalizedFaq[] {
  if (!Array.isArray(value)) return []
  return value.map((item) => {
    const faq = item as { question?: string; answer?: string }
    return {
      question: String(faq.question ?? ''),
      answer: String(faq.answer ?? ''),
    }
  })
}

function asProcess(value: unknown): LocalizedProcessStep[] {
  if (!Array.isArray(value)) return []
  return value.map((item) => {
    const step = item as { title?: string; description?: string }
    return {
      title: String(step.title ?? ''),
      description: String(step.description ?? ''),
    }
  })
}

export function getLocalizedProduct(
  t: TranslateFn,
  productId: ProductId,
): LocalizedProductCopy {
  const base = `items.${productId}`
  const audiences = Object.fromEntries(
    AUDIENCE_ORDER.map((audienceId) => {
      const a = `${base}.audiences.${audienceId}`
      return [
        audienceId,
        {
          label: t(`${a}.label`),
          headline: t(`${a}.headline`),
          supporting: t(`${a}.supporting`),
          painPoints: asStringArray(t.raw(`${a}.painPoints`)),
          outcomes: asStringArray(t.raw(`${a}.outcomes`)),
          faqs: asFaqs(t.raw(`${a}.faqs`)),
          seoTitle: t(`${a}.seoTitle`),
          seoDescription: t(`${a}.seoDescription`),
          ctaLabel: t(`${a}.ctaLabel`),
        } satisfies LocalizedAudienceCopy,
      ]
    }),
  ) as Record<AudienceId, LocalizedAudienceCopy>

  return {
    name: t(`${base}.name`),
    shortName: t(`${base}.shortName`),
    tagline: t(`${base}.tagline`),
    description: t(`${base}.description`),
    seoTitle: t(`${base}.seoTitle`),
    seoDescription: t(`${base}.seoDescription`),
    capabilities: asStringArray(t.raw(`${base}.capabilities`)),
    process: asProcess(t.raw(`${base}.process`)),
    faqs: asFaqs(t.raw(`${base}.faqs`)),
    audiences,
  }
}

export function getLocalizedDesign(
  t: TranslateFn,
  productId: ProductId,
): LocalizedDesignCopy {
  return {
    motifLabel: t(`design.${productId}.motifLabel`),
    signalWord: t(`design.${productId}.signalWord`),
    accentNote: t(`design.${productId}.accentNote`),
  }
}

export function getLocalizedCaseStudy(
  t: TranslateFn,
  caseStudyId: string,
): LocalizedCaseStudyCopy | null {
  const base = `caseStudies.${caseStudyId}`
  if (!t.has(`${base}.title`)) return null
  const resultsRaw = t.raw(`${base}.results`)
  const results = Array.isArray(resultsRaw)
    ? resultsRaw.map((item) => {
        const row = item as { value?: string; label?: string }
        return {
          value: String(row.value ?? ''),
          label: String(row.label ?? ''),
        }
      })
    : []

  return {
    title: t(`${base}.title`),
    industryLabel: t(`${base}.industryLabel`),
    summary: t(`${base}.summary`),
    challenge: t(`${base}.challenge`),
    solution: t(`${base}.solution`),
    resultsNote: t(`${base}.resultsNote`),
    results,
  }
}
