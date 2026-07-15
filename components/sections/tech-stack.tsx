'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { TECH_STACK } from '@/lib/content'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

const TECH_CATEGORY_KEYS = [
  'frontend',
  'backend',
  'cms',
  'infrastructure',
  'marketing',
] as const

export function TechStackSection() {
  const t = useTranslations('homepage.techSection')
  const tCategory = useTranslations('homepage.techCategories')
  const [activeIndex, setActiveIndex] = useState(0)
  const active = TECH_STACK[activeIndex] ?? TECH_STACK[0]
  const activeKey = TECH_CATEGORY_KEYS[activeIndex] ?? TECH_CATEGORY_KEYS[0]
  const activeLabel = tCategory(activeKey)

  return (
    <Section
      tone="muted"
      padding="default"
      aria-labelledby="tech-heading"
    >
      <Container>
        <motion.div
          className="mb-10 md:mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              titleId="tech-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />
            <p className="mt-3 text-xs text-muted-foreground">{t('note')}</p>
          </motion.div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="flex gap-2 overflow-x-auto pb-1 lg:col-span-4 lg:flex-col lg:overflow-visible"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            role="tablist"
            aria-label="Technology categories"
          >
            {TECH_STACK.map((item, index) => {
              const key = TECH_CATEGORY_KEYS[index]
              const label = key ? tCategory(key) : item.category
              const isActive = index === activeIndex
              return (
                <motion.button
                  key={item.category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  variants={fadeUp}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors lg:w-full',
                    isActive
                      ? 'border-accent/40 bg-accent/10 text-foreground'
                      : 'border-border bg-background text-muted-foreground hover:border-accent/25 hover:text-foreground',
                  )}
                >
                  {label}
                </motion.button>
              )
            })}
          </motion.div>

          <motion.div
            key={active?.category}
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            role="tabpanel"
            aria-label={activeLabel}
          >
            <div className="rounded-2xl border border-border/80 bg-background p-6 sm:p-8">
              <p className="font-display text-xl font-semibold tracking-tight text-foreground">
                {activeLabel}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {active?.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-xl border border-border/70 bg-surface-muted/50 px-4 py-3 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
