import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/project-cedar.jpg";
import { projects } from "../lib/site-content";
import { PageHero } from "../components/PageHero";
import { CallToAction } from "../components/CallToAction";

export const Route = createFileRoute("/homes")({
  head: () => ({
    meta: [
      { title: "Our Homes | Oak & Frame Timber Homes" },
      { name: "description", content: "A selection of timber family homes, woodland cabins, and oak-framed extensions built by Oak & Frame." },
      { property: "og:title", content: "Our Homes | Oak & Frame Timber Homes" },
      { property: "og:description", content: "Explore completed timber houses, cabins, and extensions from our workshop." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomesPage,
});

function HomesPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Timber homes with a sense of place"
        description="Every project starts with the land it sits on. Here is a closer look at some of the homes we have built."
        image={heroImage}
        imageAlt="Cedar-clad timber family home"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <article key={project.title} className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`}>
              <figure className="overflow-hidden">
                <img src={project.image} alt={project.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </figure>
              <div>
                <p className="eyebrow">0{index + 1} / {project.type}</p>
                <h2 className="font-display text-3xl sm:text-4xl">{project.title}</h2>
                <p className="mt-5 leading-8 text-muted-foreground">{project.description}</p>
                <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-sm">
                  <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Type</dt><dd className="mt-1">{project.type}</dd></div>
                  <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Size</dt><dd className="mt-1">{project.detail}</dd></div>
                  <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Location</dt><dd className="mt-1">{project.location}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
