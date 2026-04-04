import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
}

export default function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="bg-[rgba(255,215,106,0.2)] border border-[rgba(255,215,106,0.5)] text-dark text-sm font-semibold px-4 py-1.5 rounded-full inline-block">
      {children}
    </span>
  );
}
