"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROMPT_TEXT = "Make a 30 second travel montage with upbeat music";

// Cards with varied sizes
const FILE_CARDS = [
  { w: 150, h: 210, color: "#6490D0" }, // tall portrait
  { w: 200, h: 120, color: "#D06464" }, // wide landscape
  { w: 110, h: 155, color: "#64D089" }, // small portrait
  { w: 220, h: 135, color: "#D0A864" }, // wide landscape
  { w: 125, h: 180, color: "#9B64D0" }, // medium portrait
  { w: 170, h: 105, color: "#64C4D0" }, // small landscape
];

// Scattered drop positions
const SCATTERED = [
  { x: -220, y: -70, r: -14 },
  { x: 140, y: -100, r: 9 },
  { x: -70, y: 60, r: -7 },
  { x: 250, y: 30, r: 12 },
  { x: -280, y: -5, r: 11 },
  { x: 50, y: 110, r: -10 },
];

// Timeline clip sizes
const TIMELINE_CLIPS = [
  { w: 100, h: 60 },
  { w: 140, h: 60 },
  { w: 68, h: 60 },
  { w: 160, h: 60 },
  { w: 80, h: 60 },
  { w: 120, h: 60 },
];

// Precomputed waveform bar heights — integers to avoid server/client float mismatch
const WAVEFORM_BARS = [5,6,8,9,10,10,9,8,6,4,3,3,4,5,7,9,10,10,9,7,5,3,2,2,3,5,7,9,10,10,8,6,4,3,2,3,4,6,8,10,10,9,7,5,3,2,2,3,5,7,9,10,10,8,6,4,3,2,3,5,7,9,10,10,9,7,5,3,2,2,3,5,7,9,10,10,9,7,4,3,2,3,4,6,8,10,10,9,7,5,3,2,2,3,5,7,9,10,10,8,6,4,3,2,3,4,6,8,10,10,9,7,5,3,2,2,3,5,7,9,10,10,8,6,4,3,2,3,5,7,9,10,10,9,7,5,3,2,2,3];

