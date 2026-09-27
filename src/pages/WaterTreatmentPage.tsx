import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Droplets,
  Factory,
  Layers,
  Sparkles,
  Building2,
  Atom,
  ShieldCheck,
  CheckCircle2,
  Plus
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { RelatedContent, RelatedItem } from '../components/interior/RelatedContent';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface WaterTreatmentPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const WaterTreatmentPage: React.FC<WaterTreatmentPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Advanced Water Treatment Technology | PRDD';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore PRDD's water-treatment process development, including documented approaches to seawater treatment and water reclamation."
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
    { label: 'Advanced Water Treatment' }
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
          {/* Photographic Background with Deep Navy / Steel-Blue Industrial Gradient Overlay */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src={PRDD_IMAGES.waterTreatment}
              alt="Industrial water treatment and process engineering infrastructure"
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
              <span>ADVANCED WATER TREATMENT</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Integrated Large Title & Lower Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Rethinking How Water<br />
                <span className="text-[#89B3D3] font-light">Is Treated and Recovered.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs aligned lower right / bottom */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  PRDD has developed water-treatment approaches addressing seawater treatment and water reclamation, with an emphasis on energy-efficient process development.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Advanced Water Treatment')}
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
            
            {/* Supporting Image A: Large Top Process Facility Visual (Rounded Container) */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DCE8EF] shadow-lg bg-[#071B2D] relative group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <PrddImage
                  src={PRDD_IMAGES.waterTreatment}
                  alt="Industrial water treatment and process engineering infrastructure"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-[#20262B]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
                  <span className="font-semibold text-[#123A63]">INDUSTRIAL WATER TREATMENT &amp; RECLAMATION PROCESS ENVIRONMENT</span>
                </span>
                <span className="text-slate-500">[ IMAGE SLOT A ]</span>
              </div>
            </div>

            {/* Introduction Article Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>WATER PROCESS DEVELOPMENT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
                Different Water Challenges<br />
                <span className="text-[#2F6F9F] font-light">Require Different Approaches.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal pt-2">
                <p>
                  PRDD's water-treatment work reflects the company's broader approach to environmental process development: evaluate the specific challenge and develop a practical process around the application.
                </p>
                <p>
                  Documented PRDD work includes seawater treatment for potable water and an energy-efficient water reclamation approach involving forward osmosis and chemical forced precipitation.
                </p>
              </div>

              {/* Large Technical Highlight Statement */}
              <div className="my-8 p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
                  CORE TECHNICAL PHILOSOPHY
                </div>
                <div className="font-mono text-base sm:text-xl md:text-2xl font-bold tracking-wider text-[#123A63] flex flex-wrap items-center gap-2 sm:gap-3">
                  <span>TREAT</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span>RECOVER</span>
                  <span className="text-[#2F6F9F]">→</span>
                  <span className="text-[#6D9F45]">REUSE</span>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 5: TWO DOCUMENTED TECHNOLOGY DIRECTIONS (CRITICAL)
                Clearly separated into distinct blocks — not connected into one process diagram
            ================================================== */}
            <div id="technology-directions" className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>SELECTED PROCESS DEVELOPMENT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Two Water Challenges.<br />
                <span className="text-[#2F6F9F] font-light">Distinct Process Approaches.</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                PRDD's documented water-treatment work encompasses two distinct technology directions, each developed for different source streams and operational objectives. These represent separate process-development efforts:
              </p>

              <div className="space-y-8 pt-2">
                {/* DIRECTION 01: SEAWATER TO POTABLE WATER */}
                <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
                      <span>DIRECTION 01 · SEAWATER TO POTABLE WATER</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      SEAWATER TREATMENT
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                    An Alternative Approach to Seawater Treatment.
                  </h3>

                  <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6">
                    <p>
                      PRDD documentation describes a process developed to produce potable water from seawater.
                    </p>
                    <p>
                      PRDD's source material characterizes the process as using less energy and producing higher-quality water than reverse osmosis.
                    </p>
                  </div>

                  {/* Required Qualifier Callout */}
                  <div className="p-4 bg-[#F7F7F3] border-l-2 border-[#2F6F9F] rounded-r-xl text-xs font-mono text-slate-600 leading-relaxed">
                    Performance characterization reflects PRDD source documentation; application-specific performance data is not presented here.
                  </div>

                  {/* Editorial Spec Line */}
                  <div className="mt-6 pt-5 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">INPUT STREAM:</span>
                      <strong className="text-[#123A63]">Seawater</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">OBJECTIVE:</span>
                      <strong className="text-[#123A63]">Potable Water</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">CHARACTERIZATION:</span>
                      <strong className="text-[#2F6F9F]">Alternative to Reverse Osmosis</strong>
                    </span>
                  </div>
                </div>

                {/* DIRECTION 02: WATER RECLAMATION */}
                <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                      <span>DIRECTION 02 · WATER RECLAMATION</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      EFFLUENT RECOVERY
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                    Energy-Efficient Water Reclamation.
                  </h3>

                  <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6">
                    <p>
                      PRDD documentation describes an energy-efficient water reclamation process using forward osmosis combined with chemical forced precipitation.
                    </p>
                    <p className="font-semibold text-[#123A63]">
                      This process-development approach is identified separately from PRDD's seawater-to-potable-water work.
                    </p>
                  </div>

                  {/* Editorial Spec Line */}
                  <div className="mt-6 pt-5 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">METHODS:</span>
                      <strong className="text-[#123A63]">Forward Osmosis + Chemical Forced Precipitation</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">OBJECTIVE:</span>
                      <strong className="text-[#6D9F45]">Water Reclamation</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-slate-400">DEVELOPMENT:</span>
                      <strong className="text-[#123A63]">Separately Identified Approach</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 6: CONCEPTUAL WATER PROCESS VISUALIZATION
                Shows PRDD's overarching water process development philosophy
            ================================================== */}
            <div id="process-overview" className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

              <div className="relative">
                <div className="max-w-2xl mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                    <span>PROCESS PHILOSOPHY OVERVIEW</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Conceptual Water Process Overview
                  </h3>
                </div>

                {/* Conceptual Process Visualization Diagram */}
                <div className="space-y-4 max-w-2xl mx-auto my-8">
                  {/* Step 1: Water Source */}
                  <div className="bg-[#0b243d] border border-[#2F6F9F]/40 p-5 rounded-xl text-center shadow-md">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      INPUT STREAM
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      WATER SOURCE
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                  </div>

                  {/* Step 2: Application-Specific Water Challenge */}
                  <div className="bg-[#0c263f] border border-[#2F6F9F]/50 p-5 rounded-xl text-center shadow-md">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      PROBLEM DEFINITION
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      APPLICATION-SPECIFIC WATER CHALLENGE
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

                  {/* Step 4: Treatment / Recovery */}
                  <div className="bg-[#0c263f] border border-[#2F6F9F]/50 p-5 rounded-xl text-center shadow-md">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      TRANSFORMATION
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      TREATMENT / RECOVERY
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#6D9F45]" />
                  </div>

                  {/* Step 5: Useful Water Output */}
                  <div className="bg-[#0b243d] border-2 border-[#6D9F45]/80 p-5 rounded-xl text-center shadow-lg">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#6D9F45] mb-1">
                      DELIVERED OUTPUT
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      USEFUL WATER OUTPUT
                    </div>
                  </div>
                </div>

                {/* Caption Requirement */}
                <div className="mt-8 pt-6 border-t border-[#2F6F9F]/30 text-center text-xs font-mono text-slate-400">
                  Conceptual technology overview. Specific treatment methods and process configuration depend on the application.
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 7: FORWARD OSMOSIS + CHEMICAL FORCED PRECIPITATION
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>DOCUMENTED WATER RECLAMATION APPROACH</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Combining Treatment Methods<br />
                <span className="text-[#2F6F9F] font-light">for Water Reclamation.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  One documented PRDD water reclamation approach combines forward osmosis with chemical forced precipitation.
                </p>
                <p>
                  The process reflects PRDD's focus on developing environmental treatment methods around the requirements of the specific application.
                </p>
              </div>

              {/* Conceptual Relationship Diagram */}
              <div className="p-8 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm">
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-6 text-center">
                  CONCEPTUAL METHOD RELATIONSHIP
                </div>

                <div className="max-w-xl mx-auto space-y-4">
                  {/* Two Methods Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div className="p-5 bg-[#F7F7F3] border border-[#DCE8EF] rounded-xl text-center">
                      <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1">
                        METHOD A
                      </div>
                      <div className="font-mono text-sm sm:text-base font-bold text-[#123A63]">
                        FORWARD OSMOSIS
                      </div>
                    </div>

                    <div className="p-5 bg-[#F7F7F3] border border-[#DCE8EF] rounded-xl text-center">
                      <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1">
                        METHOD B
                      </div>
                      <div className="font-mono text-sm sm:text-base font-bold text-[#123A63]">
                        CHEMICAL FORCED PRECIPITATION
                      </div>
                    </div>
                  </div>

                  {/* Plus Symbol */}
                  <div className="flex justify-center -my-2">
                    <div className="w-8 h-8 rounded-full bg-[#123A63] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      +
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center pt-2">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#6D9F45]" />
                  </div>

                  {/* Result Approach Box */}
                  <div className="p-6 bg-[#071B2D] border-2 border-[#6D9F45]/80 text-white rounded-xl text-center shadow-lg">
                    <div className="text-[10px] font-mono text-[#6D9F45] uppercase tracking-wider mb-1">
                      INTEGRATED OUTCOME
                    </div>
                    <div className="font-display text-lg sm:text-xl font-bold tracking-wide">
                      WATER RECLAMATION APPROACH
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#DCE8EF] text-center text-xs font-mono text-slate-500">
                  Conceptual relationship only. Process configuration and treatment specifics are tailored to the application.
                </div>
              </div>
            </div>

            {/* Supporting Imagery Spread (Slots B & C) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Supporting Image B */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.approachLab}
                    alt="Advanced water testing and process engineering laboratory"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">ADVANCED TESTING &amp; PROCESS EVALUATION</span>
                  <span className="text-slate-500">[ IMAGE SLOT B ]</span>
                </div>
              </div>

              {/* Supporting Image C */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.advancedMaterials}
                    alt="Precipitation chemistry and materials interaction analysis"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">PRECIPITATION CHEMISTRY &amp; SOLIDS SEPARATION</span>
                  <span className="text-slate-500">[ IMAGE SLOT C ]</span>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 8: APPLICATION CONTEXT
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>APPLICATION CONTEXT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Water Treatment for<br />
                <span className="text-[#2F6F9F] font-light">Real-World Requirements.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  PRDD's documented work spans water-treatment challenges including seawater conversion and water reclamation.
                </p>
                <p>
                  The company's broader environmental engineering experience also includes municipal wastewater and sanitation projects involving process evaluation, testing, odor control and related environmental systems.
                </p>
              </div>

              {/* Supporting Image D: Industrial / Municipal Environment */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.finalCta}
                    alt="Municipal and industrial environmental water infrastructure"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">MUNICIPAL &amp; INDUSTRIAL ENVIRONMENTAL INFRASTRUCTURE</span>
                  <span className="text-slate-500">[ IMAGE SLOT D ]</span>
                </div>
              </div>

              {/* ==================================================
                  SECTION 9: SELECTED MUNICIPAL EXPERIENCE
                  Structured editorial list — not customer logo advertising
              ================================================== */}
              <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm">
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
                  Experience in Municipal Water &amp; Sanitation Environments.
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  PRDD's engineering practice includes hands-on technical work across major municipal sanitation facilities and operating districts:
                </p>

                {/* Clean Editorial List */}
                <div className="divide-y divide-[#DCE8EF] border-y border-[#DCE8EF]">
                  {/* Item 1 */}
                  <div className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                    <div className="md:col-span-5">
                      <h4 className="font-display text-base sm:text-lg font-bold text-[#123A63]">
                        HAMPTON ROADS SANITATION
                      </h4>
                      <div className="text-xs font-mono text-slate-500">Williamsburg, Virginia</div>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm text-[#20262B] leading-relaxed">
                        PRDD project experience included multiphase odor control, control-system work, startup and testing.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                    <div className="md:col-span-5">
                      <h4 className="font-display text-base sm:text-lg font-bold text-[#123A63]">
                        ORANGE COUNTY SANITATION DISTRICT
                      </h4>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm text-[#20262B] leading-relaxed">
                        PRDD project experience included mobile laboratory work supporting environmental testing.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                    <div className="md:col-span-5">
                      <h4 className="font-display text-base sm:text-lg font-bold text-[#123A63]">
                        CITY OF OCEANSIDE
                      </h4>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm text-[#20262B] leading-relaxed">
                        PRDD project experience included automated mist odor control, laboratory ventilation and testing/maintenance work.
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                    <div className="md:col-span-5">
                      <h4 className="font-display text-base sm:text-lg font-bold text-[#123A63]">
                        METRO BIOSOLIDS FACILITY — SAN DIEGO
                      </h4>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm text-[#20262B] leading-relaxed">
                        PRDD project experience included defects and performance testing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Important Context Note */}
                <div className="mt-6 p-4 bg-[#F7F7F3] border border-[#DCE8EF] rounded-xl text-xs font-mono text-slate-600 leading-relaxed">
                  These projects demonstrate broader PRDD environmental engineering and municipal experience. They are presented as historical engineering project context.
                </div>

                <div className="mt-8">
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
            </div>

            {/* ==================================================
                SECTION 10: THE PRDD APPROACH (4 STAGES)
            ================================================== */}
            <div className="space-y-8 pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>FROM WATER CHALLENGE TO PROCESS</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Develop Around<br />
                <span className="text-[#2F6F9F] font-light">the Application.</span>
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
                    Understand the water source, treatment challenge and project requirements.
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
                    Translate the process into practical implementation.
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
                    Support application and commercialization where appropriate.
                  </p>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 11: ENGINEERING EXPERIENCE
            ================================================== */}
            <div className="p-8 bg-[#071B2D] text-white rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 shadow-lg">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>BEYOND PROPRIETARY TECHNOLOGY</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Environmental Engineering in Operating Facilities.
              </h3>

              <div className="text-base text-slate-300 leading-relaxed space-y-4">
                <p>
                  PRDD's experience includes environmental process development as well as practical project work in municipal and industrial environments.
                </p>
                <p>
                  This combination of scientific process development and implementation experience informs PRDD's approach to environmental challenges.
                </p>
              </div>
            </div>

            {/* ==================================================
                SECTION 12: RELATED TECHNOLOGIES (Understated)
            ================================================== */}
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
                <Droplets className="w-4 h-4 text-[#2F6F9F]" />
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    CATEGORY
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Advanced Water Treatment
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    FOCUS
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Water Treatment &amp; Reclamation
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    DOCUMENTED AREAS
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div className="font-semibold text-[#123A63]">Seawater Treatment</div>
                    <div className="font-semibold text-[#123A63]">Water Reclamation</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    DOCUMENTED METHODS
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div className="font-semibold text-[#123A63]">Forward Osmosis</div>
                    <div className="font-semibold text-[#123A63]">Chemical Forced Precipitation</div>
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
                  alt="PRDD water engineering dialogue"
                  className="w-full h-full object-cover object-center filter saturate-50 brightness-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
                <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
              </div>

              <div className="relative z-10 text-center">
                <div className="w-10 h-10 rounded-full bg-[#123A63] border border-[#2F6F9F] flex items-center justify-center mx-auto mb-4 text-[#DCE8EF]">
                  <Droplets className="w-5 h-5 text-[#89B3D3]" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Discuss Your Water<br />Application
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
                  onClick={() => onNavigate('/contact', 'Advanced Water Treatment')}
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
          SECTION 13: LARGE CLOSING CTA
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
              <span className="text-[#89B3D3] font-light">Water-Treatment Challenge?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Talk with PRDD about water treatment, water reclamation or an environmental process-development challenge.
            </p>

            <button
              type="button"
              onClick={() => onNavigate('/contact', 'Advanced Water Treatment')}
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
