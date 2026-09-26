import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Box, Factory, Sparkles, Layers } from 'lucide-react';
import { TECHNOLOGIES_DATA, TechnologyItem } from '../data/prddData';

interface FeaturedCO2Props {
  onExploreCO2: (tech: TechnologyItem) => void;
}

export const FeaturedCO2: React.FC<FeaturedCO2Props> = ({ onExploreCO2 }) => {
  const [selectedProduct, setSelectedProduct] = useState<'carbonate' | 'bicarbonate' | 'hcl'>('carbonate');

  const co2Tech = TECHNOLOGIES_DATA[0];

  const productDetails = {
    carbonate: {
      name: 'Sodium Carbonate (Na₂CO₃)',
      formula: 'Na₂CO₃',
      summary: 'A major industrial chemical utilized across global manufacturing sectors. Sodium carbonate can also be used to produce calcium carbonate (CaCO₃).',
      relevance: 'Commercially viable industrial chemical product derived from captured CO₂.'
    },
    bicarbonate: {
      name: 'Sodium Bicarbonate (NaHCO₃)',
      formula: 'NaHCO₃',
      summary: 'Widely used in industrial applications, chemical processing, flue gas treatment, and multiple commercial markets.',
      relevance: 'Valuable commercial compound generated directly through PRDD chemical processing.'
    },
    hcl: {
      name: 'Hydrochloric Acid (HCl)',
      formula: 'HCl',
      summary: 'An essential chemical commodity used throughout industrial refining, manufacturing, and chemical processing.',
      relevance: 'Identified in PRDD documentation as a useful commercial byproduct of the process.'
    }
  };

  return (
    <section id="featured-co2" className="relative bg-[#071B2D] text-white py-24 sm:py-32 lg:py-40 tech-grid-pattern border-t border-[#2F6F9F]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#DCE8EF] font-semibold mb-4">
            <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
            <span>FEATURED TECHNOLOGY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
            CO₂ Capture That{' '}
            <span className="text-[#89B3D3]">Creates Value.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Rather than treating captured carbon solely as a waste stream, PRDD's CO₂ Capture &amp; Repurpose process is designed to convert CO₂ into commercially useful products.
          </p>
        </div>

        {/* Process Diagram: Blue as dominant technical color */}
        <div className="bg-[#0c263f] border border-[#2F6F9F]/30 p-6 sm:p-10 lg:p-12 mb-12 shadow-2xl shadow-[#071B2D]">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="font-mono text-xs uppercase tracking-wider text-[#DCE8EF] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
              <span>CO₂ Capture &amp; Repurpose Process Diagram</span>
            </div>
            <div className="font-mono text-xs text-[#89B3D3] hidden sm:block">
              RESOURCE RECOVERY ARCHITECTURE
            </div>
          </div>

          {/* Flow Container: 3 Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
            
            {/* STAGE 1: CO2 EMISSIONS */}
            <div className="p-6 bg-[#071B2D] border border-[#2F6F9F]/20 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#DCE8EF]/70 uppercase mb-3">
                  <span>Input</span>
                  <Factory className="w-4 h-4 text-[#2F6F9F]" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  CO₂ EMISSIONS
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Industrial emissions and combustion exhaust streams containing carbon dioxide.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[11px] text-slate-400">
                <span>Direct capture from industrial sources</span>
              </div>

              {/* Connecting arrow down on mobile */}
              <div className="md:hidden flex justify-center py-4">
                <ArrowDown className="w-5 h-5 text-[#2F6F9F]" />
              </div>
            </div>

            {/* STAGE 2: PRDD CAPTURE & REPURPOSE PROCESS (Dominant Blue Engineering Centerpiece) */}
            <div className="p-6 bg-[#103252] border-2 border-[#2F6F9F] relative flex flex-col justify-between shadow-xl shadow-[#071B2D]">
              <div className="absolute -top-3 left-6 bg-[#123A63] border border-[#2F6F9F] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>PATENTED PROCESS</span>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#DCE8EF] uppercase mb-3">
                  <span>Chemical Conversion</span>
                  <Layers className="w-4 h-4 text-[#89B3D3]" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  PRDD CAPTURE &amp; REPURPOSE PROCESS
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Proprietary chemical process converting captured gaseous CO₂ into useful, commercially viable products.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[11px] text-[#DCE8EF]">
                <span>Designed for real industrial operating environments</span>
              </div>

              {/* Connecting arrow down on mobile */}
              <div className="md:hidden flex justify-center py-4">
                <ArrowDown className="w-5 h-5 text-[#2F6F9F]" />
              </div>
            </div>

            {/* STAGE 3: USEFUL COMMERCIAL PRODUCTS */}
            <div className="p-6 bg-[#071B2D] border border-[#2F6F9F]/20 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#DCE8EF]/70 uppercase mb-3">
                  <span>Output</span>
                  <Box className="w-4 h-4 text-[#2F6F9F]" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  USEFUL COMMERCIAL PRODUCTS
                </h3>
                <div className="space-y-2 mt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct('carbonate')}
                    className={`w-full text-left p-2.5 text-xs font-mono border transition-colors flex items-center justify-between ${
                      selectedProduct === 'carbonate'
                        ? 'bg-[#123A63] border-[#2F6F9F] text-white font-semibold'
                        : 'bg-[#071B2D]/60 border-white/10 text-slate-300 hover:border-[#2F6F9F]/50'
                    }`}
                  >
                    <span>SODIUM CARBONATE (Na₂CO₃)</span>
                    {selectedProduct === 'carbonate' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct('bicarbonate')}
                    className={`w-full text-left p-2.5 text-xs font-mono border transition-colors flex items-center justify-between ${
                      selectedProduct === 'bicarbonate'
                        ? 'bg-[#123A63] border-[#2F6F9F] text-white font-semibold'
                        : 'bg-[#071B2D]/60 border-white/10 text-slate-300 hover:border-[#2F6F9F]/50'
                    }`}
                  >
                    <span>SODIUM BICARBONATE (NaHCO₃)</span>
                    {selectedProduct === 'bicarbonate' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct('hcl')}
                    className={`w-full text-left p-2.5 text-xs font-mono border transition-colors flex items-center justify-between ${
                      selectedProduct === 'hcl'
                        ? 'bg-[#123A63] border-[#2F6F9F] text-white font-semibold'
                        : 'bg-[#071B2D]/60 border-white/10 text-slate-300 hover:border-[#2F6F9F]/50'
                    }`}
                  >
                    <span>HYDROCHLORIC ACID (HCl)</span>
                    {selectedProduct === 'hcl' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400">
                * Calcium carbonate can also be made from sodium carbonate
              </div>
            </div>

          </div>

          {/* Interactive Inspection Drawer */}
          <div className="mt-8 pt-6 border-t border-white/10 bg-[#071B2D] p-5 border border-[#2F6F9F]/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#89B3D3] block mb-1">
                  Product Profile: {productDetails[selectedProduct].formula}
                </span>
                <h4 className="text-base font-bold text-white">
                  {productDetails[selectedProduct].name}
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {productDetails[selectedProduct].summary}
                </p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-[11px] font-mono text-slate-400 block">Commercial Application</span>
                <span className="text-xs text-[#DCE8EF] font-mono flex items-center sm:justify-end gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  Marketable Industrial Resource
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar with PRDD Blue/Navy treatment */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          <p className="text-sm text-slate-300 max-w-xl">
            PRDD develops environmental technologies designed to transform complex industrial pollutants into useful, commercially viable products.
          </p>
          <button
            type="button"
            onClick={() => onExploreCO2(co2Tech)}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all duration-200 cursor-pointer active:scale-98 shrink-0 shadow-lg shadow-[#071B2D]"
          >
            <span>DISCOVER CO₂ CAPTURE &amp; REPURPOSING</span>
            <ArrowRight className="w-4 h-4 text-[#DCE8EF]" />
          </button>
        </div>
      </div>
    </section>
  );
};

