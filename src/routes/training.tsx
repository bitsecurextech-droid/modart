import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, FeatureGrid } from "@/components/site/ContentPage";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training | MOD-Arts School of Music" },
      { name: "description", content: "Theory, ear training, sight reading, performance coaching, choir and advanced training programmes at MOD-Arts." },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Specialist Training"
      title={<>Train Like a <span className="italic text-gold">Professional</span></>}
      subtitle="Comprehensive musical training that develops the full musician — theory, technique, expression and stage presence."
      crumb="Training"
    >
      <FeatureGrid items={[
        { title: "Music Theory", desc: "Notation, harmony, form and the language that powers musical expression." },
        { title: "Ear Training", desc: "Intervals, chords, melodies — develop a trained, intuitive musical ear." },
        { title: "Sight Reading", desc: "Read fluently and play with confidence in any context." },
        { title: "Performance Coaching", desc: "Stage presence, audience engagement, repertoire and mental preparation." },
        { title: "Choir Training", desc: "Vocal technique, blend, breath control and ensemble musicianship." },
        { title: "Advanced Training", desc: "Conservatory-grade preparation for international auditions and exams." },
      ]} />
    </ContentPage>
  ),
});
