import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your First Project",
  description:
    "Step-by-step walkthrough for creating your first AI-edited video in Vyra — from signing up and connecting your AI agent through MCP to exporting a finished video.",
  keywords: [
    "Vyra first project",
    "AI video editor tutorial",
    "Vyra walkthrough",
    "MCP video editor setup",
    "Claude video editor setup",
    "ChatGPT video editor setup",
  ],
  alternates: { canonical: "https://usevyra.com/docs/first-project" },
  openGraph: {
    title: "Your First Project in Vyra — sign up to first export",
    description:
      "A step-by-step walkthrough for creating your first AI-edited video in Vyra, from sign-up through export.",
    url: "https://usevyra.com/docs/first-project",
    type: "article",
  },
};

const FIRST_PROJECT_STEPS = [
  {
    name: "Create an account",
    text: "Sign up for a free Vyra account to access the editor and the MCP server.",
  },
  {
    name: "Connect your AI agent",
    text: "Connect Claude, ChatGPT, Codex, Cursor, or any MCP-compatible AI client to Vyra through the Model Context Protocol.",
  },
  {
    name: "Create a new project",
    text: "Start a new project in Vyra and upload the footage you want the agent to work with.",
  },
  {
    name: "Wait for processing",
    text: "Vyra analyzes your footage — detecting scenes, transcribing speech, and tagging objects and people — so the agent understands what's in every clip.",
  },
  {
    name: "Get familiar with the editor",
    text: "Tour the three panels of the Vyra editor: the footage panel on the left, the canvas in the center, and the tools and properties panel on the right.",
  },
  {
    name: "Start editing with the agent",
    text: "Describe what you want in natural language. The AI agent operates the editor on your behalf — cutting clips, adding captions, applying effects, and generating motion graphics.",
  },
  {
    name: "Export your video",
    text: "Export the finished video at your plan's maximum resolution (up to 4K on MCP Pro).",
  },
  {
    name: "What's next",
    text: "Explore advanced workflows in the Getting Started guide and the MCP Server reference.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://usevyra.com" },
    { "@type": "ListItem", position: 2, name: "Documentation", item: "https://usevyra.com/docs" },
    { "@type": "ListItem", position: 3, name: "Your First Project", item: "https://usevyra.com/docs/first-project" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to create your first AI-edited video in Vyra",
  description:
    "Sign up for Vyra, connect an MCP-compatible AI agent (Claude, ChatGPT, Codex, Cursor, etc.), upload footage, and let the agent edit and export your first video.",
  totalTime: "PT15M",
  estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
  supply: [
    { "@type": "HowToSupply", name: "A Vyra account (free tier works)" },
    { "@type": "HowToSupply", name: "Video footage to edit" },
    { "@type": "HowToSupply", name: "An MCP-compatible AI client (Claude, ChatGPT, Codex, Cursor, etc.)" },
  ],
  tool: [{ "@type": "HowToTool", name: "Vyra — the AI video editor for agents" }],
  step: FIRST_PROJECT_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
    url: `https://usevyra.com/docs/first-project#step-${i + 1}`,
  })),
};

