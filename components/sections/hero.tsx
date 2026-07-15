'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { AGENCY_CONFIG, HOMEPAGE } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

/** Full-bleed abstract growth-system visual — theme-linked, not a card */
function HeroVisual({ reduced }: { reduced: boolean }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 lg:left-[42%]"
      aria-hidden
    >
      {/* Soft teal depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_70%_40%,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_85%_75%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_65%)]" />

      {/* Perspective mesh */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.55]"
        viewBox="0 0 800 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="heroNode" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.35" />
          </linearGradient>
          <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Structural rings */}
        <circle cx="520" cy="310" r="210" stroke="white" strokeOpacity="0.06" />
        <circle cx="520" cy="310" r="150" stroke="white" strokeOpacity="0.08" />
        <circle cx="520" cy="310" r="90" stroke="var(--accent)" strokeOpacity="0.22" />

        {/* Connection lattice */}
        <path
          d="M180 420 C260 360, 320 280, 400 250 C470 224, 520 210, 580 230"
          stroke="url(#heroLine)"
          strokeWidth="1.25"
        />
        <path
          d="M200 180 C300 200, 380 260, 460 300 C540 340, 620 380, 700 360"
          stroke="url(#heroLine)"
          strokeWidth="1.25"
        />
        <path
          d="M240 520 C320 480, 400 400, 480 360 C560 320, 620 280, 700 240"
          stroke="url(#heroLine)"
          strokeWidth="1.25"
        />
        <path
          d="M360 140 L520 310 L680 480"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
        <path
          d="M680 140 L520 310 L360 480"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="1"
        />

        {/* System nodes */}
        {[
          [400, 250],
          [580, 230],
          [460, 300],
          [520, 310],
          [620, 280],
          [480, 360],
          [560, 380],
          [700, 360],
        ].map(([x, y], i) => (
          <g key={i} filter={i === 3 ? 'url(#heroGlow)' : undefined}>
            <circle
              cx={x}
              cy={y}
              r={i === 3 ? 7 : 4}
              fill={i === 3 ? 'url(#heroNode)' : 'var(--accent)'}
              fillOpacity={i === 3 ? 1 : 0.65}
            />
            {i === 3 ? (
              <circle
                cx={x}
                cy={y}
                r="18"
                stroke="var(--accent)"
                strokeOpacity="0.35"
                fill="none"
              />
            ) : null}
          </g>
        ))}
      </svg>

      {/* Floating orbit — restrained motion */}
      {!reduced ? (
        <motion.div
          className="absolute top-[28%] right-[18%] size-44 rounded-full border border-accent/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        </motion.div>
      ) : (
        <div className="absolute top-[28%] right-[18%] size-44 rounded-full border border-accent/20" />
      )}

      {!reduced ? (
        <motion.div
          className="absolute right-[8%] bottom-[18%] size-28 rounded-full border border-white/10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      ) : null}
    </div>
  )
}

export function HeroSection() {
  const reduced = useReducedMotion() ?? false
  const { hero } = HOMEPAGE

  return (
    <Section
      tone="ink"
      padding="none"
      bleed
      className="relative isolate min-h-[min(88vh,860px)]"
      aria-labelledby="hero-heading"
    >
      {/* Base plane */}
      <div className="absolute inset-0 bg-surface-ink" aria-hidden />
      <div
        className="bg-grid-fade absolute inset-0 opacity-40 motion-safe-only"
        aria-hidden
      />
      <div className="bg-noise absolute inset-0" aria-hidden />
      <HeroVisual reduced={reduced} />

      {/* Left readability veil */}
      <div
        className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-surface-ink via-surface-ink/90 to-transparent lg:w-[62%]"
        aria-hidden
      />

      {/* Curved bottom edge into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 -mb-px leading-[0]"
        aria-hidden
      >
        <svg
          className="relative block h-[56px] w-full translate-y-px sm:h-[72px] md:h-[88px]"
          viewBox="0 0 1440 88"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48C240 88 480 88 720 56C960 24 1200 8 1440 36V89H0V48Z"
            fill="var(--background)"
          />
        </svg>
      </div>

      <Container className="relative z-10 flex min-h-[min(88vh,860px)] flex-col justify-center pt-14 pb-32 md:pt-16 md:pb-36">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-7"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="mb-7 flex items-center gap-3">
              <span className="font-display text-sm font-semibold tracking-[0.22em] text-accent uppercase">
                {AGENCY_CONFIG.shortName}
              </span>
              <span className="h-px w-10 bg-accent/50" aria-hidden />
              <span className="text-xs tracking-wide text-surface-ink-foreground/45">
                Growth partner
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={fadeUp}
              className={cn(
                'font-display text-balance text-surface-ink-foreground',
                'text-[clamp(2.4rem,1.2rem+4.2vw,4.6rem)] leading-[1.05] font-semibold tracking-[-0.04em]',
              )}
            >
              Building digital{' '}
              <span className="text-accent">growth systems</span>
              <span className="mt-1 block text-surface-ink-foreground/92">
                for ambitious businesses
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-surface-ink-foreground/65 sm:text-lg"
            >
              {hero.supporting}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link href={hero.primaryCta.href} className="inline-flex w-full sm:w-auto">
                <Button
                  size="lg"
                  className="h-12 w-full rounded-xl bg-accent px-6 text-[15px] font-semibold text-accent-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_40%,transparent),0_12px_40px_-12px_color-mix(in_oklab,var(--accent)_55%,transparent)] hover:bg-accent/90 sm:w-auto"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
                </Button>
              </Link>
              <Link href={hero.secondaryCta.href} className="inline-flex w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-xl border-white/15 bg-white/3 px-6 text-[15px] text-surface-ink-foreground backdrop-blur-sm hover:border-accent/40 hover:bg-white/6 hover:text-surface-ink-foreground sm:w-auto"
                >
                  {hero.secondaryCta.label}
                </Button>
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-lg border-l border-accent/35 pl-4 text-sm leading-relaxed text-surface-ink-foreground/50"
            >
              {hero.trustLine}
            </motion.p>
          </motion.div>

          {/* Desktop spacer keeps visual breathing room in the composition */}
          <div className="hidden lg:col-span-5 lg:block" aria-hidden />
        </div>

        <motion.a
          href="#trusted-by"
          className="absolute bottom-16 left-4 flex items-center gap-3 text-surface-ink-foreground/40 transition-colors hover:text-accent sm:bottom-20 sm:left-6 lg:left-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          aria-label="Scroll to trusted by section"
        >
          {!reduced ? (
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex size-9 items-center justify-center rounded-full border border-white/15"
            >
              <ArrowDown className="size-3.5" />
            </motion.span>
          ) : (
            <span className="flex size-9 items-center justify-center rounded-full border border-white/15">
              <ArrowDown className="size-3.5" />
            </span>
          )}
          <span className="text-[11px] tracking-[0.18em] uppercase">
            Explore
          </span>
        </motion.a>
      </Container>
    </Section>
  )
}
