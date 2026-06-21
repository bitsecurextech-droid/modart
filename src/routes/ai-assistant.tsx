import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Send, Sparkles } from "lucide-react";

export const Route = createFileRoute("/ai-assistant")({
  head: () => ({
    meta: [
      { title: "AI Music Assistant | MOD-Arts" },
      { name: "description", content: "Chat with our AI assistant about instruments, classes, schedules and the right programme for you." },
    ],
  }),
  component: AssistantPage,
});

type Msg = { role: "user" | "ai"; text: string };

function AssistantPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: "Hello! I'm the MOD-Arts assistant. Ask me anything about our instruments, classes or how to begin your musical journey." },
  ]);
  const [input, setInput] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const q = input.trim();
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTimeout(() => {
      const reply = canned(q);
      setMessages((m) => [...m, { role: "ai", text: reply }]);
    }, 500);
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="AI Music Assistant"
        title={<>Your Personal <span className="italic text-gold">Music Guide</span></>}
        subtitle="Ask about instruments, lesson formats, schedules or programme recommendations. We'll guide you to the right next step."
        crumb="AI Assistant"
      />
      <section className="container-x py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card shadow-luxe">
          <div className="flex h-[500px] flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex gap-3"}>
                  {m.role === "ai" && (
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-gold">
                      <Sparkles className="h-4 w-4" />
                    </div>
                  )}
                  <div className={
                    m.role === "user"
                      ? "max-w-[80%] rounded-2xl rounded-tr-sm bg-navy px-4 py-3 text-sm text-primary-foreground"
                      : "max-w-[80%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-3 text-sm text-navy"
                  }>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={send} className="flex gap-2 border-t border-border/60 p-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about piano lessons, schedules, age groups…"
                className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
              />
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-navy px-5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground">
                Send <Send className="h-4 w-4 text-gold" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function canned(q: string) {
  const low = q.toLowerCase();
  if (low.includes("price") || low.includes("fee") || low.includes("cost")) {
    return "For tuition details, please book a free consultation and our team will share a tailored programme and pricing.";
  }
  if (low.includes("piano")) return "Piano is one of our flagship programmes — available for ages 5+ across onsite, home and virtual modes. Would you like to book a consultation?";
  if (low.includes("violin")) return "Violin lessons run weekly with our string faculty. We recommend starting from age 6+. Want me to suggest a class schedule?";
  if (low.includes("choir")) return "Our Children's Choir is open to ages 6–16. Rehearsals run on weekends and members get regular performance opportunities.";
  if (low.includes("age")) return "We teach from age 5 through adulthood. Tell me the age of the learner and I'll suggest the best programme.";
  return "Great question! Our team can give you a precise answer — please book a free consultation or call 08078500390.";
}
