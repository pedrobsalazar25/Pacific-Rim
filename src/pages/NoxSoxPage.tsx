import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Factory,
  Wind,
  Layers,
  Sparkles,
  ExternalLink,
  Building2,
  Atom,
  ShieldCheck,
  Compass,
  Cpu,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { RelatedContent, RelatedItem } from '../components/interior/RelatedContent';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface NoxSoxPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const NoxSoxPage: React.FC<NoxSoxPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'NOx & SOx Abatement Technology | PRDD';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore PRDD's environmental process-development approaches for NOx, SOx and industrial air-emissions treatment."
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
    { label: 'NOx & SOx Abatement' }
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
      category: 'TECHNOLOGY AREA 03',
      title: 'ADVANCED WATER TREATMENT',
      description: 'Energy-efficient approaches to water reclamation, industrial effluent treatment and desalination.',
      route: '/technologies/water-treatment',
      tag: 'WATER'
    },
    {
      category: 'TECHNOLOGY AREA 04',
      title: 'ADVANCED MATERIALS',
      description: 'Processes involving concrete, geopolymer and CO₂-derived mineralized materials.',
      route: '/technologies/advanced-materials',
      tag: 'MATERIALS'
    }
  ];

  return (
    <div className="bg-[#F7F7F3] text-[#20262B] selection:bg-[#2F6F9F]/30 selection:text-[#071B2D]">
      {/* ==================================================
          SECTION 1: HERO — AERION-INSPIRED ROUNDED PHOTOGRAPHIC OPENING
      ================================================== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 shadow-2xl border border-[#2F6F9F]/20">
          {/* Photographic Background with Deep Navy Industrial Gradient Overlay */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src={PRDD_IMAGES.noxSox}
              alt="Industrial combustion emissions and flue gas treatment facility"
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
              <span>NOx &amp; SOx ABATEMENT</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Integrated Large Title & Lower Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Treat Industrial Emissions.<br />
                <span className="text-[#89B3D3] font-light">Recover Useful Products.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs aligned lower right / bottom */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  PRDD has developed environmental processes for the treatment of NOx, SOx and related industrial air pollutants, including approaches designed to convert captured pollutants into useful chemical products.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'NOx & SOx Abatement')}
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
          SECTION 2 & 3: MAIN EDITORIAL GRID (AERION LAYOUT)
          LEFT: ~70% content width | RIGHT: ~30% information rail
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ==================================================
              LEFT COLUMN (~70% WIDTH): PRIMARY EDITORIAL STORY
          ================================================== */}
          <div className="lg:col-span-8 space-y-16 sm:space-y-24">
            
            {/* Supporting Image A: Large Top Process Facility Visual (Rounded Container) */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DCE8EF] shadow-lg bg-[#071B2D] relative group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <PrddImage
                  src={PRDD_IMAGES.noxSox}
                  alt="Industrial emissions abatement and gas treatment facility"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-[#20262B]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
                  <span className="font-semibold text-[#123A63]">INDUSTRIAL EMISSIONS ABATEMENT / GAS TREATMENT</span>
                </span>
                <span className="text-slate-500">[ PROCESS ARCHITECTURE ]</span>
              </div>
            </div>

            {/* Introduction Article Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>INDUSTRIAL EMISSIONS CONTROL</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
                From Pollutant Removal<br />
                <span className="text-[#2F6F9F] font-light">to Resource Recovery.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal pt-2">
                <p>
                  PRDD's work in emissions treatment extends beyond conventional pollutant removal.
                </p>
                <p>
                  The company's process-development work includes approaches for treating nitrogen oxides and sulfur oxides and, in certain processes, converting captured pollutants into useful chemical products.
                </p>
              </div>

              {/* Large Technical Highlight Statement */}
              <div className="my-8 p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
                  CORE TECHNICAL PHILOSOPHY
                </div>
                <div className="font-mono text-base sm:text-xl md:text-2xl font-bold tracking-wider text-[#123A63] flex flex-wrap items-center gap-2 sm:gap-3">
                  <span>CONTROL</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span>CONVERT</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span className="text-[#6D9F45]">REPURPOSE</span>
                </div>
              </div>
            </div>

            {/* Section 5: Technology Approach */}
            <div id="technology-approach" className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>PRDD PROCESS DEVELOPMENT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Multiple Approaches to<br />
                <span className="text-[#2F6F9F] font-light">Complex Emissions.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  PRDD has developed multiple environmental processes addressing nitrogen oxides, sulfur oxides and related industrial emissions.
                </p>
                <p>
                  The processes described in PRDD's technical background use different chemical approaches depending on the pollutant and application.
                </p>
                <p className="font-semibold text-[#123A63]">
                  Because these represent distinct process-development approaches, they should not be presented as a single universal reaction pathway.
                </p>
              </div>

              {/* Visually emphasized flow: DIFFERENT EMISSIONS -> APPLICATION-SPECIFIC PROCESS DEVELOPMENT -> POLLUTANT TREATMENT -> USEFUL OUTPUTS WHERE APPLICABLE */}
              <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-4">
                  PROCESS DEVELOPMENT ARCHITECTURE
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-mono">
                  <div className="w-full md:w-auto text-center px-4 py-3 bg-[#F7F7F3] border border-[#DCE8EF] rounded-xl font-semibold text-[#123A63]">
                    DIFFERENT EMISSIONS
                  </div>
                  <div className="text-[#2F6F9F] flex items-center justify-center rotate-90 md:rotate-0">
                    <ArrowRight className="w-4 h-4 hidden md:block" />
                    <ArrowDown className="w-4 h-4 md:hidden" />
                  </div>
                  <div className="w-full md:w-auto text-center px-4 py-3 bg-[#123A63] text-white rounded-xl font-semibold">
                    APPLICATION-SPECIFIC PROCESS DEVELOPMENT
                  </div>
                  <div className="text-[#2F6F9F] flex items-center justify-center rotate-90 md:rotate-0">
                    <ArrowRight className="w-4 h-4 hidden md:block" />
                    <ArrowDown className="w-4 h-4 md:hidden" />
                  </div>
                  <div className="w-full md:w-auto text-center px-4 py-3 bg-[#F7F7F3] border border-[#DCE8EF] rounded-xl font-semibold text-[#123A63]">
                    POLLUTANT TREATMENT
                  </div>
                  <div className="text-[#2F6F9F] flex items-center justify-center rotate-90 md:rotate-0">
                    <ArrowRight className="w-4 h-4 hidden md:block" />
                    <ArrowDown className="w-4 h-4 md:hidden" />
                  </div>
                  <div className="w-full md:w-auto text-center px-4 py-3 bg-[#F7F7F3] border-2 border-[#6D9F45] text-[#123A63] rounded-xl font-semibold">
                    USEFUL OUTPUTS WHERE APPLICABLE
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Large Conceptual Process Visualization (Signature Element) */}
            <div id="process-overview" className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

              <div className="relative">
                <div className="max-w-2xl mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>PROCESS ARCHITECTURE</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Conceptual Process Overview
                  </h3>
                </div>

                {/* Conceptual Process Visualization Diagram */}
                <div className="space-y-4 max-w-2xl mx-auto my-8">
                  {/* Step 1: Industrial Emissions */}
                  <div className="bg-[#0b243d] border border-[#2F6F9F]/40 p-5 rounded-xl text-center shadow-md">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      SOURCE STREAM
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      INDUSTRIAL EMISSIONS
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                  </div>

                  {/* Step 2: Pollutant Stream */}
                  <div className="bg-[#0c263f] border border-[#2F6F9F]/50 p-5 rounded-xl text-center shadow-md">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      TARGET CONSTITUENTS
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      NOx / SOx POLLUTANT STREAM
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                  </div>

                  {/* Step 3: PRDD Process Development */}
                  <div className="bg-[#103252] border-2 border-[#2F6F9F] p-6 rounded-xl text-center shadow-xl shadow-[#071B2D]">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                      <span>ENGINEERED METHODOLOGY</span>
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      PRDD PROCESS DEVELOPMENT
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                  </div>

                  {/* Step 4: Treatment / Conversion */}
                  <div className="bg-[#0c263f] border border-[#2F6F9F]/50 p-5 rounded-xl text-center shadow-md">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      ENGINEERED TRANSFORMATION
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      TREATMENT / CONVERSION
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#6D9F45]" />
                  </div>

                  {/* Step 5: Useful Products Where Applicable */}
                  <div className="bg-[#0b243d] border-2 border-[#6D9F45]/80 p-5 rounded-xl text-center shadow-lg">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#6D9F45] mb-1">
                      VALUE RECOVERY
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      USEFUL PRODUCTS WHERE APPLICABLE
                    </div>
                  </div>
                </div>

                {/* Caption Requirement */}
                <div className="mt-8 pt-6 border-t border-[#2F6F9F]/30 text-center text-xs font-mono text-slate-400">
                  Conceptual technology overview. Specific process chemistry varies by application and PRDD process.
                </div>
              </div>
            </div>

            {/* Section 6: Selected Process Approaches (Distinct examples) */}
            <div className="space-y-8 pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>SELECTED PROCESS DEVELOPMENT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Approaches Developed<br />
                <span className="text-[#2F6F9F] font-light">for Emissions Treatment.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                PRDD technical background includes multiple documented approaches addressing nitrogen oxides, sulfur oxides and related pollutants. These represent distinct process-development pathways evaluated for specific industrial applications:
              </p>

              {/* Four Distinct Approach Blocks — Visually separate, NOT connected into one reaction */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* APPROACH 01 */}
                <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#123A63] mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
                      <span>APPROACH 01</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#123A63] mb-3">
                      NOx &amp; SOx Treatment
                    </h3>
                    <p className="text-sm text-[#20262B] leading-relaxed">
                      PRDD documentation describes a process using chlorine dioxide for the treatment of NOx and SOx, with captured pollutants converted into mineral acids.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>REAGENTS: ClO₂</span>
                    <span className="text-[#123A63] font-semibold">MINERAL ACIDS</span>
                  </div>
                </div>

                {/* APPROACH 02 */}
                <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#123A63] mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
                      <span>APPROACH 02</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#123A63] mb-3">
                      NOx Treatment
                    </h3>
                    <p className="text-sm text-[#20262B] leading-relaxed">
                      PRDD documentation describes an approach using hydrogen peroxide and a metal-organic fabric for NOx treatment, with nitric acid identified as a resulting product.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>REAGENTS: H₂O₂ / MOF</span>
                    <span className="text-[#123A63] font-semibold">NITRIC ACID</span>
                  </div>
                </div>

                {/* APPROACH 03 */}
                <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#123A63] mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
                      <span>APPROACH 03</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#123A63] mb-3">
                      Combined Pollutant Treatment
                    </h3>
                    <p className="text-sm text-[#20262B] leading-relaxed">
                      PRDD documentation also describes a process addressing NO₂, NO, SO₂ and CO₂ using hypochlorite, a promoter and controlled pH conditions.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>TARGETS: NO₂, NO, SO₂, CO₂</span>
                    <span className="text-[#123A63] font-semibold">CONTROLLED pH</span>
                  </div>
                </div>

                {/* APPROACH 04 */}
                <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#6D9F45] mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                      <span>APPROACH 04</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#123A63] mb-3">
                      NOx Mineralization
                    </h3>
                    <p className="text-sm text-[#20262B] leading-relaxed">
                      Another documented PRDD approach addresses NOx using hydrogen peroxide and metal hydroxides to mineralize captured nitrogen oxides.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>REAGENTS: H₂O₂ / HYDROXIDES</span>
                    <span className="text-[#6D9F45] font-semibold">MINERALIZATION</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Imagery Pair (Like Aerion's Two-Image Spread) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Supporting Image B */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.approachLab}
                    alt="Advanced emissions testing and process engineering laboratory"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">EMISSIONS TESTING &amp; PROCESS ENGINEERING</span>
                  <span className="text-slate-500">[ TEST &amp; EVALUATION ]</span>
                </div>
              </div>

              {/* Supporting Image C */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.advancedMaterials}
                    alt="Surface chemistry and mineralization dynamics"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">SURFACE CHEMISTRY &amp; MINERALIZATION</span>
                  <span className="text-slate-500">[ MINERAL FORMATION ]</span>
                </div>
              </div>
            </div>

            {/* Section 8: Resource Recovery */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>BEYOND POLLUTANT REMOVAL</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Turning Emissions Into<br />
                <span className="text-[#2F6F9F] font-light">Useful Chemical Products.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  Several PRDD emissions-treatment approaches are designed not only to address pollutants but also to convert captured compounds into useful chemical products.
                </p>
              </div>

              {/* Two Prominent Verified Product Examples in Editorial Specification Layout */}
              <div className="divide-y divide-[#DCE8EF] border-y border-[#DCE8EF]">
                {/* Product 01: Nitric Acid */}
                <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#123A63] tracking-tight block">
                      HNO₃
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">
                      VERIFIED PRODUCT OUTPUT
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-display text-xl font-bold text-[#123A63] mb-2">
                      NITRIC ACID
                    </h3>
                    <p className="text-sm sm:text-base text-[#20262B] leading-relaxed">
                      Identified in PRDD documentation as a product from a documented NOx treatment approach.
                    </p>
                  </div>
                </div>

                {/* Product 02: Mineral Acids */}
                <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#2F6F9F] tracking-tight block">
                      MINERAL ACIDS
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">
                      VERIFIED PRODUCT OUTPUT
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-display text-xl font-bold text-[#123A63] mb-2">
                      MINERAL ACIDS
                    </h3>
                    <p className="text-sm sm:text-base text-[#20262B] leading-relaxed">
                      Identified in PRDD documentation as products associated with a documented NOx and SOx treatment approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9: Industrial Application Context */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>APPLICATION CONTEXT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Developed for Complex<br />
                <span className="text-[#2F6F9F] font-light">Industrial Emissions.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  PRDD's emissions-control work has included the development and application of treatment approaches for challenging industrial air quality problems.
                </p>
                <p>
                  The company's broader project experience includes emissions-control and air-quality work in semiconductor manufacturing and other industrial environments.
                </p>
              </div>

              {/* Supporting Image D: Industrial emissions / process environment */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.finalCta}
                    alt="Industrial emissions and air quality control environment"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">INDUSTRIAL EMISSIONS &amp; AIR-QUALITY CONTROL ENVIRONMENT</span>
                  <span className="text-slate-500">[ FIELD IMPLEMENTATION ]</span>
                </div>
              </div>

              {/* Section 10: Selected Experience — Intel */}
              <div className="p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>SELECTED PROJECT EXPERIENCE</span>
                  </div>
                  <div className="px-2.5 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-md text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">
                    SELECTED HISTORICAL PROJECT EXPERIENCE
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                  Industrial Emissions Control for Intel.
                </h3>

                <p className="text-base text-[#20262B] leading-relaxed mb-6">
                  PRDD developed novel NOx and amine abatement approaches associated with Intel facilities in Arizona and Oregon.
                </p>

                <button
                  type="button"
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                >
                  <span>VIEW PROJECT EXPERIENCE</span>
                  <ArrowRight className="w-4 h-4 text-[#2F6F9F]" />
                </button>
              </div>

              {/* Section 11: CO₂ Integration Block */}
              <div className="p-8 bg-[#071B2D] text-white rounded-2xl border border-[#2F6F9F]/30 shadow-lg">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  <span>RELATED EMISSIONS TECHNOLOGY</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                  Connecting NOx Treatment With Carbon Capture.
                </h3>

                <div className="text-base text-slate-300 leading-relaxed space-y-4 mb-6">
                  <p>
                    PRDD has also evaluated NOx capture alongside its CO₂ Capture &amp; Repurpose technology in an industrial energy application.
                  </p>
                  <p>
                    This illustrates the potential for PRDD technologies to be considered together when an emissions stream contains multiple pollutants.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('/technologies/co2-capture')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
                >
                  <span>EXPLORE CO₂ CAPTURE &amp; REPURPOSING</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>
              </div>
            </div>

            {/* Section 12: Development Approach (4 Stages) */}
            <div className="space-y-8 pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>FROM PROBLEM TO PROCESS</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Environmental Process<br />
                <span className="text-[#2F6F9F] font-light">Development for the Application.</span>
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
                    Understand the pollutant stream and environmental challenge.
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
                    Develop and evaluate an appropriate treatment approach.
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
                    Translate the process into practical industrial implementation.
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
                    Support application and commercialization of the technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 13: Related Technologies (Understated) */}
            <div className="pt-8 border-t border-[#DCE8EF]">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>RELATED PRDD TECHNOLOGIES</span>
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
                <Atom className="w-4 h-4 text-[#2F6F9F]" />
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    CATEGORY
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    NOx &amp; SOx Abatement
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    FOCUS
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Industrial Air Emissions
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    POLLUTANTS ADDRESSED
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div className="font-semibold text-[#123A63]">NOx</div>
                    <div className="font-semibold text-[#123A63]">SOx</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    PROCESS DEVELOPMENT
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Multiple PRDD approaches
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    OBJECTIVE
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Pollutant Treatment &amp; Resource Recovery
                  </div>
                </div>

                <div className="pt-2 border-t border-[#DCE8EF]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                    DEVELOPMENT PATH
                  </div>
                  <div className="font-mono text-xs text-[#123A63] bg-[#F7F7F3] p-2.5 rounded-lg border border-[#DCE8EF] leading-relaxed">
                    Identify → Develop → Engineer → Implement
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
                  alt="PRDD engineering dialogue"
                  className="w-full h-full object-cover object-center filter saturate-50 brightness-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
                <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
              </div>

              <div className="relative z-10 text-center">
                <div className="w-10 h-10 rounded-full bg-[#123A63] border border-[#2F6F9F] flex items-center justify-center mx-auto mb-4 text-[#DCE8EF]">
                  <Factory className="w-5 h-5" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Discuss Your Emissions<br />Application
                </h3>

                <p className="text-xs font-mono text-[#DCE8EF]/90 mb-4">
                  Pacific Rim Design &amp; Development, Inc.
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
                  onClick={() => onNavigate('/contact', 'NOx & SOx Abatement')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#2F6F9F] hover:bg-[#123A63] text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 border border-white/20 cursor-pointer shadow-lg"
                >
                  <span>CONTACT PRDD</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 14: LARGE CLOSING CTA
          Wide rounded rectangular CTA in PRDD Deep Navy / Industrial Blue
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
              Facing a Complex<br />
              <span className="text-[#89B3D3] font-light">Emissions Challenge?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Talk with PRDD about NOx, SOx or an industrial air-emissions treatment challenge.
            </p>

            <button
              type="button"
              onClick={() => onNavigate('/contact', 'NOx & SOx Abatement')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2F6F9F] hover:bg-[#123A63] text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl border border-white/20 cursor-pointer"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
            </button>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-300">
              <span className="text-white font-semibold">Pacific Rim Design &amp; Development, Inc.</span>
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

      {/* Generous Whitespace before Global Footer */}
      <div className="h-8 sm:h-16" />
    </div>
  );
};
