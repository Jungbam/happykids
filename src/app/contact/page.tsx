import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionBadge from '@/components/ui/SectionBadge';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/contact/ContactForm';
import KakaoMap from '@/components/contact/KakaoMap';
import { SITE_CONFIG } from '@/constants/site';

export const metadata: Metadata = {
  title: '오시는 길·상담 | 해피키즈 어린이집',
  description: '해피키즈 어린이집 위치와 연락처. 입소 상담 문의를 환영합니다.',
};

const contactDetails = [
  { emoji: '📍', label: '주소', value: SITE_CONFIG.address },
  { emoji: '📞', label: '전화', value: SITE_CONFIG.phone },
  { emoji: '⏰', label: '운영시간', value: SITE_CONFIG.hours },
  { emoji: '🅿️', label: '주차', value: '건물 내 주차 가능' },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="오시는 길·상담"
        title="언제든지 문의해주세요"
        subtitle="해피키즈 어린이집 방문과 상담을 환영합니다"
        backgroundImageSrc="/images/hero-contact.svg"
      />

      {/* 연락처 + 지도 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-extrabold text-dark mb-6">연락처 정보</h3>
              <div className="flex flex-col gap-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{item.emoji}</span>
                    <div>
                      <p className="text-xs text-muted font-semibold mb-0.5">{item.label}</p>
                      <p className="text-base text-dark font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <KakaoMap />
          </div>
        </div>
      </section>

      {/* 상담 문의 폼 */}
      <section id="consultation-form" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>상담 문의</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              온라인 상담 문의
            </h2>
          </div>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 빠른 문의 CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full max-w-md h-44 rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
              <Image src="/images/cta-home.svg" alt="상담 예약 안내 이미지" fill className="object-cover" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-primary text-dark font-bold px-8 py-4 rounded-full hover:bg-primary/80 transition-colors duration-200"
            >
              📞 전화 상담하기
            </a>
            <Link
              href="#consultation-form"
              className="border-2 border-dark text-dark font-bold px-8 py-4 rounded-full hover:bg-dark hover:text-white transition-colors duration-200"
            >
              🗓️ 방문 상담 예약
            </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
