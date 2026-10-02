import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Factory,
  Layers,
  Sparkles,
  Building2,
  Atom,
  ShieldCheck,
  CheckCircle2,
  Check,
  RefreshCw,
  Boxes,
  Wind
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface ResourceRecoveryPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const ResourceRecoveryPage: React.FC<ResourceRecoveryPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Resource Recovery Applications | CST';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore CST's application-driven approach to resource recovery, including CO₂ repurposing, emissions process development and connections to useful materials."
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
    const el = document.getElementById('recovery-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Applications', onClick: () => onNavigate('/applications') },
    { label: 'Resource Recovery' }
  ];

  const relatedApps = [
    {
      category: 'APPLICATION 01',
      title: 'Industrial Emissions',
      description: 'Emissions-control and process-development approaches addressing CO₂, NOx, SOx, amines and specialized gases.',
      route: '/applications/industrial-emissions'
    },
    {
      category: 'APPLICATION 03',
      title: 'Concrete & Materials',
      description: 'Approaches involving concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete.',
      route: '/applications/concrete-materials'
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
          {/* Photographic Background with Deep Navy Resource Recovery Scrim */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src="/images/prdd/applications/prdd-application-recovery.jpg"
              alt="Industrial byproduct stream conversion and resource recovery facility"
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
              <span>RESOURCE RECOVERY</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Title & Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Look Beyond<br />
                <span className="text-[#89B3D3] font-light">Waste Treatment.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  CST evaluates environmental challenges for opportunities to capture, convert or repurpose pollutants and process streams into useful products or materials where technically appropriate.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Resource Recovery')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] text-white text-xs font-sans font-bold tracking-wider uppercase rounded-full transition-all duration-300 active:scale-95 shadow-xl shadow-[#0084CD]/20 hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>DISCUSS YOUR PROCESS STREAM</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>

                <button
                  type="button"
                  onClick={handleScrollToOverview}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0c263f]/80 backdrop-blur-md border border-white/20 hover:border-[#0084CD] text-slate-200 hover:text-white text-xs font-sans font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
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
            
            {/* Supporting Image: Top Byproduct Conversion Visual */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DCE8EF] shadow-lg bg-[#071B2D] relative group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <PrddImage
                  src="/images/prdd/applications/prdd-application-recovery.jpg"
                  alt="Industrial byproduct stream repurposing and resource recovery infrastructure"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-[#20262B]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
                  <span className="font-semibold text-[#123A63]">INDUSTRIAL BYPRODUCT &amp; RESOURCE CONVERSION ENVIRONMENT</span>
                </span>
                <span className="text-slate-500">[ APPLICATION SLOT A ]</span>
              </div>
            </div>

            {/* Introduction Article Section (Section 3) */}
            <div id="recovery-overview" className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>APPLICATION CONTEXT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
                When a Waste Stream<br />
                <span className="text-[#2F6F9F] font-light">May Become a Resource.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal pt-2">
                <p>
                  Environmental process development does not always have to end with pollutant removal or disposal.
                </p>
                <p>
                  A recurring theme in CST's documented work is evaluating whether an environmental problem can be addressed through a process that also creates a useful product or material.
                </p>
                <p className="text-slate-600">
                  Whether that opportunity exists depends on the chemistry, process stream and requirements of the specific application.
                </p>
              </div>

              {/* Highlight Statement */}
              <div className="my-8 p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
                  RESOURCE RECOVERY LENS
                </div>
                <div className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-wider text-[#123A63] flex flex-wrap items-center gap-2 sm:gap-4">
                  <span>CAPTURE</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span>CONVERT</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span className="text-[#6D9F45]">REPURPOSE</span>
                </div>
              </div>

              {/* Supporting note */}
              <div className="pt-2 text-xs font-mono text-slate-500">
                Not every pollutant or process stream is suitable for resource recovery, and not every CST application follows this path.
              </div>
            </div>

            {/* ==================================================
                SECTION 5: RESOURCE RECOVERY IS AN APPLICATION LENS
                One Objective. Different Technical Paths.
            ================================================== */}
            <div className="space-y-6 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>ACROSS THE TECHNOLOGY PORTFOLIO</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                One Objective.<br />
                <span className="text-[#2F6F9F] font-light">Different Technical Paths.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  Resource recovery is not presented as one standalone CST treatment system.
                </p>
                <p>
                  Instead, the concept appears across multiple areas of CST's technology-development work.
                </p>
                <p className="text-slate-600">
                  The specific path depends on the pollutant or process stream being addressed.
                </p>
              </div>
            </div>

            {/* ==================================================
                SECTIONS 6, 7 & 8: THREE SUBSTANTIAL APPLICATION DIRECTIONS
            ================================================== */}
            <div className="space-y-8 pt-2">
              
              {/* Direction 01: Carbon Dioxide (Section 6) */}
              <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
                    <span>01 · CARBON DIOXIDE</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    CO₂ REPURPOSING
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                  Capture CO₂. Create Identified Products.
                </h3>

                <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6 font-normal">
                  <p>
                    CST's patented CO₂ Capture &amp; Repurpose process is designed to capture carbon dioxide and convert it into identified useful products.
                  </p>
                  <p>
                    CST documentation identifies sodium carbonate and sodium bicarbonate as products of the process, together with hydrochloric acid.
                  </p>
                  <p className="text-slate-600">
                    Calcium carbonate can also be produced from sodium carbonate.
                  </p>
                </div>

                <div className="pt-5 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-slate-500">
                    Relevant technology: <strong className="text-[#123A63]">CO₂ Capture &amp; Repurposing</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/technologies/co2-capture')}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    <span>EXPLORE CO₂ TECHNOLOGY</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                  </button>
                </div>
              </div>

              {/* Direction 02: Nitrogen & Sulfur Oxides (Section 7) */}
              <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>02 · NITROGEN &amp; SULFUR OXIDES</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    EMISSIONS RECOVERY
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                  Treat Emissions With Product Recovery in Mind.
                </h3>

                <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6 font-normal">
                  <p>
                    CST documentation describes multiple process-development approaches for nitrogen and sulfur oxides, including approaches in which useful chemical products are identified as resulting products.
                  </p>
                  <p className="text-slate-600">
                    These approaches are distinct and should not be presented as one universal NOx / SOx process.
                  </p>
                </div>

                <div className="pt-5 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-slate-500">
                    Relevant technology: <strong className="text-[#123A63]">NOx &amp; SOx Abatement</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/technologies/nox-sox')}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    <span>EXPLORE NOx &amp; SOx TECHNOLOGY</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                  </button>
                </div>
              </div>

              {/* Direction 03: Materials Connections (Section 8) */}
              <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#89B3D3]" />
                    <span>03 · MATERIAL CONNECTIONS</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    PROCESS TO MATERIAL
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                  From Process Product to Material Opportunity.
                </h3>

                <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6 font-normal">
                  <p>
                    CST's documented technology portfolio also connects products associated with CO₂ capture and repurposing to materials-development work involving concrete and geopolymers.
                  </p>
                  <p className="text-slate-600">
                    This creates another potential resource-recovery path: connecting an environmental process product with a materials application where technically appropriate.
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
                    Relevant: <strong className="text-[#123A63]">Advanced Materials &amp; CO₂ Capture</strong>
                  </span>
                </div>
              </div>

            </div>

            {/* ==================================================
                SECTION 9: RESOURCE-RECOVERY VISUALIZATION
                Shows three separate conceptual branches — NOT merged
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
                    Resource-Recovery Visualization
                  </h3>
                </div>

                {/* Conceptual Process Flow (Top to Bottom then 3 Branches) */}
                <div className="max-w-3xl mx-auto space-y-6 my-8">
                  {/* Step 1: Environmental Challenge */}
                  <div className="bg-[#0b243d] border border-[#2F6F9F]/50 p-5 rounded-2xl text-center shadow-md max-w-xl mx-auto">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      INPUT CONDITION
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      ENVIRONMENTAL CHALLENGE
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                  </div>

                  {/* Step 2: Characterize the Stream */}
                  <div className="bg-[#103252] border border-[#2F6F9F] p-5 rounded-2xl text-center shadow-md max-w-xl mx-auto">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      STREAM EVALUATION
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      CHARACTERIZE THE STREAM
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                  </div>

                  {/* Step 3: Technical Appropriateness Evaluation */}
                  <div className="bg-[#0b243d] border-2 border-[#2F6F9F] p-5 rounded-2xl text-center shadow-lg max-w-xl mx-auto">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      EVALUATION CRITERIA
                    </div>
                    <div className="font-display text-sm sm:text-base font-bold text-white tracking-wide">
                      IS A USEFUL PRODUCT OR MATERIAL PATH TECHNICALLY APPROPRIATE?
                    </div>
                  </div>

                  {/* Arrow Down splitting to three branches */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#89B3D3]" />
                  </div>

                  {/* Three Distinct Branches (Side by Side on desktop) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Branch 1: CO2 */}
                    <div className="bg-[#0c263f] border border-[#2F6F9F]/40 p-5 rounded-xl text-center space-y-2.5">
                      <div className="text-[10px] font-mono text-[#89B3D3] uppercase tracking-wider">
                        PATHWAY 01
                      </div>
                      <div className="font-display text-base font-bold text-white">
                        CO₂
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#2F6F9F]" />
                      </div>
                      <div className="font-mono text-xs text-[#DCE8EF] bg-[#071B2D] p-2.5 rounded-lg border border-[#2F6F9F]/30">
                        CO₂ CAPTURE &amp; REPURPOSING
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#6D9F45]" />
                      </div>
                      <div className="font-mono text-xs font-semibold text-[#6D9F45]">
                        IDENTIFIED PRODUCTS
                      </div>
                    </div>

                    {/* Branch 2: NOx / SOx */}
                    <div className="bg-[#0c263f] border border-[#2F6F9F]/40 p-5 rounded-xl text-center space-y-2.5">
                      <div className="text-[10px] font-mono text-[#89B3D3] uppercase tracking-wider">
                        PATHWAY 02
                      </div>
                      <div className="font-display text-base font-bold text-white">
                        NOx / SOx
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#2F6F9F]" />
                      </div>
                      <div className="font-mono text-xs text-[#DCE8EF] bg-[#071B2D] p-2.5 rounded-lg border border-[#2F6F9F]/30">
                        APPLICATION-SPECIFIC ABATEMENT APPROACH
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#6D9F45]" />
                      </div>
                      <div className="font-mono text-xs font-semibold text-[#6D9F45]">
                        IDENTIFIED CHEMICAL PRODUCTS WHERE APPLICABLE
                      </div>
                    </div>

                    {/* Branch 3: Process Products to Materials */}
                    <div className="bg-[#0c263f] border border-[#2F6F9F]/40 p-5 rounded-xl text-center space-y-2.5">
                      <div className="text-[10px] font-mono text-[#89B3D3] uppercase tracking-wider">
                        PATHWAY 03
                      </div>
                      <div className="font-display text-base font-bold text-white">
                        PROCESS PRODUCTS
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#2F6F9F]" />
                      </div>
                      <div className="font-mono text-xs text-[#DCE8EF] bg-[#071B2D] p-2.5 rounded-lg border border-[#2F6F9F]/30">
                        MATERIALS DEVELOPMENT
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#6D9F45]" />
                      </div>
                      <div className="font-mono text-xs font-semibold text-[#6D9F45]">
                        MATERIAL OPPORTUNITY
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption Requirement */}
                <div className="mt-8 pt-6 border-t border-[#2F6F9F]/30 text-center text-xs font-mono text-slate-400 max-w-2xl mx-auto">
                  Conceptual application map. Resource-recovery opportunities depend on the characteristics of the specific pollutant, process stream and application.
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 10: CO2 PRODUCT CONTEXT
                Restrained technical display
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>DOCUMENTED PRODUCT PATH</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                From Captured Carbon to Identified Products.
              </h3>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                CST documentation identifies these products in connection with its CO₂ Capture &amp; Repurpose process.
              </p>

              {/* Technical Restrained Display */}
              <div className="p-6 sm:p-8 bg-[#071B2D] text-white rounded-2xl border border-[#2F6F9F]/30 shadow-md my-6 space-y-6">
                <div className="text-center">
                  <div className="font-mono text-xs text-[#89B3D3] uppercase tracking-wider mb-2">FEEDSTOCK</div>
                  <div className="inline-block px-5 py-2.5 bg-[#0c263f] border border-[#2F6F9F]/50 rounded-xl font-mono text-sm font-bold text-white">
                    CAPTURED CO₂
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                </div>

                <div className="text-center">
                  <div className="font-mono text-xs text-[#89B3D3] uppercase tracking-wider mb-2">PROCESS</div>
                  <div className="inline-block px-6 py-3 bg-[#123A63] border-2 border-[#2F6F9F] rounded-xl font-mono text-sm font-bold text-white shadow">
                    CST CO₂ CAPTURE &amp; REPURPOSE PROCESS
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                </div>

                <div>
                  <div className="font-mono text-xs text-[#89B3D3] uppercase tracking-wider text-center mb-3">
                    IDENTIFIED PRODUCTS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl text-center">
                      <div className="text-xs font-display font-semibold text-slate-200">Sodium Carbonate</div>
                      <div className="font-mono text-sm font-bold text-[#89B3D3] mt-0.5">Na₂CO₃</div>
                    </div>
                    <div className="p-3.5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl text-center">
                      <div className="text-xs font-display font-semibold text-slate-200">Sodium Bicarbonate</div>
                      <div className="font-mono text-sm font-bold text-[#89B3D3] mt-0.5">NaHCO₃</div>
                    </div>
                    <div className="p-3.5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl text-center">
                      <div className="text-xs font-display font-semibold text-slate-200">Hydrochloric Acid</div>
                      <div className="font-mono text-sm font-bold text-[#89B3D3] mt-0.5">HCl</div>
                    </div>
                  </div>
                </div>

                {/* Secondary Relationship */}
                <div className="pt-4 border-t border-[#2F6F9F]/30">
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider text-center mb-3">
                    SECONDARY RELATIONSHIP
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs text-center">
                    <div className="px-4 py-2 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-lg text-slate-200 w-full sm:w-auto">
                      SODIUM CARBONATE
                    </div>
                    <div className="text-[#2F6F9F] font-bold rotate-90 sm:rotate-0">
                      →
                    </div>
                    <div className="px-4 py-2 bg-[#123A63] border border-[#6D9F45] rounded-lg text-white font-semibold w-full sm:w-auto">
                      CALCIUM CARBONATE (CaCO₃)
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/technologies/co2-capture')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                >
                  <span>EXPLORE THE CO₂ PROCESS</span>
                  <ArrowRight className="w-4 h-4 text-[#2F6F9F]" />
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
                    alt="Process chemistry and product recovery laboratory"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">PRODUCT IDENTIFICATION &amp; LAB TESTING</span>
                  <span className="text-slate-500">[ APPLICATION SLOT B ]</span>
                </div>
              </div>

              {/* Supporting Image C */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.co2Capture}
                    alt="Carbon dioxide conversion and byproduct engineering infrastructure"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">ENGINEERED CHEMICAL REPURPOSING</span>
                  <span className="text-slate-500">[ APPLICATION SLOT C ]</span>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 11: USEFUL PRODUCTS — NOT JUST REMOVAL
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>PROCESS DEVELOPMENT PHILOSOPHY</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                Consider What Happens After the Pollutant Is Captured.
              </h3>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  CST's documented environmental process-development work includes approaches intended not only to address pollutants, but also to identify useful products that may result from treatment.
                </p>
                <p className="text-slate-600">
                  This product-oriented perspective appears in several areas of CST's technology portfolio.
                </p>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-500">
                Product recovery depends on the specific process and application and should not be assumed for every CST technology or environmental challenge.
              </div>
            </div>

            {/* ==================================================
                SECTION 12: FROM RESOURCE RECOVERY TO COMMERCIALIZATION
                Four Restrained Stages
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>BEYOND PROCESS DEVELOPMENT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                A Useful Product Still<br />
                <span className="text-[#2F6F9F] font-light">Needs a Practical Path Forward.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  CST's broader development approach includes process development, engineering, implementation and commercialization considerations where appropriate.
                </p>
                <p>
                  For resource-recovery applications, the existence of an identified product does not by itself establish commercial viability.
                </p>
                <p className="font-medium text-[#123A63]">
                  Technical development and commercialization are separate considerations.
                </p>
              </div>

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
                    Identify the pollutant, waste stream or process challenge.
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
                    Determine whether a useful product or material path may be technically appropriate.
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
                    Develop and evaluate the application-specific process.
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
            </div>

            {/* ==================================================
                SECTION 13: HISTORICAL EXPERIENCE (ONLY ROCK CANYON OIL)
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  <span>SELECTED PROJECT CONTEXT</span>
                </div>
                <div className="px-2.5 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-md text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">
                  HISTORICAL PROJECT EXPERIENCE
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                Resource Recovery in Historical CST Work.
              </h3>

              <div className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] rounded-2xl">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 className="font-display text-lg font-bold text-[#123A63]">
                    ROCK CANYON OIL
                  </h4>
                  <span className="text-xs font-mono text-[#2F6F9F] font-semibold uppercase tracking-wider">
                    OIL RECOVERY
                  </span>
                </div>
                <p className="text-sm text-[#20262B] leading-relaxed">
                  CST project history includes CO₂ capture work associated with secondary oil recovery, with tertiary oil recovery and carbon-credit considerations documented in the project history.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                >
                  <span>VIEW ALL PROJECT EXPERIENCE</span>
                  <ArrowRight className="w-4 h-4 text-[#2F6F9F]" />
                </button>
              </div>
            </div>

            {/* ==================================================
                SECTION 14: RELEVANT TECHNOLOGIES (Three Connections)
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>EXPLORE THE TECHNOLOGY</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                Resource Recovery Across CST's Portfolio.
              </h3>

              <div className="space-y-4 pt-2">
                {/* Tech 01 */}
                <div
                  onClick={() => onNavigate('/technologies/co2-capture')}
                  className="p-5 sm:p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="max-w-xl">
                    <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">
                      TECHNOLOGY AREA 01
                    </div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-1">
                      CO₂ CAPTURE &amp; REPURPOSING
                    </h4>
                    <p className="text-xs text-[#20262B] leading-relaxed">
                      Capturing carbon dioxide and converting it into identified useful products.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] flex-shrink-0">
                    <span>Explore Technology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Tech 02 */}
                <div
                  onClick={() => onNavigate('/technologies/nox-sox')}
                  className="p-5 sm:p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="max-w-xl">
                    <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">
                      TECHNOLOGY AREA 02
                    </div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-1">
                      NOx &amp; SOx ABATEMENT
                    </h4>
                    <p className="text-xs text-[#20262B] leading-relaxed">
                      Multiple process-development approaches addressing nitrogen and sulfur oxides, including approaches associated with useful chemical products.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] flex-shrink-0">
                    <span>Explore Technology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Tech 03 */}
                <div
                  onClick={() => onNavigate('/technologies/advanced-materials')}
                  className="p-5 sm:p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="max-w-xl">
                    <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">
                      TECHNOLOGY AREA 03
                    </div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-1">
                      ADVANCED MATERIALS
                    </h4>
                    <p className="text-xs text-[#20262B] leading-relaxed">
                      Materials-development work connecting process chemistry, CO₂-derived products and material opportunities.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] flex-shrink-0">
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
                SECTION 15: RELATED APPLICATIONS (Understated)
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
                <RefreshCw className="w-4 h-4 text-[#2F6F9F]" />
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    APPLICATION
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Resource Recovery
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    DOCUMENTED DIRECTIONS
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div className="font-semibold text-[#123A63]">CO₂ Repurposing</div>
                    <div className="font-semibold text-[#123A63]">Chemical Product Recovery</div>
                    <div className="font-semibold text-[#123A63]">Materials Connections</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    RELEVANT TECHNOLOGIES
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div className="font-semibold text-[#2F6F9F]">CO₂ Capture &amp; Repurposing</div>
                    <div className="font-semibold text-[#2F6F9F]">NOx &amp; SOx Abatement</div>
                    <div className="font-semibold text-[#2F6F9F]">Advanced Materials</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    APPROACH
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Application-Specific Process Development
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    OBJECTIVE
                  </div>
                  <div className="font-medium text-[#20262B] bg-[#F7F7F3] p-2.5 rounded-lg border border-[#DCE8EF] leading-relaxed">
                    Useful Product or Material Where Technically Appropriate
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
                  alt="Resource recovery process consultation"
                  className="w-full h-full object-cover object-center filter saturate-50 brightness-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
                <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
              </div>

              <div className="relative z-10 text-center">
                <div className="w-10 h-10 rounded-full bg-[#123A63] border border-[#2F6F9F] flex items-center justify-center mx-auto mb-4 text-[#DCE8EF]">
                  <RefreshCw className="w-5 h-5 text-[#89B3D3]" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Discuss Your Process<br />Stream
                </h3>

                <p className="text-xs font-mono text-slate-300 mb-6 leading-relaxed">
                  Connect with CST to evaluate whether a useful product or material path may be technically appropriate for your process stream.
                </p>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Resource Recovery')}
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
          SECTION 16: FINAL CTA
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0">
            <PrddImage
              src={PRDD_IMAGES.finalCta}
              alt="Industrial resource recovery and chemical process engineering"
              className="w-full h-full object-cover object-center filter saturate-50 brightness-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
            <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>DISCUSS YOUR PROCESS STREAM</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Could Your Environmental<br />
              <span className="text-[#89B3D3] font-light">Challenge Have a Recovery Path?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Talk with CST about the pollutant, waste stream, process stream or material opportunity you are working to evaluate.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'Resource Recovery')}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
              >
                <span>DISCUSS YOUR APPLICATION</span>
                <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
              </button>
            </div>

            <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-slate-300">
              <div>
                <span className="text-white font-semibold">Clean Scrub Technologies</span>
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
