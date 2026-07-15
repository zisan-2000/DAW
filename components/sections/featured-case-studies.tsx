'use client'

import { useMemo, useState } from 'react'
import { Link } from '@/i18n/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { CASE_STUDIES, HOMEPAGE } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function FeaturedCaseStudiesSection() {
  const t = useTranslations('homepage.caseStudiesSection')
  const tCase = useTranslations('homepage.caseStudies')
  const filters = HOMEPAGE.caseStudiesSection.filters
  const [activeFilter, setActiveFilter] = useState('all')

  const featured = useMemo(
    () => CASE_STUDIES.filter((cs) => cs.featured),
    [],
  )

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return featured
    return featured.filter((cs) => cs.category === activeFilter)
  }, [activeFilter, featured])

  return (
    <Section
      tone="muted"
      padding="default"
      aria-labelledby="case-studies-heading"
    >
      <Container>
        <motion.div
          className="mb-8 md:mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              titleId="case-studies-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />
          </motion.div>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="mb-10 flex gap-2 overflow-x-auto pb-1 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          role="tablist"
          aria-label="Filter case studies by service"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-border bg-background text-muted-foreground hover:border-accent/40 hover:text-foreground',
                )}
              >
                {t(`filters.${filter.id}`)}
              </button>
            )
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-2xl border border-dashed border-border bg-background px-6 py-12 text-center text-sm text-muted-foreground"
            >
              No demonstration case studies in this category yet. Add verified
              projects in content configuration.
            </motion.p>
          ) : (
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 gap-5 lg:grid-cols-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {filtered.map((caseStudy, index) => {
                const id = String(caseStudy.id)
                const tags = tCase.raw(`${id}.tags`) as string[]

                return (
                  <motion.article
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-background transition-colors hover:border-accent/35"
                  >
                    {/* Visual plane — abstract industry panel, not a fake photo */}
                    <div className="relative h-40 overflow-hidden bg-surface-ink">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_65%)]" />
                      <div className="absolute inset-0 bg-grid-fade opacity-40" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-[11px] tracking-[0.16em] text-accent uppercase">
                          {tCase(`${id}.industryLabel`)}
                        </p>
                        <p className="mt-1 font-display text-lg font-semibold text-surface-ink-foreground">
                          {caseStudy.clientName}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                        {tCase(`${id}.title`)}
                      </h3>

                      <div className="mt-5 space-y-3 text-sm leading-relaxed">
                        <p>
                          <span className="font-semibold text-foreground">
                            Challenge:{' '}
                          </span>
                          <span className="text-muted-foreground line-clamp-4 sm:line-clamp-none">
                            {tCase(`${id}.challenge`)}
                          </span>
                        </p>
                        <p>
                          <span className="font-semibold text-foreground">
                            Solution:{' '}
                          </span>
                          <span className="text-muted-foreground line-clamp-3 sm:line-clamp-none">
                            {tCase(`${id}.solution`)}
                          </span>
                        </p>
                      </div>

                      <div className="mt-5 rounded-xl border border-border/70 bg-surface-muted/60 p-4">
                        <p className="mb-3 text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                          {t('results')} · {tCase(`${id}.resultsNote`)}
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            {
                              value: caseStudy.results.metric1,
                              label: tCase(`${id}.metric1Label`),
                            },
                            {
                              value: caseStudy.results.metric2,
                              label: tCase(`${id}.metric2Label`),
                            },
                            {
                              value: caseStudy.results.metric3,
                              label: tCase(`${id}.metric3Label`),
                            },
                          ].map((metric) => (
                            <div key={metric.label}>
                              <p className="font-display text-base font-semibold text-accent sm:text-lg">
                                {metric.value}
                              </p>
                              <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                                {metric.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/case-studies/${caseStudy.slug}`}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                      >
                        {t('readFull')}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
        >
          <Link href="/case-studies">
            <Button
              variant="outline"
              className="h-11 rounded-xl border-border px-5 hover:bg-background"
            >
              View All Case Studies
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
