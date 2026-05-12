import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import HowItWorks from "@/components/HowItWorks";
import DemoSection from "@/components/DemoSection";
import SolutionSection from "@/components/SolutionSection";
import PainSection from "@/components/PainSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <PainSection />
      <SolutionSection />
      <Testimonials />
      <DemoSection />
      <HowItWorks />
      <CTA />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;