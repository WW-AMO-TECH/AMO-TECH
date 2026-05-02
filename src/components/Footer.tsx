import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 pb-4 px-4 md:px-8">
      <div className="container-narrow">
        <div>
          <div>
            <a href="#" className="text-xl font-bold tracking-tight mb-4 block">
              <img src="/amotech.svg" alt="Logo" className="h-8 w-auto" />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building modern, performant websites and web applications for businesses worldwide.
            </p>
          </div>

          <div className="py-6">
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="/about-us" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="/contact-us" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Booking Systems</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Web Applications</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Redesign & Optimization</a></li>
            </ul>
          </div> */}


          {/* SOCIAL MEDIA LINKS */}
          {/* <div>
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
          </div> */}
        </div>

        <div className="border-t border-border/50 pt-4 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Amo-Tech . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;