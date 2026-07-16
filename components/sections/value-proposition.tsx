'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  BarChart3,
  Check,
  CheckCircle2,
  Search,
  Sparkles,
  Target,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from '@/lib/motion'
import { cn } from '@/lib/utils'

const stages = [
  {
    id: 'understand',
    number: '01',
    icon: Search,
    floatingIcon: Target,
  },
  {
    id: 'strategy',
    number: '02',
    icon: Target,
    floatingIcon: Sparkles,
  },
  {
    id: 'execution',
    number: '03',
    icon: BarChart3,
    floatingIcon: CheckCircle2,
  },
] as const

type Stage = (typeof stages)[number]

export function ValuePropositionSection() {
  const t = useTranslations('homepage.valueProposition')
  const reducedMotion = useReducedMotion() ?? false
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Section
      tone="light"
      padding="default"
      aria-labelledby="value-prop-heading"
      className="relative isolate overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-52 left-1/2 size-[620px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[140px]" />

        <div className="absolute left-[-160px] top-[32%] size-[380px] rounded-full bg-surface-ink/[0.035] blur-[110px]" />

        <div className="absolute bottom-[-180px] right-[-120px] size-[460px] rounded-full bg-accent/[0.06] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_4%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_4%,transparent)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)]" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          >
            <Sparkles className="size-3.5" />
            {t('eyebrow')}
          </motion.div>

          <motion.h2
            id="value-prop-heading"
            variants={fadeUp}
            className="text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl"
          >
            {t('titleFirst')}{' '}
            <span className="bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* Desktop workflow */}
        <div className="relative mx-auto hidden min-h-[850px] max-w-[1120px] lg:block">
          {/* Top cards */}
          <div className="relative z-20 grid grid-cols-2 gap-[230px]">
            <WorkflowCard
              stage={stages[0]}
              title={t('stages.understand.label')}
              description={t('stages.understand.detail')}
              floatingText={t('stages.understand.floatingText')}
              active={activeStep === 0}
              onActivate={() => setActiveStep(0)}
            />

            <WorkflowCard
              stage={stages[1]}
              title={t('stages.strategy.label')}
              description={t('stages.strategy.detail')}
              floatingText={t('stages.strategy.floatingText')}
              active={activeStep === 1}
              onActivate={() => setActiveStep(1)}
            />
          </div>

          {/* Workflow lines */}
          <svg
            aria-hidden
            viewBox="0 0 1120 850"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-0 size-full overflow-visible"
          >
            <defs>
              {/* Base connector gradients */}
              <linearGradient
                id="workflow-left-line"
                x1="385"
                y1="225"
                x2="560"
                y2="405"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor="var(--border)"
                  stopOpacity="0.2"
                />
                <stop
                  offset="55%"
                  stopColor="var(--accent)"
                  stopOpacity="0.45"
                />
                <stop
                  offset="100%"
                  stopColor="var(--accent)"
                  stopOpacity="0.2"
                />
              </linearGradient>

              <linearGradient
                id="workflow-right-line"
                x1="735"
                y1="225"
                x2="560"
                y2="405"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor="var(--border)"
                  stopOpacity="0.2"
                />
                <stop
                  offset="55%"
                  stopColor="var(--accent)"
                  stopOpacity="0.45"
                />
                <stop
                  offset="100%"
                  stopColor="var(--accent)"
                  stopOpacity="0.2"
                />
              </linearGradient>

              <linearGradient
                id="workflow-bottom-line"
                x1="560"
                y1="450"
                x2="560"
                y2="560"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor="var(--accent)"
                  stopOpacity="0.45"
                />
                <stop
                  offset="100%"
                  stopColor="var(--border)"
                  stopOpacity="0.2"
                />
              </linearGradient>

              {/* Moving light gradients */}
              <linearGradient
                id="moving-light-left"
                x1="560"
                y1="405"
                x2="385"
                y2="225"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
                <stop
                  offset="42%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
                <stop
                  offset="50%"
                  stopColor="var(--accent)"
                  stopOpacity="1"
                />
                <stop
                  offset="57%"
                  stopColor="color-mix(in oklab, var(--accent) 45%, white)"
                  stopOpacity="0.95"
                />
                <stop
                  offset="67%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
                <stop
                  offset="100%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
              </linearGradient>

              <linearGradient
                id="moving-light-right"
                x1="560"
                y1="405"
                x2="735"
                y2="225"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
                <stop
                  offset="42%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
                <stop
                  offset="50%"
                  stopColor="var(--accent)"
                  stopOpacity="1"
                />
                <stop
                  offset="57%"
                  stopColor="color-mix(in oklab, var(--accent) 45%, white)"
                  stopOpacity="0.95"
                />
                <stop
                  offset="67%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
                <stop
                  offset="100%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
              </linearGradient>

              <linearGradient
                id="moving-light-bottom"
                x1="560"
                y1="405"
                x2="560"
                y2="560"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
                <stop
                  offset="42%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
                <stop
                  offset="50%"
                  stopColor="var(--accent)"
                  stopOpacity="1"
                />
                <stop
                  offset="57%"
                  stopColor="color-mix(in oklab, var(--accent) 45%, white)"
                  stopOpacity="0.95"
                />
                <stop
                  offset="67%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
                <stop
                  offset="100%"
                  stopColor="var(--accent)"
                  stopOpacity="0"
                />
              </linearGradient>

              <filter
                id="workflow-soft-glow"
                x="-80%"
                y="-80%"
                width="260%"
                height="260%"
              >
                <feGaussianBlur
                  stdDeviation="2.5"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter
                id="workflow-moving-glow"
                x="-120%"
                y="-120%"
                width="340%"
                height="340%"
              >
                <feGaussianBlur
                  stdDeviation="5"
                  result="blur"
                />

                <feGaussianBlur
                  stdDeviation="9"
                  result="wideBlur"
                />

                <feMerge>
                  <feMergeNode in="wideBlur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base lines */}
            <motion.path
              d="M 385 225 C 465 225, 460 350, 560 405"
              fill="none"
              stroke="url(#workflow-left-line)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#workflow-soft-glow)"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}
              viewport={viewportOnce}
              transition={{
                duration: reducedMotion ? 0 : 1.1,
                ease: 'easeInOut',
              }}
            />

            <motion.path
              d="M 735 225 C 655 225, 660 350, 560 405"
              fill="none"
              stroke="url(#workflow-right-line)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#workflow-soft-glow)"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}
              viewport={viewportOnce}
              transition={{
                duration: reducedMotion ? 0 : 1.1,
                delay: reducedMotion ? 0 : 0.1,
                ease: 'easeInOut',
              }}
            />

            <motion.path
              d="M 560 450 C 560 490, 560 520, 560 560"
              fill="none"
              stroke="url(#workflow-bottom-line)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#workflow-soft-glow)"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}
              viewport={viewportOnce}
              transition={{
                duration: reducedMotion ? 0 : 0.8,
                delay: reducedMotion ? 0 : 0.28,
                ease: 'easeInOut',
              }}
            />

            {/* Moving light: center to Step 01 */}
            <motion.path
              d="M 560 405 C 460 350, 465 225, 385 225"
              fill="none"
              stroke="url(#moving-light-left)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#workflow-moving-glow)"
              initial={{
                pathLength: 0.08,
                pathOffset: 0,
                opacity: 0,
              }}
              animate={
                reducedMotion
                  ? {
                      pathLength: 1,
                      opacity: 0.45,
                    }
                  : {
                      pathLength: [0.06, 0.25, 0.06],
                      pathOffset: [0, 0.7, 0.94],
                      opacity: [0, 1, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.4,
              }}
            />

            {/* Moving light: center to Step 02 */}
            <motion.path
              d="M 560 405 C 660 350, 655 225, 735 225"
              fill="none"
              stroke="url(#moving-light-right)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#workflow-moving-glow)"
              initial={{
                pathLength: 0.08,
                pathOffset: 0,
                opacity: 0,
              }}
              animate={
                reducedMotion
                  ? {
                      pathLength: 1,
                      opacity: 0.45,
                    }
                  : {
                      pathLength: [0.06, 0.25, 0.06],
                      pathOffset: [0, 0.7, 0.94],
                      opacity: [0, 1, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.4,
              }}
            />

            {/* Moving light: center to Step 03 */}
            <motion.path
              d="M 560 450 C 560 490, 560 520, 560 560"
              fill="none"
              stroke="url(#moving-light-bottom)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#workflow-moving-glow)"
              initial={{
                pathLength: 0.08,
                pathOffset: 0,
                opacity: 0,
              }}
              animate={
                reducedMotion
                  ? {
                      pathLength: 1,
                      opacity: 0.45,
                    }
                  : {
                      pathLength: [0.06, 0.25, 0.06],
                      pathOffset: [0, 0.7, 0.94],
                      opacity: [0, 1, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.4,
              }}
            />
          </svg>

          {/* Center hub */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={viewportOnce}
            transition={{
              duration: reducedMotion ? 0 : 0.7,
              delay: reducedMotion ? 0 : 0.25,
            }}
            className="absolute left-1/2 top-[405px] z-30 -translate-x-1/2 -translate-y-1/2"
          >
            <CenterHub />
          </motion.div>

          {/* Step 3 */}
          <div className="absolute bottom-0 left-1/2 z-20 w-[430px] -translate-x-1/2">
            <WorkflowCard
              stage={stages[2]}
              title={t('stages.execution.label')}
              description={t('stages.execution.detail')}
              floatingText={t('stages.execution.floatingText')}
              active={activeStep === 2}
              onActivate={() => setActiveStep(2)}
            />
          </div>
        </div>

        {/* Tablet and mobile */}
        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto grid max-w-2xl gap-6 lg:hidden"
        >
          <span
            aria-hidden
            className="absolute bottom-14 left-6 top-14 w-px bg-gradient-to-b from-transparent via-accent/45 to-transparent sm:left-1/2"
          />

          {stages.map((stage, index) => (
            <motion.li
              key={stage.id}
              variants={fadeUp}
              className={cn(
                'relative z-10 pl-12 sm:w-[calc(50%-24px)] sm:pl-0',
                index % 2 === 0
                  ? 'sm:justify-self-start'
                  : 'sm:justify-self-end',
              )}
            >
              <span
                className={cn(
                  'absolute left-[7px] top-8 z-20 flex size-9 items-center justify-center rounded-full border bg-background text-xs font-semibold sm:hidden',
                  activeStep === index
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-border text-muted-foreground',
                )}
              >
                {stage.number}
              </span>

              <WorkflowCard
                stage={stage}
                title={t(`stages.${stage.id}.label`)}
                description={t(`stages.${stage.id}.detail`)}
                floatingText={t(`stages.${stage.id}.floatingText`)}
                active={activeStep === index}
                onActivate={() => setActiveStep(index)}
                compact
              />
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

type WorkflowCardProps = {
  stage: Stage
  title: string
  description: string
  floatingText: string
  active: boolean
  compact?: boolean
  onActivate: () => void
}

function WorkflowCard({
  stage,
  title,
  description,
  floatingText,
  active,
  compact = false,
  onActivate,
}: WorkflowCardProps) {
  const reducedMotion = useReducedMotion() ?? false

  const Icon = stage.icon
  const FloatingIcon = stage.floatingIcon

  return (
    <motion.article
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -6,
            }
      }
      className={cn(
        'workflow-gradient-border animate-border group relative w-full rounded-[26px] border border-transparent p-px outline-none',
        'transition-[transform,filter] duration-500',
        active
          ? 'drop-shadow-[0_24px_44px_color-mix(in_oklab,var(--accent)_14%,transparent)]'
          : 'drop-shadow-[0_18px_30px_color-mix(in_oklab,var(--foreground)_7%,transparent)]',
      )}
    >
      <div
        className={cn(
          'relative h-full overflow-hidden rounded-[25px] border border-border/60 bg-card',
          compact ? 'min-h-[300px] p-5' : 'min-h-[315px] p-6',
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_42%)]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-secondary/45 to-transparent"
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em]',
                active
                  ? 'border-accent/30 bg-accent/[0.08] text-accent'
                  : 'border-border bg-secondary/60 text-muted-foreground',
              )}
            >
              Step · {stage.number}
            </span>

            <span
              className={cn(
                'flex size-10 items-center justify-center rounded-xl border transition-all duration-300',
                active
                  ? 'border-accent/35 bg-accent/[0.09] text-accent shadow-[0_8px_22px_color-mix(in_oklab,var(--accent)_14%,transparent)]'
                  : 'border-border bg-secondary/50 text-muted-foreground',
              )}
            >
              <Icon className="size-[18px]" />
            </span>
          </div>

          <h3 className="max-w-[310px] font-display text-xl font-semibold leading-snug tracking-[-0.025em] text-card-foreground">
            {title}
          </h3>

          <p className="mt-3 max-w-[330px] text-sm leading-6 text-muted-foreground">
            {description}
          </p>

          <div className="relative mt-auto pt-7">
            <div className="relative flex min-h-[94px] items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-secondary/45 px-4">
              <div className="absolute inset-x-6 bottom-0 flex items-end justify-center gap-2 opacity-60">
                {[44, 64, 50, 76, 58, 42, 68].map(
                  (height, index) => (
                    <span
                      key={`${stage.id}-${height}-${index}`}
                      style={{
                        height,
                      }}
                      className="w-7 rounded-t-lg bg-accent/[0.08]"
                    />
                  ),
                )}
              </div>

              <motion.div
                animate={
                  active && !reducedMotion
                    ? {
                        y: [0, -4, 0],
                      }
                    : undefined
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 flex w-full max-w-[270px] items-center gap-3 rounded-xl border border-accent/20 bg-gradient-to-r from-surface-ink to-[color-mix(in_oklab,var(--surface-ink)_78%,var(--accent))] px-3 py-3 shadow-[0_16px_28px_color-mix(in_oklab,var(--surface-ink)_20%,transparent)]"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-ink-foreground text-surface-ink">
                  <FloatingIcon className="size-4" />
                </span>

                <span className="truncate text-xs font-semibold text-surface-ink-foreground">
                  {floatingText}
                </span>

                <span className="ml-auto flex size-5 shrink-0 items-center justify-center rounded-full border border-surface-ink-foreground/35">
                  <Check className="size-3 text-surface-ink-foreground" />
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        <span
          aria-hidden
          className={cn(
            'absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-500',
            active
              ? 'scale-x-100 opacity-100'
              : 'scale-x-0 opacity-0',
          )}
        />
      </div>
    </motion.article>
  )
}

function CenterHub() {
  const reducedMotion = useReducedMotion() ?? false

  return (
    <div className="relative flex size-[154px] items-center justify-center">
      {/* Expanding center light */}
      <motion.span
        aria-hidden
        animate={
          reducedMotion
            ? undefined
            : {
                scale: [0.65, 1.35, 1.7],
                opacity: [0.42, 0.16, 0],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeOut',
          repeatDelay: 0.4,
        }}
        className="absolute inset-5 rounded-full border border-accent/40 bg-accent/[0.08] shadow-[0_0_50px_color-mix(in_oklab,var(--accent)_38%,transparent)]"
      />

      <motion.span
        aria-hidden
        animate={
          reducedMotion
            ? undefined
            : {
                scale: [0.8, 1.18, 1.4],
                opacity: [0.3, 0.1, 0],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeOut',
          repeatDelay: 0.4,
          delay: 0.2,
        }}
        className="absolute inset-8 rounded-full bg-accent/[0.12] blur-md"
      />

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 rounded-full border border-accent/20 bg-card/95 shadow-[0_22px_60px_color-mix(in_oklab,var(--foreground)_12%,transparent)]"
      >
        <span className="absolute left-1/2 top-2 size-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_18px_var(--accent)]" />
      </motion.div>

      <div className="absolute inset-[18px] rounded-full border border-border bg-background/95 shadow-inner" />

      <div className="absolute inset-[40px] rounded-full border border-accent/30 bg-accent/[0.08]" />

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                rotate: [0, 5, 0],
              }
        }
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 flex size-11 items-center justify-center rounded-full border border-accent/30 bg-card text-accent shadow-[0_10px_24px_color-mix(in_oklab,var(--accent)_18%,transparent)]"
      >
        <Sparkles className="size-5" />
      </motion.div>
    </div>
  )
}