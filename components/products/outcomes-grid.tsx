import { CheckCircle2 } from 'lucide-react'

export function OutcomesGrid({
  title = 'Outcomes this engagement supports',
  items,
}: {
  title?: string
  items: string[]
}) {
  return (
    <section className="border-t border-white/8 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-surface-ink-foreground sm:text-3xl">
          {title}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-5"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
              <span className="text-sm leading-relaxed text-surface-ink-foreground/75">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
