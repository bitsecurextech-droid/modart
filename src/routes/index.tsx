import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, GraduationCap, Globe2, Music, Play, Star, Users, Headphones, Home as HomeIcon, School, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroPianist from "@/assets/hero-pianist.jpg";
import progPiano from "@/assets/prog-piano.jpg";
import progViolin from "@/assets/prog-violin.jpg";
import progGuitar from "@/assets/prog-guitar.jpg";
import progDrums from "@/assets/prog-drums.jpg";
import modeHome from "@/assets/mode-home.jpg";
import modeVirtual from "@/assets/mode-virtual.jpg";
import modeOnsite from "@/assets/mode-onsite.jpg";
import choirImg from "@/assets/choir.jpg";
import performanceImg from "@/assets/performance.jpg";
import buildingImg from "@/assets/building.jpg";
import aboutLesson from "@/assets/about-lesson.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOD-Arts School of Music | Premier Music Education in Lekki, Lagos" },
      { name: "description", content: "MOD-Arts School of Music delivers world-class music education in Lekki, Lagos — piano, violin, guitar, drums, voice, choir and more. Onsite, virtual and home lessons for children, teens and adults." },
      { property: "og:title", content: "MOD-Arts School of Music | Premier Music Education in Lekki" },
      { property: "og:description", content: "Discover the art of musical excellence. World-class training, personalised mentorship and performance opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const STATS = [
  { icon: Music, value: "10+", label: "Instruments" },
  { icon: GraduationCap, value: "3", label: "Learning Modes" },
  { icon: Users, value: "100+", label: "Students Trained" },
  { icon: Globe2, value: "International", label: "Certification Pathways" },
  { icon: Star, value: "Professional", label: "Instructors" },
];

const PROGRAMS = [
  { name: "Piano", img: progPiano, blurb: "Build strong technique and musical expression." },
  { name: "Violin", img: progViolin, blurb: "Master the art of melody and harmony." },
  { name: "Guitar", img: progGuitar, blurb: "From chords to creativity, play your way." },
  { name: "Drums", img: progDrums, blurb: "Develop rhythm, timing and confidence." },
];

const MODES = [
  { icon: HomeIcon, name: "Home Lessons", img: modeHome, blurb: "Personalised one-on-one music training in the comfort of your home." },
  { icon: Headphones, name: "Virtual Classes", img: modeVirtual, blurb: "Learn from expert instructors anywhere in the world." },
  { icon: School, name: "Onsite Classes", img: modeOnsite, blurb: "Experience world-class training in our modern music facility." },
];

