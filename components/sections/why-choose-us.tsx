'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  Layers,
  LineChart,
  MessageSquare,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { WHY_CHOOSE_US } from '@/lib/content'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, LucideIcon> = {
  Target,
  Users,
  MessageSquare,
  LineChart,
  Layers,
  RefreshCw,
}

const WHY_CHOOSE_KEYS = [
  'businessFirst',
  'seniorInvolvement',
  'transparentComm',
  'measurableReporting',
  'scalableTech',
  'longTermOpt',
] as const

const CARD_META = [
  {
    eyebrow: 'Strategic alignment',
    stat: '100%',
    statLabel: 'Business focused',
  },
  {
    eyebrow: 'Senior oversight',
    stat: '01',
    statLabel: 'Dedicated strategy lead',
  },
  {
    eyebrow: 'Clear communication',
    stat: '24h',
    statLabel: 'Response standard',
  },
  {
    eyebrow: 'Evidence-led reporting',
    stat: '360°',
    statLabel: 'Performance visibility',
  },
  {
    eyebrow: 'Flexible delivery',
    stat: 'Scale',
    statLabel: 'Built around growth',
  },
  {
    eyebrow: 'Continuous improvement',
    stat: 'Always',
    statLabel: 'Optimizing forward',
  },
] as const

export function WhyChooseUsSection() {
  const t = useTranslations('homepage.whyChooseUsSection')
  const tItem = useTranslations('homepage.whyChooseUs')

  const leadKey = WHY_CHOOSE_KEYS[0]
  const leadItem = WHY_CHOOSE_US[0]
  const LeadIcon = ICON_MAP[leadItem?.icon] ?? Target

  return (
    <Section
      tone="light"
      padding="default"
      aria-labelledby="why-choose-heading"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-48 -top-56 size-[620px] rounded-full bg-accent/[0.08] blur-[140px]" />

        <div className="absolute -bottom-56 -left-44 size-[520px] rounded-full bg-surface-ink/[0.045] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--border)_22%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--border)_18%,transparent)_1px,transparent_1px)] bg-[size:82px_82px] opacity-25 [mask-image:radial-gradient(ellipse_78%_70%_at_50%_45%,black,transparent)]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.55fr)] lg:items-end"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="max-w-4xl">
            <SectionHeader
              titleId="why-choose-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />
          </motion.div>
        </motion.div>

        {/* Bento grid */}
        <motion.ul
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Featured card */}
          <motion.li
            variants={fadeUp}
            className="group relative overflow-hidden rounded-[2rem] border border-accent/25 bg-surface-ink text-surface-ink-foreground shadow-[0_30px_90px_color-mix(in_oklab,var(--surface-ink)_24%,transparent)] md:col-span-2 xl:row-span-2 xl:min-h-[560px]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_0%_0%,color-mix(in_oklab,var(--accent)_30%,transparent),transparent_58%),linear-gradient(145deg,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_58%)]"
            />

            <div
              aria-hidden="true"
              className="bg-grid-fade pointer-events-none absolute inset-0 opacity-25"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-28 -right-24 size-80 rounded-full border border-white/[0.06]"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-12 size-56 rounded-full border border-white/[0.05]"
            />

            <div className="relative z-10 flex h-full min-h-[500px] flex-col p-7 sm:p-9">
              <div className="flex items-start justify-between gap-5">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.07] text-accent shadow-[0_18px_45px_color-mix(in_oklab,var(--accent)_18%,transparent)] backdrop-blur-sm">
                  <LeadIcon className="size-6" strokeWidth={1.8} />
                </div>

                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-surface-ink-foreground/40">
                  01
                </span>
              </div>

              <div className="mt-12 max-w-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Partnership standard
                </p>

                <h3 className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-surface-ink-foreground sm:text-4xl lg:text-[2.75rem]">
                  {tItem(`${leadKey}.title`)}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-7 text-surface-ink-foreground/68">
                  {tItem(`${leadKey}.description`)}
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Aligned to business goals',
                  'Senior-led strategy',
                  'Evidence-based decisions',
                  'Built for long-term value',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-accent" />

                    <span className="text-sm text-surface-ink-foreground/78">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto grid grid-cols-2 gap-3 pt-10">
                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-sm">
                  <p className="text-xs text-surface-ink-foreground/42">
                    Primary focus
                  </p>

                  <p className="mt-2 font-display text-lg font-semibold text-surface-ink-foreground">
                    Reputation outcomes
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-sm">
                  <p className="text-xs text-surface-ink-foreground/42">
                    Delivery model
                  </p>

                  <p className="mt-2 font-display text-lg font-semibold text-surface-ink-foreground">
                    Senior-led
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-x-10 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent via-gold to-transparent transition-transform duration-700 group-hover:scale-x-100"
              />
            </div>
          </motion.li>

          {/* Supporting cards */}
          {WHY_CHOOSE_US.map((item, index) => {
            if (index === 0) return null

            const Icon = ICON_MAP[item.icon] ?? Target
            const key = WHY_CHOOSE_KEYS[index]
            const meta = CARD_META[index]

            const isWide = index === 3 || index === 5

            return (
              <motion.li
                key={key ?? item.title}
                variants={fadeUp}
                className={cn(
                  'group relative overflow-hidden rounded-[1.75rem] border border-border/90 bg-card/90 shadow-[0_12px_40px_color-mix(in_oklab,var(--foreground)_5%,transparent)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_28px_70px_color-mix(in_oklab,var(--accent)_12%,transparent)]',
                  isWide && 'md:col-span-2 xl:col-span-1',
                )}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_100%_0%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_65%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-accent/[0.06] blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-accent/[0.11]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-[5px] rounded-[calc(1.75rem-5px)] border border-foreground/[0.025]"
                />

                <div className="relative z-10 flex h-full min-h-[270px] flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-surface-muted text-accent shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:border-accent/35 group-hover:bg-accent/10">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-muted-foreground/50">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <ArrowUpRight className="ml-auto mt-2 size-4 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-accent">
                      {meta?.eyebrow}
                    </p>

                    <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight text-foreground">
                      {key ? tItem(`${key}.title`) : item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {key
                        ? tItem(`${key}.description`)
                        : item.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                    <div>
                      <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
                        {meta?.stat}
                      </p>

                      <p className="mt-1 text-[11px] text-muted-foreground">
                        {meta?.statLabel}
                      </p>
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-border via-accent/20 to-transparent" />
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-6 right-6 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-accent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </Section>
  )
}