import React from 'react';
import { SELECTED_PROJECTS } from '../data/prddData';
import { Landmark } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="projects" className="relative bg-[#071B2D] text-white py-24 sm:py-32 lg:py-40 tech-grid-pattern border-t border-[#2F6F9F]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#DCE8EF] font-semibold mb-4">
            <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
            <span>SELECTED PROJECT EXPERIENCE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
            Complex Problems.{' '}
            <span className="text-[#89B3D3] block sm:inline">Real Industrial Environments.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            PRDD and its leadership have experience developing and implementing environmental solutions in demanding industrial and municipal environments.
          </p>
        </div>

        {/* Qualifier Bar */}
        <div className="border-t border-b border-[#2F6F9F]/20 py-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-[#DCE8EF] font-bold tracking-widest uppercase">
              SELECTED PROJECT EXPERIENCE
            </span>
          </div>
          <span className="text-[11px] text-slate-400 mt-1 sm:mt-0">
            Industrial &amp; Municipal Environments
          </span>
        </div>

        {/* Elegant Typographic Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SELECTED_PROJECTS.map((proj, idx) => (
            <div
              key={proj.name}
              className="p-6 sm:p-8 bg-[#0c263f] border border-[#2F6F9F]/25 hover:border-[#2F6F9F]/70 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-[#071B2D]"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#DCE8EF]/70 mb-4">
                  <span>EXP. 0{idx + 1}</span>
                  <span className="text-[#89B3D3]">
                    {proj.sector}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#DCE8EF] transition-colors tracking-tight">
                  {proj.name}
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                Selected Historical Engineering Experience
              </div>
            </div>
          ))}
        </div>

        {/* Explanatory Note with Approved Historical Disclaimer */}
        <div className="mt-12 p-6 bg-[#071B2D] border border-[#2F6F9F]/25 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2.5">
            <Landmark className="w-4 h-4 text-[#2F6F9F] shrink-0" />
            <span className="text-slate-300">
              The organizations shown represent selected historical PRDD project experience and should not be interpreted as current customer relationships or endorsements.
            </span>
          </div>
          <span className="text-slate-400 text-[11px] shrink-0">
            PRDD PROJECT EXPERIENCE
          </span>
        </div>
      </div>
    </section>
  );
};

