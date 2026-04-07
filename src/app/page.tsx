import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { PainPoints } from "@/components/PainPoints";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudy } from "@/components/CaseStudy";
import { CTABanner } from "@/components/CTABanner";
import { VideoSection } from "@/components/VideoSection";
import { ProductPreview } from "@/components/ProductPreview";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Skip to content (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Nav />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <PainPoints />
        <HowItWorks />
        <CaseStudy />
        <VideoSection />
        <CTABanner />
        <ProductPreview />
        <Features />
        <Testimonials />
        <CTABanner />
        <ComparisonTable />
        <Pricing />
        <About />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
