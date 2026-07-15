'use client'

import { useReducedMotion } from 'framer-motion'
import { HOMEPAGE } from '@/lib/content'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { cn } from '@/lib/utils'

function LogoMark({ name, initials }: { name: string; initials: string }) {
  return (
    <div
      className={cn(
        'flex h-14 min-w-[148px] items-center justify-center gap-3 rounded-xl border border-border/80 bg-background px-5',
        'text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground',
      )}
      title={`${name} (demo placeholder)`}
    >
      <span className="flex size-8 items-center justify-center rounded-md bg-muted text-xs font-bold tracking-wide">
        {initials}
      </span>
      <span className="text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  )
}

export function LogoMarqueeSection() {
  const reduced = useReducedMotion() ?? false
  const { logoMarquee } = HOMEPAGE
  const logos = logoMarquee.logos
  const loop = [...logos, ...logos]

  return (
    <Section
      id="trusted-by"
      tone="light"
      padding="tight"
      className="-mt-px border-0"
      aria-labelledby="trusted-heading"
    >
      <Container>
        <div className="mb-8 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
          <h2
            id="trusted-heading"
            className="font-display text-sm font-semibold tracking-[0.16em] text-foreground uppercase"
          >
            {logoMarquee.heading}
          </h2>
          <p className="text-xs text-muted-foreground">{logoMarquee.note}</p>
        </div>
      </Container>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-24" />

        {reduced ? (
          <Container>
            <ul className="flex flex-wrap justify-center gap-3">
              {logos.map((logo) => (
                <li key={logo.name}>
                  <LogoMark name={logo.name} initials={logo.initials} />
                </li>
              ))}
            </ul>
          </Container>
        ) : (
          <div className="overflow-hidden" aria-hidden={false}>
            <div className="marquee-track flex w-max gap-4 pr-4">
              {loop.map((logo, index) => (
                <LogoMark
                  key={`${logo.name}-${index}`}
                  name={logo.name}
                  initials={logo.initials}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
