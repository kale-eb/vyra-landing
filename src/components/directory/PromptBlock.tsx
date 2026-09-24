"use client";

import { useState } from "react";

export default function PromptBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="group relative my-5 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 pr-24">
      <pre className="font-sans text-[14px] leading-[1.7] whitespace-pre-wrap text-[var(--foreground)]">
        {text}
      </pre>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          } catch {
            /* clipboard unavailable */
          }
        }}
        className="absolute top-3 right-3 rounded-lg border border-[var(--surface-border)] bg-white px-2.5 py-1 text-[12px] font-medium text-[var(--foreground-muted)] transition-colors hover:border-[var(--foreground-subtle)] hover:text-[var(--foreground)]"
        aria-label="Copy prompt"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
