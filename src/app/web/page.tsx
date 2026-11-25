import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { SITE_URL } from "@/lib/content";

// Without its own canonical, /web took the root layout's, which names the home page.
export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/web` },
};

export default function WebLandingPage() {
  return <LandingPage showMobileDownload={false} />;
}
