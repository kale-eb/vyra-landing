'use client'

import posthog from 'posthog-js'
import { useEffect } from 'react'

export function PostHogInit() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        autocapture: true,
        capture_heatmaps: true,
        capture_dead_clicks: true,
        capture_pageview: true,
        capture_pageleave: true,
        disable_session_recording: false,
      })
    }
  }, [])

  return null
}
