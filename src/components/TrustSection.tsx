import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass-card glow-border p-10 md:p-14 text-center max-w-3xl mx-auto"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="text-primary" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built For <span className="gradient-text">Roofing Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We focus on helping roofing companies stand out online and turn visitors into paying customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;