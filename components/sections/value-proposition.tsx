'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { HOMEPAGE } from '@/lib/content'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function ValuePropositionSection() {
  const t = useTranslations('homepage.valueProposition')
  const stages = HOMEPAGE.valueProposition.stages
  const reduced = useReducedMotion() ?? false
  const [active, setActive] = useState(0)

  return (
    <Section
      tone="light"
      padding="default"
      aria-labelledby="value-prop-heading"
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
              titleId="value-prop-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />
          </motion.div>
        </motion.div>

        {/* Desktop / tablet flow */}
        <motion.ol
          className="hidden md:grid md:grid-cols-6 md:gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onMouseLeave={() => !reduced && setActive(0)}
        >
          {stages.map((stage, index) => {
            const isActive = active === index
            return (
              <motion.li key={stage.id} variants={fadeUp} className="relative">
                {index < stages.length - 1 ? (
                  <span
                    className="pointer-events-none absolute top-5 left-[calc(50%+22px)] hidden h-px w-[calc(100%-12px)] bg-border lg:block"
                    aria-hidden
                  >
                    <span
                      className={cn(
                        'absolute inset-y-0 left-0 bg-accent transition-all duration-500',
                        isActive || active > index ? 'w-full' : 'w-0',
                      )}
                    />
                  </span>
                ) : null}

                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={cn(
                    'flex w-full flex-col rounded-2xl border p-4 text-left transition-all duration-300',
                    isActive
                      ? 'border-accent/40 bg-accent/5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_20%,transparent)]'
                      : 'border-border/80 bg-background hover:border-accent/25',
                  )}
                >
                  <span
                    className={cn(
                      'mb-4 flex size-10 items-center justify-center rounded-full font-display text-sm font-semibold transition-colors',
                      isActive
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-surface-muted text-muted-foreground',
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-base font-semibold tracking-tight text-foreground">
                    {t(`stages.${stage.id}.label`)}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`stages.${stage.id}.detail`)}
                  </span>
                </button>

                {index < stages.length - 1 ? (
                  <ArrowRight
                    className="absolute top-1/2 -right-2 z-10 hidden size-4 -translate-y-1/2 text-muted-foreground/40 md:block lg:hidden"
                    aria-hidden
                  />
                ) : null}
              </motion.li>
            )
          })}
        </motion.ol>

        {/* Mobile stacked flow */}
        <motion.ol
          className="relative space-y-3 md:hidden"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span
            className="absolute top-4 bottom-4 left-[1.15rem] w-px bg-border"
            aria-hidden
          />
          {stages.map((stage, index) => (
            <motion.li
              key={stage.id}
              variants={fadeUp}
              className="relative flex gap-4 pl-1"
            >
              <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-background font-display text-xs font-semibold text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 rounded-2xl border border-border/80 bg-background p-4">
                <p className="font-display text-base font-semibold text-foreground">
                  {t(`stages.${stage.id}.label`)}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t(`stages.${stage.id}.detail`)}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}
