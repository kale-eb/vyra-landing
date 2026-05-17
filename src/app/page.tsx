import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MadeWithVyra from "@/components/MadeWithVyra";
import Alternatives from "@/components/Alternatives";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { FAQS } from "@/lib/faqs";

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

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
  const tiers = await fetchPricingTiers();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <MadeWithVyra />
        <Alternatives />
        <Features />
        <Pricing tiers={tiers} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
