'use client'

import { useEffect } from 'react'
import { marketingAnalytics } from '@/lib/marketing-analytics'

export function PostHogInit() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return
    // Init after the page is idle so analytics setup (autocapture, heatmaps,
    // recording) doesn't compete with the first interactions (INP).
    const init = () => { void marketingAnalytics.init().catch(() => {}) }
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(init, { timeout: 3000 })
      return () => window.cancelIdleCallback(id)
    }
    const t = setTimeout(init, 1500)
    return () => clearTimeout(t)
  }, [])

  return null
}
