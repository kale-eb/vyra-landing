"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Meta Pixel / Dataset ID from Events Manager.
const PIXEL_ID: string = "1085202710535377";

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

function isConfigured() {
  return PIXEL_ID !== "YOUR_META_PIXEL_ID" && PIXEL_ID.trim() !== "";
}

/** Standard Meta Pixel bootstrap, ported from the official snippet. */
function loadPixel() {
  if (typeof window === "undefined" || window.fbq) return;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(args);
    }
  } as Fbq;

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];

  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  const first = document.getElementsByTagName("script")[0];
  if (first?.parentNode) {
    first.parentNode.insertBefore(script, first);
  } else {
    document.head.appendChild(script);
  }

  fbq("init", PIXEL_ID);
}

/** Fire a standard Meta Lead event. Safe to call anywhere, including SSR paths. */
export function trackLead(contentName = "Marketing Site CTA Click") {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", { content_name: contentName });
  }
}

export default function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Bootstrap the pixel once on mount.
  useEffect(() => {
    if (!isConfigured()) return;
    loadPixel();
  }, []);

  // Fire PageView on initial load and every client-side route transition.
  useEffect(() => {
    if (!isConfigured()) return;
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;
    window.fbq("track", "PageView");
  }, [pathname, searchParams]);

  return null;
}
