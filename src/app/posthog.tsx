'use client'

import posthog from 'posthog-js'
import { useEffect } from 'react'

export function PostHogInit() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return
    // Init after the page is idle so analytics setup (autocapture, heatmaps,
    // recording) doesn't compete with the first interactions (INP).
    const init = () =>
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        autocapture: true,
        capture_heatmaps: true,
        capture_dead_clicks: true,
        capture_pageview: true,
        capture_pageleave: true,
        disable_session_recording: false,
      })
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(init, { timeout: 3000 })
      return () => window.cancelIdleCallback(id)
    }
    const t = setTimeout(init, 1500)
    return () => clearTimeout(t)
  }, [])

  return null
}
