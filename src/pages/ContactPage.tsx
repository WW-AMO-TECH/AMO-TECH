import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/components/ui/use-toast";
import { Clock, Globe, Shield, Zap, Send, MessageCircle, Calendar, Mail, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Clock, title: "24h Response Time", desc: "We reply to every inquiry within one business day." },
  { icon: Globe, title: "Available Worldwide", desc: "Remote-first workflow — no matter your timezone." },
  { icon: Shield, title: "NDA on Request", desc: "Your ideas stay confidential from day one." },
  { icon: Zap, title: "Fast Turnaround", desc: "Most projects kick off within a week of signing." },
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [phone, setPhone] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    projectType: "",
    budget: [1000, 5000] as [number, number],
    message: "",
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (digits.length < 4) return digits;
    if (digits.length < 7) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const templateParams = {
      name: formData.name,
      phone_number: formData.phoneNumber,
      email: formData.email,
      project_type: formData.projectType,
      budget: `$${formData.budget[0]} - $${formData.budget[1]}`,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_6rhh1op",
        "template_4dilu34",
        templateParams,
        "Bng6YmzXphcxlU2fF"
      );

      toast({
        title: "Message sent 🎉",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        projectType: "",
        budget: [1000, 5000] as [number, number],
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast({
        title: "Failed to send",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Header */}
      <section className="pt-20 pb-12 px-4 md:px-8">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-start mb-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted border border-border/50 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-primary font-mono text-2xl font-medium mb-3 tracking-wider uppercase"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Let's Work Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Have a project in mind? Get in touch and let's turn your vision into reality.
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-10 px-4 md:px-8">
        <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.06 }}
              className="glass-card p-5 text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <h.icon className="text-primary" size={20} />
              </div>
              <p className="font-semibold text-sm mb-1">{h.title}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 glass-card p-8 glow-border space-y-5"
            >
              <fieldset disabled={loading} className="space-y-5">

                {/* ALL YOUR ORIGINAL FORM CONTENT BELOW (UNCHANGED) */}

                <div className="grid sm:grid-cols-1 gap-5">
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
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        const formatted = formatPhone(e.target.value);
                        setPhone(formatted);
                        setFormData({ ...formData, phoneNumber: formatted });
                      }}
                      placeholder="(123) 456-7890"
                      className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Type</label>
                    <select
                      name="project_type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a project type</option>
                      <option value="Business-Website">Business Website</option>
                      <option value="Booking-System">Booking System</option>
                      <option value="Web-App">Web App</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Redesign">Redesign</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Budget</label>
                    <select
                      name="budget"
                      value={`${formData.budget[0]}-${formData.budget[1]}`}
                      onChange={(e) => {
                        const val = e.target.value;

                        const map: Record<string, [number, number]> = {
                          "1000-2000": [1000, 2000],
                          "2000-5000": [2000, 5000],
                          "5000-10000": [5000, 10000],
                          "10000-25000": [10000, 25000],
                          "25000-50000": [25000, 50000],
                        };

                        setFormData({
                          ...formData,
                          budget: map[val] || [1000, 5000],
                        });
                      }}
                      className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a budget</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-5000">$2,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-50000">Over $25,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-muted border border-border/50 rounded-lg text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                {/* KEEP EVERYTHING ELSE EXACTLY AS YOU HAD IT */}
                
              </fieldset>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </motion.form>

            {/* Sidebar (UNCHANGED) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

      <Footer />
    </div>
  );
};

export default ContactPage;