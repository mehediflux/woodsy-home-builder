import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Oak & Frame Timber Homes" },
      { name: "description", content: "Tell us about your land and your plans. We reply within two working days to arrange a first conversation." },
      { property: "og:title", content: "Contact | Oak & Frame Timber Homes" },
      { property: "og:description", content: "Start a conversation about your timber home." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="eyebrow text-highlight">Start a conversation</p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl">Have a piece of land?<br/><span className="italic text-highlight">Let&rsquo;s imagine what belongs there.</span></h1>
          <p className="mt-6 max-w-lg leading-7 text-hero-muted">Tell us a little about your plans. We&rsquo;ll reply within two working days to arrange a relaxed first conversation.</p>
          <div className="mt-10 space-y-2 text-sm">
            <p>hello@oakandframe.com</p>
            <p>+1 555 014 8270</p>
            <p className="text-hero-muted">Workshop: 14 Mill Lane, Blue Ridge</p>
            <p className="text-hero-muted">Monday to Friday, 8am – 5pm</p>
          </div>
        </div>
        <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-label">Your name<input required className="form-input" placeholder="Full name" /></label>
            <label className="form-label">Email address<input required type="email" className="form-input" placeholder="you@email.com" /></label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-label">Project type<select className="form-input"><option>Custom home</option><option>Cabin or retreat</option><option>Timber extension</option></select></label>
            <label className="form-label">Project location<input className="form-input" placeholder="Town or region" /></label>
          </div>
          <label className="form-label">Tell us about your plans<textarea rows={5} className="form-input resize-none" placeholder="A few details about your land, ideas, and timing" /></label>
          <Button type="submit" variant="light" className="min-h-12 px-7">Send your enquiry <ArrowRight size={15}/></Button>
        </form>
      </div>
    </section>
  );
}
