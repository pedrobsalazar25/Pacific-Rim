import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Wind,
  Factory,
  Layers,
  Sparkles,
  Building2,
  Atom,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Plane,
  Flame,
  AlertTriangle
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface IndustrialEmissionsPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const IndustrialEmissionsPage: React.FC<IndustrialEmissionsPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Industrial Emissions Applications | CST';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore CST's application-driven approach to industrial emissions challenges involving CO₂, NOx, SOx and other complex air-quality problems."
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
    const el = document.getElementById('emissions-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Applications', onClick: () => onNavigate('/applications') },
    { label: 'Industrial Emissions' }
  ];

  const relatedApps = [
    {
      category: 'APPLICATION 04',
      title: 'Resource Recovery',
      description: 'Converting pollutants or process streams into useful products or materials where technically appropriate.',
      route: '/applications/resource-recovery'
    },
    {
      category: 'APPLICATION 02',
      title: 'Water & Wastewater',
      description: 'Water-treatment process development and environmental engineering experience in municipal and industrial environments.',
      route: '/applications/water-wastewater'
    },
    {
      category: 'APPLICATION 03',
      title: 'Concrete & Materials',
      description: 'Approaches involving concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete.',
      route: '/applications/concrete-materials'
    }
  ];

  return (
    <div className="bg-[#F7F7F3] text-[#20262B] selection:bg-[#2F6F9F]/30 selection:text-[#071B2D]">
      {/* ==================================================
          SECTION 2: HERO — EDITORIAL APPLICATION DETAIL OPENING
      ================================================== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 shadow-2xl border border-[#2F6F9F]/20">
          {/* Photographic Background with Deep Navy Industrial Scrim */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src="/images/prdd/applications/prdd-application-emissions.jpg"
              alt="Industrial flue gas and air emissions treatment facility"
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
              <span>INDUSTRIAL EMISSIONS</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Title & Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Different Emissions.<br />
                <span className="text-[#89B3D3] font-light">Different Process Challenges.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  CST develops environmental process approaches around the specific pollutants, operating conditions and practical requirements of industrial emissions challenges.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Industrial Emissions')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
                >
                  <span>DISCUSS YOUR EMISSIONS CHALLENGE</span>
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
            
            {/* Supporting Image: Top Industrial Flue Gas Treatment Visual */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DCE8EF] shadow-lg bg-[#071B2D] relative group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <PrddImage
                  src="/images/prdd/applications/prdd-application-emissions.jpg"
                  alt="Industrial emissions treatment and process engineering infrastructure"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-[#20262B]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
                  <span className="font-semibold text-[#123A63]">INDUSTRIAL FLUE GAS &amp; AIR EMISSIONS OPERATING ENVIRONMENT</span>
                </span>
                <span className="text-slate-500">[ APPLICATION SLOT A ]</span>
              </div>
            </div>

            {/* Introduction Article Section */}
            <div id="emissions-overview" className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>APPLICATION CONTEXT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
                Start With<br />
                <span className="text-[#2F6F9F] font-light">the Emissions Stream.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal pt-2">
                <p>
                  Industrial air emissions are not a single problem.
                </p>
                <p>
                  CST's documented work spans carbon dioxide, nitrogen oxides, sulfur oxides and other challenging air-quality problems encountered in industrial environments.
                </p>
                <p className="text-slate-600">
                  The appropriate process-development path depends on the pollutants and requirements of the specific application.
                </p>
              </div>

              {/* Highlight Statement */}
              <div className="my-8 p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
                  APPLICATION METHODOLOGY
                </div>
                <div className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-wider text-[#123A63] flex flex-wrap items-center gap-2 sm:gap-3">
                  <span>CHARACTERIZE</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span>EVALUATE</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span>DEVELOP</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span className="text-[#6D9F45]">IMPLEMENT</span>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 5: DIFFERENT POLLUTANTS — DIFFERENT PATHS
                Four distinct editorial entries — application categories, NOT one universal system
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>EMISSIONS CHALLENGES</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                The Pollutant Determines<br />
                <span className="text-[#2F6F9F] font-light">the Development Path.</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                CST approaches emissions challenges by evaluating the chemical characteristics of the target stream. These represent distinct application categories:
              </p>

              <div className="space-y-6 pt-2">
                {/* 01: Carbon Dioxide */}
                <div className="p-7 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#123A63] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
                      <span>CATEGORY 01 · CARBON DIOXIDE</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      CO₂ CAPTURE &amp; REPURPOSE
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#123A63] mb-3">
                    CO₂ Capture With a Repurposing Path.
                  </h3>

                  <p className="text-base text-[#20262B] leading-relaxed mb-6 font-normal">
                    CST has developed a patented CO₂ Capture &amp; Repurpose process designed to capture carbon dioxide and convert it into commercially useful products.
                  </p>

                  <div className="pt-4 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-500">
                      Relevant technology: <strong className="text-[#123A63]">CO₂ Capture &amp; Repurposing</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/technologies/co2-capture')}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                    >
                      <span>EXPLORE CO₂ TECHNOLOGY</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    </button>
                  </div>
                </div>

                {/* 02: Nitrogen Oxides */}
                <div className="p-7 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#123A63] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                      <span>CATEGORY 02 · NITROGEN OXIDES</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      NOx ABATEMENT
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#123A63] mb-3">
                    NOx Treatment Through Multiple Approaches.
                  </h3>

                  <p className="text-base text-[#20262B] leading-relaxed mb-6 font-normal">
                    CST documentation describes multiple process-development approaches for treating nitrogen oxides, including approaches designed to produce useful chemical products.
                  </p>

                  <div className="pt-4 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-500">
                      Relevant technology: <strong className="text-[#123A63]">NOx &amp; SOx Abatement</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/technologies/nox-sox')}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                    >
                      <span>EXPLORE NOx &amp; SOx TECHNOLOGY</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    </button>
                  </div>
                </div>

                {/* 03: Sulfur Oxides */}
                <div className="p-7 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#123A63] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
                      <span>CATEGORY 03 · SULFUR OXIDES</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      SOx TREATMENT
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#123A63] mb-3">
                    SOx Treatment Within Emissions Process Development.
                  </h3>

                  <p className="text-base text-[#20262B] leading-relaxed mb-6 font-normal">
                    CST documentation includes process-development work addressing sulfur oxides, including an approach treating NOx and SOx with mineral acids identified as resulting products.
                  </p>

                  <div className="pt-4 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-500">
                      Relevant technology: <strong className="text-[#123A63]">NOx &amp; SOx Abatement</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/technologies/nox-sox')}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                    >
                      <span>EXPLORE EMISSIONS TECHNOLOGY</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    </button>
                  </div>
                </div>

                {/* 04: Other Industrial Air-Quality Challenges */}
                <div className="p-7 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#123A63] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#89B3D3]" />
                      <span>CATEGORY 04 · SPECIALIZED INDUSTRIAL AIR QUALITY</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      AMINES &amp; SPECIALIZED GASES
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#123A63] mb-3">
                    Application-Specific Emissions Problems.
                  </h3>

                  <p className="text-base text-[#20262B] leading-relaxed mb-4 font-normal">
                    CST's broader historical project experience includes work involving amine abatement and treatment of toxic and explosive gases in demanding industrial environments.
                  </p>

                  <div className="p-3.5 bg-[#F7F7F3] border border-[#DCE8EF] rounded-xl text-xs font-mono text-slate-600 leading-relaxed mb-4">
                    These examples represent broader CST environmental engineering and process-development experience and should not be interpreted as one universal treatment technology.
                  </div>

                  <div className="pt-4 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-500">
                      Scope: <strong className="text-[#123A63]">Specialized Engineering Evaluation</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/contact', 'Specialized Emissions Inquiries')}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                    >
                      <span>DISCUSS SPECIALIZED CHALLENGES</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 6: CHALLENGE-TO-TECHNOLOGY VISUALIZATION
                Shows conceptual branching from emissions stream
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
                    Challenge-to-Technology Visualization
                  </h3>
                </div>

                {/* Conceptual Branching Flow */}
                <div className="max-w-3xl mx-auto space-y-6 my-8">
                  {/* Step 1: Industrial Emissions Stream */}
                  <div className="bg-[#0b243d] border border-[#2F6F9F]/50 p-5 rounded-2xl text-center shadow-md max-w-xl mx-auto">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      INPUT CONDITION
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      INDUSTRIAL EMISSIONS STREAM
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                  </div>

                  {/* Step 2: Characterize the Challenge */}
                  <div className="bg-[#103252] border-2 border-[#2F6F9F] p-5 rounded-2xl text-center shadow-lg max-w-xl mx-auto">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      FIRST PRINCIPLES EVALUATION
                    </div>
                    <div className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                      CHARACTERIZE THE CHALLENGE
                    </div>
                  </div>

                  {/* Arrow Down splitting to three branches */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#89B3D3]" />
                  </div>

                  {/* Three Distinct Branches */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Branch 1: CO2 */}
                    <div className="bg-[#0c263f] border border-[#2F6F9F]/40 p-5 rounded-xl text-center flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-[#89B3D3] uppercase tracking-wider mb-2">
                          POLLUTANT STREAM
                        </div>
                        <div className="font-display text-base font-bold text-white mb-3">
                          CO₂
                        </div>
                      </div>
                      <div className="pt-3 border-t border-[#2F6F9F]/30">
                        <div className="text-[9px] font-mono text-slate-400 mb-1">RELEVANT TECHNOLOGY</div>
                        <div className="font-mono text-xs font-semibold text-[#DCE8EF]">
                          CO₂ CAPTURE &amp; REPURPOSING
                        </div>
                      </div>
                    </div>

                    {/* Branch 2: NOx / SOx */}
                    <div className="bg-[#0c263f] border border-[#2F6F9F]/40 p-5 rounded-xl text-center flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-[#89B3D3] uppercase tracking-wider mb-2">
                          POLLUTANT STREAM
                        </div>
                        <div className="font-display text-base font-bold text-white mb-3">
                          NOx / SOx
                        </div>
                      </div>
                      <div className="pt-3 border-t border-[#2F6F9F]/30">
                        <div className="text-[9px] font-mono text-slate-400 mb-1">RELEVANT TECHNOLOGY</div>
                        <div className="font-mono text-xs font-semibold text-[#DCE8EF]">
                          NOx &amp; SOx ABATEMENT
                        </div>
                      </div>
                    </div>

                    {/* Branch 3: Other Challenges */}
                    <div className="bg-[#0c263f] border border-[#2F6F9F]/40 p-5 rounded-xl text-center flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-[#89B3D3] uppercase tracking-wider mb-2">
                          POLLUTANT STREAM
                        </div>
                        <div className="font-display text-base font-bold text-white mb-3">
                          OTHER INDUSTRIAL AIR-QUALITY CHALLENGES
                        </div>
                      </div>
                      <div className="pt-3 border-t border-[#2F6F9F]/30">
                        <div className="text-[9px] font-mono text-slate-400 mb-1">RELEVANT APPROACH</div>
                        <div className="font-mono text-xs font-semibold text-[#DCE8EF]">
                          APPLICATION-SPECIFIC PROCESS DEVELOPMENT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption Requirement */}
                <div className="mt-8 pt-6 border-t border-[#2F6F9F]/30 text-center text-xs font-mono text-slate-400 max-w-2xl mx-auto">
                  Conceptual application map. Technology selection and process development depend on the characteristics of the specific emissions stream.
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 7: SELECTED HISTORICAL EXPERIENCE
                Editorial project examples (not current customer endorsements)
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  <span>REAL-WORLD EMISSIONS WORK</span>
                </div>
                <div className="px-2.5 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-md text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">
                  SELECTED HISTORICAL PROJECT EXPERIENCE
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-6">
                Industrial Experience Across Different Environments.
              </h3>

              <div className="divide-y divide-[#DCE8EF] border-y border-[#DCE8EF]">
                {/* Intel */}
                <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-5">
                    <h4 className="font-display text-lg font-bold text-[#123A63]">INTEL</h4>
                    <div className="text-xs font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
                      SEMICONDUCTOR MANUFACTURING
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-sm text-[#20262B] leading-relaxed">
                      CST developed novel NOx and amine abatement approaches associated with Intel facilities in Arizona and Oregon.
                    </p>
                  </div>
                </div>

                {/* Sea Launch / Boeing */}
                <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-5">
                    <h4 className="font-display text-lg font-bold text-[#123A63]">SEA LAUNCH / BOEING</h4>
                    <div className="text-xs font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
                      AEROSPACE / MARITIME OPERATIONS
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-sm text-[#20262B] leading-relaxed">
                      CST developed treatment for toxic and explosive gases associated with a moving platform environment.
                    </p>
                  </div>
                </div>

                {/* Rock Canyon Oil */}
                <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-5">
                    <h4 className="font-display text-lg font-bold text-[#123A63]">ROCK CANYON OIL</h4>
                    <div className="text-xs font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
                      OIL RECOVERY
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-sm text-[#20262B] leading-relaxed">
                      CST project history includes CO₂ capture work associated with secondary oil recovery, with tertiary oil recovery and carbon-credit considerations documented in the project history.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
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
                SECTION 8 & 9: APPLICATION CONTEXTS
            ================================================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Section 8: Semiconductor Application Context */}
              <div className="p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>SELECTED OPERATING ENVIRONMENT</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#123A63] mb-4">
                    Emissions Control in Semiconductor Manufacturing.
                  </h3>
                  <div className="text-sm sm:text-base text-[#20262B] leading-relaxed space-y-3 font-normal">
                    <p>
                      CST's historical work associated with Intel facilities in Arizona and Oregon included development of novel approaches for NOx and amine abatement.
                    </p>
                    <p className="text-slate-600">
                      This experience illustrates CST's application-driven approach to industrial air-quality challenges.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-[#2F6F9F]">
                  SEMICONDUCTOR ENVIRONMENT
                </div>
              </div>

              {/* Section 9: Complex Operating Environments */}
              <div className="p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>ENGINEERING BEYOND THE LAB</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#123A63] mb-4">
                    Process Development Under Practical Constraints.
                  </h3>
                  <div className="text-sm sm:text-base text-[#20262B] leading-relaxed space-y-3 font-normal">
                    <p>
                      CST's historical Sea Launch / Boeing work involved treatment of toxic and explosive gases associated with a moving platform environment.
                    </p>
                    <p className="text-slate-600">
                      The project reflects CST's broader experience translating environmental treatment requirements into practical engineering applications.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-[#2F6F9F]">
                  SPECIALIZED GAS TREATMENT
                </div>
              </div>
            </div>

            {/* Supporting Image Spread (Slots B & C) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Supporting Image B */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.approachLab}
                    alt="Process evaluation and air-quality testing environment"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">GAS STREAM CHARACTERIZATION &amp; TESTING</span>
                  <span className="text-slate-500">[ APPLICATION SLOT B ]</span>
                </div>
              </div>

              {/* Supporting Image C */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.noxSox}
                    alt="Emissions treatment and gas-liquid interaction engineering"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">ENGINEERED PROCESS INFRASTRUCTURE</span>
                  <span className="text-slate-500">[ APPLICATION SLOT C ]</span>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 10: MULTI-POLLUTANT CONTEXT
            ================================================== */}
            <div className="p-8 bg-[#071B2D] text-white rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 shadow-lg space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>MULTIPLE EMISSIONS</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                When More Than One Pollutant Is Present.
              </h3>

              <div className="text-base text-slate-300 leading-relaxed space-y-4 font-normal">
                <p>
                  CST has evaluated applications involving more than one emissions challenge.
                </p>
                <p>
                  Its documented technology development includes an industrial energy application in which CO₂ capture was evaluated alongside NOx capture.
                </p>
                <p className="text-slate-400">
                  This illustrates the importance of characterizing the complete emissions stream before selecting a process-development approach.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/technologies')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  <span>EXPLORE CST TECHNOLOGIES</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>
              </div>
            </div>

            {/* ==================================================
                SECTION 11: APPLICATION DEVELOPMENT APPROACH (4 STAGES)
            ================================================== */}
            <div className="space-y-8 pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>FROM EMISSIONS STREAM TO APPROACH</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Develop Around<br />
                <span className="text-[#2F6F9F] font-light">the Actual Challenge.</span>
              </h2>

              {/* Clean Numerical Row / Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#DCE8EF] pt-4">
                <div className="pt-4 sm:pt-0 sm:pr-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-1">
                    01
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    CHARACTERIZE
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Understand the pollutants, emissions stream and application requirements.
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
                    Determine which CST technology or process-development direction may be relevant.
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
                    Develop and evaluate an application-specific treatment approach.
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
                Not every emissions challenge follows the same technical path.
              </div>
            </div>

            {/* ==================================================
                SECTION 12: RELATED TECHNOLOGIES
            ================================================== */}
            <div className="p-8 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>TECHNOLOGY CONNECTIONS</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                Relevant CST Technology Areas.
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Tech 01 */}
                <div
                  onClick={() => onNavigate('/technologies/co2-capture')}
                  className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">
                      TECHNOLOGY 01
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                      CO₂ CAPTURE &amp; REPURPOSING
                    </h4>
                    <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                      Capture carbon dioxide and convert it into identified useful products.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                    <span>Explore Technology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Tech 02 */}
                <div
                  onClick={() => onNavigate('/technologies/nox-sox')}
                  className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">
                      TECHNOLOGY 02
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                      NOx &amp; SOx ABATEMENT
                    </h4>
                    <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                      Multiple CST process-development approaches addressing nitrogen and sulfur oxides.
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
                <Wind className="w-4 h-4 text-[#2F6F9F]" />
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    APPLICATION
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Industrial Emissions
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    DOCUMENTED POLLUTANTS
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div className="font-semibold text-[#123A63]">CO₂</div>
                    <div className="font-semibold text-[#123A63]">NOx</div>
                    <div className="font-semibold text-[#123A63]">SOx</div>
                    <div className="font-semibold text-[#123A63]">Amines</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    ADDITIONAL EXPERIENCE
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Toxic &amp; Explosive Gas Treatment
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    RELEVANT TECHNOLOGIES
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div className="font-semibold text-[#2F6F9F]">CO₂ Capture &amp; Repurposing</div>
                    <div className="font-semibold text-[#2F6F9F]">NOx &amp; SOx Abatement</div>
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

                <div className="pt-2 border-t border-[#DCE8EF]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                    DEVELOPMENT PATH
                  </div>
                  <div className="font-mono text-xs text-[#123A63] bg-[#F7F7F3] p-2.5 rounded-lg border border-[#DCE8EF] leading-relaxed">
                    Characterize → Evaluate → Develop → Implement
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Sidebar Contact Card */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-8 text-white shadow-xl border border-[#2F6F9F]/30 bg-[#071B2D]">
              <div className="absolute inset-0">
                <PrddImage
                  src={PRDD_IMAGES.approachLab}
                  alt="Industrial emissions technical consultation"
                  className="w-full h-full object-cover object-center filter saturate-50 brightness-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
                <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
              </div>

              <div className="relative z-10 text-center">
                <div className="w-10 h-10 rounded-full bg-[#123A63] border border-[#2F6F9F] flex items-center justify-center mx-auto mb-4 text-[#DCE8EF]">
                  <Wind className="w-5 h-5 text-[#89B3D3]" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Discuss Your Emissions<br />Challenge
                </h3>

                <p className="text-xs font-mono text-slate-300 mb-6 leading-relaxed">
                  Connect with CST to evaluate your industrial emissions stream and treatment requirements.
                </p>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Industrial Emissions')}
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
              alt="Industrial emissions and process engineering"
              className="w-full h-full object-cover object-center filter saturate-50 brightness-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
            <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>DISCUSS YOUR EMISSIONS CHALLENGE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Working With a Difficult<br />
              <span className="text-[#89B3D3] font-light">Industrial Emissions Stream?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Talk with CST about the pollutants, operating environment and environmental process challenge you are working to address.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'Industrial Emissions')}
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
