'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/lib/products/types'
import { cn } from '@/lib/utils'

export type FaqVariant = 'boxed' | 'wide' | 'editorial'

export function FaqAccordion({
  title,
  items,
  variant = 'boxed',
}: {
  title?: string
  items: FaqItem[]
  variant?: FaqVariant
}) {
  const t = useTranslations('products.ui')
  const resolvedTitle = title ?? t('faqs')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!items.length) return null

  return (
    <section className="border-t border-border/70 py-16 md:py-24">
      <div
        className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          variant === 'boxed' && 'max-w-3xl',
          variant === 'wide' && 'max-w-5xl',
          variant === 'editorial' && 'max-w-7xl',
        )}
      >
        <h2
          className={cn(
            'font-display font-semibold tracking-tight text-foreground',
            variant === 'editorial'
              ? 'text-3xl sm:text-4xl'
              : 'text-2xl sm:text-3xl',
          )}
        >
          {resolvedTitle}
        </h2>

        {variant === 'editorial' ? (
          <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {items.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={item.question}
                  className="border-t border-border py-5"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <span className="font-display text-base font-medium text-foreground hover:text-accent">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'mt-1 size-4 shrink-0 text-muted-foreground transition-transform',
                        isOpen && 'rotate-180',
                      )}
                      aria-hidden
                    />
                  </button>
                  {isOpen ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              )
            })}
          </div>
        ) : (
          <div
            className={cn(
              'mt-8 divide-y divide-border',
              variant === 'boxed' && 'rounded-2xl border border-border bg-card',
              variant === 'wide' && 'border-y border-border',
            )}
          >
            {items.map((item, index) => {
              const isOpen = openIndex === index
              const panelId = `faq-panel-${index}`
              const buttonId = `faq-button-${index}`
              return (
                <div key={item.question}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <span className="text-sm font-medium sm:text-base">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          'size-4 shrink-0 text-muted-foreground transition-transform',
                          isOpen && 'rotate-180',
                        )}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-5 pb-4"
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
