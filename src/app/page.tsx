import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import HowItWorks from "@/components/HowItWorks";
import MadeWithVyra from "@/components/MadeWithVyra";
import CreatorCaseStudy from "@/components/CreatorCaseStudy";
import Alternatives from "@/components/Alternatives";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import { HOME_FAQS } from "@/components/faq-data";
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

export default async function Home() {
  const userCount = await fetchUserCount();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <Features />
        <HowItWorks />
        <MadeWithVyra userCount={userCount} />
        <CreatorCaseStudy />
        <Alternatives />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
