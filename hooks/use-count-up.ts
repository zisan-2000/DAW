'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type UseCountUpOptions = {
  end: number
  duration?: number
  startOnView?: boolean
}

export function useCountUp({
  end,
  duration = 1400,
  startOnView = true,
}: UseCountUpOptions) {
  const reduced = useReducedMotion() ?? false
  const ref = useRef<HTMLParagraphElement | null>(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(!startOnView)

  useEffect(() => {
    if (!startOnView) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!started) return

    if (reduced) {
      setValue(end)
      return
    }

    let frame = 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(end * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, end, duration, reduced])

  return { ref, value }
}
