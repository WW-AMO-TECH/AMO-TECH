import { motion } from "framer-motion";
import { AlertTriangle, Smartphone, Search, MousePointerClick, X } from "lucide-react";

const problems = [
  {
    icon: Smartphone,
    title: "No Mobile Optimization",
    desc: "80% of roofing leads come from phones. A blurry, slow mobile site means customers calling your competitor instead.",
    stat: "80%",
    statLabel: "of leads on mobile",
  },
  {
    icon: Search,
    title: "Stuck on Page 2 of Google",
    desc: "Nobody scrolls past page 1. If you're not in the top 3 results, you're invisible and your phone stays silent.",
    stat: "0.78%",
    statLabel: "click rate on page 2",
  },
  {
    icon: MousePointerClick,
    title: "No Clear 'Get Quote' CTA",
    desc: "Confused visitors don't call. Without a bold, obvious quote button, you're losing jobs every single day.",
    stat: "3 sec",
    statLabel: "to lose a visitor",
  },
];

const PainSection = () => {
  return (
    <section className="section-padding pt-10 relative overflow-hidden">
      {/* Distinct background: warning grid + red wash */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--destructive)) 0 1px, transparent 1px 14px)",
          }}
        />
      </div>

      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/30 mb-6">
            <AlertTriangle size={14} className="text-destructive" />
            <span className="text-xs font-medium text-destructive uppercase tracking-wider">The Problem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Why Your Roofing Site <br className="hidden md:block" />
            <span className="text-destructive">Gets 0 Calls</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Most roofers blame the market. The truth? Three silent killers are sending your jobs straight to competitors.
          </p>
        </motion.div>

        {/* Asymmetric horizontal list — distinct from HowItWorks centered grid */}
        <div className="space-y-4 max-w-5xl">
          {problems.map((p, i) => {
            const animations = [
              { initial: { opacity: 0, x: -60, rotate: -180 }, whileInView: { opacity: 1, x: 0, rotate: 0 } },
              { initial: { opacity: 0, scale: 0.5, rotate: 360 }, whileInView: { opacity: 1, scale: 1, rotate: 0 } },
              { initial: { opacity: 0, x: 60, rotate: 180 }, whileInView: { opacity: 1, x: 0, rotate: 0 } },
            ];
            const iconAnim = animations[i % animations.length];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid grid-cols-[auto,1fr] md:grid-cols-[auto,auto,1fr,auto] items-center gap-4 md:gap-8 p-5 md:p-7 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm hover:border-destructive/60 hover:bg-card transition-all duration-300"
              >
                {/* Big number */}
                <div className="text-5xl md:text-7xl font-black text-destructive/30 group-hover:text-destructive/80 transition-colors leading-none font-mono select-none">
                  0{i + 1}
                </div>

                {/* Icon — animates uniquely on scroll */}
                <motion.div
                  initial={iconAnim.initial}
                  whileInView={iconAnim.whileInView}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                  className="hidden md:flex w-14 h-14 rounded-xl bg-destructive/10 items-center justify-center shrink-0"
                >
                  <p.icon className="text-destructive" size={26} />
                </motion.div>

                {/* Content */}
                <div className="col-span-2 md:col-span-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <X size={16} className="text-destructive shrink-0" />
                    <h3 className="font-bold text-lg md:text-xl">{p.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>

                {/* Stat */}
                <div className="hidden md:block text-right border-l border-border/60 pl-6">
                  <div className="text-2xl font-black text-destructive">{p.stat}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">{p.statLabel}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainSection;