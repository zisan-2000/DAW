'use client'

import { useEffect, useState } from 'react'
import { Sparkles, Sun } from 'lucide-react'
import { THEME_COOKIE, isTheme, type Theme } from '@/lib/theme'

function readDomTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function persistTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  window.localStorage.setItem('theme', theme)
  document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=31536000; SameSite=Lax`
}

/** Light ↔ dusk (copper indigo) — no flat black theme. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const fromStorage = isTheme(stored) ? stored : null
    const fromDom = readDomTheme()
    // Prefer light first look; dusk is an opt-in alternate
    const initial = fromStorage ?? fromDom ?? 'light'
    persistTheme(initial)
    setTheme(initial)
  }, [])

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    persistTheme(next)
  }

  const isDusk = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
      aria-label={isDusk ? 'Switch to light theme' : 'Switch to dusk theme'}
      title={isDusk ? 'Light theme' : 'Dusk theme'}
    >
      {theme === null ? (
        <span className="size-[18px]" aria-hidden="true" />
      ) : isDusk ? (
        <Sun size={18} />
      ) : (
        <Sparkles size={18} />
      )}
    </button>
  )
}
