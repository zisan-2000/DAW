import type { ProcessStep } from '@/lib/products/types'

export function ProcessSteps({
  title = 'How it works',
  steps,
}: {
  title?: string
  steps: ProcessStep[]
}) {
  return (
    <section className="border-t border-white/8 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-surface-ink-foreground sm:text-3xl">
          {title}
        </h2>
        <ol className="mt-10 space-y-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/3 p-5 sm:flex-row sm:gap-6 sm:p-6"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-accent/35 font-display text-sm font-semibold text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-surface-ink-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-surface-ink-foreground/60">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
