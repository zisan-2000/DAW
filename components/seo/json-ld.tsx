'use client'

import { useEffect } from 'react'

/** Injects JSON-LD without rendering a <script> in the React tree (avoids React 19 warning). */
export function JsonLd({ id, data }: { id: string; data: object }) {
  const json = JSON.stringify(data)

  useEffect(() => {
    document.getElementById(id)?.remove()

    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.text = json
    document.head.appendChild(script)

    return () => {
      document.getElementById(id)?.remove()
    }
  }, [id, json])

  return null
}
