import React from 'react';
import { Quote } from 'lucide-react';

interface QuoteBlockProps {
  quote: string;
  author: string;
  authorTitle?: string;
  authorAffiliation?: string;
  theme?: 'dark' | 'light';
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({
  quote,
  author,
  authorTitle,
  authorAffiliation = 'Clean Scrub Technologies',
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative p-8 sm:p-10 border my-8 ${
        isDark
          ? 'bg-[#0b243d] border-[#2F6F9F]/40 text-white shadow-xl'
          : 'bg-[#F7F7F3] border-[#2F6F9F]/30 text-[#20262B] shadow-md'
      }`}
    >
      <Quote className="w-10 h-10 text-[#2F6F9F]/40 mb-4" />
      <blockquote className="font-display text-lg sm:text-xl md:text-2xl font-medium italic leading-relaxed mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-2 h-2 rounded-full bg-[#6D9F45]" />
        <div>
          <div className="font-mono text-sm font-bold text-[#DCE8EF]">
            {author}
          </div>
          {authorTitle && (
            <div className="text-xs font-mono text-[#89B3D3]">
              {authorTitle} · {authorAffiliation}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
