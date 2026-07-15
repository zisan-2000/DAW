import { Link } from '@/i18n/navigation'
import type { ProductCaseStudy } from '@/lib/products/types'
import { ArrowUpRight } from 'lucide-react'

export function ProductCaseStudyCards({
  studies,
  emptyLabel = 'No demonstration case studies for this product yet. Add verified projects in the product registry.',
}: {
  studies: ProductCaseStudy[]
  emptyLabel?: string
}) {
  if (!studies.length) {
    return (
      <p className="rounded-2xl border border-dashed border-white/15 px-6 py-12 text-center text-sm text-surface-ink-foreground/50">
        {emptyLabel}
      </p>
    )
  }

  return (
    <ul className="grid gap-5 lg:grid-cols-2">
      {studies.map((study) => (
        <li
          key={study.id}
          className="flex flex-col rounded-2xl border border-white/8 bg-white/3 p-6"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent/30 px-2.5 py-0.5 text-[11px] tracking-wide text-accent uppercase">
              {study.industryLabel}
            </span>
            {study.isSample ? (
              <span className="text-[11px] tracking-wide text-surface-ink-foreground/40 uppercase">
                Sample · demo
              </span>
            ) : null}
          </div>
          <h3 className="font-display mt-4 text-xl font-semibold text-surface-ink-foreground">
            {study.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-surface-ink-foreground/60">
            {study.summary}
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p>
              <span className="font-semibold text-surface-ink-foreground">
                Challenge:{' '}
              </span>
              <span className="text-surface-ink-foreground/55">
                {study.challenge}
              </span>
            </p>
            <p>
              <span className="font-semibold text-surface-ink-foreground">
                Solution:{' '}
              </span>
              <span className="text-surface-ink-foreground/55">
                {study.solution}
              </span>
            </p>
          </div>
          <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="mb-3 text-[10px] tracking-[0.14em] text-surface-ink-foreground/40 uppercase">
              Results · {study.resultsNote}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {study.results.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-base font-semibold text-accent">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-surface-ink-foreground/45">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/contact?type=consultation"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
          >
            Discuss a similar engagement
            <ArrowUpRight className="size-3.5" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
