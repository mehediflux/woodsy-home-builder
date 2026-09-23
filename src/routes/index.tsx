import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/Button";
import heroImage from "../assets/timber-hero.jpg";
import cedarImage from "../assets/project-cedar.jpg";
import cabinImage from "../assets/project-cabin.jpg";
import extensionImage from "../assets/project-extension.jpg";

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

const projects = [
  { title: "Pine Ridge House", type: "Family home", detail: "2,480 sq ft", image: cedarImage },
  { title: "Stillwater Cabin", type: "Woodland retreat", detail: "1,120 sq ft", image: cabinImage },
  { title: "Orchard Room", type: "Timber extension", detail: "680 sq ft", image: extensionImage },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-hero-line text-primary-foreground">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="font-display text-2xl">Oak <span className="text-highlight">&</span> Frame</a>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest md:flex" aria-label="Primary navigation">
            <a href="#projects" className="transition-opacity hover:opacity-70">Our homes</a>
            <a href="#craft" className="transition-opacity hover:opacity-70">Craft</a>
            <a href="#process" className="transition-opacity hover:opacity-70">Process</a>
            <a href="#services" className="transition-opacity hover:opacity-70">Services</a>
          </nav>
          <a href="#contact" className="hidden border border-hero-line px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-surface-glass md:inline-flex">Start a project</a>
          <Button variant="icon" className="h-11 w-11 px-0 md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-hero-line bg-primary px-5 py-5 md:hidden" aria-label="Mobile navigation">
            {[['Our homes', '#projects'], ['Craft', '#craft'], ['Process', '#process'], ['Services', '#services'], ['Start a project', '#contact']].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-hero-line py-3 text-sm uppercase tracking-widest">{label}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" className="relative min-h-[720px] h-[92vh] max-h-[980px]">
        <img src={heroImage} alt="Bespoke timber home among pine trees at sunset" width={1920} height={1152} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-20 lg:px-8 lg:pb-24">
          <div className="max-w-3xl text-primary-foreground">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Bespoke timber homes</p>
            <h1 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-8xl">Built by nature.<br/><span className="italic text-highlight">Made for life.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">We design and build enduring timber homes around your land, your lifestyle, and the beauty of honest materials.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-highlight px-6 text-xs font-semibold uppercase tracking-widest text-highlight-foreground transition-colors hover:bg-highlight-hover">Explore our homes <ArrowRight size={16}/></a>
              <a href="#contact" className="inline-flex min-h-12 items-center rounded-sm border border-hero-line px-6 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-surface-glass">Talk to a builder</a>
            </div>
          </div>
          <a href="#intro" aria-label="Continue to introduction" className="absolute bottom-8 right-5 hidden h-12 w-12 items-center justify-center rounded-full border border-hero-line lg:flex lg:right-8"><ArrowDown size={18}/></a>
        </div>
      </section>

      <section id="intro" className="border-b border-border bg-secondary py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 md:grid-cols-4 lg:px-8">
          {[['18+', 'Years building'], ['120', 'Homes completed'], ['25 yr', 'Structural warranty'], ['100%', 'Responsibly sourced']].map(([value, label]) => (
            <div key={label} className="px-4 py-4 text-center"><p className="font-display text-3xl text-primary lg:text-4xl">{value}</p><p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="eyebrow">Homes with a sense of place</p><h2 className="section-title">Wood has a way of making a house feel like home.</h2></div>
          <div className="lg:pb-2"><p className="max-w-2xl text-base leading-8 text-muted-foreground">From a quiet cabin by the water to a generous family home in the woods, every Oak & Frame project begins with the landscape. We pair thoughtful architecture with precise timber craft to create warm, low-impact homes that improve with age.</p></div>
        </div>
      </section>

      <section id="projects" className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-5"><div><p className="eyebrow text-highlight">Selected work</p><h2 className="font-display text-4xl sm:text-5xl">Homes we’ve brought to life</h2></div><span className="hidden text-sm text-hero-muted md:block">Designed around how people really live.</span></div>
          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="group">
                <div className="overflow-hidden"><img src={project.image} alt={project.title} width={1200} height={1008} loading="lazy" className="aspect-[4/4.5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div>
                <div className="flex items-start justify-between border-b border-hero-line py-5"><div><p className="mb-1 text-xs uppercase tracking-widest text-highlight">0{index + 1} / {project.type}</p><h3 className="font-display text-2xl">{project.title}</h3></div><span className="pt-5 text-xs text-hero-muted">{project.detail}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="craft" className="grid lg:grid-cols-2">
        <div className="min-h-[480px] lg:min-h-[720px]"><img src={extensionImage} alt="Exposed oak frame and glass extension" width={1200} height={1008} loading="lazy" className="h-full w-full object-cover" /></div>
        <div className="flex items-center bg-secondary px-6 py-20 sm:px-12 lg:px-20">
          <div className="max-w-xl"><p className="eyebrow">The Oak & Frame difference</p><h2 className="section-title">Craft you can see. Quality you can feel.</h2><p className="mt-6 leading-8 text-muted-foreground">We believe the structure should be part of the beauty. Our builders celebrate solid timber, clean joinery, and natural finishes instead of hiding them behind unnecessary layers.</p>
            <ul className="mt-8 space-y-4">
              {['Carefully selected structural timber', 'Low-energy, breathable construction', 'A dedicated builder from start to finish', 'Clear budgets and an honest build schedule'].map((item) => <li key={item} className="flex items-center gap-3 border-b border-border pb-4 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check size={13}/></span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl"><p className="eyebrow">How we build</p><h2 className="section-title">A clear path from first sketch to front door.</h2></div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-4">
          {[['01', 'Listen', 'We meet, visit your site, and understand how you want to live.'], ['02', 'Design', 'We shape the plans, materials, costs, and every practical detail.'], ['03', 'Build', 'Our team brings your timber home to life with care and precision.'], ['04', 'Settle in', 'We hand over your home and remain on call long after moving day.']].map(([num, title, text]) => (
            <div key={num} className="bg-background p-7 lg:p-8"><span className="font-display text-3xl text-highlight">{num}</span><h3 className="mt-8 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">What we build</p><h2 className="section-title">One craft.<br/>Three ways home.</h2></div><div className="divide-y divide-border-strong border-y border-border-strong">
          {[['Custom timber homes', 'A complete, one-of-a-kind home designed for your site and family.'], ['Cabins & retreats', 'Compact, considered spaces that bring you closer to the landscape.'], ['Timber extensions', 'Light-filled additions that give an existing home room to grow.']].map(([title, text], i) => <div key={title} className="grid gap-3 py-7 sm:grid-cols-[3rem_1fr_1.2fr] sm:items-center"><span className="text-xs text-muted-foreground">0{i+1}</span><h3 className="font-display text-2xl">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{text}</p></div>)}
        </div></div></div>
      </section>

      <section className="bg-highlight px-5 py-20 text-highlight-foreground lg:py-24">
        <div className="mx-auto max-w-4xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.24em]">A homeowner’s perspective</p><blockquote className="mt-6 font-display text-3xl leading-tight sm:text-5xl">“They understood that we didn’t just want a beautiful house. We wanted a home that belonged here.”</blockquote><p className="mt-7 text-sm font-medium">Maya & Daniel — Pine Ridge House</p></div>
      </section>

      <section id="contact" className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div><p className="eyebrow text-highlight">Start a conversation</p><h2 className="font-display text-4xl leading-tight sm:text-6xl">Have a piece of land?<br/><span className="italic text-highlight">Let’s imagine what belongs there.</span></h2><p className="mt-6 max-w-lg leading-7 text-hero-muted">Tell us a little about your plans. We’ll reply within two working days to arrange a relaxed first conversation.</p><div className="mt-10 space-y-2 text-sm"><p>hello@oakandframe.com</p><p>+1 555 014 8270</p></div></div>
          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Your name<input required className="form-input" placeholder="Full name" /></label><label className="form-label">Email address<input required type="email" className="form-input" placeholder="you@email.com" /></label></div>
            <div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Project type<select className="form-input"><option>Custom home</option><option>Cabin or retreat</option><option>Timber extension</option></select></label><label className="form-label">Project location<input className="form-input" placeholder="Town or region" /></label></div>
            <label className="form-label">Tell us about your plans<textarea rows={4} className="form-input resize-none" placeholder="A few details about your land, ideas, and timing" /></label>
            <Button type="submit" variant="light" className="min-h-12 px-7">Send your enquiry <ArrowRight size={15}/></Button>
          </form>
        </div>
      </section>

      <footer className="bg-footer text-footer-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-8"><div><p className="font-display text-2xl text-primary-foreground">Oak <span className="text-highlight">&</span> Frame</p><p className="mt-2 text-xs">Bespoke timber homes, built with care.</p></div><div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest"><a href="#projects">Homes</a><a href="#craft">Craft</a><a href="#process">Process</a><a href="#contact">Contact</a></div><p className="text-xs">© 2026 Oak & Frame</p></div></footer>
    </main>
  );
}
