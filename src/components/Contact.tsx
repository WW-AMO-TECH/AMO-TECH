import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MessageCircle, Calendar, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder - would integrate with backend
    alert("Thanks! Your message has been received. I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm font-medium mb-3 tracking-wider uppercase">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Great</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to start your project? Book a free consultation or send me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-8 glow-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Project Type</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              >
                <option value="">Select a project type</option>
                <option value="business-website">Business Website</option>
                <option value="booking-system">Booking & Automation System</option>
                <option value="web-app">Custom Web Application</option>
                <option value="redesign">E-Commerce Website</option>
                <option value="redesign">Website Redesign</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glow-border p-6 flex items-center gap-4 hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--success))]/10 flex items-center justify-center">
                <MessageCircle className="text-[hsl(var(--success))]" size={22} />
              </div>
              <div>
                <p className="font-semibold text-sm">WhatsApp</p>
                <p className="text-muted-foreground text-xs">Chat with me directly</p>
              </div>
            </a> */}

            <a
              href="https://calendly.com/brightrichmond/consultation"
              className="glass-card glow-border p-6 flex items-center gap-4 hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-semibold text-sm">Book a Call</p>
                <p className="text-muted-foreground text-xs">Schedule via Calendly</p>
              </div>
            </a>

            <a
              href="mailto:hello@devstudio.com"
              className="glass-card glow-border p-6 flex items-center gap-4 hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-semibold text-sm">Email Me</p>
                <p className="text-muted-foreground text-xs">info@amo-tech.com</p>
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
