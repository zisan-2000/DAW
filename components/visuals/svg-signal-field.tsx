'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'

type SvgSignalFieldProps = {
  variant?: 'hero' | 'dusk' | 'page'
  className?: string
  animated?: boolean
}

/**
 * Full-bleed abstract signal field — topology, orbits, and copper ribbons.
 * Theme-linked via CSS variables; decorative only.
 */
export function SvgSignalField({
  variant = 'page',
  className,
  animated = true,
}: SvgSignalFieldProps) {
  const uid = useId().replace(/:/g, '')
  const line = `sig-line-${uid}`
  const fill = `sig-fill-${uid}`
  const glow = `sig-glow-${uid}`
  const mesh = `sig-mesh-${uid}`
  const ribbon = `sig-ribbon-${uid}`

  const isHero = variant === 'hero'
  const isDusk = variant === 'dusk'

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
      aria-hidden
    >
      {/* Soft color wells */}
      <div
        className={cn(
          'absolute inset-0',
          isHero &&
            'bg-[radial-gradient(ellipse_70%_55%_at_82%_28%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_62%),radial-gradient(ellipse_50%_40%_at_12%_78%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_55%),radial-gradient(ellipse_40%_35%_at_48%_8%,color-mix(in_oklab,var(--foreground)_4%,transparent),transparent_50%)]',
          isDusk &&
            'bg-[radial-gradient(ellipse_75%_60%_at_70%_20%,color-mix(in_oklab,var(--accent)_32%,transparent),transparent_65%),radial-gradient(ellipse_55%_45%_at_15%_85%,color-mix(in_oklab,var(--accent)_14%,transparent),transparent_60%)]',
          variant === 'page' &&
            'bg-[radial-gradient(ellipse_60%_40%_at_90%_0%,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_55%)]',
        )}
      />

      <svg
        className={cn(
          'absolute inset-0 h-full w-full',
          isHero && 'opacity-[0.85]',
          isDusk && 'opacity-[0.7]',
          variant === 'page' && 'opacity-[0.45]',
        )}
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={line} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="40%" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id={fill} x1="0.2" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={ribbon} x1="0" y1="0.5" x2="1" y2="0.5">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop
              offset="35%"
              stopColor="var(--accent)"
              stopOpacity={isHero ? 0.75 : 0.45}
            />
            <stop
              offset="70%"
              stopColor="var(--accent)"
              stopOpacity={isHero ? 0.4 : 0.2}
            />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={glow} cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor="var(--accent)"
              stopOpacity={isHero ? 0.75 : 0.55}
            />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <pattern
            id={mesh}
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M72 0H0V72"
              stroke="var(--foreground)"
              strokeOpacity={isDusk ? 0.07 : isHero ? 0.06 : 0.045}
              strokeWidth="1"
            />
          </pattern>
          <filter
            id={`${glow}-blur`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1440" height="900" fill={`url(#${mesh})`} />

        {/* Large structural rings */}
        <g
          className={cn(animated && 'animate-[spin_80s_linear_infinite]')}
          style={{ transformOrigin: '980px 340px' }}
        >
          <circle
            cx="980"
            cy="340"
            r="280"
            stroke="var(--accent)"
            strokeOpacity={isHero ? 0.32 : 0.18}
            strokeWidth={isHero ? 2 : 1.25}
          />
          <circle
            cx="980"
            cy="340"
            r="200"
            stroke="var(--foreground)"
            strokeOpacity={isDusk ? 0.12 : isHero ? 0.1 : 0.08}
            strokeWidth="1"
            strokeDasharray="6 14"
          />
          <circle
            cx="980"
            cy="340"
            r="130"
            stroke="var(--accent)"
            strokeOpacity={isHero ? 0.45 : 0.28}
            strokeWidth={isHero ? 2.25 : 1.5}
          />
        </g>

        {/* Copper ribbons */}
        <path
          d="M-40 620 C220 520, 380 480, 560 500 C780 528, 920 620, 1180 560 C1320 520, 1420 480, 1520 500"
          stroke={`url(#${ribbon})`}
          strokeWidth={isHero ? 4 : 2.5}
          fill="none"
        />
        <path
          d="M-20 200 C180 260, 340 300, 520 270 C740 230, 900 160, 1120 190 C1280 212, 1400 250, 1520 230"
          stroke={`url(#${ribbon})`}
          strokeWidth={isHero ? 3 : 1.75}
          fill="none"
        />

        {/* Topology lattice */}
        <path
          d="M120 720 C260 640, 360 520, 480 460 C600 400, 720 380, 860 400"
          stroke={`url(#${line})`}
          strokeWidth={isHero ? 2.25 : 1.5}
        />
        <path
          d="M200 120 C340 180, 460 260, 580 320 C720 390, 860 430, 1040 410"
          stroke={`url(#${line})`}
          strokeWidth={isHero ? 2.25 : 1.5}
        />
        <path
          d="M640 80 L980 340 L1280 700"
          stroke="var(--foreground)"
          strokeOpacity={isDusk ? 0.1 : isHero ? 0.09 : 0.06}
          strokeWidth={isHero ? 1.5 : 1}
        />
        <path
          d="M1320 80 L980 340 L640 700"
          stroke="var(--foreground)"
          strokeOpacity={isDusk ? 0.1 : isHero ? 0.09 : 0.06}
          strokeWidth={isHero ? 1.5 : 1}
        />

        {/* Filled signal wedge */}
        <path
          d="M980 340 L1180 180 L1320 260 L980 340 Z"
          fill={`url(#${fill})`}
          opacity={isHero ? 1 : 1}
        />
        <path
          d="M980 340 L1120 520 L980 580 L980 340 Z"
          fill={`url(#${fill})`}
          opacity={isHero ? 0.9 : 0.7}
        />

        {/* Extra hero arcs for presence */}
        {isHero ? (
          <>
            <path
              d="M720 120 C820 220, 900 300, 980 340 C1060 380, 1180 460, 1320 620"
              stroke="var(--accent)"
              strokeOpacity="0.35"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M860 700 C900 560, 940 420, 980 340 C1020 260, 1100 140, 1240 40"
              stroke="var(--accent)"
              strokeOpacity="0.22"
              strokeWidth="1.75"
              fill="none"
            />
            <circle
              cx="980"
              cy="340"
              r="48"
              stroke="var(--accent)"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              fill="none"
            />
          </>
        ) : null}

        {/* Nodes */}
        {(
          [
            [480, 460, 5],
            [860, 400, 4],
            [980, 340, 9],
            [1040, 410, 4],
            [1180, 180, 5],
            [1120, 520, 4],
            [720, 380, 3.5],
            [580, 320, 4],
            [1280, 260, 3.5],
          ] as const
        ).map(([x, y, r], i) => (
          <g key={i} filter={i === 2 ? `url(#${glow}-blur)` : undefined}>
            <circle
              cx={x}
              cy={y}
              r={r * 3.2}
              fill={`url(#${glow})`}
              opacity={i === 2 ? 1 : 0.35}
            />
            <circle
              cx={x}
              cy={y}
              r={r}
              fill="var(--accent)"
              fillOpacity={i === 2 ? 1 : 0.75}
            />
          </g>
        ))}

        {/* Orbit markers */}
        <circle
          cx="980"
          cy="60"
          r="3"
          fill="var(--accent)"
          className={cn(animated && 'animate-[pulse_3.5s_ease-in-out_infinite]')}
        />
        <circle
          cx="1260"
          cy="340"
          r="2.5"
          fill="var(--accent)"
          fillOpacity="0.8"
        />
      </svg>

      {/* Fine noise veil */}
      <div className="bg-noise absolute inset-0 opacity-80" />
    </div>
  )
}
