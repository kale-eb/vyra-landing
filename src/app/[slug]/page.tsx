import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DirectoryPage from "@/components/directory/DirectoryPage";
import { SITE_URL, getEntries, getEntry } from "@/lib/content";

// Top-level product pages: /ai-video-editor, /mcp, /claude, /chatgpt, /cursor.
// Only slugs present in src/content/product are served; everything else 404s.
export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getEntries("product").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const e = getEntry("product", slug);
  if (!e) return {};
  const url = `${SITE_URL}${e.url}`;
  return {
    title: `${e.title} | Vyra`,
    description: e.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Vyra",
      title: e.title,
      description: e.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: e.title }],
    },
    twitter: { card: "summary_large_image", title: e.title, description: e.description, images: ["/og-image.png"] },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const e = getEntry("product", slug);
  if (!e) notFound();
  return <DirectoryPage entry={e} />;
}