const TESTIMONIALS = [
  { name: "Adaeze O.", role: "Parent", quote: "MOD-Arts transformed my son's relationship with music. The teachers are world-class and the discipline is unmatched." },
  { name: "Tobi A.", role: "Student, Piano", quote: "I sat for my international certification last term — and passed with distinction. MOD-Arts prepared me beautifully." },
  { name: "Mrs. Bello", role: "Parent", quote: "From beginner to performer in 18 months. My daughter performs at recitals with confidence we never imagined." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
              Premier Music Education in Lekki
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] text-navy md:text-6xl lg:text-7xl">
              Discover the Art of<br />
              Musical <span className="text-gold italic">Excellence</span>
            </h1>
            <div className="mt-5 h-[3px] w-16 bg-gold" />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Professional music education for children, teenagers and adults. Learn from
              experienced instructors through onsite, virtual and home-based lessons.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-md bg-navy px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/programmes"
                className="group inline-flex items-center gap-3 rounded-md border-2 border-gold px-6 py-[14px] text-xs font-bold uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-navy-deep"
              >
                Explore Programmes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <button className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-navy/30 transition-colors hover:bg-navy hover:text-white">
                <Play className="h-4 w-4 fill-current" />
              </span>
              Watch Our Story
            </button>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 -z-10">
              <div className="absolute right-6 top-6 h-[88%] w-[88%] rounded-full bg-navy" />
              <div className="absolute right-0 top-0 h-full w-full rounded-full border-2 border-gold/40" />
            </div>
            <img
              src={heroPianist}
              alt="Young pianist performing at a Steinway grand piano"
              width={1024}
              height={1024}
              className="relative z-10 mx-auto block max-h-[640px] w-auto object-contain drop-shadow-2xl"
            />
            <div className="pointer-events-none absolute right-4 top-10 animate-float text-gold/80">
              <Music className="h-7 w-7" />
            </div>
            <div className="pointer-events-none absolute left-6 top-1/3 animate-float text-gold/70" style={{ animationDelay: "1.5s" }}>
              <Music className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-navy text-primary-foreground">
        <div className="container-x grid grid-cols-2 gap-y-8 py-8 md:grid-cols-3 md:py-10 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-4 px-4 ${
                i > 0 ? "lg:border-l lg:border-white/15" : ""
              }`}
            >
              <s.icon className="h-9 w-9 shrink-0 text-gold" />
              <div>
                <div className="font-display text-2xl font-bold leading-none text-white">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.4fr]">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
              Our Programmes
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
              Learn. Practice.<br />Perform. Excel.
            </h2>
            <div className="mt-4 h-[3px] w-14 bg-gold" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We offer a wide range of music programmes designed to build strong foundations,
              develop skills and inspire greatness.
            </p>
            <Link
              to="/programmes"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-navy"
            >
              Explore All Programmes
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {PROGRAMS.map((p) => (
              <article
                key={p.name}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxe"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.name} class at MOD-Arts`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-5 left-4 grid h-11 w-11 place-items-center rounded-full bg-navy text-gold ring-4 ring-white">
                    <Music className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5 pt-7">
                  <h3 className="font-display text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <Link
                    to="/programmes"
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gold hover:text-navy"
                  >
                    View Programme <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING MODES */}
      <section className="bg-secondary">
        <div className="container-x py-20">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
            Choose Your Learning Experience
          </div>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-navy md:text-4xl">
            Three flexible ways to learn — designed around your life.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {MODES.map((m) => (
              <article
                key={m.name}
                className="group relative h-[360px] overflow-hidden rounded-2xl shadow-luxe"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                  <m.icon className="mb-3 h-7 w-7 text-gold" />
                  <h3 className="font-display text-2xl font-bold">{m.name}</h3>
                  <p className="mt-2 text-sm text-white/85">{m.blurb}</p>
                  <Link
                    to="/classes"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
        <div className="relative">
          <img
            src={aboutLesson}
            alt="MOD-Arts instructor teaching a young pianist"
            width={1100}
            height={800}
            loading="lazy"
            className="rounded-2xl shadow-luxe"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-gold p-5 text-navy-deep shadow-luxe md:block">
            <div className="font-display text-3xl font-bold">10+</div>
            <div className="text-[11px] font-bold uppercase tracking-[0.16em]">Years of Heritage</div>
          </div>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">Our Story</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
            Inspiring Passion.<br />Building Futures.
          </h2>
          <div className="mt-4 h-[3px] w-14 bg-gold" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Founded with a passion for excellence, MOD-Arts School of Music was created to provide
            high-quality music education that nurtures talent, builds character and inspires a
            lifelong love for music.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We believe every student has a unique sound waiting to be discovered. Our mission is to
            unlock that potential through structure, creativity and world-class training.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-3 rounded-md bg-navy px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <img
          src={performanceImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="container-x relative grid items-center gap-12 py-24 lg:grid-cols-2">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
              Performance Highlights
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Where Talent Meets Opportunity
            </h2>
            <p className="mt-6 max-w-md text-white/80">
              Our students showcase their skills on stage, build confidence and create unforgettable
              moments through music.
            </p>
            <Link
              to="/performance"
              className="group mt-8 inline-flex items-center gap-3 rounded-md bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-navy-deep transition-transform hover:-translate-y-0.5"
            >
              View Performances <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-luxe">
            <img src={performanceImg} alt="MOD-Arts concert performance" width={1400} height={900} loading="lazy" className="h-full w-full object-cover" />
            <button aria-label="Play" className="absolute inset-0 grid place-items-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-white/90 text-navy-deep shadow-luxe transition-transform hover:scale-105">
                <Play className="h-7 w-7 fill-current" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* CHOIR */}
      <section className="container-x py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
              Children's Choir
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
              Building Voices.<br />Building Futures.
            </h2>
            <div className="mt-4 h-[3px] w-14 bg-gold" />
            <p className="mt-6 max-w-md text-muted-foreground">
              Our Children's Choir provides young singers with the opportunity to develop their
              voices, build confidence and create beautiful harmonies together.
            </p>
            <ul className="mt-6 space-y-3">
              {["Professional choir training", "Performance opportunities", "Discipline and identity", "Open to children ages 6–16"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-navy/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {t}
                </li>
              ))}
            </ul>
            <Link
              to="/choir"
              className="group mt-8 inline-flex items-center gap-3 rounded-md bg-navy px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5"
            >
              Join the Choir <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={choirImg}
              alt="MOD-Arts children's choir performing on stage"
              width={1400}
              height={900}
              loading="lazy"
              className="rounded-2xl shadow-luxe"
            />
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS TIMELINE */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
              Certification Pathways
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              From your first note to international recognition.
            </h2>
          </div>
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-9 hidden h-[2px] bg-gold/30 md:block" />
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { step: "01", title: "Beginner", desc: "Foundations, rhythm, sight reading." },
                { step: "02", title: "Intermediate", desc: "Repertoire building & expression." },
                { step: "03", title: "Advanced", desc: "Performance polish & theory mastery." },
                { step: "04", title: "International", desc: "Global certification pathways." },
              ].map((s) => (
                <div key={s.step} className="relative text-center">
                  <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border-2 border-gold bg-background font-display text-xl font-bold text-navy">
                    {s.step}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
              What Families Say
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl">
              Stories that move us forward.
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-border/60 bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxe">
              <Quote className="h-8 w-8 text-gold/70" />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-navy/85">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="font-display font-bold text-navy">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SCHOOLS / SERVICES */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
            Music Services for Schools
          </div>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-navy md:text-4xl">
            Partner with us to build world-class music departments.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BookOpen, title: "Curriculum Development" },
              { icon: GraduationCap, title: "Teacher Training" },
              { icon: Users, title: "Choir Development" },
              { icon: Award, title: "Instrument Support" },
            ].map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border/60 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-luxe">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section id="consultation" className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">Get In Touch</div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
              Book your free consultation.
            </h2>
            <div className="mt-4 h-[3px] w-14 bg-gold" />
            <p className="mt-6 max-w-md text-muted-foreground">
              Tell us a little about your musical journey. Our team will reach out to design a
              learning pathway tailored to you.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3"><span className="font-bold text-navy">Address:</span><span className="text-muted-foreground">71 Prince Kazeem Eletu Way, Osapa London, Lekki, Lagos.</span></div>
              <div className="flex items-start gap-3"><span className="font-bold text-navy">Phone:</span><a className="text-muted-foreground hover:text-gold" href="tel:+2348078500390">08078500390</a></div>
              <div className="flex items-start gap-3"><span className="font-bold text-navy">Email:</span><a className="text-muted-foreground hover:text-gold" href="mailto:info@modartsmusic.com">info@modartsmusic.com</a></div>
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
              <textarea rows={4} name="message" className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
            </div>
            <button
              type="submit"
              className="group mt-7 inline-flex items-center gap-3 rounded-md bg-navy px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5"
            >
              Send Message <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-navy text-primary-foreground">
        <img src={buildingImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep to-navy/70" />
        <div className="container-x relative py-20 text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold md:text-6xl">
            Begin Your Musical Journey <span className="text-gold italic">Today.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/80">
            Join a community where discipline meets creativity and every student finds their voice.
          </p>
          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-md bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-navy-deep shadow-luxe transition-transform hover:-translate-y-0.5"
          >
            Book Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
