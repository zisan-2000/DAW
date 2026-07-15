import { cn } from '@/lib/utils'

export function CapabilitiesList({
  title = 'What’s included',
  items,
  variant = 'two-col',
}: {
  title?: string
  items: string[]
  variant?: 'two-col' | 'dense' | 'featured'
}) {
  return (
    <section className="border-t border-border/70 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>

        <ul
          className={cn(
            'mt-10',
            variant === 'two-col' && 'grid gap-3 sm:grid-cols-2',
            variant === 'dense' && 'grid gap-2 sm:grid-cols-2 lg:grid-cols-3',
            variant === 'featured' && 'grid gap-4 md:grid-cols-2',
          )}
        >
          {items.map((item, index) => (
            <li
              key={item}
              className={cn(
                'flex items-start gap-4 rounded-xl border border-border bg-card px-5 py-4',
                variant === 'featured' &&
                  index === 0 &&
                  'border-accent/25 bg-accent/5 md:col-span-2 md:py-6',
              )}
            >
              <span className="font-display text-xs font-semibold tracking-wider text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span
                className={cn(
                  'leading-relaxed text-foreground/80',
                  variant === 'featured' && index === 0 ? 'text-base' : 'text-sm',
                )}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
