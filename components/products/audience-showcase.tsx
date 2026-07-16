'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowUpRight } from 'lucide-react'
import type { AudienceLayout } from '@/lib/products/design'
import { cn } from '@/lib/utils'

export type AudienceCard = {
  label: string
  description?: string
  href: string
}

export function AudienceShowcase({
  title,
  layout,
  links,
}: {
  title?: string
  layout: AudienceLayout
  links: AudienceCard[]
}) {
  const t = useTranslations('products.ui')
  const resolvedTitle = title ?? t('whoItsFor')

  if (!links.length) return null

  return (
    <section className="border-t border-border/70 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {resolvedTitle}
          </h2>
          <span className="hidden text-xs tracking-[0.16em] text-muted-foreground uppercase sm:inline">
            {t('audiencesCount', { count: links.length })}
          </span>
        </div>

        {layout === 'bento' ? (
          <ul className="grid gap-4 md:grid-cols-6">
            {links.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  index < 2 ? 'md:col-span-3 min-h-[180px]' : 'md:col-span-2 min-h-[160px]',
                )}
              >
                <AudienceCardLink link={link} featured={index < 2} />
              </li>
            ))}
          </ul>
        ) : null}

        {layout === 'list' ? (
          <ul className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
            {links.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-start justify-between gap-6 px-5 py-5 transition-colors hover:bg-muted/50 sm:px-7"
                >
                  <div className="flex gap-4">
                    <span className="font-display text-sm text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                        {link.label}
                      </p>
                      {link.description ? (
                        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

        {layout === 'magazine' ? (
          <ul className="grid gap-6 lg:grid-cols-12">
            {links.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  index === 0 ? 'lg:col-span-7' : 'lg:col-span-5',
                  index > 1 && 'lg:col-span-4',
                )}
              >
                <Link
                  href={link.href}
                  className="group block h-full border-t border-accent/40 pt-5"
                >
                  <p className="text-[11px] tracking-[0.16em] text-accent uppercase">
                    {t('profile', { n: String(index + 1).padStart(2, '0') })}
                  </p>
                  <p className="font-display mt-3 text-2xl font-semibold tracking-tight text-foreground group-hover:text-accent">
                    {link.label}
                  </p>
                  {link.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {link.description}
                    </p>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

        {layout === 'rail' ? (
          <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex min-w-max gap-4">
              {links.map((link) => (
                <li key={link.href} className="w-[280px] shrink-0">
                  <AudienceCardLink link={link} tall />
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {layout === 'matrix' ? (
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5"
                >
                  <span className="absolute top-0 right-0 p-3 font-display text-4xl text-foreground/5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                    {link.label}
                  </p>
                  {link.description ? (
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  ) : null}
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-accent uppercase">
                    {t('open')}
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}

function AudienceCardLink({
  link,
  featured,
  tall,
}: {
  link: AudienceCard
  featured?: boolean
  tall?: boolean
}) {
  return (
    <Link
      href={link.href}
      className={cn(
        'group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40',
        tall && 'min-h-[240px]',
        featured &&
          'bg-[radial-gradient(ellipse_80%_70%_at_100%_0%,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_60%)]',
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <p className="font-display text-xl font-semibold text-foreground group-hover:text-accent">
          {link.label}
        </p>
        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-hover:text-accent" />
      </div>
      {link.description ? (
        <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
          {link.description}
        </p>
      ) : null}
    </Link>
  )
}
