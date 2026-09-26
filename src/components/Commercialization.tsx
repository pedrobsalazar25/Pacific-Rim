import React from 'react';
import { COMMERCIALIZATION_STEPS } from '../data/prddData';
import { ArrowRight, CheckCircle2, ChevronRight, Workflow } from 'lucide-react';

interface CommercializationProps {
  onDiscussProject: () => void;
}

export const Commercialization: React.FC<CommercializationProps> = ({ onDiscussProject }) => {
  return (
    <section id="commercialization" className="relative bg-[#071B2D] text-white py-24 sm:py-32 lg:py-40 tech-grid-pattern border-t border-[#2F6F9F]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#DCE8EF] font-semibold mb-4">
            <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
            <span>FROM INVENTION TO IMPLEMENTATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
            Technology Designed{' '}
            <span className="text-[#89B3D3] block sm:inline">to Leave the Laboratory.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            PRDD develops environmental technologies designed for commercial implementation and practical industrial deployment.
          </p>
        </div>

        {/* Commercialization Process Pathway */}
        {/* Desktop: Horizontal layout with clear directional flow */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative mb-16">
          {/* Subtle connecting rail */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#2F6F9F]/30 -translate-y-8 z-0 pointer-events-none" />

          {COMMERCIALIZATION_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative z-10 bg-[#0c263f] border border-[#2F6F9F]/25 hover:border-[#2F6F9F]/70 p-6 flex flex-col justify-between group transition-all duration-300 shadow-lg shadow-[#071B2D]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-7 h-7 flex items-center justify-center font-mono text-xs font-bold bg-[#123A63] border border-[#2F6F9F] text-[#DCE8EF] group-hover:bg-[#2F6F9F] group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  {idx < COMMERCIALIZATION_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2F6F9F] group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                  PHASE 0{idx + 1}
                </div>
                <h3 className="font-display text-base font-bold text-white group-hover:text-[#DCE8EF] transition-colors">
                  {step.phase}
                </h3>

                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  {step.deliverable}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[10px] text-[#DCE8EF] flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#6D9F45] shrink-0" />
                <span>IMPLEMENTATION STEP</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet: Clean Vertical Process Layout */}
        <div className="lg:hidden space-y-4 mb-12">
          {COMMERCIALIZATION_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="p-5 bg-[#0c263f] border border-[#2F6F9F]/25 relative"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-none bg-[#123A63] border border-[#2F6F9F] text-[#DCE8EF] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3]">
                      STAGE {idx + 1}
                    </span>
                    {idx < COMMERCIALIZATION_STEPS.length - 1 && (
                      <span className="text-[10px] font-mono text-[#DCE8EF]">NEXT STAGE ↓</span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mt-0.5">
                    {step.phase}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Callout Box */}
        <div className="p-8 bg-[#0c263f] border border-[#2F6F9F]/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl shadow-[#071B2D]">
          <div className="max-w-2xl">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
              Discuss Commercial Implementation with PRDD
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Talk with PRDD about your emissions, water treatment, process engineering or environmental technology requirements.
            </p>
          </div>
          <button
            type="button"
            onClick={onDiscussProject}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-semibold tracking-wider uppercase text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all shrink-0 active:scale-98 shadow-md shadow-[#071B2D]"
          >
            <span>START A PILOT DISCUSSION</span>
            <ArrowRight className="w-4 h-4 text-[#DCE8EF]" />
          </button>
        </div>

      </div>
    </section>
  );
};
