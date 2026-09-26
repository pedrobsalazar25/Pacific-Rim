import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

interface InteriorHeroProps {
  category: string;
  title: string;
  headlineAccent?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  image?: string;
  badgeText?: string;
  stats?: { label: string; value: string }[];
  children?: React.ReactNode;
}

export const InteriorHero: React.FC<InteriorHeroProps> = ({
  category,
  title,
  headlineAccent,
  description,
  breadcrumbs,
  image,
  badgeText,
  stats,
  children
}) => {
  return (
    <section className="relative bg-[#071B2D] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 border-b border-[#2F6F9F]/30 overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F6F9F]/10 blur-3xl pointer-events-none rounded-full" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Eyebrow, Title, Description */}
          <div className={image ? 'lg:col-span-7' : 'lg:col-span-9'}>
            {/* Category / Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#123A63]/60 border border-[#2F6F9F]/50 text-xs font-mono tracking-widest text-[#DCE8EF] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>{category}</span>
              {badgeText && (
                <>
                  <span className="text-white/20">|</span>
                  <span className="text-[#89B3D3]">{badgeText}</span>
                </>
              )}
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
              {title}
              {headlineAccent && (
                <span className="block text-[#89B3D3] font-light mt-1 text-2xl sm:text-3xl lg:text-4xl">
                  {headlineAccent}
                </span>
              )}
            </h1>

            {/* Description / Introduction */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              {description}
            </p>

            {/* Optional Stats Strip */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#2F6F9F]/20">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#0b243d]/60 border border-[#2F6F9F]/30 p-3.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-[#DCE8EF] font-mono">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {children}
          </div>

          {/* Right Column: Visual / Technical Artwork (Optional) */}
          {image && (
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#2F6F9F]/40 bg-[#0c263f] p-2 shadow-2xl overflow-hidden group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#071B2D] relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3 bg-[#071B2D]/90 border-t border-[#2F6F9F]/30 flex items-center justify-between text-xs font-mono text-[#DCE8EF]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>SYSTEM SPECIFICATION</span>
                  </span>
                  <span className="text-[#89B3D3]">PRDD ENG REF</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
