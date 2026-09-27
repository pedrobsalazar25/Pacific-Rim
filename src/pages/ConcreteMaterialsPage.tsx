import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Boxes,
  Layers,
  Sparkles,
  Building2,
  Atom,
  ShieldCheck,
  CheckCircle2,
  Check,
  HardHat,
  Factory
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface ConcreteMaterialsPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const ConcreteMaterialsPage: React.FC<ConcreteMaterialsPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Concrete & Materials Applications | PRDD';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore PRDD's materials-development applications involving concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete."
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  const handleScrollToOverview = () => {
    const el = document.getElementById('materials-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Applications', onClick: () => onNavigate('/applications') },
    { label: 'Concrete & Materials' }
  ];

  const relatedApps = [
    {
      category: 'APPLICATION 04',
      title: 'Resource Recovery',
      description: 'Converting pollutants or process streams into useful products or materials where technically appropriate.',
      route: '/applications/resource-recovery'
    },
    {
      category: 'APPLICATION 01',
      title: 'Industrial Emissions',
      description: 'Emissions-control and process-development approaches addressing CO₂, NOx, SOx, amines and specialized gases.',
      route: '/applications/industrial-emissions'
    },
    {
      category: 'APPLICATION 02',
      title: 'Water & Wastewater',
      description: 'Water-treatment process development and environmental engineering experience in municipal and industrial environments.',
      route: '/applications/water-wastewater'
    }
  ];

  return (
    <div className="bg-[#F7F7F3] text-[#20262B] selection:bg-[#2F6F9F]/30 selection:text-[#071B2D]">
      {/* ==================================================
          SECTION 2: HERO — EDITORIAL APPLICATION DETAIL OPENING
      ================================================== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 shadow-2xl border border-[#2F6F9F]/20">
          {/* Photographic Background with Deep Navy Materials Scrim */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src="/images/prdd/applications/prdd-application-materials.jpg"
              alt="Engineered concrete matrix, geopolymers and advanced material surfaces"
              priority
              className="w-full h-full object-cover object-center filter saturate-75 contrast-110 brightness-60"
            />
            {/* Multi-layered cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/75 to-[#071B2D]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/90 via-[#071B2D]/60 to-transparent" />
            <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />
          </div>

          {/* Hero Top Bar: Breadcrumb & Eyebrow */}
          <div className="relative z-10">
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} className="text-white/80" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123A63]/80 border border-[#2F6F9F]/60 rounded-full text-xs font-mono tracking-widest text-[#DCE8EF] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>CONCRETE &amp; MATERIALS</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Title & Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                From Process Chemistry<br />
                <span className="text-[#89B3D3] font-light">to Material Opportunity.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  PRDD's documented materials work includes approaches involving concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Concrete & Materials')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
                >
                  <span>DISCUSS YOUR MATERIALS CHALLENGE</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>

                <button
                  type="button"
                  onClick={handleScrollToOverview}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-black/40 backdrop-blur-md border border-white/20 hover:border-white text-slate-200 hover:text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  <span>EXPLORE THE APPLICATION</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#89B3D3]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          MAIN EDITORIAL GRID
          LEFT: ~70% content width | RIGHT: ~30% information rail
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ==================================================
              LEFT COLUMN (~70% WIDTH): PRIMARY APPLICATION STORY
          ================================================== */}
          <div className="lg:col-span-8 space-y-16 sm:space-y-24">
            
            {/* Supporting Image: Top Materials Visual */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DCE8EF] shadow-lg bg-[#071B2D] relative group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <PrddImage
                  src="/images/prdd/applications/prdd-application-materials.jpg"
                  alt="Advanced concrete and mineral matrix engineering"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-[#20262B]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
                  <span className="font-semibold text-[#123A63]">MATERIALS DEVELOPMENT &amp; MINERAL MATRIX ENVIRONMENT</span>
                </span>
                <span className="text-slate-500">[ APPLICATION SLOT A ]</span>
              </div>
            </div>

            {/* Introduction Article Section */}
            <div id="materials-overview" className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>APPLICATION CONTEXT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
                Start With<br />
                <span className="text-[#2F6F9F] font-light">the Material Opportunity.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal pt-2">
                <p>
                  PRDD's environmental process development extends into materials applications where process chemistry and useful products may create opportunities for material development.
                </p>
                <p className="text-slate-600">
                  Documented PRDD work includes concrete and geopolymer approaches associated with products from CO₂ capture, together with a separate high-surface-area polymer concrete development direction.
                </p>
              </div>

              {/* Highlight Statement */}
              <div className="my-8 p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
                  MATERIAL DEVELOPMENT METHODOLOGY
                </div>
                <div className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-wider text-[#123A63] flex flex-wrap items-center gap-2 sm:gap-3">
                  <span>PROCESS</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span>PRODUCT</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span>MATERIAL</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span className="text-[#6D9F45]">APPLICATION</span>
                </div>
              </div>

              {/* Supporting note */}
              <div className="pt-2 text-xs font-mono text-slate-500">
                Specific formulations and material-performance characteristics depend on the application and are not presented here.
              </div>
            </div>

            {/* ==================================================
                SECTION 5: TWO DISTINCT MATERIAL APPLICATION DIRECTIONS
                Two substantial, clearly separated editorial sections — NOT combined
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>MATERIAL APPLICATIONS</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Different Material Directions.<br />
                <span className="text-[#2F6F9F] font-light">Different Development Paths.</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                PRDD's documented materials-development work addresses two distinct directions. These represent separate technical efforts and are not combined into a single material system:
              </p>

              <div className="space-y-8 pt-2">
                {/* 01: Concrete & Geopolymers */}
                <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
                      <span>DIRECTION 01 · CONCRETE &amp; GEOPOLYMERS</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      CARBON-DERIVED INTEGRATION
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                    Connecting CO₂-Derived Products With Material Development.
                  </h3>

                  <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6 font-normal">
                    <p>
                      PRDD documentation describes an approach to strengthening concrete and geopolymer materials using products associated with the company's CO₂ Capture &amp; Repurpose technology.
                    </p>
                    <p className="font-medium text-[#123A63]">
                      This creates a documented connection between PRDD's emissions technology and its materials-development work.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onNavigate('/technologies/advanced-materials')}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                      >
                        <span>EXPLORE ADVANCED MATERIALS</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigate('/technologies/co2-capture')}
                        className="inline-flex items-center gap-2 px-4 py-3 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] text-[#123A63] hover:text-[#2F6F9F] text-xs font-mono uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                      >
                        <span>EXPLORE CO₂ TECHNOLOGY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="text-xs font-mono text-slate-500">
                      Relevant Technologies: <strong className="text-[#123A63]">Advanced Materials &amp; CO₂ Capture</strong>
                    </span>
                  </div>
                </div>

                {/* 02: High-Surface-Area Polymer Concrete */}
                <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                      <span>DIRECTION 02 · HIGH-SURFACE-AREA POLYMER CONCRETE</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      SPECIALTY POLYMER COMPOSITE
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                    A Separate Materials Development Direction.
                  </h3>

                  <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6 font-normal">
                    <p>
                      PRDD documentation identifies a process for producing high-surface-area polymer concrete.
                    </p>
                    <p className="font-medium text-[#123A63]">
                      This is a separate materials-development direction from the concrete and geopolymer work associated with PRDD's CO₂ Capture &amp; Repurpose technology.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => onNavigate('/technologies/advanced-materials')}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                    >
                      <span>EXPLORE ADVANCED MATERIALS</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                    </button>

                    <span className="text-xs font-mono text-slate-500">
                      Relevant Technology: <strong className="text-[#123A63]">Advanced Materials</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 6: APPLICATION-TO-TECHNOLOGY VISUALIZATION
                Shows Path A and Path B as completely distinct paths
            ================================================== */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

              <div className="relative">
                <div className="max-w-2xl mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>APPLICATION PATHWAY MAP</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Application-to-Technology Visualization
                  </h3>
                </div>

                {/* Conceptual Pathways Grid: Two Distinct Side-by-Side Paths */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-start">
                  
                  {/* PATH A: CO2-Derived Material Path */}
                  <div className="bg-[#0b243d] border border-[#2F6F9F]/40 p-6 rounded-2xl relative shadow-md space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#2F6F9F]/30">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] font-bold">
                        PATH A · CARBON-DERIVED MATERIALS
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#123A63] text-white rounded">
                        CO₂ LINKED
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* Step 1 */}
                      <div className="bg-[#071B2D] border border-[#2F6F9F]/40 p-4 rounded-xl text-center">
                        <div className="text-[9px] font-mono uppercase text-slate-400 mb-0.5">SOURCE PROCESS</div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          CO₂ CAPTURE &amp; REPURPOSING
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#2F6F9F]" />
                      </div>

                      {/* Step 2 */}
                      <div className="bg-[#071B2D] border border-[#2F6F9F]/40 p-4 rounded-xl text-center">
                        <div className="text-[9px] font-mono uppercase text-[#89B3D3] mb-0.5">INTERMEDIATE DERIVATION</div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          CO₂-DERIVED PRODUCTS
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#2F6F9F]" />
                      </div>

                      {/* Step 3 */}
                      <div className="bg-[#123A63] border-2 border-[#6D9F45] p-4 rounded-xl text-center shadow-lg">
                        <div className="text-[9px] font-mono uppercase text-[#6D9F45] mb-0.5">TARGET MATRICES</div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          CONCRETE / GEOPOLYMER MATERIAL DEVELOPMENT
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#2F6F9F]/30 text-center">
                      <div className="text-[10px] font-mono uppercase text-[#89B3D3] mb-1">
                        RELEVANT TECHNOLOGY DESTINATIONS
                      </div>
                      <div className="font-mono text-xs text-white font-semibold flex flex-wrap justify-center gap-2">
                        <span className="px-2 py-1 bg-[#071B2D] rounded border border-white/10">ADVANCED MATERIALS</span>
                        <span className="px-2 py-1 bg-[#071B2D] rounded border border-white/10">CO₂ CAPTURE &amp; REPURPOSING</span>
                      </div>
                    </div>
                  </div>

                  {/* PATH B: High-Surface-Area Polymer Concrete Path */}
                  <div className="bg-[#0b243d] border border-[#2F6F9F]/40 p-6 rounded-2xl relative shadow-md space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#2F6F9F]/30">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] font-bold">
                        PATH B · SPECIALTY COMPOSITE
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#071B2D] border border-white/20 text-slate-300 rounded">
                        SEPARATE DIRECTION
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* Step 1 */}
                      <div className="bg-[#071B2D] border border-[#2F6F9F]/40 p-5 rounded-xl text-center">
                        <div className="text-[9px] font-mono uppercase text-[#89B3D3] mb-1">DEVELOPMENT DOMAIN</div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          PRDD MATERIALS DEVELOPMENT
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#2F6F9F]" />
                      </div>

                      {/* Step 2 */}
                      <div className="bg-[#123A63] border-2 border-[#2F6F9F] p-5 rounded-xl text-center shadow-lg">
                        <div className="text-[9px] font-mono uppercase text-[#89B3D3] mb-1">ENGINEERED MATRIX</div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          HIGH-SURFACE-AREA POLYMER CONCRETE
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#2F6F9F]/30 text-center">
                      <div className="text-[10px] font-mono uppercase text-[#89B3D3] mb-1">
                        RELEVANT TECHNOLOGY DESTINATION
                      </div>
                      <div className="font-mono text-xs text-white font-semibold">
                        <span className="px-2 py-1 bg-[#071B2D] rounded border border-white/10">ADVANCED MATERIALS</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Caption Requirement */}
                <div className="mt-8 pt-6 border-t border-[#2F6F9F]/30 text-center text-xs font-mono text-slate-400 max-w-2xl mx-auto">
                  Conceptual application map. The two materials-development directions shown are distinct, and specific formulations and material-performance data are not presented here.
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 7: FROM CO2 CAPTURE TO MATERIAL OPPORTUNITY
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>CONNECTED APPLICATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                A Link Between<br />
                <span className="text-[#2F6F9F] font-light">Carbon Capture and Materials.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  PRDD's documented technology portfolio connects CO₂ capture and repurposing with materials development.
                </p>
                <p className="text-slate-600">
                  Products associated with PRDD's CO₂ Capture &amp; Repurpose process are identified in the company's documentation for use in approaches involving concrete and geopolymer materials.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/technologies/co2-capture')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  <span>EXPLORE CO₂ CAPTURE &amp; REPURPOSING</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>
              </div>
            </div>

            {/* Supporting Imagery Spread (Slots B & C) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Supporting Image B */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.approachLab}
                    alt="Process chemistry and mineral evaluation laboratory"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">MATERIALS CHEMISTRY &amp; LAB EVALUATION</span>
                  <span className="text-slate-500">[ APPLICATION SLOT B ]</span>
                </div>
              </div>

              {/* Supporting Image C */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.advancedMaterials}
                    alt="Engineered structural concrete and geopolymer matrix microstructure"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">ENGINEERED MATRIX &amp; MATERIAL STRUCTURE</span>
                  <span className="text-slate-500">[ APPLICATION SLOT C ]</span>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 8: CO2 PROCESS PRODUCT CONTEXT
                Restrained technical displays with explicit non-ingredient context
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>PROCESS PRODUCTS</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Useful Products<br />
                <span className="text-[#2F6F9F] font-light">From Captured CO₂.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  PRDD's CO₂ Capture &amp; Repurpose documentation identifies sodium carbonate and sodium bicarbonate as products of the process, together with hydrochloric acid.
                </p>
                <p className="text-slate-600">
                  The documentation also identifies calcium carbonate as a material that can be produced from sodium carbonate.
                </p>
              </div>

              {/* Restrained Technical Formula Displays */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {/* Product 01 */}
                <div className="p-5 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">
                    PROCESS PRODUCT
                  </div>
                  <div className="font-display text-base font-bold text-[#123A63] mb-1">
                    Sodium Carbonate
                  </div>
                  <div className="font-mono text-xl font-bold text-[#2F6F9F]">
                    Na₂CO₃
                  </div>
                </div>

                {/* Product 02 */}
                <div className="p-5 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">
                    PROCESS PRODUCT
                  </div>
                  <div className="font-display text-base font-bold text-[#123A63] mb-1">
                    Sodium Bicarbonate
                  </div>
                  <div className="font-mono text-xl font-bold text-[#123A63]">
                    NaHCO₃
                  </div>
                </div>

                {/* Product 03 */}
                <div className="p-5 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">
                    PROCESS PRODUCT
                  </div>
                  <div className="font-display text-base font-bold text-[#123A63] mb-1">
                    Hydrochloric Acid
                  </div>
                  <div className="font-mono text-xl font-bold text-[#123A63]">
                    HCl
                  </div>
                </div>

                {/* Product 04 */}
                <div className="p-5 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">
                    PRODUCED MATERIAL
                  </div>
                  <div className="font-display text-base font-bold text-[#123A63] mb-1">
                    Calcium Carbonate
                  </div>
                  <div className="font-mono text-xl font-bold text-[#6D9F45]">
                    CaCO₃
                  </div>
                </div>
              </div>

              {/* Required Context Note */}
              <div className="p-4 bg-[#F7F7F3] border border-[#DCE8EF] rounded-xl text-xs font-mono text-slate-600 leading-relaxed">
                The products shown reflect PRDD's documented CO₂ Capture &amp; Repurpose process. Their presentation here does not imply that every listed product is used in every materials application.
              </div>
            </div>

            {/* ==================================================
                SECTION 9: MATERIAL DEVELOPMENT PERSPECTIVE — DR. RICHARDSON
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  <span>SCIENCE + IMPLEMENTATION</span>
                </div>
                <div className="px-2.5 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-md text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">
                  DUAL PERSPECTIVE
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                Materials Development With a Practical Perspective.
              </h3>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  PRDD President Dr. Robert Richardson combines a background as a Ph.D. chemist with experience as a Licensed General Contractor.
                </p>
                <p className="text-slate-600">
                  This combination provides scientific process-development and practical construction perspectives when evaluating material opportunities.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/about/robert-richardson')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  <span>MEET DR. ROBERT RICHARDSON</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>
              </div>
            </div>

            {/* ==================================================
                SECTION 10: APPLICATION DEVELOPMENT APPROACH (4 STAGES)
            ================================================== */}
            <div className="space-y-8 pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>FROM PROCESS TO MATERIAL</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Develop Around<br />
                <span className="text-[#2F6F9F] font-light">the Material Opportunity.</span>
              </h2>

              {/* Clean Numerical Row / Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#DCE8EF] pt-4">
                <div className="pt-4 sm:pt-0 sm:pr-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-1">
                    01
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    IDENTIFY
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Identify the process, product or material opportunity.
                  </p>
                </div>

                <div className="pt-4 sm:pt-0 sm:px-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-1">
                    02
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    EVALUATE
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Determine which PRDD technology or materials-development direction may be relevant.
                  </p>
                </div>

                <div className="pt-4 sm:pt-0 sm:px-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-1">
                    03
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    DEVELOP
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Develop and evaluate an application-specific materials approach.
                  </p>
                </div>

                <div className="pt-4 sm:pt-0 sm:pl-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#6D9F45] block mb-1">
                    04
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    IMPLEMENT
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Support engineering, implementation or commercialization where appropriate.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-500">
                Not every materials opportunity follows the same technical or commercialization path.
              </div>
            </div>

            {/* ==================================================
                SECTION 11: RELEVANT TECHNOLOGIES
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>RELEVANT PRDD TECHNOLOGIES</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                Two Connected Technology Areas.
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Tech 01 */}
                <div
                  onClick={() => onNavigate('/technologies/advanced-materials')}
                  className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">
                      TECHNOLOGY AREA
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                      ADVANCED MATERIALS
                    </h4>
                    <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                      PRDD's materials-development work includes concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                    <span>Explore Technology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Tech 02 */}
                <div
                  onClick={() => onNavigate('/technologies/co2-capture')}
                  className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">
                      TECHNOLOGY AREA
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                      CO₂ CAPTURE &amp; REPURPOSING
                    </h4>
                    <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                      PRDD's patented CO₂ Capture &amp; Repurpose process captures carbon dioxide and converts it into identified useful products, with documented connections to materials development.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                    <span>Explore Technology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCE8EF]">
                <button
                  type="button"
                  onClick={() => onNavigate('/technologies')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                >
                  <span>VIEW ALL TECHNOLOGIES</span>
                  <ArrowRight className="w-4 h-4 text-[#2F6F9F]" />
                </button>
              </div>
            </div>

            {/* ==================================================
                SECTION 13: RELATED APPLICATIONS (Understated)
            ================================================== */}
            <div className="pt-8 border-t border-[#DCE8EF]">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>RELATED APPLICATION AREAS</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-8">
                Explore Other Industrial Challenges.
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedApps.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => onNavigate(item.route)}
                    className="p-6 bg-white border border-[#DCE8EF] rounded-2xl hover:border-[#2F6F9F] transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-mono text-[#2F6F9F] uppercase mb-2">
                        {item.category}
                      </div>
                      <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                      <span>View Application</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ==================================================
              RIGHT COLUMN (~30% WIDTH): ASYMMETRIC SIDEBAR
          ================================================== */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            
            {/* Panel 1: Application Information Sidebar */}
            <div className="bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DCE8EF]">
                <div className="font-display text-base sm:text-lg font-bold text-[#123A63] tracking-tight">
                  Application Information
                </div>
                <Boxes className="w-4 h-4 text-[#2F6F9F]" />
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    APPLICATION
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Concrete &amp; Materials
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    DOCUMENTED AREAS
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div className="font-semibold text-[#123A63]">Concrete</div>
                    <div className="font-semibold text-[#123A63]">Geopolymers</div>
                    <div className="font-semibold text-[#123A63]">Polymer Concrete</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    RELATED PROCESS AREA
                  </div>
                  <div className="font-semibold text-[#2F6F9F]">
                    CO₂-Derived Products
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    RELEVANT TECHNOLOGIES
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div className="font-semibold text-[#2F6F9F]">Advanced Materials</div>
                    <div className="font-semibold text-[#2F6F9F]">CO₂ Capture &amp; Repurposing</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    APPROACH
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Process-to-Material Development
                  </div>
                </div>

                <div className="pt-2 border-t border-[#DCE8EF]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                    DEVELOPMENT PATH
                  </div>
                  <div className="font-mono text-xs text-[#123A63] bg-[#F7F7F3] p-2.5 rounded-lg border border-[#DCE8EF] leading-relaxed">
                    Identify → Evaluate → Develop → Implement
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Sidebar Contact Card */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-8 text-white shadow-xl border border-[#2F6F9F]/30 bg-[#071B2D]">
              <div className="absolute inset-0">
                <PrddImage
                  src={PRDD_IMAGES.approachLab}
                  alt="Concrete and materials technical consultation"
                  className="w-full h-full object-cover object-center filter saturate-50 brightness-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
                <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
              </div>

              <div className="relative z-10 text-center">
                <div className="w-10 h-10 rounded-full bg-[#123A63] border border-[#2F6F9F] flex items-center justify-center mx-auto mb-4 text-[#DCE8EF]">
                  <Boxes className="w-5 h-5 text-[#89B3D3]" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Discuss Your Materials<br />Challenge
                </h3>

                <p className="text-xs font-mono text-slate-300 mb-6 leading-relaxed">
                  Connect with PRDD to evaluate process byproducts, material formulations, or specialty concrete opportunities.
                </p>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Concrete & Materials')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>

                <div className="mt-6 pt-5 border-t border-white/15 text-left text-xs font-mono text-slate-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Direct Phone:</span>
                    <a href="tel:530-474-4819" className="text-white hover:underline">
                      530-474-4819
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Direct Email:</span>
                    <a href="mailto:robert@prdd.net" className="text-white hover:underline">
                      robert@prdd.net
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 14: FINAL CTA
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0">
            <PrddImage
              src={PRDD_IMAGES.finalCta}
              alt="Industrial materials processing and engineering infrastructure"
              className="w-full h-full object-cover object-center filter saturate-50 brightness-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
            <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>DISCUSS YOUR MATERIALS CHALLENGE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Exploring a<br />
              <span className="text-[#89B3D3] font-light">Materials Development Opportunity?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Talk with PRDD about the process, product, material or environmental application you are working to evaluate.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'Concrete & Materials')}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
              >
                <span>DISCUSS YOUR APPLICATION</span>
                <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
              </button>
            </div>

            <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-slate-300">
              <div>
                <span className="text-white font-semibold">Pacific Rim Design &amp; Development, Inc.</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="tel:530-474-4819" className="hover:text-white transition-colors">
                  530-474-4819
                </a>
                <span>·</span>
                <a href="mailto:robert@prdd.net" className="hover:text-white transition-colors">
                  robert@prdd.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
