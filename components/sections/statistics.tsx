'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { AGENCY_CONFIG, HOMEPAGE } from '@/lib/content'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { useCountUp } from '@/hooks/use-count-up'
import { cn } from '@/lib/utils'

function StatItem({
  label,
  end,
  suffix,
  isPlaceholder,
  index,
}: {
  label: string
  end: number
  suffix: string
  isPlaceholder: boolean
  index: number
}) {
  const { ref, value } = useCountUp({ end })

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'relative px-4 py-2 text-center sm:px-6',
        index > 0 &&
          'sm:border-l sm:border-white/10',
      )}
    >
      <p
        ref={ref}
        className="font-display text-4xl font-semibold tracking-tight text-surface-ink-foreground tabular-nums sm:text-5xl lg:text-6xl"
      >
        {value}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-3 text-sm text-surface-ink-foreground/55">{label}</p>
      {isPlaceholder ? (
        <p className="mt-1 text-[10px] tracking-[0.14em] text-surface-ink-foreground/35 uppercase">
          Placeholder · editable
        </p>
      ) : null}
    </motion.div>
  )
}

export function StatisticsSection() {
  const t = useTranslations('homepage.statistics')
  const { statistics } = HOMEPAGE

  return (
    <Section
      tone="ink"
      padding="default"
      bleed
      className="overflow-hidden"
      aria-labelledby="stats-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_oklab,var(--accent)_16%,transparent),transparent_70%)]"
        aria-hidden
      />

      <Container className="relative">
        <motion.div
          className="mb-12 max-w-2xl md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              titleId="stats-heading"
              tone="ink"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('note')}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-y-10 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {statistics.items.map((item, index) => (
            <StatItem
              key={item.valueKey}
              label={t(`items.${item.valueKey}`)}
              end={AGENCY_CONFIG[item.valueKey]}
              suffix={item.suffix}
              isPlaceholder={item.isPlaceholder}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
