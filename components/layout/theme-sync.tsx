'use client'

import { useEffect } from 'react'
import { THEME_COOKIE, isTheme, type Theme } from '@/lib/theme'

/**
 * Syncs localStorage / system preference into cookie + html class
 * without injecting a <script> into the React tree (React 19 safe).
 */
export function ThemeSync() {
  useEffect(() => {
    const cookieMatch = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${THEME_COOKIE}=`))
      ?.split('=')[1]

    const fromCookie = isTheme(cookieMatch) ? cookieMatch : null
    const stored = window.localStorage.getItem('theme')
    const fromStorage = isTheme(stored) ? stored : null
    const fromSystem = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'

    const theme: Theme = fromCookie ?? fromStorage ?? fromSystem

    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
    if (!fromCookie) {
      document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=31536000; SameSite=Lax`
    }
  }, [])

  return null
}
