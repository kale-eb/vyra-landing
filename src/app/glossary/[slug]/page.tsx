import { notFound, permanentRedirect } from "next/navigation";
import { getEntries, getEntry } from "@/lib/content";

// Individual glossary URLs moved to anchors on /glossary.
export const dynamicParams = false;

export async function generateStaticParams() {
  return getEntries("glossary").map((e) => ({ slug: e.slug }));
}

export default async function GlossaryTermRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getEntry("glossary", slug)) notFound();
  permanentRedirect(`/glossary#${slug}`);
}
