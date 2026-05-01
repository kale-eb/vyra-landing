import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation — Vyra",
  description: "Guides and documentation for the Vyra video editor.",
};

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}

const guides = [
  {
    title: "MCP Server",
    description:
      "Connect Claude, Codex, or any MCP-compatible agent to control Vyra remotely.",
    href: "/docs/mcp",
    icon: TerminalIcon,
  },
];

export default function DocsPage() {
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
          Documentation
        </h1>
        <p className="mb-12 text-[15px] text-[var(--foreground-muted)]">
          Guides and resources for getting the most out of Vyra.
        </p>

        <div className="space-y-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex items-start gap-4 rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--surface-border)] bg-[var(--surface)]">
                <guide.icon className="h-5 w-5 text-[var(--foreground-muted)]" />
              </div>
              <div>
                <h2 className="mb-1 text-[15px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                  {guide.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                  {guide.description}
                </p>
              </div>
            </Link>
          ))}
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
