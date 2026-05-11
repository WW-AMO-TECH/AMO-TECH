import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroDark from "@/assets/project-hero-dark.jpg";
import servicesLight from "@/assets/project-services-light.jpg";
import galleryMasonry from "@/assets/project-gallery-masonry.jpg";
import quoteForm from "@/assets/project-quote-form.jpg";
import contactPage from "@/assets/project-contact-page.jpg";
import adminPhone from "@/assets/project-admin-phone.png";
import mobileResponsive from "@/assets/project-mobile-responsive.png";
import galleryPage from "@/assets/project-gallery-page.png";
import { useEffect, useState } from "react";

type Item = {
  type: "image" | "video";
  src: string;
  poster?: string;
  title: string;
  tag: string;
};

const items: Item[] = [
  { type: "image", src: heroDark, title: "Bold Dark Hero", tag: "Homepage" },
  { type: "image", src: mobileResponsive, title: "Mobile-First Site", tag: " Mobile Responsive" },
  { type: "image", src: adminPhone, title: "Roofer Admin Panel", tag: "Admin Page" },
  { type: "image", src: servicesLight, title: "Bright Services Grid", tag: "Services" },
  { type: "image", src: galleryMasonry, title: "Before / After Gallery", tag: "Homepage" },
  { type: "image", src: quoteForm, title: "Multi-Step Quote Form", tag: "Lead Capture" },
  { type: "image", src: contactPage, title: "Lead Analytics Dashboard", tag: "Contact Page" },
  { type: "image", src: galleryPage, title: "Gallery Page", tag: "Gallery Page" },
];

const Projects = () => {
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "light";
    return !document.documentElement.classList.contains("light");
  });
  
  // Apply theme + persist + sync across tabs/pages
  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) setIsLight(e.newValue === "light");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);


  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="section-padding pt-6">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-start mb-6"
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted border border-border/50 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">Project Showcase</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Roofing Sites That <span className="gradient-text">Book Jobs</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Real designs, real results. See what your next site could look like.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card aspect-[4/3]"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-[11px] font-medium">
                  {item.type === "video" && <Play size={11} className="text-primary" />}
                  {item.tag}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all w-full"
                  >
                    Get Something Similar
                    <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => window.location.href = "/contact-us"}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.6)] hover:bg-primary/90 transition-all group"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;