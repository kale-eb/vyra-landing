"use client";

import { useState } from "react";

const SERVER_URL = "https://api.usevyra.com/mcp";

const CLIENTS = [
  {
    id: "claude",
    label: "Claude",
    content: (
      <>
        <p>Works on both <strong className="text-[var(--foreground)]">claude.ai</strong> and the <strong className="text-[var(--foreground)]">Claude Desktop</strong> app:</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>Click your profile icon &rarr; <strong className="text-[var(--foreground)]">Settings</strong> &rarr; <strong className="text-[var(--foreground)]">Connectors</strong></li>
          <li>Click <strong className="text-[var(--foreground)]">Add custom integration</strong></li>
          <li>
            Enter the name <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">Vyra</code> and
            the URL <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">{SERVER_URL}</code>
          </li>
          <li>Click <strong className="text-[var(--foreground)]">Add</strong> &mdash; you&apos;ll be redirected to authorize</li>
        </ol>
        <p className="mt-3 text-[13px] text-[var(--foreground-subtle)]">
          To use in a conversation, click the <strong className="text-[var(--foreground-muted)]">+</strong> button
          in the chat input, then <strong className="text-[var(--foreground-muted)]">Connectors</strong>, and toggle Vyra on.
          Requires Pro or Max plan.
        </p>
      </>
    ),
  },
  {
    id: "chatgpt",
    label: "ChatGPT",
    content: (
      <>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Click your profile icon &rarr; <strong className="text-[var(--foreground)]">Settings</strong> &rarr; <strong className="text-[var(--foreground)]">Apps &amp; Connectors</strong></li>
          <li>Go to <strong className="text-[var(--foreground)]">Advanced settings</strong> and enable <strong className="text-[var(--foreground)]">Developer Mode</strong></li>
          <li>Back in Connectors, click <strong className="text-[var(--foreground)]">Create</strong></li>
          <li>
            Enter <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">Vyra</code> as
            the name and <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">{SERVER_URL}</code> as
            the MCP server URL
          </li>
          <li>Check &ldquo;I trust this application&rdquo; and click <strong className="text-[var(--foreground)]">Create</strong></li>
        </ol>
        <p className="mt-3 text-[13px] text-[var(--foreground-subtle)]">
          Requires Plus, Pro, Team, or Enterprise plan.
        </p>
      </>
    ),
  },
  {
    id: "claude-code",
    label: "Claude Code",
    content: (
      <>
        <p><strong className="text-[var(--foreground)]">1. Add the server:</strong></p>
        <Pre>{`claude mcp add-json vyra '{"type":"http","url":"${SERVER_URL}"}' --scope user`}</Pre>
        <p className="mt-4"><strong className="text-[var(--foreground)]">2. Authenticate:</strong></p>
        <p>
          Run <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">/mcp</code> in
          Claude Code to connect. Your browser will open to sign in and authorize Vyra.
        </p>
        <p className="mt-3 text-[13px] text-[var(--foreground-subtle)]">
          Use <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">--scope user</code> for
          all projects, <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">--scope project</code> to
          share with your team via <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">.mcp.json</code>.
        </p>
      </>
    ),
  },
  {
    id: "cursor",
    label: "Cursor",
    content: (
      <>
        <p><strong className="text-[var(--foreground)]">1. Add the server:</strong></p>
        <p>
          Create <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">.cursor/mcp.json</code> in
          your project root (or <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">~/.cursor/mcp.json</code> for
          global):
        </p>
        <Pre>{`{
  "mcpServers": {
    "vyra": {
      "type": "streamable-http",
      "url": "${SERVER_URL}"
    }
  }
}`}</Pre>
        <p className="mt-4"><strong className="text-[var(--foreground)]">2. Authenticate:</strong></p>
        <p>
          Go to <strong className="text-[var(--foreground)]">Cursor Settings &rarr; Tools &amp; MCP</strong>.
          Click the Vyra server to trigger authentication — your browser will open to sign in
          and authorize. A green status indicator means you&apos;re connected.
        </p>
      </>
    ),
  },
  {
    id: "codex",
    label: "Codex",
    content: (
      <>
        <p><strong className="text-[var(--foreground)]">1. Add the server:</strong></p>
        <Pre>{`codex mcp add vyra --url ${SERVER_URL}`}</Pre>
        <p className="mt-3 text-[13px] text-[var(--foreground-subtle)]">
          Or manually edit <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">~/.codex/config.toml</code> and
          add <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">[mcp_servers.vyra]</code> with <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">url = &quot;{SERVER_URL}&quot;</code>.
        </p>
        <p className="mt-4"><strong className="text-[var(--foreground)]">2. Authenticate:</strong></p>
        <Pre>codex mcp login vyra</Pre>
        <p className="mt-2">
          Your browser will open to sign in and authorize Vyra.
        </p>
      </>
    ),
  },
];

function Pre({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mt-2 overflow-x-auto rounded-lg border border-[var(--surface-border)] bg-[#1a1a2e] px-4 py-3 text-[13px] leading-relaxed text-[#e2e8f0]">
      <code>{children}</code>
    </pre>
  );
}

export function ClientTabs() {
  const [active, setActive] = useState("claude");
  const current = CLIENTS.find((c) => c.id === active)!;

  return (
    <div className="rounded-xl border border-[var(--surface-border)] bg-white overflow-hidden">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-[var(--surface-border)] bg-[var(--surface)] px-3 py-2">
        {CLIENTS.map((client) => (
          <button
            key={client.id}
            onClick={() => setActive(client.id)}
            className={`shrink-0 rounded-md px-3 py-1.5 text-[12px] font-medium transition-colors ${
              active === client.id
                ? "bg-white text-[var(--foreground)] shadow-sm"
                : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {client.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-5 py-4 text-[14px] leading-relaxed text-[var(--foreground-muted)]">
        {current.content}
      </div>
    </div>
  );
}
