interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-[#FFF3E0] to-[#FFF9F1] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {badge && (
          <span className="bg-primary/20 text-dark text-sm font-semibold px-4 py-1.5 rounded-full inline-block mb-4">
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold text-dark">{title}</h1>
        {subtitle && (
          <p className="text-lg text-muted mt-4">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
