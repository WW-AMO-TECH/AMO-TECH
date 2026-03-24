import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    description: "A comprehensive analytics dashboard for a fintech startup with real-time data visualization and reporting.",
    tech: ["React", "TypeScript", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    category: "Business Website",
    description: "Full-stack e-commerce solution with inventory management, payment processing, and automated order fulfillment.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Healthcare Booking App",
    category: "Automation System",
    description: "Patient scheduling platform with automated reminders, telehealth integration, and insurance verification.",
    tech: ["React", "Node.js", "Twilio"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    title: "Real Estate Portal",
    category: "Website Redesign",
    description: "Complete redesign of a property listing platform with advanced search, virtual tours, and lead generation.",
    tech: ["React", "Mapbox", "Firebase"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Restaurant Chain Website",
    category: "Business Website",
    description: "Multi-location restaurant website with online ordering, reservation system, and loyalty program integration.",
    tech: ["WordPress", "WooCommerce", "APIs"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
  {
    title: "EdTech Learning Platform",
    category: "Web Application",
    description: "Interactive learning management system with video streaming, progress tracking, and certification.",
    tech: ["React", "AWS", "WebRTC"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase our expertise in building modern web solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors">
                    <ExternalLink size={14} /> View Live
                  </button>
                  <button className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg flex items-center gap-2 border border-border/50 hover:bg-secondary/80 transition-colors">
                    <FileText size={14} /> Case Study
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-primary text-xs font-mono font-medium mb-2">{project.category}</p>
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;