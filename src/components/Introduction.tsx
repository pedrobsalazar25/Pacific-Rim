import React from 'react';

interface IntroductionProps {
  onLearnMore?: () => void;
}

export const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <section className="relative bg-[#F7F7F3] text-[#20262B] py-24 sm:py-32 lg:py-40 overflow-hidden tech-grid-pattern-light border-y border-[#DCE8EF]">
      {/* Structural Accent Lines */}
      <div className="absolute top-0 left-12 bottom-0 w-px bg-[#DCE8EF]/70 hidden xl:block" />
      <div className="absolute top-0 right-12 bottom-0 w-px bg-[#DCE8EF]/70 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Label & Section Indicator */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#123A63] font-semibold mb-4">
              <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
              <span>ENGINEERING ENVIRONMENTAL SOLUTIONS DIFFERENTLY</span>
            </div>
            <p className="text-xs font-mono text-[#20262B]/70 uppercase tracking-widest leading-relaxed">
              Chemistry · Engineering · Construction Knowledge
            </p>

            <div className="mt-8 pt-8 border-t border-[#DCE8EF]">
              <div className="p-5 bg-white/90 border border-[#DCE8EF] text-[#20262B] shadow-sm">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#123A63] font-bold block mb-1">
                  CORE METHODOLOGY
                </span>
                <p className="text-xs text-[#20262B]/80 leading-relaxed">
                  Combining laboratory chemical process development with practical construction and engineering knowledge to resolve complex environmental problems.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Statement & Prose */}
          <div className="lg:col-span-8 lg:pl-6">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#123A63] leading-[1.08] mb-8 sm:mb-10 [text-wrap:balance]">
              Where others see a waste stream,{' '}
              <span className="text-[#2F6F9F] underline decoration-[#2F6F9F]/40 decoration-2 underline-offset-8">
                we see a resource.
              </span>
            </h2>

            <div className="space-y-6 text-base sm:text-xl text-[#20262B] leading-relaxed font-normal">
              <p>
                Clean Scrub Technologies develops environmental processes for problems where conventional solutions are unavailable or inappropriate. Our approach combines chemistry, engineering and practical construction knowledge to create solutions designed for real industrial environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

