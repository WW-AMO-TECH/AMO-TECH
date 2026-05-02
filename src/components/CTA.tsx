import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="p-2 bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-16 text-center bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to Get More <span className="gradient-text">Roofing Jobs?</span>
            </h2>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors text-base"
            >
              Book Your Free Call Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;