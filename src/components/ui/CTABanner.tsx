import Image from 'next/image';
import Link from 'next/link';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function CTABanner({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  imageSrc,
  imageAlt = '해피키즈 안내 이미지',
}: CTABannerProps) {
  return (
    <div className="bg-primary p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden">
      <div className="text-dark text-center md:text-left flex-1">
        <p className="text-2xl md:text-3xl font-extrabold">{title}</p>
        {subtitle && (
          <p className="text-base mt-2 opacity-80">{subtitle}</p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <Link
          href={primaryButtonHref}
          className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:bg-dark/90 transition-colors duration-200 text-center"
        >
          {primaryButtonText}
        </Link>
        {secondaryButtonText && secondaryButtonHref && (
          <Link
            href={secondaryButtonHref}
            className="border-2 border-dark text-dark px-8 py-4 rounded-full font-bold hover:bg-dark hover:text-white transition-colors duration-200 text-center"
          >
            {secondaryButtonText}
          </Link>
        )}
      </div>
      {imageSrc && (
        <div className="relative w-full md:w-56 lg:w-64 h-40 md:h-44 rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      )}
    </div>
  );
}
