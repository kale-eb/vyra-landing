import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1
        className="mb-2 text-6xl font-bold tracking-tight text-[var(--foreground)]"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
      >
        404
      </h1>
      <p className="mb-8 text-[15px] text-[var(--foreground-muted)]">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[var(--foreground)] px-6 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#222] hover:shadow-lg hover:shadow-black/10"
      >
        Back to home
      </Link>
    </div>
  );
}
