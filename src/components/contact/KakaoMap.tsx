'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  address?: string;
  latitude?: number;
  longitude?: number;
  level?: number;
  markerTitle?: string;
}

export const KAKAO_APP_KEY = 'c8aa7250e5ebd0029a147b1d90e8f751';

export default function KakaoMap({
  address,
  latitude = 37.3943,
  longitude = 126.9268,
  level = 3,
  markerTitle = '해피키즈 어린이집',
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error' | 'no-key'>('loading');

  useEffect(() => {
    if (!KAKAO_APP_KEY) {
      setStatus('no-key');
      return;
    }

    if (window.kakao?.maps?.LatLng) {
      createMap();
      return;
    }

    const existing = document.querySelector('script[src*="dapi.kakao.com"]');
    if (existing) {
      // 스크립트는 있지만 아직 maps.load 전일 수 있음
      const waitAndInit = () => {
        if (window.kakao?.maps) {
          window.kakao.maps.load(() => createMap());
        } else {
          existing.addEventListener('load', () => {
            window.kakao.maps.load(() => createMap());
          });
        }
      };
      waitAndInit();
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false&libraries=services`;
    script.onload = () => {
      window.kakao.maps.load(() => createMap());
    };
    script.onerror = () => setStatus('error');
    document.head.appendChild(script);

    function createMap() {
      if (!mapRef.current || !window.kakao?.maps) {
        setStatus('error');
        return;
      }

      const fallbackCenter = new window.kakao.maps.LatLng(latitude, longitude);
      const map = new window.kakao.maps.Map(mapRef.current, { center: fallbackCenter, level });

      const marker = new window.kakao.maps.Marker();
      marker.setMap(map);

      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:13px;font-weight:bold;">${markerTitle}</div>`,
      });

      const zoomControl = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      const applyPosition = (lat: number, lng: number) => {
        const center = new window.kakao.maps.LatLng(lat, lng);
        map.setCenter(center);
        marker.setPosition(center);
        infowindow.open(map, marker);
        setStatus('ready');
      };

      if (address && window.kakao.maps.services) {
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (result: any[], status: string) => {
          if (status === window.kakao.maps.services.Status.OK && result[0]) {
            applyPosition(Number(result[0].y), Number(result[0].x));
          } else {
            applyPosition(latitude, longitude);
          }
        });
        return;
      }

      applyPosition(latitude, longitude);
    }
  }, [address, latitude, longitude, level, markerTitle]);

  if (status === 'no-key') {
    return (
      <div className="bg-border-brand rounded-2xl h-[300px] flex flex-col items-center justify-center gap-2">
        <span className="text-5xl">📍</span>
        <p className="text-dark font-bold text-lg">지도 영역</p>
        <p className="text-muted text-sm">지도 API 키가 설정되지 않았습니다</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="bg-border-brand rounded-2xl h-[300px] flex flex-col items-center justify-center gap-2">
        <span className="text-5xl">📍</span>
        <p className="text-dark font-bold text-lg">지도 영역</p>
        <p className="text-muted text-sm">카카오맵 로드에 실패했습니다</p>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl h-[300px] w-full overflow-hidden bg-border-brand">
      {status === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
          <span className="text-3xl animate-pulse">📍</span>
          <p className="text-muted text-sm">지도를 불러오는 중...</p>
        </div>
      )}
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
