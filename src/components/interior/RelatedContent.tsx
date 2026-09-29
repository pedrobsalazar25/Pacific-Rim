import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface RelatedItem {
  category: string;
  title: string;
  description: string;
  route: string;
  tag?: string;
}

interface RelatedContentProps {
  title?: string;
  items: RelatedItem[];
  onNavigate: (route: string) => void;
  theme?: 'dark' | 'light';
}

export const RelatedContent: React.FC<RelatedContentProps> = ({
  title = 'RELATED TECHNOLOGIES & CAPABILITIES',
  items,
  onNavigate,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';

  return (
    <section className="pt-12 sm:pt-16 border-t border-[#2F6F9F]/20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
          <span>{title}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate(item.route)}
            className={`p-6 border transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
              isDark
                ? 'bg-[#0c263f] border-[#2F6F9F]/30 hover:border-[#2F6F9F] hover:-translate-y-0.5 shadow-lg'
                : 'bg-white border-[#DCE8EF] hover:border-[#2F6F9F] hover:-translate-y-0.5 shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#89B3D3] mb-2">
                <span>{item.category}</span>
                {item.tag && (
                  <span className="px-2 py-0.5 bg-[#123A63] border border-[#2F6F9F]/40 text-[#DCE8EF]">
                    {item.tag}
                  </span>
                )}
              </div>

              <h4
                className={`font-display text-lg font-bold tracking-tight mb-2 group-hover:text-[#DCE8EF] transition-colors ${
                  isDark ? 'text-white' : 'text-[#123A63]'
                }`}
              >
                {item.title}
              </h4>

              <p
                className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  isDark ? 'text-slate-300' : 'text-[#20262B]'
                }`}
              >
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#89B3D3] group-hover:text-white">
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F] group-hover:text-[#DCE8EF] group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
