'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Eye,
  FileSearch,
  Layers3,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'

const benefits = [
  { key: 'strategicSuppression', icon: Target },
  { key: 'highQualityContent', icon: Megaphone },
  { key: 'imageAmplification', icon: TrendingUp },
] as const

const processSteps = [
  {
    number: '01',
    key: 'discovery',
    image: '/images/Assess & Analyze.png',
    icon: FileSearch,
  },
  {
    number: '02',
    key: 'strategy',
    image: '/images/Strategize & Plan.png',
    icon: Layers3,
  },
  {
    number: '03',
    key: 'execution',
    image: '/images/Implement & Execute Positive Search Engine Results.png',
    icon: Sparkles,
  },
  {
    number: '04',
    key: 'reporting',
    image: '/images/Monitor & Report.png',
    icon: BarChart3,
  },
] as const

const trustPointKeys = [
  'customizedStrategy',
  'experiencedSpecialists',
  'transparentReporting',
  'longTermProtection',
] as const

const heroStatKeys = [
  { value: '360-degree', labelKey: 'visibility' },
  { value: '24/7', labelKey: 'monitoring' },
  { value: '100%', labelKey: 'confidentiality' },
] as const

export default function FixMySearchResultsPage() {
  const t = useTranslations('fixMySearchResults')
  const common = useTranslations('common')

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate min-h-[720px] overflow-hidden bg-surface-ink text-surface-ink-foreground">
        <img
          src="/images/reputation/hero-reputation.jpg"
          alt={t('hero.imageAlt')}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--surface-ink)_0%,color-mix(in_oklab,var(--surface-ink)_92%,transparent)_46%,color-mix(in_oklab,var(--surface-ink)_44%,transparent)_100%)]" />
        <div className="absolute inset-0 bg-grid-fade opacity-50" />
        <div className="bg-noise pointer-events-none absolute inset-0" />
        <div className="absolute -left-32 top-16 size-[420px] rounded-full bg-accent/15 blur-[110px]" />
        <div className="absolute bottom-0 right-0 size-[480px] rounded-full bg-accent/10 blur-[130px]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-surface-ink-foreground backdrop-blur-xl">
                <ShieldCheck className="size-4 text-accent" />
                {t('hero.eyebrow')}
              </div>

              <h1 className="text-display mt-7 max-w-4xl text-surface-ink-foreground">
                {t('hero.title')}
              </h1>

              <p className="text-lede mt-7 max-w-2xl text-surface-ink-foreground/70">
                {t('hero.description')}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact?type=consultation"
                  className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_18px_50px_color-mix(in_oklab,var(--accent)_30%,transparent)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
                >
                  {t('hero.primaryCta')}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#process"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-surface-ink-foreground backdrop-blur-xl transition duration-300 hover:border-accent/50 hover:bg-accent/10"
                >
                  {t('hero.secondaryCta')}
                  <ChevronRight className="size-4" />
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
                {['confidential', 'strategic', 'resultsFocused'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-surface-ink-foreground/65"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-accent/15">
                      <Check className="size-3 text-accent" />
                    </span>
                    {t(`hero.badges.${item}`)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-[0_25px_80px_color-mix(in_oklab,var(--foreground)_10%,transparent)] sm:grid-cols-3">
          {heroStatKeys.map((stat, index) => (
            <div
              key={stat.labelKey}
              className={`px-6 py-7 text-center ${
                index !== heroStatKeys.length - 1
                  ? 'border-b border-border sm:border-b-0 sm:border-r'
                  : ''
              }`}
            >
              <p className="text-3xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t(`hero.stats.${stat.labelKey}`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24 sm:py-32">
        <div className="absolute left-0 top-24 size-72 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Search className="size-3.5" />
              {t('intro.eyebrow')}
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('intro.title')}
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>{t('intro.paragraph1')}</p>
            <p>{t('intro.paragraph2')}</p>
            <p>{t('intro.paragraph3')}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Sparkles className="size-3.5" />
              {t('benefits.eyebrow')}
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('benefits.title')}
            </h2>

            <p className="text-lede mt-6 text-muted-foreground">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon

              return (
                <article
                  key={benefit.key}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_25px_70px_color-mix(in_oklab,var(--foreground)_10%,transparent)]"
                >
                  <div className="absolute -right-12 -top-12 size-40 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" />

                  <span className="absolute right-7 top-5 text-7xl font-semibold tracking-tighter text-muted/80">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-accent/15 bg-accent/10 text-accent transition duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="mt-9 text-xl font-semibold leading-snug">
                      {t(`benefits.${benefit.key}.title`)}
                    </h3>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {t(`benefits.${benefit.key}.description`)}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-accent opacity-70 transition group-hover:opacity-100">
                      {common('learnMore')}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32">
        <div className="absolute right-0 top-1/3 size-[400px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] border border-accent/10" />

            <div className="relative overflow-hidden rounded-4xl border border-border bg-card p-2 shadow-[0_30px_90px_color-mix(in_oklab,var(--foreground)_12%,transparent)]">
              <img
                src="/images/team.webp"
                alt={t('difference.imageAlt')}
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-2 hidden max-w-[270px] rounded-3xl border border-border bg-card p-6 shadow-2xl sm:block lg:-right-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Eye className="size-5" />
                </div>

                <div>
                  <p className="text-2xl font-semibold">360-degree</p>
                  <p className="text-sm text-muted-foreground">
                    {t('difference.visibility')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <ShieldCheck className="size-3.5" />
              {t('difference.eyebrow')}
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('difference.title')}
            </h2>

            <div className="mt-7 space-y-5 leading-8 text-muted-foreground">
              <p>{t('difference.paragraph1')}</p>
              <p>{t('difference.paragraph2')}</p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {trustPointKeys.map((point) => (
                <div
                  key={point}
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-surface-muted p-4 transition hover:border-accent/30 hover:bg-accent/5"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3.5" />
                  </span>

                  <span className="text-sm font-medium leading-6">
                    {t(`difference.trustPoints.${point}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="relative overflow-hidden bg-surface-ink py-24 text-surface-ink-foreground sm:py-32"
      >
        <div className="absolute inset-0 bg-grid-fade opacity-30" />
        <div className="bg-noise pointer-events-none absolute inset-0" />
        <div className="absolute left-0 top-1/3 size-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 size-96 rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Layers3 className="size-3.5" />
              {t('process.eyebrow')}
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-surface-ink-foreground sm:text-5xl">
              {t('process.title')}
            </h2>

            <p className="text-lede mt-6 text-surface-ink-foreground/60">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="mt-18 space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const reverse = index % 2 !== 0

              return (
                <article
                  key={step.number}
                  className="group grid overflow-hidden rounded-4xl border border-white/10 bg-white/[0.045] shadow-2xl backdrop-blur-xl lg:grid-cols-2"
                >
                  <div
                    className={`relative min-h-[360px] overflow-hidden ${
                      reverse ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={t(`process.steps.${step.key}.imageAlt`)}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-surface-ink/85 via-surface-ink/15 to-transparent" />
                    <span className="absolute left-7 top-6 text-7xl font-semibold tracking-tighter text-white/20">
                      {step.number}
                    </span>

                    <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-ink/65 px-4 py-3 backdrop-blur-xl">
                      <Icon className="size-5 text-accent" />
                      <span className="text-sm font-semibold text-surface-ink-foreground">
                        {t(`process.steps.${step.key}.eyebrow`)}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-center p-8 sm:p-10 lg:p-14 ${
                      reverse ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="flex size-13 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-lg">
                      <Icon className="size-5" />
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {t('process.stepLabel', {
                        number: step.number,
                        eyebrow: t(`process.steps.${step.key}.eyebrow`),
                      })}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-surface-ink-foreground sm:text-3xl">
                      {t(`process.steps.${step.key}.title`)}
                    </h3>

                    <p className="mt-5 leading-8 text-surface-ink-foreground/60">
                      {t(`process.steps.${step.key}.description`)}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {[1, 2, 3].map((pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-center gap-3 text-sm text-surface-ink-foreground/75"
                        >
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                            <Check className="size-3 text-accent" />
                          </span>

                          {t(`process.steps.${step.key}.points.${pointIndex}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-accent py-20 text-accent-foreground sm:py-24">
        <div className="absolute -left-24 -top-24 size-80 rounded-full border border-accent-foreground/10" />
        <div className="absolute -bottom-40 right-12 size-[420px] rounded-full border border-accent-foreground/10" />
        <div className="absolute right-1/3 top-0 size-64 rounded-full bg-background/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/65">
              {t('cta.eyebrow')}
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('cta.title')}
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-accent-foreground/70">
              {t('cta.description')}
            </p>
          </div>

          <Link
            href="/contact?type=consultation"
            className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-surface-ink px-8 py-4 text-sm font-semibold text-surface-ink-foreground shadow-2xl transition duration-300 hover:-translate-y-0.5 hover:bg-surface-ink/90"
          >
            {t('cta.primaryCta')}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}
