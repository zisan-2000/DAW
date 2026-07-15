'use client'

import { useState } from 'react'
import Link from 'next/link'
import {useTranslations} from 'next-intl'
import {
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronDown,
  CircleCheck,
  Eye,
  FileSearch,
  Gauge,
  Lightbulb,
  MapPin,
  MessageSquareWarning,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserRoundCheck,
} from 'lucide-react'

const benefitKeys = ['1', '2', '3', '4', '5', '6'] as const

const serviceConfig = [
  {
    key: 'intelligenceAudit',
    icon: BrainCircuit,
  },
  {
    key: 'brandArchitecture',
    icon: UserRoundCheck,
  },
  {
    key: 'searchSuppression',
    icon: Search,
  },
  {
    key: 'aiOptimization',
    icon: Sparkles,
  },
  {
    key: 'reviewProtection',
    icon: ShieldCheck,
  },
] as const

const workStepKeys = [
  'discover',
  'plan',
  'build',
  'promote',
  'protect',
] as const

const strategyConfig = [
  {
    key: 'companyChecklist',
    image: '/images/reputation/personal/company-checklist.jpg',
    icon: CircleCheck,
  },
  {
    key: 'searchResults',
    image: '/images/reputation/personal/search-results.jpg',
    icon: FileSearch,
  },
  {
    key: 'reputationProtection',
    image: '/images/reputation/personal/reputation-protection.jpg',
    icon: ShieldCheck,
  },
  {
    key: 'localSearch',
    image: '/images/reputation/personal/local-search.jpg',
    icon: MapPin,
  },
  {
    key: 'reviewManagement',
    image: '/images/reputation/personal/review-management.jpg',
    icon: MessageSquareWarning,
  },
  {
    key: 'providerDifference',
    image: '/images/reputation/personal/provider-difference.jpg',
    icon: TrendingUp,
  },
  {
    key: 'riskMonitoring',
    image: '/images/reputation/personal/risk-monitoring.jpg',
    icon: Eye,
  },
  {
    key: 'reputationSignals',
    image: '/images/reputation/personal/reputation-signals.jpg',
    icon: Star,
  },
] as const

const faqKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const
const strategyPointKeys = ['1', '2', '3', '4'] as const

