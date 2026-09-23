import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Our homes", to: "/homes" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "Services", to: "/services" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hero-line bg-primary text-primary-foreground">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="font-display text-2xl">
          Oak <span className="text-highlight">&</span> Frame
        </Link>

        <nav
          className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-highlight" }}
              className="transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden border border-hero-line px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-surface-glass lg:inline-flex"
        >
          Start a project
        </Link>

        <Button
          variant="icon"
          className="h-11 w-11 px-0 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </Button>
      </div>

      {menuOpen && (
        <nav className="border-t border-hero-line bg-primary px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          {[...navItems, { label: "Start a project", to: "/contact" } as const].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-hero-line py-3 text-sm uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
