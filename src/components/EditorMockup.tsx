"use client";

import Image from "next/image";
import LazyVideo from "./LazyVideo";

export type ClientKey = "vyra" | "claude" | "chatgpt" | "mcp";

const CLIENT_META: Record<
  Exclude<ClientKey, "vyra">,
  { name: string; logo: string; window: string; input: string }
> = {
  claude: {
    name: "Claude",
    logo: "/logos/claude.svg",
    window: "#262420",
    input: "Message Claude...",
  },
  chatgpt: {
    name: "ChatGPT",
    logo: "/logos/openai.svg",
    window: "#1a1d21",
    input: "Message ChatGPT...",
  },
  mcp: {
    name: "MCP Client",
    logo: "/logos/mcp.svg",
    window: "#17181c",
    input: "Send a message...",
  },
};

const PREVIEW_VIDEO = "/videos/color-wheel.mp4";

const MSG = "Cut my clips to the beat and make a color wheel edit";

/* Progress messages streamed while Vyra "works", keyed to scroll progress */
const AI_MESSAGES = [
  { at: 0.2, text: "On it. Watching your 9 clips now." },
  { at: 0.28, text: "Scenes detected, speech transcribed." },
  { at: 0.36, text: "Found the best moments in your studio footage." },
  { at: 0.44, text: "Beat map ready. Cutting on the drops." },
  { at: 0.54, text: "12 cuts placed on V1." },
  { at: 0.62, text: "Layering the spinning color wheel graphic." },
  { at: 0.72, text: "Placing captions on two overlay tracks." },
];

/* Story beats, as fractions of scroll progress */
const T_TYPE_START = 0.02;
const T_TYPE_END = 0.14;
const T_SEND = 0.15;
const T_REPLY = 0.84;

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

interface Clip {
  left: number; // percent
  width: number; // percent
  color: string;
  label?: string;
  badge?: boolean;
  thumb?: string;
  appearAt: number;
}

interface Track {
  name: string;
  count: number;
  clips: Clip[];
}

const PURPLE = "#a988f0";
const CYAN = "#5fd4ea";
const LAVENDER = "#b3a5ef";

const TRACKS: Track[] = [
  {
    name: "O3",
    count: 8,
    clips: [
      { left: 33, width: 7, color: PURPLE, label: "text", badge: true, appearAt: 0.7 },
      { left: 49, width: 7, color: PURPLE, label: "text", badge: true, appearAt: 0.74 },
      { left: 65, width: 7, color: PURPLE, label: "text", badge: true, appearAt: 0.78 },
      { left: 81, width: 7, color: PURPLE, label: "text", badge: true, appearAt: 0.82 },
    ],
  },
  {
    name: "O2",
    count: 9,
    clips: [
      { left: 0, width: 31, color: PURPLE, label: "text", appearAt: 0.64 },
      { left: 41, width: 7, color: PURPLE, badge: true, appearAt: 0.68 },
      { left: 57, width: 7, color: PURPLE, badge: true, appearAt: 0.72 },
      { left: 73, width: 7, color: PURPLE, badge: true, appearAt: 0.76 },
      { left: 89, width: 7, color: PURPLE, badge: true, appearAt: 0.8 },
    ],
  },
  {
    name: "O1",
    count: 1,
    clips: [
      { left: 0, width: 100, color: CYAN, label: "motionGraphic", appearAt: 0.6 },
    ],
  },
  {
    name: "V1",
    count: 9,
    clips: [
      { left: 0, width: 31, color: LAVENDER, label: "video", thumb: "/images/colorwheel/cw-1.jpg", appearAt: 0.22 },
      { left: 33, width: 7, color: LAVENDER, thumb: "/images/colorwheel/cw-2.jpg", appearAt: 0.28 },
      { left: 41, width: 7, color: LAVENDER, thumb: "/images/colorwheel/cw-3.jpg", appearAt: 0.33 },
      { left: 49, width: 7, color: LAVENDER, thumb: "/images/colorwheel/cw-4.jpg", appearAt: 0.38 },
      { left: 57, width: 7, color: LAVENDER, thumb: "/images/colorwheel/cw-2.jpg", appearAt: 0.42 },
      { left: 65, width: 7, color: LAVENDER, thumb: "/images/colorwheel/cw-3.jpg", appearAt: 0.46 },
      { left: 73, width: 7, color: LAVENDER, thumb: "/images/colorwheel/cw-4.jpg", appearAt: 0.5 },
      { left: 81, width: 7, color: LAVENDER, thumb: "/images/colorwheel/cw-1.jpg", appearAt: 0.54 },
      { left: 89, width: 7, color: LAVENDER, thumb: "/images/colorwheel/cw-2.jpg", appearAt: 0.58 },
    ],
  },
];

