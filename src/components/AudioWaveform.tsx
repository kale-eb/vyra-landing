/**
 * AudioWaveform — exaggerated mirrored waveform synced to a <video> element.
 *
 * Uses @remotion/media-utils to decode audio and extract amplitude bars,
 * then renders them on a <canvas> with a moving playhead.
 *
 * Designed for the FeatureCarousel "Music Sync" card.
 */

import { useEffect, useRef, useState, useCallback, type RefObject } from 'react'
import { getAudioData, getWaveformPortion } from '@remotion/media-utils'

interface AudioWaveformProps {
  audioUrl: string
  videoRef: RefObject<HTMLVideoElement | null>
  className?: string
}

interface WaveformBar {
  amplitude: number
}

export function AudioWaveform({ audioUrl, videoRef, className = '' }: AudioWaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const barsRef = useRef<WaveformBar[]>([])
  const durationRef = useRef(0)
  const [ready, setReady] = useState(false)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })
  const rafRef = useRef<number>(0)

  // Responsive canvas sizing
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setCanvasSize({ width: Math.floor(width), height: Math.floor(height) })
    })
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  // Set canvas resolution for retina
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || canvasSize.width === 0) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = canvasSize.width * dpr
    canvas.height = canvasSize.height * dpr
    canvas.style.width = `${canvasSize.width}px`
    canvas.style.height = `${canvasSize.height}px`
  }, [canvasSize])

  // Decode audio and compute waveform bars
  useEffect(() => {
    if (!audioUrl || canvasSize.width === 0) return

    let cancelled = false
    const decode = async () => {
      try {
        const audioData = await getAudioData(audioUrl)
        if (cancelled) return

        const numBars = Math.floor(canvasSize.width / 3) // 2px bar + 1px gap
        const bars = getWaveformPortion({
          audioData,
          startTimeInSeconds: 0,
          durationInSeconds: audioData.durationInSeconds,
          numberOfSamples: numBars,
        })

        barsRef.current = bars
        durationRef.current = audioData.durationInSeconds
        setReady(true)
      } catch (err) {
        console.warn('[AudioWaveform] Failed to decode audio:', err)
      }
    }
    decode()
    return () => { cancelled = true }
  }, [audioUrl, canvasSize.width])

  // Draw the waveform + animated playhead
  const draw = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !ready) return

    const dpr = window.devicePixelRatio || 1
    const w = canvasSize.width
    const h = canvasSize.height
    const bars = barsRef.current
    const duration = durationRef.current

    // Get current playback position
    const video = videoRef.current
    const currentTime = video?.currentTime ?? 0
    const progress = duration > 0 ? currentTime / duration : 0

    ctx.save()
    ctx.scale(dpr, dpr)
    ctx.clearRect(0, 0, w, h)

    const isDark = document.documentElement.classList.contains('dark')
    const centerY = h / 2
    const barWidth = 2
    const barGap = 1
    const barStep = barWidth + barGap
    const maxBarHeight = h * 0.92 / 2 // Each side (up/down) gets ~46% of height
    const playheadX = progress * w

    // Draw bars
    for (let i = 0; i < bars.length; i++) {
      const x = i * barStep
      const raw = bars[i]?.amplitude ?? 0
      // Expand dynamic range: quiet parts stay short, peaks shoot tall
      const exaggerated = Math.pow(raw, 1.8)
      const barH = exaggerated * maxBarHeight

      const isPast = x < playheadX

      if (isDark) {
        ctx.fillStyle = isPast ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.18)'
      } else {
        ctx.fillStyle = isPast ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.12)'
      }

      // Top half (upward from center)
      ctx.fillRect(x, centerY - barH, barWidth, barH)
      // Bottom half (downward from center)
      ctx.fillRect(x, centerY, barWidth, barH)
    }

    // Draw playhead glow
    if (isDark) {
      ctx.fillStyle = 'rgba(255,255,255,0.08)'
      ctx.fillRect(playheadX - 4, 0, 8, h)
      ctx.fillStyle = 'rgba(255,255,255,0.15)'
      ctx.fillRect(playheadX - 2, 0, 4, h)
    } else {
      ctx.fillStyle = 'rgba(0,0,0,0.04)'
      ctx.fillRect(playheadX - 4, 0, 8, h)
      ctx.fillStyle = 'rgba(0,0,0,0.08)'
      ctx.fillRect(playheadX - 2, 0, 4, h)
    }

    // Draw playhead line
    ctx.fillStyle = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)'
    ctx.fillRect(playheadX - 0.5, 0, 1.5, h)

    ctx.restore()
  }, [ready, canvasSize, videoRef])

  // RAF loop for smooth playhead animation
  useEffect(() => {
    if (!ready) return

    const loop = () => {
      draw()
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [ready, draw])

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-pointer"
        onClick={(e) => {
          const video = videoRef.current
          const duration = durationRef.current
          if (!video || !duration) return
          const rect = e.currentTarget.getBoundingClientRect()
          const progress = (e.clientX - rect.left) / rect.width
          video.currentTime = Math.max(0, Math.min(duration, progress * duration))
        }}
      />
    </div>
  )
}
