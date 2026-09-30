import React from 'react';
import { ArrowRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { PRDD_IMAGES } from '../data/prddData';
import { PrddImage } from './PrddImage';

interface CTASectionProps {
  onDiscussProject: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onDiscussProject }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#071B2D] py-24 sm:py-32 lg:py-36 border-t border-[#2F6F9F]/20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <PrddImage
          src={PRDD_IMAGES.finalCta}
          alt="PRDD Heavy Industrial Engineering and Process Infrastructure"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep Navy Overlays for High Contrast & Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/75" />
        <div className="absolute inset-0 tech-grid-pattern opacity-30 mix-blend-overlay" />
      </div>

      {/* Decorative Technical Borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6F9F]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2F6F9F]/20 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Label (Zero-pill clean typography) */}
        <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] uppercase text-[#DCE8EF] font-semibold mb-6">
          <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
          <span>LET'S SOLVE WHAT OTHERS CAN'T</span>
          <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-8 [text-wrap:balance]">
          Have an Environmental{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCE8EF] via-[#89B3D3] to-[#2F6F9F]">
            Challenge?
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 font-normal">
          Talk with PRDD about your emissions, water treatment, process engineering or environmental technology requirements.
        </p>

        {/* Primary CTA - PRDD Navy / Blue treatment */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onDiscussProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all duration-200 shadow-2xl shadow-[#071B2D] cursor-pointer active:scale-98"
          >
            <span>DISCUSS YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 text-[#DCE8EF]" />
          </button>
        </div>

        {/* Engineering Consultation Note */}
        <div className="mt-12 pt-8 border-t border-white/10 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span>Clean Scrub Technologies</span>
          <span className="hidden sm:inline text-[#2F6F9F]">·</span>
          <span>Environmental Technology &amp; Industrial Solutions</span>
        </div>

      </div>
    </section>
  );
};