const RULER_LABELS = ["0:00", "0:03", "0:06", "0:09", "0:12", "0:15"];

function EyeIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  );
}

function RevertIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

/* The shared conversation: bubble -> streamed progress -> reply */
function ChatStream({
  sent,
  replied,
  thinking,
  visibleMessages,
}: {
  sent: boolean;
  replied: boolean;
  thinking: boolean;
  visibleMessages: { at: number; text: string }[];
}) {
  return (
    /* justify-end + overflow-hidden makes this a stream: the panel height is
       fixed, so new messages push older ones out the top instead of growing
       the card and reflowing the pinned hero mid-scroll. */
    <div
      className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 overflow-hidden px-2.5 py-2.5 md:gap-2 md:px-3 md:py-3"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0, black 40px)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0, black 40px)",
      }}
    >
      <div
        className="shrink-0 rounded-xl bg-white/[0.07] px-2.5 py-1.5 transition-all duration-300 md:px-3 md:py-2"
        style={{ opacity: sent ? 1 : 0, transform: sent ? "translateY(0)" : "translateY(6px)" }}
      >
        <p className="text-[11px] leading-relaxed text-white/90 md:text-[13px]">{MSG}</p>
      </div>

      {visibleMessages.map((m) => (
        <p
          key={m.at}
          className="shrink-0 text-[10.5px] leading-snug text-white/55 transition-all duration-300 md:text-[12px]"
        >
          {m.text}
        </p>
      ))}

      {thinking && (
        <div className="flex shrink-0 items-center gap-1.5 pl-0.5">
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/50" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/50 [animation-delay:150ms]" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/50 [animation-delay:300ms]" />
        </div>
      )}

      {replied && (
        <>
          <p className="shrink-0 text-[10.5px] leading-snug text-white/75 transition-opacity duration-300 md:text-[12px]">
            Done. 12 cuts synced to the beat, color wheel spinning on top,
            captions placed.
          </p>
          <span className="flex shrink-0 items-center gap-1 text-[10px] text-white/25">
            <RevertIcon />
            Revert
          </span>
        </>
      )}
    </div>
  );
}

function SendButton({ active }: { active: boolean }) {
  return (
    <span
      className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-200 md:h-6 md:w-6"
      style={{ transform: active ? "scale(1.1)" : "scale(1)" }}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    </span>
  );
}

