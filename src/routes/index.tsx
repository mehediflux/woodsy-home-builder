import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import heroImage from "../assets/timber-hero.jpg";
import extensionImage from "../assets/project-extension.jpg";
import { projects, stats } from "../lib/site-content";
import { CallToAction } from "../components/CallToAction";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oak & Frame | Bespoke Timber Homes" },
      { name: "description", content: "Bespoke timber homes, woodland cabins, and considered extensions built around your land and your life." },
      { property: "og:title", content: "Oak & Frame | Bespoke Timber Homes" },
      { property: "og:description", content: "Natural materials. Honest craft. Timber homes made to last for generations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative min-h-[620px] h-[80vh] max-h-[900px]">
        <img src={heroImage} alt="Bespoke timber home among pine trees at sunset" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-16 lg:px-8 lg:pb-24">
          <div className="max-w-3xl text-primary-foreground">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Bespoke timber homes</p>
            <h1 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">Built by nature.<br/><span className="italic text-highlight">Made for life.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">We design and build enduring timber homes around your land, your lifestyle, and the beauty of honest materials.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/homes" className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-highlight px-6 text-xs font-semibold uppercase tracking-widest text-highlight-foreground transition-colors hover:bg-highlight-hover">Explore our homes <ArrowRight size={16}/></Link>
              <Link to="/contact" className="inline-flex min-h-12 items-center rounded-sm border border-hero-line px-6 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-surface-glass">Talk to a builder</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 md:grid-cols-4 lg:px-8">
          {stats.map(([value, label]) => (
            <div key={label} className="px-4 py-4 text-center"><p className="font-display text-3xl text-primary lg:text-4xl">{value}</p><p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="eyebrow">Homes with a sense of place</p><h2 className="section-title">Wood has a way of making a house feel like home.</h2></div>
          <div className="lg:pb-2"><p className="max-w-2xl text-base leading-8 text-muted-foreground">From a quiet cabin by the water to a generous family home in the woods, every Oak &amp; Frame project begins with the landscape. We pair thoughtful architecture with precise timber craft to create warm, low-impact homes that improve with age.</p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">More about us <ArrowRight size={15}/></Link></div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div><p className="eyebrow text-highlight">Selected work</p><h2 className="font-display text-4xl sm:text-5xl">Homes we&rsquo;ve brought to life</h2></div>
            <Link to="/homes" className="text-xs font-semibold uppercase tracking-widest text-highlight">View all homes</Link>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="group">
                <div className="overflow-hidden"><img src={project.image} alt={project.title} loading="lazy" className="aspect-[4/4.5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div>
                <div className="flex items-start justify-between border-b border-hero-line py-5"><div><p className="mb-1 text-xs uppercase tracking-widest text-highlight">0{index + 1} / {project.type}</p><h3 className="font-display text-2xl">{project.title}</h3></div><span className="pt-5 text-xs text-hero-muted">{project.detail}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="min-h-[420px] lg:min-h-[640px]"><img src={extensionImage} alt="Exposed oak frame and glass extension" loading="lazy" className="h-full w-full object-cover" /></div>
        <div className="flex items-center bg-secondary px-6 py-20 sm:px-12 lg:px-20">
          <div className="max-w-xl"><p className="eyebrow">The Oak &amp; Frame difference</p><h2 className="section-title">Craft you can see. Quality you can feel.</h2>
            <ul className="mt-8 space-y-4">
              {['Carefully selected structural timber', 'Low-energy, breathable construction', 'A dedicated builder from start to finish', 'Clear budgets and an honest build schedule'].map((item) => <li key={item} className="flex items-center gap-3 border-b border-border pb-4 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check size={13}/></span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">A homeowner&rsquo;s perspective</p><blockquote className="mt-6 font-display text-3xl leading-tight sm:text-4xl">&ldquo;They understood that we didn&rsquo;t just want a beautiful house. We wanted a home that belonged here.&rdquo;</blockquote><p className="mt-7 text-sm font-medium text-muted-foreground">Maya &amp; Daniel — Pine Ridge House</p></div>
      </section>

      <CallToAction />
    </>
  );
}
