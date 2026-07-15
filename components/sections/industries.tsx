'use client'

import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { HOMEPAGE, INDUSTRIES } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

export function IndustriesSection() {
  const t = useTranslations('homepage.industriesSection')
  const tIndustry = useTranslations('homepage.industries')
  const industries = [...INDUSTRIES].sort((a, b) => a.order - b.order)

  return (
    <Section
      tone="light"
      padding="default"
      aria-labelledby="industries-heading"
    >
      <Container>
        <motion.div
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <SectionHeader
              titleId="industries-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />
          </motion.div>
          <motion.div variants={fadeUp} className="shrink-0">
            <Link href={HOMEPAGE.industriesSection.cta.href}>
              <Button
                variant="outline"
                className="h-11 rounded-xl border-border px-5 hover:bg-surface-muted"
              >
                {t('ctaLabel')}
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {industries.map((industry) => (
            <motion.li key={industry.id} variants={fadeUp}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border/80 bg-background p-5 transition-colors hover:border-accent/40"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="font-display text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {tIndustry(`${industry.id}.name`)}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tIndustry(`${industry.id}.outcome`)}
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  )
}
