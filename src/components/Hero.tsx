import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Laptop, Smartphone, Code2, Terminal, Braces, GitBranch, Database, Cpu, Cloud, Monitor } from "lucide-react";
import { techIcons } from "./TechIcons";

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

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { Icon: Laptop, x: "8%", y: "18%", size: 36, dur: 9, delay: 0 },
          { Icon: Smartphone, x: "85%", y: "22%", size: 28, dur: 11, delay: 1.2 },
          { Icon: Code2, x: "15%", y: "70%", size: 32, dur: 10, delay: 0.4 },
          { Icon: Terminal, x: "78%", y: "75%", size: 30, dur: 12, delay: 2 },
          { Icon: Braces, x: "92%", y: "55%", size: 26, dur: 8, delay: 0.8 },
          { Icon: GitBranch, x: "5%", y: "45%", size: 28, dur: 13, delay: 1.6 },
          { Icon: Database, x: "50%", y: "8%", size: 26, dur: 10, delay: 2.4 },
          { Icon: Cpu, x: "45%", y: "92%", size: 28, dur: 11, delay: 0.6 },
          { Icon: Cloud, x: "70%", y: "12%", size: 30, dur: 9, delay: 1.8 },
          { Icon: Monitor, x: "25%", y: "30%", size: 32, dur: 12, delay: 1 },
        ].map(({ Icon, x, y, size, dur, delay }, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/50 drop-shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
            style={{ left: x, top: y }}
            animate={{
              y: [0, -25, 0, 15, 0],
              x: [0, 15, 0, -10, 0],
              rotate: [0, 8, -5, 3, 0],
            }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={size} strokeWidth={2.2} />
          </motion.div>
        ))}
      </div>


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

        <div className="flex justify-center gap-10 sm:gap-12 lg:gap-12 items-center">

          {/* Text */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-5 text-balance"
            >
              Roofers,{" "}
              <span className="gradient-text block sm:inline mt-1 sm:mt-0">I will get you 20 Booked Jobs/Month</span>{" "}
              <span className="block sm:inline">on Average.</span>
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
                href="/book"
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