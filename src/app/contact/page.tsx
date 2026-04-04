import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionBadge from '@/components/ui/SectionBadge';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/contact/ContactForm';
import KakaoMap from '@/components/contact/KakaoMap';

const contactDetails = [
  { emoji: '📍', label: '주소', value: '경기도 안양시 만안구 (상세주소)' },
  { emoji: '📞', label: '전화', value: '031-XXX-XXXX' },
  { emoji: '⏰', label: '운영시간', value: '평일 07:30 ~ 19:30' },
  { emoji: '🅿️', label: '주차', value: '건물 내 주차 가능' },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="오시는 길·상담"
        title="언제든지 문의해주세요"
        subtitle="해피키즈 어린이집 방문과 상담을 환영합니다"
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
      <section className="py-16 md:py-24">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:031-000-0000"
              className="bg-primary text-dark font-bold px-8 py-4 rounded-full hover:bg-primary/80 transition-colors duration-200"
            >
              📞 전화 상담하기
            </a>
            <Link
              href="/contact"
              className="border-2 border-dark text-dark font-bold px-8 py-4 rounded-full hover:bg-dark hover:text-white transition-colors duration-200"
            >
              🗓️ 방문 상담 예약
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
