import { motion } from "framer-motion";
import { Monitor, ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroDark from "@/assets/project-hero-dark.jpg";
import servicesLight from "@/assets/project-services-light.jpg";
import gallery from "@/assets/project-gallery-masonry.jpg";
import quote from "@/assets/project-quote-form.jpg";
import contactPage from "@/assets/project-contact-page.jpg";

const slides = [
  { src: heroDark, label: "ApexRoof — Bold Hero" },
  { src: servicesLight, label: "PeakPro — Storm Repair Hero" },
  { src: gallery, label: "Hawthorne — Family Hero" },
  { src: quote, label: "Get a Quote Form" },
  { src: contactPage, label: "Contact Page" },
];

const DemoSection = () => {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnMouseEnter: true, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section id="demo" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Monitor size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Live Example</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See Your Roofing Site <span className="gradient-text">in Motion</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real screens from high-converting roofing sites. Swipe, hover to pause.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-3xl rounded-3xl" />

          <div className="relative glass-card glow-border overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--success))]/70" />
              <div className="flex-1 mx-4 h-6 rounded-md bg-background/60 text-xs text-muted-foreground flex items-center justify-center truncate px-2">
                amo-tech.org / {slides[selected].label}
              </div>
            </div>

            <div className="relative" ref={emblaRef}>
              <div className="flex">
                {slides.map((s, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0">
                    <img src={s.src} alt={s.label} className="w-full h-auto block" loading="lazy" />
                  </div>
                ))}
              </div>

              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ArrowRightIcon size={18} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      selected === i ? "w-8 bg-primary" : "w-1.5 bg-background/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.6)] hover:bg-primary/90 transition-all"
          >
            View More Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;