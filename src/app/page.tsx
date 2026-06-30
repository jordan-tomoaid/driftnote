import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Features } from "@/components/site/Features";
import { Pricing } from "@/components/site/Pricing";
import { CtaSection } from "@/components/site/CtaSection";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Pricing />
        <CtaSection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
