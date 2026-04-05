import { SITE_CONFIG } from '@/constants/site';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 컬럼 1: 소개 */}
          <div>
            <p className="text-lg font-bold mb-3">🌱 해피키즈 어린이집</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              국가가 지원하고 부모가 신뢰하는 공공형 어린이집
            </p>
          </div>


          {/* 컬럼 2: 연락처 */}
          <div>
            <p className="text-base font-semibold mb-3">연락처</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              <li>{SITE_CONFIG.address}</li>
              <li>{SITE_CONFIG.phone}</li>
              <li>{SITE_CONFIG.hours}</li>
            </ul>
          </div>
        </div>

        {/* 하단 구분선 + 저작권 */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-300 text-sm">
          {SITE_CONFIG.copyright}
        </div>
      </div>
    </footer>
  );
}
