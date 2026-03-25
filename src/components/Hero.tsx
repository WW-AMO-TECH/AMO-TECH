import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { techIcons } from "./TechIcons";

const stacks = [
  "React", "Node.js", "TypeScript", "Next.js", "WordPress", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS", "Firebase",
  "Python", "Figma", "Supabase", "Prisma", "Redis", "Vercel",
  "Vue.js", "Sass", "Git", "Stripe",
];

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 py-20 sm:py-0">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-[hsl(var(--gradient-end))]/10 rounded-full blur-[80px] sm:blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-primary/5 rounded-full blur-[120px] sm:blur-[200px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-narrow relative z-10 text-center w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-5 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-7xl font-extrabold sm:leading-[1.1] tracking-tight mb-4 sm:mb-6 text-balance"
        >
          We Build Modern Websites
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span className="gradient-text">& Scalable Web Apps</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-10 text-balance"
        >
          Performance-driven, conversion-focused websites and web apps that help businesses
          automate, scale, and stand out. Trusted by clients worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            className="px-5 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 group text-sm sm:text-base"
          >
            Book a Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="px-5 sm:px-8 py-3 sm:py-4 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-secondary/80 transition-all duration-200 flex items-center justify-center gap-2 border border-border/50 text-sm sm:text-base"
          >
            <Play size={16} />
            View Our Work
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-16 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex animate-marquee whitespace-nowrap gap-3 sm:gap-8 text-muted-foreground/70 text-[0.7rem] sm:text-sm">
            {[...stacks, ...stacks].map((stack, i) => (
              <span key={i} className="font-mono flex items-center gap-2 shrink-0">
                {techIcons[stack]}
                {stack}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;