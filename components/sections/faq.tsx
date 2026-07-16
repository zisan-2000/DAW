'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

const FAQ_KEYS = [
  'process',
  'timeline',
  'pricing',
  'reporting',
  'industries',
  'contract',
] as const

export function FaqSection() {
  const t = useTranslations('homepage.faqSection')
  const tItem = useTranslations('homepage.faqItems')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section
      tone="light"
      padding="default"
      aria-labelledby="faq-heading"
    >
      <Container className="relative">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <SectionHeader
            titleId="faq-heading"
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('description')}
            align="center"
          />
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {FAQ_KEYS.map((key, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${key}`
            const buttonId = `faq-button-${key}`

            return (
              <motion.div key={key} variants={fadeUp}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-sm font-medium sm:text-base">
                      {tItem(`${key}.question`)}
                    </span>
                    <ChevronDown
                      className={cn(
                        'size-4 shrink-0 text-muted-foreground transition-transform',
                        isOpen && 'rotate-180 text-accent',
                      )}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 sm:px-6"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {tItem(`${key}.answer`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
