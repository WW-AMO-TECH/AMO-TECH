import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Tony M.",
    role: "Roofing Company Owner",
    quote: "Within 3 weeks of launching our new site, we went from 4 calls a week to 10. The phone literally won't stop ringing. Best investment we've made.",
    rating: 5,
    initials: "TM",
  },
  {
    name: "David L.",
    role: "Roofing Company Owner",
    quote: "We've had more customers reach out through our website since the redesign. It's been a solid upgrade for our business.",
    rating: 5,
    initials: "DL",
  },
  {
    name: "Tommy W.",
    role: "Roofing Contractor",
    quote: "Quote requests doubled in the first month. The site loads fast, looks clean, and actually turns visitors into real jobs. Couldn't ask for more.",
    rating: 5,
    initials: "TW",
  },
  {
    name: "Mike D.",
    role: "Roofing Company Owner",
    quote: "We finally look as professional as we are. It's been a game-changer for our business.",
    rating: 5,
    initials: "MD",
  },
  {
    name: "Jason M.",
    role: "Roofing Company Owner",
    quote: "Our website has been a good help to my business. It's modern, easy to navigate, and has definitely helped us get more clients..",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Elizabeth U.",
    role: "Roofing Contractor",
    quote: "This is a very good investment. We've booked more jobs in the last 4 months than we did all of last year.",
    rating: 5,
    initials: "EU",
  },
  {
    name: "James C.",
    role: "Roofing Contractor",
    quote: "Booked 5 full re-roofs in the first week alone from website leads. We've never had results like this before.",
    rating: 5,
    initials: "JC",
  },
];

const RoofingTestimonials = () => {
  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="section-padding py-10 bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">Roofers Love Us</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real Results From <span className="gradient-text">Real Roofers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Roofing companies across the country are booking more jobs with sites built by us.
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
                  <div className="glass-card p-7 h-full relative border-2 border-primary/40 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_-10px_hsl(var(--primary)/0.5)]">
                    <Quote className="absolute top-5 right-5 text-primary/30" size={36} />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={15} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/90 text-[15px] leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-muted-foreground text-xs">{t.role}</p>
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