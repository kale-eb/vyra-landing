import type { Metadata } from "next";
import Link from "next/link";
import DirectoryNav from "@/components/directory/DirectoryNav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/content";

const TITLE = "About Vyra";
const DESCRIPTION =
  "Vyra was started by Sulan and Caleb, two students at Brown who made videos and hated how long editing took. They started building it together in winter 2025 and moved to San Francisco in summer 2026 to work on it full time.";

export const metadata: Metadata = {
  title: `${TITLE} | Vyra`,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: "Vyra",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Vyra" }],
  },
};

const TIMELINE = [
  {
    when: "Winter 2025",
    what: "We start building",
    detail:
      "Sulan was posting painting videos and vlogs. Caleb was making his own videos at Brown too. Filming took an afternoon and editing took the whole night, for both of us. We started building something where you describe the edit and it gets made.",
  },
  {
    when: "Early 2026",
    what: "First edits by chat",
    detail:
      "The first version could take raw footage, transcribe it, look at every scene, and cut a first draft from a plain request. Friends on campus tried it on their own footage and told us what was wrong with it. A lot was. We kept fixing it.",
  },
  {
    when: "May 2026",
    what: "Bring your own AI",
    detail:
      "We shipped the MCP connector. If you already pay for Claude, ChatGPT, or Cursor, you can use that to drive Vyra. Your assistant gets the same editing tools our built-in one has, and it can see your footage.",
  },
  {
    when: "Summer 2026",
    what: "San Francisco, full time",
    detail:
      "We moved out to San Francisco to work on Vyra full time. In July, Buffer tested 11 AI video editors on the same footage and put Vyra first.",
  },
  {
    when: "Fall 2026",
    what: "Y Combinator",
    detail:
      "We joined Y Combinator and Sulan took a leave from Brown. We still edit our own videos in Vyra every week. Most of the guides on this site come out of that.",
  },
];

export default function AboutPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}/about`,
      mainEntity: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Vyra",
      url: SITE_URL,
      foundingDate: "2025",
      foundingLocation: { "@type": "Place", name: "Providence, Rhode Island" },
      location: { "@type": "Place", name: "San Francisco, California" },
      founder: [
        { "@type": "Person", name: "Sulan Zhang", url: `${SITE_URL}/author/sulan`, sameAs: ["https://www.instagram.com/sulansart"] },
        { "@type": "Person", name: "Caleb" },
      ],
      description: DESCRIPTION,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Vyra", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((o, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />
      ))}
      <DirectoryNav crumbs={[{ label: "About", href: "/about" }]} />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <p className="mb-3 text-[13px] font-medium tracking-wide text-[var(--foreground-subtle)] uppercase">About</p>
        <h1
          className="mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          We built Vyra because we were tired of editing at 3 a.m.
        </h1>
        <p className="text-[17px] leading-relaxed text-[var(--foreground-muted)]">{DESCRIPTION}</p>

        <section className="mt-12 space-y-5 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          <p>
            Sulan paints and posts about it at{" "}
            <a href="https://www.instagram.com/sulansart" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-blue)] underline underline-offset-2">
              @sulansart
            </a>
            . She wanted to post her art and her videos and didn&apos;t want to spend much time editing. But she was. It was
            usually 3 or 4 a.m. after a full day of classes, and editing was the part that made her not want to post.
          </p>
          <p>
            Caleb was making his own videos on the same campus and had the same problem. Neither of us is a video editor.
            We just needed videos. So we started building a tool where you upload your clips, say what you want, and get
            the edit back. The first vlog Sulan made with it took three prompts. Something like &ldquo;make a cute vlog out
            of this, add captions and some motion graphics.&rdquo;
          </p>
          <p>
            We started working on it together in winter 2025 and kept going through early 2026, testing each version on
            our own footage and on friends who told us the truth. In summer 2026 we moved to San Francisco to do it full
            time.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--foreground)]">How we got here</h2>
          <ol className="space-y-4">
            {TIMELINE.map((t) => (
              <li key={t.when} className="rounded-xl border border-[var(--surface-border)] bg-white p-5">
                <p className="mb-1 text-[12px] font-semibold tracking-wide text-[var(--brand-blue)] uppercase">{t.when}</p>
                <h3 className="mb-2 text-[16px] font-semibold text-[var(--foreground)]">{t.what}</h3>
                <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)]">{t.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14 space-y-4 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">A few things we hold to</h2>
          <ul className="list-disc space-y-2 pl-6 marker:text-[var(--foreground-subtle)]">
            <li>
              <strong className="text-[var(--foreground)]">We don&apos;t generate video.</strong> Vyra edits the footage
              you shot. Nothing in your video comes from anywhere else.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">You describe the edit.</strong> The agent has the transcript
              and a description of every scene, so you can talk about your footage the way you&apos;d talk to a person.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">The timeline is still there.</strong> Most people never open
              it. If you want to move one cut by a few frames, you can.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Use the AI you already pay for.</strong> Claude, ChatGPT, and
              Cursor can drive Vyra directly. You don&apos;t need a second subscription.
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-8">
          <h2 className="mb-2 text-xl font-semibold tracking-tight text-[var(--foreground)]">Who we are</h2>
          <p className="text-[15px] leading-relaxed text-[var(--foreground-muted)]">
            <Link href="/author/sulan" className="text-[var(--brand-blue)] underline underline-offset-2">
              Sulan Zhang
            </Link>
            , co-founder. Painter. On leave from Brown.
            <br />
            Caleb, co-founder. {/* TODO: Caleb's last name, one line, and a link */}
          </p>
          <p className="mt-4 text-[13px] text-[var(--foreground-subtle)]">
            Questions go to{" "}
            <a href="https://discord.com/invite/mFWxyvg4Nj" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              our Discord
            </a>{" "}
            or sulanzhangart@gmail.com. {/* TODO: confirm public contact email */}
          </p>
        </section>

        <div className="mt-12 text-center">
          <a
            href="https://app.usevyra.com/signup"
            className="inline-block rounded-full bg-[var(--foreground)] px-6 py-3 text-[14px] font-semibold text-white"
          >
            Try it on your footage
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