const STAGE_LABELS = [
  "Upload your footage",
  "Describe your edit",
  "Ready to export",
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const viewport = viewportRef.current;
    if (!container || !viewport) return;

    // Compute timeline X positions based on trimmed clip widths
    const gap = 4;
    const totalW = TIMELINE_CLIPS.reduce((sum, c) => sum + c.w + gap, -gap);
    let runningX = -totalW / 2;
    const timelinePositions = TIMELINE_CLIPS.map((clip) => {
      const x = runningX + clip.w / 2;
      runningX += clip.w + gap;
      return x;
    });

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".hw-card");
      const labels = gsap.utils.toArray<HTMLElement>(".hw-label");
      const chatBubble = viewport.querySelector(".hw-chat") as HTMLElement;
      const chatText = viewport.querySelector(".hw-chat-text") as HTMLElement;
      const chatCursor = viewport.querySelector(".hw-chat-cursor") as HTMLElement;
      const sendBtn = viewport.querySelector(".hw-send") as HTMLElement;
      const timelineTrack = viewport.querySelector(".hw-timeline-track") as HTMLElement;
      const playhead = viewport.querySelector(".hw-playhead") as HTMLElement;
      const captions = gsap.utils.toArray<HTMLElement>(".hw-caption");
      const waveform = viewport.querySelector(".hw-waveform") as HTMLElement;
      const dots = gsap.utils.toArray<HTMLElement>(".hw-dot");
      const stepNums = gsap.utils.toArray<HTMLElement>(".hw-step-num");
      const trimHandles = gsap.utils.toArray<HTMLElement>(".hw-trim-handle");
      const cardIcons = gsap.utils.toArray<HTMLElement>(".hw-card-icon");
      const audioTrack = viewport.querySelector(".hw-audio-track") as HTMLElement;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          pin: viewport,
          pinSpacing: false,
          snap: {
            snapTo: [0.15, 0.45, 0.92],
            duration: { min: 0.3, max: 0.8 },
            delay: 0.1,
            ease: "power2.inOut",
          },
        },
      });

      // ===== STAGE 1: Cards drop in scattered (0–0.25) =====
      tl.fromTo(labels[0], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.03 }, 0);
      tl.to(dots[0], { backgroundColor: "var(--brand-blue)", scale: 1.3, duration: 0.02 }, 0);
      tl.to(stepNums[0], { color: "var(--brand-blue)", duration: 0.02 }, 0);

      cards.forEach((card, i) => {
        const s = SCATTERED[i];
        tl.fromTo(
          card,
          { y: -600, x: 0, xPercent: -50, yPercent: -50, rotation: s.r * 2, opacity: 0, scale: 0.7 },
          {
            y: s.y,
            x: s.x,
            xPercent: -50,
            yPercent: -50,
            rotation: s.r,
            opacity: 1,
            scale: 1,
            duration: 0.06,
            ease: "back.out(1.4)",
          },
          0.02 + i * 0.025
        );
      });

      // Play icons fade in after cards land
      cardIcons.forEach((icon, i) => {
        tl.to(icon, { opacity: 1, duration: 0.03, ease: "power2.out" }, 0.06 + i * 0.025);
      });

      // ===== TRANSITION 1→2: Cards shrink & drift (0.25–0.35) =====
      tl.to(labels[0], { opacity: 0, y: -20, duration: 0.03 }, 0.25);

      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            x: SCATTERED[i].x * 0.4 - 180,
            y: SCATTERED[i].y * 0.5,
            scale: 0.45,
            opacity: 0.25,
            duration: 0.08,
          },
          0.27
        );
      });

      // ===== STAGE 2: Chat bubble + typing (0.30–0.55) =====
      tl.fromTo(
        chatBubble,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.04 },
        0.30
      );
      tl.to(labels[1], { opacity: 1, y: 0, duration: 0.03 }, 0.30);
      tl.to(dots[1], { backgroundColor: "var(--brand-blue)", scale: 1.3, duration: 0.02 }, 0.30);
      tl.to(stepNums[1], { color: "var(--brand-blue)", duration: 0.02 }, 0.30);

      // Type out text
      const textObj = { chars: 0 };
      tl.to(
        textObj,
        {
          chars: PROMPT_TEXT.length,
          duration: 0.18,
          ease: "none",
          onUpdate: () => {
            const count = Math.round(textObj.chars);
            if (chatText) chatText.textContent = PROMPT_TEXT.slice(0, count);
            if (chatCursor) chatCursor.style.opacity = count < PROMPT_TEXT.length ? "1" : "0";
          },
        },
        0.33
      );

      // Send button
      tl.fromTo(
        sendBtn,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.03, ease: "back.out(2)" },
        0.52
      );

      // ===== TRANSITION 2→3: Chat fades, cards reorganize (0.55–0.70) =====
      tl.to(chatBubble, { opacity: 0, y: -20, scale: 0.9, duration: 0.05 }, 0.57);
      tl.to(labels[1], { opacity: 0, y: -20, duration: 0.03 }, 0.57);

      // Hide play icons before cards become timeline clips
      cardIcons.forEach((icon) => {
        tl.to(icon, { opacity: 0, scale: 0.5, duration: 0.04 }, 0.55);
      });

      // Cards transform: resize to trimmed dimensions + slide into timeline positions
      cards.forEach((card, i) => {
        const clip = TIMELINE_CLIPS[i];
        const pos = timelinePositions[i];
        tl.to(
          card,
          {
            x: pos,
            y: 0,
            xPercent: -50,
            yPercent: -50,
            rotation: 0,
            width: clip.w + "px",
            height: clip.h + "px",
            scale: 1,
            opacity: 1,
            borderRadius: 6,
            duration: 0.12,
            ease: "power3.inOut",
          },
          0.58
        );
      });

      // ===== STAGE 3: Timeline assembly (0.68–1.0) =====
      tl.to(labels[2], { opacity: 1, y: 0, duration: 0.03 }, 0.68);
      tl.to(dots[2], { backgroundColor: "var(--brand-blue)", scale: 1.3, duration: 0.02 }, 0.68);
      tl.to(stepNums[2], { color: "var(--brand-blue)", duration: 0.02 }, 0.68);

      // Timeline track draws in
      tl.fromTo(
        timelineTrack,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.06, ease: "power2.out" },
        0.66
      );

      // Trim handles appear on clips
      trimHandles.forEach((handle, i) => {
        tl.fromTo(
          handle,
          { opacity: 0, scaleY: 0 },
          { opacity: 1, scaleY: 1, duration: 0.03 },
          0.72 + (i % 6) * 0.008
        );
      });

      // Captions pop in below clips
      captions.forEach((cap, i) => {
        tl.fromTo(
          cap,
          { opacity: 0, y: 8, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.03, ease: "back.out(1.5)" },
          0.75 + i * 0.015
        );
      });

      // Audio track slides in below video clips
      tl.fromTo(
        audioTrack,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.06, ease: "power2.out" },
        0.76
      );

      // Waveform appears (inside audio track)
      tl.fromTo(
        waveform,
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, duration: 0.05 },
        0.80
      );

      // Playhead sweeps
      tl.set(playhead, { opacity: 1 }, 0.82);
      tl.fromTo(
        playhead,
        { left: "10%" },
        { left: "90%", duration: 0.16, ease: "none" },
        0.82
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="relative bg-[var(--surface)]"
      style={{ height: "450vh" }}
    >
      <div
        ref={viewportRef}
        className="relative z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[var(--surface)]"
      >
        {/* Stage labels */}
        <div className="relative mb-8 h-14 w-full text-center">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
            How it works
          </p>
          {STAGE_LABELS.map((label) => (
            <h2
              key={label}
              className="hw-label absolute inset-x-0 top-6 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              {label}
            </h2>
          ))}
        </div>

        {/* Animation stage */}
        <div className="relative h-[360px] w-full max-w-4xl">
          {/* File cards — no Tailwind translate, GSAP handles all transforms via xPercent/yPercent */}
          {FILE_CARDS.map((card, i) => (
            <div
              key={i}
              className="hw-card absolute rounded-xl bg-white shadow-md"
              style={{
                left: "50%",
                top: "50%",
                width: card.w,
                height: card.h,
                borderLeft: `3px solid ${card.color}`,
                opacity: 0,
              }}
            >
              {/* Video play icon — visible in upload phase, hidden in timeline */}
              <div className="hw-card-icon absolute inset-0 flex items-center justify-center" style={{ opacity: 0 }}>
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: Math.min(card.w, card.h) * 0.28,
                    height: Math.min(card.w, card.h) * 0.28,
                    backgroundColor: card.color + "18",
                  }}
                >
                  <svg
                    width={Math.min(card.w, card.h) * 0.12}
                    height={Math.min(card.w, card.h) * 0.12}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-[1px]"
                  >
                    <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" fill={card.color} opacity="0.5" />
                  </svg>
                </div>
              </div>
              {/* Trim handles — only visible in stage 3 */}
              <div
                className="hw-trim-handle absolute -left-[3px] top-0 h-full w-[5px] rounded-l-sm"
                style={{ backgroundColor: card.color, opacity: 0, transformOrigin: "center" }}
              />
              <div
                className="hw-trim-handle absolute -right-0 top-0 h-full w-[5px] rounded-r-sm"
                style={{ backgroundColor: card.color, opacity: 0, transformOrigin: "center" }}
              />
            </div>
          ))}

          {/* Chat bubble */}
          <div
            className="hw-chat absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] rounded-2xl border border-[var(--surface-border)] bg-white px-6 py-4 shadow-lg"
            style={{ opacity: 0 }}
          >
            <div className="flex items-start gap-1">
              <span className="hw-chat-text text-[15px] leading-relaxed text-[var(--foreground)]"></span>
              <span
                className="hw-chat-cursor mt-[2px] inline-block h-[18px] w-[2px] shrink-0 bg-[var(--brand-blue)]"
                style={{ animation: "blink 0.8s step-end infinite" }}
              />
            </div>
            <button
              className="hw-send mt-3 flex items-center gap-1.5 rounded-full bg-[var(--brand-blue)] px-4 py-1.5 text-[13px] font-semibold text-white"
              style={{ opacity: 0 }}
            >
              Send
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Timeline track */}
          <div
            className="hw-timeline-track absolute left-[5%] right-[5%] top-[calc(50%+34px)] h-[1px] origin-left bg-black/[0.08]"
            style={{ opacity: 0, transform: "scaleX(0)" }}
          />

          {/* Caption bars — between video clips and audio track */}
          {[0, 2, 4].map((idx) => {
            const tw = TIMELINE_CLIPS.reduce((s, c) => s + c.w + 4, -4);
            let rx = -tw / 2;
            for (let j = 0; j < idx; j++) rx += TIMELINE_CLIPS[j].w + 4;
            const cx = rx + TIMELINE_CLIPS[idx].w / 2;
            return (
              <div
                key={`cap-${idx}`}
                className="hw-caption absolute h-[6px] rounded-full"
                style={{
                  width: TIMELINE_CLIPS[idx].w * 0.75,
                  left: `calc(50% + ${cx - (TIMELINE_CLIPS[idx].w * 0.75) / 2}px)`,
                  top: "calc(50% + 40px)",
                  backgroundColor: FILE_CARDS[idx].color,
                  opacity: 0,
                }}
              />
            );
          })}

          {/* Audio track — sits below video clips */}
          <div
            className="hw-audio-track absolute h-[36px] origin-left rounded-lg border border-[#64D089]/30 bg-[#64D089]/[0.08]"
            style={{
              left: `calc(50% - ${TIMELINE_CLIPS.reduce((s, c) => s + c.w + 4, -4) / 2}px)`,
              width: TIMELINE_CLIPS.reduce((s, c) => s + c.w + 4, -4),
              top: "calc(50% + 50px)",
              opacity: 0,
              transform: "scaleX(0)",
            }}
          >
            {/* Waveform bars inside the audio track */}
            <div
              className="hw-waveform absolute inset-0 overflow-hidden rounded-lg origin-top"
              style={{ opacity: 0 }}
            >
              <svg viewBox="0 0 500 36" className="h-full w-full" preserveAspectRatio="none">
                {WAVEFORM_BARS.map((h, i) => (
                    <rect
                      key={i}
                      x={i * 3.57}
                      y={18 - h / 2}
                      width="2"
                      height={h}
                      rx="1"
                      fill="#64D089"
                      opacity="0.4"
                    />
                ))}
              </svg>
            </div>
          </div>

          {/* Playhead — spans video clips + audio track */}
          <div
            className="hw-playhead absolute h-[130px] w-[2px] bg-[var(--brand-blue)]"
            style={{ top: "calc(50% - 36px)", left: "5%", opacity: 0 }}
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[var(--brand-blue)]" />
          </div>
        </div>

        {/* Step dots + numbers */}
        <div className="mt-8 flex items-center gap-10">
          {["01", "02", "03"].map((num) => (
            <div key={num} className="flex flex-col items-center gap-2">
              <div className="hw-dot h-2.5 w-2.5 rounded-full border border-[var(--surface-border-hover)] bg-transparent" />
              <span className="hw-step-num text-[11px] font-bold uppercase tracking-wider text-[var(--foreground-subtle)]">
                {num}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
