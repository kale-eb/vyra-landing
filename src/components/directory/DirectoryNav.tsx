import Link from "next/link";

export type Crumb = { label: string; href: string };

export default function DirectoryNav({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--surface-border)] bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-3 overflow-x-auto px-6 whitespace-nowrap">
        <Link
          href="/"
          className="text-[22px] font-extrabold tracking-tight text-[var(--foreground)]"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Vyra
        </Link>
        {crumbs.map((c) => (
          <span key={c.href} className="flex items-center gap-3">
            <span className="text-[var(--foreground-subtle)]">/</span>
            <Link
              href={c.href}
              className="text-[13px] font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            >
              {c.label}
            </Link>
          </span>
        ))}
        <span className="ml-auto hidden sm:block">
          <a
            href="https://app.usevyra.com/signup"
            className="rounded-full bg-[var(--foreground)] px-4 py-2 text-[13px] font-semibold text-white"
          >
            Try Vyra free
          </a>
        </span>
      </div>
    </nav>
  );
}
