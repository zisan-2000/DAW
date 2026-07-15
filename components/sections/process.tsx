'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Compass,
  LineChart,
  Map,
  PenTool,
  Rocket,
  Search,
  type LucideIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { PROCESS_STEPS } from '@/lib/content'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  Compass,
  Map,
  PenTool,
  Rocket,
  LineChart,
}

export function ProcessSection() {
  const t = useTranslations('homepage.processSection')
  const tStep = useTranslations('homepage.processSteps')
  const reduced = useReducedMotion() ?? false
  const [activeStep, setActiveStep] = useState(1)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    if (reduced) return

    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((node, index) => {
      if (!node) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index + 1)
          }
        },
        { threshold: 0.55, rootMargin: '-10% 0px -35% 0px' },
      )
      observer.observe(node)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [reduced])

  return (
    <Section
      tone="ink"
      padding="default"
      bleed
      className="overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_0%_50%,color-mix(in_oklab,var(--accent)_14%,transparent),transparent_70%)]"
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
              tone="ink"
              titleId="process-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />
          </motion.div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Progress rail */}
          <div className="hidden lg:col-span-1 lg:block" aria-hidden>
            <div className="sticky top-28 flex flex-col items-center gap-0">
              <div className="relative h-112 w-px bg-white/10">
                <motion.div
                  className="absolute top-0 left-0 w-px origin-top bg-accent"
                  animate={{
                    height: `${((activeStep - 1) / (PROCESS_STEPS.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          </div>

          <ol className="space-y-4 lg:col-span-11">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICON_MAP[step.icon] ?? Search
              const isActive = reduced || activeStep === step.step
              const isPast = !reduced && activeStep > step.step
              const stepKey = String(step.step)

              return (
                <motion.li
                  key={step.step}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className={cn(
                    'rounded-2xl border p-5 transition-all duration-300 sm:p-6',
                    isActive
                      ? 'border-accent/40 bg-white/5'
                      : isPast
                        ? 'border-white/10 bg-white/2 opacity-70'
                        : 'border-white/10 bg-transparent opacity-55',
                  )}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                    <div className="flex items-center gap-4 sm:w-44 sm:shrink-0 sm:flex-col sm:items-start sm:gap-3">
                      <span
                        className={cn(
                          'flex size-11 items-center justify-center rounded-xl border transition-colors',
                          isActive
                            ? 'border-accent/40 bg-accent text-accent-foreground'
                            : 'border-white/15 bg-white/5 text-surface-ink-foreground/70',
                        )}
                      >
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="font-display text-xs tracking-[0.18em] text-accent uppercase">
                        {t('stepLabel')} {String(step.step).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-surface-ink-foreground sm:text-xl">
                        {tStep(`${stepKey}.title`)}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-surface-ink-foreground/60 sm:text-[15px]">
                        {tStep(`${stepKey}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
