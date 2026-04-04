import Link from 'next/link';
import SectionBadge from '@/components/ui/SectionBadge';
import Card from '@/components/ui/Card';
import CTABanner from '@/components/ui/CTABanner';

const stats = [
  { value: '20년+', label: '운영 경력' },
  { value: '3회', label: '공공형 재선정' },
  { value: 'A등급', label: '평가인증' },
  { value: '10건+', label: '다수 수상' },
];

const coreValues = [
  {
    emoji: '🏛️',
    title: '공공형 신뢰',
    desc: '국가 지원 공공형 어린이집으로 검증된 운영 시스템과 투명한 보육 서비스를 제공합니다.',
  },
  {
    emoji: '👩‍🏫',
    title: '전문 교사',
    desc: '경험 풍부한 전문 보육교사가 아이의 일상을 세심하게 돌보고 성장을 함께합니다.',
  },
  {
    emoji: '🌿',
    title: '체험 중심',
    desc: '자연친화 체험과 다양한 활동으로 오감 발달과 창의력을 키워나갑니다.',
  },
];

const bentoFeatures = [
  {
    emoji: '🛡️',
    title: '신뢰 운영',
    desc: '20년 운영 경험과 공공형 인증으로 검증된 안심 보육',
  },
  {
    emoji: '🌱',
    title: '체험 보육',
    desc: '생태체험, 현장학습, 요리활동 등 다양한 체험 중심 교육',
  },
  {
    emoji: '🤝',
    title: '적응 지원',
    desc: '신입 원아를 위한 단계별 적응 프로그램으로 편안한 시작',
  },
  {
    emoji: '📢',
    title: '부모 소통',
    desc: '열린어린이집 운영으로 언제나 열려 있는 부모 참여 문화',
  },
];

const schedule = [
  { time: '07:30', emoji: '🌅', activity: '등원' },
  { time: '09:00', emoji: '🍎', activity: '오전간식' },
  { time: '09:30', emoji: '📚', activity: '오전활동' },
  { time: '11:00', emoji: '🌳', activity: '바깥놀이' },
  { time: '12:00', emoji: '🍚', activity: '점심' },
  { time: '13:00', emoji: '😴', activity: '낮잠' },
  { time: '15:00', emoji: '🍪', activity: '오후간식' },
  { time: '17:00', emoji: '🏠', activity: '하원' },
];

const programs = [
  { emoji: '🌱', title: '생태체험' },
  { emoji: '🚌', title: '현장학습' },
  { emoji: '🍳', title: '요리활동' },
  { emoji: '👨‍👩‍👧', title: '부모참여행사' },
  { emoji: '🎭', title: '뮤지컬관람' },
  { emoji: '💦', title: '물놀이' },
];

const safetyInfo = [
  { emoji: '⏰', title: '운영시간', desc: '07:30~19:30 운영' },
  { emoji: '🌙', title: '연장보육', desc: '연장보육 가능' },
  { emoji: '📋', title: '입소준비', desc: '간편 안내 제공' },
  { emoji: '🤝', title: '적응프로그램', desc: '단계별 적응 지원' },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero 섹션 */}
      <section className="bg-linear-to-b from-[#FFF3E0] to-bg py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <SectionBadge>안양 만안구 공공형 어린이집</SectionBadge>
          <h1 className="text-3xl md:text-5xl font-extrabold text-dark mt-6 leading-tight">
            아이에게는 편안한 하루,<br />부모에게는 안심되는 선택
          </h1>
          <p className="text-lg text-muted mt-4">
            국가가 지원하고 부모가 신뢰하는 해피키즈 어린이집입니다
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              href="/contact"
              className="bg-primary text-dark px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity duration-200 text-center"
            >
              입소 상담 문의
            </Link>
            <Link
              href="/about"
              className="border-2 border-dark text-dark px-8 py-4 rounded-full font-bold hover:bg-dark hover:text-white transition-colors duration-200 text-center"
            >
              어린이집 소개
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-[0_4px_24px_rgba(51,51,51,0.06)]">
                <p className="text-2xl font-bold text-dark">{stat.value}</p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 핵심 가치 섹션 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>해피키즈의 가치</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              아이의 성장을 위한 세 가지 약속
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((item) => (
              <Card key={item.title} hover>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 특징 Bento Grid 섹션 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>해피키즈가 특별한 이유</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              믿고 맡길 수 있는 네 가지 이유
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bentoFeatures.map((item) => (
              <Card key={item.title} variant="highlight">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 하루 일과 미리보기 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>하루 일과</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              해피키즈의 하루를 소개합니다
            </h2>
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
              {schedule.map((block) => (
                <Card key={block.time} className="w-40 shrink-0 text-center">
                  <p className="text-xs font-bold text-muted mb-2">{block.time}</p>
                  <div className="text-3xl mb-2">{block.emoji}</div>
                  <p className="text-sm font-semibold text-dark">{block.activity}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 월별 프로그램 하이라이트 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
              풍부한 체험으로 성장하는 아이들
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {programs.map((item) => (
              <Card key={item.title} hover className="text-center">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <p className="text-base font-semibold text-dark">{item.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 학부모 안심 정보 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
              부모님이 궁금해하시는 것들
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {safetyInfo.map((item) => (
              <Card key={item.title} hover>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{item.emoji}</span>
                  <div>
                    <h3 className="text-lg font-bold text-dark">{item.title}</h3>
                    <p className="text-sm text-muted mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <CTABanner
            title="우리 아이의 첫 어린이집, 해피키즈에서 안심하고 시작하세요"
            primaryButtonText="입소 상담 문의"
            primaryButtonHref="/contact"
            secondaryButtonText="오시는 길"
            secondaryButtonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}
