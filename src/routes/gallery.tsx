import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import progPiano from "@/assets/prog-piano.jpg";
import progViolin from "@/assets/prog-violin.jpg";
import progGuitar from "@/assets/prog-guitar.jpg";
import progDrums from "@/assets/prog-drums.jpg";
import choirImg from "@/assets/choir.jpg";
import performanceImg from "@/assets/performance.jpg";
import buildingImg from "@/assets/building.jpg";
import aboutLesson from "@/assets/about-lesson.jpg";

const IMGS = [progPiano, choirImg, progViolin, performanceImg, progGuitar, aboutLesson, progDrums, buildingImg, progViolin, progPiano, choirImg, performanceImg];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | MOD-Arts School of Music" },
      { name: "description", content: "Moments from MOD-Arts — classes, performances, events, teachers and students." },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Gallery"
      title={<>Moments of <span className="italic text-gold">Music & Mastery</span></>}
      subtitle="A glimpse into life at MOD-Arts — classrooms, concerts, choirs and the people who make our school sing."
      crumb="Gallery"
    >
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {IMGS.map((src, i) => (
          <div key={i} className="mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-sm transition-transform hover:-translate-y-1">
            <img src={src} alt={`MOD-Arts gallery ${i + 1}`} loading="lazy" className={`w-full ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"} object-cover`} />
          </div>
        ))}
      </div>
    </ContentPage>
  ),
});
