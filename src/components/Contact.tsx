import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Send, Calendar, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [toast, setToast] = useState({ message: "", type: "" }); // type: "success" | "error"

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 5000); // auto-hide
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showToast("✅ Your message has been sent!", "success");
        formRef.current.reset();
      })
      .catch(() => {
        showToast("❌ Failed to send message. Please try again.", "error");
      });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Great</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to start your project? Book a free consultation or send me a message.
          </p>
        </motion.div>

        {/* Branded Toast Notification */}
        <AnimatePresence>
          {toast.message && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-lg text-white font-semibold text-sm ${
                toast.type === "success"
                  ? "bg-[#297BFF]"
                  : "bg-red-500"
              }`}
            >
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* FORM */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 glass-card p-8 glow-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Project Type</label>
              <select
                name="project_type"
                className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select a project type</option>
                <option value="business-website">Business Website</option>
                <option value="booking-system">Booking System</option>
                <option value="web-app">Web App</option>
                <option value="e-commerce">E-Commerce</option>
                <option value="redesign">Redesign</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Budget</label>
              <select
                name="budget"
                className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select a budget</option>
                <option value="$1k-$2k">$1,000 - $2,000</option>
                <option value="$2k-$5k">$2,000 - $5,000</option>
                <option value="$5k-$10k">$5,000 - $10,000</option>
                <option value="$10k-$25k">$10,000 - $25,000</option>
                <option value="over-$25k">Over $25,000</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>

          {/* SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            <a
              href="https://calendly.com/brightrichmond/consultation"
              className="glass-card glow-border p-6 flex items-center gap-4 hover:bg-card/80 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-semibold text-sm">Book a Call</p>
                <p className="text-muted-foreground text-xs">Schedule via Calendly</p>
              </div>
            </a>


            {/*     EMAIL ME     */}
            {/* <a
              href="mailto:info@amo-tech.com"
              className="glass-card glow-border p-6 flex items-center gap-4 hover:bg-card/80 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-semibold text-sm">Email Me</p>
                <p className="text-muted-foreground text-xs">info@amo-tech.com</p>
              </div>
            </a> */}

            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-semibold text-sm">Available Globally</p>
                <p className="text-muted-foreground text-xs">Remote-first, worldwide clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;