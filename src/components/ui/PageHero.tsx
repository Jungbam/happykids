import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImageSrc?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  backgroundImageSrc,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {backgroundImageSrc && (
        <Image
          src={backgroundImageSrc}
          alt="페이지 배경 이미지"
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF3E0]/90 via-[#FFF9F1]/85 to-[#FFF9F1]/95" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
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
