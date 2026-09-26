import React from 'react';
import { X, ArrowRight, CheckCircle2, Box, Cpu, Flame, Layers } from 'lucide-react';
import { TechnologyItem } from '../data/prddData';

interface TechModalProps {
  technology: TechnologyItem | null;
  onClose: () => void;
  onDiscussTech: (techName: string) => void;
}

export const TechModal: React.FC<TechModalProps> = ({
  technology,
  onClose,
  onDiscussTech,
}) => {
  if (!technology) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tech-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
    >
      <div
        className="relative w-full max-w-3xl bg-[#071B2D] border border-[#2F6F9F]/30 text-white shadow-2xl overflow-hidden tech-grid-pattern my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2F6F9F]/20 bg-[#0c263f]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center font-mono text-xs font-bold bg-[#123A63] border border-[#2F6F9F] text-[#DCE8EF]">
              {technology.number}
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] block">
                PRDD TECHNOLOGY PROFILE
              </span>
              <h3 id="tech-modal-title" className="font-display text-lg sm:text-xl font-bold text-white">
                {technology.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2F6F9F] cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {/* Main Visual Frame */}
          <div className="relative aspect-16/9 w-full overflow-hidden bg-[#071B2D] border border-[#2F6F9F]/20">
            <img
              src={technology.image}
              alt={technology.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 font-mono text-xs text-[#DCE8EF] bg-[#071B2D]/85 px-2.5 py-1 border border-[#2F6F9F]/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              ENGINEERED SYSTEM ARCHITECTURE
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#89B3D3] mb-2">
              Technology Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {technology.summary}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/20">
              <span className="text-[10px] uppercase text-[#89B3D3] block mb-1">
                Chemical Process
              </span>
              <p className="text-slate-200 font-sans text-xs sm:text-sm leading-relaxed">
                {technology.chemicalPathway}
              </p>
            </div>

            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/20">
              <span className="text-[10px] uppercase text-[#89B3D3] block mb-1">
                Industrial Feedstocks
              </span>
              <p className="text-slate-200 font-sans text-xs sm:text-sm leading-relaxed">
                {technology.industrialFeedstock}
              </p>
            </div>
          </div>

          {/* Commercial Outputs */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#89B3D3] mb-3">
              Commercial Products &amp; Applications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {technology.commercialOutputs.map((output, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#103252] border border-[#2F6F9F]/30 text-xs font-mono text-[#DCE8EF] flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6D9F45] shrink-0" />
                  <span className="truncate">{output}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Focus */}
          <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/20">
            <span className="text-[10px] font-mono uppercase text-[#89B3D3] block mb-1">
              Equipment &amp; Implementation
            </span>
            <p className="text-xs sm:text-sm text-slate-300">
              {technology.equipmentFocus}
            </p>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#89B3D3] mb-3">
              Key Features
            </h4>
            <ul className="space-y-2">
              {technology.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45] mt-2 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-[#2F6F9F]/20 bg-[#0c263f] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-slate-400">
            Patented PRDD Environmental Technology
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-mono uppercase text-slate-300 hover:text-white bg-[#071B2D] border border-white/10 hover:border-white/20 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onDiscussTech(technology.title);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all shadow-md shadow-[#071B2D]"
            >
              <span>Consult on {technology.number}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DCE8EF]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
