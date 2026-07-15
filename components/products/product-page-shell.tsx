import type { ReactNode } from 'react'

export function ProductPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-ink text-surface-ink-foreground">
      {children}
    </div>
  )
}
