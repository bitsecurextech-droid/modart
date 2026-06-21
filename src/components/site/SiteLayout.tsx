import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppButton } from "./WhatsAppButton";
import { ScrollToTop } from "./ScrollToTop";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-20">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  crumb?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-gold/10 blur-3xl" />
      <div className="container-x relative py-24 md:py-32">
        {eyebrow && (
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</div>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {subtitle}
          </p>
        )}
        {crumb && (
          <div className="mt-8 text-xs uppercase tracking-[0.2em] text-white/60">
            <span className="text-gold">Home</span> / {crumb}
          </div>
        )}
      </div>
    </section>
  );
}
