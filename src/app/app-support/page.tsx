import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support - Vyra",
  description:
    "Get help with Vyra on iPhone, including your account, video edits, exports, and App Store purchases.",
};

export default function SupportPage() {
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--surface-border)] bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl backdrop-saturate-150">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center px-6">
          <Link
            href="/"
            className="text-[22px] font-extrabold tracking-tight text-[var(--foreground)]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Vyra
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1
          className="mb-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Vyra support
        </h1>
        <p className="mb-12 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          Questions about Vyra on iPhone? Get help with your account, video edits,
          exports, or purchases.
        </p>

        <div className="space-y-10 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              Contact us
            </h2>
            <p>
              Email{" "}
              <a
                href="mailto:caleb@usevyra.com?subject=Vyra%20iOS%20support"
                className="font-medium text-[var(--brand-blue)] underline underline-offset-4"
              >
                caleb@usevyra.com
              </a>{" "}
              for help, feedback, or feature requests.
            </p>
            <p className="mt-4 mb-2">For a technical issue, it helps to include:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Your iPhone model, iOS version, and Vyra app version.</li>
              <li>What you were trying to do and what happened.</li>
              <li>The error message or a screenshot, if relevant.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              App Store subscriptions
            </h2>
            <p>
              For a subscription purchased through the App Store, open Settings
              on your iPhone, tap your name, then tap Subscriptions. Select Vyra
              to manage or cancel your subscription.
            </p>
            <p className="mt-3">
              <a
                href="https://support.apple.com/118428"
                className="font-medium text-[var(--brand-blue)] underline underline-offset-4"
              >
                Read Apple&apos;s subscription help
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              Your account and privacy
            </h2>
            <p>
              Contact us if you need help accessing your account or have a
              question about your data. You can also read our{" "}
              <Link
                href="/privacy"
                className="font-medium text-[var(--brand-blue)] underline underline-offset-4"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="font-medium text-[var(--brand-blue)] underline underline-offset-4"
              >
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--surface-border)] pt-8">
          <Link
            href="/"
            className="text-[14px] text-[var(--foreground-subtle)] transition-colors hover:text-[var(--foreground-muted)]"
          >
            &larr; Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
