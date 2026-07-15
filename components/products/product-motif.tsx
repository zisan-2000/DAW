import type { HeroLayout } from '@/lib/products/design'

/** Decorative motifs — unique per product layout */
export function ProductMotif({ layout }: { layout: HeroLayout }) {
  if (layout === 'split-orbit') {
    return (
      <div className="relative aspect-square w-full max-w-md" aria-hidden>
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-8 rounded-full border border-accent/25" />
        <div className="absolute inset-16 rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_color-mix(in_oklab,var(--accent)_60%,transparent)]" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <span
            key={deg}
            className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/70"
            style={{
              transform: `rotate(${deg}deg) translateY(-7.5rem) translateX(-50%)`,
            }}
          />
        ))}
        <div className="absolute inset-[22%] rounded-[2rem] border border-dashed border-accent/20" />
      </div>
    )
  }

  if (layout === 'centered-shield') {
    return (
      <div className="relative mx-auto flex h-44 w-44 items-center justify-center" aria-hidden>
        <div className="absolute inset-0 rotate-45 rounded-3xl border border-accent/30 bg-accent/5" />
        <div className="absolute inset-6 rotate-45 rounded-2xl border border-white/15" />
        <div className="relative z-10 h-16 w-12 rounded-b-[2rem] rounded-t-lg border-2 border-accent/60 bg-accent/10" />
      </div>
    )
  }

  if (layout === 'briefing-panel') {
    return (
      <div
        className="w-full rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm"
        aria-hidden
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.18em] text-accent uppercase">
            Confidential brief
          </span>
          <span className="size-2 rounded-full bg-accent" />
        </div>
        <div className="space-y-3">
          <div className="h-2 w-3/4 rounded-full bg-white/10" />
          <div className="h-2 w-full rounded-full bg-white/8" />
          <div className="h-2 w-5/6 rounded-full bg-white/8" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {['Risk', 'Scope', 'Owner'].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-black/20 px-2 py-3 text-center"
              >
                <p className="text-[10px] text-surface-ink-foreground/40 uppercase">
                  {label}
                </p>
                <p className="mt-1 font-display text-sm text-accent">—</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (layout === 'concierge-wide') {
    return (
      <div className="flex w-full items-end gap-3" aria-hidden>
        {[40, 70, 55, 90, 65].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-xl border border-accent/20 bg-accent/10"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    )
  }

  // serp-signal
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/25"
      aria-hidden
    >
      <div className="border-b border-white/10 px-4 py-3">
        <div className="h-8 rounded-full border border-white/10 bg-white/5" />
      </div>
      <div className="space-y-3 p-4">
        {[1, 0.7, 0.55, 0.4].map((opacity, i) => (
          <div key={i} className="space-y-1.5" style={{ opacity }}>
            <div className="h-2.5 w-2/3 rounded bg-accent/40" />
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-5/6 rounded bg-white/8" />
          </div>
        ))}
      </div>
    </div>
  )
}
