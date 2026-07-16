'use client'

import { SvgSignalField } from '@/components/visuals/svg-signal-field'

/** Subtle site-wide SVG atmosphere behind page content. */
export function PageSvgBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <SvgSignalField variant="page" animated={false} className="opacity-70" />
    </div>
  )
}
