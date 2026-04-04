import Link from 'next/link';

const navItems = [
  { label: '홈', href: '/' },
  { label: '어린이집 소개', href: '/about' },
  { label: '연혁·수상', href: '/history' },
  { label: '프로그램', href: '/programs' },
  { label: '적응 프로그램', href: '/adaptation' },
  { label: '입소 안내', href: '/admission' },
  { label: '부모와의 소통', href: '/communication' },
  { label: '오시는 길', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 컬럼 1: 소개 */}
          <div>
            <p className="text-lg font-bold mb-3">🌱 해피키즈 어린이집</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              국가가 지원하고 부모가 신뢰하는 공공형 어린이집
            </p>
          </div>

          {/* 컬럼 2: 바로가기 */}
          <div>
            <p className="text-base font-semibold mb-3">바로가기</p>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 컬럼 3: 연락처 */}
          <div>
            <p className="text-base font-semibold mb-3">연락처</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>경기도 안양시 만안구</li>
              <li>031-XXX-XXXX</li>
              <li>평일 07:30~19:30</li>
            </ul>
          </div>
        </div>

        {/* 하단 구분선 + 저작권 */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          &copy; 2025 해피키즈 어린이집. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
