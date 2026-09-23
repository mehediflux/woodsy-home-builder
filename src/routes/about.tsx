import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import heroImage from "../assets/project-extension.jpg";
import cabinImage from "../assets/project-cabin.jpg";
import { stats } from "../lib/site-content";
import { PageHero } from "../components/PageHero";
import { CallToAction } from "../components/CallToAction";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Oak & Frame Timber Homes" },
      { name: "description", content: "Meet the timber builders behind Oak & Frame: eighteen years of honest craft, natural materials, and careful building." },
      { property: "og:title", content: "About Us | Oak & Frame Timber Homes" },
      { property: "og:description", content: "Our story, our craft, and the people who build every Oak & Frame home." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A workshop built on honest materials"
        description="Oak & Frame began in a small timber yard eighteen years ago. We still build the same way: slowly, carefully, and by hand where it matters."
        image={heroImage}
        imageAlt="Exposed oak frame joinery inside a timber home"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title">Builders first, and joiners at heart.</h2>
          </div>
          <div className="space-y-6 leading-8 text-muted-foreground">
            <p>We are a team of twelve carpenters, joiners, and site managers who believe a home should be as beautiful in its structure as in its finish. Every frame is cut in our own workshop before it reaches your site.</p>
            <p>We work with responsibly sourced European oak, Douglas fir, and local pine, finished with natural oils rather than heavy coatings. The result is a home that breathes, ages gracefully, and feels warm the moment you step inside.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 md:grid-cols-4 lg:px-8">
          {stats.map(([value, label]) => (
            <div key={label} className="px-4 py-4 text-center"><p className="font-display text-3xl text-primary lg:text-4xl">{value}</p><p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p></div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="min-h-[420px] lg:min-h-[620px]"><img src={cabinImage} alt="Timber cabin in a woodland clearing" loading="lazy" className="h-full w-full object-cover" /></div>
        <div className="flex items-center px-6 py-20 sm:px-12 lg:px-20">
          <div className="max-w-xl">
            <p className="eyebrow">What you can expect</p>
            <h2 className="section-title">Craft you can see. Quality you can feel.</h2>
            <ul className="mt-8 space-y-4">
              {['Carefully selected structural timber', 'Low-energy, breathable construction', 'A dedicated builder from start to finish', 'Clear budgets and an honest build schedule', '25-year structural warranty on every home'].map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-border pb-4 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check size={13}/></span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
