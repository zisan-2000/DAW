import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { HeroLayout } from '@/lib/products/design'
import { ProductBreadcrumbs, type Crumb } from './product-breadcrumbs'
import { ProductMotif } from './product-motif'
import { cn } from '@/lib/utils'

type ProductHeroProps = {
  breadcrumbs: Crumb[]
  eyebrow: string
  title: string
  titleAccent?: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  layout: HeroLayout
  motifLabel: string
  signalWord: string
  accentNote: string
}

export function ProductHero({
  breadcrumbs,
  eyebrow,
  title,
  titleAccent,
  description,
  primaryCta,
  secondaryCta,
  layout,
  motifLabel,
  signalWord,
  accentNote,
}: ProductHeroProps) {
  const isCentered = layout === 'centered-shield' || layout === 'concierge-wide'
  const isSplit =
    layout === 'split-orbit' ||
    layout === 'briefing-panel' ||
    layout === 'serp-signal'

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        layout === 'concierge-wide' ? 'pt-32 pb-20 md:pt-40 md:pb-28' : 'pt-28 pb-16 md:pt-36 md:pb-24',
      )}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className={cn(
            'absolute rounded-full blur-3xl',
            layout === 'split-orbit' &&
              'top-[-10%] right-[-5%] h-[28rem] w-[28rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_28%,transparent),transparent)]',
            layout === 'centered-shield' &&
              'top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_20%,transparent),transparent)]',
            layout === 'briefing-panel' &&
              'top-0 left-0 h-[22rem] w-[22rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_16%,transparent),transparent)]',
            layout === 'concierge-wide' &&
              'right-[10%] bottom-0 h-[18rem] w-[40rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_14%,transparent),transparent)]',
            layout === 'serp-signal' &&
              'top-[20%] right-0 h-[26rem] w-[26rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_24%,transparent),transparent)]',
          )}
        />
        <div className="bg-grid-fade absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductBreadcrumbs
          items={breadcrumbs}
          className={cn(isCentered && 'justify-center [&_ol]:justify-center')}
        />

        <div
          className={cn(
            isSplit && 'grid items-center gap-12 lg:grid-cols-12 lg:gap-10',
            isCentered && 'mx-auto max-w-3xl text-center',
          )}
        >
          <div className={cn(isSplit && 'lg:col-span-7')}>
            <div
              className={cn(
                'mb-6 flex flex-wrap items-center gap-3',
                isCentered && 'justify-center',
              )}
            >
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
                {motifLabel}
              </span>
              <span className="text-xs tracking-wide text-surface-ink-foreground/40 uppercase">
                {signalWord}
              </span>
            </div>

            <p
              className={cn(
                'mb-4 text-xs font-semibold tracking-[0.18em] text-accent uppercase',
                isCentered && 'mx-auto',
              )}
            >
              {eyebrow}
            </p>

            <h1
              className={cn(
                'font-display text-balance font-semibold tracking-[-0.04em] text-surface-ink-foreground',
                layout === 'concierge-wide'
                  ? 'text-[clamp(2.6rem,1.4rem+3.8vw,4.4rem)] leading-[1.02]'
                  : 'text-[clamp(2.35rem,1.2rem+3.6vw,4rem)] leading-[1.05]',
              )}
            >
              {title}
              {titleAccent ? (
                <>
                  {' '}
                  <span className="text-accent">{titleAccent}</span>
                </>
              ) : null}
            </h1>

            <p
              className={cn(
                'mt-5 text-pretty text-base leading-relaxed text-surface-ink-foreground/65 sm:text-lg',
                isCentered ? 'mx-auto max-w-2xl' : 'max-w-xl',
              )}
            >
              {description}
            </p>

            <p
              className={cn(
                'mt-4 text-[11px] tracking-[0.16em] text-surface-ink-foreground/35 uppercase',
                isCentered && 'mx-auto',
              )}
            >
              {accentNote}
            </p>

            <div
              className={cn(
                'mt-9 flex w-full flex-col gap-3 sm:flex-row sm:items-center',
                isCentered && 'mx-auto max-w-lg justify-center sm:justify-center',
                !isCentered && 'max-w-xl',
              )}
            >
              <Link href={primaryCta.href} className="inline-flex w-full sm:w-auto">
                <Button className="h-12 w-full rounded-xl bg-accent px-6 font-semibold text-accent-foreground shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--accent)_55%,transparent)] hover:bg-accent/90 sm:w-auto">
                  {primaryCta.label}
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="inline-flex w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-xl border-white/15 bg-white/3 px-6 text-surface-ink-foreground hover:border-accent/40 hover:bg-white/6 hover:text-surface-ink-foreground sm:w-auto"
                  >
                    {secondaryCta.label}
                  </Button>
                </Link>
              ) : null}
            </div>
          </div>

          {isSplit ? (
            <div className="hidden lg:col-span-5 lg:flex lg:justify-end">
              <ProductMotif layout={layout} />
            </div>
          ) : null}

          {layout === 'centered-shield' ? (
            <div className="mt-12">
              <ProductMotif layout={layout} />
            </div>
          ) : null}

          {layout === 'concierge-wide' ? (
            <div className="mx-auto mt-14 max-w-xl">
              <ProductMotif layout={layout} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
