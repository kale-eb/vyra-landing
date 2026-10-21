"use client";

// Favente creator-recruitment embed target.
//
// Favente's script (loaded site-wide in the <head> of app/layout.tsx) renders
// the recruit button INTO the #favente-recruit container below. We own the
// card around it (styled like the pricing group cards) and its copy; the button
// itself, its destination, referral attribution, and tracking all come from
// Favente. Don't add our own button or link here.
//
// The container is emitted as raw HTML on purpose: the async head script can
// inject the button before React hydrates, and React would treat those injected
// nodes as a hydration mismatch and wipe them. React doesn't reconcile the
// children of a dangerouslySetInnerHTML element, so Favente's button survives;
// suppressHydrationWarning silences the expected dev-mode innerHTML diff.
import { useEffect, useRef } from "react";

const container = '<div id="favente-recruit"></div>';

// Favente's design tokens can't force a white label on our #6490D0 accent (its
// contrast check picks dark ink), and the button is hardcoded to 16px/700. It
// mounts in an open shadow root, so we add one cosmetic override there to match
// the pricing buttons: white Inter 13px/600. Styling only; if Favente renames
// .deo-join-cta this silently falls back to their default look.
const ctaOverride =
  ".deo-join-cta{color:#fff !important;font-size:13px !important;font-weight:600 !important;padding:10px 18px !important;}";

export default function FaventeRecruit() {
  const slot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = slot.current;
    if (!el) return;
    const apply = () => {
      const root = el.querySelector("favente-embed")?.shadowRoot;
      if (!root || root.querySelector("style[data-vyra]")) return;
      const style = document.createElement("style");
      style.dataset.vyra = "";
      style.textContent = ctaOverride;
      root.appendChild(style);
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Become a Vyra creator"
      className="mt-10 flex flex-col items-start gap-5 rounded-2xl border border-[var(--surface-border)] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
    >
      <div>
        <h3 className="text-[15px] font-semibold text-[var(--foreground)]">
          Already a Vyra user? Create for us.
        </h3>
        <p className="mt-1 text-[13px] text-[var(--foreground-muted)]">
          Get paid to make short videos about Vyra with the footage you already shoot.
        </p>
      </div>
      <div
        ref={slot}
        className="shrink-0"
        dangerouslySetInnerHTML={{ __html: container }}
        suppressHydrationWarning
      />
    </section>
  );
}
