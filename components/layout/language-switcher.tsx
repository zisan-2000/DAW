'use client'

import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'
import { Globe } from 'lucide-react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { locales, localeNames, type Locale } from '@/i18n/routing'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  function handleChange(nextLocale: Locale) {
    router.replace(
      // @ts-expect-error -- params shape is dynamic per route
      { pathname, params },
      { locale: nextLocale },
    )
  }

  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        aria-haspopup="true"
        aria-label="Change language"
      >
        <Globe size={16} aria-hidden="true" />
        <span className="hidden sm:inline">{localeNames[locale as Locale]}</span>
      </button>

      <div
        className="
          invisible absolute right-0 top-full z-50
          w-40 translate-y-2 pt-2 opacity-0
          transition-all duration-200
          group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
          group-focus-within:visible group-focus-within:translate-y-0
          group-focus-within:opacity-100
        "
      >
        <div className="overflow-hidden rounded-xl border border-border bg-card p-1 shadow-2xl shadow-black/10">
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => handleChange(l)}
              className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted hover:text-accent ${
                l === locale ? 'font-semibold text-accent' : 'text-foreground'
              }`}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
