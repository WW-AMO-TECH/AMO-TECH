import { motion } from "framer-motion";
import { Star, Quote, ImageIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MikeD from "@/assets/Mike-Dean.jpeg";
import TonyM from "@/assets/Tony-Miller.jpeg";
import CarlaR from "@/assets/Carla-Reyes.jpeg";

const testimonials = [
  {
    name: "Tony M.",
    company: "Roofing company owner",
    location: "Dallas, TX",
    badge: "GAF Certified",
    badge2: "BBB A+ Rated",
    quote: "In just 30 days, we went from 7 to 15 booked jobs. The increase in demand has been huge, we’re now in a much stronger position as a business.",
    rating: 5,
    initials: "TM",
    screenshot: TonyM,
  },
  {
    name: "Mike D.",
    company: "Roofing contractor",
    location: "Houston, TX",
    badge: "BBB A+ Rated",
    badge2: "HAAG Certified",
    quote: "We finally look as professional as we truly are, and that shift has made a noticeable difference. It’s strengthened our brand, improved client trust, and overall has been a real game-changer for our business.",
    rating: 5,
    initials: "MD",
    screenshot: MikeD,
  },
  {
    name: "Carla R.",
    company: "Roofing company owner",
    location: "Tampa, FL",
    badge: "Owens Corning Preferred",
    quote: "Books jobs while I'm on vacation. I can easily manage bookings from my phone. It's like having a full-time management team without the extra costs.",
    rating: 5,
    initials: "CR",
    screenshot: CarlaR,
  },
];

const RoofingTestimonials = () => {
  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">Roofers We've Helped</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real Results From <span className="gradient-text">Real Roofers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Verified case studies from roofing contractors across the country.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="relative"
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card h-full relative border-1 border-primary/40 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_-10px_hsl(var(--primary)/0.5)] overflow-hidden">
                    {/* Half-circle screenshot frame */}
                    <div className="relative h-80 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent overflow-hidden">
                      <div className="absolute overflow-hidden flex items-center justify-center">
                        {t.screenshot ? (
                          <img
                            src={t.screenshot}
                            alt={`${t.company} website screenshot`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="text-center text-muted-foreground/60 px-4">
                            <ImageIcon size={28} className="mx-auto mb-1" />
                            <p className="text-[10px] font-mono">Screenshot placeholder</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-4 pt-6">
                      <Quote className="absolute top-4 right-4 text-primary/30" size={28} />
                      <div className="flex gap-1 mb-3 justify-center">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} size={15} className="fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground/90 text-[15px] leading-relaxed mb-5 text-center font-medium">
                        "{t.quote}"
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                          {t.initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-sm truncate">{t.name}</p>
                          <p className="text-muted-foreground text-xs truncate">{t.company} · {t.location}</p>
                        </div>
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary uppercase tracking-wider">
                        ✓ {t.badge} . {t.badge2 }
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex -left-3 sm:-left-6 lg:-left-14 bg-background/90 backdrop-blur-md border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary h-10 w-10 sm:h-11 sm:w-11" />
            <CarouselNext className="flex -right-3 sm:-right-6 lg:-right-14 bg-background/90 backdrop-blur-md border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary h-10 w-10 sm:h-11 sm:w-11" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default RoofingTestimonials;