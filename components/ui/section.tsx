import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type SectionTone = 'light' | 'muted' | 'ink' | 'accent'

type SectionProps = ComponentProps<'section'> & {
  tone?: SectionTone
  bleed?: boolean
  padding?: 'default' | 'tight' | 'loose' | 'none'
}

const toneStyles: Record<SectionTone, string> = {
  light: 'bg-background text-foreground',
  muted: 'bg-surface-muted text-foreground',
  /* Dusk copper — luminous indigo, not flat black */
  ink: 'bg-surface-ink text-surface-ink-foreground',
  accent: 'bg-accent text-accent-foreground',
}

const paddingStyles = {
  none: '',
  tight: 'py-12 sm:py-16 md:py-20',
  default: 'py-16 sm:py-20 md:py-28',
  loose: 'py-20 sm:py-24 md:py-32',
}

export function Section({
  className,
  tone = 'light',
  bleed = false,
  padding = 'default',
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-tone={tone}
      className={cn(
        'relative w-full',
        toneStyles[tone],
        paddingStyles[padding],
        bleed && 'overflow-x-clip',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
