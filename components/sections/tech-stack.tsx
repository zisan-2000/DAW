'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  Bot,
  Building2,
  Eye,
  FileSearch,
  FileX2,
  Gauge,
  Globe2,
  MapPin,
  MessageSquareText,
  Newspaper,
  Radar,
  SearchCheck,
  SearchX,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

type CapabilityCategoryId =
  | 'searchReputation'
  | 'contentAuthority'
  | 'reviewsTrust'
  | 'monitoringIntelligence'
  | 'crisisProtection'

type CapabilityItem = {
  name: string
  description: string
  icon: LucideIcon
}

type CapabilityCategory = {
  id: CapabilityCategoryId
  icon: LucideIcon
  items: CapabilityItem[]
}

const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  {
    id: 'searchReputation',
    icon: SearchCheck,
    items: [
      {
        name: 'Search Result Suppression',
        description:
          'Reduce the visibility of harmful results by strengthening relevant and trusted search assets.',
        icon: SearchX,
      },
      {
        name: 'Negative Result Cleanup',
        description:
          'Identify outdated, inaccurate or damaging results and develop a structured improvement strategy.',
        icon: FileX2,
      },
      {
        name: 'Personal Reputation',
        description:
          'Improve what people discover when they search for your name, career and online identity.',
        icon: UserRoundCheck,
      },
      {
        name: 'Executive Reputation',
        description:
          'Build leadership credibility, authority and consistent visibility across digital platforms.',
        icon: UsersRound,
      },
      {
        name: 'Brand Search Optimization',
        description:
          'Strengthen branded search results so customers discover accurate and trustworthy information.',
        icon: Building2,
      },
    ],
  },
  {
    id: 'contentAuthority',
    icon: Newspaper,
    items: [
      {
        name: 'Positive Content Strategy',
        description:
          'Create useful and search-focused content that supports credibility and long-term reputation growth.',
        icon: Sparkles,
      },
      {
        name: 'Thought Leadership',
        description:
          'Position executives and organizations as trusted voices through authoritative digital content.',
        icon: UserRoundCheck,
      },
      {
        name: 'Digital PR',
        description:
          'Earn meaningful visibility through strategic media outreach, stories and authority-building campaigns.',
        icon: Globe2,
      },
      {
        name: 'Knowledge Panel Support',
        description:
          'Improve the consistency and accuracy of the information displayed across major search experiences.',
        icon: SearchCheck,
      },
      {
        name: 'Wikipedia Consultation',
        description:
          'Receive policy-aware guidance for improving the accuracy and reliability of public information.',
        icon: FileSearch,
      },
    ],
  },
  {
    id: 'reviewsTrust',
    icon: Star,
    items: [
      {
        name: 'Review Management',
        description:
          'Monitor customer feedback and build a healthier, more credible review presence across platforms.',
        icon: Star,
      },
      {
        name: 'Review Response Strategy',
        description:
          'Respond to positive and negative reviews with clear, professional and brand-safe communication.',
        icon: MessageSquareText,
      },
      {
        name: 'Local Reputation Management',
        description:
          'Strengthen local visibility, trust signals and customer confidence in the markets you serve.',
        icon: MapPin,
      },
      {
        name: 'Customer Feedback Monitoring',
        description:
          'Track recurring concerns and emerging sentiment before they become larger reputation risks.',
        icon: Activity,
      },
      {
        name: 'Business Profile Optimization',
        description:
          'Keep essential business information accurate, complete and consistent across local search platforms.',
        icon: Building2,
      },
    ],
  },
  {
    id: 'monitoringIntelligence',
    icon: Radar,
    items: [
      {
        name: 'Online Mention Monitoring',
        description:
          'Track brand, executive and product mentions across relevant online channels and conversations.',
        icon: Eye,
      },
      {
        name: 'Search Result Tracking',
        description:
          'Monitor ranking changes, new results and reputation movement across important search queries.',
        icon: Gauge,
      },
      {
        name: 'Review Monitoring',
        description:
          'Receive visibility into new reviews, rating changes and customer feedback across key platforms.',
        icon: Star,
      },
      {
        name: 'Competitor Reputation Analysis',
        description:
          'Compare visibility, sentiment and authority signals against relevant competitors in your market.',
        icon: FileSearch,
      },
      {
        name: 'AI Search Monitoring',
        description:
          'Understand how your name or brand appears across AI-generated answers and conversational search.',
        icon: Bot,
      },
    ],
  },
  {
    id: 'crisisProtection',
    icon: ShieldAlert,
    items: [
      {
        name: 'Reputation Crisis Management',
        description:
          'Respond to fast-moving reputation threats with a clear, coordinated and evidence-led action plan.',
        icon: ShieldAlert,
      },
      {
        name: 'Negative Content Removal',
        description:
          'Assess lawful removal opportunities for content that violates policies, rights or platform standards.',
        icon: FileX2,
      },
      {
        name: 'Defamation Response Support',
        description:
          'Organize digital evidence and reputation actions while coordinating with appropriate legal advisors.',
        icon: ShieldCheck,
      },
      {
        name: 'Impersonation Monitoring',
        description:
          'Detect fake profiles, misleading identities and unauthorized use of names, brands or executive images.',
        icon: Eye,
      },
      {
        name: 'Privacy Protection',
        description:
          'Reduce exposure of sensitive personal information and strengthen control over your digital footprint.',
        icon: ShieldCheck,
      },
    ],
  },
]

