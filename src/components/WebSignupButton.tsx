"use client";

import { track } from "@vercel/analytics";
import { trackLead } from "./MetaPixel";
import { marketingAnalytics } from "@/lib/marketing-analytics";

export default function WebSignupButton({
  sourcePage,
  placement,
  compact = false,
  children = "Start editing on web",
}: {
  sourcePage: string;
  placement: "navigation" | "header" | "footer";
  compact?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <a
      href="https://app.usevyra.com/signup"
      data-cta="web-signup"
      data-placement={placement}
      data-source-page={sourcePage}
      onClick={() => {
        const properties = { source_page: sourcePage, placement };
        // A blocked analytics provider must not interrupt the link or the others.
        try { trackLead("Web signup click"); } catch { /* navigation remains available */ }
        try { track("Web signup click", properties); } catch { /* analytics unavailable */ }
        void marketingAnalytics.capture("web_signup_clicked", properties);
      }}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] font-semibold text-white hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 ${compact ? "px-4 py-2 text-[13px]" : "px-6 py-3 text-[14px]"}`}
    >
      {children}
    </a>
  );
}
