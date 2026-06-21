import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, FeatureGrid } from "@/components/site/ContentPage";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes | MOD-Arts School of Music" },
      { name: "description", content: "Classes for children, teens and adults — private, group, weekend and holiday formats. Find a class that fits your life." },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Our Classes"
      title={<>Classes for <span className="italic text-gold">Every Stage of Life</span></>}
      subtitle="From toddlers exploring their first notes to adults reigniting a passion — choose the class format that fits your goals and schedule."
      crumb="Classes"
    >
      <FeatureGrid items={[
        { title: "Children (5–11)", desc: "Foundational training that blends fun, discipline and musical literacy." },
        { title: "Teens (12–17)", desc: "Skill-building, repertoire and performance confidence for the next stage." },
        { title: "Adults", desc: "Personalised pacing for working professionals and lifelong learners." },
        { title: "Private Lessons", desc: "One-on-one mentorship tailored to your goals and learning pace." },
        { title: "Group Classes", desc: "Collaborative learning that builds ensemble skills and musicianship." },
        { title: "Weekend Classes", desc: "Saturday and Sunday formats designed for busy weeks." },
        { title: "Holiday Programmes", desc: "Intensive seasonal training during school breaks." },
        { title: "Masterclasses", desc: "Curated sessions with visiting and resident master musicians." },
      ]} />
    </ContentPage>
  ),
});
