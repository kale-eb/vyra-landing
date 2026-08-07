"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect logs a warning during SSR; there is no layout to read there.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const EASE = "cubic-bezier(0.21, 0.68, 0.35, 1)";

/**
 * Scroll-triggered entrance that is *visible* in the server-rendered HTML.
 *
 * framer-motion's `whileInView` server-renders `opacity:0`, so the content
 * stayed blank until the JS bundle downloaded and hydrated. Here the markup
 * paints visible, and only once we're running on the client do we hide
 * anything still below the fold and animate it back in on scroll. If the
 * bundle is slow or never arrives, the page is still readable.
 */
export default function Reveal({
  children,
  className = "",
  y = 24,
  blur = 0,
  duration = 0.6,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  blur?: number;
  duration?: number;
  delay?: number;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false); // JS took over, element was offscreen
  const [shown, setShown] = useState(false);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // leave it visible
    }

    // Already on screen at hydration: leave it alone. Hiding it now would be
    // a flash of content vanishing then fading back.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "160px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const off = armed && !shown;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: off ? 0 : 1,
        transform: off ? `translateY(${y}px)` : "none",
        filter: off && blur ? `blur(${blur}px)` : "none",
        transition: armed
          ? `opacity ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s, filter ${duration}s ${EASE} ${delay}s`
          : undefined,
        willChange: off ? "opacity, transform" : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
