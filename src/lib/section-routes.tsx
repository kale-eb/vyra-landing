import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DirectoryPage from "@/components/directory/DirectoryPage";
import DirectoryHub from "@/components/directory/DirectoryHub";
import { SECTIONS, SITE_URL, getEntries, getEntry, type SectionKey } from "@/lib/content";

type SlugParams = { params: Promise<{ slug: string }> };

export function createSlugPage(section: SectionKey) {
  async function generateStaticParams() {
    return getEntries(section).map((e) => ({ slug: e.slug }));
  }
  async function generateMetadata({ params }: SlugParams): Promise<Metadata> {
    const { slug } = await params;
    const e = getEntry(section, slug);
    if (!e) return {};
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
  async function Page({ params }: SlugParams) {
    const { slug } = await params;
    const e = getEntry(section, slug);
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
    return <DirectoryHub section={section} entries={getEntries(section)} />;
  }
  return { metadata, Page };
}
