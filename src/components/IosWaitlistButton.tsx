"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { trackLead } from "./MetaPixel";

export default function IosWaitlistButton() {
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [error, setError] = useState("Couldn’t save your email. Please try again later.");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "pending") return;
    const form = new FormData(event.currentTarget);
    setStatus("pending");
    try {
      // Loops' public form endpoint applies rate limits per visitor IP.
      const response = await fetch("https://app.loops.so/api/newsletter-form/cmpn9oq560u5z0jzgsq53ag13", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          email: String(form.get("email") ?? "").trim(),
          mailingLists: "cmui3hkl9ltzo0j4l8u5d0esn",
          source: "vyra-ios-waitlist",
        }),
        signal: AbortSignal.timeout(15000),
      });
      setError(response.status === 429
        ? "Too many attempts. Please wait a minute and try again."
        : "Couldn’t save your email. Please try again later.");
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error("Signup failed");
      setStatus("success");
      trackLead("iOS waitlist signup");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button type="button" onClick={() => setMounted(true)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/80 px-6 py-3 text-[15px] font-medium text-[var(--foreground)] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4">
        Join the iOS waitlist
      </button>
      {mounted && createPortal(
        <dialog ref={(el) => { dialog.current = el; if (el && !el.open) el.showModal(); }}
          onClose={() => setMounted(false)}
          aria-labelledby={id + "-title"}
          className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-black/10 bg-white p-6 text-left text-[var(--foreground)] shadow-xl backdrop:bg-black/30">
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Close waitlist"
            className="absolute right-3 top-3 rounded-full px-2 py-1 text-xl text-[var(--foreground-muted)] hover:bg-black/5">×</button>
          <h2 id={id + "-title"} className="pr-5 text-2xl font-bold">Vyra for iOS</h2>
          {status === "success" ? <p role="status" className="mt-3 text-sm">You’re on the list! We’ll email you when it’s ready.</p> : (
            <form onSubmit={submit}>
              <p className="mb-5 mt-2 text-sm text-[var(--foreground-muted)]">Coming soon. Get an email when the app is ready.</p>
              <label htmlFor={id + "-email"} className="mb-1.5 block text-sm font-medium">Email</label>
              <input id={id + "-email"} name="email" type="email" required autoComplete="email" maxLength={254}
                className="w-full rounded-xl border border-black/20 px-3 py-3 text-base outline-offset-2" placeholder="you@example.com" />
              <button disabled={status === "pending"} type="submit"
                className="mt-3 w-full rounded-full bg-[#292b31] px-5 py-3 text-sm font-medium text-white disabled:opacity-60">
                {status === "pending" ? "Joining…" : "Join the waitlist"}
              </button>
              {status === "error" && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
              <p className="mt-3 text-xs text-[var(--foreground-muted)]">For iOS launch updates. <Link href="/privacy" className="underline">Privacy policy</Link></p>
            </form>
          )}
        </dialog>, document.body)}
    </>
  );
}
