import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionBadge from '@/components/ui/SectionBadge';
import Card from '@/components/ui/Card';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: '부모와의 소통 | 해피키즈 어린이집',
  description: '알림장, 상담, 부모참여수업 등 열린 소통으로 함께 키우는 해피키즈 어린이집.',
};

const parentEvents = [
  { emoji: '🏃', title: '가족운동회', desc: '온 가족이 함께 뛰고 웃는 연례 행사' },
  { emoji: '📖', title: '부모참여수업', desc: '교실에서 아이와 함께하는 특별한 시간' },
  { emoji: '💬', title: '정기 상담', desc: '담임교사와 1:1 상담으로 아이의 성장 공유' },
  { emoji: '📋', title: '운영위원회', desc: '어린이집 운영에 부모님의 목소리를 반영' },
  { emoji: '🏠', title: '열린보육', desc: '언제든 방문하여 보육 환경을 확인' },
];

const communicationChannels = [
  { emoji: '📱', title: '알림장', desc: '매일 아이의 하루를 사진과 함께 전달' },
  { emoji: '📞', title: '상담 예약', desc: '사전 예약으로 편리한 시간에 상담' },
  { emoji: '🚗', title: '등하원 안내', desc: '등하원 시 당일 특이사항 구두 전달' },
  { emoji: '🚨', title: '긴급 연락', desc: '긴급 상황 시 즉시 연락드립니다' },
];

const cooperationItems = [
  {
    emoji: '🏥',
    title: '건강·투약',
    desc: '투약 시 투약의뢰서를 작성해주세요. 전염성 질환 시 가정보육을 부탁드립니다.',
  },
  {
    emoji: '🚗',
    title: '귀가 동의',
    desc: '등록된 보호자 외 귀가 시 사전 동의서가 필요합니다.',
  },
  {
    emoji: '🎉',
    title: '행사 참여',
    desc: '부모참여행사에 적극적인 참여를 부탁드립니다.',
  },
  {
    emoji: '🛡️',
    title: '안전 협조',
    desc: '등하원 시 안전 수칙을 준수해주세요.',
  },
];

export default function CommunicationPage() {
  return (
    <main>
      <PageHero
        badge="부모와의 소통"
        title="함께 키우는 따뜻한 보육"
        subtitle="부모님과의 소통을 가장 소중히 여기는 해피키즈입니다"
      />

      {/* 부모참여 문화 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>부모 참여</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              부모님과 함께하는 행사
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parentEvents.map((item) => (
              <Card key={item.title} hover>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 소통 방식 안내 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>소통 채널</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              다양한 소통 채널을 운영합니다
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {communicationChannels.map((item) => (
              <Card key={item.title}>
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 소통 약속 배너 */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="bg-secondary rounded-3xl py-12 px-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              해피키즈의 소통 약속
            </h3>
            <p className="text-white/90 leading-relaxed">
              모든 문의에 24시간 내 답변을 원칙으로 합니다. 아이의 하루를 투명하게 공유합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 부모 협조사항 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <SectionBadge>협조사항</SectionBadge>
            <h2 className="text-2xl md:text-4xl font-extrabold text-dark mt-4">
              원활한 보육을 위한 부모님 협조사항
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cooperationItems.map((item) => (
              <Card key={item.title}>
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <CTABanner
            title="소통에 대해 더 알고 싶으신가요?"
            primaryButtonText="입소 상담 문의"
            primaryButtonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}
