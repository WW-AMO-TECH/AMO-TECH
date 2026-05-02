import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, PhoneOff } from "lucide-react";

const PainSection = () => {
  return (
    <section className="section-padding py-10">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/30 mb-6">
            <AlertTriangle size={14} className="text-destructive" />
            <span className="text-xs font-medium text-destructive uppercase tracking-wider">The Problem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            You're Losing Roofing Jobs <span className="text-destructive">Without Realizing It</span>
          </h2>
          <p className="text-muted-foreground text-lg font-semibold leading-relaxed mb-4">
            If your website isn't built to convert, visitors leave without calling you and go straight to your competitors. Most roofing companies miss out on jobs every week because their website doesn't turn visitors into leads.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: PhoneOff, text: "Visitors leave without calling" },
            { icon: TrendingDown, text: "Jobs go to competitors weekly" },
            { icon: AlertTriangle, text: "Outdated sites lose trust" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-5 text-center border-transparent shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)] transition-all duration-300 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="text-destructive" size={20} />
              </div>
              <p className="text-sm font-semibold text-foreground/90 transition-transform duration-300 group-hover:scale-110">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;