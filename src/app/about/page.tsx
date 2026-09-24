import type { Metadata } from "next";
import Link from "next/link";
import DirectoryNav from "@/components/directory/DirectoryNav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/content";

const TITLE = "About Vyra: two creators from Brown who got tired of the timeline";
const DESCRIPTION =
  "Vyra was started by Sulan and Caleb, two creators at Brown University who wanted to tell their stories without spending hours in a timeline. They began building together in winter 2025 and moved to San Francisco in summer 2026 to work on it full time.";

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
    what: "Two creators, one problem",
    detail:
      "Sulan and Caleb were both posting from Brown's campus: painting process videos, vlogs, talking heads. They kept running into the same wall. A day of footage turned into a night in the timeline. They started building a way to describe an edit instead of dragging it together.",
  },
  {
    when: "Early 2026",
    what: "The first edits by chat",
    detail:
      "The first version could take raw footage, transcribe every word, look at every scene, and cut a first draft from a plain-language request. Friends on campus tried it on their own footage and told us what was wrong with it. A lot was wrong with it. We kept going.",
  },
  {
    when: "May 2026",
    what: "Bring your own AI",
    detail:
      "We shipped the MCP connector so anyone already paying for Claude, ChatGPT, or Cursor could drive Vyra from the assistant they already use. The agent gets the real editing tools and sees the footage, not a passthrough prompt box.",
  },
  {
    when: "Summer 2026",
    what: "San Francisco, full time",
    detail:
      "We moved out to San Francisco to work on Vyra full time. Buffer's July roundup of AI video editors ranked Vyra first and called it the most consistent performer on the same footage and brief.",
  },
  {
    when: "Fall 2026",
    what: "Y Combinator",
    detail:
      "Vyra joined Y Combinator. Sulan took a leave from Brown to build it. We are still editing our own videos in it every week, which is how most of the guides on this site get written.",
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
          We wanted to tell our stories without losing our nights to a timeline.
        </h1>
        <p className="text-[17px] leading-relaxed text-[var(--foreground-muted)]">{DESCRIPTION}</p>

        <section className="mt-12 space-y-5 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          <p>
            Vyra started as a conversation between two people who made videos and hated editing them. Sulan paints and
            posts her process, vlogs, and the occasional unserious pigeon at{" "}
            <a href="https://www.instagram.com/sulansart" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-blue)] underline underline-offset-2">
              @sulansart
            </a>
            . Caleb was making his own content on the same campus. Both of us had the same experience: the filming was
            the fun part, and the editing was where the story went to die. Not because we lacked ideas, but because a
            two-minute video was costing us a full evening of scrubbing, cutting, captioning, and second-guessing.
          </p>
          <p>
            The idea was simple to say and hard to build. What if you could hand your raw footage to something that had
            watched all of it, listened to every word, and could just do what you asked? Not generate fake clips. Not a
            template with your name on it. Your footage, your voice, cut the way you described it, with a real timeline
            underneath when you wanted to take over.
          </p>
          <p>
            We started collaborating in winter 2025 and kept at it through early 2026, testing every version on our own
            videos and on friends who were kind enough to be honest. In summer 2026 we moved out to San Francisco to work
            on it full time. That is where we are now.
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
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">What we believe</h2>
          <ul className="list-disc space-y-2 pl-6 marker:text-[var(--foreground-subtle)]">
            <li>
              <strong className="text-[var(--foreground)]">Real footage only.</strong> Vyra does not generate video. It
              edits what you shot. Your face, your voice, your story.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Describe it, do not drag it.</strong> The fastest editor is
              the one that already understands your footage and takes instructions in plain language.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Full control when you want it.</strong> The AI does the heavy
              lifting. The timeline is always there for the last five percent.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Use the AI you already pay for.</strong> If you have Claude,
              ChatGPT, or Cursor, they can drive Vyra directly.
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-8">
          <h2 className="mb-2 text-xl font-semibold tracking-tight text-[var(--foreground)]">The team</h2>
          <p className="text-[15px] leading-relaxed text-[var(--foreground-muted)]">
            <Link href="/author/sulan" className="text-[var(--brand-blue)] underline underline-offset-2">
              Sulan Zhang
            </Link>
            , co-founder. Artist and creator, on leave from Brown University.
            <br />
            Caleb, co-founder. {/* TODO: Caleb's last name, one-line bio, and link */}
          </p>
          <p className="mt-4 text-[13px] text-[var(--foreground-subtle)]">
            Say hi on{" "}
            <a href="https://discord.com/invite/mFWxyvg4Nj" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              Discord
            </a>{" "}
            or email sulanzhangart@gmail.com. {/* TODO: confirm public contact email */}
          </p>
        </section>

        <div className="mt-12 text-center">
          <a
            href="https://app.usevyra.com/signup"
            className="inline-block rounded-full bg-[var(--foreground)] px-6 py-3 text-[14px] font-semibold text-white"
          >
            Try Vyra on your footage
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
