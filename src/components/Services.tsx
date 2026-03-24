import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, CalendarCheck, Code2, RefreshCcw } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Website Development",
    description: "Custom, high-performance websites designed to convert visitors into customers. Built with modern tech for speed and reliability.",
  },
  {
    icon: CalendarCheck,
    title: "Booking & Automation Systems",
    description: "Streamline your operations with automated booking, scheduling, and workflow systems that save time and reduce manual work.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description: "Full-stack web applications tailored to your business needs. From dashboards to SaaS platforms, built to scale.",
  },
  {
    icon: RefreshCcw,
    title: "Website Redesign & Optimization",
    description: "Transform outdated websites into modern, fast, and conversion-optimized experiences that drive real results.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services That Deliver Results</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end web solutions designed to grow your business and automate your workflows.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border p-8 group hover:bg-card/80 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;