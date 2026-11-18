"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { rememberUtm, withUtm } from "@/lib/campaign";

/**
 * Remembers the utm_* tags the visit started with and adds them to a link to
 * the web app as it is followed, so a tagged link to usevyra.com still reaches
 * checkout tagged.
 */
export default function UtmCarry() {
  const pathname = usePathname();

  useEffect(() => {
    rememberUtm(window.location.search);
  }, [pathname]);

  useEffect(() => {
    // Rewritten on press, before the browser reads the link, so it also holds
    // for links opened in a new tab and for links rendered later.
    const carry = (event: Event) => {
      const target = event.target;
      const link = target instanceof Element ? target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const tagged = withUtm(link.href);
      if (tagged !== link.href) link.href = tagged;
    };
    document.addEventListener("pointerdown", carry, true);
    document.addEventListener("click", carry, true);
    return () => {
      document.removeEventListener("pointerdown", carry, true);
      document.removeEventListener("click", carry, true);
    };
  }, []);

  return null;
}
