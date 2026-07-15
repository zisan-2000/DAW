import { AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AudiencePains({
  title = 'Common challenges',
  items,
  variant = 'grid',
}: {
  title?: string
  items: string[]
  variant?: 'grid' | 'stacked' | 'columns'
}) {
  return (
    <section className="border-t border-white/8 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-surface-ink-foreground sm:text-4xl">
          {title}
        </h2>

        <ul
          className={cn(
            'mt-10',
            variant === 'grid' && 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3',
            variant === 'stacked' && 'mx-auto max-w-3xl space-y-3',
            variant === 'columns' && 'columns-1 gap-4 sm:columns-2',
          )}
        >
          {items.map((item, index) => (
            <li
              key={item}
              className={cn(
                'flex gap-3 break-inside-avoid rounded-2xl border border-white/8 bg-white/3 p-5',
                variant === 'stacked' && 'items-start',
              )}
            >
              {variant === 'stacked' ? (
                <span className="font-display text-sm text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
              ) : (
                <AlertCircle className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
              )}
              <span className="text-sm leading-relaxed text-surface-ink-foreground/70">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
