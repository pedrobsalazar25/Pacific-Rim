import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-xs font-mono ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight className="w-3.5 h-3.5 text-current opacity-40 shrink-0" aria-hidden="true" />
            )}
            {item.onClick && !isLast ? (
              <button
                type="button"
                onClick={item.onClick}
                className="hover:underline opacity-80 hover:opacity-100 transition-opacity cursor-pointer text-left"
              >
                {item.label}
              </button>
            ) : (
              <span className={isLast ? 'opacity-100 font-semibold text-current' : 'opacity-80 text-current'}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
