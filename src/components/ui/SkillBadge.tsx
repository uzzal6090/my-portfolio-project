import React from 'react';

export type SkillBadgeVariant = 'default' | 'primary' | 'outline' | 'muted';
export type SkillBadgeSize = 'sm' | 'md';

export interface SkillBadgeProps {
  name: string;
  category?: string;
  icon?: React.ReactNode;
  variant?: SkillBadgeVariant;
  size?: SkillBadgeSize;
  className?: string;
}

const variantStyles: Record<SkillBadgeVariant, string> = {
  default:
    'bg-white text-slate-700 border-slate-200/90 shadow-2xs hover:border-slate-300 hover:text-slate-900',
  primary:
    'bg-indigo-50 text-indigo-700 border-indigo-200/80 hover:border-indigo-300',
  outline:
    'bg-transparent text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300',
  muted:
    'bg-slate-100/70 text-slate-600 border-slate-200/60',
};

const sizeStyles: Record<SkillBadgeSize, string> = {
  sm: 'text-xs px-2.5 py-1 gap-1.5 rounded-md font-normal',
  md: 'text-sm px-3.5 py-1.5 gap-2 rounded-lg font-medium',
};

export default function SkillBadge({
  name,
  icon,
  variant = 'default',
  size = 'md',
  className = '',
}: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center border transition-colors select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
    >
      {icon && <span className="shrink-0 text-slate-500">{icon}</span>}
      <span>{name}</span>
    </span>
  );
}
