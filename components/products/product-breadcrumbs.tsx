'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type Crumb = {
  label: string
  href?: string
}

export function ProductBreadcrumbs({
  items,
  className,
  tone = 'light',
}: {
  items: Crumb[]
  className?: string
  tone?: 'light' | 'ink'
}) {
  const t = useTranslations('products.ui')
  const muted =
    tone === 'ink'
      ? 'text-surface-ink-foreground/45'
      : 'text-muted-foreground'
  const current =
    tone === 'ink'
      ? 'text-surface-ink-foreground/80'
      : 'text-foreground'
  const hover =
    tone === 'ink' ? 'hover:text-accent' : 'hover:text-accent'

  return (
    <nav aria-label={t('breadcrumbAria')} className={cn('mb-8', className)}>
      <ol className={cn('flex flex-wrap items-center gap-1.5 text-sm', muted)}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className="size-3.5 shrink-0 opacity-60" aria-hidden />
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href} className={cn('transition-colors', hover)}>
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(isLast && current)}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
