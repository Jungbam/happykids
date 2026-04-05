export const SITE_CONFIG = {
  name: '해피키즈 어린이집',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  shareTitle: '해피키즈',
  shareDescription: '행복한 아이들을 만드는 공간',
  ogImage: '/og/happykids-og.svg',
  phone: '031-000-0000',
  address: '경기도 안양시 만안구 (상세주소)',
  hours: '평일 07:30 ~ 19:30',
  email: '',
  copyright: `© ${new Date().getFullYear()} 해피키즈 어린이집. All rights reserved.`,
} as const;
