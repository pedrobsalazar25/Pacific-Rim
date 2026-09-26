import React from 'react';

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  children?: React.ReactNode;
}

export const SectionIntro: React.FC<SectionIntroProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'dark',
  children
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 ${
            isDark ? 'text-[#89B3D3]' : 'text-[#123A63]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${
          isDark ? 'text-white' : 'text-[#123A63]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#20262B]/80'
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
};
