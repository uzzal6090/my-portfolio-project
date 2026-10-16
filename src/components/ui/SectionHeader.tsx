import React from 'react';

export interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  badgeIcon?: React.ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  badge,
  badgeIcon,
  align = 'left',
  as: Heading = 'h2',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center mx-auto' : 'text-left'} ${className}`.trim()}>
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200/80 rounded-full ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {badgeIcon && <span className="w-3.5 h-3.5 shrink-0 text-indigo-600">{badgeIcon}</span>}
          <span>{badge}</span>
        </div>
      )}

      <Heading className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
        {title}
      </Heading>

      {description && (
        <p className={`text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
