'use client'

import { useTranslations } from 'next-intl'
import type { ProcessStep } from '@/lib/products/types'
import type { ProcessLayout } from '@/lib/products/design'
import { cn } from '@/lib/utils'

export function ProcessSteps({
  title,
  steps,
  layout = 'timeline',
}: {
  title?: string
  steps: ProcessStep[]
  layout?: ProcessLayout
}) {
  const t = useTranslations('products.ui')
  const resolvedTitle = title ?? t('howItWorks')

  return (
    <section className="border-t border-border/70 bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {resolvedTitle}
        </h2>

        {layout === 'timeline' || layout === 'rail' ? (
          <ol className="relative mt-12 space-y-0">
            <span
              className="absolute top-4 bottom-4 left-[1.35rem] w-px bg-border md:left-6"
              aria-hidden
            />
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 py-5 md:gap-8">
                <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-background font-display text-sm font-semibold text-accent shadow-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1 rounded-2xl border border-border bg-card p-5 md:p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        ) : null}

        {layout === 'cards' || layout === 'steps-wide' ? (
          <ol
            className={cn(
              'mt-10 grid gap-4',
              layout === 'steps-wide'
                ? 'md:grid-cols-2 xl:grid-cols-4'
                : 'sm:grid-cols-2',
            )}
          >
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border bg-card bg-[linear-gradient(180deg,color-mix(in_oklab,var(--accent)_6%,transparent),transparent_55%)] p-6"
              >
                <span className="font-display text-3xl font-semibold text-accent/80">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        ) : null}

        {layout === 'serp-flow' ? (
          <ol className="mt-10 grid gap-3 md:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                {index < steps.length - 1 ? (
                  <span
                    className="absolute top-8 left-[60%] hidden h-px w-[80%] bg-accent/30 md:block"
                    aria-hidden
                  />
                ) : null}
                <div className="relative z-10 rounded-2xl border border-accent/20 bg-card p-5 shadow-sm">
                  <p className="text-[10px] tracking-[0.16em] text-accent uppercase">
                    {t('stage', { n: index + 1 })}
                  </p>
                  <h3 className="font-display mt-3 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </section>
  )
}