const CATEGORY_NUMBER: Record<CapabilityCategoryId, string> = {
  searchReputation: '01',
  contentAuthority: '02',
  reviewsTrust: '03',
  monitoringIntelligence: '04',
  crisisProtection: '05',
}

export function TechStackSection() {
  const t = useTranslations('homepage.techSection')
  const tCategory = useTranslations('homepage.techCategories')
  const [activeIndex, setActiveIndex] = useState(0)

  const activeCategory =
    CAPABILITY_CATEGORIES[activeIndex] ?? CAPABILITY_CATEGORIES[0]

  const ActiveCategoryIcon = activeCategory.icon
  const activeLabel = tCategory(activeCategory.id)

  return (
    <Section
      tone="muted"
      padding="default"
      aria-labelledby="reputation-capabilities-heading"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-44 -top-52 size-[540px] rounded-full bg-accent/[0.09] blur-[120px]" />

        <div className="absolute -bottom-48 -left-36 size-[460px] rounded-full bg-surface-ink/[0.06] blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--border)_35%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--border)_28%,transparent)_1px,transparent_1px)] bg-[size:76px_76px] opacity-[0.32] [mask-image:radial-gradient(ellipse_78%_72%_at_50%_40%,black,transparent)]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mb-10 md:mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="max-w-4xl">
            <SectionHeader
              titleId="reputation-capabilities-heading"
              eyebrow={t('eyebrow')}
              title={t('title')}
              description={t('description')}
            />

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-border/80 bg-card/65 px-4 py-3 backdrop-blur-sm">
              <ShieldCheck
                className="mt-0.5 size-4 shrink-0 text-accent"
                aria-hidden="true"
              />

              <p className="text-xs leading-5 text-muted-foreground">
                {t('note')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Category navigation */}
          <motion.div
            className="lg:col-span-4 xl:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div
              className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
              role="tablist"
              aria-label="Reputation management capability categories"
            >
              {CAPABILITY_CATEGORIES.map((category, index) => {
                const Icon = category.icon
                const isActive = index === activeIndex
                const label = tCategory(category.id)

                return (
                  <motion.button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`capability-panel-${category.id}`}
                    variants={fadeUp}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'group relative min-w-[235px] shrink-0 overflow-hidden rounded-2xl border px-4 py-4 text-left transition-all duration-300 lg:min-w-0 lg:w-full',
                      isActive
                        ? 'border-accent/50 bg-card text-foreground shadow-[0_18px_45px_color-mix(in_oklab,var(--accent)_12%,transparent)]'
                        : 'border-border/80 bg-card/45 text-muted-foreground hover:border-accent/25 hover:bg-card/75 hover:text-foreground',
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-capability-background"
                        className="absolute inset-0 bg-[linear-gradient(115deg,color-mix(in_oklab,var(--accent)_13%,transparent),transparent_65%)]"
                        transition={{
                          type: 'spring',
                          stiffness: 340,
                          damping: 32,
                        }}
                      />
                    )}

                    <div className="relative z-10 flex items-center gap-3">
                      <div
                        className={cn(
                          'flex size-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300',
                          isActive
                            ? 'border-accent/35 bg-accent/10 text-accent'
                            : 'border-border bg-surface-muted text-muted-foreground group-hover:border-accent/25 group-hover:text-accent',
                        )}
                      >
                        <Icon className="size-4.5" strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold">
                          {label}
                        </span>

                        <span className="mt-1 block font-mono text-[10px] tracking-[0.18em] text-muted-foreground/70">
                          {CATEGORY_NUMBER[category.id]}
                        </span>
                      </div>

                      <ArrowRight
                        className={cn(
                          'size-4 shrink-0 transition-all duration-300',
                          isActive
                            ? 'translate-x-0 text-accent'
                            : '-translate-x-1 text-muted-foreground/50 group-hover:translate-x-0 group-hover:text-accent',
                        )}
                      />
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="active-capability-line"
                        className="absolute inset-y-4 left-0 w-[3px] rounded-r-full bg-accent"
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Active capability panel */}
          <div className="lg:col-span-8 xl:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                id={`capability-panel-${activeCategory.id}`}
                role="tabpanel"
                aria-label={activeLabel}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-3xl border border-border/90 bg-card/85 p-5 shadow-[0_24px_75px_color-mix(in_oklab,var(--foreground)_7%,transparent)] backdrop-blur-xl sm:p-7 lg:p-8"
              >
                {/* Panel decoration */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                >
                  <div className="absolute -right-20 -top-28 size-72 rounded-full bg-accent/[0.1] blur-[80px]" />

                  <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

                  <div className="absolute inset-[5px] rounded-[calc(var(--radius-3xl)-5px)] border border-foreground/[0.035]" />
                </div>

                <div className="relative z-10">
                  <div className="mb-7 flex flex-col gap-5 border-b border-border/70 pb-7 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex size-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent shadow-[0_12px_32px_color-mix(in_oklab,var(--accent)_14%,transparent)]">
                        <ActiveCategoryIcon
                          className="size-6"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                          Capability category
                        </p>

                        <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-card-foreground sm:text-3xl">
                          {activeLabel}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-border bg-surface-muted/70 px-3 py-2 text-xs font-medium text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-success" />
                      {activeCategory.items.length} solutions
                    </div>
                  </div>

                  <motion.ul
                    className="grid gap-3 sm:grid-cols-2"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {activeCategory.items.map((item, index) => {
                      const ItemIcon = item.icon

                      return (
                        <motion.li
                          key={item.name}
                          variants={fadeUp}
                          custom={index}
                          className="group/item relative overflow-hidden rounded-2xl border border-border/80 bg-background/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-background hover:shadow-[0_16px_40px_color-mix(in_oklab,var(--accent)_10%,transparent)]"
                        >
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-accent/[0.07] blur-2xl opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
                          />

                          <div
                            aria-hidden="true"
                            className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-gold to-transparent transition-transform duration-500 group-hover/item:scale-x-100"
                          />

                          <div className="relative z-10 flex items-start gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-muted text-surface-ink transition-all duration-300 group-hover/item:border-accent/35 group-hover/item:bg-accent/10 group-hover/item:text-accent">
                              <ItemIcon
                                className="size-5"
                                strokeWidth={1.7}
                                aria-hidden="true"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-3">
                                <h4 className="font-display text-base font-semibold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover/item:text-accent">
                                  {item.name}
                                </h4>

                                <span className="font-mono text-[9px] tracking-[0.16em] text-muted-foreground/55">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                              </div>

                              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </motion.li>
                      )
                    })}
                  </motion.ul>

                  <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-border/80 bg-surface-muted/55 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <ShieldCheck
                        className="mt-0.5 size-5 shrink-0 text-accent"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Strategy tailored to your reputation risk
                        </p>

                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          Every engagement is shaped around your goals, current
                          search landscape and level of urgency.
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      Explore capability
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  )
}