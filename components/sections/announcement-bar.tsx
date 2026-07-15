'use client'

import { ArrowUpRight, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { AGENCY_CONFIG, HOMEPAGE } from '@/lib/content'
import { Container } from '@/components/ui/container'

export function AnnouncementBar() {
  const t = useTranslations('homepage.announcement')
  const tShort = useTranslations('announcementBar')
  const phoneHref = AGENCY_CONFIG.phone.startsWith('[')
    ? undefined
    : `tel:${AGENCY_CONFIG.phone.replace(/[^\d+]/g, '')}`

  return (
    <div className="relative z-60 border-b border-white/10 bg-surface-ink text-surface-ink-foreground">
      <Container className="flex min-h-10 items-center justify-between gap-3 py-2.5">
        <p className="min-w-0 truncate text-[13px] leading-snug text-surface-ink-foreground/80 sm:text-sm sm:whitespace-normal">
          <span className="hidden sm:inline">{t('text')}</span>
          <span className="sm:hidden">{tShort('textShort')}</span>
        </p>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          {phoneHref ? (
            <a
              href={phoneHref}
              className="hidden items-center gap-1.5 text-xs font-medium text-surface-ink-foreground/70 transition-colors hover:text-accent md:inline-flex"
            >
              <Phone className="size-3.5" aria-hidden />
              {AGENCY_CONFIG.phone}
            </a>
          ) : (
            <span className="hidden text-xs text-surface-ink-foreground/45 md:inline">
              {AGENCY_CONFIG.phone}
            </span>
          )}

          <Link
            href={HOMEPAGE.announcement.ctaHref}
            className="inline-flex max-w-[9.5rem] items-center gap-1 truncate text-xs font-semibold text-accent transition-colors hover:text-accent/80 sm:max-w-none"
          >
            <span className="truncate sm:hidden">{tShort('ctaShort')}</span>
            <span className="hidden sm:inline">{t('ctaLabel')}</span>
            <ArrowUpRight className="size-3.5 shrink-0" aria-hidden />
          </Link>
        </div>
      </Container>
    </div>
  )
}
