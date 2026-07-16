'use client'

import { useTranslations } from 'next-intl'
import { AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AudiencePains({
  title,
  items,
  variant = 'grid',
}: {
  title?: string
  items: string[]
  variant?: 'grid' | 'stacked' | 'columns'
}) {
  const t = useTranslations('products.ui')
  const resolvedTitle = title ?? t('commonChallenges')

  return (
    <section className="border-t border-border/70 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {resolvedTitle}
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
                'flex gap-3 break-inside-avoid rounded-2xl border border-border bg-card p-5',
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
              <span className="text-sm leading-relaxed text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
