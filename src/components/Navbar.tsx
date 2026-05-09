import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  // { label: "Projects", href: "/projects" },
  // { label: "Contact", href: "/contact-us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "light";
    return !document.documentElement.classList.contains("light");
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setMobileOpen((open) => (open ? false : open));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Lock body scroll while mobile sidebar is open
  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-14 md:h-20">
        <a href="/" className="text-lg md:text-xl font-bold tracking-tight">
          <img src="/amotech.svg" alt="Logo" className="h-8 px-2 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsLight(!isLight)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle theme"
          >
            {isLight ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="/contact-us"
            className="px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={() => setIsLight(!isLight)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 active:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isLight ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-in sidebar (portaled to body so blur covers entire page) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setMobileOpen(false)}
                  className="md:hidden fixed inset-x-0 bottom-0 top-14 bg-background/50 backdrop-blur-md z-[100]"
                />
                <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.25 }}
                  className="md:hidden fixed top-14 mt-2 right-3 w-56 max-w-[75vw] max-h-[70vh] overflow-y-auto rounded-xl bg-background border border-border/50 shadow-xl z-[110] flex flex-col p-1 gap-1"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted/50 active:bg-muted transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="/contact-us"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg text-center hover:bg-primary/90 active:bg-primary/80 transition-colors"
                  >
                    Contact Us
                  </a>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.nav>
  );
};

export default Navbar;