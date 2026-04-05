import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/site';
import PageHero from '@/components/ui/PageHero';
import SectionBadge from '@/components/ui/SectionBadge';
import Card from '@/components/ui/Card';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: '어린이집 소개 | 해피키즈 어린이집',
  description: '해피키즈 어린이집의 교육 철학과 운영 방향을 소개합니다. 2006년 개원, 공공형 어린이집.',
};

const philosophies = [
  { emoji: '🛡️', title: '안전' },
  { emoji: '🤝', title: '신뢰' },
  { emoji: '💝', title: '존중' },
  { emoji: '🎯', title: '놀이중심 성장' },
  { emoji: '📢', title: '열린 소통' },
];

const specialReasons = [
  {
    emoji: '🏛️',
    title: '공공형 운영의 공신력',
    desc: '국가가 직접 지원하고 관리하는 공공형 어린이집으로, 투명하고 신뢰할 수 있는 운영 체계를 갖추고 있습니다.',
  },
  {
    emoji: '✅',
    title: '검증된 운영 성과',
    desc: '평가인증 A등급 달성과 20년 이상의 운영 경력으로 객관적으로 검증된 보육 품질을 자랑합니다.',
  },
  {
    emoji: '🌿',
    title: '체험 중심 커리큘럼',
    desc: '생태체험, 요리활동, 현장학습 등 오감을 자극하는 다양한 체험 활동으로 균형 잡힌 성장을 지원합니다.',
  },
  {
    emoji: '👨‍👩‍👧',
    title: '적응 지원 + 부모참여 문화',
    desc: '단계별 적응 프로그램과 열린어린이집 운영으로 아이와 부모 모두가 함께하는 보육 문화를 만들어 갑니다.',
  },
];

const facilityInfo = [
  { label: '기관명', value: SITE_CONFIG.name },
  { label: '개원일', value: '2006년' },
  { label: '주소', value: SITE_CONFIG.address },
  { label: '전화', value: SITE_CONFIG.phone },
  { label: '교직원', value: '원장 1명, 보육교사 8명, 조리사 1명' },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        badge="어린이집 소개"
        title="아이를 존중하는 따뜻한 보육"
        subtitle="해피키즈 어린이집의 교육 철학과 운영 방향을 소개합니다"
      />

      {/* 인사말 섹션 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-6">
                원장 인사말
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                해피키즈 어린이집은 2006년 개원 이래 아이들의 건강한 성장과 행복한 보육을 위해 최선을 다해왔습니다.
                저희는 아이 한 명 한 명을 소중히 여기며, 개별 특성에 맞는 세심한 보육을 제공합니다.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                부모님과 함께 성장하는 어린이집이 되기 위해 열린 소통과 투명한 운영을 원칙으로 삼고 있습니다.
                국가 공공형 어린이집으로서 높은 기준의 보육 서비스를 제공하며, 아이들이 매일 즐겁고 안전하게 지낼 수 있는 환경을 만들어 가겠습니다.
              </p>
              <blockquote className="border-l-4 border-primary bg-bg pl-6 py-4 italic text-dark">
                &quot;아이들의 작은 목소리에 귀 기울이고, 매일의 성장을 함께 기뻐하는 어린이집이 되겠습니다.&quot;
              </blockquote>
              <p className="text-sm text-muted mt-4 font-semibold">— 해피키즈 어린이집 원장</p>
            </div>
            <div className="bg-bg rounded-2xl h-64 flex items-center justify-center text-6xl">
              🏫
            </div>
          </div>
        </div>
      </section>

      {/* 보육 철학 및 가치 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>보육 철학</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              해피키즈가 소중히 여기는 가치
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {philosophies.map((item) => (
              <Card key={item.title} hover className="text-center">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <p className="text-base font-bold text-dark">{item.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 해피키즈가 특별한 이유 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
              해피키즈가 특별한 이유
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialReasons.map((item) => (
              <Card key={item.title} variant="highlight">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 시설 운영 현황 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
              시설 및 운영 현황
            </h2>
          </div>
          <Card>
            <dl className="divide-y divide-border-brand">
              {facilityInfo.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-4 first:pt-0 last:pb-0">
                  <dt className="text-sm font-bold text-muted w-28 shrink-0">{item.label}</dt>
                  <dd className="text-base font-semibold text-dark">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <CTABanner
            title="해피키즈 어린이집이 궁금하신가요?"
            primaryButtonText="방문 상담 예약"
            primaryButtonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}
