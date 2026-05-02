import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        {/* Page Header */}
        <section className="pt-20 pb-2 px-4 md:px-8">
        <div className="container-narrow text-center">
            {/* <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-start mb-6"
                >
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted border border-border/50 transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </motion.div> */}
            <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-primary font-mono text-5xl font-medium mb-3 tracking-wider uppercase"
            >
            About Us
            </motion.p>   
        </div>
      </section>
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <FAQ />
      <Footer />
    </div>
  );
};

export default AboutPage;