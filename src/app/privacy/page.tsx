import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Vyra",
  description:
    "Learn how Vyra collects, uses, and protects your information when you use our video editing platform.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Minimal nav — just the logo */}
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
          className="mb-2 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Privacy Policy
        </h1>
        <p className="mb-12 text-[15px] text-[var(--foreground-subtle)]">
          Effective Date: February 3, 2026
        </p>

        <div className="space-y-10 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          {/* 1 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how Vyra (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects
              your information when you use our video ad creation platform.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              2. Information We Collect
            </h2>

            <h3 className="mt-4 mb-2 text-[15px] font-semibold text-[var(--foreground)]">
              Account Information
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>Email address</li>
              <li>Name</li>
              <li>Password</li>
            </ul>

            <h3 className="mt-4 mb-2 text-[15px] font-semibold text-[var(--foreground)]">
              Content You Create
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>Projects and all project data</li>
              <li>Uploaded files (videos, images, documents)</li>
              <li>Video editor compositions and exports</li>
            </ul>

            <h3 className="mt-4 mb-2 text-[15px] font-semibold text-[var(--foreground)]">
              Usage Data
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>Feature usage and API requests</li>
              <li>Performance metrics</li>
            </ul>

            <h3 className="mt-4 mb-2 text-[15px] font-semibold text-[var(--foreground)]">
              Payment Information
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Subscription and billing data is processed by Stripe. We do not
                store your payment card details.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>Provide and operate our service</li>
              <li>Authenticate your account</li>
              <li>Generate AI-powered scripts and analyze videos</li>
              <li>Process and render video exports</li>
              <li>Track usage for billing</li>
              <li>Improve our service</li>
              <li>Send important service updates</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              4. Third-Party Services
            </h2>
            <p className="mb-3">
              We use the following types of services to operate Vyra:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Authentication:
                </span>{" "}
                Supabase, Google (for Google Sign-In)
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  AI Processing:
                </span>{" "}
                OpenAI and Google
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Payments:
                </span>{" "}
                Stripe for subscription billing
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Cloud Infrastructure:
                </span>{" "}
                Cloud providers for hosting, storage, and video processing
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Analytics:
                </span>{" "}
                Performance monitoring tools
              </li>
            </ul>
            <p className="mt-3">
              Your content may be processed by these services to provide our
              features. Each service operates under its own privacy policy.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              5. Data Sharing
            </h2>
            <p className="mb-3">
              We do not sell your personal information.
            </p>
            <p className="mb-2">We share data only with:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Service providers necessary to operate our service</li>
              <li>Legal authorities when required by law</li>
              <li>
                In connection with a merger, acquisition, or sale of assets
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              6. Data Security
            </h2>
            <p>
              We implement appropriate security measures including encrypted
              passwords, secure authentication tokens, and access controls.
              However, no method of transmission over the internet is 100%
              secure.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              7. Cookies &amp; Local Storage
            </h2>
            <p>
              We use cookies and browser storage to maintain your login session
              and cache preferences for faster loading.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              8. Data Retention
            </h2>
            <p>
              Your data is retained while your account is active. You may delete
              your projects and files at any time. Upon account deletion, your
              personal data will be removed.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              9. Your Rights
            </h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your content and account</li>
              <li>Export your data</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:caleb@usevyra.com"
                className="text-[var(--brand-blue)] underline decoration-[var(--brand-blue)]/30 underline-offset-2 transition-colors hover:text-[var(--brand-blue-hover)]"
              >
                caleb@usevyra.com
              </a>
              .
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              10. Children&apos;s Privacy
            </h2>
            <p>
              Vyra is not intended for users under 13. We do not knowingly
              collect information from children.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this policy periodically, and update the effective
              date accordingly. Under certain circumstances (for example with
              certain material changes or where it is required by applicable
              privacy laws) we will provide notice to you of these changes and,
              where required by applicable law, we will obtain your consent.
              Notice may be by email to you, by posting a notice of such changes
              on our Services and Software, or by other means consistent with
              applicable law.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              12. Contact Us
            </h2>
            <p>
              Questions about this Privacy Policy? Contact us at:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:caleb@usevyra.com"
                className="text-[var(--brand-blue)] underline decoration-[var(--brand-blue)]/30 underline-offset-2 transition-colors hover:text-[var(--brand-blue-hover)]"
              >
                caleb@usevyra.com
              </a>
            </p>
          </section>
        </div>

        {/* Back link */}
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
