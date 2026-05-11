import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const bullets = [
  "Turn your website visitors into real calls.",
  "Get more quote requests.",
  "Stand out from other roofing companies.",
  "Increase your online visibility.",
  "Boost your local search rankings.",
  "Manage bookings and appointments easily from your phone or any device.",
];

const SolutionSection = () => {
  return (
    <section className="section-padding py-10 bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">The Solution</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            We <span className="gradient-text">Fix That</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-3">
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.25, ease: "easeOut" }}
              className="glass-card px-6 py-3 flex items-center gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Check className="text-primary-foreground" size={16} strokeWidth={3} />
              </div>
              <p className="text-base md:text-lg font-medium">{b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;