export default function EditorMockup({
  progress: p,
  client,
}: {
  progress: number;
  client: ClientKey;
}) {
  const typedCount = Math.floor(clamp01((p - T_TYPE_START) / (T_TYPE_END - T_TYPE_START)) * MSG.length);
  const typed = MSG.slice(0, typedCount);
  const sent = p >= T_SEND;
  const replied = p >= T_REPLY;
  const thinking = sent && !replied;
  const visibleMessages = sent ? AI_MESSAGES.filter((m) => p >= m.at) : [];

  // Latest video clip that has landed drives the preview while assembling
  const landedThumbs = TRACKS[3].clips.filter((c) => c.thumb && p >= c.appearAt);
  const activeThumb = landedThumbs.length
    ? landedThumbs[landedThumbs.length - 1].thumb
    : null;

  const playheadX = 4 + clamp01((p - 0.22) / 0.68) * 74;
  const external = client !== "vyra" ? CLIENT_META[client] : null;

  const typingRow = (
    <>
      {/* One clipped line: letting the typed prompt wrap would resize the
          input row on every keystroke frame. */}
      {!sent && typed ? (
        <span className="min-w-0 flex-1 truncate whitespace-nowrap text-[11px] text-white/85 md:text-[12px]">
          {typed}
          <span className="ml-px inline-block h-[11px] w-px animate-pulse bg-white/70 align-middle" />
        </span>
      ) : (
        <span className="min-w-0 flex-1 truncate text-[11px] text-white/25 md:text-[12px]">
          {external ? external.input : "Ask anything..."}
        </span>
      )}
      <SendButton active={!sent && typedCount > 0} />
    </>
  );

  const previewCanvas = (
    /* Width-driven on phones (the column is narrow and the body is short),
       height-driven from md up where there's room to spare. */
    <div className="relative flex aspect-[9/16] w-full items-center justify-center overflow-hidden rounded-md bg-black ring-1 ring-white/[0.08] md:h-full md:w-auto">
      {activeThumb && (
        <img
          src={activeThumb}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: replied ? 0 : 1 }}
        />
      )}
      <LazyVideo
        src={PREVIEW_VIDEO}
        poster="/images/posters/color-wheel.jpg"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        style={{ opacity: replied ? 1 : 0 }}
      />
      {!activeThumb && !replied && (
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
          Preview
        </span>
      )}
    </div>
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-black/20 bg-[#0d0d0d] text-left shadow-lg shadow-black/10">
      {/* ---- Top bar ---- */}
      <div className="flex h-9 items-center justify-between gap-2 border-b border-white/[0.06] px-3 md:h-10 md:px-4">
        <div className="flex min-w-0 items-center gap-2 md:gap-3">
          <span className="flex shrink-0 items-center gap-1 text-[11px] text-white/40">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </span>
          <span className="truncate text-[11.5px] font-medium text-white/85 md:text-[12px]">
            color wheel trend
          </span>
          <span className="hidden items-center gap-1.5 text-[10px] text-white/40 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b7bf0]" />
            Vyra Default
          </span>
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="hidden sm:block">
            <path d="M13 4.5L6.5 11L3 7.5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden items-center gap-1.5 text-[10px] text-white/45 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            {external ? `${external.name} connected` : "Connected"}
          </span>
          <span className="rounded-full bg-white px-2.5 py-[3px] text-[10.5px] font-semibold text-black md:px-3 md:py-1 md:text-[11px]">
            Export
          </span>
        </div>
      </div>

      {/* ---- Body ---- */}
      {!external ? (
        /* Vyra AI: built-in chat panel + preview */
        /* Fixed height at every breakpoint. The old mobile layout was
           auto-height, so each streamed message grew the card and made the
           pinned hero jump. */
        <div className="flex h-[244px] min-[360px]:h-[264px] flex-row md:h-[400px]">
          <div className="flex min-w-0 flex-1 flex-col border-r border-white/[0.06] md:w-[290px] md:flex-none md:shrink-0">
            {/* Tabs */}
            <div className="flex gap-1 p-1.5">
              <span className="flex-1 rounded-md py-1 text-center text-[10px] text-white/40 md:py-1.5 md:text-[11px]">
                Footage
              </span>
              <span className="flex-1 rounded-md bg-gradient-to-r from-[#2735b5] to-[#4553ee] py-1 text-center text-[10px] font-semibold text-white md:py-1.5 md:text-[11px]">
                Vyra AI
              </span>
            </div>
            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-2.5 pb-1.5 pt-0.5 md:px-3 md:pb-2 md:pt-1">
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/80 md:text-[12px]">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
                </svg>
                Vyra
              </span>
              <span className="flex items-center gap-2.5 text-white/30">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M8 3v10M3 8h10" />
                </svg>
                <RevertIcon />
              </span>
            </div>
            <ChatStream sent={sent} replied={replied} thinking={thinking} visibleMessages={visibleMessages} />
            {/* Input */}
            <div className="flex shrink-0 flex-col gap-1 px-2.5 pb-2.5 md:gap-1.5 md:px-3 md:pb-3">
              <span className="flex items-center gap-1 text-[9px] text-white/40 md:text-[10px]">
                Fast
                <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 py-1.5 md:gap-2 md:rounded-xl md:px-3 md:py-2">
                <span className="text-[13px] leading-none text-white/30">+</span>
                {typingRow}
              </div>
            </div>
          </div>

          {/* Preview canvas */}
          <div className="relative flex w-[124px] shrink-0 items-center justify-center bg-[#0a0a0a] p-2.5 md:w-auto md:flex-1 md:p-5">
            <span className="absolute right-3 top-3 hidden text-white/25 md:block">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </span>
            {previewCanvas}
          </div>
        </div>
      ) : (
        /* External client: no built-in chat; a separate app window drives Vyra */
        <div className="relative flex h-[244px] min-[360px]:h-[264px] flex-row md:h-[400px] md:flex-col">
          {/* Preview area */}
          <div className="relative order-2 flex w-[124px] shrink-0 items-center justify-center bg-[#0a0a0a] p-2.5 md:order-1 md:w-auto md:flex-1 md:p-5 md:pl-[320px]">
            <span className="absolute right-3 top-3 hidden text-white/25 md:block">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </span>
            {previewCanvas}
          </div>

          {/* Floating client window over the editor */}
          <div
            className="order-1 z-10 flex min-w-0 flex-1 flex-col border-r border-white/[0.06] md:absolute md:bottom-4 md:left-4 md:top-4 md:order-none md:w-[290px] md:flex-none md:rounded-xl md:border md:border-white/[0.12] md:shadow-2xl md:shadow-black/50"
            style={{ backgroundColor: external.window }}
          >
            {/* Window title bar */}
            <div className="flex shrink-0 items-center gap-2 rounded-t-xl px-2.5 py-1.5 md:px-3 md:py-2">
              <div className="flex gap-1 md:gap-1.5">
                <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57] md:h-[9px] md:w-[9px]" />
                <span className="h-[7px] w-[7px] rounded-full bg-[#febc2e] md:h-[9px] md:w-[9px]" />
                <span className="h-[7px] w-[7px] rounded-full bg-[#28c840] md:h-[9px] md:w-[9px]" />
              </div>
              <span className="flex flex-1 items-center justify-center gap-1.5 text-[10px] font-medium text-white/70 md:text-[11px]">
                <Image src={external.logo} alt="" width={12} height={12} />
                {external.name}
              </span>
              <span className="w-6 md:w-10" />
            </div>
            {/* Connected pill */}
            <div className="mx-2.5 mb-1 flex shrink-0 items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.04] px-1.5 py-1 md:mx-3 md:px-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ade80]" />
              <span className="truncate text-[9px] text-white/55 md:text-[10px]">
                Connected to Vyra via MCP
              </span>
            </div>
            <ChatStream sent={sent} replied={replied} thinking={thinking} visibleMessages={visibleMessages} />
            {/* Input */}
            <div className="shrink-0 px-2.5 pb-2.5 md:px-3 md:pb-3">
              <div className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-2 py-1.5 md:gap-2 md:rounded-xl md:px-3 md:py-2">
                {typingRow}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---- Timeline ---- */}
      <div className="border-t border-white/[0.06] bg-[#0f0f0f]">
        {/* Toolbar */}
        {/* Fixed height + clipped: the "is editing" label appears partway
            through the story, and on a 320px screen it used to wrap onto a
            second line and grow the whole pinned card mid-scroll. */}
        <div className="flex h-7 shrink-0 items-center gap-3 overflow-hidden px-3 text-[10px] text-white/35">
          <span className="hidden sm:block">Delete</span>
          <span className="hidden sm:block">Split</span>
          <span className="hidden sm:block">Clone</span>
          <span>Slip</span>
          <span>Ripple</span>
          <span className="mx-1 h-3 w-px bg-white/[0.08]" />
          <svg width="9" height="9" viewBox="0 0 16 16" fill="rgba(255,255,255,0.7)">
            <path d="M4 2.5l9 5.5-9 5.5v-11z" />
          </svg>
          <span className="text-white/70">00:00</span>
          <span>| 00:15</span>
          {thinking && (
            <span className="ml-auto flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[9px] text-[#5fd4ea]">
              <span className="h-1 w-1 shrink-0 animate-pulse rounded-full bg-[#5fd4ea]" />
              {external ? `${external.name} is editing` : "Vyra is editing"}
            </span>
          )}
        </div>
        {/* Ruler */}
        <div className="ml-[88px] flex justify-between border-b border-t border-white/[0.05] px-1 py-0.5 sm:ml-[104px]">
          {RULER_LABELS.map((t) => (
            <span key={t} className="text-[8px] text-white/30">
              {t}
            </span>
          ))}
        </div>
        {/* Tracks */}
        <div className="relative flex flex-col gap-px py-1">
          {TRACKS.map((track) => (
            <div key={track.name} className="flex h-8 items-center">
              {/* Track header */}
              <div className="flex w-[88px] shrink-0 items-center gap-1.5 px-2 sm:w-[104px]">
                <span className="text-[10px] font-medium text-white/75">{track.name}</span>
                <span className="text-[8px] text-white/30">{track.count}</span>
                <span className="ml-auto flex items-center gap-1.5 text-white/30">
                  <EyeIcon />
                  <span className="hidden sm:block">
                    <LockIcon />
                  </span>
                </span>
              </div>
              {/* Clip lane */}
              <div className="relative h-full flex-1 overflow-hidden">
                {track.clips.map((clip, ci) => {
                  const landed = p >= clip.appearAt;
                  return (
                    <div
                      key={ci}
                      style={{
                        left: `${clip.left}%`,
                        width: `${clip.width}%`,
                        backgroundColor: clip.color,
                        opacity: landed ? 1 : 0,
                        transform: landed ? "translateY(0) scaleX(1)" : "translateY(6px) scaleX(0.9)",
                        transformOrigin: "left center",
                      }}
                      className="absolute top-0 flex h-full items-center overflow-hidden rounded-[4px] px-1.5 transition-all duration-500"
                    >
                      {clip.thumb && (
                        <img
                          src={clip.thumb}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-80"
                        />
                      )}
                      {clip.label && (
                        <span className="relative z-10 truncate text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                          {clip.label}
                        </span>
                      )}
                      {clip.badge && (
                        <span className="relative z-10 ml-auto pl-1 text-[7px] text-amber-200">◆4</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          {/* Playhead overlay */}
          <div className="pointer-events-none absolute inset-y-0 left-[88px] right-0 sm:left-[104px]">
            <div
              className="absolute bottom-1 top-0 w-px bg-white/80 transition-opacity duration-300"
              style={{ left: `${playheadX}%`, opacity: p > 0.22 ? 1 : 0 }}
            >
              <span className="absolute -left-[3px] -top-px h-[5px] w-[7px] rounded-b-sm bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
