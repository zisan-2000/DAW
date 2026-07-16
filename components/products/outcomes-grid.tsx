'use client'

import { useTranslations } from 'next-intl'
import { CheckCircle2 } from 'lucide-react'

export function OutcomesGrid({
  title,
  items,
  variant = 'cards',
}: {
  title?: string
  items: string[]
  variant?: 'cards' | 'strip' | 'editorial'
}) {
  const t = useTranslations('products.ui')
  const resolvedTitle = title ?? t('outcomesTitle')

  return (
    <section className="border-t border-border/70 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {resolvedTitle}
        </h2>

        {variant === 'strip' ? (
          <ul className="mt-10 flex flex-wrap gap-3">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-foreground/85"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {variant === 'cards' ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-5"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                <span className="text-sm leading-relaxed text-foreground/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        {variant === 'editorial' ? (
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {items.map((item, index) => (
              <li key={item} className="border-t border-accent/40 pt-5">
                <p className="font-display text-sm text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
