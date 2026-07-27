import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import HowItWorks from "@/components/HowItWorks";
import MadeWithVyra from "@/components/MadeWithVyra";
import Alternatives from "@/components/Alternatives";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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

async function fetchPricingTiers() {
  try {
    const res = await fetch(
      (process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://api.usevyra.com") + "/api/billing/pricing-tiers",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.tiers || null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const [tiers, userCount] = await Promise.all([
    fetchPricingTiers(),
    fetchUserCount(),
  ]);

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
        <Pricing tiers={tiers} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
