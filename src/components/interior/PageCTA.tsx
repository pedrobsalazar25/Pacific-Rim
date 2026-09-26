import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

interface PageCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onAction: () => void;
  topic?: string;
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
}

export const PageCTA: React.FC<PageCTAProps> = ({
  eyebrow = 'START A CONVERSATION',
  title = 'Discuss Your Environmental or Process Challenge',
  description = 'Whether evaluating point-source capture, effluent remediation, or circular byproduct integration, PRDD engineering can review your specifications.',
  buttonText = 'START PROJECT DISCUSSION →',
  onAction,
  secondaryAction
}) => {
  return (
    <section className="relative bg-[#071B2D] border-t border-[#2F6F9F]/30 py-20 overflow-hidden">
      <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="bg-gradient-to-r from-[#0c263f] via-[#103252] to-[#0c263f] border border-[#2F6F9F]/40 p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>{eyebrow}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                {title}
              </h2>

              <p className="text-base text-slate-300 max-w-2xl leading-relaxed mb-6 lg:mb-0">
                {description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <button
                type="button"
                onClick={onAction}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-lg shadow-[#071B2D] cursor-pointer"
              >
                <span>{buttonText}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              </button>

              {secondaryAction && (
                <button
                  type="button"
                  onClick={secondaryAction.onClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#071B2D]/80 border border-white/20 hover:border-[#2F6F9F] text-slate-300 hover:text-white text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>{secondaryAction.text}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
