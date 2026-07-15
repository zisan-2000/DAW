'use client'

import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { AGENCY_CONFIG, HOMEPAGE } from '@/lib/content'
import { getWhatsAppHref } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

export function FinalCtaSection() {
  const { finalCta } = HOMEPAGE
  const whatsappHref = getWhatsAppHref(finalCta.whatsappMessage)
  const isExternalWhatsApp = whatsappHref.startsWith('http')

  return (
    <Section
      tone="ink"
      padding="loose"
      bleed
      className="overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_70%)]"
        aria-hidden
      />
      <div className="bg-grid-fade pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      {/* Soft top curve hint into CTA */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 leading-0"
        aria-hidden
      >
        <svg
          className="relative block h-10 w-full -translate-y-px rotate-180 sm:h-12"
          viewBox="0 0 1440 88"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48C240 88 480 88 720 56C960 24 1200 8 1440 36V89H0V48Z"
            fill="var(--surface-muted)"
          />
        </svg>
      </div>

      <Container className="relative z-10 pt-6 text-center">
        <motion.div
          className="mx-auto max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-semibold tracking-[0.18em] text-accent uppercase"
          >
            {finalCta.eyebrow}
          </motion.p>

          <motion.h2
            id="final-cta-heading"
            variants={fadeUp}
            className="font-display text-balance text-3xl font-semibold tracking-tight text-surface-ink-foreground sm:text-4xl lg:text-5xl"
          >
            {finalCta.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-surface-ink-foreground/65 sm:text-lg"
          >
            {finalCta.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <Link href={finalCta.primaryCta.href} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="h-12 w-full rounded-xl bg-accent px-6 text-[15px] font-semibold text-accent-foreground hover:bg-accent/90 sm:min-w-60"
              >
                {finalCta.primaryCta.label}
                <ArrowRight className="size-4" />
              </Button>
            </Link>

            {isExternalWhatsApp ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-xl border-white/15 bg-white/3 px-6 text-[15px] text-surface-ink-foreground hover:border-accent/40 hover:bg-white/6 hover:text-surface-ink-foreground sm:min-w-50"
                >
                  <MessageCircle className="size-4" />
                  {finalCta.secondaryCta.label}
                </Button>
              </a>
            ) : (
              <Link href={whatsappHref} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-xl border-white/15 bg-white/3 px-6 text-[15px] text-surface-ink-foreground hover:border-accent/40 hover:bg-white/6 hover:text-surface-ink-foreground sm:min-w-50"
                >
                  <MessageCircle className="size-4" />
                  {finalCta.secondaryCta.label}
                </Button>
              </Link>
            )}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-md text-sm text-surface-ink-foreground/45"
          >
            {finalCta.reassurance}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-xs text-surface-ink-foreground/30"
          >
            {AGENCY_CONFIG.shortName} · Response typically within one business day
            (editable)
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  )
}
