import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCallButton from '@/components/ui/MobileCallButton';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: '해피키즈 어린이집 | 안양시 만안구 공공형 어린이집',
  description: '국가가 지원하고 부모가 신뢰하는 공공형 어린이집. 아이의 하루가 즐겁고 안전하게 자라는 해피키즈 어린이집입니다.',
  keywords: ['안양 어린이집', '만안구 어린이집', '공공형 어린이집', '안양시 영아 어린이집'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="font-[family-name:var(--font-noto-sans-kr)] antialiased">
        <Header />
        {children}
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
