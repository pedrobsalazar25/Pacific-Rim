import React from 'react';
import { ArrowRight, ChevronRight, Activity } from 'lucide-react';

export interface ProcessStep {
  step: string;
  label: string;
  desc: string;
  badge?: string;
}

interface ProcessDiagramProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  outputs?: string[];
  theme?: 'dark' | 'light';
}

export const ProcessDiagram: React.FC<ProcessDiagramProps> = ({
  title = 'CHEMICAL & ENGINEERING MECHANISM',
  subtitle = 'Continuous Process Architecture',
  steps,
  outputs,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`border p-6 sm:p-8 lg:p-10 ${
        isDark
          ? 'bg-[#091F35] border-[#2F6F9F]/35 tech-grid-pattern shadow-2xl'
          : 'bg-[#F7F7F3] border-[#2F6F9F]/30 shadow-lg'
      }`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-[#2F6F9F]/20 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
            <Activity className="w-3.5 h-3.5 text-[#6D9F45]" />
            <span>{title}</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
            {subtitle}
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123A63] border border-[#2F6F9F] text-xs font-mono text-[#DCE8EF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45] animate-pulse" />
          <span>PROPRIETARY PRDD ARCHITECTURE</span>
        </div>
      </div>

      {/* Step Sequence Flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
        {steps.map((st, idx) => (
          <div
            key={idx}
            className="relative bg-[#071B2D] border border-[#2F6F9F]/40 p-5 hover:border-[#2F6F9F] transition-all group"
          >
            {/* Step Top Bar */}
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <span className="font-mono text-xs font-bold text-[#89B3D3] bg-[#123A63] px-2 py-0.5">
                STAGE {st.step}
              </span>
              {st.badge && (
                <span className="text-[10px] font-mono text-[#6D9F45] uppercase tracking-wider">
                  {st.badge}
                </span>
              )}
            </div>

            <h4 className="font-display text-base font-bold text-white mb-2 group-hover:text-[#DCE8EF] transition-colors">
              {st.label}
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {st.desc}
            </p>

            {/* Connecting arrow indicator for desktop */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                <div className="w-7 h-7 rounded-full bg-[#123A63] border border-[#2F6F9F] flex items-center justify-center text-[#DCE8EF]">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Commercial Outputs Bar */}
      {outputs && outputs.length > 0 && (
        <div className="mt-8 pt-6 border-t border-[#2F6F9F]/20 bg-[#071B2D]/80 border border-[#2F6F9F]/30 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#89B3D3]">
            Commercial / Process Yields:
          </div>
          <div className="flex flex-wrap gap-2">
            {outputs.map((out, oIdx) => (
              <span
                key={oIdx}
                className="px-3 py-1 bg-[#123A63] border border-[#2F6F9F]/50 text-xs font-mono text-[#DCE8EF] flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[#6D9F45]" />
                {out}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
