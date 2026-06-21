import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { ArrowRight, Mic2, Music, Sparkles, Users } from "lucide-react";
import choirImg from "@/assets/choir.jpg";

export const Route = createFileRoute("/choir")({
  head: () => ({
    meta: [
      { title: "Children's Choir | MOD-Arts School of Music" },
      { name: "description", content: "Building voices and building futures — join the MOD-Arts Children's Choir for professional choir training and performance opportunities." },
      { property: "og:image", content: "" },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="Children's Choir"
      title={<>Building Voices. <span className="italic text-gold">Building Futures.</span></>}
      subtitle="Our Children's Choir provides young singers with the opportunity to develop their voices, build confidence and create beautiful harmonies together."
      crumb="Choir"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <img src={choirImg} alt="MOD-Arts Children's Choir" width={1400} height={900} loading="lazy" className="rounded-2xl shadow-luxe" />
        <div>
          <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">A nurturing home for young voices.</h2>
          <p className="mt-5 text-muted-foreground">
            Our choir program combines professional vocal training with character development,
            stage discipline and the joy of performing together as a community.
          </p>
          <Link to="/contact" className="group mt-7 inline-flex items-center gap-3 rounded-md bg-navy px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-luxe transition-transform hover:-translate-y-0.5">
            Join the Choir <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mt-16 grid gap-5 md:grid-cols-4">
        {[
          { icon: Mic2, title: "Vocal Development" },
          { icon: Users, title: "Stage Performances" },
          { icon: Music, title: "Music Literacy" },
          { icon: Sparkles, title: "Teamwork" },
        ].map((b) => (
          <div key={b.title} className="rounded-2xl border border-border/60 bg-card p-6 text-center">
            <b.icon className="mx-auto h-7 w-7 text-gold" />
            <div className="mt-3 font-display font-bold text-navy">{b.title}</div>
          </div>
        ))}
      </div>
    </ContentPage>
  ),
});
