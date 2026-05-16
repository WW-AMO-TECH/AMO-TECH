import { motion } from "framer-motion";
import { Calendar, Flame, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const CALENDLY_URL = "https://calendly.com/brightrichmond/consultation";
const EMAIL = "brightrichmond247@gmail.com";

const CalendlySection = () => {
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
    <section className="section-padding pt-6 bg-gradient-to-b from-background via-primary/5 to-background">
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <motion.div
            animate={{ rotate: [-3, 2, -3], scale: [1, 1.04, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 text-white text-xs sm:text-sm font-black uppercase tracking-widest shadow-[0_0_40px_hsl(0_84%_60%/0.7),0_8px_24px_-4px_hsl(0_84%_60%/0.6)] ring-2 ring-red-400/60"
          >
            <Flame size={14} className="animate-pulse" />
            Only 7 Slots Left Today
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mt-10 mb-4">
            Get Your <span className="gradient-text">Free 5-Minute Audit</span>
          </h2>
          <p className="text-muted-foreground text-lg font-semibold">
            Pick a time below. No website yet? No problem. We’ll walk you through what your business is missing online and show you exactly how a high-performing website would look for your service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card border-2 border-primary/40 overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.5)]">
            <div className="bg-card/40 border-b border-border/50 px-5 py-3 flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <span className="text-sm font-semibold">Book your free audit call</span>
            </div>
            <div className="bg-background">
              <iframe
                src={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=2575ff`}
                title="Book a free roofing website audit"
                className="w-full h-[680px] border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-2 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all text-base shadow-[0_8px_30px_-8px_hsl(0_84%_60%/0.6)] group"
            >
              Get A 5-Min Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck size={16} className="text-[hsl(var(--success))]" />
            <span>100% free · No commitment</span>
            <ShieldCheck size={16} className="text-[hsl(var(--success))]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendlySection;