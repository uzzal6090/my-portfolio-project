import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 shadow-xs border border-transparent',
  secondary:
    'bg-white text-slate-800 hover:bg-slate-50 active:bg-slate-100 border border-slate-200/90 shadow-2xs',
  outline:
    'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 border border-slate-300',
  ghost:
    'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 border border-transparent',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-lg',
  md: 'text-sm px-4 py-2 gap-2 rounded-xl',
  lg: 'text-base px-5 py-2.5 gap-2.5 rounded-xl font-semibold',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...buttonProps
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-150 select-none cursor-pointer ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ' +
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  // If href is provided, render appropriate link
  if (href && !disabled) {
    const isExt = isExternal ?? (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:'));

    if (isExt) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={buttonProps.type || 'button'}
      disabled={disabled}
      className={combinedClasses}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
