import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionBadge from '@/components/ui/SectionBadge';
import Card from '@/components/ui/Card';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: '연혁·수상 | 해피키즈 어린이집',
  description: '2006년 개원 이후 20년의 성장 기록. 보건복지부 장관상, 경기도 우수어린이집 등 다수 수상.',
};

const trustStats = [
  { value: '20년+', label: '운영 경력' },
  { value: '5회+', label: '평가인증' },
  { value: '3회', label: '공공형 재선정' },
  { value: '10건+', label: '수상' },
];

const timeline = [
  { year: '2006', emoji: '🌱', desc: '해피키즈 어린이집 개원' },
  { year: '2010', emoji: '🏛️', desc: '공공형 어린이집 최초 지정' },
  { year: '2012', emoji: '✅', desc: '평가인증 최초 통과' },
  { year: '2014', emoji: '🏆', desc: '보건복지부 장관상 수상' },
  { year: '2016', emoji: '⭐', desc: '경기도 우수어린이집 선정' },
  { year: '2019', emoji: '🔄', desc: '공공형 어린이집 재선정' },
  { year: '2022', emoji: '🏠', desc: '열린어린이집 운영 개시' },
  { year: '2024', emoji: '🎖️', desc: '국회의원상 수상' },
];

const awards = [
  { emoji: '🏆', title: '보건복지부 장관상' },
  { emoji: '⭐', title: '경기도 우수어린이집' },
  { emoji: '🎖️', title: '국회의원상' },
  { emoji: '🏅', title: '경기도지사상' },
  { emoji: '🌿', title: '에코자람 수상' },
  { emoji: '✅', title: '평가인증 A등급' },
];

export default function HistoryPage() {
  return (
    <main>
      <PageHero
        badge="연혁·수상"
        title="20년의 신뢰, 검증된 보육"
        subtitle="2006년 개원 이후 꾸준히 성장해온 해피키즈의 발자취입니다"
      />

      {/* 신뢰 지표 요약 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {trustStats.map((stat) => (
              <Card key={stat.label}>
                <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-sm text-muted mt-2">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 연혁 타임라인 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>연혁</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              해피키즈의 성장 이야기
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* 세로 연결선 */}
              <div className="absolute left-[7px] top-2 bottom-2 border-l-2 border-[var(--color-border-brand)]" />
              <div className="flex flex-col gap-8">
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-6 items-start">
                    <div className="relative z-10 w-4 h-4 rounded-full bg-primary shrink-0 mt-1" />
                    <div>
                      <span className="bg-[rgba(255,215,106,0.2)] text-dark font-bold px-3 py-1 rounded-full text-sm inline-block mb-1">
                        {item.year}
                      </span>
                      <p className="text-base text-dark">
                        {item.emoji} {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 인증 및 수상 그리드 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>인증 및 수상</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              객관적으로 검증된 우수성
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {awards.map((item) => (
              <Card key={item.title} hover className="text-center">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <p className="text-base font-semibold text-dark">{item.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <CTABanner
            title="검증된 해피키즈에서 안심 보육을 시작하세요"
            primaryButtonText="입소 상담 문의"
            primaryButtonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}
