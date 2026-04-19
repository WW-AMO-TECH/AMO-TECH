OLD CONTACT.TSX 

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Send, Calendar, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [toast, setToast] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false); // ✅ added

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return; // ✅ prevent double submit
    setLoading(true); // ✅ start loading

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
      })
      .finally(() => {
        setLoading(false); // ✅ stop loading
      });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-secondary/30 overflow-hidden" // ✅ prevents layout shift
      ref={sectionRef}
    >
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to start your project? Book a free consultation or send me a message.
          </p>
        </motion.div>

        {/* Toast */}
        <AnimatePresence>
          {toast.message && (
            <motion.div
              key="toast"
              initial={{ opacity: 0, y: -80, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -80, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="fixed z-50 top-4 left-0 w-full px-4 flex justify-center"
            >
              <div
                className={`w-full max-w-md px-4 py-3 rounded-2xl text-white
                ${toast.type === "success"
                    ? "bg-[#297BFF]/20 border-[#297BFF]/40"
                    : "bg-red-500/20 border-red-300/40"
                  }`}
              >
                {toast.message}
              </div>
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
                  className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Project Type</label>
              <select
                name="project_type"
                className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 font-semibold rounded-xl transition flex items-center justify-center gap-2
                ${loading
                  ? "bg-primary/60 cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
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