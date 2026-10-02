import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Flame, Droplets, Layers } from 'lucide-react';
import { PRDD_IMAGES } from '../data/prddData';
import { PrddImage } from './PrddImage';

interface HeroProps {
  onExploreTechnologies: () => void;
  onAboutPrdd: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTechnologies, onAboutPrdd }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#071B2D] pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Background Cinematic Industrial Image Container with Scrim */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <PrddImage
          src={PRDD_IMAGES.hero}
          alt="CST Advanced Industrial Chemical and Environmental Processing Plant"
          priority
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Layered cinematic gradient scrims in CST Deep Navy */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D] via-[#071B2D]/80 to-transparent" />
        <div className="absolute inset-0 tech-grid-pattern opacity-40 mix-blend-overlay" />
      </div>

      {/* Decorative Technical Structural Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6F9F]/40 to-transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow / Small Technical Qualifier (Zero-pill clean typography) */}
          <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-[#DCE8EF] mb-6">
            <span className="w-2 h-2 rounded-none bg-[#6D9F45]" />
            <span>CLEAN SCRUB TECHNOLOGIES</span>
            <span className="text-[#2F6F9F] font-normal">/</span>
            <span className="text-slate-300 hidden sm:inline">ENVIRONMENTAL TECHNOLOGY & INDUSTRIAL SOLUTIONS</span>
          </div>

          {/* Headline: Oversized, Bold, Confident, Editorial */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.04] mb-8 [text-wrap:balance]">
            Turning Industrial Emissions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCE8EF] via-[#89B3D3] to-[#2F6F9F]">
              Into Valuable Resources.
            </span>
          </h1>

          {/* Supporting Text: Restrained line length, highly readable */}
          <p className="text-base sm:text-xl lg:text-2xl text-slate-200 font-normal max-w-3xl leading-relaxed mb-10 sm:mb-12">
            CST develops and commercializes patented environmental technologies that transform complex industrial pollutants into useful, commercially viable products.
          </p>

          {/* Primary & Secondary CTAs - Blue/Navy primary treatment */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
            <button
              type="button"
              onClick={onExploreTechnologies}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all duration-200 shadow-xl shadow-[#071B2D]/80 cursor-pointer active:scale-98"
            >
              <span>EXPLORE OUR TECHNOLOGIES</span>
              <ArrowDown className="w-4 h-4 text-[#DCE8EF]" />
            </button>

            <button
              type="button"
              onClick={onAboutPrdd}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase text-[#DCE8EF] hover:text-white bg-[#0c263f]/80 hover:bg-[#123A63] border border-[#2F6F9F]/40 hover:border-[#2F6F9F] transition-all duration-200 cursor-pointer active:scale-98"
            >
              <span>ABOUT CST</span>
              <ArrowUpRight className="w-4 h-4 text-[#2F6F9F]" />
            </button>
          </div>

          {/* Quick Technology Reference Markers */}
          <div className="mt-14 sm:mt-18 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-[#2F6F9F] shrink-0" />
              <div>
                <span className="block text-white font-medium">CO₂ Capture</span>
                <span className="text-[11px] text-slate-400">Carbonates &amp; Bicarbonates</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Flame className="w-4 h-4 text-[#2F6F9F] shrink-0" />
              <div>
                <span className="block text-white font-medium">NOx &amp; SOx</span>
                <span className="text-[11px] text-slate-400">Combustion Emissions</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Droplets className="w-4 h-4 text-[#2F6F9F] shrink-0" />
              <div>
                <span className="block text-white font-medium">Advanced Water</span>
                <span className="text-[11px] text-slate-400">Treatment &amp; Desalination</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#2F6F9F] shrink-0" />
              <div>
                <span className="block text-white font-medium">Advanced Materials</span>
                <span className="text-[11px] text-slate-400">Concrete &amp; Geopolymers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restrained Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-70">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#DCE8EF]/70">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#2F6F9F]/80 to-transparent animate-pulse" />
      </div>
    </section>
  );
};
