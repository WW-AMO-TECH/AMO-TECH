import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$1,000",
    description: "Perfect for small businesses getting started online.",
    features: [
      "Single-page website",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
      "Monthly maintenance",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Basic",
    price: "$2,000",
    description: "For growing businesses that need more functionality.",
    features: [
      "Multi-page website (up to 10)",
      "Custom animations",
      "Advanced SEO",
      "CMS integration",
      "Analytics dashboard",
      "Priority support",
      "Booking system",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$5,000",
    // period: "/mo",
    description: "Full-scale web application with ongoing development.",
    features: [
      "Custom web application",
      "API integrations",
      "User authentication",
      "Database management",
      "Performance monitoring",
      "24/7 priority support",
      "Dedicated account manager",
      "Weekly sprints",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose a plan that fits your needs. All plans include hosting, SSL, and ongoing support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-8 relative ${
                plan.highlighted
                  ? "border-primary/50 ring-1 ring-primary/20"
                  : "glow-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  Recommended
                </div>
              )}
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-5">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`block text-center py-3 rounded-xl font-medium text-sm transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground border border-border/50 hover:bg-secondary/80"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;