'use client'

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HOMEPAGE, TESTIMONIALS } from '@/lib/content'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  const { testimonialsSection } = HOMEPAGE
  const reduced = useReducedMotion() ?? false
  const labelId = useId()
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const liveRef = useRef<HTMLParagraphElement>(null)

  const total = TESTIMONIALS.length
  const active = TESTIMONIALS[index]

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total)
    },
    [total],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (liveRef.current && active) {
      liveRef.current.textContent = `Showing testimonial ${index + 1} of ${total}: ${active.name}`
    }
  }, [index, total, active])

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      next()
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      prev()
    }
  }

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current == null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 48) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  if (!active) return null

  return (
    <Section
      tone="ink"
      padding="default"
      bleed
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <motion.div
          className="mb-10 md:mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              tone="ink"
              titleId="testimonials-heading"
              eyebrow={testimonialsSection.eyebrow}
              title={testimonialsSection.title}
              description={testimonialsSection.description}
            />
          </motion.div>
        </motion.div>

        <p ref={liveRef} className="sr-only" aria-live="polite" />

        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-labelledby={labelId}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <p id={labelId} className="sr-only">
            Client testimonials carousel
          </p>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/3">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.id}
                initial={reduced ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="px-6 py-8 sm:px-10 sm:py-12 lg:px-14"
              >
                {active.isSample ? (
                  <p className="mb-5 text-[10px] tracking-[0.16em] text-accent uppercase">
                    Sample testimonial · not a verified review
                  </p>
                ) : null}

                <p className="font-display max-w-3xl text-xl leading-relaxed text-surface-ink-foreground sm:text-2xl lg:text-[1.75rem]">
                  “{active.text.replace(/^\[SAMPLE\]\s*/, '').replace(/\]$/, '')}”
                </p>

                <footer className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-display text-sm font-semibold text-accent">
                      {active.initials}
                    </span>
                    <div>
                      <cite className="font-display not-italic text-base font-semibold text-surface-ink-foreground">
                        {active.name}
                      </cite>
                      <p className="text-sm text-surface-ink-foreground/55">
                        {active.role}, {active.company}
                      </p>
                    </div>
                  </div>
                  <span className="w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-surface-ink-foreground/60">
                    {active.serviceCategory}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    'h-2.5 rounded-full transition-all',
                    i === index
                      ? 'w-8 bg-accent'
                      : 'w-2.5 bg-white/20 hover:bg-white/40',
                  )}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-surface-ink-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-surface-ink-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
