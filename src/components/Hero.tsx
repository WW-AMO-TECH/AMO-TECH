import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { techIcons } from "./TechIcons";
import portrait from "@/assets/founder-portrait.jpeg";

const stacks = [
  "React", "Node.js", "TypeScript", "Next.js", "WordPress", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS", "Firebase",
  "Python", "Figma", "Supabase", "Prisma", "Redis", "Vercel",
  "Vue.js", "Sass", "Git", "Stripe",
];

const CALENDLY_URL = "https://calendly.com/brightrichmond/consultation";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 py-20 sm:py-0">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-[hsl(var(--gradient-end))]/10 rounded-full blur-[80px] sm:blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-narrow relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top guarantee bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-12 md:mt-16 mb-6"
        >
          <div className="inline-flex items-center gap-2 lg:px-4 px-3 py-2 rounded-full bg-red-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wide shadow-[0_0_24px_hsl(0_84%_60%/0.5)]">
            <ShieldCheck size={16} />
            Roofers: 20+ Booked Jobs/Month Guaranteed
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[280px,1fr] gap-10 sm:gap-12 lg:gap-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--gradient-end)), hsl(var(--primary)))",
                  filter: "blur(14px)",
                  opacity: 0.55,
                }}
              />
              <div className="absolute -inset-1 rounded-full bg-background" />
              <img
                src={portrait}
                alt="Bright Richmond, founder"
                width={250}
                height={250}
                className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[250px] lg:h-[250px] rounded-full object-cover border-4 border-primary/40 shadow-2xl"
              />
              <div className="absolute -bottom-1 -right-1 sm:bottom-2 sm:right-2 px-3 py-1 rounded-full bg-[hsl(var(--success))] text-white text-[10px] sm:text-xs font-bold shadow-lg flex items-center gap-1 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Available
              </div>

              {/* Floating stat badges */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex absolute -left-4 sm:-left-10 lg:-left-16 top-2 sm:top-6 items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-background/90 backdrop-blur-md border border-border shadow-xl"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary font-bold text-xs sm:text-sm">★</div>
                <div className="text-left">
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground leading-none">Avg rating</div>
                  <div className="text-xs sm:text-sm font-bold leading-tight">4.9 / 5.0</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20, x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="flex absolute -right-3 sm:-right-8 lg:-right-14 bottom-4 sm:bottom-10 items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-background/90 backdrop-blur-md border border-border shadow-xl"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[hsl(var(--success))]/15 flex items-center justify-center text-[hsl(var(--success))] font-bold text-xs sm:text-sm">+</div>
                <div className="text-left">
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground leading-none">Booked</div>
                  <div className="text-xs sm:text-sm font-bold leading-tight">20/mo avg</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-muted-foreground mb-3"
            >
              Hi, I'm <span className="font-semibold text-foreground">Richmond</span>,
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-5 text-balance"
            >
              I Get Roofers{" "}
              <span className="gradient-text block sm:inline mt-1 sm:mt-0">20 Booked Jobs/Month</span>{" "}
              <span className="block sm:inline">on Average</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 text-balance"
            >
              A custom-built roofing website live in 7 days. <br /> <span className="font-semibold text-foreground">Not thrilled or no results in 30 days, you get a full refund.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="#book"
                className="px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 group text-sm sm:text-base shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.6)]"
              >
                Get A Free 5-Min Audit. 7 slots left today
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-muted-foreground font-semibold"
            >
              <span className="flex items-center gap-1.5">⚡ Live in 7 days</span>
              <span className="flex items-center font-bold gap-1.5"><ShieldCheck size={14} className="text-[hsl(var(--success))]" /> Full refund in 30 days</span>
              <span className="flex items-center gap-1.5">🛡 50+ roofers helped</span>
            </motion.div>
          </div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 sm:mt-16 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
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