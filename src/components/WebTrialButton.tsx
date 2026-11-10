"use client";

import { trackLead } from "./MetaPixel";

export default function WebTrialButton({ label = "Try it free on web" }: { label?: string }) {
  return (
    <a
      href="https://app.usevyra.com/signup"
      onClick={() => trackLead("Feature landing CTA click")}
      className="inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-[15px] font-semibold text-white shadow-md shadow-[var(--brand-blue)]/15 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-blue)]/25"
    >
      {label}
    </a>
  );
}
