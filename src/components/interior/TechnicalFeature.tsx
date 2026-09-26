import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TechnicalFeatureProps {
  icon?: LucideIcon;
  badge?: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  theme?: 'dark' | 'light';
}

export const TechnicalFeature: React.FC<TechnicalFeatureProps> = ({
  icon: Icon,
  badge,
  title,
  description,
  metric,
  metricLabel,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative p-6 sm:p-7 border transition-all duration-300 group hover:-translate-y-1 ${
        isDark
          ? 'bg-[#0c263f] border-[#2F6F9F]/30 hover:border-[#2F6F9F]/70 shadow-lg shadow-[#071B2D]/50'
          : 'bg-white border-[#DCE8EF] hover:border-[#2F6F9F]/50 shadow-md shadow-slate-200/50'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        {Icon ? (
          <div
            className={`w-10 h-10 flex items-center justify-center border ${
              isDark
                ? 'bg-[#123A63] border-[#2F6F9F]/50 text-[#DCE8EF] group-hover:bg-[#2F6F9F] group-hover:text-white'
                : 'bg-[#DCE8EF]/50 border-[#2F6F9F]/30 text-[#123A63] group-hover:bg-[#123A63] group-hover:text-white'
            } transition-colors`}
          >
            <Icon className="w-5 h-5" />
          </div>
        ) : badge ? (
          <span
            className={`text-xs font-mono font-bold px-2.5 py-1 border ${
              isDark
                ? 'bg-[#123A63] border-[#2F6F9F]/40 text-[#DCE8EF]'
                : 'bg-[#DCE8EF] border-[#2F6F9F]/30 text-[#123A63]'
            }`}
          >
            {badge}
          </span>
        ) : null}

        {metric && (
          <div className="text-right">
            <span
              className={`font-mono text-xl sm:text-2xl font-bold tracking-tight ${
                isDark ? 'text-[#DCE8EF]' : 'text-[#123A63]'
              }`}
            >
              {metric}
            </span>
            {metricLabel && (
              <span
                className={`block text-[10px] font-mono uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {metricLabel}
              </span>
            )}
          </div>
        )}
      </div>

      <h4
        className={`font-display text-lg font-bold mb-2 ${
          isDark ? 'text-white group-hover:text-[#DCE8EF]' : 'text-[#123A63]'
        } transition-colors`}
      >
        {title}
      </h4>

      <p
        className={`text-sm leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-[#20262B]'
        }`}
      >
        {description}
      </p>
    </div>
  );
};
