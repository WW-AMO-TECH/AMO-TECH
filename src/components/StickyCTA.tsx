import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Phone } from "lucide-react";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on contact page
  if (location.pathname.startsWith("/contact")) return null;

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 240 }}
          className="fixed bottom-4 inset-x-3 md:inset-x-auto md:right-6 md:left-auto z-40"
        >
          <div className="mx-auto max-w-2xl md:max-w-md glass-card border border-primary/40 rounded-2xl shadow-2xl p-3 md:p-4 flex items-center gap-3 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5 shrink-0 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold leading-tight truncate">
                Get more jobs
              </p>
              <p className="text-xs text-muted-foreground leading-tight truncate">
                Free strategy call · No commitment
              </p>
            </div>
            <a
              href="/book"
              className="inline-flex items-center gap-1.5 px-3 md:px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm whitespace-nowrap"
            >
              <Phone size={14} className="hidden sm:inline" />
              Get A Free 5-Min Audit
              <ArrowRight size={14} />
            </a>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;