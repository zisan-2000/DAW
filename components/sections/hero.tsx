'use client'

import { Link } from '@/i18n/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AGENCY_CONFIG, HOMEPAGE } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { HeroArt } from '@/components/visuals/hero-art'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function HeroSection() {
  const reduced = useReducedMotion() ?? false
  const t = useTranslations('homepage.hero')
  const { hero } = HOMEPAGE

  return (
    <Section
      tone="light"
      padding="none"
      bleed
      className="relative isolate min-h-[min(92vh,920px)]"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed luminous plane */}
      <div
        className="absolute inset-0 bg-[linear-gradient(152deg,var(--background)_0%,color-mix(in_oklab,var(--accent)_7%,var(--background))_38%,color-mix(in_oklab,var(--surface-muted)_55%,var(--accent))_68%,var(--background)_100%)]"
        aria-hidden
      />
      <HeroArt className="lg:left-[36%]" />

      {/* Soft readability veil — left only */}
      <div
        className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-background from-5% via-background/90 via-40% to-transparent lg:w-[62%]"
        aria-hidden
      />

      {/* Bottom curve into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 -mb-px leading-0"
        aria-hidden
      >
        <svg
          className="relative block h-14 w-full translate-y-px sm:h-[4.5rem] md:h-[5.5rem]"
          viewBox="0 0 1440 88"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48C240 88 480 88 720 56C960 24 1200 8 1440 36V89H0V48Z"
            fill="var(--background)"
          />
        </svg>
      </div>

      <Container className="relative z-10 flex min-h-[min(92vh,920px)] flex-col justify-center pt-20 pb-36 md:pt-24 md:pb-40">
        <motion.div
          className="max-w-2xl lg:max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Brand as hero-level signal */}
          <motion.p
            variants={fadeUp}
            className="font-display text-[clamp(1.65rem,1rem+2.2vw,2.75rem)] font-bold tracking-[-0.03em] text-accent"
          >
            {AGENCY_CONFIG.shortName}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm font-medium tracking-[0.14em] text-muted-foreground uppercase"
          >
            {t('growthPartner')}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="font-display mt-7 max-w-[18ch] text-[clamp(2.15rem,1.05rem+3.4vw,3.85rem)] leading-[1.2] font-bold tracking-[-0.035em] text-foreground"
          >
            {t('headlineBefore')}{' '}
            <span className="text-accent">{t('headlineAccent')}</span>{' '}
            {t('headlineAfter')}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-pretty text-base leading-[1.75] text-muted-foreground sm:text-lg"
          >
            {t('supporting')}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href={hero.primaryCta.href} className="inline-flex w-full sm:w-auto">
              <Button
                size="lg"
                className="h-13 w-full gap-2 rounded-xl bg-accent px-7 text-[15px] font-semibold text-accent-foreground transition duration-300 hover:-translate-y-0.5 hover:bg-accent/92 sm:w-auto"
              >
                {t('primaryCta')}
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="h-13 w-full rounded-xl border-border bg-background/70 px-7 text-[15px] font-medium text-foreground backdrop-blur-sm transition duration-300 hover:border-accent/45 hover:bg-background sm:w-auto"
              >
                {t('secondaryCta')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.a
          href="#trusted-by"
          className="absolute bottom-16 left-4 flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent sm:bottom-20 sm:left-6 lg:left-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          aria-label="Scroll to trusted by section"
        >
          {!reduced ? (
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background/80"
            >
              <ArrowDown className="size-3.5" />
            </motion.span>
          ) : (
            <span className="flex size-10 items-center justify-center rounded-full border border-border bg-background/80">
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
