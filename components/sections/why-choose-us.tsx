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
import { HOMEPAGE, WHY_CHOOSE_US } from '@/lib/content'
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

export function WhyChooseUsSection() {
  const { whyChooseUsSection } = HOMEPAGE

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
              eyebrow={whyChooseUsSection.eyebrow}
              title={whyChooseUsSection.title}
              description={whyChooseUsSection.description}
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
            return (
              <motion.li
                key={item.title}
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
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </Section>
  )
}
