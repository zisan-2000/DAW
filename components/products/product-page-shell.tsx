import type { ReactNode } from 'react'

/** Light page canvas — hero + CTA stay dark ink islands */
export function ProductPageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground">{children}</div>
}
