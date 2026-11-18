import Link from "next/link";
import IosAppButton from "@/components/IosAppButton";
import WebSignupButton from "@/components/WebSignupButton";

export type Crumb = { label: string; href: string };

export default function DirectoryNav({ crumbs, support = false, cta, iphone = false, sourcePage }: { crumbs: Crumb[]; support?: boolean; cta?: { href: string; label: string }; iphone?: boolean; sourcePage?: string }) {
  const source = sourcePage ?? crumbs.at(-1)?.href ?? "/";
  return (
    <nav aria-label="Page navigation" className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--surface-border)] bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link href="/" className="shrink-0 text-[22px] font-extrabold tracking-tight text-[var(--foreground)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          Vyra
        </Link>
        <div className="flex min-w-0 flex-1 items-center gap-3 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumbs">
          {crumbs.map((c) => (
            <span key={c.href} className="flex shrink-0 items-center gap-3">
              <span className="text-[var(--foreground-subtle)]">/</span>
              <Link href={c.href} className="text-[13px] font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)]">{c.label}</Link>
            </span>
          ))}
        </div>
        {cta || support ? (
          <a href={cta?.href ?? "/app-support"} className="shrink-0 rounded-full bg-[var(--foreground)] px-4 py-2 text-[13px] font-semibold text-white">{cta?.label ?? "Get help"}</a>
        ) : iphone ? (
          <IosAppButton compact sourcePage={source} placement="navigation" />
        ) : (
          <WebSignupButton compact sourcePage={source} placement="navigation">Try on web</WebSignupButton>
        )}
      </div>
    </nav>
  );
}
