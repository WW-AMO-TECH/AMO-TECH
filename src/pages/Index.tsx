import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
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
      <DemoSection />
      <HowItWorks />
      <CTA />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;