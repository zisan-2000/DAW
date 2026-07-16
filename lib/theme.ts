export const THEME_COOKIE = 'theme'

export type Theme = 'light' | 'dark'

export function isTheme(value: string | undefined | null): value is Theme {
  return value === 'light' || value === 'dark'
}
