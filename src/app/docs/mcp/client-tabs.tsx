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
          <li>Go to <strong className="text-[var(--foreground)]">Customize</strong> &rarr; <strong className="text-[var(--foreground)]">Connectors</strong></li>
          <li>Click <strong className="text-[var(--foreground)]">+ Add</strong>, then <strong className="text-[var(--foreground)]">Add custom connector</strong></li>
          <li>
            Enter the name <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">Vyra</code> and
            the URL <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">{SERVER_URL}</code>, then click <strong className="text-[var(--foreground)]">Continue</strong>
          </li>
          <li>Review the detected sign-in and click <strong className="text-[var(--foreground)]">Continue</strong></li>
          <li>
            Under <strong className="text-[var(--foreground)]">Authentication</strong>, choose <strong className="text-[var(--foreground)]">Sign in now</strong>,
            then click <strong className="text-[var(--foreground)]">Add</strong> and you&apos;ll be redirected to authorize
          </li>
        </ol>
        <p className="mt-3 text-[13px] text-[var(--foreground-subtle)]">
          To use in a conversation, click the <strong className="text-[var(--foreground-muted)]">+</strong> button
          in the chat input, then <strong className="text-[var(--foreground-muted)]">Connectors</strong>, and toggle Vyra on.
          On a Team or Enterprise plan, an Owner adds Vyra in{" "}
          <strong className="text-[var(--foreground-muted)]">Organization settings &rarr; Connectors</strong> first, then you
          click <strong className="text-[var(--foreground-muted)]">Connect</strong> on it in Customize &rarr; Connectors.
          Free plans allow one custom connector.
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
          <li>
            Go to <strong className="text-[var(--foreground)]">Plugins</strong> (<code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">chatgpt.com/plugins</code>),
            click the <strong className="text-[var(--foreground)]">+</strong> button, then <strong className="text-[var(--foreground)]">Add custom MCP server</strong>
          </li>
          <li>
            Enter <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">Vyra</code> as
            the name and <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">{SERVER_URL}</code> as
            the <strong className="text-[var(--foreground)]">Server URL</strong> under Connection
          </li>
          <li>Set authentication to <strong className="text-[var(--foreground)]">OAuth</strong></li>
          <li>
            Select &ldquo;I understand and want to continue&rdquo; and click{" "}
            <strong className="text-[var(--foreground)]">Create as a plugin</strong>
          </li>
          <li>Install the Vyra plugin and sign in to authorize it when prompted</li>
        </ol>
        <p className="mt-3 text-[13px] text-[var(--foreground-subtle)]">
          To use in a conversation, type <strong className="text-[var(--foreground-muted)]">@</strong> in the prompt box and
          select Vyra. In a workspace, your admin&apos;s permissions decide whether you can add custom MCP servers.
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
        <Pre>{`claude mcp add --transport http Vyra ${SERVER_URL}`}</Pre>
        <p className="mt-4"><strong className="text-[var(--foreground)]">2. Authenticate:</strong></p>
        <Pre>claude mcp login Vyra</Pre>
        <p className="mt-2">
          Your browser will open to sign in and authorize Vyra. You can also run{" "}
          <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">/mcp</code> in
          Claude Code, select Vyra, then <strong className="text-[var(--foreground)]">Authenticate</strong>.
        </p>
        <p className="mt-3 text-[13px] text-[var(--foreground-subtle)]">
          This adds Vyra for the current project. Add <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">--scope user</code> for
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
    "Vyra": {
      "url": "${SERVER_URL}"
    }
  }
}`}</Pre>
        <p className="mt-4"><strong className="text-[var(--foreground)]">2. Authenticate:</strong></p>
        <p>
          Open <strong className="text-[var(--foreground)]">Customize</strong> in Cursor&apos;s sidebar and make sure the
          Vyra server is turned on. When Cursor asks you to sign in, your browser will open to sign in
          and authorize.
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
        <p className="mt-3 text-[13px] text-[var(--foreground-subtle)]">
          In the <strong className="text-[var(--foreground-muted)]">ChatGPT desktop app</strong>, go to{" "}
          <strong className="text-[var(--foreground-muted)]">Settings &rarr; MCP servers &rarr; Add server</strong>. Enter the
          name <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[12px]">vyra</code>, choose{" "}
          <strong className="text-[var(--foreground-muted)]">Streamable HTTP</strong>, enter the URL, and save. Click{" "}
          <strong className="text-[var(--foreground-muted)]">Restart</strong>, then <strong className="text-[var(--foreground-muted)]">Authenticate</strong> on
          the vyra row. The desktop app, CLI, and IDE extension share this setup.
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
