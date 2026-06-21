import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { ArrowRight, Music } from "lucide-react";
import { Link } from "@tanstack/react-router";
import progPiano from "@/assets/prog-piano.jpg";
import progViolin from "@/assets/prog-violin.jpg";
import progGuitar from "@/assets/prog-guitar.jpg";
import progDrums from "@/assets/prog-drums.jpg";

const ALL = [
  { name: "Piano", img: progPiano },
  { name: "Violin", img: progViolin },
  { name: "Guitar", img: progGuitar },
  { name: "Drums", img: progDrums },
  { name: "Voice Training", img: progPiano },
  { name: "Cello", img: progViolin },
  { name: "Flute", img: progGuitar },
  { name: "Trumpet", img: progDrums },
  { name: "Saxophone", img: progGuitar },
  { name: "Clarinet", img: progViolin },
  { name: "Music Theory", img: progPiano },
  { name: "Ear Training", img: progDrums },
];

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: "Programmes | MOD-Arts School of Music" },
      { name: "description", content: "Explore our complete catalogue of music programmes — piano, violin, guitar, drums, voice, cello, flute, trumpet, clarinet, saxophone and more." },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Our Programmes"
      title={<>Our Music <span className="italic text-gold">Programmes</span></>}
      subtitle="Explore a wide range of instruments and specialised programmes designed to nurture talent and develop mastery — for every age and every level."
      crumb="Programmes"
    >
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {ALL.map((p) => (
          <article key={p.name} className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxe">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} width={800} height={600} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-gold"><Music className="h-4 w-4" /></div>
              <h3 className="mt-2 font-display text-lg font-bold text-navy">{p.name}</h3>
              <Link to="/contact" className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gold hover:text-navy">
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </ContentPage>
  ),
});
