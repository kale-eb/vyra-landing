import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DirectoryPage from "@/components/directory/DirectoryPage";
import DirectoryHub from "@/components/directory/DirectoryHub";
import { SECTIONS, SITE_URL, getEntries, getEntry, type Entry, type SectionKey } from "@/lib/content";

type SlugParams = { params: Promise<{ slug: string }> };
type NestedParams = { params: Promise<{ slug: string; task: string }> };

function entryMetadata(e: Entry): Metadata {
  const url = `${SITE_URL}${e.url}`;
  return {
    title: `${e.title} | Vyra`,
    description: e.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Vyra",
      title: e.title,
      description: e.description,
      modifiedTime: e.updated,
      authors: ["Sulan Zhang"],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: e.title }],
    },
    twitter: { card: "summary_large_image", title: e.title, description: e.description, images: ["/og-image.png"] },
  };
}

/** /{section}/{slug}. Nested generated slugs ("vlog/captions") are served by createNestedPage. */
export function createSlugPage(section: SectionKey) {
  async function generateStaticParams() {
    return getEntries(section)
      .filter((e) => !e.slug.includes("/"))
      .map((e) => ({ slug: e.slug }));
  }
  async function generateMetadata({ params }: SlugParams): Promise<Metadata> {
    const { slug } = await params;
    const e = getEntry(section, slug);
    return e ? entryMetadata(e) : {};
  }
  async function Page({ params }: SlugParams) {
    const { slug } = await params;
    const e = getEntry(section, slug);
    if (!e) notFound();
    return <DirectoryPage entry={e} />;
  }
  return { generateStaticParams, generateMetadata, Page };
}

/** /{section}/{slug}/{task}, for programmatic crossings. Only pairs that passed the family's gate exist. */
export function createNestedPage(section: SectionKey) {
  async function generateStaticParams() {
    return getEntries(section)
      .filter((e) => e.slug.split("/").length === 2)
      .map((e) => {
        const [slug, task] = e.slug.split("/");
        return { slug, task };
      });
  }
  async function generateMetadata({ params }: NestedParams): Promise<Metadata> {
    const { slug, task } = await params;
    const e = getEntry(section, `${slug}/${task}`);
    return e ? entryMetadata(e) : {};
  }
  async function Page({ params }: NestedParams) {
    const { slug, task } = await params;
    const e = getEntry(section, `${slug}/${task}`);
    if (!e) notFound();
    return <DirectoryPage entry={e} />;
  }
  return { generateStaticParams, generateMetadata, Page };
}

export function createHubPage(section: SectionKey) {
  const meta = SECTIONS[section];
  const metadata: Metadata = {
    title: `${meta.title} | Vyra`,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}/${section}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${section}`,
      siteName: "Vyra",
      title: meta.title,
      description: meta.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: meta.title }],
    },
  };
  function Page() {
    return <DirectoryHub section={section} entries={getEntries(section).filter((e) => !e.data.hideFromHub)} />;
  }
  return { metadata, Page };
}
