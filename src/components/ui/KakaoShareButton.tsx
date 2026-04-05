'use client';

import { KAKAO_APP_KEY } from '@/components/contact/KakaoMap';
import { SITE_CONFIG } from '@/constants/site';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Kakao?: any;
  }
}

export default function KakaoShareButton() {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error' | 'no-key'>('loading');

  useEffect(() => {
    if (!KAKAO_APP_KEY) {
      setStatus('no-key');
      return;
    }

    if (window.Kakao?.isInitialized?.()) {
      setStatus('ready');
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-kakao-sdk]');
    if (existing) {
      existing.addEventListener('load', () => initKakao());
      initKakao();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    script.async = true;
    script.dataset.kakaoSdk = 'true';
    script.onload = () => initKakao();
    script.onerror = () => setStatus('error');
    document.head.appendChild(script);

    function initKakao() {
      if (!window.Kakao) {
        setStatus('error');
        return;
      }
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_APP_KEY);
      }
      setStatus('ready');
    }
  }, []);

  const handleShare = () => {
    if (status !== 'ready' || !window.Kakao) {
      return;
    }
    const url = SITE_CONFIG.shareUrl;
    const shareOrigin = new URL("https://happykids-phi.vercel.app/contact").origin;
    const imageUrl = `${shareOrigin}/og/happykids-og.png`;

    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: SITE_CONFIG.shareTitle,
          description: SITE_CONFIG.shareDescription,
          imageUrl,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: '웹에서 보기',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    } catch {
      setStatus('error');
    }
  };

  const isDisabled = status !== 'ready';

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`fixed left-4 bottom-5 z-50 flex items-center gap-2 px-5 py-3.5 rounded-full shadow-lg transition-all duration-200 bg-[#FEE500] text-[#3C1E1E] font-bold ${isDisabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-xl hover:-translate-y-0.5'
        }`}
      aria-label="카카오톡으로 페이지 공유"
      disabled={isDisabled}
    >
      <span aria-hidden="true" className="text-lg">
        💬
      </span>
      <span className="text-sm">카카오 공유</span>
    </button>
  );
}
