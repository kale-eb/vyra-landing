"use client";

import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ],
  account: [
    { label: "Log In", href: "https://app.usevyra.com/signup" },
    { label: "Sign Up", href: "https://app.usevyra.com/signup" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--surface-border)] bg-[var(--background)] px-6 pt-16 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand column — takes up more space */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="mb-5 inline-block text-[22px] font-extrabold tracking-tight text-[var(--foreground)]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Vyra
            </Link>
            <p className="mb-6 max-w-xs text-[14px] leading-[1.7] text-[var(--foreground-subtle)]">
              AI-powered video editing. Your footage, your vision, finished in
              minutes. No editing skills required.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {/* Twitter/X */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--surface-border)] bg-white text-[var(--foreground-subtle)] transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:text-[var(--foreground-muted)]"
                aria-label="Twitter"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--surface-border)] bg-white text-[var(--foreground-subtle)] transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:text-[var(--foreground-muted)]"
                aria-label="YouTube"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Discord */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--surface-border)] bg-white text-[var(--foreground-subtle)] transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:text-[var(--foreground-muted)]"
                aria-label="Discord"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2">
            <h4
              className="mb-4 text-[13px] font-bold uppercase tracking-wider text-[var(--foreground)]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[var(--foreground-subtle)] transition-colors duration-200 hover:text-[var(--foreground-muted)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4
              className="mb-4 text-[13px] font-bold uppercase tracking-wider text-[var(--foreground)]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Account
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.account.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[var(--foreground-subtle)] transition-colors duration-200 hover:text-[var(--foreground-muted)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4
              className="mb-4 text-[13px] font-bold uppercase tracking-wider text-[var(--foreground)]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[var(--foreground-subtle)] transition-colors duration-200 hover:text-[var(--foreground-muted)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--surface-border)] pt-8 sm:flex-row">
          <p className="text-[12px] text-[var(--foreground-subtle)]">
            &copy; 2026 Vyra. All rights reserved.
          </p>
          <p className="text-[12px] text-[var(--foreground-subtle)]">
            Built for creators who move fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
