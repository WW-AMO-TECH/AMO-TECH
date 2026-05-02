import { motion } from "framer-motion";
import { PhoneCall, Palette, TrendingUp } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Book a free call", desc: "Tell us about your roofing business and goals." },
  { icon: Palette, title: "We design your website", desc: "A high-converting site built specifically for you." },
  { icon: TrendingUp, title: "Get more calls and jobs", desc: "Watch leads, quotes, and bookings roll in." },
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
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">Process</p>
          <h2 className="text-3xl md:text-5xl font-bold">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 text-center relative border-0.1 border-transparent shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)] transition-all duration-300 cursor-pointer group"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="text-primary" size={26} />
              </div>
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