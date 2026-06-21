import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { CalendarDays } from "lucide-react";

const EVENTS = [
  { date: "Mar 15", title: "Spring Recital", desc: "Quarterly student showcase featuring piano, violin and voice." },
  { date: "Apr 22", title: "Choir Masterclass", desc: "International guest conductor workshop for choir members." },
  { date: "May 18", title: "Junior Competition", desc: "Annual instrumental competition for students under 14." },
  { date: "Jun 10", title: "Summer Concert", desc: "Full-school recital celebrating a year of musical growth." },
];

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | MOD-Arts School of Music" },
      { name: "description", content: "Upcoming concerts, workshops, masterclasses and competitions at MOD-Arts." },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Events"
      title={<>Concerts, Workshops <span className="italic text-gold">& Masterclasses</span></>}
      subtitle="Our calendar is filled with moments that inspire — from intimate masterclasses to full-school concerts."
      crumb="Events"
    >
      <div className="space-y-4">
        {EVENTS.map((e) => (
          <article key={e.title} className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-luxe md:flex-row md:items-center">
            <div className="flex w-24 shrink-0 flex-col items-center justify-center rounded-xl bg-navy p-3 text-center text-white">
              <CalendarDays className="h-5 w-5 text-gold" />
              <div className="mt-1 font-display text-sm font-bold">{e.date}</div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-navy">{e.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </ContentPage>
  ),
});
