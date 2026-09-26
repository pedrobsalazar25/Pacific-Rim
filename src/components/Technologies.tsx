import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { TECHNOLOGIES_DATA, TechnologyItem } from '../data/prddData';

interface TechnologiesProps {
  onSelectTechnology: (tech: TechnologyItem) => void;
}

export const Technologies: React.FC<TechnologiesProps> = ({ onSelectTechnology }) => {
  return (
    <section id="technologies" className="relative bg-[#071B2D] text-white py-24 sm:py-32 lg:py-40 tech-grid-pattern">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2F6F9F]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#DCE8EF] font-semibold mb-4">
            <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
            <span>OUR TECHNOLOGIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
            From Pollution Control{' '}
            <span className="text-[#89B3D3] block sm:inline">to Resource Recovery</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            PRDD engineers specialized chemical processes that convert hazardous or compliant-bound emission streams into marketable industrial compounds.
          </p>
        </div>

        {/* 4 Premium Technology Presentations - Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {TECHNOLOGIES_DATA.map((tech) => (
            <article
              key={tech.id}
              className="group relative bg-[#0c263f] border border-[#2F6F9F]/25 hover:border-[#2F6F9F]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-[#071B2D]/50"
            >
              {/* Image Frame with Aspect Ratio and Overlay */}
              <div className="relative w-full aspect-16/10 sm:aspect-16/9 overflow-hidden bg-[#071B2D]">
                <img
                  src={tech.image}
                  alt={tech.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c263f] via-[#0c263f]/40 to-transparent" />
                
                {/* Tech Index Number */}
                <div className="absolute top-4 left-4 font-mono text-xs font-bold text-[#DCE8EF] bg-[#071B2D]/85 backdrop-blur-sm px-3 py-1 border border-[#2F6F9F]/40">
                  REF. {tech.number}
                </div>

                {/* Primary Industrial Output Pill */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#DCE8EF]">
                  <span className="truncate flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    {tech.commercialOutputs[0]}
                  </span>
                  <span className="text-[#DCE8EF]/70 text-[10px]">COMMERCIAL GRADE</span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
                    TECHNOLOGY {tech.number}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#DCE8EF] transition-colors">
                    {tech.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {tech.summary}
                  </p>

                  {/* Highlights Bulleted cleanly with restrained green micro-bullets */}
                  <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
                    {tech.keyHighlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45] mt-1.5 shrink-0" />
                        <span className="line-clamp-2">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="mt-8 pt-4 border-t border-[#2F6F9F]/20 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectTechnology(tech)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase text-[#DCE8EF] group-hover:text-white transition-colors focus:outline-none focus-visible:underline cursor-pointer"
                  >
                    <span>EXPLORE TECHNOLOGY</span>
                    <ArrowRight className="w-4 h-4 text-[#2F6F9F] group-hover:text-[#DCE8EF] group-hover:translate-x-1 transition-all" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">
                    CHEM SPEC 0{tech.number}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
