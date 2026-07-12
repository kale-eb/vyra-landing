import type { Metadata } from "next";
import Link from "next/link";
import { PathTabs } from "./PathTabs";

export const metadata: Metadata = {
  title: "Your First Project — Vyra Docs",
  description:
    "A step-by-step walkthrough for creating your first video project in Vyra — with the built-in Vyra AI agent or your own MCP client.",
};

export default function FirstProjectPage() {
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
          Your First Project
        </h1>
        <p className="mb-8 text-[15px] leading-relaxed text-[var(--foreground-muted)]">
          A step-by-step walkthrough from signing up to your first export. Vyra&apos;s AI
          comes two ways — pick the path that matches your plan:
        </p>

        <PathTabs ai={<AiSteps />} mcp={<McpSteps />} />

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

/* ── Path: Vyra AI (in-app agent) ────────────────────────────── */

function AiSteps() {
  return (
    <div className="space-y-12 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
      <Step number={1} title="Create an account">
        <p>
          Head to{" "}
          <a href="https://app.usevyra.com/signup" className="text-[var(--brand-blue)] underline underline-offset-2">
            app.usevyra.com
          </a>{" "}
          and sign up with an <strong className="text-[var(--foreground)]">AI Starter</strong> or{" "}
          <strong className="text-[var(--foreground)]">AI Pro</strong> plan. Both include Vyra AI —
          the editing agent built directly into the editor. There&apos;s nothing to install or
          configure.
        </p>
      </Step>

      <Step number={2} title="Create a new project">
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

      <Step number={3} title="Wait for processing">
        <p>While your footage processes, Vyra:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-6">
          <li>Transcribes all speech (so the agent knows what was said)</li>
          <li>Analyzes every scene visually (so the agent knows what it&apos;s looking at)</li>
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

      <Step number={4} title="Meet Vyra AI">
        <p>
          The editor opens with the <strong className="text-[var(--foreground)]">Vyra AI</strong> tab
          on the left — that&apos;s your agent, and it can already see every clip you uploaded,
          what&apos;s in them, and what was said. Just tell it what you&apos;re making:
        </p>
        <div className="mt-3 space-y-2">
          <ExamplePrompt>&ldquo;Cut a first draft from my footage — it&apos;s a travel vlog&rdquo;</ExamplePrompt>
          <ExamplePrompt>&ldquo;Build a 60-second highlight reel&rdquo;</ExamplePrompt>
          <ExamplePrompt>&ldquo;Add captions to the whole video&rdquo;</ExamplePrompt>
          <ExamplePrompt>&ldquo;Make the intro clip slow motion&rdquo;</ExamplePrompt>
          <ExamplePrompt>&ldquo;Color grade this to look more cinematic&rdquo;</ExamplePrompt>
        </div>
        <p className="mt-3">
          You&apos;ll see the edit happen on the timeline in real time as the agent works. You
          can edit manually at any point — use whichever feels faster, and switch to the{" "}
          <strong className="text-[var(--foreground)]">Footage</strong> tab any time to browse
          your clips yourself.
        </p>
      </Step>

      <Step number={5} title="Get familiar with the editor">
        <p>The editor has three main areas:</p>
        <div className="mt-4 space-y-3">
          <AreaCard title="Left — Vyra AI & Footage" description="Your agent chat and your footage library, in tabs. Search footage by what's in it, drag clips onto the timeline, or just ask the agent." />
          <AreaCard title="Center — Canvas" description="The video preview. What you see here is what you'll export." />
          <AreaCard title="Right — Tools & Properties" description="Tool panels (text, effects, captions, etc.) when nothing is selected. Properties and effects when an item is selected on the timeline." />
        </div>
        <p className="mt-3">
          The <strong className="text-[var(--foreground)]">timeline</strong> runs along the bottom —
          everything the agent builds lands there, and you can rearrange it by hand any time.
        </p>
      </Step>

      <Step number={6} title="Export your video">
        <p>
          Click the <strong className="text-[var(--foreground)]">Export</strong> button in the
          top-right corner. Choose a preset or configure custom settings:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-6">
          <li><strong className="text-[var(--foreground)]">Resolution</strong> — up to 1440p on AI Starter, 4K on AI Pro</li>
          <li><strong className="text-[var(--foreground)]">Format</strong> — MP4 (best compatibility) or WebM</li>
          <li><strong className="text-[var(--foreground)]">Quality</strong> — drag the bitrate slider between smaller file and higher quality</li>
        </ul>
        <p className="mt-3">
          Exports happen entirely in your browser — keep the tab open until it finishes.
          Your video is saved to your downloads and also appears in the Exports section of
          the Assets page.
        </p>
      </Step>

      <Step number={7} title="What's next">
        <p>Now that you have a project under your belt:</p>
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
            <strong className="text-[var(--foreground)]">effects and masks</strong> — ask the agent
            for color grading, smart masks, and background removal
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
  );
}

/* ── Path: MCP (bring your own agent) ────────────────────────── */

function McpSteps() {
  return (
    <div className="space-y-12 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
      <Step number={1} title="Create an account">
        <p>
          Head to{" "}
          <a href="https://app.usevyra.com/signup" className="text-[var(--brand-blue)] underline underline-offset-2">
            app.usevyra.com
          </a>{" "}
          and sign up with an <strong className="text-[var(--foreground)]">MCP</strong> plan —
          made for driving Vyra from an agent you already use, like Claude Code, Claude
          Desktop, claude.ai, or Cursor.
        </p>
      </Step>

      <Step number={2} title="Connect your AI agent">
        <p>
          MCP plans work through MCP (Model Context Protocol). Follow the{" "}
          <Link href="/docs/mcp" className="text-[var(--brand-blue)] underline underline-offset-2">
            MCP setup guide
          </Link>{" "}
          to connect your preferred client — Claude Code, Claude Desktop, claude.ai, Cursor,
          and more are all supported.
        </p>
      </Step>

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

      <Step number={4} title="Wait for processing">
        <p>While your footage processes, Vyra:</p>
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

      <Step number={5} title="Get familiar with the editor">
        <p>The editor has three main areas:</p>
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

      <Step number={6} title="Connect this tab to the agent">
        <p>
          The editor and the agent live in different places — the editor is this browser tab,
          the agent runs wherever you set up MCP (Claude Code in your terminal, claude.ai,
          etc.). To let the agent drive THIS tab, click the{" "}
          <strong className="text-[var(--foreground)]">Connect MCP</strong> button in the top
          bar.
        </p>
        <div className="mt-3 max-w-[400px]">
          <DocImage src="/docs/connect-mcp.png" alt="Connect MCP button in the editor's top bar, showing the connection popover with a Connect this tab button" />
        </div>
        <p className="mt-3">
          A green dot means you&apos;re bound. If you open a second tab and connect it, the
          agent shifts to driving that one (it offers a &quot;Take over&quot; option). Only
          one tab is bound at a time.
        </p>
      </Step>

      <Step number={7} title="Start editing with the agent">
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

      <Step number={8} title="Export your video">
        <p>
          Click the <strong className="text-[var(--foreground)]">Export</strong> button in the
          top-right corner. Choose a preset or configure custom settings:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-6">
          <li><strong className="text-[var(--foreground)]">Resolution</strong> — up to 1440p on Starter, 4K on Pro</li>
          <li><strong className="text-[var(--foreground)]">Format</strong> — MP4 (best compatibility) or WebM</li>
          <li><strong className="text-[var(--foreground)]">Quality</strong> — drag the bitrate slider between smaller file and higher quality</li>
        </ul>
        <p className="mt-3">
          Exports happen entirely in your browser — keep the tab open until it finishes.
          Your video is saved to your downloads and also appears in the Exports section of
          the Assets page.
        </p>
      </Step>

      <Step number={9} title="What's next">
        <p>Now that you have a project under your belt:</p>
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
