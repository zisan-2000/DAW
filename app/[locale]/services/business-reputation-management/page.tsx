'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import {
  ArrowRight,
  BarChart3,
  Check,
  Eye,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

const heroBadges = [
  'brandProtection',
  'searchVisibility',
  'customerTrust',
] as const

const solutionConfig = [
  {
    key: 'proactivePresence',
    image: '/images/reputation/business/proactive-presence.jpg',
    icon: TrendingUp,
    number: '01',
  },
  {
    key: 'monitorPresence',
    image: '/images/reputation/business/monitor-presence.jpg',
    icon: Sparkles,
    number: '02',
  },
  {
    key: 'negativeSuppression',
    image: '/images/reputation/business/negative-suppression.jpg',
    icon: Search,
    number: '03',
  },
  {
    key: 'threatProtection',
    image: '/images/reputation/business/threat-protection.jpg',
    icon: ShieldCheck,
    number: '04',
  },
] as const

const solutionPointKeys = ['1', '2', '3', '4'] as const

export default function BusinessReputationManagementPage() {
  const t = useTranslations('businessReputationManagement')

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-surface-ink text-surface-ink-foreground">
        <img
          src="/images/reputation/business/hero.jpg"
          alt={t('hero.imageAlt')}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--surface-ink)_0%,color-mix(in_oklab,var(--surface-ink)_94%,transparent)_48%,color-mix(in_oklab,var(--surface-ink)_38%,transparent)_100%)]" />
        <div className="absolute inset-0 bg-grid-fade opacity-40" />
        <div className="bg-noise pointer-events-none absolute inset-0" />

        <div className="absolute -left-36 top-10 size-[440px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute -bottom-28 right-0 size-[520px] rounded-full bg-accent/10 blur-[140px]" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium backdrop-blur-xl">
              <ShieldCheck className="size-4 text-accent" />
              {t('hero.eyebrow')}
            </div>

            <h1 className="text-display mt-7 text-surface-ink-foreground">
              {t('hero.title')}
            </h1>

            <p className="text-lede mt-7 max-w-2xl text-surface-ink-foreground/70">
              {t('hero.description')}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?type=consultation"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-2xl transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                {t('hero.primaryCta')}

                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#business-solutions"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold backdrop-blur-xl transition hover:border-accent/50 hover:bg-accent/10"
              >
                {t('hero.secondaryCta')}
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              {heroBadges.map((key) => (
                <div
                  key={key}
                  className="flex items-center gap-2 text-sm text-surface-ink-foreground/65"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-accent/15">
                    <Check className="size-3 text-accent" />
                  </span>

                  {t(`hero.badges.${key}`)}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-12 rounded-full bg-accent/10 blur-3xl" />

            {/* <div className="relative mx-auto max-w-[470px]">
              <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl">
                <img
                  src="/images/reputation/business/hero-card.jpg"
                  alt={t('hero.imageAlt')}
                  className="aspect-[4/4.6] w-full rounded-[2rem] object-cover"
                />

                <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-surface-ink/75 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                      <BarChart3 className="size-6" />
                    </div>

                    <div>
                      <p className="font-semibold">
                        {t('introduction.metricValue')}{' '}
                        {t('introduction.metricLabel')}
                      </p>

                      <p className="mt-1 text-sm text-surface-ink-foreground/55">
                        Search, reviews, media and sentiment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 top-20 rounded-2xl border border-white/10 bg-surface-ink/75 px-5 py-4 shadow-xl backdrop-blur-xl">
                <p className="text-2xl font-semibold text-accent">24/7</p>
                <p className="mt-1 text-xs text-surface-ink-foreground/60">
                  Reputation monitoring
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute left-0 top-20 size-72 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-accent/10" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-2 shadow-[0_30px_90px_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
              <img
                src="/images/reputation/business/introduction.jpg"
                alt={t('introduction.imageAlt')}
                className="aspect-[4/3] w-full rounded-[2rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-3 hidden rounded-3xl border border-border bg-card p-5 shadow-2xl sm:block">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Eye className="size-6" />
                </div>

                <div>
                  <p className="text-2xl font-semibold">
                    {t('introduction.metricValue')}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {t('introduction.metricLabel')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <ShieldCheck className="size-3.5" />
              {t('introduction.eyebrow')}
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('introduction.title')}
            </h2>

            <div className="mt-7 space-y-5 leading-8 text-muted-foreground">
              <p>{t('introduction.paragraph1')}</p>
              <p>{t('introduction.paragraph2')}</p>
              <p>{t('introduction.paragraph3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-border bg-surface-muted py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t('overview.eyebrow')}
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('overview.title')}
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="rounded-[2rem] bg-surface-ink p-8 text-surface-ink-foreground sm:p-10">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Sparkles className="size-6" />
              </div>

              <p className="mt-8 text-xl font-medium leading-9 text-surface-ink-foreground/85">
                {t('overview.paragraph1')}
              </p>
            </div>

            <div className="grid gap-5">
              {[t('overview.paragraph2'), t('overview.paragraph3')].map(
                (paragraph, index) => (
                  <article
                    key={paragraph}
                    className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-7 shadow-sm sm:p-9"
                  >
                    <span className="absolute right-7 top-4 text-7xl font-semibold text-muted/75">
                      0{index + 2}
                    </span>

                    <p className="relative max-w-3xl pr-8 leading-8 text-muted-foreground">
                      {paragraph}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Business solutions */}
      <section
        id="business-solutions"
        className="scroll-mt-24 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Sparkles className="size-3.5" />
              {t('solutions.eyebrow')}
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('solutions.title')}
            </h2>

            <p className="text-lede mt-5 text-muted-foreground">
              {t('solutions.subtitle')}
            </p>
          </div>

          <div className="mt-16 space-y-10">
            {solutionConfig.map((solution, index) => {
              const Icon = solution.icon
              const reverse = index % 2 !== 0

              return (
                <article
                  key={solution.key}
                  className="group relative"
                >
                  <div className="grid overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-[0_25px_80px_color-mix(in_oklab,var(--foreground)_8%,transparent)] lg:grid-cols-2">
                    <div
                      className={`relative min-h-[390px] overflow-hidden ${
                        reverse ? 'lg:order-2' : ''
                      }`}
                    >
                      <img
                        src={solution.image}
                        alt={t(
                          `solutions.items.${solution.key}.imageAlt`,
                        )}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-surface-ink/75 via-surface-ink/10 to-transparent" />

                      <span className="absolute left-7 top-6 text-7xl font-semibold tracking-tighter text-white/25">
                        {solution.number}
                      </span>

                      <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-ink/75 px-4 py-3 text-surface-ink-foreground backdrop-blur-xl">
                        <Icon className="size-5 text-accent" />

                        <span className="text-sm font-semibold">
                          {t(
                            `solutions.items.${solution.key}.eyebrow`,
                          )}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`relative flex flex-col justify-center p-8 sm:p-10 lg:p-14 ${
                        reverse ? 'lg:order-1' : ''
                      }`}
                    >
                      <div className="absolute right-8 top-7 hidden text-8xl font-semibold text-muted/60 sm:block">
                        {solution.number}
                      </div>

                      <div className="relative">
                        <div className="flex size-13 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                          <Icon className="size-5" />
                        </div>

                        <span className="mt-7 block text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          {t(
                            `solutions.items.${solution.key}.eyebrow`,
                          )}
                        </span>

                        <h3 className="mt-4 max-w-xl text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                          {t(`solutions.items.${solution.key}.title`)}
                        </h3>

                        <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                          {t(
                            `solutions.items.${solution.key}.description`,
                          )}
                        </p>

                        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                          {solutionPointKeys.map((pointKey) => (
                            <li
                              key={pointKey}
                              className="flex items-start gap-3 rounded-xl bg-surface-muted px-4 py-3 text-sm text-muted-foreground"
                            >
                              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                                <Check className="size-3 text-accent" />
                              </span>

                              {t(
                                `solutions.items.${solution.key}.points.${pointKey}`,
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Closing brand statement */}
      <section className="bg-surface-muted py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-surface-ink px-7 py-16 text-surface-ink-foreground sm:px-12 lg:px-16">
            <div className="absolute inset-0 bg-grid-fade opacity-30" />
            <div className="bg-noise pointer-events-none absolute inset-0" />

            <div className="absolute -left-24 top-0 size-80 rounded-full bg-accent/10 blur-[100px]" />
            <div className="absolute -bottom-40 right-0 size-96 rounded-full bg-accent/10 blur-[110px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {t('cta.eyebrow')}
                </span>

                <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  {t('cta.title')}
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-surface-ink-foreground/60">
                  {t('cta.description')}
                </p>

                <Link
                  href="/contact?type=consultation"
                  className="group mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-2xl transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  {t('cta.primaryCta')}

                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    icon: Search,
                    title: 'Search visibility',
                    text: 'Improve the quality and authority of branded search results.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Brand protection',
                    text: 'Prepare your business for reputation threats and public criticism.',
                  },
                  {
                    icon: Sparkles,
                    title: 'Continuous monitoring',
                    text: 'Track reviews, mentions, media coverage, and search-result changes.',
                  },
                ].map((item) => {
                  const Icon = item.icon

                  return (
                    <article
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <Icon className="size-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-surface-ink-foreground/55">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}