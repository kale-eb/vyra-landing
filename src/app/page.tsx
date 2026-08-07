import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import HowItWorks from "@/components/HowItWorks";
import MadeWithVyra from "@/components/MadeWithVyra";
import Alternatives from "@/components/Alternatives";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// Pricing section removed 2026-07-31: in-app pricing is per-user (price-book
// experiment), so the landing page no longer advertises canonical prices —
// users see their prices at the in-app paywall.

async function fetchUserCount(): Promise<number | null> {
  try {
    const res = await fetch(
      "https://uskviqibopshckqsmyvk.supabase.co/rest/v1/rpc/public_user_count",
      {
        method: "POST",
        headers: {
          apikey: "sb_publishable_aAeaDWrJlNNTiJbdh6nGKA_yUVUT_6P",
          "Content-Type": "application/json",
        },
        body: "{}",
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const count = await res.json();
    return typeof count === "number" ? count : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const userCount = await fetchUserCount();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <Features />
        <HowItWorks />
        <MadeWithVyra userCount={userCount} />
        <Alternatives />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
