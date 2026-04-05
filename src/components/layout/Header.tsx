'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_ITEMS } from '@/constants/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 h-16 border-b border-[#F0E8DC]"
        style={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-6xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="text-lg font-bold text-[#333333] hover:text-primary transition-colors"
          >
            🌱 해피키즈
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href)
                    ? 'text-primary font-bold border-b-2 border-primary pb-0.5 text-sm transition-colors'
                    : 'text-[#333333] hover:text-primary text-sm transition-colors pb-0.5'
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 햄버거 버튼 (모바일) */}
          <button
            type="button"
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span
              className={`block w-6 h-0.5 bg-[#333333] transition-transform duration-300 ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#333333] transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#333333] transition-transform duration-300 ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* 모바일 풀스크린 메뉴 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col"
          style={{ top: '64px' }}
        >
          <nav className="flex flex-col px-8 py-6 gap-0">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`py-4 text-base border-b border-[#F0E8DC] transition-colors ${
                  isActive(item.href)
                    ? 'text-primary font-bold'
                    : 'text-[#333333] hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
