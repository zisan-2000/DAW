'use client'

import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  CircleUserRound,
  Eye,
  FileX2,
  SearchX,
  ShieldAlert,
  Star,
  UserRoundCheck,
  type LucideIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from '@/lib/motion'

type ReputationUseCase = {
  id:
    | 'personalReputation'
    | 'executiveReputation'
    | 'brandReputation'
    | 'reviewManagement'
    | 'searchResultCleanup'
    | 'crisisManagement'
    | 'wikipediaKnowledgePanel'
    | 'negativeContentRemoval'
    | 'onlineMonitoring'
    | 'aiSearchReputation'
  href: string
  icon: LucideIcon
}

const reputationUseCases: ReputationUseCase[] = [
  {
    id: 'personalReputation',
    href: '/solutions/personal-reputation',
    icon: CircleUserRound,
  },
  {
    id: 'executiveReputation',
    href: '/solutions/executive-reputation',
    icon: UserRoundCheck,
  },
  {
    id: 'brandReputation',
    href: '/solutions/brand-reputation',
    icon: Building2,
  },
  {
    id: 'reviewManagement',
    href: '/solutions/review-management',
    icon: Star,
  },
  {
    id: 'searchResultCleanup',
    href: '/solutions/search-result-cleanup',
    icon: SearchX,
  },
  {
    id: 'crisisManagement',
    href: '/solutions/crisis-management',
    icon: ShieldAlert,
  },
  {
    id: 'wikipediaKnowledgePanel',
    href: '/solutions/wikipedia-knowledge-panel',
    icon: Eye,
  },
  {
    id: 'negativeContentRemoval',
    href: '/solutions/negative-content-removal',
    icon: FileX2,
  },
  {
    id: 'onlineMonitoring',
    href: '/solutions/online-monitoring',
    icon: Eye,
  },
  {
    id: 'aiSearchReputation',
    href: '/consulting/generative-engine-optimization',
    icon: Bot,
  },
]

export function IndustriesSection() {
  const t = useTranslations('homepage.reputationUseCasesSection')
  const tUseCase = useTranslations('homepage.reputationUseCases')

  return (
    <Section
      tone="light"
      padding="default"
      aria-labelledby="reputation-use-cases-heading"
      className="relative overflow-hidden"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-40 -top-40 size-[520px] rounded-full bg-accent/[0.08] blur-[110px]" />
        <div className="absolute -bottom-52 -left-40 size-[480px] rounded-full bg-surface-ink/[0.05] blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mb-10 flex flex-col gap-7 md:mb-14 md:flex-row md:items-end md:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <SectionHeader
              titleId="reputation-use-cases-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />
          </motion.div>

          <motion.div variants={fadeUp} className="shrink-0">
            <Link href="/solutions">
              <Button
                variant="outline"
                className="group h-11 rounded-xl border-border bg-card px-5 text-card-foreground shadow-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-foreground"
              >
                {t('ctaLabel')}

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {reputationUseCases.map((useCase, index) => {
            const Icon = useCase.icon

            return (
              <motion.li
                key={useCase.id}
                variants={fadeUp}
                className="h-full"
              >
                <Link
                  href={useCase.href}
                  aria-label={tUseCase(`${useCase.id}.name`)}
                  className="group block h-full rounded-3xl focus-visible:outline-none"
                >
                  <article
                    className="
                      relative flex h-full min-h-[285px] flex-col overflow-hidden
                      rounded-3xl border border-border
                      bg-[linear-gradient(145deg,var(--card)_0%,color-mix(in_oklab,var(--card)_92%,var(--surface-muted))_100%)]
                      p-6 text-card-foreground
                      shadow-[0_8px_30px_color-mix(in_oklab,var(--foreground)_7%,transparent)]
                      transition-all duration-500
                      group-hover:-translate-y-1.5
                      group-hover:border-accent/55
                      group-hover:shadow-[0_26px_70px_color-mix(in_oklab,var(--accent)_18%,transparent)]
                      group-focus-visible:border-accent
                      group-focus-visible:ring-2
                      group-focus-visible:ring-ring/40
                    "
                  >
                    {/* Inner border */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-[5px] rounded-[calc(var(--radius-3xl)-5px)] border border-foreground/[0.035] transition-colors duration-500 group-hover:border-accent/15"
                    />

                    {/* Copper top glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_70%)] opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {/* Corner glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-accent/10 blur-3xl opacity-40 transition-all duration-500 group-hover:scale-125 group-hover:opacity-90"
                    />

                    {/* Top copper line */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div className="relative z-10 mb-10 flex items-start justify-between gap-4">
                      <div
                        className="
                          flex size-12 items-center justify-center rounded-2xl
                          border border-border bg-surface-muted
                          text-surface-ink shadow-sm
                          transition-all duration-500
                          group-hover:scale-105
                          group-hover:border-accent/45
                          group-hover:bg-accent/10
                          group-hover:text-accent
                          group-hover:shadow-[0_10px_30px_color-mix(in_oklab,var(--accent)_14%,transparent)]
                        "
                      >
                        <Icon
                          className="size-5"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-muted-foreground/70">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div
                          className="
                            flex size-8 items-center justify-center rounded-full
                            border border-border bg-card
                            text-muted-foreground shadow-sm
                            transition-all duration-300
                            group-hover:border-accent
                            group-hover:bg-accent
                            group-hover:text-accent-foreground
                          "
                        >
                          <ArrowUpRight
                            className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-card-foreground transition-colors duration-300 group-hover:text-accent">
                        {tUseCase(`${useCase.id}.name`)}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {tUseCase(`${useCase.id}.description`)}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        <span>{t('cardCtaLabel')}</span>
                        <ArrowRight className="size-3.5" />
                      </div>
                    </div>

                    {/* Bottom animated accent */}
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-6 right-6 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-accent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                    />
                  </article>
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="
            relative mt-8 overflow-hidden rounded-2xl
            border border-border bg-card/75
            px-5 py-5 shadow-sm backdrop-blur-md
            md:px-6
          "
        >
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-accent"
          />

          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-52 rounded-full bg-accent/[0.07] blur-3xl"
          />

          <p className="relative max-w-4xl text-sm leading-6 text-muted-foreground">
            {t('supportingText')}
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}