import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Guides for using Vyra — the AI video editor for agents. Connect Claude, ChatGPT, Codex, or any MCP-compatible client and learn how to edit video by describing what you want.",
  alternates: { canonical: "https://usevyra.com/docs" },
  openGraph: {
    title: "Vyra Documentation",
    description:
      "Guides for using Vyra — the AI video editor for agents. Connect Claude, ChatGPT, Codex, or any MCP client.",
    url: "https://usevyra.com/docs",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://usevyra.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://usevyra.com/docs" },
  ],
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Vyra Documentation",
  url: "https://usevyra.com/docs",
  description:
    "Guides for using Vyra, the AI video editor for agents — including the MCP server, getting started, and your first project.",
  isPartOf: { "@id": "https://usevyra.com#website" },
  about: { "@id": "https://usevyra.com#software" },
  hasPart: [
    {
      "@type": "TechArticle",
      name: "Your First Project",
      url: "https://usevyra.com/docs/first-project",
    },
    {
      "@type": "TechArticle",
      name: "Getting Started",
      url: "https://usevyra.com/docs/guide",
    },
    {
      "@type": "TechArticle",
      name: "MCP Server",
      url: "https://usevyra.com/docs/mcp",
    },
  ],
};

function BookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

const guides = [
  {
    title: "Your First Project",
    description:
      "A step-by-step walkthrough from signing up to your first export.",
    href: "/docs/first-project",
    icon: RocketIcon,
  },
  {
    title: "Getting Started",
    description:
      "Everything you need to know — from uploading footage to getting the most out of the AI agent.",
    href: "/docs/guide",
    icon: BookIcon,
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
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
