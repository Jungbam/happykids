import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionBadge from '@/components/ui/SectionBadge';
import Card from '@/components/ui/Card';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: '프로그램 안내 | 해피키즈 어린이집',
  description: '오감놀이, 체육, 영어, 생태체험 등 다양한 프로그램. 해피키즈의 하루 일과를 소개합니다.',
};

const dailySchedule = [
  { range: '07:30~09:00', emoji: '🌅', activity: '등원 및 자유놀이', bg: 'bg-[rgba(255,215,106,0.1)]' },
  { range: '09:00~09:30', emoji: '👋', activity: '아침 모임', bg: 'bg-[rgba(255,215,106,0.1)]' },
  { range: '09:30~11:00', emoji: '📚', activity: '오전 활동', bg: 'bg-[rgba(142,209,178,0.1)]' },
  { range: '11:00~12:00', emoji: '🌳', activity: '바깥놀이', bg: 'bg-[rgba(142,209,178,0.1)]' },
  { range: '12:00~13:00', emoji: '🍚', activity: '점심 및 양치', bg: 'bg-[rgba(142,209,178,0.1)]' },
  { range: '13:00~15:00', emoji: '😴', activity: '낮잠 및 휴식', bg: 'bg-[rgba(123,182,240,0.1)]' },
  { range: '15:00~15:30', emoji: '🍪', activity: '오후 간식', bg: 'bg-[rgba(123,182,240,0.1)]' },
  { range: '15:30~17:00', emoji: '🎨', activity: '오후 활동', bg: 'bg-[rgba(123,182,240,0.1)]' },
  { range: '17:00~19:30', emoji: '🏠', activity: '귀가 및 연장보육', bg: 'bg-[rgba(255,140,97,0.1)]' },
];

const specialActivities = [
  { emoji: '🖐️', title: '오감놀이', desc: '다양한 재료를 만지고 느끼며 감각 발달' },
  { emoji: '⚽', title: '체육활동', desc: '대근육 발달과 건강한 신체 성장' },
  { emoji: '🔤', title: '영어놀이', desc: '놀이를 통한 자연스러운 영어 노출' },
  { emoji: '🎵', title: '오르프 음악', desc: '리듬과 악기로 표현력과 창의력 향상' },
  { emoji: '🌿', title: '생태체험', desc: '자연 속에서 오감으로 배우는 생태교육' },
  { emoji: '🍳', title: '요리활동', desc: '직접 만들고 맛보며 오감 자극' },
];

const seasonalPrograms = [
  { emoji: '🌸', season: '봄', activities: '봄꽃 관찰, 텃밭 체험, 봄소풍' },
  { emoji: '☀️', season: '여름', activities: '물놀이, 키즈카페, 여름 현장학습' },
  { emoji: '🍂', season: '가을', activities: '단풍 산책, 고구마 캐기, 가을 운동회' },
  { emoji: '❄️', season: '겨울', activities: '뮤지컬 관람, 크리스마스 파티, 수료여행' },
];

const growthPoints = [
  { emoji: '🎨', title: '감각발달' },
  { emoji: '👫', title: '사회성' },
  { emoji: '💬', title: '표현력' },
  { emoji: '🧹', title: '생활습관' },
  { emoji: '🌱', title: '자연친화' },
];

export default function ProgramsPage() {
  return (
    <main>
      <PageHero
        badge="프로그램 안내"
        title="아이의 하루가 즐겁게 자라는 곳"
        subtitle="체계적인 보육과 다양한 체험으로 아이의 성장을 돕습니다"
      />

      {/* 하루 일과 타임라인 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>하루 일과</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              해피키즈의 하루
            </h2>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-2">
            {dailySchedule.map((item) => (
              <div
                key={item.range}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 ${item.bg}`}
              >
                <span className="font-mono font-bold text-dark w-32 shrink-0 text-sm">{item.range}</span>
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-base font-semibold text-dark">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 정규 및 특별활동 카드 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>특별 활동</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              균형 잡힌 교육 프로그램
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialActivities.map((item) => (
              <Card key={item.title} hover>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 연간 프로그램 시즌별 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>연간 프로그램</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              사계절 풍성한 체험 활동
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalPrograms.map((item) => (
              <Card key={item.season} variant="highlight">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-1">{item.season}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.activities}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 성장 포인트 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark">
              해피키즈에서 이렇게 자랍니다
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {growthPoints.map((item) => (
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
            title="프로그램에 대해 더 궁금하신가요?"
            primaryButtonText="입소 상담 문의"
            primaryButtonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}
