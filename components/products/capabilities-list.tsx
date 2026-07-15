export function CapabilitiesList({
  title = 'What’s included',
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
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {items.map((item, index) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/3 px-5 py-4"
            >
              <span className="font-display text-xs font-semibold tracking-wider text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
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
