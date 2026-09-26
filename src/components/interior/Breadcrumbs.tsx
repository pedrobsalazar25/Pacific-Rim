import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center flex-wrap gap-2 text-xs font-mono tracking-wider ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight className="w-3 h-3 text-[#2F6F9F]/60 flex-shrink-0" />
            )}
            {isLast ? (
              <span className="text-[#DCE8EF] font-semibold truncate max-w-xs sm:max-w-md" aria-current="page">
                {item.label}
              </span>
            ) : item.onClick || item.href ? (
              <button
                type="button"
                onClick={item.onClick}
                className="text-[#89B3D3] hover:text-white transition-colors cursor-pointer focus:outline-none focus:underline"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-slate-400">{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
