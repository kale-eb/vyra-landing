import type { Metadata } from "next";
import Link from "next/link";
import { TabbedCapabilities } from "./tabbed-capabilities";

export const metadata: Metadata = {
  title: "Getting Started — Vyra Docs",
  description:
    "Everything you need to know to start editing with AI — from uploading footage to getting the most out of the agent.",
};

export default function GuidePage() {
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
          Getting Started
        </h1>
        <p className="mb-12 text-[15px] leading-relaxed text-[var(--foreground-muted)]">
          Everything you need to know to start editing with AI — from uploading your first
          footage to getting the most out of the agent.
        </p>

        {/* Table of Contents */}
        <nav className="mb-14 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[var(--foreground-subtle)]">
            On this page
          </p>
          <ol className="columns-2 gap-x-8 space-y-1.5 text-[13px]">
            {[
              ["your-first-project", "Your First Project"],
              ["footage-storage", "Footage & Storage"],
              ["semantic-search", "Semantic Search"],
              ["setting-up-ai", "Setting Up Your AI"],
              ["agent-capabilities", "What the Agent Can Do"],
              ["agent-vs-you", "Agent vs. Doing It Yourself"],
              ["working-with-agent", "Communicating with the Agent"],
              ["reference-videos", "Reference Videos"],
              ["motion-graphics", "Motion Graphics"],
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-[var(--foreground-muted)] transition-colors hover:text-[var(--brand-blue)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-14 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">

          {/* ── Your First Project ─────────────────────────────── */}
          <section>
            <SectionHeading id="your-first-project">Your First Project</SectionHeading>
            <p>
              Vyra is a video editor built around an AI agent. You upload your footage, and the
              agent helps you assemble, search, and edit — from a first rough cut to polished
              motion graphics.
            </p>
            <p className="mt-3">
              To get started, create a new project and add your footage. Once your files are uploaded
              and processed, you can start editing — either manually through the UI like a traditional
              editor, or by talking to the agent through conversation.
            </p>
          </section>

          {/* ── Footage & Storage ──────────────────────────────── */}
          <section>
            <SectionHeading id="footage-storage">Footage &amp; Storage</SectionHeading>
            <p>
              Vyra has two ways to handle your footage, and it&apos;s worth understanding the difference
              early on.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--surface-border)] bg-white p-5">
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--surface-border)] bg-[var(--surface)]">
                    <HardDriveIcon className="h-3.5 w-3.5 text-[var(--foreground-muted)]" />
                  </span>
                  <h3 className="text-[14px] font-semibold text-[var(--foreground)]">Local Mode</h3>
                </div>
                <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                  When you add files directly to a project, the original stays on your device
                  and is never uploaded. Editing happens against the local file. Fast to start,
                  but the project only works on the device where the original file lives.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--surface-border)] bg-white p-5">
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--surface-border)] bg-[var(--surface)]">
                    <CloudIcon className="h-3.5 w-3.5 text-[var(--foreground-muted)]" />
                  </span>
                  <h3 className="text-[14px] font-semibold text-[var(--foreground)]">Cloud Mode</h3>
                </div>
                <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                  Files uploaded to your asset library are stored in the cloud. Projects using these
                  assets can be edited from any device. If you need to edit from multiple machines,
                  make sure all project assets are backed up.
                </p>
              </div>
            </div>

            <Callout type="tip" className="mt-5">
              You can back up local assets to the cloud at any time from the cloud icon in the
              project&apos;s top navbar. This converts them to cloud mode so you can edit from anywhere.
            </Callout>

            <p className="mt-4">
              Regardless of how you upload, all footage is automatically processed and indexed.
              This means the agent can understand what&apos;s in your footage — every scene, every
              moment — which powers semantic search and intelligent editing.
            </p>
          </section>

          {/* ── Semantic Search ─────────────────────────────────── */}
          <section>
            <SectionHeading id="semantic-search">Semantic Search</SectionHeading>
            <p>
              Traditional editors make you search by filename. Vyra understands your footage.
            </p>
            <p className="mt-3">
              After your files are processed, you can search for moments using natural language.
              Instead of hunting for{" "}
              <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[13px]">
                DSC_0042.MOV
              </code>
              , you can search for things like:
            </p>

            <div className="mt-4 space-y-2">
              {[
                "close-up of hands on keyboard",
                "sunset over the ocean",
                "someone laughing",
                "product being unboxed",
              ].map((q) => (
                <div
                  key={q}
                  className="flex items-center gap-3 rounded-lg border border-[var(--surface-border)] bg-white px-4 py-2.5"
                >
                  <SearchIcon className="h-3.5 w-3.5 shrink-0 text-[var(--foreground-subtle)]" />
                  <span className="text-[13px] italic text-[var(--foreground-muted)]">&ldquo;{q}&rdquo;</span>
                </div>
              ))}
            </div>

            <p className="mt-4">
              Search results return specific clips and timestamps — not just whole files. This works
              within a single project or across your entire library, so you can pull the perfect
              moment from any video you&apos;ve ever uploaded.
            </p>
          </section>

          {/* ── Setting Up Your AI ──────────────────────────────── */}
          <section>
            <SectionHeading id="setting-up-ai">Setting Up Your AI</SectionHeading>
            <p>
              Vyra&apos;s AI agent connects through{" "}
              <a
                href="https://modelcontextprotocol.io"
                className="text-[var(--brand-blue)] underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                MCP
              </a>{" "}
              (Model Context Protocol). This means you can use it from Claude, Cursor, Windsurf,
              or any MCP-compatible client — not just the built-in chat.
            </p>

            <Link
              href="/docs/mcp"
              className="group mt-4 flex items-center justify-between rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
            >
              <div>
                <h3 className="text-[14px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                  MCP Setup Guide
                </h3>
                <p className="mt-0.5 text-[13px] text-[var(--foreground-muted)]">
                  Step-by-step instructions for connecting Vyra to your preferred AI client.
                </p>
              </div>
              <ArrowIcon className="h-4 w-4 shrink-0 text-[var(--foreground-subtle)] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </section>

          {/* ── What the Agent Can Do ───────────────────────────── */}
          <section>
            <SectionHeading id="agent-capabilities">What the Agent Can Do</SectionHeading>
            <p>
              The agent has full access to every feature in the editor. Anything you can do through
              the UI, you can ask the agent to do through conversation.
            </p>

            <TabbedCapabilities />
          </section>

          {/* ── Agent vs You ────────────────────────────────────── */}
          <section>
            <SectionHeading id="agent-vs-you">Agent vs. Doing It Yourself</SectionHeading>
            <p>
              The agent can do everything, but that doesn&apos;t mean it should. Some things are
              faster by hand — especially small, precise adjustments.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--surface-border)] bg-white p-5 border-l-[3px] border-l-emerald-400">
                <h4 className="mb-3 text-[13px] font-semibold text-emerald-700">Let the agent handle</h4>
                <ul className="space-y-2 text-[13px] text-[var(--foreground-muted)]">
                  <li>First rough cut from raw footage</li>
                  <li>Searching hours of footage</li>
                  <li>Transcript-based editing</li>
                  <li>Generating motion graphics</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[var(--surface-border)] bg-white p-5 border-l-[3px] border-l-blue-400">
                <h4 className="mb-3 text-[13px] font-semibold text-blue-700">Either works</h4>
                <ul className="space-y-2 text-[13px] text-[var(--foreground-muted)]">
                  <li>Effects &amp; color grading</li>
                  <li>Captions &amp; text overlays</li>
                  <li>Smart masks &amp; tracking</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[var(--surface-border)] bg-white p-5 border-l-[3px] border-l-amber-400">
                <h4 className="mb-3 text-[13px] font-semibold text-amber-700">Faster to do yourself</h4>
                <ul className="space-y-2 text-[13px] text-[var(--foreground-muted)]">
                  <li>Fine-tuning trim points</li>
                  <li>Nudging overlays by pixels</li>
                  <li>Precise logo positioning</li>
                </ul>
              </div>
            </div>

            <Callout type="tip" className="mt-5">
              A good workflow: let the agent build the rough cut and handle the heavy lifting
              (searching footage, assembling, generating graphics), then fine-tune timing and
              positioning yourself in the UI.
            </Callout>
          </section>

          {/* ── Working with the Agent ──────────────────────────── */}
          <section>
            <SectionHeading id="working-with-agent">Communicating with the Agent</SectionHeading>
            <p>
              The agent sees your editor state — your selection, playhead position, and timeline.
              The more context you give it, the better the results.
            </p>

            <div className="mt-5 rounded-xl border border-[var(--surface-border)] bg-white divide-y divide-[var(--surface-border)]/50">
              <div className="px-5 py-4">
                <h4 className="mb-1.5 text-[13px] font-semibold text-[var(--foreground)]">Be specific in your requests</h4>
                <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                  Instead of &ldquo;make this better,&rdquo; try &ldquo;increase the contrast on
                  this clip and add a subtle vignette.&rdquo; Specific requests get specific results.
                </p>
              </div>
              <div className="px-5 py-4">
                <h4 className="mb-1.5 text-[13px] font-semibold text-[var(--foreground)]">The agent sees your selection and playhead</h4>
                <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                  Select items on the timeline and refer to them as &ldquo;the selected clip.&rdquo;
                  Move your playhead to a specific moment and say &ldquo;at this point in the
                  video...&rdquo; The agent knows what you&apos;re looking at.
                </p>
              </div>
              <div className="px-5 py-4">
                <h4 className="mb-1.5 text-[13px] font-semibold text-[var(--foreground)]">Highlight a range on the timeline</h4>
                <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                  Drag along the ruler at the top of the timeline to select a time range. Then say
                  &ldquo;in this section, speed up the pacing&rdquo; or &ldquo;add a transition here.&rdquo;
                </p>
              </div>
              <div className="px-5 py-4">
                <h4 className="mb-1.5 text-[13px] font-semibold text-[var(--foreground)]">Ask the agent to look at what you see</h4>
                <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                  The agent can capture the current frame to see exactly what&apos;s on screen.
                  Say &ldquo;can you look at what this frame looks like?&rdquo; and it will capture
                  and analyze it.
                </p>
              </div>
              <div className="px-5 py-4">
                <h4 className="mb-1.5 text-[13px] font-semibold text-[var(--foreground)]">Ask the agent about the UI</h4>
                <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                  Not sure how to do something? The agent has comprehensive documentation access.
                  Ask &ldquo;how do I add a mask?&rdquo; or &ldquo;where are the export settings?&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* ── Reference Videos ────────────────────────────────── */}
          <section>
            <SectionHeading id="reference-videos">Reference Videos</SectionHeading>
            <p>
              Reference videos are one of the most powerful features in Vyra. They give the agent
              a visual guide for the style, pacing, and feel of what you&apos;re making.
            </p>

            <div className="mt-5 rounded-xl border border-[var(--surface-border)] bg-white p-5 space-y-5">
              <InfoRow title="Where to find them">
                In the left panel, next to the Footage tab, you&apos;ll find the References tab.
                You can add up to one reference video per project.
              </InfoRow>
              <InfoRow title="What the agent sees">
                The agent analyzes your reference for editing style, pacing, font choices, motion
                graphic style, transitions, and overall feel. It uses this as a creative guide when
                making decisions about your edit.
              </InfoRow>
              <InfoRow title="Point to specific moments">
                You can reference specific timestamps: &ldquo;look at the transition at 0:45 in
                the reference&rdquo; or &ldquo;match the text style from the intro.&rdquo; The
                agent can capture frames from the reference video to understand exactly what you mean.
              </InfoRow>
            </div>

            <Callout type="note" className="mt-5">
              Reference videos are for inspiration and style — they&apos;re not your footage. The
              agent won&apos;t use clips from the reference in your edit. It only uses the reference
              to understand the vibe you&apos;re going for.
            </Callout>
          </section>

          {/* ── Motion Graphics ─────────────────────────────────── */}
          <section>
            <SectionHeading id="motion-graphics">Motion Graphics</SectionHeading>
            <p>
              Motion graphics in Vyra are generated by the agent as code. This means they&apos;re
              fully dynamic — animated, responsive, and unique to your project. But it also means
              you edit them through conversation, not by dragging handles.
            </p>

            <div className="mt-5 rounded-xl border border-[var(--surface-border)] bg-white p-5">
              <h3 className="mb-4 text-[14px] font-semibold text-[var(--foreground)]">
                How it works
              </h3>
              <div className="space-y-4">
                <Step number={1} title="Describe what you want">
                  &ldquo;Create a lower third with the name John Smith and the title Creative Director&rdquo;
                  — the more detail you give, the closer the first result.
                </Step>
                <Step number={2} title="The agent generates and places it">
                  It writes animated code and places the motion graphic on your timeline. You&apos;ll
                  see it appear in real time.
                </Step>
                <Step number={3} title="Refine through conversation">
                  To modify it, ask the agent — &ldquo;make the text bigger&rdquo; or &ldquo;change
                  the animation to slide in from the left.&rdquo;
                </Step>
              </div>
            </div>

            <Callout type="important" className="mt-5">
              You can&apos;t manually edit motion graphics by clicking on them — they&apos;re
              rendered from code. To make changes, ask the agent. It can modify colors, text,
              animations, sizing, and timing.
            </Callout>

            <p className="mt-4">
              <strong className="text-[var(--foreground)]">Your assets can be included.</strong>{" "}
              Images, logos, and other media from your project can be embedded directly into motion
              graphics. The agent can animate them, add borders and frames, or compose them into
              complex animated layouts.
            </p>
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

