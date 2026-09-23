import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <p className="font-display text-2xl text-primary-foreground">
            Oak <span className="text-highlight">&</span> Frame
          </p>
          <p className="mt-2 text-xs">Bespoke timber homes, built with care.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest">
          <Link to="/homes">Homes</Link>
          <Link to="/about">About</Link>
          <Link to="/process">Process</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="text-xs">© 2026 Oak &amp; Frame</p>
      </div>
    </footer>
  );
}
