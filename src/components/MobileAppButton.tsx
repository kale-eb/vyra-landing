"use client";

import { useEffect, useId, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { trackLead } from "./MetaPixel";
import { marketingAnalytics } from "@/lib/marketing-analytics";
import { appStoreLink, playStoreLink } from "@/lib/campaign";

type Store = "app_store" | "google_play";

function AppleLogo({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 384 512" className={`${className} fill-current`}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

/** The Android robot's head: a half disc with two eyes and two antennae. */
function AndroidLogo({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 19a9.5 9.5 0 0 1 19 0Zm6-3.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm7 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      />
      <path d="M7.4 11.2 5.4 7.6M16.6 11.2l2-3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const STORES: { store: Store; name: string; device: string; Logo: typeof AppleLogo; lead: string; event: string; capture: string }[] = [
  { store: "app_store", name: "App Store", device: "iPhone", Logo: AppleLogo, lead: "iOS App Store click", event: "App Store click", capture: "app_store_clicked" },
  { store: "google_play", name: "Google Play", device: "Android", Logo: AndroidLogo, lead: "Google Play click", event: "Google Play click", capture: "play_store_clicked" },
];

/** One button for both phones: it opens a choice of the App Store or Google Play. */
export default function MobileAppButton({ sourcePage, placement = "footer" }: { sourcePage?: string; placement?: "navigation" | "header" | "footer" }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  function followed(store: (typeof STORES)[number]) {
    const properties = { source_page: sourcePage ?? window.location.pathname, placement, store: store.store };
    // A blocked analytics provider must not interrupt the link or the others.
    try { trackLead(store.lead); } catch { /* navigation remains available */ }
    try { track(store.event, properties); } catch { /* analytics unavailable */ }
    void marketingAnalytics.capture(store.capture, properties);
    setOpen(false);
  }

  return (
    <div ref={root} className="relative inline-flex shrink-0">
      <button
        ref={button}
        type="button"
        data-cta="mobile-app"
        data-placement={placement}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center justify-center gap-2.5 rounded-full border border-black/15 bg-white/80 px-6 py-3 text-[15px] font-medium text-[var(--foreground)] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <span className="inline-flex items-center gap-1.5">
          <AppleLogo className="h-4 w-4" />
          <AndroidLogo className="h-[18px] w-[18px]" />
        </span>
        Get it on mobile
      </button>
      {open && (
        <div
          id={menuId}
          className="absolute top-full left-1/2 z-40 mt-2 w-60 -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-1.5 text-left shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
        >
          {STORES.map((store) => (
            <a
              key={store.store}
              href={store.store === "app_store" ? appStoreLink() : playStoreLink()}
              data-cta={store.store === "app_store" ? "app-store" : "google-play"}
              data-placement={placement}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => followed(store)}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[var(--foreground)] transition-colors hover:bg-black/[0.05] focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
            >
              <store.Logo className="h-5 w-5 shrink-0" />
              <span className="flex flex-col leading-tight">
                <span className="text-[14px] font-semibold">{store.name}</span>
                <span className="text-[12px] text-[var(--foreground-muted)]">{store.device}</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
