'use client'

import { motion } from 'framer-motion'
import {
  Layers,
  LineChart,
  MessageSquare,
  RefreshCw,
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

export function WhyChooseUsSection() {
  const t = useTranslations('homepage.whyChooseUsSection')
  const tItem = useTranslations('homepage.whyChooseUs')
  const leadKey = WHY_CHOOSE_KEYS[0]
  const leadItem = WHY_CHOOSE_US[0]
  const LeadIcon = ICON_MAP[leadItem.icon] ?? Target

  return (
    <Section
      tone="light"
      padding="default"
      aria-labelledby="why-choose-heading"
    >
      <Container className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-10 h-64 bg-[radial-gradient(ellipse_55%_45%_at_20%_35%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_70%),radial-gradient(ellipse_40%_35%_at_85%_15%,color-mix(in_oklab,var(--foreground)_4%,transparent),transparent_70%)]"
          aria-hidden
        />
        <motion.div
          className="relative z-10 mb-12 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_20rem] lg:items-end"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              titleId="why-choose-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-[1.75rem] border border-accent/20 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--accent)_10%,var(--background)),var(--background))] p-5 shadow-[0_20px_60px_-40px_color-mix(in_oklab,var(--accent)_45%,transparent)]"
          >
            <p className="text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
              Operating model
            </p>
            <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
              Senior thinking, measurable delivery, long-term fit.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Designed with a spotlight-card feel instead of a plain feature grid.
            </p>
          </motion.div>
        </motion.div>

        <motion.ul
          className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.li
            variants={fadeUp}
            className="group relative overflow-hidden rounded-[1.9rem] border border-accent/25 bg-surface-ink p-7 text-surface-ink-foreground md:col-span-2 xl:row-span-2 xl:min-h-104 transform-gpu [perspective:1200px] will-change-transform transition-[transform,box-shadow] duration-500 hover:[transform:translateY(-6px)_rotateX(6deg)_rotateY(-8deg)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_0%_0%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_58%),linear-gradient(135deg,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_55%)]" />
            <div className="bg-grid-fade pointer-events-none absolute inset-0 opacity-25" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-accent shadow-[0_0_40px_-18px_color-mix(in_oklab,var(--accent)_60%,transparent)]">
                  <LeadIcon className="size-6" aria-hidden />
                </span>
                <span className="font-display text-sm tracking-[0.18em] text-surface-ink-foreground/45">
                  01
                </span>
              </div>
              <p className="mt-10 text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
                Partnership standard
              </p>
              <h3 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-surface-ink-foreground sm:text-4xl">
                {tItem(`${leadKey}.title`)}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-surface-ink-foreground/70">
                {tItem(`${leadKey}.description`)}
              </p>
              <div className="mt-auto pt-10">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-surface-ink-foreground/45">Focus</p>
                    <p className="mt-1 font-medium text-surface-ink-foreground">
                      Buyer journey
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-surface-ink-foreground/45">Mode</p>
                    <p className="mt-1 font-medium text-surface-ink-foreground">
                      Senior-led
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.li>
          {WHY_CHOOSE_US.map((item, index) => {
            if (index === 0) return null
            const Icon = ICON_MAP[item.icon] ?? Target
            const key = WHY_CHOOSE_KEYS[index]
            return (
              <motion.li
                key={key ?? item.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[1.6rem] border border-border/80 bg-background/95 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_25px_70px_-40px_color-mix(in_oklab,var(--accent)_40%,transparent)] transform-gpu [perspective:1200px] will-change-transform transition-[transform,box-shadow] duration-500 hover:[transform:translateY(-6px)_rotateX(6deg)_rotateY(-8deg)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 mb-5 flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-muted text-accent transition-colors group-hover:border-accent/30">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-display text-xs tracking-[0.16em] text-muted-foreground/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="relative z-10 font-display text-lg font-semibold tracking-tight text-foreground">
                  {key ? tItem(`${key}.title`) : item.title}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground">
                  {key ? tItem(`${key}.description`) : item.description}
                </p>
                <div className="relative z-10 mt-6 h-px w-full bg-linear-to-r from-accent/35 to-transparent" />
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </Section>
  )
}
