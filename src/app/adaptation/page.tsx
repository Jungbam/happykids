import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionBadge from '@/components/ui/SectionBadge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: '적응 프로그램 | 해피키즈 어린이집',
  description: '5단계 맞춤 적응 프로그램으로 첫 등원이 안심되는 해피키즈 어린이집.',
};

const adaptationSteps = [
  {
    step: 1,
    dayRange: '1~2일차',
    emoji: '🤝',
    title: '보호자 동반 탐색 (30분)',
    desc: '부모님과 함께 교실을 둘러보고 환경을 탐색합니다',
  },
  {
    step: 2,
    dayRange: '3~5일차',
    emoji: '👋',
    title: '짧은 단독 참여 (1~2시간)',
    desc: '부모님과 잠시 떨어져 놀이에 참여해봅니다',
  },
  {
    step: 3,
    dayRange: '6~10일차',
    emoji: '🌅',
    title: '반일 적응 (오전 일과)',
    desc: '오전 일과에 참여하고 점심 전 귀가합니다',
  },
  {
    step: 4,
    dayRange: '11~15일차',
    emoji: '🍚',
    title: '점심 포함 귀가 (13:00)',
    desc: '친구들과 점심을 먹고 오후에 귀가합니다',
  },
  {
    step: 5,
    dayRange: '16일차~',
    emoji: '🎓',
    title: '정규 일과 전체 적응',
    desc: '하루 전체 일과에 참여하며 완전히 적응합니다',
  },
];

const parentGuides = [
  {
    emoji: '👋',
    title: '등하원 인사',
    desc: '밝은 인사로 아이에게 안정감을 전해주세요',
  },
  {
    emoji: '💝',
    title: '정서적 지지',
    desc: '어린이집에 대한 긍정적인 이야기를 해주세요',
  },
  {
    emoji: '📞',
    title: '담임교사 소통',
    desc: '걱정되는 점은 언제든 담임교사와 상담하세요',
  },
  {
    emoji: '🏠',
    title: '가정 내 지원',
    desc: '규칙적인 생활 리듬을 만들어주세요',
  },
];

export default function AdaptationPage() {
  return (
    <main>
      <PageHero
        badge="적응 프로그램"
        title="첫 등원이 안심되는 단계별 적응"
        subtitle="아이의 마음을 이해하고 천천히 적응할 수 있도록 돕습니다"
      />

      {/* 적응 프로그램 중요성 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-dark mb-6">
                왜 적응 프로그램이 필요한가요?
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                낯선 환경에 처음 오는 아이에게 어린이집은 설렘보다 불안이 클 수 있습니다.
                충분한 적응 기간 없이 급격한 환경 변화는 아이에게 정서적 스트레스를 줄 수 있어요.
                해피키즈는 아이의 발달 단계와 기질을 고려하여, 부모님과 함께하는 체계적인 단계별 적응 프로그램을 운영합니다.
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 py-4 bg-bg italic text-muted rounded-r-2xl">
                &quot;아이가 안정감을 느끼는 속도에 맞춰, 부모님과 함께 천천히 적응해갑니다.&quot;
              </blockquote>
            </div>
            <div className="bg-bg rounded-2xl h-64 flex items-center justify-center text-6xl">
              🤗
            </div>
          </div>
        </div>
      </section>

      {/* 5단계 적응 과정 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>단계별 적응</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              해피키즈의 5단계 적응 프로그램
            </h2>
          </div>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {adaptationSteps.map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-secondary text-white font-bold flex items-center justify-center shrink-0 mt-1">
                  {item.step}
                </div>
                <Card className="flex-1">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold bg-secondary/20 text-dark px-2 py-0.5 rounded-full">
                          {item.dayRange}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 부모님 협조 가이드 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>부모님 가이드</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              가정에서 이렇게 도와주세요
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {parentGuides.map((item) => (
              <Card key={item.title} hover>
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <Card variant="highlight" className="text-center">
            <h3 className="text-2xl font-extrabold text-dark mb-3">
              우리 아이 적응이 걱정되시나요?
            </h3>
            <p className="text-muted mb-6">
              개별 상담으로 아이의 성향에 맞는 적응 계획을 안내해드립니다
            </p>
            <Link
              href="/contact"
              className="bg-primary text-dark font-bold px-8 py-4 rounded-full inline-block hover:bg-primary/80 transition-colors duration-200"
            >
              적응 상담 신청하기
            </Link>
          </Card>
        </div>
      </section>
    </main>
  );
}
