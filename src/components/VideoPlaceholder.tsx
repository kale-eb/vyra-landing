"use client";

interface VideoPlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
}

export default function VideoPlaceholder({
  label = "Video coming soon",
  aspectRatio = "16/9",
  className = "",
}: VideoPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Base light gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f0f3] via-[#eaeaee] to-[#f2f2f5]" />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.15) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Ambient color wash — top-left corner glow */}
      <div className="absolute -top-1/4 -left-1/4 h-3/4 w-3/4 rounded-full bg-[var(--brand-blue)] opacity-[0.03] blur-[80px]" />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        {/* Play button — light frosted glass */}
        <div className="group/play flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-black/[0.08] bg-white/60 backdrop-blur-sm transition-all duration-300 hover:border-black/[0.12] hover:bg-white/80 hover:scale-105 hover:shadow-lg hover:shadow-black/[0.06]">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            className="ml-0.5 text-[var(--foreground-muted)] transition-colors duration-300 group-hover/play:text-[var(--foreground)]"
          >
            <path
              d="M14.5 7.768a1.5 1.5 0 0 1 0 2.464l-12 7.2A1.5 1.5 0 0 1 .25 16.2V1.8A1.5 1.5 0 0 1 2.5.568l12 7.2Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="text-[12px] font-medium tracking-wide text-[var(--foreground-subtle)] select-none uppercase">
          {label}
        </span>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-20" />
    </div>
  );
}
