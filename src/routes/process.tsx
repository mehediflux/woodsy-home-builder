import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/timber-hero.jpg";
import { processSteps } from "../lib/site-content";
import { PageHero } from "../components/PageHero";
import { CallToAction } from "../components/CallToAction";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process | Oak & Frame Timber Homes" },
      { name: "description", content: "From first sketch to front door: the four clear stages of building a timber home with Oak & Frame." },
      { property: "og:title", content: "Our Process | Oak & Frame Timber Homes" },
      { property: "og:description", content: "A clear, four-stage path from first conversation to moving day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

const faqs = [
  ["How long does a timber home take?", "Most family homes take nine to fourteen months from design approval to handover, depending on site conditions."],
  ["Do you help with planning permission?", "Yes. We prepare drawings and supporting documents and guide you through the application."],
  ["Can we visit the workshop?", "Always. We encourage clients to see their frame being cut before it reaches site."],
];

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we build"
        title="A clear path from first sketch to front door"
        description="Building a home should feel calm and well organised. Here is exactly how we work, stage by stage."
        image={heroImage}
        imageAlt="Timber house under construction at dusk"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(([num, title, text]) => (
            <div key={num} className="bg-background p-7 lg:p-8">
              <span className="font-display text-3xl text-highlight">{num}</span>
              <h2 className="mt-8 font-display text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Common questions</p>
          <h2 className="section-title">Good to know before you begin.</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map(([question, answer]) => (
              <div key={question} className="grid gap-3 py-7 sm:grid-cols-[1fr_1.2fr]">
                <h3 className="font-display text-xl">{question}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
