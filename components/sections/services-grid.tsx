'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { easeOutExpo, fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

const SERVICE_ITEMS = [
  {
    key: 'fixMySearchResults',
    href: '/services/fix-my-search-results',
    image: '/images/googleSearchCleanup.jpg',
  },
  {
    key: 'personalReputationManagement',
    href: '/services/personal-reputation-management',
    image: '/images/personalReputation.jpg',
  },
  {
    key: 'businessReputationManagement',
    href: '/services/business-reputation-management',
    image: '/images/corporateReputation.jpg',
  },
  {
    key: 'aiReputationManagement',
    href: '/services/ai-reputation-management',
    image: '/images/aiReputationManagement.jpg',
  },
  {
    key: 'executiveBranding',
    href: '/services/executive-branding',
    image: '/images/executiveBranding.jpg',
  },
  {
    key: 'reviewManagement',
    href: '/services/review-management',
    image: '/images/reviewManagement.jpg',
  },
  {
    key: 'redditRemoval',
    href: '/services/reddit-removal',
    image: '/images/negativeContentSuppression.jpg',
  },
  {
    key: 'wikipedia',
    href: '/services/wikipedia',
    image: '/images/wikipediaManagement.jpg',
  },
  {
    key: 'googleMapsSeo',
    href: '/services/google-maps-seo',
    image: '/images/seoReputation.jpg',
  },
  {
    key: 'earnedMediaMarketing',
    href: '/services/earned-media-marketing',
    image: '/images/digitalPR.JPG',
  },
  {
    key: 'expertWitnessServices',
    href: '/services/expert-witness-services',
    image: '/images/crisisManagement.jpg',
  },
] as const

export function ServicesGridSection() {
  const t = useTranslations('homepage.servicesSection')
  const tHeader = useTranslations('header.services')
  const tService = useTranslations('homepage.servicesGrid')
  const [activeKey, setActiveKey] = useState<string | null>(
    SERVICE_ITEMS[0]?.key ?? null,
  )

  return (
    <Section
      tone="muted"
      padding="default"
      aria-labelledby="services-heading"
    >
      <Container>
        <motion.div
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              titleId="services-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right"
          >
            {t('description')}
          </motion.p>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-border/80"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onMouseLeave={() => setActiveKey(null)}
        >
          {SERVICE_ITEMS.map((service, index) => {
            const isActive = activeKey === service.key

            return (
              <motion.div
                key={service.key}
                variants={fadeUp}
                className={cn(
                  'border-border/80',
                  index > 0 && 'border-t',
                )}
              >
                <button
                  type="button"
                  onMouseEnter={() => setActiveKey(service.key)}
                  onFocus={() => setActiveKey(service.key)}
                  onClick={() =>
                    setActiveKey((current) =>
                      current === service.key ? null : service.key,
                    )
                  }
                  aria-expanded={isActive}
                  className={cn(
                    'group flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors sm:px-8',
                    isActive ? 'bg-surface-ink' : 'bg-background',
                  )}
                >
                  <span
                    className={cn(
                      'font-display text-xl font-semibold tracking-tight transition-colors sm:text-2xl',
                      isActive ? 'text-surface-ink-foreground' : 'text-foreground',
                    )}
                  >
                    {tHeader(service.key)}
                  </span>

                  <span
                    className={cn(
                      'flex size-9 shrink-0 items-center justify-center rounded-full border transition-all',
                      isActive
                        ? 'border-transparent bg-accent text-accent-foreground'
                        : 'border-border text-muted-foreground group-hover:border-accent/30 group-hover:text-accent',
                    )}
                  >
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeOutExpo }}
                      className="overflow-hidden bg-surface-ink"
                    >
                      <div className="grid gap-6 px-6 pb-8 sm:px-8 md:grid-cols-[220px_1fr] md:gap-8">
                        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl md:h-full md:min-h-45">
                          <Image
                            src={service.image}
                            alt={tHeader(service.key)}
                            fill
                            sizes="(min-width: 768px) 220px, 100vw"
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <p className="max-w-md text-sm leading-relaxed text-surface-ink-foreground/70 sm:text-[15px]">
                              {tService(`${service.key}.description`)}
                            </p>

                            <Link
                              href={service.href}
                              className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent-foreground transition-transform hover:scale-[1.03]"
                            >
                              {t('learnMore')}
                            </Link>
                          </div>

                          <ul className="mt-6 divide-y divide-surface-ink-foreground/10 border-t border-surface-ink-foreground/10">
                            {tService.raw(`${service.key}.capabilities`).map(
                              (capability: string) => (
                                <li key={capability}>
                                  <span className="flex items-center justify-between gap-3 py-3 text-sm font-medium text-surface-ink-foreground/85">
                                    {capability}
                                    <ArrowUpRight
                                      className="size-3.5 shrink-0 text-surface-ink-foreground/40"
                                      aria-hidden
                                    />
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
