import type { ProcessStep } from '@/lib/products/types'
import type { ProcessLayout } from '@/lib/products/design'
import { cn } from '@/lib/utils'

export function ProcessSteps({
  title = 'How it works',
  steps,
  layout = 'timeline',
}: {
  title?: string
  steps: ProcessStep[]
  layout?: ProcessLayout
}) {
  return (
    <section className="border-t border-white/8 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-surface-ink-foreground sm:text-4xl">
          {title}
        </h2>

        {layout === 'timeline' || layout === 'rail' ? (
          <ol className="relative mt-12 space-y-0">
            <span
              className="absolute top-4 bottom-4 left-[1.35rem] w-px bg-white/10 md:left-6"
              aria-hidden
            />
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 py-5 md:gap-8">
                <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-surface-ink font-display text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1 rounded-2xl border border-white/8 bg-white/3 p-5 md:p-6">
                  <h3 className="font-display text-lg font-semibold text-surface-ink-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-ink-foreground/60">
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
                className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--accent)_8%,transparent),transparent_55%)] p-6"
              >
                <span className="font-display text-3xl font-semibold text-accent/80">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-surface-ink-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-surface-ink-foreground/60">
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
                <div className="relative z-10 rounded-2xl border border-accent/20 bg-black/25 p-5">
                  <p className="text-[10px] tracking-[0.16em] text-accent uppercase">
                    Stage {index + 1}
                  </p>
                  <h3 className="font-display mt-3 text-base font-semibold text-surface-ink-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-surface-ink-foreground/55">
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
