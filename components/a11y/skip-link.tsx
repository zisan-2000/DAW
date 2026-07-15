import { useTranslations } from 'next-intl'

export function SkipLink() {
  const t = useTranslations('a11y')

  return (
    <a
      href="#main-content"
      className="bg-accent text-accent-foreground focus:ring-ring sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:ring-2 focus:outline-none"
    >
      {t('skipToContent')}
    </a>
  )
}
