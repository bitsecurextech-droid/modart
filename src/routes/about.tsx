import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, FeatureGrid } from "@/components/site/ContentPage";
import buildingImg from "@/assets/building.jpg";
import aboutLesson from "@/assets/about-lesson.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MOD-Arts | A Legacy of Musical Excellence" },
      { name: "description", content: "MOD-Arts School of Music is dedicated to raising a new generation of confident, creative and disciplined musicians through world-class training and mentorship." },
      { property: "og:title", content: "About MOD-Arts School of Music" },
      { property: "og:description", content: "Our story, mission, vision and the people behind MOD-Arts School of Music." },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="About MOD-Arts"
      title={<>A Legacy of <span className="italic text-gold">Musical Excellence</span></>}
      subtitle="MOD-Arts School of Music is dedicated to raising a new generation of confident, creative and disciplined musicians through world-class training, personalised mentorship and performance opportunities."
      crumb="About"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <img src={aboutLesson} alt="MOD-Arts teacher and student" width={1100} height={800} loading="lazy" className="rounded-2xl shadow-luxe" />
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">Our Story</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">Inspiring Passion. Building Futures.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Founded with a passion for excellence, MOD-Arts was created to provide premier music
            education that nurtures talent, builds character, and inspires a lifelong love for music.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We believe every student has a unique sound waiting to be discovered. Our mission is to
            unlock that potential through structure, creativity and world-class training.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-secondary p-8">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Our Mission</div>
          <p className="mt-3 font-display text-xl font-semibold text-navy">
            To deliver exceptional music education that develops skilled musicians, confident performers and responsible leaders through quality training and mentorship.
          </p>
        </div>
        <div className="rounded-2xl bg-secondary p-8">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Our Vision</div>
          <p className="mt-3 font-display text-xl font-semibold text-navy">
            To be the leading institution for music education in Africa, recognised for excellence, innovation and transformative impact in the lives of our students.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold">Core Values</div>
        <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">What we stand for.</h2>
        <div className="mt-10">
          <FeatureGrid
            items={[
              { title: "Excellence", desc: "World-class teaching and uncompromising standards in every lesson." },
              { title: "Discipline", desc: "Consistency, focus and respect for the craft of music." },
              { title: "Creativity", desc: "Encouraging individual expression and musical exploration." },
              { title: "Mentorship", desc: "Lifelong guidance that develops both musicianship and character." },
              { title: "Community", desc: "A welcoming environment for students, families and educators." },
              { title: "Heritage", desc: "Honouring tradition while embracing modern pedagogy." },
            ]}
          />
        </div>
      </div>

      <div className="mt-20 overflow-hidden rounded-2xl">
        <img src={buildingImg} alt="MOD-Arts academy building" width={1400} height={900} loading="lazy" className="h-[420px] w-full object-cover" />
      </div>
    </ContentPage>
  ),
});
