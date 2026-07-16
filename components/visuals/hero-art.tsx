'use client'

import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

/** Dedicated hero artwork — full-bleed growth orbit, not a card */
export function HeroArt({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const reduced = useReducedMotion() ?? false
  const gA = `ha-${uid}`
  const gB = `hb-${uid}`
  const gC = `hc-${uid}`

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
      aria-hidden
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_78%_42%,color-mix(in_oklab,var(--accent)_34%,transparent),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_95%_85%,color-mix(in_oklab,var(--accent)_16%,transparent),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_55%_10%,color-mix(in_oklab,var(--foreground)_5%,transparent),transparent_55%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={gA} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id={gB} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={gC} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft concentric field */}
        <g opacity="0.9">
          <circle
            cx="820"
            cy="420"
            r="320"
            stroke="var(--accent)"
            strokeOpacity="0.14"
            strokeWidth="1.5"
          />
          <circle
            cx="820"
            cy="420"
            r="240"
            stroke="var(--accent)"
            strokeOpacity="0.22"
            strokeWidth="1.5"
            strokeDasharray="4 18"
          />
          <circle
            cx="820"
            cy="420"
            r="160"
            stroke="var(--accent)"
            strokeOpacity="0.38"
            strokeWidth="2"
          />
          <circle
            cx="820"
            cy="420"
            r="72"
            stroke="var(--accent)"
            strokeOpacity="0.5"
            strokeWidth="2.5"
          />
        </g>

        {/* Sweeping growth curves */}
        <path
          d="M180 680 C360 560, 520 480, 680 450 C820 424, 960 400, 1120 360"
          stroke={`url(#${gA})`}
          strokeWidth="3"
        />
        <path
          d="M220 220 C380 280, 520 340, 680 380 C820 412, 940 430, 1100 500"
          stroke={`url(#${gA})`}
          strokeWidth="2.25"
        />
        <path
          d="M480 120 C560 260, 640 340, 820 420 C980 490, 1080 560, 1180 700"
          stroke={`url(#${gB})`}
          strokeWidth="2"
        />

        {/* Focal node cluster */}
        <circle cx="820" cy="420" r="28" fill={`url(#${gC})`} />
        <circle cx="820" cy="420" r="8" fill="var(--accent)" />
        <circle cx="680" cy="450" r="5" fill="var(--accent)" fillOpacity="0.85" />
        <circle cx="960" cy="400" r="4.5" fill="var(--accent)" fillOpacity="0.75" />
        <circle cx="740" cy="320" r="4" fill="var(--accent)" fillOpacity="0.7" />
        <circle cx="900" cy="520" r="4" fill="var(--accent)" fillOpacity="0.7" />
        <circle cx="620" cy="360" r="3.5" fill="var(--accent)" fillOpacity="0.6" />

        {/* Connecting spokes */}
        <path
          d="M820 420 L680 450 M820 420 L960 400 M820 420 L740 320 M820 420 L900 520 M820 420 L620 360"
          stroke="var(--accent)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>

      {/* Slow orbit marker */}
      {!reduced ? (
        <motion.div
          className="absolute top-[38%] right-[22%] size-[min(42vw,22rem)] rounded-full border border-accent/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute top-0 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        </motion.div>
      ) : (
        <div className="absolute top-[38%] right-[22%] size-[min(42vw,22rem)] rounded-full border border-accent/20" />
      )}

      {!reduced ? (
        <motion.div
          className="absolute right-[8%] bottom-[22%] size-24 rounded-full border border-accent/15"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      ) : null}
    </div>
  )
}
