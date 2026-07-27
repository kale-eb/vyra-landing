"use client";

import { useState, type ReactNode } from "react";

/**
 * Two-path selector for the first-project walkthrough. Vyra sells two AI
 * products — the built-in Vyra AI agent (AI plans) and MCP bring-your-own-agent
 * (MCP plans) — and the setup steps are completely different. Splitting them
 * keeps AI-plan users from being routed into desktop MCP setup they don't need.
 */
export function PathTabs({ ai, mcp }: { ai: ReactNode; mcp: ReactNode }) {
  const [path, setPath] = useState<"ai" | "mcp">("ai");

  return (
    <div>
      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <PathCard
          active={path === "ai"}
          onClick={() => setPath("ai")}
          title="Vyra AI (in the editor)"
          badge="AI Starter & AI Pro plans"
          description="The agent is built into the editor — nothing to install. Upload footage, tell it what you're making, watch it edit."
        />
        <PathCard
          active={path === "mcp"}
          onClick={() => setPath("mcp")}
          title="MCP (bring your own agent)"
          badge="MCP plans"
          description="Drive the editor from Claude Code, Claude Desktop, claude.ai, or Cursor via the Model Context Protocol."
        />
      </div>
      {path === "ai" ? ai : mcp}
    </div>
  );
}

function PathCard({
  active,
  onClick,
  title,
  badge,
  description,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  badge: string;
  description: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition-all ${
        active
          ? "border-[var(--brand-blue)] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          : "border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--foreground-subtle)]"
      }`}
    >
      <div className="mb-1 flex items-center gap-2">
        <span
          className={`h-2.5 w-2.5 rounded-full border-2 ${
            active
              ? "border-[var(--brand-blue)] bg-[var(--brand-blue)]"
              : "border-[var(--foreground-subtle)] bg-transparent"
          }`}
        />
        <h3 className="text-[15px] font-semibold text-[var(--foreground)]">{title}</h3>
      </div>
      <p className="mb-2 text-[12px] font-medium text-[var(--brand-blue)]">{badge}</p>
      <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">{description}</p>
    </button>
  );
}
