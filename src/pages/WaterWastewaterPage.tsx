import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Droplets,
  Building2,
  Layers,
  Sparkles,
  CheckCircle2,
  Atom,
  ShieldCheck,
  AlertTriangle,
  Waves,
  Filter,
  Check
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface WaterWastewaterPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const WaterWastewaterPage: React.FC<WaterWastewaterPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Water & Wastewater Applications | PRDD';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore PRDD's application-driven approach to water and wastewater challenges, including seawater treatment, water reclamation and municipal environmental engineering experience."
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
    const el = document.getElementById('water-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Applications', onClick: () => onNavigate('/applications') },
    { label: 'Water & Wastewater' }
  ];

  const relatedApps = [
    {
      category: 'APPLICATION 01',
      title: 'Industrial Emissions',
      description: 'Emissions-control and process-development approaches addressing CO₂, NOx, SOx, amines and specialized gases.',
      route: '/applications/industrial-emissions'
    },
    {
      category: 'APPLICATION 04',
      title: 'Resource Recovery',
      description: 'Converting pollutants or process streams into useful products or materials where technically appropriate.',
      route: '/applications/resource-recovery'
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
          {/* Photographic Background with Deep Navy Water/Industrial Scrim */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src="/images/prdd/applications/prdd-application-water.jpg"
              alt="Municipal and industrial water treatment and reclamation facility"
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
              <span>WATER &amp; WASTEWATER</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Title & Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Different Water Challenges.<br />
                <span className="text-[#89B3D3] font-light">Different Process Requirements.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  PRDD's water-related work spans treatment-process development and practical environmental engineering experience in municipal water, wastewater and sanitation environments.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Water & Wastewater')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
                >
                  <span>DISCUSS YOUR WATER CHALLENGE</span>
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
            
            {/* Supporting Image: Top Water Infrastructure Visual */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DCE8EF] shadow-lg bg-[#071B2D] relative group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <PrddImage
                  src="/images/prdd/applications/prdd-application-water.jpg"
                  alt="Industrial water reclamation and wastewater engineering infrastructure"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-[#20262B]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
                  <span className="font-semibold text-[#123A63]">WATER TREATMENT &amp; RECLAMATION OPERATING ENVIRONMENT</span>
                </span>
                <span className="text-slate-500">[ APPLICATION SLOT A ]</span>
              </div>
            </div>

            {/* Introduction Article Section */}
            <div id="water-overview" className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>APPLICATION CONTEXT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
                Start With<br />
                <span className="text-[#2F6F9F] font-light">the Water Challenge.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal pt-2">
                <p>
                  Water-treatment and wastewater challenges vary by source, objective and operating environment.
                </p>
                <p>
                  PRDD's documented work includes process development addressing seawater treatment and water reclamation, together with broader environmental engineering experience in municipal sanitation facilities.
                </p>
                <p className="text-slate-600">
                  The appropriate process-development or engineering path depends on the requirements of the specific application.
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
                SECTION 5: TWO WATER APPLICATION DIRECTIONS
                Two substantial, clearly separated application directions — NOT combined
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>WATER APPLICATIONS</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Different Objectives<br />
                <span className="text-[#2F6F9F] font-light">Require Different Approaches.</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                PRDD's documented water-treatment process development addresses two distinct application directions. These represent separate technical efforts and are not combined into a single treatment train:
              </p>

              <div className="space-y-8 pt-2">
                {/* 01: Seawater Treatment */}
                <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
                      <span>DIRECTION 01 · SEAWATER TREATMENT</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      POTABLE WATER DEVELOPMENT
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                    From Seawater Toward Potable Water.
                  </h3>

                  <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6 font-normal">
                    <p>
                      PRDD documentation describes a process developed to produce potable water from seawater.
                    </p>
                    <p className="font-medium text-[#123A63]">
                      PRDD's source documentation characterizes this process as using less energy and producing higher-quality water than reverse osmosis.
                    </p>
                  </div>

                  {/* Qualifier */}
                  <div className="p-4 bg-[#F7F7F3] border-l-2 border-[#2F6F9F] rounded-r-xl text-xs font-mono text-slate-600 leading-relaxed mb-6">
                    Performance characterization reflects PRDD source documentation; application-specific performance data is not presented here.
                  </div>

                  <div className="pt-5 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-500">
                      Relevant technology: <strong className="text-[#123A63]">Advanced Water Treatment</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/technologies/water-treatment')}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                    >
                      <span>EXPLORE WATER TECHNOLOGY</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    </button>
                  </div>
                </div>

                {/* 02: Water Reclamation */}
                <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                      <span>DIRECTION 02 · WATER RECLAMATION</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      FORWARD OSMOSIS &amp; PRECIPITATION
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4">
                    Developing an Approach to Water Reclamation.
                  </h3>

                  <div className="space-y-4 text-base sm:text-lg text-[#20262B] leading-relaxed mb-6 font-normal">
                    <p>
                      PRDD documentation describes an energy-efficient water reclamation process using forward osmosis combined with chemical forced precipitation.
                    </p>
                    <p className="font-medium text-[#123A63]">
                      This process-development direction is distinct from PRDD's seawater-to-potable-water work.
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-500">
                      Relevant technology: <strong className="text-[#123A63]">Advanced Water Treatment</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/technologies/water-treatment')}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                    >
                      <span>EXPLORE WATER TECHNOLOGY</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 6: APPLICATION-TO-TECHNOLOGY VISUALIZATION
                Shows two distinct, non-sequential branches connecting to Advanced Water Treatment
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

                {/* Conceptual Branching Flow */}
                <div className="max-w-3xl mx-auto space-y-6 my-8">
                  {/* Step 1: Water / Wastewater Challenge */}
                  <div className="bg-[#0b243d] border border-[#2F6F9F]/50 p-5 rounded-2xl text-center shadow-md max-w-xl mx-auto">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      INPUT CONDITION
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      WATER / WASTEWATER CHALLENGE
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
                  </div>

                  {/* Step 2: Characterize the Application */}
                  <div className="bg-[#103252] border-2 border-[#2F6F9F] p-5 rounded-2xl text-center shadow-lg max-w-xl mx-auto">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                      STREAM EVALUATION
                    </div>
                    <div className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                      CHARACTERIZE THE APPLICATION
                    </div>
                  </div>

                  {/* Arrow Down splitting to two distinct branches */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#89B3D3]" />
                  </div>

                  {/* Two Distinct Visual Branches (Side by Side on desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Branch 1: Seawater Treatment */}
                    <div className="bg-[#0c263f] border border-[#2F6F9F]/40 p-6 rounded-xl text-center space-y-3">
                      <div className="text-[10px] font-mono text-[#89B3D3] uppercase tracking-wider">
                        APPLICATION BRANCH 01
                      </div>
                      <div className="font-display text-lg font-bold text-white">
                        SEAWATER TREATMENT
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#2F6F9F]" />
                      </div>
                      <div className="bg-[#071B2D] border border-[#2F6F9F]/40 p-3.5 rounded-lg font-mono text-xs text-[#DCE8EF]">
                        POTABLE WATER PROCESS DEVELOPMENT
                      </div>
                    </div>

                    {/* Branch 2: Water Reclamation */}
                    <div className="bg-[#0c263f] border border-[#2F6F9F]/40 p-6 rounded-xl text-center space-y-3">
                      <div className="text-[10px] font-mono text-[#89B3D3] uppercase tracking-wider">
                        APPLICATION BRANCH 02
                      </div>
                      <div className="font-display text-lg font-bold text-white">
                        WATER RECLAMATION
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[#2F6F9F]" />
                      </div>
                      <div className="bg-[#071B2D] border border-[#2F6F9F]/40 p-3.5 rounded-lg font-mono text-xs text-[#DCE8EF]">
                        FORWARD OSMOSIS + CHEMICAL FORCED PRECIPITATION
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow Down to Relevant PRDD Technology */}
                  <div className="flex flex-col items-center pt-2">
                    <div className="w-0.5 h-5 bg-[#2F6F9F]" />
                    <ArrowDown className="w-4 h-4 text-[#6D9F45]" />
                  </div>

                  {/* Bottom Common Technology Node */}
                  <div className="bg-[#0b243d] border-2 border-[#6D9F45] p-5 rounded-2xl text-center shadow-xl max-w-xl mx-auto">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#6D9F45] mb-1">
                      RELEVANT PRDD TECHNOLOGY
                    </div>
                    <div className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                      ADVANCED WATER TREATMENT
                    </div>
                  </div>
                </div>

                {/* Caption Requirement */}
                <div className="mt-8 pt-6 border-t border-[#2F6F9F]/30 text-center text-xs font-mono text-slate-400 max-w-2xl mx-auto">
                  Conceptual application map. Treatment methods and process configuration depend on the requirements of the specific water application.
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 7 & 8: MUNICIPAL & SANITATION EXPERIENCE
                Clearly distinguished from proprietary technology
            ================================================== */}
            <div className="space-y-8 pt-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>OPERATING ENVIRONMENT EXPERIENCE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Environmental Engineering<br />
                <span className="text-[#2F6F9F] font-light">in Municipal Facilities.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                PRDD's broader environmental engineering experience includes historical project work in municipal wastewater and sanitation environments. This experience includes process evaluation, environmental testing, odor-control work and related facility engineering activities.
              </p>

              {/* Visually Prominent Important Context Note */}
              <div className="p-6 sm:p-7 bg-[#FFFDF5] border-2 border-[#DCE8EF] rounded-2xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#123A63] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-bold">i</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
                      IMPORTANT CONTEXT NOTE
                    </div>
                    <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                      The projects below demonstrate broader PRDD environmental engineering experience. They should not be interpreted as deployments of PRDD's proprietary seawater-treatment or water-reclamation technologies unless explicitly documented.
                    </p>
                  </div>
                </div>
              </div>

              {/* Selected Historical Project Experience (Section 8) */}
              <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <div className="px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-md text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">
                    SELECTED HISTORICAL PROJECT EXPERIENCE
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    FACILITY &amp; ENGINEERING CONTEXT
                  </span>
                </div>

                <div className="divide-y divide-[#DCE8EF] border-y border-[#DCE8EF]">
                  {/* Hampton Roads Sanitation */}
                  <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <div className="md:col-span-5">
                      <h4 className="font-display text-lg font-bold text-[#123A63]">HAMPTON ROADS SANITATION</h4>
                      <div className="text-xs font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
                        WILLIAMSBURG, VIRGINIA
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm text-[#20262B] leading-relaxed">
                        Historical PRDD work included multiphase odor control, related control-system work, startup and testing.
                      </p>
                    </div>
                  </div>

                  {/* Orange County Sanitation District */}
                  <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <div className="md:col-span-5">
                      <h4 className="font-display text-lg font-bold text-[#123A63]">ORANGE COUNTY SANITATION DISTRICT</h4>
                      <div className="text-xs font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
                        ENVIRONMENTAL TESTING
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm text-[#20262B] leading-relaxed">
                        Historical PRDD work included mobile laboratory activities supporting environmental testing.
                      </p>
                    </div>
                  </div>

                  {/* City of Oceanside */}
                  <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <div className="md:col-span-5">
                      <h4 className="font-display text-lg font-bold text-[#123A63]">CITY OF OCEANSIDE</h4>
                      <div className="text-xs font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
                        MUNICIPAL FACILITY
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm text-[#20262B] leading-relaxed">
                        Historical PRDD work included automated mist odor control, laboratory ventilation, testing and maintenance activities.
                      </p>
                    </div>
                  </div>

                  {/* Metro Biosolids Facility — San Diego */}
                  <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <div className="md:col-span-5">
                      <h4 className="font-display text-lg font-bold text-[#123A63]">METRO BIOSOLIDS FACILITY — SAN DIEGO</h4>
                      <div className="text-xs font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
                        FACILITY PERFORMANCE
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm text-[#20262B] leading-relaxed">
                        Historical PRDD work included defects and performance testing.
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
            </div>

            {/* Supporting Imagery Spread (Slots B & C) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Supporting Image B */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.approachLab}
                    alt="Water process chemistry and laboratory evaluation"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">PROCESS CHEMISTRY &amp; LABORATORY EVALUATION</span>
                  <span className="text-slate-500">[ APPLICATION SLOT B ]</span>
                </div>
              </div>

              {/* Supporting Image C */}
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <PrddImage
                    src={PRDD_IMAGES.waterTreatment}
                    alt="Industrial water treatment and engineering infrastructure"
                    className="w-full h-full object-cover object-center filter saturate-85 brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-[#DCE8EF] text-xs font-mono text-[#20262B] flex items-center justify-between">
                  <span className="font-semibold text-[#123A63]">ENGINEERED WATER TREATMENT INFRASTRUCTURE</span>
                  <span className="text-slate-500">[ APPLICATION SLOT C ]</span>
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 9: WATER RECLAMATION FOCUS
                Forward osmosis meets chemical forced precipitation
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>DOCUMENTED PROCESS DEVELOPMENT</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                Forward Osmosis Meets Chemical Forced Precipitation.
              </h3>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  One documented PRDD water-reclamation approach combines forward osmosis with chemical forced precipitation.
                </p>
                <p className="text-slate-600">
                  The approach reflects PRDD's broader practice of developing environmental processes around the requirements of a specific application.
                </p>
              </div>

              {/* Restrained Conceptual Relationship */}
              <div className="my-6 p-6 sm:p-8 bg-[#071B2D] text-white rounded-2xl border border-[#2F6F9F]/30 shadow-md">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-4 text-center">
                  CONCEPTUAL PROCESS RELATIONSHIP
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm text-center">
                  <div className="px-4 py-3 bg-[#0c263f] border border-[#2F6F9F]/50 rounded-xl font-bold text-white w-full sm:w-auto">
                    FORWARD OSMOSIS
                  </div>
                  <div className="text-[#6D9F45] font-bold text-base">
                    +
                  </div>
                  <div className="px-4 py-3 bg-[#0c263f] border border-[#2F6F9F]/50 rounded-xl font-bold text-white w-full sm:w-auto">
                    CHEMICAL FORCED PRECIPITATION
                  </div>
                  <div className="text-[#89B3D3] font-bold rotate-90 sm:rotate-0">
                    →
                  </div>
                  <div className="px-5 py-3 bg-[#123A63] border-2 border-[#6D9F45] rounded-xl font-bold text-white w-full sm:w-auto">
                    WATER RECLAMATION APPROACH
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs font-mono text-slate-400">
                  Conceptual relationship only. Detailed process configuration and application-specific treatment data are not presented here.
                </div>
              </div>
            </div>

            {/* ==================================================
                SECTION 10: MUNICIPAL ENGINEERING CONTEXT
            ================================================== */}
            <div className="p-8 sm:p-10 bg-[#071B2D] text-white rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 shadow-lg space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>BEYOND PROPRIETARY TECHNOLOGY</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Water &amp; Wastewater Challenges Also Require Practical Engineering.
              </h3>

              <div className="text-base text-slate-300 leading-relaxed space-y-4 font-normal">
                <p>
                  PRDD's historical municipal project work includes environmental testing, odor-control systems, control-system activities, laboratory work and facility-related engineering.
                </p>
                <p className="text-slate-400">
                  This broader project experience is distinct from PRDD's proprietary water-treatment process development, while contributing to the company's practical experience in operating environmental facilities.
                </p>
              </div>
            </div>

            {/* ==================================================
                SECTION 11: APPLICATION DEVELOPMENT APPROACH (4 STAGES)
            ================================================== */}
            <div className="space-y-8 pt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>FROM WATER CHALLENGE TO APPROACH</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Develop Around<br />
                <span className="text-[#2F6F9F] font-light">the Actual Application.</span>
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
                    Understand the water source, treatment objective and operating requirements.
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
                    Determine which PRDD technology or process-development approach may be relevant.
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
                Not every water or wastewater challenge follows the same technical path.
              </div>
            </div>

            {/* ==================================================
                SECTION 12: RELEVANT TECHNOLOGY CONNECTION
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>RELEVANT PRDD TECHNOLOGY</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                Advanced Water Treatment.
              </h3>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                PRDD's Advanced Water Treatment work includes documented approaches to seawater treatment for potable water and water reclamation.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/technologies/water-treatment')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-black/10 cursor-pointer"
                >
                  <span>EXPLORE ADVANCED WATER TREATMENT</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/technologies')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors py-3 px-4 cursor-pointer"
                >
                  <span>VIEW ALL TECHNOLOGIES</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
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
                <Droplets className="w-4 h-4 text-[#2F6F9F]" />
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    APPLICATION
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Water &amp; Wastewater
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    DOCUMENTED TECHNOLOGY AREAS
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
                    HISTORICAL ENVIRONMENTS
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div className="font-semibold text-[#123A63]">Municipal Sanitation</div>
                    <div className="font-semibold text-[#123A63]">Wastewater Facilities</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    RELEVANT TECHNOLOGY
                  </div>
                  <div className="font-semibold text-[#2F6F9F]">
                    Advanced Water Treatment
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
                  alt="Water and wastewater engineering dialogue"
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
                  Discuss Your Water<br />Challenge
                </h3>

                <p className="text-xs font-mono text-slate-300 mb-6 leading-relaxed">
                  Connect with PRDD to evaluate your water source, treatment objectives, and facility requirements.
                </p>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Water & Wastewater')}
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
              alt="Environmental water engineering infrastructure"
              className="w-full h-full object-cover object-center filter saturate-50 brightness-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
            <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>DISCUSS YOUR WATER CHALLENGE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Working With a Difficult<br />
              <span className="text-[#89B3D3] font-light">Water or Wastewater Problem?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Talk with PRDD about the water source, treatment objective, operating environment or environmental process challenge you are working to address.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'Water & Wastewater')}
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
