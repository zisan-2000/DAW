import { AlertCircle } from 'lucide-react'

export function AudiencePains({
  title = 'Common challenges',
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
              className="flex gap-3 rounded-2xl border border-white/8 bg-white/3 p-5"
            >
              <AlertCircle className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
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
