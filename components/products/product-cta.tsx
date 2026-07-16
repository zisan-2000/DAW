'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SvgSignalField } from '@/components/visuals/svg-signal-field'
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
  title,
  description,
  primaryLabel,
  primaryHref = '/contact?type=consultation',
  variant = 'centered',
}: ProductCtaProps) {
  const t = useTranslations('products.ui')
  const resolvedTitle = title ?? t('ctaDefaultTitle')
  const resolvedDescription = description ?? t('ctaDefaultDescription')
  const resolvedPrimaryLabel = primaryLabel ?? t('requestConsultation')
  const whatsappHref = getWhatsAppHref(t('whatsappPrefill'))
  const isExternal = whatsappHref.startsWith('http')

  const actions = (
    <div
      className={cn(
        'flex flex-col gap-3 sm:flex-row sm:items-center',
        variant === 'centered' && 'items-stretch justify-center',
        (variant === 'split' || variant === 'minimal' || variant === 'signal') &&
          'justify-start',
        variant === 'wide' && 'justify-end',
      )}
    >
      <Link href={primaryHref} className="w-full sm:w-auto">
        <Button className="h-12 w-full rounded-xl bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto">
          {resolvedPrimaryLabel}
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
            {t('chatWhatsApp')}
          </Button>
        </a>
      ) : (
        <Link href={whatsappHref} className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="h-12 w-full rounded-xl border-white/15 bg-white/3 px-6 text-surface-ink-foreground hover:border-accent/40 hover:bg-white/6 hover:text-surface-ink-foreground sm:w-auto"
          >
            <MessageCircle className="size-4" />
            {t('chatWhatsApp')}
          </Button>
        </Link>
      )}
    </div>
  )

  return (
    <section className="relative overflow-hidden bg-surface-ink text-surface-ink-foreground">
      <SvgSignalField variant="dusk" className="opacity-90" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {variant === 'centered' ? (
          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_70%)] p-8 md:p-12">
            <div className="bg-grid-fade pointer-events-none absolute inset-0 opacity-25" aria-hidden />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {resolvedTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-surface-ink-foreground/60 sm:text-base">
                {resolvedDescription}
              </p>
              <div className="mt-8">{actions}</div>
            </div>
          </div>
        ) : null}

        {variant === 'split' ? (
          <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/3 p-8 md:grid-cols-2 md:p-10">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {resolvedTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-surface-ink-foreground/60 sm:text-base">
                {resolvedDescription}
              </p>
            </div>
            {actions}
          </div>
        ) : null}

        {variant === 'minimal' ? (
          <div className="border-t border-accent/40 pt-10">
            <p className="text-[11px] tracking-[0.18em] text-accent uppercase">
              {t('privateConsultation')}
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
              {resolvedTitle}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-surface-ink-foreground/60">
              {resolvedDescription}
            </p>
            <div className="mt-8">{actions}</div>
          </div>
        ) : null}

        {variant === 'wide' ? (
          <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(105deg,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_55%)] p-8 md:flex-row md:items-end md:justify-between md:p-12">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                {resolvedTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-surface-ink-foreground/60">
                {resolvedDescription}
              </p>
            </div>
            {actions}
          </div>
        ) : null}

        {variant === 'signal' ? (
          <div className="overflow-hidden rounded-2xl border border-accent/30 bg-black/15">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="size-2 rounded-full bg-accent" />
              <span className="text-[11px] tracking-[0.16em] text-surface-ink-foreground/45 uppercase">
                {t('priorityIntake')}
              </span>
            </div>
            <div className="p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {resolvedTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-surface-ink-foreground/60">
                {resolvedDescription}
              </p>
              <div className="mt-8">{actions}</div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
