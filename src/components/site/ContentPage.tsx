import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";

export function ContentPage({
  eyebrow,
  title,
  subtitle,
  crumb,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  crumb: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} crumb={crumb} />
      <section className="container-x py-20">{children}</section>
      <FinalCta />
    </SiteLayout>
  );
}

export function FeatureGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <article
          key={it.title}
          className="group rounded-2xl border border-border/60 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-luxe"
        >
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
            <Check className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display text-xl font-bold text-navy">{it.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
        </article>
      ))}
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="bg-navy-deep text-primary-foreground">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-14 text-center md:flex-row md:text-left">
        <h3 className="font-display text-2xl font-bold md:text-3xl">
          Ready to begin your <span className="text-gold italic">musical journey?</span>
        </h3>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 rounded-md bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-navy-deep transition-transform hover:-translate-y-0.5"
        >
          Book Consultation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
