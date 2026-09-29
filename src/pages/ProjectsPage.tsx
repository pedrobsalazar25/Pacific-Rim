import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Building2,
  Factory,
  Wind,
  Droplets,
  RefreshCw,
  Boxes,
  Layers,
  Sparkles,
  MapPin,
  Compass,
  FileText
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface ProjectsPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Environmental Project Experience | PRDD';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore selected historical PRDD project experience spanning industrial emissions, municipal sanitation, environmental testing, specialized operations and CO₂ capture."
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
    const el = document.getElementById('projects-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Projects' }
  ];

  const projectIndex = [
    {
      org: 'INTEL',
      sector: 'Semiconductor Manufacturing',
      location: 'Arizona / Oregon'
    },
    {
      org: 'JABIL',
      sector: 'Industrial Air Quality',
      location: 'Memphis'
    },
    {
      org: 'HAMPTON ROADS SANITATION',
      sector: 'Municipal Sanitation',
      location: 'Williamsburg, Virginia'
    },
    {
      org: 'METRO BIOSOLIDS FACILITY',
      sector: 'Municipal Sanitation',
      location: 'San Diego'
    },
    {
      org: 'ORANGE COUNTY SANITATION DISTRICT',
      sector: 'Municipal Sanitation'
    },
    {
      org: 'CITY OF OCEANSIDE',
      sector: 'Municipal Environmental Engineering'
    },
    {
      org: 'SEA LAUNCH / BOEING',
      sector: 'Aerospace / Maritime Operations'
    },
    {
      org: 'ROCK CANYON OIL',
      sector: 'CO₂ Capture / Oil Recovery'
    }
  ];

  return (
    <div className="bg-[#F7F7F3] text-[#20262B] selection:bg-[#2F6F9F]/30 selection:text-[#071B2D]">
      {/* ==================================================
          SECTION 2: HERO — EDITORIAL PROJECT OPENING
      ================================================== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 shadow-2xl border border-[#2F6F9F]/30">
          {/* Photographic Background with Deep Navy Scrim */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src="/images/prdd/projects/prdd-project-industrial.jpg"
              alt="Industrial emissions and municipal environmental engineering facilities"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123A63]/80 border border-[#2F6F9F]/60 text-xs font-mono tracking-widest text-[#DCE8EF] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>PRDD PROJECT EXPERIENCE</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Title & Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Environmental Solutions<br />
                <span className="text-[#89B3D3] font-light">in Real-World Environments.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  PRDD's historical project experience spans industrial emissions, municipal sanitation, environmental testing, process development and specialized operating environments.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={handleScrollToOverview}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
                >
                  <span>EXPLORE PROJECT EXPERIENCE</span>
                  <ArrowDown className="w-4 h-4 text-[#89B3D3]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Project Discussion')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-black/40 backdrop-blur-md border border-white/20 hover:border-white text-slate-200 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>DISCUSS YOUR CHALLENGE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3: INTRODUCTION & CONTEXT NOTE
      ================================================== */}
      <section id="projects-overview" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>FROM DEVELOPMENT TO IMPLEMENTATION</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
              Experience Beyond<br />
              <span className="text-[#2F6F9F] font-light">the Laboratory.</span>
            </h2>

            <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal pt-2">
              <p>
                PRDD's documented project history includes environmental process development, testing, emissions-control work, odor control, facility engineering and specialized treatment challenges.
              </p>
              <p className="text-slate-600">
                The projects span industrial and municipal operating environments and illustrate PRDD's experience translating scientific and engineering work into practical applications.
              </p>
            </div>

            {/* Supporting Statement */}
            <div className="my-8 p-6 sm:p-8 bg-white border border-[#DCE8EF] shadow-sm">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
                INTEGRATED WORKING SCOPE
              </div>
              <div className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-wider text-[#123A63] flex flex-wrap items-center gap-2 sm:gap-3">
                <span>PROCESS DEVELOPMENT</span>
                <span className="text-[#2F6F9F]">+</span>
                <span>TESTING</span>
                <span className="text-[#2F6F9F]">+</span>
                <span>ENGINEERING</span>
                <span className="text-[#2F6F9F]">+</span>
                <span className="text-[#6D9F45]">IMPLEMENTATION SUPPORT</span>
              </div>
            </div>

            {/* Context Note (Mandatory, Elegant, Visible) */}
            <div className="p-5 sm:p-6 bg-[#FFFDF5] border border-[#DCE8EF]">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#123A63] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-mono font-bold">
                  i
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#123A63]">
                    HISTORICAL PROJECT CONTEXT NOTE
                  </div>
                  <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                    The organizations and projects shown represent selected historical PRDD experience and should not be interpreted as current customer relationships or endorsements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Rail: Environment Summary Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#DCE8EF] p-6 sm:p-8 shadow-sm">
              <div className="font-display text-base font-bold text-[#123A63] mb-4 pb-3 border-b border-[#DCE8EF]">
                Documented Environments
              </div>
              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 bg-[#F7F7F3] border border-[#DCE8EF]">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">01 · INDUSTRIAL</div>
                  <div className="font-bold text-[#123A63]">Industrial Emissions &amp; Process Development</div>
                </div>
                <div className="p-3 bg-[#F7F7F3] border border-[#DCE8EF]">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">02 · MUNICIPAL</div>
                  <div className="font-bold text-[#123A63]">Municipal Sanitation &amp; Environmental Engineering</div>
                </div>
                <div className="p-3 bg-[#F7F7F3] border border-[#DCE8EF]">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">03 · SPECIALIZED</div>
                  <div className="font-bold text-[#123A63]">Specialized Operating Environments</div>
                </div>
                <div className="p-3 bg-[#F7F7F3] border border-[#DCE8EF]">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">04 · RESOURCE RECOVERY</div>
                  <div className="font-bold text-[#123A63]">CO₂ Capture &amp; Resource Recovery</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 4: PROJECT EXPERIENCE OVERVIEW
      ================================================== */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="p-8 sm:p-10 bg-[#071B2D] text-white border border-[#2F6F9F]/30 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>OPERATING ENVIRONMENT OVERVIEW</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-bold text-white mb-6">
            Documented Experience Organized by Environment.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#89B3D3] font-bold uppercase tracking-wider">
                INDUSTRIAL EMISSIONS
              </div>
              <div className="text-sm text-slate-300 font-display font-medium">
                Intel, Jabil
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Semiconductor manufacturing and precious-metal recovery testing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs text-[#89B3D3] font-bold uppercase tracking-wider">
                MUNICIPAL SANITATION
              </div>
              <div className="text-sm text-slate-300 font-display font-medium">
                Hampton Roads, OCSD, Oceanside, Metro Biosolids
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Odor control, ventilation, mobile lab and performance testing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs text-[#89B3D3] font-bold uppercase tracking-wider">
                SPECIALIZED OPERATIONS
              </div>
              <div className="text-sm text-slate-300 font-display font-medium">
                Sea Launch / Boeing
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Toxic and explosive gas treatment in a moving platform environment.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs text-[#6D9F45] font-bold uppercase tracking-wider">
                RESOURCE RECOVERY
              </div>
              <div className="text-sm text-slate-300 font-display font-medium">
                Rock Canyon Oil
              </div>
              <p className="text-xs text-slate-400 font-mono">
                CO₂ capture work associated with secondary and tertiary oil recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          EDITORIAL PROJECT PRESENTATIONS (ALL 8 DOCUMENTED PROJECTS)
          Hierarchical layout: Featured (larger) & Supporting projects
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>SELECTED HISTORICAL WORK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Documented Historical Work<br />
            <span className="text-[#2F6F9F] font-light">Across Operating Environments.</span>
          </h2>
        </div>

        {/* --------------------------------------------------
            FEATURED PROJECT 01: INTEL (Section 5)
        -------------------------------------------------- */}
        <div className="p-8 sm:p-12 lg:p-14 bg-white border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                  PROJECT 01
                </span>
                <span className="text-xs font-mono text-[#2F6F9F] uppercase tracking-widest font-semibold">
                  SEMICONDUCTOR MANUFACTURING
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 text-slate-500 font-mono text-xs uppercase mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    ARIZONA / OREGON
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123A63] tracking-tight">
                  INTEL
                </h3>
              </div>

              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#123A63]">
                NOx &amp; Amine Abatement Development.
              </h4>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                PRDD's historical work associated with Intel facilities in Arizona and Oregon included development of novel approaches for NOx and amine abatement.
              </p>

              <div className="pt-6 border-t border-[#DCE8EF] flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/applications/industrial-emissions')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>RELEVANT APPLICATION: INDUSTRIAL EMISSIONS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/technologies/nox-sox')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors py-3 px-2 cursor-pointer"
                >
                  <span>RELEVANT TECHNOLOGY: NOx &amp; SOx</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-lg relative aspect-[4/3]">
                <PrddImage
                  src="/images/prdd/projects/prdd-project-intel.jpg"
                  fallbackLabel="INTEL FACILITIES · ARIZONA / OREGON"
                  alt="Industrial NOx and amine abatement process engineering environment"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-sm text-[11px] font-mono text-[#123A63] font-semibold border border-[#DCE8EF]">
                  NOx &amp; Amine Process Development Context
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --------------------------------------------------
            FEATURED PROJECT 02: JABIL (Section 6)
        -------------------------------------------------- */}
        <div className="p-8 sm:p-12 lg:p-14 bg-white border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                  PROJECT 02
                </span>
                <span className="text-xs font-mono text-[#2F6F9F] uppercase tracking-widest font-semibold">
                  INDUSTRIAL AIR QUALITY
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 text-slate-500 font-mono text-xs uppercase mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    MEMPHIS
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123A63] tracking-tight">
                  JABIL
                </h3>
              </div>

              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#123A63]">
                Air-Quality Process Design &amp; Testing.
              </h4>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                PRDD's historical work associated with Jabil in Memphis included air-quality process design, testing and project management related to precious-metal recovery.
              </p>

              <div className="pt-6 border-t border-[#DCE8EF] flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/applications/industrial-emissions')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>RELEVANT APPLICATION: INDUSTRIAL EMISSIONS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-lg relative aspect-[4/3]">
                <PrddImage
                  src="/images/prdd/projects/prdd-project-jabil.jpg"
                  fallbackLabel="JABIL · MEMPHIS"
                  alt="Industrial air-quality process design and testing facility"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-sm text-[11px] font-mono text-[#123A63] font-semibold border border-[#DCE8EF]">
                  Air-Quality Process Design &amp; Testing
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --------------------------------------------------
            FEATURED PROJECT 03: SEA LAUNCH / BOEING (Section 7)
        -------------------------------------------------- */}
        <div className="p-8 sm:p-12 lg:p-14 bg-white border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                  PROJECT 03
                </span>
                <span className="text-xs font-mono text-[#2F6F9F] uppercase tracking-widest font-semibold">
                  AEROSPACE / MARITIME OPERATIONS
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123A63] tracking-tight">
                  SEA LAUNCH / BOEING
                </h3>
              </div>

              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#123A63]">
                Treatment in a Moving Platform Environment.
              </h4>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                PRDD's historical Sea Launch / Boeing work involved treatment of toxic and explosive gases associated with a moving platform environment.
              </p>

              <div className="pt-6 border-t border-[#DCE8EF] flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/applications/industrial-emissions')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>RELEVANT APPLICATION: INDUSTRIAL EMISSIONS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-lg relative aspect-[4/3]">
                <PrddImage
                  src="/images/prdd/projects/prdd-project-sea-launch.jpg"
                  fallbackLabel="SEA LAUNCH / BOEING · MOVING PLATFORM"
                  alt="Maritime and moving platform environmental gas treatment"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-sm text-[11px] font-mono text-[#123A63] font-semibold border border-[#DCE8EF]">
                  Toxic &amp; Explosive Gas Treatment Context
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --------------------------------------------------
            FEATURED PROJECT 04: HAMPTON ROADS SANITATION (Section 8)
        -------------------------------------------------- */}
        <div className="p-8 sm:p-12 lg:p-14 bg-white border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                  PROJECT 04
                </span>
                <span className="text-xs font-mono text-[#2F6F9F] uppercase tracking-widest font-semibold">
                  MUNICIPAL SANITATION
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 text-slate-500 font-mono text-xs uppercase mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    WILLIAMSBURG, VIRGINIA
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123A63] tracking-tight">
                  HAMPTON ROADS SANITATION
                </h3>
              </div>

              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#123A63]">
                Multiphase Odor Control &amp; System Support.
              </h4>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                PRDD's historical work associated with Hampton Roads Sanitation in Williamsburg, Virginia included multiphase odor control, related control-system work, startup and testing.
              </p>

              <div className="pt-6 border-t border-[#DCE8EF] flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/applications/water-wastewater')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>RELEVANT APPLICATION: WATER &amp; WASTEWATER</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-lg relative aspect-[4/3]">
                <PrddImage
                  src="/images/prdd/projects/prdd-project-hampton-roads.jpg"
                  fallbackLabel="HAMPTON ROADS SANITATION · WILLIAMSBURG, VIRGINIA"
                  alt="Municipal sanitation and odor control system"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-sm text-[11px] font-mono text-[#123A63] font-semibold border border-[#DCE8EF]">
                  Multiphase Odor Control &amp; Startup Testing
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --------------------------------------------------
            SUPPORTING MUNICIPAL PROJECTS (Sections 9, 10 & 11)
            Grid of three supporting project presentations
        -------------------------------------------------- */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F9F]" />
            <span>MUNICIPAL ENVIRONMENTAL &amp; FACILITY TESTING</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Project 05: Orange County Sanitation District */}
            <div className="p-8 bg-white border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-[10px] font-mono font-bold text-[#123A63] uppercase">
                    PROJECT 05
                  </span>
                  <span className="text-[10px] font-mono text-[#2F6F9F] uppercase font-semibold">
                    MUNICIPAL SANITATION
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#123A63]">
                  ORANGE COUNTY SANITATION DISTRICT
                </h3>

                <h4 className="font-display text-base font-bold text-[#123A63]">
                  Mobile Laboratory Environmental Testing.
                </h4>

                <p className="text-sm text-[#20262B] leading-relaxed font-normal">
                  PRDD's historical work associated with Orange County Sanitation District included mobile laboratory activities supporting environmental testing.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DCE8EF]">
                <button
                  type="button"
                  onClick={() => onNavigate('/applications/water-wastewater')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                >
                  <span>WATER &amp; WASTEWATER</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                </button>
              </div>
            </div>

            {/* Project 06: City of Oceanside */}
            <div className="p-8 bg-white border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-[10px] font-mono font-bold text-[#123A63] uppercase">
                    PROJECT 06
                  </span>
                  <span className="text-[10px] font-mono text-[#2F6F9F] uppercase font-semibold">
                    MUNICIPAL ENGINEERING
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#123A63]">
                  CITY OF OCEANSIDE
                </h3>

                <h4 className="font-display text-base font-bold text-[#123A63]">
                  Odor Control, Ventilation &amp; Testing.
                </h4>

                <p className="text-sm text-[#20262B] leading-relaxed font-normal">
                  PRDD's historical work associated with the City of Oceanside included automated mist odor control, laboratory ventilation, testing and maintenance activities.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DCE8EF]">
                <button
                  type="button"
                  onClick={() => onNavigate('/applications/water-wastewater')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                >
                  <span>WATER &amp; WASTEWATER</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                </button>
              </div>
            </div>

            {/* Project 07: Metro Biosolids Facility */}
            <div className="p-8 bg-white border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-[10px] font-mono font-bold text-[#123A63] uppercase">
                    PROJECT 07
                  </span>
                  <span className="text-[10px] font-mono text-[#2F6F9F] uppercase font-semibold">
                    MUNICIPAL SANITATION
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-xs uppercase mb-1">
                    <MapPin className="w-3 h-3 text-[#2F6F9F]" />
                    SAN DIEGO
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#123A63]">
                    METRO BIOSOLIDS FACILITY
                  </h3>
                </div>

                <h4 className="font-display text-base font-bold text-[#123A63]">
                  Defects &amp; Performance Testing.
                </h4>

                <p className="text-sm text-[#20262B] leading-relaxed font-normal">
                  PRDD's historical work associated with the Metro Biosolids Facility in San Diego included defects and performance testing.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DCE8EF]">
                <button
                  type="button"
                  onClick={() => onNavigate('/applications/water-wastewater')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
                >
                  <span>WATER &amp; WASTEWATER</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* --------------------------------------------------
            FEATURED PROJECT 08: ROCK CANYON OIL (Section 12)
        -------------------------------------------------- */}
        <div className="p-8 sm:p-12 lg:p-14 bg-white border border-[#DCE8EF] shadow-sm hover:border-[#2F6F9F] transition-colors relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-xs font-mono font-bold text-[#123A63] uppercase tracking-wider">
                  PROJECT 08
                </span>
                <span className="text-xs font-mono text-[#6D9F45] uppercase tracking-widest font-semibold">
                  CO₂ CAPTURE / OIL RECOVERY
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123A63] tracking-tight">
                  ROCK CANYON OIL
                </h3>
              </div>

              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#123A63]">
                CO₂ Capture in an Oil-Recovery Context.
              </h4>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                PRDD's project history includes CO₂ capture work associated with secondary oil recovery at Rock Canyon Oil, with tertiary oil recovery and carbon-credit considerations documented in the project history.
              </p>

              <div className="pt-6 border-t border-[#DCE8EF] flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/applications/resource-recovery')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>RELEVANT APPLICATION: RESOURCE RECOVERY</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/technologies/co2-capture')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors py-3 px-2 cursor-pointer"
                >
                  <span>RELEVANT TECHNOLOGY: CO₂ CAPTURE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-lg relative aspect-[4/3]">
                <PrddImage
                  src="/images/prdd/projects/prdd-project-rock-canyon.jpg"
                  fallbackLabel="ROCK CANYON OIL · OIL RECOVERY"
                  alt="CO₂ capture and oil recovery context"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-sm text-[11px] font-mono text-[#123A63] font-semibold border border-[#DCE8EF]">
                  CO₂ Capture &amp; Oil Recovery Context
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ==================================================
          SECTION 13: PROJECT INDEX (ALL 8 ORGANIZATIONS)
          Typography and editorial hierarchy — NOT a logo wall
      ================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="bg-white border border-[#DCE8EF] p-8 sm:p-12 lg:p-16 shadow-sm">
          
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>PROJECT ARCHIVE</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#123A63]">
              SELECTED HISTORICAL PROJECT EXPERIENCE
            </h3>
            <p className="text-sm font-mono text-slate-500 mt-2">
              Concise index of documented PRDD historical project work and operating environments.
            </p>
          </div>

          <div className="divide-y divide-[#DCE8EF] border-y border-[#DCE8EF]">
            {projectIndex.map((item, idx) => (
              <div
                key={idx}
                className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#F7F7F3] px-2 transition-colors"
              >
                <div className="md:col-span-1 font-mono text-xs text-slate-400 font-bold">
                  0{idx + 1}
                </div>
                <div className="md:col-span-5">
                  <h4 className="font-display text-lg sm:text-xl font-bold text-[#123A63]">
                    {item.org}
                  </h4>
                </div>
                <div className="md:col-span-4 font-mono text-xs text-[#2F6F9F] font-semibold">
                  {item.sector}
                </div>
                <div className="md:col-span-2 font-mono text-xs text-slate-500 text-left md:text-right">
                  {item.location}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 text-xs font-mono text-slate-500">
            Historical project index reflecting documented PRDD engineering, testing, and process evaluation work.
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 14: EXPERIENCE ACROSS OPERATING ENVIRONMENTS
      ================================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>PRACTICAL ENVIRONMENTS</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#123A63]">
            Different Problems.<br />
            <span className="text-[#2F6F9F] font-light">Different Operating Conditions.</span>
          </h3>
          <p className="text-base text-slate-600 mt-4 leading-relaxed font-normal">
            PRDD's historical experience spans different operating environments, reinforcing an application-driven approach rather than a single standardized solution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Group 01 */}
          <div className="p-6 bg-white border border-[#DCE8EF] shadow-sm space-y-4">
            <div className="font-display text-3xl font-bold text-[#123A63]">01</div>
            <div className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              INDUSTRIAL FACILITIES
            </div>
            <div className="space-y-1.5 pt-2 border-t border-[#DCE8EF] text-sm text-[#20262B] font-medium">
              <div>Intel</div>
              <div>Jabil</div>
            </div>
          </div>

          {/* Group 02 */}
          <div className="p-6 bg-white border border-[#DCE8EF] shadow-sm space-y-4">
            <div className="font-display text-3xl font-bold text-[#123A63]">02</div>
            <div className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              MUNICIPAL SANITATION
            </div>
            <div className="space-y-1.5 pt-2 border-t border-[#DCE8EF] text-sm text-[#20262B] font-medium">
              <div>Hampton Roads Sanitation</div>
              <div>Orange County Sanitation District</div>
              <div>City of Oceanside</div>
              <div>Metro Biosolids Facility</div>
            </div>
          </div>

          {/* Group 03 */}
          <div className="p-6 bg-white border border-[#DCE8EF] shadow-sm space-y-4">
            <div className="font-display text-3xl font-bold text-[#123A63]">03</div>
            <div className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              SPECIALIZED OPERATIONS
            </div>
            <div className="space-y-1.5 pt-2 border-t border-[#DCE8EF] text-sm text-[#20262B] font-medium">
              <div>Sea Launch / Boeing</div>
            </div>
          </div>

          {/* Group 04 */}
          <div className="p-6 bg-white border border-[#DCE8EF] shadow-sm space-y-4">
            <div className="font-display text-3xl font-bold text-[#6D9F45]">04</div>
            <div className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              RESOURCE RECOVERY
            </div>
            <div className="space-y-1.5 pt-2 border-t border-[#DCE8EF] text-sm text-[#20262B] font-medium">
              <div>Rock Canyon Oil</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 15: WHAT THE PROJECT HISTORY DEMONSTRATES
          Four Restrained Themes
      ================================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#071B2D] text-white border border-[#2F6F9F]/30 shadow-xl space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>PRDD'S WORKING APPROACH</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white mb-4">
              Science Connected to Practical Implementation.
            </h3>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Across its documented project history, PRDD's work has included process development, environmental testing, project management, control-system activities, startup support and practical engineering.
            </p>
          </div>

          {/* Four Restrained Themes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/10">
            <div className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 space-y-2">
              <div className="w-7 h-7 bg-[#123A63] text-[#89B3D3] flex items-center justify-center font-mono text-xs font-bold">
                01
              </div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                PROCESS DEVELOPMENT
              </h4>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                Chemical formulation and process engineering tailored to pollutant characteristics.
              </p>
            </div>

            <div className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 space-y-2">
              <div className="w-7 h-7 bg-[#123A63] text-[#89B3D3] flex items-center justify-center font-mono text-xs font-bold">
                02
              </div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                TESTING &amp; EVALUATION
              </h4>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                Mobile laboratory testing, facility defect analysis, and emissions characterization.
              </p>
            </div>

            <div className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 space-y-2">
              <div className="w-7 h-7 bg-[#123A63] text-[#89B3D3] flex items-center justify-center font-mono text-xs font-bold">
                03
              </div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                ENGINEERING &amp; PROJECT SUPPORT
              </h4>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                Control-system integration, laboratory ventilation design, and project management.
              </p>
            </div>

            <div className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 space-y-2">
              <div className="w-7 h-7 bg-[#123A63] text-[#6D9F45] flex items-center justify-center font-mono text-xs font-bold">
                04
              </div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                IMPLEMENTATION EXPERIENCE
              </h4>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                Facility startup support, equipment commissioning, and operating facility evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 16 & 17: CONNECT PROJECTS TO TECHNOLOGIES & APPLICATIONS
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto space-y-16">
        
        {/* Section 16: Technologies Connection */}
        <div className="p-8 sm:p-12 bg-white border border-[#DCE8EF] shadow-sm space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>EXPLORE THE TECHNOLOGY</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#123A63] mb-2">
              From Historical Experience to PRDD Technology Development.
            </h3>
            <p className="text-xs font-mono text-slate-500">
              Explore PRDD's current technology areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              onClick={() => onNavigate('/technologies/co2-capture')}
              className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">01 · TECHNOLOGY</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  CO₂ Capture &amp; Repurposing
                </h4>
                <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                  Capturing carbon dioxide and converting it into identified useful products.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                <span>Explore Technology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div
              onClick={() => onNavigate('/technologies/nox-sox')}
              className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">02 · TECHNOLOGY</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  NOx &amp; SOx Abatement
                </h4>
                <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                  Multiple process-development approaches addressing nitrogen and sulfur oxides.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                <span>Explore Technology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div
              onClick={() => onNavigate('/technologies/water-treatment')}
              className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">03 · TECHNOLOGY</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  Advanced Water Treatment
                </h4>
                <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                  Documented approaches to seawater treatment for potable water and water reclamation.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                <span>Explore Technology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div
              onClick={() => onNavigate('/technologies/advanced-materials')}
              className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">04 · TECHNOLOGY</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  Advanced Materials
                </h4>
                <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                  Materials-development work connecting concrete, geopolymers and polymer concrete.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                <span>Explore Technology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 17: Applications Connection */}
        <div className="p-8 sm:p-12 bg-white border border-[#DCE8EF] shadow-sm space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>APPLICATIONS BY CHALLENGE</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#123A63]">
              Explore by Environmental Challenge.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              onClick={() => onNavigate('/applications/industrial-emissions')}
              className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 01</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  Industrial Emissions
                </h4>
                <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                  Emissions-control and process-development approaches addressing CO₂, NOx, SOx, amines and specialized gases.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                <span>View Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div
              onClick={() => onNavigate('/applications/water-wastewater')}
              className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 02</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  Water &amp; Wastewater
                </h4>
                <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                  Process development addressing seawater treatment and water reclamation, with municipal sanitation engineering.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                <span>View Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div
              onClick={() => onNavigate('/applications/concrete-materials')}
              className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 03</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  Concrete &amp; Materials
                </h4>
                <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                  Approaches involving concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                <span>View Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div
              onClick={() => onNavigate('/applications/resource-recovery')}
              className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 04</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  Resource Recovery
                </h4>
                <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                  Evaluating whether pollutants or process streams can be converted into useful products or materials.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                <span>View Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ==================================================
          SECTION 18: FINAL CTA
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0">
            <PrddImage
              src={PRDD_IMAGES.finalCta}
              alt="Practical environmental process engineering consultation"
              className="w-full h-full object-cover object-center filter saturate-50 brightness-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
            <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>START WITH YOUR CHALLENGE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Have an Environmental<br />
              <span className="text-[#89B3D3] font-light">Problem to Discuss?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Talk with PRDD about your pollutant stream, water challenge, process development need or environmental engineering problem.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'Project Discussion')}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
              >
                <span>DISCUSS YOUR PROJECT</span>
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
