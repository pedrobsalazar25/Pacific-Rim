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
  description = 'Whether evaluating point-source capture, effluent remediation, or circular byproduct integration, CST engineering can review your specifications.',
  buttonText = 'START PROJECT DISCUSSION →',
  onAction,
  secondaryAction
}) => {
  return (
    <section className="relative bg-[#071B2D] border-t border-[#2F6F9F]/30 py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="bg-gradient-to-r from-[#0c263f] via-[#103252] to-[#0c263f] border border-[#2F6F9F]/40 p-8 sm:p-12 lg:p-16 shadow-2xl relative rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45] shadow-[0_0_6px_#6D9F45]" />
                <span>{eyebrow}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
                {title}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6 lg:mb-0">
                {description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:items-end">
              <button
                type="button"
                onClick={onAction}
                className="btn-primary w-full sm:w-auto text-xs"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
              </button>

              {secondaryAction && (
                <button
                  type="button"
                  onClick={secondaryAction.onClick}
                  className="btn-secondary w-full sm:w-auto text-xs"
                >
                  <span>{secondaryAction.text}</span>
                </button>
              )}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <span className="text-slate-300 font-semibold tracking-wide">Clean Scrub Technologies</span>
            <div className="flex items-center gap-4">
              <a href="tel:530-474-4819" className="hover:text-white transition-colors">
                530-474-4819
              </a>
              <span className="text-slate-600">·</span>
              <a href="mailto:robert@prdd.net" className="hover:text-white transition-colors">
                robert@prdd.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
