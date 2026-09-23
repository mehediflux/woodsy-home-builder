type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative min-h-[420px]">
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-end px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl text-primary-foreground">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-highlight">{eyebrow}</p>
          <h1 className="font-display text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-hero-muted">{description}</p>
        </div>
      </div>
    </section>
  );
}
