import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programmes", label: "Programmes" },
  { to: "/classes", label: "Classes" },
  { to: "/training", label: "Training" },
  { to: "/performance", label: "Performance" },
  { to: "/choir", label: "Choir" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_8px_30px_-12px_oklch(0.17_0.09_270_/_0.25)]" : "bg-background/80"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-[12.5px] font-semibold uppercase tracking-[0.14em] text-navy/70 transition-colors hover:text-navy"
              activeProps={{ className: "!text-navy [&_.nav-underline]:!w-6" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="nav-underline absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gold transition-all group-hover:w-4" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-md bg-navy px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5 hover:bg-navy-deep sm:inline-flex"
          >
            Book Consultation
            <ArrowRight className="h-4 w-4 text-gold" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border/70 p-2 text-navy xl:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background xl:hidden">
          <nav className="container-x grid gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-navy/80 hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
