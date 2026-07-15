import { Link } from '@/i18n/navigation'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppHref } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

export type CtaVariant = 'centered' | 'split' | 'minimal' | 'wide' | 'signal'

type ProductCtaProps = {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  variant?: CtaVariant
}

export function ProductCta({
  title = 'Ready to discuss your next step?',
  description = 'Tell us your goals and constraints. We will recommend a practical roadmap—without pressure or generic pitches.',
  primaryLabel = 'Request a Free Consultation',
  primaryHref = '/contact?type=consultation',
  variant = 'centered',
}: ProductCtaProps) {
  const whatsappHref = getWhatsAppHref(
    'Hello, I visited your Products page and would like to discuss a project.',
  )
  const isExternal = whatsappHref.startsWith('http')

  const actions = (
    <div
      className={cn(
        'flex flex-col gap-3 sm:flex-row sm:items-center',
        variant === 'centered' && 'items-stretch justify-center',
        variant === 'split' && 'justify-start',
        variant === 'minimal' && 'justify-start',
        variant === 'wide' && 'justify-end',
        variant === 'signal' && 'justify-start',
      )}
    >
      <Link href={primaryHref} className="w-full sm:w-auto">
        <Button className="h-12 w-full rounded-xl bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto">
          {primaryLabel}
          <ArrowRight className="size-4" />
        </Button>
      </Link>
      {isExternal ? (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button
            variant="outline"
            className="h-12 w-full rounded-xl border-white/15 bg-white/3 px-6 text-surface-ink-foreground hover:border-accent/40 hover:bg-white/6 hover:text-surface-ink-foreground sm:w-auto"
          >
            <MessageCircle className="size-4" />
            Chat on WhatsApp
          </Button>
        </a>
      ) : (
        <Link href={whatsappHref} className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="h-12 w-full rounded-xl border-white/15 bg-white/3 px-6 text-surface-ink-foreground hover:border-accent/40 hover:bg-white/6 hover:text-surface-ink-foreground sm:w-auto"
          >
            <MessageCircle className="size-4" />
            Chat on WhatsApp
          </Button>
        </Link>
      )}
    </div>
  )

  return (
    <section className="border-t border-white/8 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {variant === 'centered' ? (
          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_70%)] p-8 md:p-12">
            <div className="bg-grid-fade pointer-events-none absolute inset-0 opacity-25" aria-hidden />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-surface-ink-foreground sm:text-3xl">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-surface-ink-foreground/60 sm:text-base">
                {description}
              </p>
              <div className="mt-8">{actions}</div>
            </div>
          </div>
        ) : null}

        {variant === 'split' ? (
          <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/3 p-8 md:grid-cols-2 md:p-10">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-surface-ink-foreground sm:text-3xl">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-surface-ink-foreground/60 sm:text-base">
                {description}
              </p>
            </div>
            {actions}
          </div>
        ) : null}

        {variant === 'minimal' ? (
          <div className="border-t border-accent/40 pt-10">
            <p className="text-[11px] tracking-[0.18em] text-accent uppercase">
              Private consultation
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-surface-ink-foreground">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-surface-ink-foreground/60">
              {description}
            </p>
            <div className="mt-8">{actions}</div>
          </div>
        ) : null}

        {variant === 'wide' ? (
          <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(105deg,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_55%)] p-8 md:flex-row md:items-end md:justify-between md:p-12">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-surface-ink-foreground">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-surface-ink-foreground/60">
                {description}
              </p>
            </div>
            {actions}
          </div>
        ) : null}

        {variant === 'signal' ? (
          <div className="overflow-hidden rounded-2xl border border-accent/30 bg-black/30">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="size-2 rounded-full bg-accent" />
              <span className="text-[11px] tracking-[0.16em] text-surface-ink-foreground/45 uppercase">
                Priority intake
              </span>
            </div>
            <div className="p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-surface-ink-foreground sm:text-3xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-surface-ink-foreground/60">
                {description}
              </p>
              <div className="mt-8">{actions}</div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
