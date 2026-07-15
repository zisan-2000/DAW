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

  return (
    <Section
      tone="light"
      padding="default"
      aria-labelledby="why-choose-heading"
    >
      <Container>
        <motion.div
          className="mb-12 md:mb-16"
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
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICON_MAP[item.icon] ?? Target
            const key = WHY_CHOOSE_KEYS[index]
            return (
              <motion.li
                key={key ?? item.title}
                variants={fadeUp}
                className="rounded-2xl border border-border/80 bg-background p-6 transition-colors hover:border-accent/30"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-muted text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-display text-xs tracking-[0.16em] text-muted-foreground/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {key ? tItem(`${key}.title`) : item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {key ? tItem(`${key}.description`) : item.description}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </Section>
  )
}
