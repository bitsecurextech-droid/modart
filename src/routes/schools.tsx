import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, FeatureGrid } from "@/components/site/ContentPage";

export const Route = createFileRoute("/schools")({
  head: () => ({
    meta: [
      { title: "Music for Schools | MOD-Arts" },
      { name: "description", content: "Curriculum design, teacher training and choir development partnerships for schools across Lagos and Nigeria." },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="For Schools"
      title={<>Music Departments, <span className="italic text-gold">Reimagined.</span></>}
      subtitle="Partner with MOD-Arts to build a world-class music programme in your school — from curriculum design to teacher training and choir development."
      crumb="Schools"
    >
      <FeatureGrid items={[
        { title: "Music Department Setup", desc: "End-to-end consultation to launch or revive a school music programme." },
        { title: "Curriculum Design", desc: "Age-appropriate, internationally-aligned music curricula." },
        { title: "Teacher Training", desc: "Professional development for in-house and visiting music staff." },
        { title: "Choir Development", desc: "Build and nurture a flagship school choir from the ground up." },
        { title: "Instrument Support", desc: "Equipment selection, maintenance schedules and student tools." },
        { title: "Partnerships", desc: "Long-term collaborations with measurable musical outcomes." },
      ]} />
    </ContentPage>
  ),
});
