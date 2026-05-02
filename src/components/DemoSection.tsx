import { motion } from "framer-motion";
import { Monitor } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import homeImg from "@/assets/roofing-home.jpg";
import servicesImg from "@/assets/roofing-services.jpg";
import galleryImg from "@/assets/roofing-gallery.jpg";
import contactImg from "@/assets/roofing-contact.jpg";

const slides = [
  { src: homeImg, label: "Home", path: "", alt: "AMO-TECH Roofing homepage with hero call-to-action" },
  { src: servicesImg, label: "Services", path: "services", alt: "AMO-TECH Roofing services overview page" },
  { src: galleryImg, label: "Projects", path: "projects", alt: "AMO-TECH Roofing project gallery with completed jobs" },
  { src: contactImg, label: "Contact", path: "contact", alt: "AMO-TECH Roofing contact page with quote form" },
];

const DemoSection = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="section-padding py-10">
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
            See What Your Website <span className="gradient-text">Could Look Like</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Swipe through a sample roofing site built to capture leads and convert visitors into customers.
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

          <Carousel opts={{ loop: true, align: "start" }} plugins={[autoplay.current]} className="relative">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.label}>
                  <div className="glass-card glow-border overflow-hidden rounded-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                      <div className="w-3 h-3 rounded-full bg-destructive/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-[hsl(var(--success))]/70" />
                      <div className="flex-1 mx-4 h-6 rounded-md bg-background/60 text-xs text-muted-foreground flex items-center justify-center truncate px-2">
                        amo-tech.com{slide.path ? `/${slide.path}` : ""}
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        width={1600}
                        height={1024}
                        className="w-full h-auto block"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-xs font-medium">
                        {slide.label}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-14 bg-background/80 backdrop-blur-md border-border/50" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-14 bg-background/80 backdrop-blur-md border-border/50" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;