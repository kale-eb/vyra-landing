import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Vyra",
  description:
    "Terms of Service for Vyra, the AI-powered video editing platform.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mb-12 text-[15px] text-[var(--foreground-subtle)]">
          Effective Date: February 3, 2026
        </p>

        <div className="space-y-10 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          {/* 1 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Vyra (&quot;the Service&quot;), operated by
              Vyra (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you
              agree to be bound by these Terms of Service. If you do not agree,
              do not use the Service.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              2. Description of Service
            </h2>
            <p>
              Vyra is an AI-powered video editing platform that allows users to
              upload footage, generate AI-assisted edits, create motion graphics,
              add captions, and export finished videos. The Service includes a
              web-based editor, AI agent, and cloud-based processing
              infrastructure.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              3. Account Registration
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                You must provide accurate information when creating an account.
              </li>
              <li>
                You are responsible for maintaining the security of your account
                credentials.
              </li>
              <li>
                You must be at least 13 years of age to use the Service.
              </li>
              <li>
                One person or entity may not maintain more than one account.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              4. Your Content
            </h2>
            <p className="mb-3">
              You retain ownership of all content you upload to or create with
              the Service (&quot;Your Content&quot;), including videos, images,
              audio, scripts, and project files.
            </p>
            <p className="mb-3">
              By using the Service, you grant us a limited license to process,
              store, and transmit Your Content solely to provide and improve the
              Service. We do not claim ownership of Your Content.
            </p>
            <p>You are responsible for ensuring that Your Content:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Does not infringe on any third-party intellectual property rights</li>
              <li>Does not contain illegal or prohibited material</li>
              <li>Complies with all applicable laws and regulations</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              5. AI-Generated Content
            </h2>
            <p className="mb-3">
              The Service uses AI models to assist with video editing, script
              generation, captioning, and other features. AI-generated outputs
              are provided &quot;as-is&quot; and may contain errors or
              inaccuracies.
            </p>
            <p>
              You are solely responsible for reviewing and approving any
              AI-generated content before publishing or distributing it.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              6. Subscription &amp; Billing
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                The Service offers free and paid subscription plans with
                different credit and export limits.
              </li>
              <li>
                Paid subscriptions are billed monthly through Stripe. You
                authorize us to charge your payment method on a recurring basis.
              </li>
              <li>
                Credits reset at the beginning of each billing cycle and do not
                roll over.
              </li>
              <li>
                You may cancel your subscription at any time. Cancellation takes
                effect at the end of the current billing period.
              </li>
              <li>
                We do not offer refunds for partial billing periods, except
                where required by law.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              7. Acceptable Use
            </h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Use the Service for any unlawful purpose</li>
              <li>
                Attempt to reverse-engineer, decompile, or extract source code
                from the Service
              </li>
              <li>
                Interfere with or disrupt the Service or its infrastructure
              </li>
              <li>
                Use automated systems to access the Service in a manner that
                exceeds reasonable use
              </li>
              <li>
                Upload content that contains malware, viruses, or harmful code
              </li>
              <li>Resell or redistribute access to the Service</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              8. Intellectual Property
            </h2>
            <p>
              The Service, including its design, code, features, and branding,
              is owned by Vyra and protected by intellectual property laws. These
              Terms do not grant you any rights to our trademarks, logos, or
              other brand features.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              9. Termination
            </h2>
            <p className="mb-3">
              We may suspend or terminate your account if you violate these
              Terms or engage in activity that harms the Service or other users.
            </p>
            <p>
              Upon termination, your right to access the Service ceases
              immediately. We may delete your account data after a reasonable
              retention period.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              10. Disclaimer of Warranties
            </h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, either express or
              implied. We do not guarantee that the Service will be
              uninterrupted, error-free, or that AI-generated content will be
              accurate or suitable for your purposes.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              11. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Vyra shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits, data, or goodwill, arising out of
              or related to your use of the Service. Our total liability for any
              claim shall not exceed the amount you paid us in the 12 months
              preceding the claim.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              12. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. If we make material
              changes, we will notify you by email or by posting a notice on the
              Service. Your continued use of the Service after changes take
              effect constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              13. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which
              Vyra operates, without regard to conflict of law principles.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              14. Contact Us
            </h2>
            <p>
              Questions about these Terms? Contact us at:
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
