'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ReactLenis } from 'lenis/react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react'
import {
  ArrowUpRight,
  Building2,
  Fuel,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { cn } from '@/lib/utils'

const caseStudies = [
  {
    id: 'company-dispute',
    translationKey: 'companyDispute',
    image: '/images/case-studies/company-dispute.webp',
    icon: Building2,
    slug: 'company-linked-to-dispute-with-ex-employee',
  },
  {
    id: 'privacy-risk',
    translationKey: 'privacyRisk',
    image: '/images/case-studies/privacy-risk.webp',
    icon: ShieldCheck,
    slug: 'mitigating-broad-based-privacy-risk',
  },
  {
    id: 'philanthropist-press',
    translationKey: 'philanthropistPress',
    image: '/images/case-studies/philanthropist-press.webp',
    icon: HeartHandshake,
    slug: 'philanthropist-attacked-by-the-press',
  },
  {
    id: 'oil-gas-threats',
    translationKey: 'oilGasThreats',
    image: '/images/case-studies/oil-gas-threats.webp',
    icon: Fuel,
    slug: 'oil-and-gas-companies-facing-threats',
  },
] as const

type CaseStudy = (typeof caseStudies)[number]

interface CaseStudyTranslations {
  title: string
  category: string
  problem: string
  outcome: string
  result: string
  timeframe: string
  caseStudy: string
  reputationCaseStudy: string
  problemLabel: string
  outcomeLabel: string
  readFullCaseStudy: string
}

export function FeaturedCaseStudiesSection() {
  const t = useTranslations('homepage.featuredCaseStudies')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const getTranslations = (
    caseStudy: CaseStudy,
  ): CaseStudyTranslations => ({
    title: t(`items.${caseStudy.translationKey}.title`),
    category: t(`items.${caseStudy.translationKey}.category`),
    problem: t(`items.${caseStudy.translationKey}.problem`),
    outcome: t(`items.${caseStudy.translationKey}.outcome`),
    result: t(`items.${caseStudy.translationKey}.result`),
    timeframe: t(`items.${caseStudy.translationKey}.timeframe`),
    caseStudy: t('common.caseStudy'),
    reputationCaseStudy: t('common.reputationCaseStudy'),
    problemLabel: t('common.problem'),
    outcomeLabel: t('common.outcome'),
    readFullCaseStudy: t('common.readFullCaseStudy'),
  })

  return (
    <ReactLenis root>
      <Section
        tone="muted"
        padding="none"
        aria-labelledby="case-studies-heading"
        className="relative isolate overflow-visible bg-background"
      >
        {/* Background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-44 top-24 size-[480px] rounded-full bg-accent/[0.07] blur-[140px]" />

          <div className="absolute -left-44 bottom-40 size-[420px] rounded-full bg-surface-ink/[0.04] blur-[130px]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_3%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_3%,transparent)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_96%)]" />
        </div>

        <Container>
          {/* Heading */}
          <div className="mx-auto max-w-3xl px-4 pb-12 pt-20 text-center sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28">
            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.07] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent"
            >
              <Sparkles className="size-3.5" />
              {t('eyebrow')}
            </motion.div>

            <motion.h2
              id="case-studies-heading"
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                delay: 0.08,
              }}
              className="font-display text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {t('title')}
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                delay: 0.14,
              }}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
            >
              {t('description')}
            </motion.p>
          </div>

          {/* Desktop stacking cards */}
          <div
            ref={containerRef}
            className="relative hidden lg:block"
          >
            {caseStudies.map((caseStudy, index) => {
              const targetScale =
                1 - (caseStudies.length - index) * 0.045

              const rangeStart =
                index / Math.max(caseStudies.length, 1)

              return (
                <StackingCaseStudyCard
                  key={caseStudy.id}
                  index={index}
                  progress={scrollYProgress}
                  range={[rangeStart, 1]}
                  targetScale={targetScale}
                >
                  <CaseStudyCard
                    caseStudy={caseStudy}
                    index={index}
                    translations={getTranslations(caseStudy)}
                  />
                </StackingCaseStudyCard>
              )
            })}
          </div>

          {/* Mobile and tablet */}
          <div className="grid gap-6 pb-16 lg:hidden">
            {caseStudies.map((caseStudy, index) => (
              <motion.article
                key={caseStudy.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="overflow-hidden rounded-[28px] border border-border/80 bg-card shadow-[0_24px_65px_color-mix(in_oklab,var(--foreground)_8%,transparent)]"
              >
                <CaseStudyCard
                  caseStudy={caseStudy}
                  index={index}
                  translations={getTranslations(caseStudy)}
                  mobile
                />
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>
    </ReactLenis>
  )
}

interface StackingCaseStudyCardProps {
  index: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  children: React.ReactNode
}

function StackingCaseStudyCard({
  index,
  progress,
  range,
  targetScale,
  children,
}: StackingCaseStudyCardProps) {
  const cardContainerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start end', 'start start'],
  })

  const scale = useTransform(
    progress,
    range,
    [1, targetScale],
  )

  const contentScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.06, 1],
  )

  return (
    <div
      ref={cardContainerRef}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <motion.article
        style={{
          scale,
          top: `calc(-4vh + ${index * 26}px)`,
        }}
        className="relative -top-[7%] w-full origin-top overflow-hidden rounded-[32px] border border-border/80 bg-card shadow-[0_36px_110px_color-mix(in_oklab,var(--foreground)_15%,transparent)]"
      >
        <motion.div
          style={{
            scale: contentScale,
          }}
          className="origin-center"
        >
          {children}
        </motion.div>
      </motion.article>
    </div>
  )
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index: number
  translations: CaseStudyTranslations
  mobile?: boolean
}

