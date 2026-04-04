import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'warm' | 'highlight';
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  variant = 'warm',
  className = '',
  hover = false,
}: CardProps) {
  const baseStyles =
    variant === 'highlight'
      ? 'bg-[rgba(255,215,106,0.12)] border border-[rgba(255,215,106,0.3)] rounded-3xl p-6 md:p-8'
      : 'bg-white border border-[#F0E8DC] rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(51,51,51,0.06)]';

  const hoverStyles = hover
    ? 'hover:shadow-[0_8px_32px_rgba(51,51,51,0.12)] hover:-translate-y-0.5 transition-all duration-200'
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`.trim()}>
      {children}
    </div>
  );
}
