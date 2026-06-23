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
          Effective Date: June 22, 2026
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
              your information when you use our video editing platform. We built
              Vyra to be a place you can trust with your work — this policy spells
              out exactly what we do, and just as importantly, what we never do,
              with your data.
            </p>
          </section>

          {/* 2 — the trust section, up front on purpose */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              2. Your Videos &amp; Content — Our Core Commitment
            </h2>
            <p className="mb-3">
              Your projects, uploads, and exports are yours. This is the part of
              the policy that matters most, so we&apos;ll be direct:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  You own your content.
                </span>{" "}
                We claim no ownership of the videos, images, audio, or projects
                you upload or create.
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  We use it only to run and improve Vyra.
                </span>{" "}
                Your content is used to provide the editing, analysis, and
                rendering features you ask for, and to improve our service
                internally. That&apos;s it.
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  We never sell it. We never use it for advertising.
                </span>{" "}
                We do not sell, rent, or trade your content or personal data, and
                we never use your content to serve you ads.
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  It is never shared outside Vyra
                </span>{" "}
                except with the specific service providers we rely on to actually
                deliver the product — for example, the AI services that understand
                your video, transcribe your audio, and render your exports. Those
                providers act only on our behalf, only to deliver those features.
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Our providers do not train on your content.
                </span>{" "}
                Under the commercial terms of the plans we use, the third-party AI
                and infrastructure providers that process your content are not
                permitted to use it to train their own models or for any purpose
                other than providing services to Vyra.
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  It&apos;s encrypted and access-controlled.
                </span>{" "}
                Your content is encrypted in transit and at rest, isolated per
                account, and protected by access controls.
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  You can delete it.
                </span>{" "}
                Delete a file, a project, or your whole account, and the
                underlying data is removed (see Data Retention below).
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              3. Information We Collect
            </h2>

            <h3 className="mt-4 mb-2 text-[15px] font-semibold text-[var(--foreground)]">
              Account Information
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>Email address</li>
              <li>Name</li>
              <li>
                Authentication credentials (we store a securely hashed password —
                never your password in plain text — or rely on your Google
                Sign-In)
              </li>
            </ul>

            <h3 className="mt-4 mb-2 text-[15px] font-semibold text-[var(--foreground)]">
              Content You Create
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>Projects and all project data</li>
              <li>Uploaded files (videos, images, audio, documents)</li>
              <li>Video editor compositions and exports</li>
            </ul>

            <h3 className="mt-4 mb-2 text-[15px] font-semibold text-[var(--foreground)]">
              Usage Data
            </h3>
            <ul className="list-disc space-y-1 pl-6">
              <li>Feature usage and API requests</li>
              <li>Performance and reliability metrics</li>
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

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              4. How We Use Your Information
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>Provide and operate our service</li>
              <li>Authenticate your account</li>
              <li>Generate AI-powered scripts and analyze your videos</li>
              <li>Process and render video exports</li>
              <li>Track usage for billing</li>
              <li>
                Improve our service internally (for example, diagnosing issues
                and making our features work better)
              </li>
              <li>Send important service updates</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              5. Service Providers (Sub-Processors)
            </h2>
            <p className="mb-3">
              We use a small set of trusted providers to operate Vyra. They
              process your data only on our behalf and only to deliver the
              features below. Under the plans we use, they do not use your content
              to train their own models or for any unrelated purpose.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  AI video understanding &amp; scripting:
                </span>{" "}
                Google (Gemini)
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Audio transcription:
                </span>{" "}
                ElevenLabs
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Embeddings (semantic search):
                </span>{" "}
                OpenAI
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Authentication &amp; database:
                </span>{" "}
                Supabase, and Google for Google Sign-In
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Storage &amp; video processing:
                </span>{" "}
                Cloudflare R2, Google Cloud, and Amazon Web Services
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Hosting:
                </span>{" "}
                Vercel and Railway
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Payments:
                </span>{" "}
                Stripe for subscription billing
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">
                  Product analytics:
                </span>{" "}
                Privacy-respecting analytics to understand feature usage and
                performance
              </li>
            </ul>
            <p className="mt-3">
              We keep this list current. Each provider operates under its own
              privacy policy and contractual data-protection terms with Vyra.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              6. Third-Party Agent Access (MCP)
            </h2>
            <p className="mb-3">
              Vyra supports the Model Context Protocol (MCP), which lets external
              AI agents you choose (such as Claude Code, Codex, or other
              MCP-compatible tools) interact with your editor on your behalf.
            </p>
            <p className="mb-3">When you authorize a third-party agent:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>The agent can view your project assets, timeline state, and editor settings</li>
              <li>The agent can execute editing actions (adding media, editing properties, etc.) in your browser session</li>
              <li>Access is scoped to the project open in your editor and requires your explicit OAuth consent</li>
              <li>You can revoke access at any time from your account settings</li>
            </ul>
            <p className="mt-3">
              In this MCP flow, the external agent is the AI you bring — Vyra does
              not route your MCP-session data through its own AI providers. The
              agent processes the data it accesses under its own provider&apos;s
              policy, which we do not control. Please review the privacy policy of
              any agent you authorize.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              7. Data Sharing
            </h2>
            <p className="mb-3">
              We do not sell your personal information or your content. We share
              data only in these limited cases:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                With the service providers (sub-processors) listed above, solely
                to operate Vyra
              </li>
              <li>
                With legal authorities when required by law, or to protect the
                rights, safety, and security of Vyra and its users
              </li>
              <li>
                In connection with a merger, acquisition, financing, or sale of
                assets — see below
              </li>
            </ul>
            <p className="mt-3">
              <span className="font-medium text-[var(--foreground)]">
                Business transfers:
              </span>{" "}
              If Vyra is involved in a merger, acquisition, financing, or sale of
              all or part of our business, your information may be transferred as
              part of that transaction. We will notify you of any such change, and
              any successor entity will be required to honor the commitments in
              this Privacy Policy, or to give you notice and a choice before your
              data is used under a materially different policy.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              8. Data Security
            </h2>
            <p>
              We implement strong, layered security measures, including encryption
              of your content in transit (TLS) and at rest, securely hashed
              passwords, scoped authentication tokens, per-account data isolation,
              and access controls. No method of transmission or storage is 100%
              secure, but we work hard to protect your data and to limit who and
              what can access it.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              9. International Data Transfers
            </h2>
            <p>
              Vyra is operated from the United States, and our infrastructure and
              service providers are primarily located in the United States. If you
              access Vyra from outside the U.S., your information will be
              transferred to and processed in the U.S. and other countries where
              our providers operate. Where required, we rely on appropriate
              safeguards (such as Standard Contractual Clauses) for these
              transfers.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              10. Cookies &amp; Local Storage
            </h2>
            <p>
              We use cookies and browser storage to maintain your login session
              and cache preferences for faster loading. We do not use them for
              cross-site advertising.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              11. Data Retention
            </h2>
            <p>
              We retain your content and account data while your account is
              active. You may delete individual files and projects at any time.
              When you delete your account, we remove your personal data and
              content from our active systems within 30 days, except where we are
              required to retain limited records to comply with legal, tax, or
              accounting obligations. Backups are purged on a rolling basis.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              12. Your Rights
            </h2>
            <p className="mb-2">
              Depending on where you live, you may have the right to:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Delete your content and account</li>
              <li>Export your data</li>
              <li>
                Object to or restrict certain processing, and withdraw consent
              </li>
            </ul>
            <p className="mt-3">
              If you are in the EEA/UK, these rights are provided under the GDPR.
              If you are a California resident, you have rights under the CCPA/CPRA
              — including the right to know, delete, and opt out of the
              &quot;sale&quot; or &quot;sharing&quot; of personal information.
              Vyra does not sell or share your personal information as those terms
              are defined under California law. To exercise any of these rights,
              contact us at{" "}
              <a
                href="mailto:caleb@usevyra.com"
                className="text-[var(--brand-blue)] underline decoration-[var(--brand-blue)]/30 underline-offset-2 transition-colors hover:text-[var(--brand-blue-hover)]"
              >
                caleb@usevyra.com
              </a>
              .
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              13. Children&apos;s Privacy
            </h2>
            <p>
              Vyra is not intended for users under 13 (or the minimum age of
              digital consent in your country). We do not knowingly collect
              information from children. If you believe a child has provided us
              information, contact us and we will delete it.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              14. Changes to This Policy
            </h2>
            <p>
              We may update this policy at any time, and will update the effective
              date accordingly. Under certain circumstances (for example, with
              certain material changes or where required by applicable privacy
              laws) we will provide notice to you of these changes and, where
              required by applicable law, we will obtain your consent. Notice may
              be by email to you, by posting a notice on our Services, or by other
              means consistent with applicable law.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
              15. Contact Us
            </h2>
            <p>Questions about this Privacy Policy? Contact us at:</p>
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
