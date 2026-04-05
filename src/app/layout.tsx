import type { Metadata } from 'next';
import { Gaegu, Gowun_Dodum } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCallButton from '@/components/ui/MobileCallButton';
import KakaoShareButton from '@/components/ui/KakaoShareButton';
import BgmToggle from '@/components/ui/BgmToggle';
import { SITE_CONFIG } from '@/constants/site';

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

const ogImageUrl = `${SITE_CONFIG.siteUrl}${SITE_CONFIG.ogImage}`;

export const metadata: Metadata = {
  title: '해피키즈 어린이집 | 안양시 만안구 공공형 어린이집',
  description: '국가가 지원하고 부모가 신뢰하는 공공형 어린이집. 아이의 하루가 즐겁고 안전하게 자라는 해피키즈 어린이집입니다.',
  keywords: ['안양 어린이집', '만안구 어린이집', '공공형 어린이집', '안양시 영아 어린이집'],
  openGraph: {
    type: 'website',
    url: SITE_CONFIG.siteUrl,
    title: SITE_CONFIG.shareTitle,
    description: SITE_CONFIG.shareDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.shareTitle,
    description: SITE_CONFIG.shareDescription,
    images: [ogImageUrl],
  },
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
