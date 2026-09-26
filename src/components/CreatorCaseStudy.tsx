"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { trackLead } from "./MetaPixel";

// Public reel-grid counts observed on @sulansart on September 25, 2026.
// Keep each count paired with its original post, not a different video.
const reels = [
  { id: "DZwM74ytJxF", views: "2.9M", image: "vlog", title: "Hours of footage, one demo", position: "md:mt-14 md:-rotate-3" },
  { id: "Da_tDQwtc-M", views: "8.7M", image: "editors", title: "Editors, are we cooked?", position: "md:-mt-3" },
  { id: "DajEylHSiz8", views: "2.1M", image: "reaction", title: "The edit-while-you-sleep demo", position: "md:mt-14 md:rotate-3" },
];
const prompt = "Vyra, edit 10 different UGC videos using my footage. Mix my reaction clips with the product demos. Give each version a different opening. Keep each under 20 seconds.";

export default function CreatorCaseStudy() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <section id="creator-case-study" aria-labelledby="creator-case-study-title" className="overflow-hidden px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#deded7] bg-[#f0f1eb] px-5 py-12 sm:px-10 md:py-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#626954]">Sulan’s creator case study</p>
          <h2 id="creator-case-study-title" className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            We use Vyra<br /><span className="serif-italic font-normal">to grow Vyra.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[var(--foreground-muted)]">
            Sulan mixed reaction clips with product demos, then used Vyra to edit different versions. These are three of the posts she shared.
          </p>
          <a href="https://www.instagram.com/sulansart/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium underline decoration-black/25 underline-offset-4 hover:decoration-black focus-visible:outline-2 focus-visible:outline-offset-4">
            @sulansart · Vyra co-founder ↗
          </a>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[860px] grid-cols-1 items-start gap-8 sm:grid-cols-3 sm:gap-4 md:mt-16 md:gap-7">
          {reels.map((reel, i) => (
            <Reveal key={reel.id} delay={i * 0.1} y={28} className={reel.position}>
              <a
                href={`https://www.instagram.com/sulansart/reel/${reel.id}/`}
                target="_blank" rel="noopener noreferrer"
                aria-label={`Watch ${reel.title} on Instagram, ${reel.views} views`}
                className="group mx-auto block max-w-[280px] rounded-[1.4rem] bg-white p-2 shadow-[0_12px_35px_rgba(38,43,26,0.10)] transition-transform motion-safe:hover:-translate-y-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-blue)]"
              >
                <div className="relative aspect-[9/14] overflow-hidden rounded-[1rem] bg-[#deded7]">
                  <Image src={`/images/case-study/${reel.image}.jpg`} alt={`Cover of Sulan’s ${reel.title} reel`} fill sizes="(max-width: 639px) 280px, (max-width: 1023px) 30vw, 270px" className="object-cover" />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <span aria-hidden="true" className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/20 text-sm text-white backdrop-blur-sm">▶</span>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <span className="font-display text-5xl font-bold tracking-tight">{reel.views}</span>
                    <span className="mt-1 block text-xs font-medium tracking-wide text-white/90">Instagram views</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 px-2 pb-2 pt-3 text-xs font-medium">
                  <span>{reel.title}</span><span aria-hidden="true">↗</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] leading-relaxed text-[#6b705f] md:mt-10">
          Public Instagram view counts checked September 25, 2026. Rounded by Instagram.
        </p>

        <Reveal y={36} className="relative mx-auto mt-10 max-w-2xl rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_8px_30px_rgba(38,43,26,0.05)] sm:p-7">
          <div className="mb-4 flex items-center justify-between gap-3 text-xs">
            <span className="font-medium text-[var(--foreground-muted)]">Try this prompt</span>
            <button type="button" onClick={copyPrompt} className="rounded-full border border-black/10 px-3 py-1.5 transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2">
              {copied ? "Copied ✓" : "Copy prompt"}
            </button>
          </div>
          <p className="text-xl leading-snug tracking-tight sm:text-2xl">Vyra, edit 10 different UGC videos using my footage.</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)]">Mix my reaction clips with the product demos. Give each version a different opening. Keep each under 20 seconds.</p>
          <p role="status" className="mt-2 text-xs text-[var(--foreground-muted)]">{copyError ? "Select the prompt text to copy it." : copied ? "Prompt copied to your clipboard." : ""}</p>
        </Reveal>

        <div className="mx-auto mt-7 max-w-lg text-center">
          <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">Start with a few reactions and demo clips. Try different pairings, review the edits, and post the ones you like.</p>
          <a href="https://app.usevyra.com/signup" onClick={() => trackLead("Creator Case Study CTA")} className="mt-5 inline-flex rounded-full bg-[#252d21] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3c4835] focus-visible:outline-2 focus-visible:outline-offset-4">
            Try it with your footage ↗
          </a>
        </div>
      </div>
    </section>
  );
}
