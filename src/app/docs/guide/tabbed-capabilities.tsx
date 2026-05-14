"use client";

import { useState } from "react";

const TABS = [
  {
    id: "timeline",
    label: "Timeline",
    content: (
      <>
        <p className="mb-3 text-[13px] leading-relaxed text-[var(--foreground-muted)]">
          The agent can manipulate your timeline the same way you would — adding clips,
          rearranging them, trimming, and cleaning up. It understands multi-track layouts
          and can work across many items at once.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[13px] text-[var(--foreground-muted)]">
          <li>
            <strong className="text-[var(--foreground)]">Add, move, trim, split, and delete clips</strong>
            {" "}— place items at specific times, trim to exact frames, split at the playhead
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Arrange tracks and layering</strong>
            {" "}— move items between tracks, reorder layers, consolidate empty tracks
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Batch operations</strong>
            {" "}— move, edit, or delete multiple items at once. Ripple edits push later items when inserting or removing
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Slip editing</strong>
            {" "}— shift which portion of a source clip is visible without changing its position or duration on the timeline
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Markers</strong>
            {" "}— add, rename, and manage timeline markers to flag important moments
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "footage",
    label: "Footage",
    content: (
      <>
        <p className="mb-3 text-[13px] leading-relaxed text-[var(--foreground-muted)]">
          The agent can search through your entire footage library using natural language,
          find the exact moment you need, and place it on the timeline — even across hours
          of raw footage.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[13px] text-[var(--foreground-muted)]">
          <li>
            <strong className="text-[var(--foreground)]">Semantic search</strong>
            {" "}— find clips by describing what&apos;s in them, not by filename. Works across your entire library or within a single project
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Clip-level results</strong>
            {" "}— search returns specific moments and timestamps within videos, not just whole files
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Transcript search</strong>
            {" "}— find footage by what was said. All video audio is automatically transcribed
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Stock media</strong>
            {" "}— search and add videos, photos, and sound effects from Pexels and Freesound
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Asset management</strong>
            {" "}— browse project assets, import from your library, add to timeline with precise placement
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "effects",
    label: "Effects & Color",
    content: (
      <>
        <p className="mb-3 text-[13px] leading-relaxed text-[var(--foreground-muted)]">
          The agent can apply, configure, and animate any of Vyra&apos;s 18 visual effects.
          It also has full access to the Lumetri Color grading suite for professional
          color work.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[13px] text-[var(--foreground-muted)]">
          <li>
            <strong className="text-[var(--foreground)]">Apply and stack effects</strong>
            {" "}— add multiple effects to any item, reorder them, toggle on/off, remove
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Lumetri Color grading</strong>
            {" "}— exposure, contrast, highlights, shadows, temperature, tint, saturation, vibrance, and color wheels (lift/gamma/gain)
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Keyframe animation</strong>
            {" "}— animate any property or effect parameter over time with easing presets (ease in, ease out, bounce, elastic, etc.)
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Property editing</strong>
            {" "}— opacity, scale, rotation, position, border radius, blend modes, playback speed, volume, and more
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Time remapping</strong>
            {" "}— create speed ramps, slow motion, and reverse playback with variable speed curves
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "masks",
    label: "Masks",
    content: (
      <>
        <p className="mb-3 text-[13px] leading-relaxed text-[var(--foreground-muted)]">
          Masks handle all cropping, reframing, and compositing in Vyra. The agent can
          create precise shape masks or use AI-powered object detection to automatically
          track subjects.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[13px] text-[var(--foreground-muted)]">
          <li>
            <strong className="text-[var(--foreground)]">Shape masks</strong>
            {" "}— rectangle, ellipse, triangle, star, or freeform bezier paths drawn with the pen tool
          </li>
          <li>
            <strong className="text-[var(--foreground)]">AI smart masks (SAM2)</strong>
            {" "}— describe what to mask (&ldquo;the person on the left&rdquo;) and Vyra detects and tracks it across up to 30 seconds of video
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Background removal</strong>
            {" "}— AI-powered matting that handles hair, semi-transparent materials, and complex edges
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Mask properties</strong>
            {" "}— feathering, opacity, expansion, inversion, and blend modes (add, subtract, intersect, difference)
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Animated masks</strong>
            {" "}— keyframe mask paths for animated reveals, wipes, and shape morphing
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "motion-graphics",
    label: "Motion Graphics",
    content: (
      <>
        <p className="mb-3 text-[13px] leading-relaxed text-[var(--foreground-muted)]">
          Motion graphics are AI-generated animated overlays — title cards, lower thirds,
          data visualizations, branded intros, and more. The agent generates them as code
          and can include your project assets.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[13px] text-[var(--foreground-muted)]">
          <li>
            <strong className="text-[var(--foreground)]">Generate from a description</strong>
            {" "}— describe what you want and the agent creates a fully animated graphic, placed on your timeline
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Include your assets</strong>
            {" "}— images, logos, and media from your project can be embedded and animated within motion graphics
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Edit through conversation</strong>
            {" "}— change text, colors, animation style, timing, and sizing by asking the agent
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Save and reuse presets</strong>
            {" "}— save motion graphics as presets to apply across projects with customized parameters
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Reference-aware</strong>
            {" "}— the agent can capture frames from your reference video to match visual styles when generating graphics
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "text-captions",
    label: "Text & Captions",
    content: (
      <>
        <p className="mb-3 text-[13px] leading-relaxed text-[var(--foreground-muted)]">
          The agent can add styled text overlays, generate captions from your video&apos;s
          transcript, and apply animated caption templates with emphasis detection.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[13px] text-[var(--foreground-muted)]">
          <li>
            <strong className="text-[var(--foreground)]">Auto-generate captions</strong>
            {" "}— create word-level captions from your video&apos;s transcript with configurable word count, punctuation breaks, and styling
          </li>
          <li>
            <strong className="text-[var(--foreground)]">AI caption templates</strong>
            {" "}— animated caption styles with emphasis detection that highlight key phrases, hooks, and important moments
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Styled text overlays</strong>
            {" "}— full typography control: font family, weight, size, color, background, letter spacing, line height, stroke, and shadow
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Render modes</strong>
            {" "}— highlight (active word colored), word-by-word, slide-up, slide-left, and default
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Batch styling</strong>
            {" "}— apply style changes to all captions on a track at once
          </li>
        </ul>
      </>
    ),
  },
];

export function TabbedCapabilities() {
  const [activeTab, setActiveTab] = useState("timeline");
  const [isOpen, setIsOpen] = useState(true);
  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <div className="mt-5 rounded-xl border border-[var(--surface-border)] bg-white overflow-hidden">
      {/* Header — click to collapse/expand */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-[14px] font-semibold text-[var(--foreground)]">
          Explore capabilities
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-[var(--foreground-subtle)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Tab headers */}
          <div className="flex gap-1 border-t border-[var(--surface-border)] bg-[var(--surface)] px-4 py-2 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 rounded-md px-3 py-1.5 text-[12px] font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-[var(--foreground)] shadow-sm"
                    : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div className="px-5 py-4 border-t border-[var(--surface-border)]/50">
            {active.content}
          </div>
        </>
      )}
    </div>
  );
}
