import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative p-4 md:p-8 overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[hsl(217_100%_58%)] px-6 py-14 md:px-16 md:py-20 shadow-2xl"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent" />
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <ShieldCheck size={16} />
              Trusted by Roofing Contractors
            </div>

            {/* Heading */}
            <h2 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Turn Your Website Into a{" "}
              <span className="text-blue-100">
                Lead-Generating Machine
              </span>
            </h2>

            {/* Subtext */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
              Get a modern roofing website designed to attract more local
              customers, showcase your work professionally, and turn visitors
              into booked jobs.
            </p>

            {/* Stats */}
            <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white">47+</h3>
                <p className="mt-1 text-sm text-blue-100">
                  Jobs booked in 30 days
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white">4.9★</h3>
                <p className="mt-1 text-sm text-blue-100">
                  Trusted customer experience
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white">24/7</h3>
                <p className="mt-1 text-sm text-blue-100">
                  Lead notifications & inquiries
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="/contact-us"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-[hsl(217,93%,68%)] hover:text-white transition-all text-base shadow-[0_8px_30px_-8px_hsl(0_84%_60%/0.6)] group"
              >
                Get Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;