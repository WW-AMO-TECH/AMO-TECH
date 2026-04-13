import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Typical timelines range from 1-2 weeks for a standard business website to 4-10 weeks for complex web applications. We'll provide a detailed timeline during our discovery call based on your specific requirements.",
  },
  {
    question: "What is included in the one-time payment?",
    answer: "Each plan includes hosting, SSL certificate, regular security updates, performance monitoring, content updates, and technical support. Higher tiers include additional features like analytics dashboards and priority support.",
  },
  {
    question: "Do you offer custom pricing for larger projects?",
    answer: "Absolutely. For enterprise-level projects or unique requirements, We provide custom quotes based on scope, complexity, and timeline. Book a free consultation to discuss your needs.",
  },
  {
    question: "Do you handle hosting and domain setup?",
    answer: "Yes, we handle the complete setup including domain configuration, hosting, SSL, email setup, and DNS management. Everything is included in the monthly plan so you don't have to worry about technical details.",
  },
  {
    question: "What happens if I want to cancel or make changes?",
    answer: "You can cancel anytime with 30 days notice. You retain ownership of your website code and content. For changes, included maintenance hours cover regular updates, and additional work is billed at a transparent hourly rate.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <div className="container-narrow max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;