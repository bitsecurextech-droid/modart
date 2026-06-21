import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MOD-Arts | Book Your Consultation" },
      { name: "description", content: "Get in touch with MOD-Arts School of Music in Lekki, Lagos. Book a free consultation, call us on 08078500390 or chat on WhatsApp." },
      { property: "og:title", content: "Contact MOD-Arts School of Music" },
      { property: "og:description", content: "Book a free consultation today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact Us"
        title={<>Let's Begin Your <span className="italic text-gold">Musical Journey</span></>}
        subtitle="Reach out to start your consultation, enquire about programmes or schedule a visit to our Lekki campus."
        crumb="Contact"
      />

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-muted-foreground">We're here to help you start your musical journey. Reach out for consultations, enquiries and more information.</p>

            <ul className="mt-8 space-y-5">
              <ContactRow icon={Phone} label="Phone" value="08078500390" href="tel:+2348078500390" />
              <ContactRow icon={Mail} label="Email" value="info@modartsmusic.com" href="mailto:info@modartsmusic.com" />
              <ContactRow icon={MapPin} label="Address" value="71 Prince Kazeem Eletu Way, Osapa London, Lekki, Lagos, Nigeria." />
              <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with us instantly" href="https://wa.me/2348078500390" />
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <iframe
                title="MOD-Arts location"
                src="https://www.google.com/maps?q=Prince+Kazeem+Eletu+Way+Osapa+London+Lekki+Lagos&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch shortly."); }}
            className="rounded-2xl border border-border/60 bg-card p-7 shadow-luxe md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name" name="name" />
              <Field label="Phone Number" name="phone" type="tel" />
              <Field label="Email Address" name="email" type="email" />
              <Field label="Instrument of Interest" name="instrument" placeholder="Piano, Violin, …" />
              <Field label="Age" name="age" type="number" />
              <Field label="Preferred Learning Mode" name="mode" placeholder="Onsite / Virtual / Home" />
            </div>
            <div className="mt-5">
              <label className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy">Message</label>
              <textarea rows={5} name="message" className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
            </div>
            <button type="submit" className="group mt-7 inline-flex items-center gap-3 rounded-md bg-navy px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5">
              Send Message <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold"><Icon className="h-5 w-5" /></span>
      <span>
        <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-navy/60">{label}</span>
        <span className="mt-0.5 block text-sm font-medium text-navy">{value}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a className="flex items-start gap-4 transition-colors hover:text-gold" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a>
      ) : (
        <div className="flex items-start gap-4">{inner}</div>
      )}
    </li>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy">{label}</label>
      <input name={name} type={type} placeholder={placeholder} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold" />
    </div>
  );
}
