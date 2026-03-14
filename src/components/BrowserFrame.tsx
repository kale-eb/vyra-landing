"use client";

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

export default function BrowserFrame({
  children,
  className = "",
  url = "app.usevyra.com",
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)] ${className}`}
    >
      {/* Browser chrome — light */}
      <div className="flex items-center gap-3 border-b border-black/[0.06] bg-[#f0f0f2] px-4 py-3">
        {/* Window dots */}
        <div className="flex gap-2">
          <div className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
        </div>

        {/* URL bar — centered */}
        <div className="ml-2 flex flex-1 items-center justify-center">
          <div className="flex items-center gap-2 rounded-lg border border-black/[0.06] bg-white/80 px-3.5 py-[5px]">
            <svg
              width="10"
              height="10"
              viewBox="0 0 16 16"
              fill="none"
              className="text-[var(--foreground-subtle)] opacity-60"
            >
              <path
                d="M8 1a5 5 0 0 0-5 5v2a2 2 0 0 0-1 1.732V13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.732A2 2 0 0 0 13 8V6a5 5 0 0 0-5-5Zm-3 5a3 3 0 1 1 6 0v2H5V6Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-[11px] font-medium text-[var(--foreground-subtle)]">
              {url}
            </span>
          </div>
        </div>

        {/* Right spacer for symmetry */}
        <div className="w-[62px]" />
      </div>

      {/* Content area */}
      <div>{children}</div>
    </div>
  );
}
