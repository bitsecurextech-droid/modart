import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import performanceImg from "@/assets/performance.jpg";
import choirImg from "@/assets/choir.jpg";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: "Performance | MOD-Arts School of Music" },
      { name: "description", content: "Concerts, recitals, competitions and showcases — celebrating every stage of our students' musical journey." },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Performance"
      title={<>Celebrating Every <span className="italic text-gold">Stage of the Journey</span></>}
      subtitle="From intimate recitals to grand concerts, our students shine on every stage and develop the confidence to perform anywhere."
      crumb="Performance"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { title: "Concerts", img: performanceImg },
          { title: "Recitals", img: choirImg },
          { title: "Competitions", img: performanceImg },
          { title: "Showcases", img: choirImg },
        ].map((p) => (
          <article key={p.title} className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-luxe">
            <img src={p.img} alt={p.title} width={1400} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
            <h3 className="absolute bottom-6 left-6 font-display text-3xl font-bold text-white">{p.title}</h3>
          </article>
        ))}
      </div>
    </ContentPage>
  ),
});
