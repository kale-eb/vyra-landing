import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Account - Vyra",
  description:
    "How to delete your Vyra account on Android, iPhone, or the web, what gets deleted, and what we keep.",
};

const linkClass =
  "font-medium text-[var(--brand-blue)] underline underline-offset-4";

export default function DeleteAccountPage() {
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
          Delete your Vyra account
        </h1>
        <p className="mb-12 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          You can delete your Vyra account and its data at any time, whether you
          use Vyra on Android, iPhone, or the web.
        </p>

        <div className="space-y-10 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              In the app
            </h2>
            <ol className="list-decimal space-y-1 pl-6">
              <li>Open Vyra and sign in.</li>
              <li>Tap the Account button.</li>
              <li>Tap Delete account, then confirm.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              On the web
            </h2>
            <p>Sign in to Vyra, open Settings, and choose Delete account.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              If you can&apos;t open Vyra
            </h2>
            <p>
              Email{" "}
              <a
                href="mailto:caleb@usevyra.com?subject=Delete%20my%20Vyra%20account"
                className={linkClass}
              >
                caleb@usevyra.com
              </a>{" "}
              from the address on your account and ask us to delete it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              Cancel your subscription first
            </h2>
            <p>
              Deleting your account doesn&apos;t cancel a subscription you bought
              through Google Play or the App Store. Cancel it first to stop future
              billing, in{" "}
              <a
                href="https://play.google.com/store/account/subscriptions"
                className={linkClass}
              >
                Google Play
              </a>{" "}
              or the{" "}
              <a
                href="https://apps.apple.com/account/subscriptions"
                className={linkClass}
              >
                App Store
              </a>
              . A subscription you bought on the web is cancelled when you delete
              your account.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              What gets deleted
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>Your account and profile</li>
              <li>Your projects, footage, uploads, and exports</li>
              <li>Your chats with Vyra</li>
              <li>Your usage records and connected accounts</li>
            </ul>
            <p className="mt-3">
              Deletion starts right away and can&apos;t be undone. We remove this
              data from our active systems within 30 days, and backups are purged
              on a rolling basis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              What we keep
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                A record of the deletion: your email address, when you signed up
                and last signed in, and how many files and projects you had.
              </li>
              <li>
                Limited purchase and billing records we are required to retain for
                legal, tax, or accounting reasons.
              </li>
            </ul>
            <p className="mt-3">
              We keep these only as long as we need them for those purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              Delete only some of your data
            </h2>
            <p>
              You can delete individual files and projects in Vyra at any time
              without deleting your account. See our{" "}
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>{" "}
              for more on how we handle your data.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
