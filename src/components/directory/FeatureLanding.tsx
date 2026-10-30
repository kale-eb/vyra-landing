import Link from "next/link";
import Markdown from "./Markdown";
import DirectoryNav from "./DirectoryNav";
import PromptBlock from "./PromptBlock";
import ReelStrip from "./ReelStrip";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import IosAppButton from "@/components/IosAppButton";
import WebTrialButton from "@/components/WebTrialButton";
import { CaptionsMedia, MotionGraphicsMedia, MusicSyncMedia } from "@/components/Features";
import { buildJsonLd } from "./DirectoryPage";
import { resolveReels } from "@/lib/reels";
import reviews from "@/content/reviews.json";
import { SECTIONS, extractFaq, extractRelated, resolveUrl, type Entry, type SectionKey } from "@/lib/content";

/* Feature and tool pages as product landing pages: hero with a real demo,
   steps, prompts, proof, pricing, FAQ. Opt in with `layout: landing` in the
   frontmatter. The markdown body still carries the content; sections with a
   known heading get their own block, the rest render as article text. */

const DEMOS = {
  captions: CaptionsMedia,
  "beat-sync": MusicSyncMedia,
  "motion-graphics": MotionGraphicsMedia,
} as const;

type Landing = {
  headline?: string;
  demo?: keyof typeof DEMOS;
  demo_caption?: string;
};

const HANDLED = new Set(["how it works", "prompts to paste", "faq", "related"]);

function splitSections(body: string) {
  const parts = body.split(/^## /m);
  const lead = parts.shift() ?? "";
  const sections = parts.map((p) => {
    const i = p.indexOf("\n");
    return { heading: (i < 0 ? p : p.slice(0, i)).trim(), content: i < 0 ? "" : p.slice(i + 1).trim() };
  });
  return { lead, sections };
}

function listItems(md: string): string[] {
  return [...md.matchAll(/^\s*\d+\.\s+(.+)$/gm)].map((m) => m[1].replace(/\*\*/g, "").trim());
}

function codeBlocks(md: string): string[] {
  return [...md.matchAll(/```[a-z]*\n([\s\S]*?)```/g)].map((m) => m[1].trim());
}

function SectionHeading({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2
        className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
      >
        {children}
      </h2>
      {sub && <p className="mt-3 text-[16px] leading-relaxed text-[var(--foreground-muted)]">{sub}</p>}
    </div>
  );
}

export default function FeatureLanding({ entry }: { entry: Entry }) {
  const landing = (entry.data.landing ?? {}) as Landing;
  const sectionMeta = entry.section === "product" ? null : SECTIONS[entry.section as SectionKey];
  const crumbs = sectionMeta ? [{ label: sectionMeta.label, href: `/${sectionMeta.key}` }] : [];
  const jsonLd = buildJsonLd(entry);

  const { sections } = splitSections(entry.body);
  const find = (h: string) => sections.find((s) => s.heading.toLowerCase() === h);
  const steps = listItems(find("how it works")?.content ?? "");
  const prompts = codeBlocks(find("prompts to paste")?.content ?? "");
  const rest = sections.filter((s) => !HANDLED.has(s.heading.toLowerCase()));
  const faqs = extractFaq(entry.body).map((f) => ({ question: f.q, answer: f.a }));
  const related = extractRelated(entry.body, entry.url)
    .map(resolveUrl)
    .filter((r): r is NonNullable<typeof r> => !!r)
    .slice(0, 4);
  const reels = resolveReels(entry.reels).slice(0, 2);
  const facts = entry.facts.filter((f) => !/^price:/i.test(f));
  const Demo = landing.demo ? DEMOS[landing.demo] : null;
  const proof = reviews[0];

  return (
    <>
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      <DirectoryNav crumbs={crumbs} />
      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-32 pb-16 lg:grid-cols-2 lg:gap-14 lg:pt-36">
          <div className="min-w-0">
            {sectionMeta && (
              <p className="mb-4 text-[13px] font-medium tracking-wide text-[var(--foreground-subtle)] uppercase">
                {sectionMeta.label}
              </p>
            )}
            <h1
              className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              {landing.headline ?? entry.title}
            </h1>
            <p className="mb-8 text-[17px] leading-relaxed text-[var(--foreground-muted)]">{entry.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WebTrialButton />
              <IosAppButton />
            </div>
            <p className="mt-4 text-[13px] text-[var(--foreground-subtle)]">
              3-day free trial on the web. 100 free credits in the iPhone app.
            </p>
          </div>
          {Demo && (
            <figure className="m-0 min-w-0">
              <div className="overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white shadow-sm">
                <Demo />
              </div>
              {landing.demo_caption && (
                <figcaption className="mt-3 text-[13px] leading-snug text-[var(--foreground-subtle)]">
                  {landing.demo_caption}
                </figcaption>
              )}
            </figure>
          )}
        </section>

        {facts.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 pb-8">
            <dl className="grid gap-x-8 gap-y-5 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((f) => {
                const i = f.indexOf(":");
                const label = i > 0 ? f.slice(0, i).trim() : "";
                const value = i > 0 ? f.slice(i + 1).trim() : f;
                return (
                  <div key={f} className="min-w-0">
                    {label && (
                      <dt className="text-[11px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">{label}</dt>
                    )}
                    <dd className="mt-1 text-[14px] leading-relaxed text-[var(--foreground)]">{value}</dd>
                  </div>
                );
              })}
            </dl>
          </section>
        )}

        {steps.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading>How it works</SectionHeading>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((s, i) => (
                <li key={i} className="rounded-2xl border border-[var(--surface-border)] bg-white p-6">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface)] text-[13px] font-semibold text-[var(--foreground)] tabular-nums">
                    {i + 1}
                  </span>
                  <p className="text-[15px] leading-relaxed text-[var(--foreground)]">{s}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {prompts.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeading sub="Paste one into Vyra's chat, or into Claude, ChatGPT, or Cursor over MCP.">
              Prompts to try
            </SectionHeading>
            <div className="grid gap-x-4 lg:grid-cols-2">
              {prompts.map((p) => (
                <PromptBlock key={p} text={p} />
              ))}
            </div>
          </section>
        )}

        {reels.length > 0 && (
          <section className="mx-auto max-w-3xl px-6">
            <ReelStrip reels={reels} />
          </section>
        )}

        {rest.length > 0 && (
          <section className="mx-auto max-w-3xl px-6 py-16">
            <Markdown source={rest.map((s) => `## ${s.heading}\n\n${s.content}`).join("\n\n")} />
          </section>
        )}

        {proof && (
          <section className="mx-auto max-w-3xl px-6 pb-8">
            <figure className="m-0 rounded-2xl border border-[var(--surface-border)] bg-white p-8">
              <blockquote className="text-[19px] leading-relaxed text-[var(--foreground)]">&ldquo;{proof.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-[13px] text-[var(--foreground-muted)]">
                <a href={proof.url} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--foreground)] hover:underline">
                  {proof.name}
                </a>
                {proof.format && <span> · {proof.format}</span>}
              </figcaption>
            </figure>
          </section>
        )}

        <Pricing recruit={false} />

        {faqs.length > 0 && <FAQ items={faqs} />}

        {related.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 pb-8">
            <h2 className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">Related</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.url}
                  href={r.url}
                  className="group block rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
                >
                  <h3 className="mb-1 text-[15px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">{r.title}</h3>
                  {r.description && <p className="line-clamp-3 text-[13px] leading-relaxed text-[var(--foreground-muted)]">{r.description}</p>}
                </Link>
              ))}
            </div>
          </section>
        )}

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
