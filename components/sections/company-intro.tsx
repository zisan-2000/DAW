'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AGENCY_CONFIG, HOMEPAGE } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

export function CompanyIntroSection() {
  const { companyIntro } = HOMEPAGE

  return (
    <Section tone="light" padding="default" aria-labelledby="company-intro-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-7"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                titleId="company-intro-heading"
                eyebrow={companyIntro.eyebrow}
                title={companyIntro.title}
                description={companyIntro.body[0]}
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {companyIntro.body[1]}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <Link href={companyIntro.cta.href}>
                <Button
                  size="lg"
                  className="h-11 rounded-xl bg-primary px-5 text-primary-foreground hover:bg-primary/90"
                >
                  {companyIntro.cta.label}
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {companyIntro.highlights.map((item) => {
                const value = AGENCY_CONFIG[item.valueKey]
                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    className="bg-surface-muted px-5 py-6 sm:px-6 sm:py-8"
                  >
                    <p className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                      {value}
                      <span className="text-accent">+</span>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                    <p className="mt-1 text-[10px] tracking-wide text-muted-foreground/60 uppercase">
                      Editable
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
