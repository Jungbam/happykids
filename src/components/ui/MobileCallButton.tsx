'use client';

import { SITE_CONFIG } from '@/constants/site';

export default function MobileCallButton() {
  return (
    <a
      href={`tel:${SITE_CONFIG.phone}`}
      className="fixed bottom-5 right-4 z-50 md:hidden flex items-center gap-2 bg-primary text-dark font-bold px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
      aria-label={`상담 전화 ${SITE_CONFIG.phone}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      상담 전화
    </a>
  );
}
