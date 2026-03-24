import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Search, Smartphone, ShieldCheck, Headphones } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Delivery", description: "Projects delivered on time, every time" },
  { icon: Search, title: "SEO Optimized", description: "Built to rank on search engines" },
  { icon: Smartphone, title: "Mobile-First", description: "Perfect on every screen size" },
  { icon: ShieldCheck, title: "Secure & Scalable", description: "Enterprise-grade security" },
  { icon: Headphones, title: "Ongoing Support", description: "Continuous maintenance & updates" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">Why Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We combine technical expertise with a deep understanding of what makes businesses succeed online.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <r.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-sm mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-xs">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;