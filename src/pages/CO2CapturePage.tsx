import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Factory,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  FlaskConical,
  Layers,
  Sparkles,
  ExternalLink,
  Building2,
  Atom,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { RelatedContent, RelatedItem } from '../components/interior/RelatedContent';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface CO2CapturePageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const CO2CapturePage: React.FC<CO2CapturePageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'CO₂ Capture & Repurposing Technology | PRDD';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Learn about PRDD's CO₂ Capture & Repurpose technology, designed to capture industrial carbon dioxide and convert it into useful chemical products."
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
    { label: 'CO₂ Capture & Repurposing' }
  ];

  const relatedTechs: RelatedItem[] = [
    {
      category: 'TECHNOLOGY AREA 02',
      title: 'NOx & SOx ABATEMENT',
      description: 'Processes designed to remove harmful combustion emissions and convert pollutants into useful products.',
      route: '/technologies/nox-sox',
      tag: 'EMISSIONS'
    },
    {
      category: 'TECHNOLOGY AREA 03',
      title: 'ADVANCED WATER TREATMENT',
      description: 'Energy-efficient approaches to water reclamation and desalination.',
      route: '/technologies/water-treatment',
      tag: 'WATER'
    },
    {
      category: 'TECHNOLOGY AREA 04',
      title: 'ADVANCED MATERIALS',
      description: 'Processes involving concrete, geopolymer and CO₂-derived materials.',
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
              src={PRDD_IMAGES.hero}
              alt="Industrial emissions facility and process engineering"
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
              <span>CO₂ CAPTURE &amp; REPURPOSING</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Integrated Large Title & Lower Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Capture Carbon.<br />
                <span className="text-[#89B3D3] font-light">Create Useful Products.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs aligned lower right / bottom */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  PRDD has developed a patented CO₂ Capture &amp; Repurpose process designed to capture carbon dioxide and convert it into commercially useful products.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'CO₂ Capture & Repurposing')}
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
                  <span>EXPLORE PROCESS</span>
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
                  src={PRDD_IMAGES.co2Capture}
                  alt="Industrial CO2 source and processing facility"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-[#20262B]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
                  <span className="font-semibold text-[#123A63]">INDUSTRIAL CO₂ SOURCE / PROCESSING FACILITY</span>
                </span>
                <span className="text-slate-500">[ IMAGE SLOT A ]</span>
              </div>
            </div>

            {/* Introduction Article Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>A DIFFERENT APPROACH TO CARBON CAPTURE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
                From Waste Stream<br />
                <span className="text-[#2F6F9F] font-light">to Useful Resource.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal pt-2">
                <p>
                  Conventional carbon capture is often discussed primarily in terms of capturing and storing CO₂.
                </p>
                <p className="font-semibold text-[#123A63]">
                  PRDD's approach is different.
                </p>
                <p>
                  The PRDD CO₂ Capture &amp; Repurpose process is designed to capture carbon dioxide and convert it into useful chemical products, creating a pathway from industrial emissions to materials with commercial applications.
                </p>
              </div>

              {/* Large Technical Highlight Statement */}
              <div className="my-8 p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
                  CORE TECHNICAL PHILOSOPHY
                </div>
                <div className="font-mono text-base sm:text-xl md:text-2xl font-bold tracking-wider text-[#123A63] flex flex-wrap items-center gap-2 sm:gap-3">
                  <span>CAPTURE</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span>REPURPOSE</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span className="text-[#6D9F45]">CREATE VALUE</span>
                </div>
              </div>
            </div>

            {/* Large Process Visualization (Signature Element) */}
            <div id="process-overview" className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

              <div className="relative">
                <div className="max-w-2xl mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>PROCESS OVERVIEW</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    What Happens to the Captured CO₂?
                  </h3>
                </div>

                {/* Conceptual Process Architecture */}
                <div className="space-y-6 max-w-2xl mx-auto my-8">
                  {/* Step 1: Industrial Source */}
                  <div className="bg-[#0b243d] border border-[#2F6F9F]/40 p-5 rounded-xl text-center shadow-md">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      INPUT STREAM
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      INDUSTRIAL CO₂ SOURCE
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                  </div>

                  {/* Step 2: PRDD Process */}
                  <div className="bg-[#103252] border-2 border-[#2F6F9F] p-6 rounded-xl text-center shadow-xl shadow-[#071B2D]">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                      <span>PRDD PROPRIETARY PROCESS</span>
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      PRDD CO₂ CAPTURE &amp; REPURPOSE PROCESS
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#6D9F45]" />
                  </div>

                  {/* Step 3: Useful Products Header */}
                  <div className="bg-[#0b243d] border border-[#2F6F9F]/40 p-4 rounded-xl text-center">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-0.5">
                      OUTPUT RECOVERY
                    </div>
                    <div className="font-display text-base font-bold text-white tracking-wide">
                      USEFUL PRODUCTS
                    </div>
                  </div>
                </div>

                {/* Three Verified Branching Outputs */}
                <div className="mt-8 pt-8 border-t border-[#2F6F9F]/30">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#0c263f] border border-[#2F6F9F]/35 p-5 rounded-xl">
                      <div className="text-[10px] font-mono uppercase text-[#89B3D3] mb-1">
                        OUTPUT 01
                      </div>
                      <div className="font-display text-sm sm:text-base font-bold text-white mb-1">
                        SODIUM CARBONATE
                      </div>
                      <div className="font-mono text-xs text-[#89B3D3]">
                        Na₂CO₃
                      </div>
                    </div>

                    <div className="bg-[#0c263f] border border-[#2F6F9F]/35 p-5 rounded-xl">
                      <div className="text-[10px] font-mono uppercase text-[#89B3D3] mb-1">
                        OUTPUT 02
                      </div>
                      <div className="font-display text-sm sm:text-base font-bold text-white mb-1">
                        SODIUM BICARBONATE
                      </div>
                      <div className="font-mono text-xs text-[#89B3D3]">
                        NaHCO₃
                      </div>
                    </div>

                    <div className="bg-[#0c263f] border border-[#2F6F9F]/35 p-5 rounded-xl">
                      <div className="text-[10px] font-mono uppercase text-[#89B3D3] mb-1">
                        OUTPUT 03
                      </div>
                      <div className="font-display text-sm sm:text-base font-bold text-white mb-1">
                        HYDROCHLORIC ACID
                      </div>
                      <div className="font-mono text-xs text-[#89B3D3]">
                        HCl
                      </div>
                    </div>
                  </div>

                  {/* Secondary Note: Calcium Carbonate */}
                  <div className="mt-5 p-4 bg-[#123A63]/40 border border-[#2F6F9F]/40 rounded-xl text-xs font-mono text-[#DCE8EF] flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45] shrink-0" />
                    <span>
                      ADDITIONAL MATERIAL PATHWAY: Calcium carbonate (CaCO₃) can also be produced from sodium carbonate.
                    </span>
                  </div>

                  {/* Diagram Caption */}
                  <div className="mt-6 text-center text-xs font-mono text-slate-400">
                    Conceptual process overview. Detailed process chemistry and engineering are proprietary to PRDD.
                  </div>
                </div>
              </div>
            </div>

            {/* Product Information: Editorial Specification Layout with Chemical Formula Anchors */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>RESOURCE RECOVERY SPECIFICATIONS</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Turning Captured Carbon<br />Into Useful Products.
              </h2>

              <div className="divide-y divide-[#DCE8EF] border-y border-[#DCE8EF]">
                {/* Product 01 */}
                <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#123A63] tracking-tight block">
                      Na₂CO₃
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">
                      PRODUCT 01 · CHEMICAL OUTPUT
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-display text-xl font-bold text-[#123A63] mb-2">
                      SODIUM CARBONATE
                    </h3>
                    <p className="text-sm sm:text-base text-[#20262B] leading-relaxed">
                      The PRDD process can convert captured CO₂ into sodium carbonate, a commercially useful chemical product.
                    </p>
                  </div>
                </div>

                {/* Product 02 */}
                <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#123A63] tracking-tight block">
                      NaHCO₃
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">
                      PRODUCT 02 · CHEMICAL OUTPUT
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-display text-xl font-bold text-[#123A63] mb-2">
                      SODIUM BICARBONATE
                    </h3>
                    <p className="text-sm sm:text-base text-[#20262B] leading-relaxed">
                      Captured CO₂ can also be converted into sodium bicarbonate, creating another potential commercial product from the captured carbon stream.
                    </p>
                  </div>
                </div>

                {/* Product 03 */}
                <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#123A63] tracking-tight block">
                      HCl
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">
                      PRODUCT 03 · ACID COPRODUCT
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-display text-xl font-bold text-[#123A63] mb-2">
                      HYDROCHLORIC ACID
                    </h3>
                    <p className="text-sm sm:text-base text-[#20262B] leading-relaxed">
                      Hydrochloric acid is another product identified in PRDD's CO₂ Capture &amp; Repurpose process.
                    </p>
                  </div>
                </div>

                {/* Additional Material Pathway */}
                <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[#2F6F9F] tracking-tight block">
                      CaCO₃
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">
                      ADDITIONAL MATERIAL PATHWAY
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-display text-xl font-bold text-[#123A63] mb-2">
                      Calcium Carbonate
                    </h3>
                    <p className="text-sm sm:text-base text-[#20262B] leading-relaxed">
                      PRDD documentation also identifies calcium carbonate as a material that can be produced from sodium carbonate.
                    </p>
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
                    alt="Engineered capture and process equipment"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">CAPTURE &amp; PROCESS EQUIPMENT</span>
                  <span className="text-slate-500">[ IMAGE SLOT B ]</span>
                </div>
              </div>

              {/* Supporting Image C */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.advancedMaterials}
                    alt="Scientific carbonate and material representation"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">CARBONATE MATERIAL FORMATION</span>
                  <span className="text-slate-500">[ IMAGE SLOT C ]</span>
                </div>
              </div>
            </div>

            {/* Why Repurpose CO₂? (Integrated Editorial Flow) */}
            <div className="space-y-8 pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>THE PRDD APPROACH</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Carbon Capture With<br />
                <span className="text-[#2F6F9F] font-light">a Product Pathway.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  PRDD's process is designed around more than capturing carbon dioxide.
                </p>
                <p>
                  By converting captured CO₂ into useful products, the process approaches an emissions stream as a potential resource rather than solely as a material requiring disposal or long-term storage.
                </p>
              </div>

              {/* Three Conceptual Pillars (Connected Linework) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl relative">
                  <div className="text-xs font-mono font-bold text-[#123A63] uppercase mb-2">
                    01 · CAPTURE
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#123A63] mb-2">
                    Emissions Intake
                  </h3>
                  <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                    Address CO₂ from an industrial emissions stream.
                  </p>
                </div>

                <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl relative">
                  <div className="text-xs font-mono font-bold text-[#123A63] uppercase mb-2">
                    02 · CONVERT
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#123A63] mb-2">
                    Proprietary Process
                  </h3>
                  <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                    Use PRDD's proprietary process to convert captured CO₂.
                  </p>
                </div>

                <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl relative">
                  <div className="text-xs font-mono font-bold text-[#6D9F45] uppercase mb-2">
                    03 · REPURPOSE
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#123A63] mb-2">
                    Product Realization
                  </h3>
                  <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                    Create useful chemical products from the captured carbon stream.
                  </p>
                </div>
              </div>
            </div>

            {/* Application Context & CO₂ + NOx Integration */}
            <div className="space-y-8 pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>INDUSTRIAL APPLICATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Designed for Industrial CO₂ Sources.
              </h2>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed">
                PRDD's CO₂ Capture &amp; Repurpose technology is being developed for industrial applications where carbon dioxide is present in an emissions stream and where capture can be integrated with an engineered process.
              </p>

              {/* Understated Technical Integration Pathway */}
              <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl">
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
                  INTEGRATION PATHWAY
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-[#123A63]">
                  <span className="bg-[#F7F7F3] px-3 py-1.5 border border-[#DCE8EF] rounded-lg">INDUSTRIAL PROCESS</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span className="bg-[#F7F7F3] px-3 py-1.5 border border-[#DCE8EF] rounded-lg">CO₂ STREAM</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span className="bg-[#123A63] text-white px-3 py-1.5 rounded-lg">PRDD PROCESS</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span className="bg-[#F7F7F3] px-3 py-1.5 border border-[#6D9F45] text-[#123A63] font-semibold rounded-lg">PRODUCTS</span>
                </div>
              </div>

              {/* Supporting Image D: Industrial emissions/process environment */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.finalCta}
                    alt="Industrial process environment and piping"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">INDUSTRIAL EMISSIONS / PROCESS ENVIRONMENT</span>
                  <span className="text-slate-500">[ IMAGE SLOT D ]</span>
                </div>
              </div>

              {/* CO₂ + NOx Integration Block */}
              <div className="p-8 bg-[#071B2D] text-white rounded-2xl border border-[#2F6F9F]/30 shadow-lg">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  <span>INTEGRATED EMISSIONS CONTROL</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                  CO₂ and NOx Treatment Potential.
                </h3>

                <div className="text-base text-slate-300 leading-relaxed space-y-4 mb-6">
                  <p>
                    PRDD has evaluated the application of its CO₂ Capture &amp; Repurpose technology alongside NOx capture for industrial emissions treatment.
                  </p>
                  <p>
                    The technology documentation includes a biomass gasification application in which CO₂ capture and NOx treatment were evaluated together.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('/technologies/nox-sox')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
                >
                  <span>EXPLORE NOx &amp; SOx ABATEMENT</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>
              </div>
            </div>

            {/* Implementation Path (Clean Numerical Sequence inspired by Aerion stats) */}
            <div className="space-y-8 pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>FROM TECHNOLOGY TO IMPLEMENTATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                A Practical Path Toward Deployment.
              </h2>

              {/* Aerion-Inspired Clean Numerical Row / Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#DCE8EF] pt-4">
                <div className="pt-4 sm:pt-0 sm:pr-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-1">
                    01
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    PILOT STUDY
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Evaluate the process for the specific application.
                  </p>
                </div>

                <div className="pt-4 sm:pt-0 sm:px-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-1">
                    02
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    FULL-SCALE DESIGN
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Develop the engineering basis for a full-scale implementation.
                  </p>
                </div>

                <div className="pt-4 sm:pt-0 sm:px-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-1">
                    03
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    DESIGN &amp; BUILD
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Translate the process into an engineered installation.
                  </p>
                </div>

                <div className="pt-4 sm:pt-0 sm:px-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-1">
                    04
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    LICENSING
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Support commercialization through technology licensing and product market development.
                  </p>
                </div>

                <div className="pt-4 sm:pt-0 sm:pl-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-1">
                    05
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                    SUPPORT
                  </h3>
                  <p className="text-xs text-[#20262B] leading-relaxed">
                    Provide ongoing technical support as the technology is implemented.
                  </p>
                </div>
              </div>
            </div>

            {/* Commercialization + Development Experience */}
            <div className="space-y-10 pt-6">
              {/* Commercialization */}
              <div className="p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  <span>COMMERCIALIZATION</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                  Technology Designed to Create More Than an Environmental Outcome.
                </h3>
                <div className="text-base text-[#20262B] leading-relaxed space-y-4">
                  <p>
                    The PRDD CO₂ Capture &amp; Repurpose process is being developed around the conversion of captured carbon dioxide into products with potential commercial value.
                  </p>
                  <p>
                    This approach connects environmental treatment with resource recovery and commercialization.
                  </p>
                </div>
              </div>

              {/* Development Experience */}
              <div className="p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  <span>DEVELOPMENT EXPERIENCE</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                  Evaluated in an Industrial Energy Application.
                </h3>
                <p className="text-base text-[#20262B] leading-relaxed mb-6">
                  PRDD documentation describes an application of the CO₂ Capture &amp; Repurpose process developed in connection with a biomass gasification facility, including consideration of both CO₂ and NOx emissions treatment.
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
            </div>

            {/* Related Technologies (Understated) */}
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
            
            {/* Panel 1: Technology Information Sidebar (Inspired by Aerion's Project Information) */}
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
                    CO₂ Capture &amp; Repurposing
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    PROCESS OBJECTIVE
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Capture &amp; Resource Recovery
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    PRIMARY INPUT
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Carbon Dioxide — CO₂
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    IDENTIFIED PRODUCTS
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div>Sodium Carbonate</div>
                    <div>Sodium Bicarbonate</div>
                    <div>Hydrochloric Acid</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    ADDITIONAL MATERIAL PATHWAY
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Calcium Carbonate
                  </div>
                </div>

                <div className="pt-2 border-t border-[#DCE8EF]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                    DEVELOPMENT PATH
                  </div>
                  <div className="font-mono text-xs text-[#123A63] bg-[#F7F7F3] p-2.5 rounded-lg border border-[#DCE8EF] leading-relaxed">
                    Pilot → Design → Build → License → Support
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Sidebar Contact Card (Inspired by Aerion's Contact Box) */}
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
                  Discuss Your<br />CO₂ Application
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
                  onClick={() => onNavigate('/contact', 'CO₂ Capture & Repurposing')}
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
          SECTION 15: LARGE CLOSING CTA (AERION BANNER RHYTHM)
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
              Could CO₂ Become<br />
              <span className="text-[#89B3D3] font-light">a Resource in Your Process?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Talk with PRDD about an industrial CO₂ stream, emissions challenge or potential application for CO₂ Capture &amp; Repurposing.
            </p>

            <button
              type="button"
              onClick={() => onNavigate('/contact', 'CO₂ Capture & Repurposing')}
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
