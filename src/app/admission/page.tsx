import PageHero from '@/components/ui/PageHero';
import SectionBadge from '@/components/ui/SectionBadge';
import Card from '@/components/ui/Card';
import CTABanner from '@/components/ui/CTABanner';

const operationInfo = [
  { emoji: '⏰', title: '기본보육', desc: '평일 07:30 ~ 16:00' },
  { emoji: '🌙', title: '연장보육', desc: '16:00 ~ 19:30 (신청제)' },
  { emoji: '📅', title: '토요보육', desc: '별도 신청 시 운영 (격주)' },
  { emoji: '🏖️', title: '휴원 안내', desc: '법정 공휴일, 여름/겨울 가정학습 기간' },
];

const admissionSteps = [
  { emoji: '📞', label: '상담 문의' },
  { emoji: '📋', label: '서류 제출' },
  { emoji: '✅', label: '입소 결정' },
  { emoji: '🤝', label: '적응 시작' },
];

const checklist = [
  { emoji: '✅', text: '건강검진 결과서' },
  { emoji: '✅', text: '예방접종 증명서' },
  { emoji: '✅', text: '주민등록등본' },
  { emoji: '✅', text: '통장 사본' },
  { emoji: '✅', text: '낮잠 이불 세트' },
  { emoji: '✅', text: '여벌 옷 2벌' },
  { emoji: '✅', text: '개인 수건' },
  { emoji: '✅', text: '실내화' },
  { emoji: '✅', text: '치약·칫솔 세트' },
  { emoji: '✅', text: '물티슈' },
  { emoji: '✅', text: '기저귀 (해당 시)' },
];

const tuitionTable = [
  { age: '만 0세', support: '정부지원' },
  { age: '만 1세', support: '정부지원' },
  { age: '만 2세', support: '정부지원' },
  { age: '만 3~5세', support: '정부지원' },
];

export default function AdmissionPage() {
  return (
    <main>
      <PageHero
        badge="입소 안내"
        title="입소 준비, 한눈에 확인하세요"
        subtitle="해피키즈 입소에 필요한 모든 정보를 안내해드립니다"
      />

      {/* 운영 정보 카드 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>운영 정보</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              운영시간 및 보육 안내
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {operationInfo.map((item) => (
              <Card key={item.title}>
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 입소 신청 절차 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>입소 절차</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              간편한 4단계 입소 절차
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {admissionSteps.map((step, idx) => (
              <div key={step.label} className="contents">
                <Card className="w-full md:w-48 text-center">
                  <div className="text-4xl mb-3">{step.emoji}</div>
                  <p className="text-base font-bold text-dark">{step.label}</p>
                  <p className="text-xs text-muted mt-1">{idx + 1}단계</p>
                </Card>
                {idx < admissionSteps.length - 1 && (
                  <span className="hidden md:block text-2xl text-muted">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 준비물 체크리스트 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>준비물</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              입소 시 준비물 안내
            </h2>
          </div>
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {checklist.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl shrink-0">{item.emoji}</span>
                  <span className="text-base text-dark font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* 보육료 안내 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>보육료</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              보육료 및 필요경비
            </h2>
          </div>
          <Card>
            <p className="text-muted mb-6 text-center">
              정부 보육료 지원으로 부모 부담을 최소화합니다
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-brand">
                    <th className="text-left py-3 px-4 font-bold text-dark">연령</th>
                    <th className="text-left py-3 px-4 font-bold text-dark">보육료 지원</th>
                  </tr>
                </thead>
                <tbody>
                  {tuitionTable.map((row) => (
                    <tr key={row.age} className="border-b border-border-brand last:border-0">
                      <td className="py-3 px-4 font-medium text-dark">{row.age}</td>
                      <td className="py-3 px-4">
                        <span className="bg-secondary/20 text-dark text-xs font-semibold px-3 py-1 rounded-full">
                          {row.support}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-4 text-center">
              필요경비는 연 1회 부모 동의 후 집행됩니다
            </p>
          </Card>
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <CTABanner
            title="입소에 대해 더 궁금하신 점이 있으신가요?"
            primaryButtonText="입소 상담 문의"
            primaryButtonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}
