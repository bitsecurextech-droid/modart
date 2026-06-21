import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = {
  Explore: [
    { to: "/about", label: "About Us" },
    { to: "/programmes", label: "Programmes" },
    { to: "/classes", label: "Classes" },
    { to: "/training", label: "Training" },
    { to: "/performance", label: "Performance" },
  ],
  Services: [
    { to: "/choir", label: "Children's Choir" },
    { to: "/gallery", label: "Gallery" },
    { to: "/events", label: "Events" },
    { to: "/ai-assistant", label: "AI Assistant" },
    { to: "/schools", label: "For Schools" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="rounded-lg bg-white/95 p-3 inline-block">
            <Logo />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Empowering hearts and minds through the transformative power of music. Premier music
            education in Lekki, Lagos.
          </p>
        </div>

        {Object.entries(LINKS).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-display text-base font-semibold text-gold">{title}</h4>
            <ul className="mt-5 space-y-3">
              {items.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/75 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-display text-base font-semibold text-gold">Contact Info</h4>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>71 Prince Kazeem Eletu Way,<br />Osapa London, Lekki, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <a href="tel:+2348078500390" className="hover:text-gold">08078500390</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:info@modartsmusic.com" className="hover:text-gold">info@modartsmusic.com</a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <div>© {new Date().getFullYear()} MOD-Arts School of Music. All Rights Reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
