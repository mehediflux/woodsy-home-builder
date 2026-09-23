import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/project-cabin.jpg";
import { projects, services } from "../lib/site-content";
import { PageHero } from "../components/PageHero";
import { CallToAction } from "../components/CallToAction";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Oak & Frame Timber Homes" },
      { name: "description", content: "Custom timber homes, woodland cabins and retreats, and oak-framed extensions built to last." },
      { property: "og:title", content: "Services | Oak & Frame Timber Homes" },
      { property: "og:description", content: "Three ways to build in timber with Oak & Frame." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we build"
        title="One craft. Three ways home."
        description="Whether you are starting from bare land or adding light to a house you already love, we build it in timber."
        image={heroImage}
        imageAlt="Woodland timber cabin among trees"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map(([title, text], i) => (
            <article key={title} className="border border-border p-8">
              <img src={projects[i].image} alt={title} loading="lazy" className="mb-7 aspect-[4/3] w-full object-cover" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">0{i + 1}</span>
              <h2 className="mt-3 font-display text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Also included</p>
          <h2 className="section-title">Everything around the build.</h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[["Site assessment", "We visit, survey, and advise before anything is drawn."], ["Design & planning", "Full drawings and support through planning applications."], ["Workshop joinery", "Frames, stairs, and cabinetry cut in our own workshop."], ["Aftercare", "Yearly check-ins and a 25-year structural warranty."]].map(([title, text]) => (
              <div key={title} className="bg-background p-7">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
