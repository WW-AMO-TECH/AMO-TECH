import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, Home, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "light";
    return !document.documentElement.classList.contains("light");
  });
  
  // Apply theme + persist + sync across tabs/pages
  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) setIsLight(e.newValue === "light");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/10 px-6 py-16">
      {/* Ambient stars */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-foreground/40"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
            }}
            animate={{ opacity: [0.15, 1, 0.15], scale: [0.6, 1.4, 0.6] }}
            transition={{ duration: 2 + (i % 5) * 0.5, repeat: Infinity, delay: (i % 7) * 0.2 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Telescope scene */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-10 h-48 w-48 sm:h-64 sm:w-64"
        >
          {/* Scanning halo */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border border-primary/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          />

          {/* Telescope body that scans left-right */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: [-25, 25, -25] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "50% 80%" }}
          >
            <div className="relative">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/15 ring-4 ring-primary/30 backdrop-blur-sm">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Compass className="h-14 w-14 text-primary" strokeWidth={1.6} />
                </motion.div>
              </div>
              {/* Lens flare */}
              <motion.div
                className="absolute -right-2 top-2 h-3 w-3 rounded-full bg-primary"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Eyes peeking */}
          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-3">
            {[0, 1].map((i) => (
              <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground">
                <motion.span
                  className="block h-3 w-3 rounded-full bg-background"
                  animate={{ x: [-3, 3, -3], y: [-1, 1, -1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.2 }}
          className="bg-gradient-to-br from-primary via-foreground to-primary bg-clip-text text-7xl font-black tracking-tight text-transparent sm:text-9xl"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-2xl font-bold sm:text-3xl"
        >
          We searched the rooftops... nothing here.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-3 max-w-md text-muted-foreground"
        >
          The page <code className="rounded bg-muted px-1.5 py-0.5 text-xs">{location.pathname}</code> wandered
          off. Let's get you back to booking jobs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-[1.03]"
          >
            Go Back
            <ArrowLeft size={16} className="rotate-180 transition group-hover:translate-x-1" />
          </button>

          <a href="/contact-us"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-semibold transition hover:bg-accent"
          >
            <Mail size={18} />
            Contact us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;