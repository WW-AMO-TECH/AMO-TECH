import { motion } from "framer-motion";
import { Search, Rocket, PhoneCall } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Free Audit",
    desc: "We analyze your current site, find what's losing you jobs, and show you exactly how to fix it.",
    day: "Day 0",
  },
  {
    icon: Rocket,
    title: "Custom Site Live in 7 Days",
    desc: "We build a roofing site engineered to convert. Mobile-first, fast and ready in one week.",
    day: "Day 7",
  },
  {
    icon: PhoneCall,
    title: "Get More Calls and Jobs",
    desc: "Your phone rings. Get more job requests.",
    day: "Day 10+",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">The Process</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Your Roofing Lead Machine <span className="gradient-text">in 3 Steps</span></h2>
          <p className="text-muted-foreground text-lg">Simple. Fast. Risk-free.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 text-center relative border-2 border-transparent hover:border-primary hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)] transition-all duration-300 cursor-pointer group"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                {i + 1}
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-3 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="text-primary" size={26} />
              </div>
              <p className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">{s.day}</p>
              <h3 className="font-semibold text-lg mb-2 transition-transform duration-300 group-hover:scale-110">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed transition-transform duration-300 group-hover:scale-105">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;