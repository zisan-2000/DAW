import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  tone?: 'light' | 'ink'
  titleId?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  tone = 'light',
  titleId,
}: SectionHeaderProps) {
  const isInk = tone === 'ink'

  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-4 text-xs font-semibold tracking-[0.18em] uppercase',
            'text-accent',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={cn(
          'font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl',
          isInk ? 'text-surface-ink-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg',
            align === 'center' && 'mx-auto',
            isInk
              ? 'text-surface-ink-foreground/70'
              : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