function CaseStudyCard({
  caseStudy,
  index,
  translations,
  mobile = false,
}: CaseStudyCardProps) {
  const Icon = caseStudy.icon

  return (
    <div
      className={cn(
        'grid bg-card',
        mobile
          ? 'grid-cols-1'
          : 'min-h-[570px] grid-cols-[0.92fr_1.08fr]',
      )}
    >
      {/* Image panel */}
      <div
        className={cn(
          'relative isolate overflow-hidden bg-surface-ink',
          mobile ? 'min-h-[300px]' : 'min-h-[570px]',
        )}
      >
        <Image
          src={caseStudy.image}
          alt={translations.title}
          fill
          sizes={
            mobile
              ? '100vw'
              : '(max-width: 1280px) 45vw, 520px'
          }
          className="object-cover transition-transform duration-700 hover:scale-[1.035]"
          priority={index === 0}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-surface-ink via-surface-ink/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-surface-ink/25 via-transparent to-accent/[0.08]" />

        <div className="absolute left-6 top-6 z-10 flex items-center gap-3 sm:left-8 sm:top-8">
          <span className="flex size-11 items-center justify-center rounded-xl border border-white/20 bg-black/25 text-white shadow-xl backdrop-blur-md">
            <Icon className="size-5" />
          </span>

          <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
            {translations.category}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-9 lg:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
            {translations.caseStudy}{' '}
            {String(index + 1).padStart(2, '0')}
          </p>

          <h3 className="mt-3 max-w-md font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
            {translations.title}
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            <ResultBadge value={translations.result} />
            <ResultBadge value={translations.timeframe} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          'relative flex flex-col overflow-hidden',
          mobile ? 'p-6 sm:p-8' : 'p-10 xl:p-12',
        )}
      >
        <span
          aria-hidden
          className="absolute -right-1 top-2 font-display text-[120px] font-semibold leading-none text-foreground/[0.025]"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            <ShieldCheck className="size-3" />
            {translations.reputationCaseStudy}
          </span>

          <h3
            className={cn(
              'mt-5 max-w-2xl font-display font-semibold leading-[1.1] tracking-[-0.04em] text-foreground',
              mobile
                ? 'text-2xl sm:text-3xl'
                : 'text-3xl xl:text-[40px]',
            )}
          >
            {translations.title}
          </h3>
        </div>

        <div className="relative z-10 mt-8 grid gap-5">
          <CaseStudyContentBlock
            number="01"
            title={translations.problemLabel}
            content={translations.problem}
          />

          <CaseStudyContentBlock
            number="02"
            title={translations.outcomeLabel}
            content={translations.outcome}
            highlighted
          />
        </div>

        <div className="relative z-10 mt-auto pt-8">
          <Button
            className="h-11 rounded-xl px-5"
          >
            <Link href={`/case-studies/${caseStudy.slug}`}>
              {translations.readFullCaseStudy}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface CaseStudyContentBlockProps {
  number: string
  title: string
  content: string
  highlighted?: boolean
}

function CaseStudyContentBlock({
  number,
  title,
  content,
  highlighted = false,
}: CaseStudyContentBlockProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border p-5 sm:p-6',
        highlighted
          ? 'border-accent/25 bg-accent/[0.055]'
          : 'border-border/75 bg-background/55',
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'font-display text-xs font-semibold',
            highlighted
              ? 'text-accent'
              : 'text-muted-foreground',
          )}
        >
          {number}
        </span>

        <span
          className={cn(
            'h-px flex-1',
            highlighted
              ? 'bg-accent/25'
              : 'bg-border',
          )}
        />

        {highlighted ? (
          <ShieldCheck className="size-4 text-accent" />
        ) : null}
      </div>

      <h4 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
        {title}
      </h4>

      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {content}
      </p>
    </div>
  )
}

function ResultBadge({
  value,
}: {
  value: string
}) {
  return (
    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.11em] text-white backdrop-blur-md">
      {value}
    </span>
  )
}