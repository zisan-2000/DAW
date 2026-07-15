import { Link } from '@/i18n/navigation'
import type { ProductCaseStudy } from '@/lib/products/types'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type CaseLayout = 'grid' | 'stack' | 'magazine' | 'rail' | 'serp'

export function ProductCaseStudyCards({
  studies,
  layout = 'grid',
  emptyLabel = 'No demonstration case studies for this product yet. Add verified projects in the product registry.',
}: {
  studies: ProductCaseStudy[]
  layout?: CaseLayout
  emptyLabel?: string
}) {
  if (!studies.length) {
    return (
      <p className="rounded-2xl border border-dashed border-white/15 px-6 py-12 text-center text-sm text-surface-ink-foreground/50">
        {emptyLabel}
      </p>
    )
  }

  if (layout === 'rail') {
    return (
      <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex min-w-max gap-4">
          {studies.map((study) => (
            <li key={study.id} className="w-[340px] shrink-0">
              <CaseCard study={study} compact />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (layout === 'stack') {
    return (
      <ul className="space-y-4">
        {studies.map((study) => (
          <li key={study.id}>
            <CaseCard study={study} horizontal />
          </li>
        ))}
      </ul>
    )
  }

  if (layout === 'magazine') {
    return (
      <ul className="grid gap-8 lg:grid-cols-12">
        {studies.map((study, index) => (
          <li
            key={study.id}
            className={cn(index === 0 ? 'lg:col-span-7' : 'lg:col-span-5')}
          >
            <CaseCard study={study} editorial featured={index === 0} />
          </li>
        ))}
      </ul>
    )
  }

  if (layout === 'serp') {
    return (
      <ul className="space-y-3">
        {studies.map((study, index) => (
          <li
            key={study.id}
            className="rounded-xl border border-white/10 bg-black/20 p-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display text-xs text-accent">
                #{index + 1}
              </span>
              <span className="text-[11px] tracking-wide text-surface-ink-foreground/40 uppercase">
                {study.industryLabel}
              </span>
              {study.isSample ? (
                <span className="text-[11px] text-surface-ink-foreground/35 uppercase">
                  Sample
                </span>
              ) : null}
            </div>
            <h3 className="font-display mt-2 text-lg font-semibold text-accent">
              {study.title}
            </h3>
            <p className="mt-1 text-sm text-surface-ink-foreground/55">
              {study.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {study.results.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-sm font-semibold text-surface-ink-foreground">
                    {metric.value}
                  </p>
                  <p className="text-[11px] text-surface-ink-foreground/40">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="grid gap-5 lg:grid-cols-2">
      {studies.map((study) => (
        <li key={study.id}>
          <CaseCard study={study} />
        </li>
      ))}
    </ul>
  )
}

function CaseCard({
  study,
  compact,
  horizontal,
  editorial,
  featured,
}: {
  study: ProductCaseStudy
  compact?: boolean
  horizontal?: boolean
  editorial?: boolean
  featured?: boolean
}) {
  if (editorial) {
    return (
      <article
        className={cn(
          'flex h-full flex-col border-t border-accent/35 pt-6',
          featured && 'lg:pr-6',
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] tracking-[0.14em] text-accent uppercase">
            {study.industryLabel}
          </span>
          {study.isSample ? (
            <span className="text-[11px] text-surface-ink-foreground/35 uppercase">
              Demo
            </span>
          ) : null}
        </div>
        <h3
          className={cn(
            'font-display mt-3 font-semibold tracking-tight text-surface-ink-foreground',
            featured ? 'text-2xl sm:text-3xl' : 'text-xl',
          )}
        >
          {study.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-surface-ink-foreground/55">
          {study.summary}
        </p>
        <div className="mt-auto grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
          {study.results.map((metric) => (
            <div key={metric.label}>
              <p className="font-display text-base font-semibold text-accent">
                {metric.value}
              </p>
              <p className="mt-0.5 text-[11px] text-surface-ink-foreground/40">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </article>
    )
  }

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl border border-white/8 bg-white/3 p-6',
        horizontal && 'md:flex-row md:gap-8 md:p-7',
        compact && 'min-h-[320px]',
      )}
    >
      <div className={cn(horizontal && 'md:flex-1')}>
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
        {!compact ? (
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
        ) : null}
      </div>
      <div
        className={cn(
          'mt-5 rounded-xl border border-white/10 bg-black/20 p-4',
          horizontal && 'mt-0 md:w-56 md:shrink-0',
        )}
      >
        <p className="mb-3 text-[10px] tracking-[0.14em] text-surface-ink-foreground/40 uppercase">
          Results · {study.resultsNote}
        </p>
        <div
          className={cn(
            'grid gap-3',
            horizontal ? 'grid-cols-1' : 'grid-cols-3',
          )}
        >
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
        className={cn(
          'mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent',
          horizontal && 'md:hidden',
        )}
      >
        Discuss a similar engagement
        <ArrowUpRight className="size-3.5" />
      </Link>
    </article>
  )
}
