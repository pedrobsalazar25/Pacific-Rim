import React, { useState } from 'react';
import { ArrowRight, Check, Activity, Microscope, Sliders, Shield } from 'lucide-react';
import { APPROACH_STEPS, PRDD_IMAGES } from '../data/prddData';
import { PrddImage } from './PrddImage';

export const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Microscope, Activity, Sliders, Shield];

  return (
    <section id="approach" className="relative bg-[#071B2D] text-white py-24 sm:py-32 lg:py-40 border-t border-[#2F6F9F]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Laboratory & Engineering Image with Overlays */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 overflow-hidden bg-[#0c263f] border border-[#2F6F9F]/30 group">
              <PrddImage
                src={PRDD_IMAGES.approachLab}
                alt="Research and Process Development"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-transparent to-black/30" />

              {/* Technical Engineering Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0c263f]/95 backdrop-blur-md border border-[#2F6F9F]/40 font-mono">
                <div className="flex items-center justify-between text-xs text-[#DCE8EF] mb-1">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45] animate-pulse" />
                    STAGE VERIFICATION
                  </span>
                  <span className="text-slate-300 font-bold">
                    STEP {APPROACH_STEPS[activeStep].number} / 04
                  </span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {APPROACH_STEPS[activeStep].name}: {APPROACH_STEPS[activeStep].tagline}
                </div>
              </div>

              {/* Top-right laboratory telemetry marker */}
              <div className="absolute top-4 right-4 text-[10px] font-mono text-[#DCE8EF]/80 bg-[#071B2D]/80 px-2.5 py-1 border border-[#2F6F9F]/30">
                BENCH-SCALE TO PILOT
              </div>
            </div>

            {/* Subtle background glow in PRDD Blue */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#2F6F9F]/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: Approach Narrative & 4 Sequential Steps */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#DCE8EF] font-semibold mb-4">
              <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
              <span>THE PRDD APPROACH</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
              From Chemistry{' '}
              <span className="text-[#89B3D3] block sm:inline">to Commercial Reality.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10">
              PRDD combines scientific process development with practical construction and implementation experience.
            </p>

            {/* 4 Sequential Steps Timeline */}
            <div className="space-y-4">
              {APPROACH_STEPS.map((step, idx) => {
                const IconComponent = stepIcons[idx] || Microscope;
                const isSelected = activeStep === idx;

                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className={`p-5 border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#103252] border-[#2F6F9F] shadow-lg shadow-[#071B2D]'
                        : 'bg-[#0c263f]/60 border-[#2F6F9F]/20 hover:border-[#2F6F9F]/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Number & Icon */}
                      <div
                        className={`w-9 h-9 flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#123A63] text-white border border-[#2F6F9F] font-bold'
                            : 'bg-[#071B2D] text-[#DCE8EF]/70 border border-[#2F6F9F]/20'
                        }`}
                      >
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`font-display text-base sm:text-lg font-bold tracking-wide uppercase ${
                              isSelected ? 'text-[#DCE8EF]' : 'text-white'
                            }`}
                          >
                            {step.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400">
                            STEP 0{idx + 1}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                          {step.tagline}
                        </p>
                        {isSelected && (
                          <p className="text-xs sm:text-sm text-slate-300 mt-3 pt-3 border-t border-white/10 leading-relaxed">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Factual Note */}
            <div className="mt-8 text-xs font-mono text-slate-400 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#6D9F45]" />
              <span>Scientific process development combined with practical construction knowledge</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
