"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Image from "next/image";

function LogoRow({ logos }: { logos: { src: string; alt: string }[] }) {
  return (
    <div className="ml-2.5 flex shrink-0 items-center gap-2">
      {logos.map(({ src, alt }) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          title={alt}
          width={16}
          height={16}
          className="shrink-0"
        />
      ))}
    </div>
  );
}

/* ---- Desktop App Mock (Claude Desktop - warm brown tones) ---- */
function DesktopMock() {
  return (
    <div className="bg-[#1c1917] flex-1 text-[11px]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3.5 py-2 bg-[#1a1714]">
        <div className="flex gap-1.5">
          <div className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-white/30 font-medium">Video editing session &darr;</span>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex items-center gap-1 px-3.5 py-1.5 border-b border-white/[0.06]">
        <span className="rounded-md px-2.5 py-1 text-[10px] text-white/30">Chat</span>
        <span className="rounded-md px-2.5 py-1 text-[10px] bg-white/[0.08] text-white/60 font-medium">Cowork</span>
        <span className="rounded-md px-2.5 py-1 text-[10px] text-white/30">&lt;/&gt; Code</span>
      </div>

      <div className="flex">
        {/* Chat area */}
        <div className="flex-1 p-3 flex flex-col gap-2">
          {/* User message */}
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-tr-sm bg-white/[0.08] px-3 py-1.5 max-w-[80%]">
              <p className="text-white/80 leading-relaxed">Add slow motion to the intro</p>
            </div>
          </div>

          {/* Tool calls */}
          <div className="flex flex-col gap-1">
            <p className="text-white/30 text-[10px]">Used 1 tool</p>
            <div className="flex items-center gap-1.5 rounded-md bg-white/[0.04] border border-white/[0.04] px-2 py-1">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 4h8v8" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-[9px] text-white/35">setTimeRemap</span>
              <span className="text-[8px] text-white/20 ml-auto bg-white/[0.06] rounded px-1.5 py-0.5">Result</span>
            </div>
          </div>

          {/* AI response */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-white/40 text-[10px]">Done</span>
            </div>
            <p className="text-white/60 leading-relaxed">Applied 0.5x speed ramp to 0:00-0:03. The intro now plays in slow motion.</p>
          </div>

          {/* Input bar */}
          <div className="mt-auto rounded-xl bg-white/[0.04] border border-white/[0.06] px-3 py-2 flex items-center justify-between">
            <span className="text-white/20 text-[10px]">Write a message...</span>
            <span className="text-white/15 text-[9px]">Claude</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Terminal Mock ---- */
function TerminalMock() {
  return (
    <div className="bg-[#0d1117] p-0 flex-1 font-mono">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#161b22] border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-white/20 font-medium font-sans">zsh</span>
        </div>
      </div>

      {/* Terminal content */}
      <div className="p-4 text-[11px] leading-[2] text-white/70 space-y-0">
        <p>
          <span className="text-emerald-400">~</span>
          <span className="text-white/30"> $ </span>
          <span className="text-white/80">npx @anthropic-ai/claude-code</span>
        </p>
        <p className="text-white/40">
          ╭ Claude Code
        </p>
        <p>
          <span className="text-white/30">  &gt; </span>
          <span className="text-white/70">trim my travel vlog to the best 30 seconds</span>
        </p>
        <p className="text-blue-400/60">
          <span className="text-white/20">  </span>
          Analyzing 4:20 of footage...
        </p>
        <p>
          <span className="text-white/20">  </span>
          <span className="text-emerald-400/70">✓</span>
          <span className="text-white/50"> Kept 0:47-1:18 (best segment)</span>
        </p>
        <p>
          <span className="text-white/20">  </span>
          <span className="text-emerald-400/70">✓</span>
          <span className="text-white/50"> Exported: travel-vlog-cut.mp4</span>
        </p>
        <p className="mt-1">
          <span className="text-emerald-400">~</span>
          <span className="text-white/30"> $ </span>
          <span className="animate-pulse text-white/40">▊</span>
        </p>
      </div>
    </div>
  );
}

/* ---- In-App Chat Mock (Vyra's built-in AI) ---- */
function WebAppMock() {
  return (
    <div className="bg-[#0d0d0d] flex-1">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#141414] border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-8 rounded-md bg-white/[0.04] border border-white/[0.08] px-3 py-1 flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1z" stroke="currentColor" strokeWidth="1.2" className="text-white/20" />
          </svg>
          <span className="text-[10px] text-white/40">app.usevyra.com</span>
        </div>
      </div>

      {/* Vyra AI panel, same look as the real app */}
      <div className="flex gap-1 p-1.5">
        <span className="flex-1 rounded-md py-1 text-center text-[10px] text-white/40">
          Footage
        </span>
        <span className="flex-1 rounded-md bg-gradient-to-r from-[#2735b5] to-[#4553ee] py-1 text-center text-[10px] font-semibold text-white">
          Vyra AI
        </span>
      </div>
      <div className="px-3 pb-4 pt-1 flex flex-col gap-2.5">
        <div className="rounded-xl bg-white/[0.07] px-3 py-2">
          <p className="text-[11px] leading-relaxed text-white/85">
            Remove the background music and add captions
          </p>
        </div>
        <p className="text-[11px] leading-relaxed text-white/60">
          Done. Music track removed and 31 captions synced to speech.
        </p>
        <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
          <span className="text-[12px] leading-none text-white/30">+</span>
          <span className="text-[10px] text-white/25">Ask anything...</span>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <Reveal
          y={24}
          blur={8}
          className="mb-12 text-center md:mb-16"
        >
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            One editor, <span className="serif-italic font-normal">every interface</span>
          </h2>
          <p className="mx-auto max-w-lg text-[16px] leading-relaxed text-[var(--foreground-muted)] md:text-[17px]">
            Chat with the AI built right into Vyra, or connect the assistant
            you already use, wherever it lives.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* In Vyra */}
          <Reveal y={32} duration={0.6} delay={0} className="h-full">
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="glow-card flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white">
            <WebAppMock />
            <div className="border-t border-[var(--surface-border)] p-5">
              <h3 className="text-[15px] font-bold text-[var(--foreground)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                In Vyra
              </h3>
              <p className="text-[12px] text-[var(--foreground-subtle)]">
                Built-in AI chat, no external AI needed
              </p>
            </div>
            </motion.div>
          </Reveal>

          {/* Terminal */}
          <Reveal y={32} duration={0.6} delay={0.15} className="h-full">
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="glow-card flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white">
            <TerminalMock />
            <div className="border-t border-[var(--surface-border)] p-5">
              <div className="flex items-center">
                <h3 className="text-[15px] font-bold text-[var(--foreground)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  Terminal
                </h3>
                <LogoRow
                  logos={[
                    { src: "/logos/claude.svg", alt: "Claude Code" },
                    { src: "/logos/codex.svg", alt: "Codex CLI" },
                    { src: "/logos/mcp.svg", alt: "Model Context Protocol" },
                  ]}
                />
              </div>
              <p className="text-[12px] text-[var(--foreground-subtle)]">
                Claude Code, Codex CLI, any MCP client
              </p>
            </div>
            </motion.div>
          </Reveal>

          {/* Desktop App */}
          <Reveal y={32} duration={0.6} delay={0.3} className="h-full">
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="glow-card flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white">
            <DesktopMock />
            <div className="border-t border-[var(--surface-border)] p-5">
              <div className="flex items-center">
                <h3 className="text-[15px] font-bold text-[var(--foreground)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  Desktop App
                </h3>
                <LogoRow
                  logos={[
                    { src: "/logos/claude.svg", alt: "Claude Desktop" },
                    { src: "/logos/openai.svg", alt: "ChatGPT" },
                    { src: "/logos/cursor.svg", alt: "Cursor" },
                  ]}
                />
              </div>
              <p className="text-[12px] text-[var(--foreground-subtle)]">
                Claude Desktop, ChatGPT app, Cursor
              </p>
            </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
