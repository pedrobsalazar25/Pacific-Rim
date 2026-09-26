import React from 'react';

interface ContentSplitProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body: string | React.ReactNode;
  points?: string[];
  reverse?: boolean;
  theme?: 'dark' | 'light';
  sideContent: React.ReactNode;
}

export const ContentSplit: React.FC<ContentSplitProps> = ({
  eyebrow,
  title,
  subtitle,
  body,
  points,
  reverse = false,
  theme = 'dark',
  sideContent
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
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
        <h3
          className={`font-display text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${
            isDark ? 'text-white' : 'text-[#123A63]'
          }`}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            className={`text-sm sm:text-base font-medium mb-4 ${
              isDark ? 'text-[#DCE8EF]' : 'text-[#2F6F9F]'
            }`}
          >
            {subtitle}
          </p>
        )}
        <div
          className={`text-sm sm:text-base leading-relaxed space-y-4 mb-6 ${
            isDark ? 'text-slate-300' : 'text-[#20262B]'
          }`}
        >
          {typeof body === 'string' ? <p>{body}</p> : body}
        </div>

        {points && points.length > 0 && (
          <ul className="space-y-2.5 pt-2 border-t border-white/10">
            {points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45] mt-1.5 flex-shrink-0" />
                <span className={isDark ? 'text-slate-300' : 'text-[#20262B]'}>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        {sideContent}
      </div>
    </div>
  );
};
