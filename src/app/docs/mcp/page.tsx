import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCP Server — Vyra Docs",
  description:
    "Connect Claude Code, Codex, or any MCP-compatible agent to control the Vyra video editor.",
};

export default function McpDocsPage() {
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--surface-border)] bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl backdrop-saturate-150">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-4 px-6">
          <Link
            href="/"
            className="text-[22px] font-extrabold tracking-tight text-[var(--foreground)]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Vyra
          </Link>
          <span className="text-[var(--foreground-subtle)]">/</span>
          <Link
            href="/docs"
            className="text-[13px] font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
          >
            Docs
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1
          className="mb-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          MCP Server
        </h1>
        <p className="mb-12 text-[15px] leading-relaxed text-[var(--foreground-muted)]">
          Connect Claude Code, Codex, or any MCP-compatible agent to control your Vyra editor remotely.
          The agent can view your timeline, add media, edit properties, apply effects, and more —
          all while you see changes in real time in your browser.
        </p>

        <div className="space-y-12 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          {/* Quick Start */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--foreground)]">
              Quick Start
            </h2>
            <div className="space-y-4">
              <Step number={1} title="Add the MCP server">
                <p>Run this in your terminal:</p>
                <CodeBlock>claude mcp add vyra --transport http https://api.usevyra.com/mcp</CodeBlock>
                <p className="mt-2 text-[13px] text-[var(--foreground-subtle)]">
                  For other MCP clients, use the server URL{" "}
                  <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[13px]">
                    https://api.usevyra.com/mcp
                  </code>
                </p>
              </Step>
              <Step number={2} title="Authenticate">
                <p>
                  The first time you connect, your browser will open to authorize the agent
                  with your Vyra account. Sign in and click Approve.
                </p>
              </Step>
              <Step number={3} title="Open a project">
                <p>
                  Open any project in the Vyra editor at{" "}
                  <a href="https://app.usevyra.com" className="text-[var(--brand-blue)] underline underline-offset-2">
                    app.usevyra.com
                  </a>
                  . The agent needs the editor open to execute timeline editing tools.
                </p>
              </Step>
              <Step number={4} title="Start editing">
                <p>
                  Ask the agent to edit your video. It has access to 50+ tools covering the full
                  editing workflow.
                </p>
              </Step>
            </div>
          </section>

          {/* Claude Desktop & claude.ai */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--foreground)]">
              Other Clients
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-[15px] font-semibold text-[var(--foreground)]">
                  Claude Desktop App
                </h3>
                <p className="mb-2">
                  Add to your{" "}
                  <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[13px]">
                    claude_desktop_config.json
                  </code>
                  :
                </p>
                <CodeBlock>{`{
  "mcpServers": {
    "vyra": {
      "type": "url",
      "url": "https://api.usevyra.com/mcp"
    }
  }
}`}</CodeBlock>
              </div>
              <div>
                <h3 className="mb-2 text-[15px] font-semibold text-[var(--foreground)]">
                  claude.ai
                </h3>
                <p>
                  Go to <strong>Settings &rarr; Integrations &rarr; Add MCP Server</strong> and
                  paste <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[13px]">https://api.usevyra.com/mcp</code>.
                </p>
              </div>
            </div>
          </section>

          {/* What You Can Do */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--foreground)]">
              What You Can Do
            </h2>
            <div className="space-y-3">
              <CapabilityGroup title="View & Search">
                <li>Browse project assets and references</li>
                <li>View timeline state, tracks, items, and timing</li>
                <li>Search footage by visual content, transcript, location, or date</li>
                <li>Capture screenshots of the canvas at any timestamp</li>
                <li>Search stock media (Pexels, Freesound)</li>
              </CapabilityGroup>
              <CapabilityGroup title="Edit & Build">
                <li>Add video, audio, images to the timeline with trim control</li>
                <li>Add text overlays, shapes, and styled captions</li>
                <li>Edit properties — position, scale, opacity, volume, speed</li>
                <li>Move, split, slip, clone, and delete timeline items</li>
                <li>Set keyframes for animation</li>
              </CapabilityGroup>
              <CapabilityGroup title="Effects & Compositing">
                <li>Apply and configure effects (color, stylize, distort)</li>
                <li>Create and animate masks (rectangle, ellipse, pen tool)</li>
                <li>AI-powered background removal</li>
                <li>Build motion graphics with React/Remotion code</li>
              </CapabilityGroup>
              <CapabilityGroup title="Project & Assets">
                <li>Read project template and style configuration</li>
                <li>Add assets from your library or stock to a project</li>
                <li>Manage markers and consolidate tracks</li>
              </CapabilityGroup>
            </div>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--foreground)]">
              How It Works
            </h2>
            <p className="mb-3">
              Vyra&apos;s MCP server implements the{" "}
              <a
                href="https://modelcontextprotocol.io"
                className="text-[var(--brand-blue)] underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Model Context Protocol
              </a>{" "}
              (2025-03-26 Streamable HTTP transport).
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-[var(--foreground)]">Authentication:</strong>{" "}
                OAuth 2.1 with PKCE. The agent authenticates with your Vyra account through a
                browser consent flow.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Backend tools</strong> (asset search,
                project info, stock search) execute on the server directly.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Frontend tools</strong> (timeline edits,
                adding media, effects) are dispatched to your browser where the editor is open,
                executed against the live editor state, and results are returned to the agent.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Resources</strong> provide read access
                to project state, assets, template, and style configuration.
              </li>
            </ul>
          </section>

          {/* Requirements */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--foreground)]">
              Requirements
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>A Vyra account (free or paid)</li>
              <li>A project open in the Vyra editor for timeline editing tools</li>
              <li>An MCP-compatible client (Claude Code, Claude Desktop, claude.ai, Codex, etc.)</li>
            </ul>
          </section>

          {/* Managing Sessions */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--foreground)]">
              Managing Sessions
            </h2>
            <p>
              You can view active MCP sessions and revoke access from{" "}
              <a href="https://app.usevyra.com/settings" className="text-[var(--brand-blue)] underline underline-offset-2">
                Settings &rarr; External Agent
              </a>{" "}
              in the Vyra app. When an agent is connected, a &quot;MCP&quot; tab appears alongside
              your chat panel showing tool activity in real time.
            </p>
          </section>

          {/* Troubleshooting */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--foreground)]">
              Troubleshooting
            </h2>
            <div className="space-y-4">
              <TroubleshootItem title="&quot;No browser connected&quot;">
                The editor isn&apos;t open. Open a project at app.usevyra.com — timeline tools
                require the editor to be active in your browser.
              </TroubleshootItem>
              <TroubleshootItem title="Authentication fails">
                Try removing and re-adding the MCP server. Run{" "}
                <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[13px]">
                  claude mcp remove vyra
                </code>{" "}
                then add it again.
              </TroubleshootItem>
              <TroubleshootItem title="Tools not appearing">
                Reconnect the MCP session. The tool list is fetched on initialization —
                if tools were updated, you need to restart the connection.
              </TroubleshootItem>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--surface-border)] pt-8">
          <Link
            href="/docs"
            className="text-[14px] text-[var(--foreground-subtle)] transition-colors hover:text-[var(--foreground-muted)]"
          >
            &larr; Back to docs
          </Link>
        </div>
      </main>
    </>
  );
}

/* ── Sub-components ────────────────────────────────────────── */

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-[12px] font-bold text-[var(--foreground-muted)]">
        {number}
      </div>
      <div className="pt-0.5">
        <h3 className="mb-1.5 text-[15px] font-semibold text-[var(--foreground)]">
          {title}
        </h3>
        <div className="text-[14px] leading-relaxed text-[var(--foreground-muted)]">
          {children}
        </div>
      </div>
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mt-2 overflow-x-auto rounded-lg border border-[var(--surface-border)] bg-[#1a1a2e] px-4 py-3 text-[13px] leading-relaxed text-[#e2e8f0]">
      <code>{children}</code>
    </pre>
  );
}

function CapabilityGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--surface-border)] bg-white p-5">
      <h3 className="mb-3 text-[14px] font-semibold text-[var(--foreground)]">
        {title}
      </h3>
      <ul className="list-disc space-y-1.5 pl-5 text-[13px] text-[var(--foreground-muted)]">
        {children}
      </ul>
    </div>
  );
}

function TroubleshootItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-1 text-[14px] font-semibold text-[var(--foreground)]">
        {title}
      </h3>
      <p className="text-[14px] text-[var(--foreground-muted)]">{children}</p>
    </div>
  );
}
