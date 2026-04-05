import type { Metadata } from 'next';
import { Gaegu, Gowun_Dodum } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCallButton from '@/components/ui/MobileCallButton';
import KakaoShareButton from '@/components/ui/KakaoShareButton';
import BgmToggle from '@/components/ui/BgmToggle';

const gaegu = Gaegu({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
});

const gowunDodum = Gowun_Dodum({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-body',
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
    <html lang="ko" className={`${gaegu.variable} ${gowunDodum.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        <Header />
        {children}
        <Footer />
        <KakaoShareButton />
        <BgmToggle />
        <MobileCallButton />
      </body>
    </html>
  );
}
