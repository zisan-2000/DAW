import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductBreadcrumbs, type Crumb } from './product-breadcrumbs'

type ProductHeroProps = {
  breadcrumbs: Crumb[]
  eyebrow: string
  title: string
  titleAccent?: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function ProductHero({
  breadcrumbs,
  eyebrow,
  title,
  titleAccent,
  description,
  primaryCta,
  secondaryCta,
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_70%_20%,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_10%_80%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_65%)]" />
        <div className="bg-grid-fade absolute inset-0 opacity-35" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductBreadcrumbs items={breadcrumbs} />

        <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>

        <h1 className="font-display max-w-3xl text-balance text-4xl font-semibold tracking-tight text-surface-ink-foreground sm:text-5xl lg:text-[3.25rem]">
          {title}
          {titleAccent ? (
            <>
              {' '}
              <span className="text-accent">{titleAccent}</span>
            </>
          ) : null}
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-surface-ink-foreground/65 sm:text-lg">
          {description}
        </p>

        <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
          <Link href={primaryCta.href} className="inline-flex w-full sm:w-auto">
            <Button className="h-12 w-full rounded-xl bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto">
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
    </section>
  )
}
