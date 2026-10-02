import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface RelatedItem {
  category?: string;
  title: string;
  description: string;
  route: string;
  tag?: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
  onNavigate: (route: string) => void;
  title?: string;
  subtitle?: string;
}

export const RelatedContent: React.FC<RelatedContentProps> = ({
  items,
  onNavigate,
  title = 'Related Technologies',
  subtitle,
}) => {
  return (
    <div className="mt-16">
      {subtitle && (
        <div className="text-xs font-mono text-[#2F6F9F] uppercase tracking-wider mb-2">
          {subtitle}
        </div>
      )}
      {title && (
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-8">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate(item.route)}
            className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#0084CD] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              {item.tag && (
                <div className="text-[11px] font-mono text-[#2F6F9F] uppercase mb-2">
                  {item.tag}
                </div>
              )}
              <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                {item.description}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
