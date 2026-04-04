interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTABanner({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: CTABannerProps) {
  return (
    <div className="bg-primary p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-dark text-center md:text-left">
        <p className="text-2xl md:text-3xl font-extrabold">{title}</p>
        {subtitle && (
          <p className="text-base mt-2 opacity-80">{subtitle}</p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <a
          href={primaryButtonHref}
          className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:bg-dark/90 transition-colors duration-200 text-center"
        >
          {primaryButtonText}
        </a>
        {secondaryButtonText && secondaryButtonHref && (
          <a
            href={secondaryButtonHref}
            className="border-2 border-dark text-dark px-8 py-4 rounded-full font-bold hover:bg-dark hover:text-white transition-colors duration-200 text-center"
          >
            {secondaryButtonText}
          </a>
        )}
      </div>
    </div>
  );
}
