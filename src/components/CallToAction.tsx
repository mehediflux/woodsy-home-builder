import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="bg-highlight px-5 py-16 text-highlight-foreground lg:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          Ready to talk about your timber home?
        </h2>
        <p className="max-w-xl text-sm leading-7">
          Share your land, your ideas, and your timing. We&rsquo;ll reply within two working days.
        </p>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-primary px-6 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Start a project <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
