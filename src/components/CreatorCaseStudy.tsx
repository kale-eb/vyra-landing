"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { trackLead } from "./MetaPixel";

// Public, rounded reel-grid counts observed on @sulansart, September 25, 2026.
const reels = [
  { id: "DZwM74ytJxF", views: "2.9M", image: "vlog", title: "Editors, are we cooked?" },
  { id: "Da_tDQwtc-M", views: "8.7M", image: "editors", title: "Editors, are we cooked? pt. 2" },
  { id: "DajEylHSiz8", views: "2.1M", image: "reaction", title: "I fell asleep while AI edited" },
];
const prompt = "Vyra, edit 10 different UGC videos using my footage. Mix my reaction clips with the demos and try a different hook for each.";

function ReelCard({ reel }: { reel: typeof reels[number] }) {
  const video = useRef<HTMLVideoElement>(null);
  const manuallyPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    let visible = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (visible && !document.hidden && !manuallyPaused.current && !reducedMotion.matches) {
        el.muted = true;
        void el.play().catch(() => {
          // Autoplay can be blocked by browser settings. Keep manual play available.
        });
      } else {
        el.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
      syncPlayback();
    }, { threshold: [0, 0.35] });
    observer.observe(el);
    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener("change", syncPlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      reducedMotion.removeEventListener("change", syncPlayback);
      el.pause();
    };
  }, []);

  async function togglePlay() {
    const el = video.current;
    if (!el) return;
    if (!el.paused) {
      manuallyPaused.current = true;
      el.pause();
      return;
    }
    manuallyPaused.current = false;
    el.muted = true;
    setError(false);
    try {
      await el.play();
    } catch {
      setError(true);
    }
  }

  return (
    <article className="w-[190px] shrink-0 snap-center rounded-2xl bg-white p-1.5 shadow-[0_6px_20px_rgba(35,65,105,0.07)] sm:w-auto">
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-[#e6e6ea]">
        <video
          ref={video}
          src={`/videos/case-study/${reel.image}.mp4`}
          poster={`/images/case-study/${reel.image}.jpg`}
          preload="none" playsInline muted loop
          aria-label={reel.title}
          className="h-full w-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setError(true)}
        />
        <button type="button" onClick={togglePlay}
          aria-label={`${playing ? "Pause" : "Play"} ${reel.title}`}
          className="absolute inset-0 rounded-xl focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white">
          <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-xs text-white" aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
        </button>
        {error && <p role="status" className="absolute inset-x-2 bottom-2 rounded-lg bg-black/80 p-2 text-xs text-white">Couldn’t play. Open the post below to watch.</p>}
      </div>
      <div className="px-2 pb-2 pt-3">
        <p className="text-xs text-[var(--foreground-muted)]"><span className="font-display mr-1 text-2xl font-bold text-[var(--foreground)]">{reel.views}</span> views</p>
        <a href={`https://www.instagram.com/sulansart/reel/${reel.id}/`} target="_blank" rel="noopener noreferrer"
          className="mt-1 block text-[11px] leading-relaxed underline decoration-black/20 underline-offset-2 hover:decoration-black focus-visible:outline-2 focus-visible:outline-offset-2">
          {reel.title} ↗
        </a>
      </div>
    </article>
  );
}

export default function CreatorCaseStudy() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopyStatus("Copied!");
    } catch {
      setCopyStatus("Select the text to copy.");
    }
  }

  return (
    <section id="creator-case-study" aria-labelledby="creator-case-study-title" className="px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#e2e3e7] bg-[#f4f4f6] px-4 py-8 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 id="creator-case-study-title" className="text-3xl font-bold tracking-tight sm:text-4xl">Growing Vyra with Vyra.</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)]">
            Sulan mixed reaction clips with product demos and used Vyra to try different hooks. Three of those videos reached millions of views.
          </p>
          <a href="https://www.instagram.com/sulansart/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs underline decoration-black/25 underline-offset-4">Sulan · @sulansart ↗</a>
        </Reveal>

        <div className="mx-auto mt-6 flex max-w-[650px] snap-x snap-mandatory gap-3 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:overflow-visible">
          {reels.map((reel) => <ReelCard key={reel.id} reel={reel} />)}
        </div>

        <Reveal y={20} className="mx-auto mt-3 flex max-w-[650px] items-start gap-3 rounded-xl border border-black/[0.08] bg-white px-4 py-3">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-medium text-[var(--foreground-muted)]">Example prompt</p>
            <p className="text-sm leading-relaxed">&ldquo;{prompt}&rdquo;</p>
          </div>
          <button type="button" onClick={copyPrompt} aria-label="Copy example prompt" className="shrink-0 rounded-lg border border-black/10 px-2 py-1 text-xs hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2">Copy</button>
        </Reveal>
        <p role="status" className="text-center text-xs text-[var(--foreground-muted)]">{copyStatus}</p>
        <div className="mt-5 text-center">
          <a href="https://app.usevyra.com/signup" onClick={() => trackLead("Creator Case Study CTA")}
            className="inline-flex rounded-full bg-[#292b31] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#41444d] focus-visible:outline-2 focus-visible:outline-offset-4">
            Try it with your footage ↗
          </a>
        </div>
      </div>
    </section>
  );
}