export default function PersonalReputationManagementPage() {
  const t = useTranslations('personalReputationManagement')
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative isolate min-h-[690px] overflow-hidden bg-surface-ink text-surface-ink-foreground">
        <img
          src="/images/reputation/personal/hero.jpg"
          alt={t('hero.imageAlt')}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--surface-ink)_0%,color-mix(in_oklab,var(--surface-ink)_92%,transparent)_52%,color-mix(in_oklab,var(--surface-ink)_45%,transparent)_100%)]" />
        <div className="absolute inset-0 bg-grid-fade opacity-40" />
        <div className="bg-noise pointer-events-none absolute inset-0" />

        <div className="absolute -left-32 top-16 size-[420px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 size-[480px] rounded-full bg-accent/10 blur-[130px]" />

        <div className="relative mx-auto flex min-h-[690px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium backdrop-blur-xl">
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
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-2xl transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                {t('hero.primaryCta')}

                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#services"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold backdrop-blur-xl transition hover:border-accent/50 hover:bg-accent/10"
              >
                {t('hero.secondaryCta')}
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              {[
                t('hero.badges.confidential'),
                t('hero.badges.strategyLed'),
                t('hero.badges.longTermProtection'),
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-surface-ink-foreground/65"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-accent/15">
                    <Check className="size-3 text-accent" />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute left-0 top-20 size-72 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative">
            <div className="absolute -inset-5 rounded-4xl border border-accent/10" />

            <div className="relative overflow-hidden rounded-4xl border border-border bg-card p-2 shadow-2xl">
              <img
                src="/images/reputation/personal/introduction.jpg"
                alt={t('introduction.imageAlt')}
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -right-2 hidden rounded-3xl border border-border bg-card p-5 shadow-2xl sm:block">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Gauge className="size-6" />
                </div>

                <div>
                  <p className="text-2xl font-semibold">
                    {t('introduction.strategyValue')}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {t('introduction.strategyLabel')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Search className="size-3.5" />
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

      {/* Benefits */}
      <section className="border-y border-border bg-surface-muted py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t('benefits.eyebrow')}
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('benefits.title')}
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefitKeys.map((key) => (
              <div
                key={key}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-accent/30 hover:shadow-lg"
              >
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-4" />
                </span>

                <p className="text-sm font-medium leading-7">
                  {t(`benefits.items.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Target className="size-3.5" />
              {t('services.eyebrow')}
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('services.title')}
            </h2>

            <p className="text-lede mt-5 text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceConfig.map((service, index) => {
              const Icon = service.icon

              return (
                <article
                  key={service.key}
                  className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl ${
                    index === serviceConfig.length - 1
                      ? 'md:col-span-2 lg:col-span-1'
                      : ''
                  }`}
                >
                  <span className="absolute right-6 top-4 text-7xl font-semibold tracking-tighter text-muted/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="mt-8 text-xl font-semibold leading-snug">
                      {t(`services.items.${service.key}.title`)}
                    </h3>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {t(`services.items.${service.key}.description`)}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-surface-ink py-24 text-surface-ink-foreground sm:py-32">
        <div className="absolute inset-0 bg-grid-fade opacity-30" />
        <div className="bg-noise pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t('howItWorks.eyebrow')}
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('howItWorks.title')}
            </h2>
          </div>

          <div className="mt-16 space-y-5">
            {workStepKeys.map((key) => (
              <article
                key={key}
                className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:grid-cols-[72px_1fr] sm:p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-accent font-semibold text-accent-foreground shadow-xl">
                  {t(`howItWorks.steps.${key}.number`)}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-surface-ink-foreground">
                    {t(`howItWorks.steps.${key}.title`)}
                  </h3>

                  <p className="mt-2 leading-7 text-surface-ink-foreground/60">
                    {t(`howItWorks.steps.${key}.description`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting strategies */}
      <section className="bg-surface-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t('strategies.eyebrow')}
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('strategies.title')}
            </h2>
          </div>

          <div className="mt-16 space-y-8">
            {strategyConfig.map((strategy, index) => {
              const Icon = strategy.icon
              const reverse = index % 2 !== 0

              return (
                <article
                  key={strategy.key}
                  className="grid overflow-hidden rounded-4xl border border-border bg-card shadow-sm lg:grid-cols-2"
                >
                  <div
                    className={`relative min-h-[360px] overflow-hidden ${
                      reverse ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={strategy.image}
                      alt={t(
                        `strategies.items.${strategy.key}.imageAlt`,
                      )}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-surface-ink/70 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-ink/70 px-4 py-3 text-surface-ink-foreground backdrop-blur-xl">
                      <Icon className="size-5 text-accent" />

                      <span className="text-sm font-semibold">
                        {t(
                          `strategies.items.${strategy.key}.eyebrow`,
                        )}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-center p-8 sm:p-10 lg:p-14 ${
                      reverse ? 'lg:order-1' : ''
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {t(
                        `strategies.items.${strategy.key}.eyebrow`,
                      )}
                    </span>

                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                      {t(`strategies.items.${strategy.key}.title`)}
                    </h3>

                    <p className="mt-5 leading-8 text-muted-foreground">
                      {t(
                        `strategies.items.${strategy.key}.description`,
                      )}
                    </p>

                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {strategyPointKeys.map((pointKey) => (
                        <li
                          key={pointKey}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                            <Check className="size-3 text-accent" />
                          </span>

                          {t(
                            `strategies.items.${strategy.key}.points.${pointKey}`,
                          )}
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

      {/* FAQ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Lightbulb className="size-3.5" />
              {t('faq.eyebrow')}
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t('faq.title')}
            </h2>
          </div>

          <div className="mt-14 space-y-3">
            {faqKeys.map((key, index) => {
              const isOpen = activeFaq === index

              return (
                <article
                  key={key}
                  className={`overflow-hidden rounded-2xl border bg-card transition ${
                    isOpen
                      ? 'border-accent/40 shadow-lg'
                      : 'border-border'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold leading-6">
                      {t(`faq.items.${key}.question`)}
                    </span>

                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <ChevronDown
                        className={`size-4 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-border px-5 py-5 leading-8 text-muted-foreground sm:px-6">
                        {t(`faq.items.${key}.answer`)}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-accent py-20 text-accent-foreground">
        <div className="absolute -left-20 -top-28 size-80 rounded-full border border-accent-foreground/10" />
        <div className="absolute -bottom-40 right-10 size-[430px] rounded-full border border-accent-foreground/10" />

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
            className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-surface-ink px-8 py-4 text-sm font-semibold text-surface-ink-foreground shadow-2xl transition hover:-translate-y-0.5 hover:bg-surface-ink/90"
          >
            {t('cta.primaryCta')}

            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}