import type { Transition, Variants } from 'framer-motion'

/** Shared motion presets — snappy, restrained homepage motion */
export const easeOutExpo: Transition['ease'] = [0.16, 1, 0.3, 1]

export const defaultTransition: Transition = {
  duration: 0.55,
  ease: easeOutExpo,
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
}

export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -40px 0px',
} as const
