import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Layers,
  Sparkles,
  Building2,
  Atom,
  ShieldCheck,
  CheckCircle2,
  Boxes,
  Hammer,
  GraduationCap
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { RelatedContent, RelatedItem } from '../components/interior/RelatedContent';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface AdvancedMaterialsPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const AdvancedMaterialsPage: React.FC<AdvancedMaterialsPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Advanced Materials Technology | CST';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore CST's materials-development work involving concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete."
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  const handleScrollToProcess = () => {
    const el = document.getElementById('process-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Technologies', onClick: () => onNavigate('/technologies') },
    { label: 'Advanced Materials' }
  ];

  const relatedTechs: RelatedItem[] = [
    {
      category: 'TECHNOLOGY AREA 01',
      title: 'CO₂ CAPTURE & REPURPOSING',
      description: 'Proprietary process designed to capture industrial CO₂ emissions and convert them into useful chemical products.',
      route: '/technologies/co2-capture',
      tag: 'CARBON'
    },
    {
      category: 'TECHNOLOGY AREA 02',
      title: 'NOx & SOx ABATEMENT',
      description: 'Multiple environmental processes addressing nitrogen oxides, sulfur oxides and related industrial emissions.',
      route: '/technologies/nox-sox',
      tag: 'EMISSIONS'
    },
    {
      category: 'TECHNOLOGY AREA 03',
      title: 'ADVANCED WATER TREATMENT',
      description: 'Energy-efficient approaches to water reclamation, industrial effluent treatment and seawater treatment.',
      route: '/technologies/water-treatment',
      tag: 'WATER'
    }
  ];

  return (
    <div className="bg-[#F7F7F3] text-[#20262B] selection:bg-[#2F6F9F]/30 selection:text-[#071B2D]">
      {/* ==================================================
          SECTION 1: HERO — AERION-INSPIRED ROUNDED PHOTOGRAPHIC OPENING
      ================================================== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 shadow-2xl border border-[#2F6F9F]/20">
          {/* Photographic Background with Deep Navy / Mineral Gradient Overlay */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src={PRDD_IMAGES.advancedMaterials}
              alt="Advanced materials development and concrete engineering"
              priority
              className="w-full h-full object-cover object-center filter saturate-75 contrast-110 brightness-60"
            />
            {/* Multi-layered cinematic gradient overlay for high editorial legibility */}
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
              <span>ADVANCED MATERIALS</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Integrated Large Title & Lower Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Turning Process Chemistry<br />
                <span className="text-[#89B3D3] font-light">Into Material Applications.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs aligned lower right / bottom */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  CST's materials-development work includes approaches involving concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Advanced Materials')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
                >
                  <span>DISCUSS YOUR APPLICATION</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>

                <button
                  type="button"
                  onClick={handleScrollToProcess}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-black/40 backdrop-blur-md border border-white/20 hover:border-white text-slate-200 hover:text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  <span>EXPLORE THE APPROACH</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#89B3D3]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          MAIN EDITORIAL GRID (AERION LAYOUT)
          LEFT: ~70% content width | RIGHT: ~30% information rail
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ==================================================
              LEFT COLUMN (~70% WIDTH): PRIMARY EDITORIAL STORY
          ================================================== */}
          <div className="lg:col-span-8 space-y-16 sm:space-y-24">
            
            {/* Supporting Image A: Large Top Process Visual (Rounded Container) */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DCE8EF] shadow-lg bg-[#071B2D] relative group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <PrddImage
                  src={PRDD_IMAGES.advancedMaterials}
                  alt="Industrial materials development, mineral synthesis and engineered surfaces"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-[#20262B]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
                  <span className="font-semibold text-[#123A63]">ADVANCED MATERIALS &amp; MINERAL SYNTHESIS ENVIRONMENT</span>
                </span>
                <span className="text-slate-500">[ IMAGE SLOT A ]</span>
              </div>
            </div>

            {/* Introduction Article Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>MATERIALS DEVELOPMENT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
                From Environmental Process<br />
                <span className="text-[#2F6F9F] font-light">to Material Application.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal pt-2">
                <p>
                  CST's technology development extends beyond emissions and water treatment into materials applications.
                </p>
                <p>
                  Documented CST work includes approaches to strengthening concrete and geopolymer materials using products associated with CO₂ capture, as well as development of high-surface-area polymer concrete.
                </p>
              </div>

              {/* Large Technical Highlight Statement */}
              <div className="my-8 p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
                  CORE TECHNICAL PHILOSOPHY
                </div>
                <div className="font-mono text-base sm:text-xl md:text-2xl font-bold tracking-wider text-[#123A63] flex flex-wrap items-center gap-2 sm:gap-3">
                  <span>PROCESS</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span>MATERIAL</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span className="text-[#6D9F45]">APPLICATION</span>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 5: TWO DOCUMENTED MATERIAL DIRECTIONS (CRITICAL)
                Clearly separated into distinct blocks — not combined into one material system
            ================================================== */}
            <div id="material-directions" className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>SELECTED MATERIAL DEVELOPMENT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Distinct Approaches<br />
                <span className="text-[#2F6F9F] font-light">to Advanced Materials.</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                CST's documented materials-development work encompasses two distinct directions. These represent separate technical efforts and are not combined into a single material system:
              </p>

              <div className="space-y-8 pt-2">
                {/* DIRECTION 01: CONCRETE & GEOPOLYMER MATERIALS */}
                <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
                      <span>DIRECTION 01 · CONCRETE &amp; GEOPOLYMER MATERIALS</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      CARBON-DERIVED INTEGRATION
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                    Connecting CO₂ Capture With Material Development.
                  </h3>

                  <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6">
                    <p>
                      CST documentation describes an approach to strengthening concrete and geopolymer materials using products associated with the company's CO₂ Capture &amp; Repurpose technology.
                    </p>
                    <p className="font-semibold text-[#123A63]">
                      This creates a documented connection between CST's carbon-capture work and its materials-development activities.
                    </p>
                  </div>

                  {/* Editorial Spec Line */}
                  <div className="mt-6 pt-5 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">TARGET MATRICES:</span>
                      <strong className="text-[#123A63]">Concrete &amp; Geopolymers</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">INTEGRATION:</span>
                      <strong className="text-[#2F6F9F]">CO₂ Capture Process Products</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">OBJECTIVE:</span>
                      <strong className="text-[#123A63]">Material Strengthening</strong>
                    </span>
                  </div>
                </div>

                {/* DIRECTION 02: HIGH-SURFACE-AREA POLYMER CONCRETE */}
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
                    A Separate Materials Development Approach.
                  </h3>

                  <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6">
                    <p>
                      CST documentation also identifies a process for producing high-surface-area polymer concrete.
                    </p>
                    <p className="font-semibold text-[#123A63]">
                      This represents a separate materials-development direction from the concrete and geopolymer work associated with CO₂ capture.
                    </p>
                  </div>

                  {/* Editorial Spec Line */}
                  <div className="mt-6 pt-5 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">MATERIAL TYPE:</span>
                      <strong className="text-[#123A63]">High-Surface-Area Polymer Concrete</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">DESIGNATION:</span>
                      <strong className="text-[#6D9F45]">Specialized Engineered Matrix</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">DEVELOPMENT:</span>
                      <strong className="text-[#123A63]">Separately Identified Direction</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 6: CONCEPTUAL MATERIALS VISUALIZATION (Signature Element)
                Two distinct visual branches: CO2 Capture branch & High-surface-area polymer branch
            ================================================== */}
            <div id="process-overview" className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

              <div className="relative">
                <div className="max-w-2xl mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>TECHNICAL ARCHITECTURE</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Conceptual Materials Visualization
                  </h3>
                </div>

                {/* Two Distinct Visual Branches */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
                  
                  {/* BRANCH 1: CO2-Derived Material Branch (Cols 7) */}
                  <div className="lg:col-span-7 bg-[#0b243d]/80 border border-[#2F6F9F]/40 p-6 sm:p-7 rounded-2xl relative shadow-md">
                    <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#2F6F9F]/30">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] font-bold">
                        BRANCH 01 · CARBON-DERIVED PATHWAY
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#123A63] text-white rounded">
                        CO₂ LINKED
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {/* Step 1 */}
                      <div className="bg-[#071B2D] border border-[#2F6F9F]/50 p-4 rounded-xl text-center">
                        <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                          SOURCE PROCESS
                        </div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          CO₂ CAPTURE &amp; REPURPOSE PROCESS
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                      </div>

                      {/* Step 2 */}
                      <div className="bg-[#071B2D] border border-[#2F6F9F]/50 p-4 rounded-xl text-center">
                        <div className="text-[9px] font-mono uppercase tracking-wider text-[#89B3D3] mb-0.5">
                          CAPTURED COMPOUNDS
                        </div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          CO₂-DERIVED PRODUCTS
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                      </div>

                      {/* Step 3 */}
                      <div className="bg-[#123A63] border border-[#2F6F9F] p-4 rounded-xl text-center shadow-inner">
                        <div className="text-[9px] font-mono uppercase tracking-wider text-[#89B3D3] mb-0.5">
                          ENGINEERED INTEGRATION
                        </div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          MATERIAL DEVELOPMENT
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <ArrowDown className="w-4 h-4 text-[#6D9F45]" />
                      </div>

                      {/* Step 4 */}
                      <div className="bg-[#071B2D] border-2 border-[#6D9F45] p-4 rounded-xl text-center shadow-md">
                        <div className="text-[9px] font-mono uppercase tracking-wider text-[#6D9F45] mb-0.5">
                          TARGET MATRICES
                        </div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          CONCRETE / GEOPOLYMER APPLICATIONS
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BRANCH 2: High-Surface-Area Polymer Concrete Branch (Cols 5) */}
                  <div className="lg:col-span-5 bg-[#0b243d]/80 border border-[#2F6F9F]/40 p-6 sm:p-7 rounded-2xl relative shadow-md">
                    <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#2F6F9F]/30">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] font-bold">
                        BRANCH 02 · SPECIALTY POLYMER MATRIX
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#071B2D] border border-white/20 text-slate-300 rounded">
                        SEPARATE
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* Step 1 */}
                      <div className="bg-[#123A63] border border-[#2F6F9F] p-5 rounded-xl text-center shadow-inner">
                        <div className="text-[9px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                          DEVELOPMENT DOMAIN
                        </div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          CST MATERIALS DEVELOPMENT
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                      </div>

                      {/* Step 2 */}
                      <div className="bg-[#071B2D] border-2 border-[#2F6F9F] p-6 rounded-xl text-center shadow-lg">
                        <div className="text-[9px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                          DOCUMENTED SPECIALTY MATERIAL
                        </div>
                        <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                          HIGH-SURFACE-AREA POLYMER CONCRETE
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-3.5 bg-[#071B2D]/60 border border-[#2F6F9F]/20 rounded-lg text-center text-[11px] font-mono text-slate-300">
                      Identified separately from carbon-capture materials research
                    </div>
                  </div>

                </div>

                {/* Caption Requirement */}
                <div className="mt-8 pt-6 border-t border-[#2F6F9F]/30 text-center text-xs font-mono text-slate-400">
                  Conceptual technology relationship. Specific formulations, process chemistry and material-performance data are proprietary or application-specific and are not presented here.
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 7: CO2-DERIVED MATERIAL PATHWAY
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>CONNECTED TECHNOLOGIES</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                From Captured Carbon<br />
                <span className="text-[#2F6F9F] font-light">Toward Material Use.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  CST's documented technology portfolio connects CO₂ capture and repurposing with materials development.
                </p>
                <p>
                  Products associated with the CO₂ Capture &amp; Repurpose process are identified in CST documentation for use in approaches involving concrete and geopolymer materials.
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

            {/* Supporting Imagery Pair (Slots B & C) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Supporting Image B */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.approachLab}
                    alt="Materials research and process chemistry laboratory"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">MATERIALS RESEARCH &amp; PROCESS EVALUATION</span>
                  <span className="text-slate-500">[ IMAGE SLOT B ]</span>
                </div>
              </div>

              {/* Supporting Image C */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.co2Capture}
                    alt="Engineered concrete matrix and material surface microstructure"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">ENGINEERED MATRIX &amp; MATERIAL STRUCTURE</span>
                  <span className="text-slate-500">[ IMAGE SLOT C ]</span>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 8: MATERIAL OUTPUT CONTEXT
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>FROM CAPTURE TO MATERIALS</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                A Broader Path for<br />
                <span className="text-[#2F6F9F] font-light">CO₂-Derived Products.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  CST's CO₂ Capture &amp; Repurpose documentation identifies sodium carbonate and sodium bicarbonate as products of the process and also identifies calcium carbonate as a material that can be produced from sodium carbonate.
                </p>
                <p>
                  The materials-development work expands the broader concept of moving from captured emissions toward useful material applications.
                </p>
              </div>

              {/* Restrained Technical Formula Treatments */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {/* Product 01 */}
                <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">
                    IDENTIFIED PRODUCT
                  </div>
                  <div className="font-display text-lg font-bold text-[#123A63] mb-2">
                    Sodium Carbonate
                  </div>
                  <div className="font-mono text-2xl font-bold text-[#2F6F9F] mb-3">
                    Na₂CO₃
                  </div>
                  <p className="text-xs text-[#20262B] leading-relaxed border-t border-[#DCE8EF] pt-3">
                    Primary product documented in the CST CO₂ Capture &amp; Repurpose process.
                  </p>
                </div>

                {/* Product 02 */}
                <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">
                    IDENTIFIED PRODUCT
                  </div>
                  <div className="font-display text-lg font-bold text-[#123A63] mb-2">
                    Sodium Bicarbonate
                  </div>
                  <div className="font-mono text-2xl font-bold text-[#123A63] mb-3">
                    NaHCO₃
                  </div>
                  <p className="text-xs text-[#20262B] leading-relaxed border-t border-[#DCE8EF] pt-3">
                    Product documented in the CST CO₂ Capture &amp; Repurpose process.
                  </p>
                </div>

                {/* Product 03 */}
                <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">
                    PRODUCED MATERIAL
                  </div>
                  <div className="font-display text-lg font-bold text-[#123A63] mb-2">
                    Calcium Carbonate
                  </div>
                  <div className="font-mono text-2xl font-bold text-[#6D9F45] mb-3">
                    CaCO₃
                  </div>
                  <p className="text-xs text-[#20262B] leading-relaxed border-t border-[#DCE8EF] pt-3">
                    Identified as a material that can be produced from sodium carbonate.
                  </p>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 9: APPLICATION CONTEXT
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>MATERIAL APPLICATIONS</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Developing Materials<br />
                <span className="text-[#2F6F9F] font-light">Around the Process.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  CST's materials work reflects the company's broader process-development approach: connect chemistry, engineering and practical implementation to explore useful applications for developed processes and products.
                </p>
              </div>

              {/* Supporting Image D: Industrial / Materials Processing Environment */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.finalCta}
                    alt="Industrial materials processing and engineering infrastructure"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">INDUSTRIAL MATERIALS PROCESSING &amp; ENGINEERING ENVIRONMENT</span>
                  <span className="text-slate-500">[ IMAGE SLOT D ]</span>
                </div>
              </div>

              {/* ==================================================
                  SECTION 10: PRACTICAL IMPLEMENTATION PERSPECTIVE — DR. RICHARDSON
              ================================================== */}
              <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>SCIENCE + IMPLEMENTATION</span>
                  </div>
                  <div className="px-2.5 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-md text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">
                    DUAL PERSPECTIVE
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                  Materials Development With a Construction Perspective.
                </h3>

                <p className="text-base sm:text-lg text-[#20262B] leading-relaxed mb-6">
                  CST President Dr. Robert Richardson combines a background as a Ph.D. chemist with experience as a Licensed General Contractor.
                </p>
                <p className="text-base text-slate-600 leading-relaxed mb-8">
                  That combination provides CST with both scientific process-development and practical construction perspectives when evaluating materials and their potential applications.
                </p>

                <div>
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
            </div>

            {/* ==================================================
                SECTION 11: DEVELOPMENT APPROACH (4 STAGES)
            ================================================== */}
            <div className="space-y-8 pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>FROM PROCESS TO APPLICATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Developing a Material<br />
                <span className="text-[#2F6F9F] font-light">Around the Opportunity.</span>
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
                    DEVELOP
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Develop and evaluate the materials approach.
                  </p>
                </div>

                <div className="pt-4 sm:pt-0 sm:px-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-1">
                    03
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    ENGINEER
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Consider practical implementation and application requirements.
                  </p>
                </div>

                <div className="pt-4 sm:pt-0 sm:pl-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#6D9F45] block mb-1">
                    04
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    COMMERCIALIZE
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Support development toward commercially useful applications where appropriate.
                  </p>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 12: RELATED TECHNOLOGIES (Understated)
            ================================================== */}
            <div className="pt-8 border-t border-[#DCE8EF]">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>RELATED CST TECHNOLOGIES</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-8">
                A Broader Environmental Technology Platform.
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTechs.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => onNavigate(item.route)}
                    className="p-6 bg-white border border-[#DCE8EF] rounded-2xl hover:border-[#2F6F9F] transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-mono text-[#2F6F9F] uppercase mb-2">
                        {item.tag}
                      </div>
                      <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ==================================================
              RIGHT COLUMN (~30% WIDTH): AERION-STYLE ASYMMETRIC SIDEBAR
          ================================================== */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            
            {/* Panel 1: Technology Information Sidebar */}
            <div className="bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DCE8EF]">
                <div className="font-display text-base sm:text-lg font-bold text-[#123A63] tracking-tight">
                  Technology Information
                </div>
                <Boxes className="w-4 h-4 text-[#2F6F9F]" />
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    CATEGORY
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Advanced Materials
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    FOCUS
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Materials Development
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
                    RELATED TECHNOLOGY
                  </div>
                  <div className="font-semibold text-[#2F6F9F]">
                    CO₂ Capture &amp; Repurposing
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
                    Identify → Develop → Engineer → Commercialize
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Sidebar Contact Card */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-8 text-white shadow-xl border border-[#2F6F9F]/30 bg-[#071B2D]">
              {/* Background with Dark Navy Industrial Imagery */}
              <div className="absolute inset-0">
                <PrddImage
                  src={PRDD_IMAGES.approachLab}
                  alt="CST materials engineering dialogue"
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
                  Discuss Your Materials<br />Application
                </h3>

                <p className="text-xs font-mono text-[#DCE8EF]/90 mb-4">
                  Clean Scrub Technologies
                </p>

                <div className="space-y-1 mb-6 text-sm font-mono text-slate-200">
                  <div>
                    <a href="tel:530-474-4819" className="hover:text-white transition-colors">
                      530-474-4819
                    </a>
                  </div>
                  <div>
                    <a href="mailto:robert@prdd.net" className="hover:text-white transition-colors">
                      robert@prdd.net
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Advanced Materials')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#2F6F9F] hover:bg-[#123A63] text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 border border-white/20 cursor-pointer shadow-lg"
                >
                  <span>CONTACT CST</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 13: LARGE CLOSING CTA
          Wide rounded rectangular CTA in CST Deep Navy / Industrial Blue
      ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto py-12 sm:py-20">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#071B2D] via-[#0b243d] to-[#123A63] border border-[#2F6F9F]/40 p-8 sm:p-14 lg:p-20 text-center shadow-2xl">
          {/* Engineering Grid & Radial Highlight */}
          <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2F6F9F]/20 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>DISCUSS YOUR APPLICATION</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Exploring a Materials<br />
              <span className="text-[#89B3D3] font-light">Development Challenge?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Talk with CST about concrete, geopolymer, CO₂-derived material or environmental materials-development applications.
            </p>

            <button
              type="button"
              onClick={() => onNavigate('/contact', 'Advanced Materials')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2F6F9F] hover:bg-[#123A63] text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl border border-white/20 cursor-pointer"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
            </button>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-300">
              <span className="text-white font-semibold">Clean Scrub Technologies</span>
              <span>·</span>
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
      </section>
    </div>
  );
};
