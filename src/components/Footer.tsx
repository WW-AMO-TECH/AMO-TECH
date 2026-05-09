import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4 md:px-8">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <a href="#" className="text-xl font-bold tracking-tight mb-4 block">
              <img src="/amotech.svg" alt="Logo" className="h-8 w-auto" />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building modern, performant websites and web applications for businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="/contact-us" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Business Websites</li>
              <li>Booking Systems</li>
              <li>Web Applications</li>
              <li>Redesign & Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "/contact-us" },
                { icon: Linkedin, href: "/contact-us" },
                { icon: Github, href: "/contact-us" },
                { icon: Instagram, href: "/contact-us" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 space-y-4">
          <div className="text-center">
            <p className="text-sm font-semibold mb-3">Trusted by 50+ Roofing Contractors</p>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              {["GAF Certified", "Owens Corning Preferred", "BBB A+", "CertainTeed", "HAAG Certified"].map((badge) => (
                <span key={badge} className="px-3 py-1 rounded-md bg-muted/50 border border-border/50 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  {badge}
                </span>
              ))}
            </div>
            <div className="text-center text-muted-foreground text-xs space-y-1 pt-6 border-t border-border/30">
              <p>Serving businesses across the world.</p>
              <p>© {new Date().getFullYear()} Amo-Tech . All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;