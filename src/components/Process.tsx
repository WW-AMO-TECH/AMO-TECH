import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Discovery", description: "We discuss your goals, audience, and requirements to create a clear roadmap." },
  { icon: PenTool, title: "Design", description: "Wireframes and prototypes crafted to match your brand and optimize user experience." },
  { icon: Code, title: "Development", description: "Clean, performant code built with modern technologies and best practices." },
  { icon: Rocket, title: "Launch & Support", description: "Deployment, testing, and ongoing maintenance to keep your project running smoothly." },
];

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A streamlined process designed for clarity, efficiency, and outstanding results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                <step.icon className="text-primary" size={22} />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;