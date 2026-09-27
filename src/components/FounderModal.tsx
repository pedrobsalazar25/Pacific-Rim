import React from 'react';
import { X, ArrowRight, GraduationCap, HardHat, Award, ShieldCheck } from 'lucide-react';
import { PRDD_IMAGES } from '../data/prddData';
import { PrddImage } from './PrddImage';

interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDiscussProject: () => void;
}

export const FounderModal: React.FC<FounderModalProps> = ({
  isOpen,
  onClose,
  onDiscussProject,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="founder-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
    >
      <div
        className="relative w-full max-w-2xl bg-[#071B2D] border border-[#2F6F9F]/30 text-white shadow-2xl overflow-hidden tech-grid-pattern my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2F6F9F]/20 bg-[#0c263f]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] block">
              FOUNDER &amp; PRESIDENT PROFILE
            </span>
            <h3 id="founder-modal-title" className="font-display text-xl font-bold text-white">
              Dr. Robert Richardson
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2F6F9F]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-[#0c263f] border border-[#2F6F9F]/20">
            <div className="w-24 h-28 shrink-0 overflow-hidden bg-black border border-white/10">
              <PrddImage
                src={PRDD_IMAGES.founder}
                alt="Dr. Robert Richardson"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">
                Dr. Robert Richardson
              </h4>
              <div className="text-xs font-mono text-[#DCE8EF] mt-0.5">
                Ph.D. Chemist · Licensed General Contractor · Inventor
              </div>
              <p className="text-xs text-slate-300 mt-2">
                President of Pacific Rim Design &amp; Development, Inc.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              Dr. Richardson combines scientific process development with practical construction and implementation knowledge, allowing PRDD to bridge laboratory chemistry and industrial deployment.
            </p>
            <p>
              This combination of chemical science and general contracting experience enables PRDD to address complex environmental problems with practical, constructible solutions designed specifically for real industrial environments.
            </p>
          </div>

          {/* Core Credentials Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 bg-[#0c263f] border border-[#2F6F9F]/20 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#89B3D3] font-bold mb-1">
                <GraduationCap className="w-4 h-4 text-[#2F6F9F]" />
                <span>Scientific Development</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Ph.D. chemist background focusing on chemical process development and environmental transformation.
              </p>
            </div>

            <div className="p-3.5 bg-[#0c263f] border border-[#2F6F9F]/20 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#89B3D3] font-bold mb-1">
                <HardHat className="w-4 h-4 text-[#2F6F9F]" />
                <span>Construction Knowledge</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Licensed General Contractor expertise ensuring solutions are engineered for real-world plant execution.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#2F6F9F]/20 bg-[#0c263f] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            PRDD Executive Leadership
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono uppercase text-slate-400 hover:text-white"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onDiscussProject();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all shadow-md shadow-[#071B2D]"
            >
              <span>Consult with PRDD</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DCE8EF]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
