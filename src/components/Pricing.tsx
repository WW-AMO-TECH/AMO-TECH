import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";

type Billing = "monthly" | "oneTime";

const plans = [
  {
    name: "Starter",
    monthly: "$50",
    oneTime: "$500",
    description: "Perfect for small businesses getting started online.",
    features: [
      "Single-page website",
      "Mobile responsive",
      "Contact form",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Basic",
    monthly: "$130",
    oneTime: "$1,500",
    description: "For growing businesses that need more functionality.",
    features: [
      "Multi-page website (up to 7)",
      "Custom animations",
      "Mobile responsive",
      "Admin dashboard",
      "Priority support",
      "Booking system",
      "Email support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    monthly: "Custom",
    oneTime: "Custom",
    description: "Full-scale web application with ongoing development.",
    features: [
      "Custom web application",
      "API integrations",
      "User authentication",
      "Database management",
      "Advanced SEO",
      "CMS integration",
      "Analytics dashboard",
      "Performance monitoring",
      "24/7 priority support",
      "Dedicated account manager",
      "Weekly sprints",
    ],
    highlighted: false,
  },
];

const monthlyMaintenanceFeature = "Monthly maintenance";

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="section-padding py-16 bg-secondary/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose a plan that fits your needs. All plans include hosting, SSL, and ongoing support.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-full border border-border bg-background p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billing === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("oneTime")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billing === "oneTime"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              One-time
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const price = billing === "monthly" ? plan.monthly : plan.oneTime;
            const isCustom = price === "Custom";
            const displayFeatures = billing === "monthly"
              ? [monthlyMaintenanceFeature, ...plan.features]
              : plan.features;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border bg-card p-8 relative ${
                  plan.highlighted
                    ? "border-primary/50 ring-1 ring-primary/20"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Recommended
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{price}</span>
                  {!isCustom && (
                    <span className="text-muted-foreground text-sm font-semibold">
                      {billing === "monthly" ? "/mo" : " one-time"}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {displayFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact-us"
                  className={`block text-center py-3 rounded-xl font-medium text-sm transition-all ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-primary text-primary-foreground border border-border/50 hover:bg-primary/80"
                  }`}
                >
                  {isCustom ? "Contact Us" : "Get Started"}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;