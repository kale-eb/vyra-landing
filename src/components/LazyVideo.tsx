"use client";

import { useEffect, useRef, useState } from "react";

/**
 * An autoplaying loop that doesn't download until it's nearly on screen.
 *
 * Two things this buys us:
 *  - The page used to request every video up front (~78MB, several of them
 *    8-28MB). Now a clip only fetches once it's within 400px of the viewport.
 *  - Features renders its media twice, once in the desktop pinned scroller and
 *    once in the mobile stack. `display:none` hides a <video> but does not stop
 *    it downloading. A display:none element never intersects, so the offscreen
 *    copy now stays unfetched.
 *
 * The poster paints immediately, so a card shows a real frame instead of a
 * blank white box while the video buffers.
 */
export default function LazyVideo({
  src,
  poster,
  className = "",
  style,
  muted = true,
  videoRef,
  onCanPlay,
}: {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  muted?: boolean;
  videoRef?: React.RefObject<HTMLVideoElement | null>;
  onCanPlay?: () => void;
}) {
  const localRef = useRef<HTMLVideoElement>(null);
  const ref = videoRef ?? localRef;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    // No IntersectionObserver (very old browsers): just load it. Deferred a
    // tick so this isn't a synchronous setState inside the effect.
    if (typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, visible]);

  return (
    <video
      ref={ref}
      src={visible ? src : undefined}
      poster={poster}
      muted={muted}
      autoPlay
      loop
      playsInline
      preload={visible ? "auto" : "none"}
      className={className}
      style={style}
      onCanPlay={(e) => {
        // autoplay doesn't always re-trigger when src is attached after mount
        const v = e.currentTarget;
        if (v.paused) v.play().catch(() => {});
        onCanPlay?.();
      }}
    />
  );
}
