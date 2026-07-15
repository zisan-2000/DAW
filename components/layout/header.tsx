'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { AGENCY_CONFIG, SERVICES } from '@/lib/content'
import { Button } from '@/components/ui/button'

const navLinkClass =
  'text-sm text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const reduced = useReducedMotion() ?? false

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="font-display flex items-center gap-2.5 text-lg font-semibold text-foreground transition-colors hover:text-accent"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
            {AGENCY_CONFIG.shortName.replace(/[\[\]]/g, '').charAt(0) || 'A'}
          </div>
          <span className="hidden sm:inline">{AGENCY_CONFIG.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/about" className={navLinkClass}>
            About
          </Link>

          <div className="group relative">
            <button
              type="button"
              className={`${navLinkClass} inline-flex items-center gap-1`}
              aria-haspopup="true"
            >
              Services
              <ChevronDown size={16} aria-hidden />
            </button>
            <div className="invisible absolute left-0 mt-0 w-56 rounded-xl border border-border bg-card pt-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="block px-4 py-2.5 text-sm text-foreground transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-muted hover:text-accent"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/industries" className={navLinkClass}>
            Industries
          </Link>
          <Link href="/case-studies" className={navLinkClass}>
            Work
          </Link>
          <Link href="/blog" className={navLinkClass}>
            Blog
          </Link>
          <Link href="/contact" className={navLinkClass}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/contact?type=consultation" className="hidden sm:inline-flex">
            <Button className="h-10 rounded-xl bg-accent px-4 text-accent-foreground hover:bg-accent/90">
              Get a Free Consultation
            </Button>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="touch-target md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-muted"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            className="border-t border-border bg-card md:hidden"
          >
            <nav className="space-y-1 px-4 py-4" aria-label="Mobile">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSubmenu(activeSubmenu === 'services' ? null : 'services')
                  }
                  className="flex w-full items-center justify-between py-3 text-left text-foreground hover:text-accent"
                  aria-expanded={activeSubmenu === 'services'}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeSubmenu === 'services' ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {activeSubmenu === 'services' && (
                    <motion.div
                      initial={reduced ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={reduced ? undefined : { opacity: 0, height: 0 }}
                      className="mt-1 space-y-1 border-l border-border pl-4"
                    >
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block py-2.5 text-sm text-muted-foreground hover:text-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { href: '/industries', label: 'Industries' },
                { href: '/case-studies', label: 'Work' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact?type=consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 block"
              >
                <Button className="h-11 w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90">
                  Get a Free Consultation
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
