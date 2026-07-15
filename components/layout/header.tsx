'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import { AGENCY_CONFIG } from '@/lib/content'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/layout/language-switcher'

export function Header() {
  const t = useTranslations('nav')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const reduced = useReducedMotion() ?? false

  const phoneNumber = AGENCY_CONFIG.phone || '+1 (800) 555-0199'
  const phoneHref = `tel:${phoneNumber.replace(/[^+\d]/g, '')}`

  const navLinkClass =
    'inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4'

  const navigationItems = [
    { href: '/services', label: t('services') },
    { href: '/industries', label: t('industries') },
    { href: '/case-studies', label: t('caseStudies') },
    { href: '/blog', label: t('blog') },
    { href: '/about', label: t('about') },
  ]

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex min-h-20 max-w-[1600px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display flex shrink-0 items-center gap-2.5 text-lg font-semibold text-foreground transition-colors hover:text-accent"
          aria-label={`${AGENCY_CONFIG.shortName} home`}
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-sm font-bold text-accent-foreground shadow-sm">
            {AGENCY_CONFIG.shortName.replace(/[\[\]]/g, '').charAt(0) || 'A'}
          </div>

          <span className="hidden 2xl:inline">{AGENCY_CONFIG.shortName}</span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-5 xl:flex 2xl:gap-7"
          aria-label={t('primaryNavigation')}
        >
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <LanguageSwitcher />

          <Link href="/contact?type=consultation">
            <Button className="h-10 whitespace-nowrap rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90">
              {t('freeConsultation')}
            </Button>
          </Link>

          <a
            href={phoneHref}
            className="group flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            aria-label={t('callPhone', { phone: phoneNumber })}
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-accent/10">
              <Phone size={16} aria-hidden="true" />
            </span>

            <span className="hidden 2xl:inline">{phoneNumber}</span>
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />

          <a
            href={phoneHref}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label={t('callPhone', { phone: phoneNumber })}
          >
            <Phone size={18} />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-accent hover:bg-muted hover:text-accent"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border bg-background xl:hidden"
          >
            <nav
              className="mx-auto max-h-[calc(100vh-5rem)] max-w-7xl overflow-y-auto px-4 py-4 sm:px-6"
              aria-label={t('mobileNavigation')}
            >
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="flex min-h-12 items-center rounded-xl px-3 font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
              >
                {t('home')}
              </Link>

              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex min-h-12 items-center rounded-xl px-3 font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="flex min-h-12 items-center rounded-xl px-3 font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
              >
                {t('contact')}
              </Link>

              <div className="mt-5 border-t border-border pt-5">
                <Link href="/contact?type=consultation" onClick={closeMobileMenu} className="block">
                  <Button className="h-12 w-full rounded-xl bg-accent font-semibold text-accent-foreground shadow-sm hover:bg-accent/90">
                    {t('freeConsultation')}
                  </Button>
                </Link>

                <a
                  href={phoneHref}
                  className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Phone size={17} />
                  <span>{phoneNumber}</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