/* ── Sub-components ──────────────────────────────────────────── */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-4 scroll-mt-24 text-xl font-semibold text-[var(--foreground)]">
      {children}
    </h2>
  );
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-[12px] font-bold text-[var(--foreground-muted)]">
        {number}
      </div>
      <div className="pt-0.5">
        <h4 className="mb-1 text-[14px] font-semibold text-[var(--foreground)]">{title}</h4>
        <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">{children}</p>
      </div>
    </div>
  );
}

function Callout({ type, className = "", children }: { type: "tip" | "note" | "important"; className?: string; children: React.ReactNode }) {
  const config = {
    tip: { bg: "bg-emerald-50", border: "border-emerald-200/60", color: "text-emerald-700", label: "Tip" },
    note: { bg: "bg-blue-50", border: "border-blue-200/60", color: "text-blue-700", label: "Note" },
    important: { bg: "bg-amber-50", border: "border-amber-200/60", color: "text-amber-700", label: "Important" },
  };
  const c = config[type];
  return (
    <div className={`rounded-lg border ${c.border} ${c.bg} p-4 ${className}`}>
      <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
        <span className={`font-semibold ${c.color}`}>{c.label}: </span>
        {children}
      </p>
    </div>
  );
}


function InfoRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-1 text-[14px] font-semibold text-[var(--foreground)]">{title}</h4>
      <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">{children}</p>
    </div>
  );
}

/* ── Icons (inline SVG to avoid dependency on lucide in landing) ── */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function HardDriveIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="22" x2="2" y1="12" y2="12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /><line x1="6" x2="6.01" y1="16" y2="16" /><line x1="10" x2="10.01" y1="16" y2="16" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