export default function FirstProjectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
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
          Your First Project
        </h1>
        <p className="mb-12 text-[15px] leading-relaxed text-[var(--foreground-muted)]">
          A step-by-step walkthrough from signing up to your first export.
        </p>

        <div className="space-y-12 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">

          {/* Step 1 */}
          <Step number={1} title="Create an account">
            <p>
              Head to{" "}
              <a href="https://app.usevyra.com/signup" className="text-[var(--brand-blue)] underline underline-offset-2">
                app.usevyra.com
              </a>{" "}
              and sign up. The free tier gives you 600 processing credits, 2 GB of storage, and
              5 projects — enough to get a feel for the editor.
            </p>
          </Step>

          {/* Step 2 */}
          <Step number={2} title="Connect your AI agent">
            <p>
              Vyra&apos;s AI works through MCP (Model Context Protocol). Follow the{" "}
              <Link href="/docs/mcp" className="text-[var(--brand-blue)] underline underline-offset-2">
                MCP setup guide
              </Link>{" "}
              to connect your preferred client — Claude Code, Claude Desktop, claude.ai, Cursor,
              and more are all supported.
            </p>
          </Step>

          {/* Step 3 */}
          <Step number={3} title="Create a new project">
            <p>
              From the home page, drop your footage onto the upload area — or click to browse
              your files. You can add videos, images, and audio.
            </p>
            <DocImage src="/docs/drop-files.png" alt="Dropping footage onto the upload area" />
            <Callout>
              Files added directly to a project stay on your device (local mode). They&apos;re
              fast to start with, but only available on this machine. You can back them up to the
              cloud later from the cloud icon in the top bar.
            </Callout>
            <p className="mt-3">
              Optionally pick a <strong className="text-[var(--foreground)]">template</strong> (video
              structure like &ldquo;Short Talking Head&rdquo; or &ldquo;Vlog&rdquo;) and
              a <strong className="text-[var(--foreground)]">style</strong> (colors and fonts).
              You can also upload a <strong className="text-[var(--foreground)]">reference video</strong> to
              guide the AI&apos;s editing style.
            </p>
            <p className="mt-3">
              Click <strong className="text-[var(--foreground)]">Create Project</strong>. Your footage
              will start processing — this takes a minute or two depending on file sizes.
            </p>
          </Step>

          {/* Step 4 */}
          <Step number={4} title="Wait for processing">
            <p>
              While your footage processes, Vyra:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-6">
              <li>Transcribes all speech (so you can search by what was said)</li>
              <li>Analyzes every scene visually (so you can search by what you see)</li>
              <li>Generates thumbnails for your footage library</li>
            </ul>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <DocImage src="/docs/files-uploading.png" alt="Files uploading" />
              <DocImage src="/docs/files-processing.png" alt="Analyzing your content" />
            </div>
            <p className="mt-3">
              You&apos;ll see progress on each file. Once everything shows a green checkmark,
              the editor opens automatically.
            </p>
          </Step>

          {/* Step 5 */}
          <Step number={5} title="Get familiar with the editor">
            <p>
              The editor has three main areas:
            </p>
            <div className="mt-4 space-y-3">
              <AreaCard title="Left — Footage Panel" description="Your uploaded footage and reference videos. Search for clips, drag them onto the timeline, or click to add." />
              <AreaCard title="Center — Canvas" description="The video preview. What you see here is what you'll export." />
              <AreaCard title="Right — Tools & Properties" description="Tool panels (text, effects, captions, etc.) when nothing is selected. Properties and effects when an item is selected on the timeline." />
            </div>
            <p className="mt-3">
              The <strong className="text-[var(--foreground)]">timeline</strong> runs along the bottom —
              this is where you arrange your clips, text, audio, and graphics.
            </p>
          </Step>

          {/* Step 6 */}
          <Step number={6} title="Start editing with the agent">
            <p>
              Open your MCP client and tell the agent what you want. It can do anything
              you&apos;d do manually — just describe what you&apos;re going for:
            </p>
            <div className="mt-3 space-y-2">
              <ExamplePrompt>&ldquo;Build a 60-second highlight reel from my footage&rdquo;</ExamplePrompt>
              <ExamplePrompt>&ldquo;Add captions to the whole video&rdquo;</ExamplePrompt>
              <ExamplePrompt>&ldquo;Create a lower third that says &lsquo;John Smith&rsquo;&rdquo;</ExamplePrompt>
              <ExamplePrompt>&ldquo;Make the intro clip slow motion&rdquo;</ExamplePrompt>
              <ExamplePrompt>&ldquo;Color grade this to look more cinematic&rdquo;</ExamplePrompt>
            </div>
            <p className="mt-3">
              You&apos;ll see changes happen in the editor in real time as the agent works.
              You can also edit manually in the UI at any point — use whichever feels faster.
            </p>
          </Step>

          {/* Step 7 */}
          <Step number={7} title="Export your video">
            <p>
              Click the <strong className="text-[var(--foreground)]">Export</strong> button in the
              top-right corner. Choose a preset or configure custom settings:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-6">
              <li><strong className="text-[var(--foreground)]">Resolution</strong> — up to 720p on free, 1440p on Starter, 4K on Pro</li>
              <li><strong className="text-[var(--foreground)]">Format</strong> — MP4 (best compatibility) or WebM</li>
              <li><strong className="text-[var(--foreground)]">Quality</strong> — drag the bitrate slider between smaller file and higher quality</li>
            </ul>
            <p className="mt-3">
              Exports happen entirely in your browser — keep the tab open until it finishes.
              Your video is saved to your downloads and also appears in the Exports section of
              the Assets page.
            </p>
          </Step>

          {/* Step 8 */}
          <Step number={8} title="What's next">
            <p>
              Now that you have a project under your belt:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-6">
              <li>
                Try adding a{" "}
                <strong className="text-[var(--foreground)]">reference video</strong> — the agent
                matches its pacing, style, and visual treatment
              </li>
              <li>
                Explore{" "}
                <strong className="text-[var(--foreground)]">semantic search</strong> — search your
                footage by describing what&apos;s in it, not by filename
                <div className="mt-2 max-w-[200px]">
                  <DocImage src="/docs/semantic-search.png" alt="Semantic search for 'jump' returning ice skating clips" />
                </div>
              </li>
              <li>
                Experiment with{" "}
                <strong className="text-[var(--foreground)]">effects and masks</strong> — the agent
                can apply color grading, smart masks, and background removal
              </li>
              <li>
                Read the{" "}
                <Link href="/docs/guide" className="text-[var(--brand-blue)] underline underline-offset-2">
                  Getting Started guide
                </Link>{" "}
                for tips on communicating with the agent, what it&apos;s best at vs. what&apos;s
                faster to do yourself, and how to use motion graphics and reference videos
              </li>
            </ul>
          </Step>

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

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-[14px] font-bold text-[var(--foreground-muted)]">
          {number}
        </div>
        <h2 className="text-xl font-semibold text-[var(--foreground)]">{title}</h2>
      </div>
      <div className="pl-[52px]">
        {children}
      </div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 rounded-lg border border-emerald-200/60 bg-emerald-50 p-4">
      <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
        <span className="font-semibold text-emerald-700">Tip: </span>
        {children}
      </p>
    </div>
  );
}

function ExamplePrompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[var(--surface-border)] bg-white px-4 py-2.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[var(--foreground-subtle)]">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span className="text-[13px] italic text-[var(--foreground-muted)]">{children}</span>
    </div>
  );
}

function DocImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-[var(--surface-border)] shadow-sm">
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}

function AreaCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-[var(--surface-border)] bg-white p-4">
      <h4 className="mb-1 text-[14px] font-semibold text-[var(--foreground)]">{title}</h4>
      <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">{description}</p>
    </div>
  );
}
