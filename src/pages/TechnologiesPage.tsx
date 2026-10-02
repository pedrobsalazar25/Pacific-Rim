import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Factory,
  Wind,
  Droplets,
  Layers,
  Sparkles,
  CheckCircle2,
  Atom,
  Building2,
  Boxes,
  Compass,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface TechnologiesPageProps {
  onNavigate: (path: string, topic?: string) => void;
  onOpenTechModal?: (tech?: any) => void;
}

export const TechnologiesPage: React.FC<TechnologiesPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Environmental Technologies | CST';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore CST technologies for CO₂ capture and repurposing, NOx and SOx abatement, advanced water treatment and materials development.'
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  const handleScrollToTechnologies = () => {
    const el = document.getElementById('portfolio-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Technologies' }
  ];

  const technologies = [
    {
      number: '01',
      category: 'CO₂ CAPTURE & REPURPOSING',
      title: 'Capture Carbon. Create Useful Products.',
      description:
        'CST has developed a patented CO₂ Capture & Repurpose process designed to capture carbon dioxide and convert it into commercially useful products.',
      supportingLine:
        'Identified products include sodium carbonate, sodium bicarbonate and hydrochloric acid, with calcium carbonate also identified as a secondary material pathway.',
      cta: 'EXPLORE CO₂ TECHNOLOGY →',
      route: '/technologies/co2-capture',
      image: PRDD_IMAGES.co2Capture,
      imageAlt: 'CST CO₂ Capture and repurposing industrial facility',
      icon: Factory,
      prefillTopic: 'CO₂ Capture & Repurposing'
    },
    {
      number: '02',
      category: 'NOx & SOx ABATEMENT',
      title: 'Treat Industrial Emissions. Recover Useful Products.',
      description:
        'CST has developed multiple environmental process approaches addressing NOx, SOx and related industrial air pollutants.',
      supportingLine:
        'Selected approaches are designed to treat pollutants and, where applicable, convert captured compounds into useful chemical products.',
      cta: 'EXPLORE EMISSIONS TECHNOLOGY →',
      route: '/technologies/nox-sox',
      image: PRDD_IMAGES.noxSox,
      imageAlt: 'CST NOx and SOx emissions abatement and gas treatment infrastructure',
      icon: Wind,
      prefillTopic: 'NOx & SOx Abatement'
    },
    {
      number: '03',
      category: 'ADVANCED WATER TREATMENT',
      title: 'Rethinking Water Treatment & Recovery.',
      description:
        "CST's documented water-treatment work includes approaches to seawater treatment for potable water and energy-efficient water reclamation.",
      supportingLine:
        'Documented process-development work includes forward osmosis combined with chemical forced precipitation for water reclamation.',
      cta: 'EXPLORE WATER TECHNOLOGY →',
      route: '/technologies/water-treatment',
      image: PRDD_IMAGES.waterTreatment,
      imageAlt: 'Industrial water treatment and reclamation infrastructure',
      icon: Droplets,
      prefillTopic: 'Advanced Water Treatment'
    },
    {
      number: '04',
      category: 'ADVANCED MATERIALS',
      title: 'From Process Chemistry to Material Applications.',
      description:
        "CST's materials-development work includes concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete.",
      supportingLine:
        "The portfolio includes documented connections between CST's CO₂ capture work and materials-development approaches.",
      cta: 'EXPLORE MATERIALS TECHNOLOGY →',
      route: '/technologies/advanced-materials',
      image: PRDD_IMAGES.advancedMaterials,
      imageAlt: 'Advanced materials development and mineral synthesis',
      icon: Boxes,
      prefillTopic: 'Advanced Materials'
    }
  ];

  return (
    <div className="bg-[#F7F7F3] text-[#20262B] selection:bg-[#2F6F9F]/30 selection:text-[#071B2D]">
      {/* ==================================================
          SECTION 2: HERO — EDITORIAL PORTFOLIO OPENING
      ================================================== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[540px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 shadow-2xl border border-[#2F6F9F]/20">
          {/* Photographic Background with Deep Navy Industrial Gradient Scrim */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src={PRDD_IMAGES.hero}
              alt="Industrial environmental process engineering facility"
              priority
              className="w-full h-full object-cover object-center filter saturate-75 contrast-110 brightness-55"
            />
            {/* Multi-layered cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/75 to-[#071B2D]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/90 via-[#071B2D]/60 to-transparent" />
            <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />
          </div>

          {/* Hero Top Bar: Breadcrumbs & Eyebrow */}
          <div className="relative z-10">
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} className="text-white/80" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123A63]/80 border border-[#2F6F9F]/60 rounded-full text-xs font-mono tracking-widest text-[#DCE8EF] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>CST TECHNOLOGIES</span>
            </div>
          </div>

          {/* Hero Middle & Bottom Content */}
          <div className="relative z-10 pt-12 sm:pt-16">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Environmental Problems.<br />
                <span className="text-[#89B3D3] font-light">Engineered Into Opportunities.</span>
              </h1>
            </div>

            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  CST develops environmental processes designed to address difficult industrial challenges and, where possible, convert waste streams and pollutants into useful products or materials.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={handleScrollToTechnologies}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
                >
                  <span>EXPLORE TECHNOLOGIES</span>
                  <ArrowDown className="w-4 h-4 text-[#89B3D3]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Technology Inquiries')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-black/40 backdrop-blur-md border border-white/20 hover:border-white text-slate-200 hover:text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  <span>DISCUSS YOUR APPLICATION</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3: INTRODUCTION
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>ENVIRONMENTAL PROCESS DEVELOPMENT</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
            Technology Built Around<br />
            <span className="text-[#2F6F9F] font-light">the Problem.</span>
          </h2>

          <div className="text-base sm:text-xl text-[#20262B] leading-relaxed space-y-4 font-normal pt-2 max-w-3xl mx-auto">
            <p>
              Clean Scrub Technologies develops and commercializes environmental solutions for applications where conventional approaches may not provide the desired path forward.
            </p>
            <p className="text-slate-600">
              CST's work combines chemistry, process development, engineering and practical implementation, with an emphasis on creating useful outcomes from environmental challenges.
            </p>
          </div>

          {/* Supporting statement: FROM POLLUTANT TO PROCESS TO USEFUL OUTCOME */}
          <div className="pt-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 p-4 sm:p-5 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm font-mono text-xs sm:text-sm font-bold tracking-wider text-[#123A63]">
              <span>FROM POLLUTANT</span>
              <span className="text-[#2F6F9F]">→</span>
              <span>TO PROCESS</span>
              <span className="text-[#2F6F9F]">→</span>
              <span className="text-[#6D9F45]">TO USEFUL OUTCOME</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4: FOUR PRIMARY TECHNOLOGY AREAS
          Alternating editorial sequence (01 image left, 02 image right, 03 image left, 04 image right)
      ================================================== */}
      <section id="portfolio-section" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>TECHNOLOGY PORTFOLIO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Four Primary Areas<br />
            <span className="text-[#2F6F9F] font-light">of Development.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            CST develops environmental processes across four primary areas of focus, targeting complex industrial emissions, water recovery, and advanced materials.
          </p>
        </div>

        {/* Alternating Substantial Editorial Entries */}
        <div className="space-y-12 sm:space-y-16">
          {technologies.map((tech, idx) => {
            const isEven = idx % 2 === 1; // 0: img left, 1: img right, 2: img left, 3: img right
            const TechIcon = tech.icon;

            return (
              <div
                key={tech.number}
                className="bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm hover:border-[#2F6F9F] transition-all relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      onClick={() => onNavigate(tech.route)}
                      className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] shadow-md relative group/media cursor-pointer aspect-[16/10] w-full"
                    >
                      <PrddImage
                        src={tech.image}
                        alt={tech.imageAlt}
                        className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover/media:scale-103 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/75 via-transparent to-transparent pointer-events-none" />

                      {/* Top floating badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#071B2D]/90 border border-white/20 rounded-full text-[11px] font-mono font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                          <TechIcon className="w-3.5 h-3.5 text-[#89B3D3]" />
                          <span>AREA {tech.number}</span>
                        </div>
                      </div>

                      {/* Bottom caption overlay */}
                      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#071B2D] to-transparent text-xs font-mono text-slate-300 flex items-center justify-between">
                        <span>{tech.category}</span>
                        <span className="text-[#89B3D3] group-hover/media:text-white flex items-center gap-1 transition-colors">
                          View Technology <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Copy Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-3xl sm:text-4xl font-bold text-[#2F6F9F]/50 group-hover:text-[#2F6F9F] transition-colors">
                          {tech.number}
                        </span>
                        <div className="h-4 w-px bg-[#DCE8EF]" />
                        <span className="text-xs font-mono font-bold tracking-widest text-[#123A63] uppercase">
                          {tech.category}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123A63] tracking-tight">
                        {tech.title}
                      </h3>
                    </div>

                    <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                      {tech.description}
                    </p>

                    <div className="p-4 bg-[#F7F7F3] border-l-2 border-[#2F6F9F] rounded-r-xl text-xs sm:text-sm font-mono text-slate-700 leading-relaxed">
                      {tech.supportingLine}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => onNavigate(tech.route)}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-black/10 cursor-pointer"
                      >
                        <span>{tech.cta}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigate('/contact', tech.prefillTopic)}
                        className="text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-[#123A63] transition-colors py-2 px-3 cursor-pointer"
                      >
                        Discuss Application →
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          SECTION 5: PORTFOLIO CONNECTIONS
          Conceptual portfolio visualization
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

          <div className="relative">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>CONNECTED DEVELOPMENT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Not Every Environmental<br />
                <span className="text-[#89B3D3] font-light">Challenge Exists in Isolation.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                CST's technology areas can intersect where an application involves multiple pollutants, useful process byproducts or opportunities for material development.
              </p>
            </div>

            {/* Conceptual Portfolio Visualization */}
            <div className="max-w-4xl mx-auto my-10 space-y-6">
              {/* Top Source Box */}
              <div className="bg-[#0b243d] border border-[#2F6F9F]/50 p-5 rounded-2xl text-center shadow-lg max-w-xl mx-auto">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1">
                  STARTING POINT
                </div>
                <div className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                  INDUSTRIAL &amp; ENVIRONMENTAL CHALLENGE
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-[#2F6F9F]" />
                <ArrowDown className="w-4 h-4 text-[#2F6F9F]" />
              </div>

              {/* Central Process Development Hub */}
              <div className="bg-[#103252] border-2 border-[#2F6F9F] p-6 rounded-2xl text-center shadow-xl max-w-xl mx-auto">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  <span>CORE METHODOLOGY</span>
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                  CST PROCESS DEVELOPMENT
                </div>
              </div>

              {/* Arrow Down splitting to three directions */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-[#2F6F9F]" />
                <ArrowDown className="w-4 h-4 text-[#89B3D3]" />
              </div>

              {/* Three Conceptual Directions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Direction 1: Emissions */}
                <div className="bg-[#0c263f] border border-[#2F6F9F]/50 p-6 rounded-2xl text-center shadow-md">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
                    FOCUS DIRECTION
                  </div>
                  <div className="font-display text-lg font-bold text-white mb-1">
                    EMISSIONS
                  </div>
                  <div className="font-mono text-xs text-[#DCE8EF] bg-[#071B2D] p-2 rounded-lg border border-[#2F6F9F]/30 mt-3">
                    CO₂ / NOx / SOx
                  </div>
                </div>

                {/* Direction 2: Water */}
                <div className="bg-[#0c263f] border border-[#2F6F9F]/50 p-6 rounded-2xl text-center shadow-md">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
                    FOCUS DIRECTION
                  </div>
                  <div className="font-display text-lg font-bold text-white mb-1">
                    WATER
                  </div>
                  <div className="font-mono text-xs text-[#DCE8EF] bg-[#071B2D] p-2 rounded-lg border border-[#2F6F9F]/30 mt-3">
                    TREATMENT / RECLAMATION
                  </div>
                </div>

                {/* Direction 3: Materials */}
                <div className="bg-[#0c263f] border border-[#2F6F9F]/50 p-6 rounded-2xl text-center shadow-md">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
                    FOCUS DIRECTION
                  </div>
                  <div className="font-display text-lg font-bold text-white mb-1">
                    MATERIALS
                  </div>
                  <div className="font-mono text-xs text-[#DCE8EF] bg-[#071B2D] p-2 rounded-lg border border-[#2F6F9F]/30 mt-3">
                    USEFUL PRODUCT APPLICATIONS
                  </div>
                </div>
              </div>

              {/* Documented Connection Pathway: CO2 Capture -> Useful Products -> Material Development */}
              <div className="mt-8 pt-8 border-t border-[#2F6F9F]/30">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#89B3D3] mb-4 text-center">
                  DOCUMENTED PORTFOLIO INTERSECTION
                </div>
                <div className="bg-[#081e33] border border-[#6D9F45]/50 p-5 rounded-2xl max-w-2xl mx-auto shadow-inner">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-mono text-center">
                    <div className="px-4 py-2.5 bg-[#0c263f] border border-[#2F6F9F]/60 rounded-xl text-white font-semibold w-full sm:w-auto">
                      CO₂ CAPTURE
                    </div>
                    <div className="text-[#6D9F45] font-bold rotate-90 sm:rotate-0">
                      →
                    </div>
                    <div className="px-4 py-2.5 bg-[#123A63] border border-[#2F6F9F] rounded-xl text-white font-semibold w-full sm:w-auto">
                      USEFUL PRODUCTS
                    </div>
                    <div className="text-[#6D9F45] font-bold rotate-90 sm:rotate-0">
                      →
                    </div>
                    <div className="px-4 py-2.5 bg-[#0c263f] border border-[#6D9F45]/60 rounded-xl text-white font-semibold w-full sm:w-auto">
                      MATERIAL DEVELOPMENT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Note */}
            <div className="mt-8 pt-6 border-t border-[#2F6F9F]/30 text-center text-xs font-mono text-slate-400 max-w-3xl mx-auto">
              Technology relationships depend on the specific application. This diagram represents CST's broader development portfolio and does not imply that every technology is combined in every project.
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6: HOW CST DEVELOPS TECHNOLOGY (THE CST APPROACH)
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>THE CST APPROACH</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123A63]">
              From Environmental Challenge<br />
              <span className="text-[#2F6F9F] font-light">to Practical Implementation.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              CST's work combines scientific process development with practical engineering and implementation experience.
            </p>
          </div>

          {/* Clean 4-Stage Numerical Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#DCE8EF] pt-6">
            <div className="pt-4 sm:pt-0 sm:pr-6">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-2">
                01
              </span>
              <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                IDENTIFY
              </h3>
              <p className="text-sm text-[#20262B] leading-relaxed">
                Understand the environmental problem, process stream and application requirements.
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-2">
                02
              </span>
              <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                DEVELOP
              </h3>
              <p className="text-sm text-[#20262B] leading-relaxed">
                Develop and evaluate an appropriate chemical or process approach.
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-2">
                03
              </span>
              <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                ENGINEER
              </h3>
              <p className="text-sm text-[#20262B] leading-relaxed">
                Translate the developed process toward practical implementation.
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-6">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#6D9F45] block mb-2">
                04
              </span>
              <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                COMMERCIALIZE
              </h3>
              <p className="text-sm text-[#20262B] leading-relaxed">
                Support implementation, licensing or commercialization where appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7: RESOURCE RECOVERY PHILOSOPHY
          Visually strong editorial section
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>BEYOND WASTE TREATMENT</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
              Where Others See a Waste Stream,<br />
              <span className="text-[#2F6F9F] font-light">CST Looks for a Useful Outcome.</span>
            </h2>

            <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
              <p>
                A recurring theme in CST's technology development is the potential to move beyond pollutant removal and toward useful products, materials or other practical outcomes.
              </p>
              <p className="text-slate-600">
                This philosophy is particularly visible in CST's CO₂ capture and emissions-treatment work.
              </p>
            </div>

            {/* Restrained Keywords Row */}
            <div className="pt-6">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
                CORE TECHNICAL PHILOSOPHY
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-sm sm:text-base font-bold text-[#123A63]">
                <span className="px-3.5 py-1.5 bg-[#F7F7F3] border border-[#DCE8EF] rounded-lg">CAPTURE</span>
                <span className="text-[#2F6F9F]">·</span>
                <span className="px-3.5 py-1.5 bg-[#F7F7F3] border border-[#DCE8EF] rounded-lg">TREAT</span>
                <span className="text-[#2F6F9F]">·</span>
                <span className="px-3.5 py-1.5 bg-[#F7F7F3] border border-[#DCE8EF] rounded-lg">CONVERT</span>
                <span className="text-[#2F6F9F]">·</span>
                <span className="px-3.5 py-1.5 bg-[#F7F7F3] border border-[#DCE8EF] rounded-lg">RECOVER</span>
                <span className="text-[#2F6F9F]">·</span>
                <span className="px-3.5 py-1.5 bg-[#123A63] text-white rounded-lg">REPURPOSE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8: SCIENCE + PRACTICAL IMPLEMENTATION — DR. RICHARDSON
      ================================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="p-8 sm:p-12 lg:p-14 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>CHEMISTRY MEETS IMPLEMENTATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                Developed With Both<br />
                <span className="text-[#2F6F9F] font-light">Science and the Field in Mind.</span>
              </h2>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  CST President Dr. Robert Richardson combines a background as a Ph.D. chemist with experience as a Licensed General Contractor.
                </p>
                <p className="text-slate-600">
                  His work spans environmental process development, multidisciplinary research, industrial testing and practical project implementation.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/about/robert-richardson')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  <span>MEET DR. ROBERT RICHARDSON</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#DCE8EF] shadow-md bg-[#071B2D] aspect-[4/5] max-w-sm mx-auto">
                <PrddImage
                  src={PRDD_IMAGES.founder}
                  alt="Dr. Robert Richardson - President of CST"
                  className="w-full h-full object-cover object-top filter saturate-90 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="font-display text-lg font-bold">Dr. Robert Richardson</div>
                  <div className="text-xs font-mono text-[#89B3D3]">President, Ph.D. Chemist &amp; General Contractor</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 9: SELECTED EXPERIENCE
          Restrained editorial selection
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>PROJECT EXPERIENCE</span>
            </div>
            <div className="px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-md text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">
              SELECTED HISTORICAL PROJECT EXPERIENCE
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123A63]">
              Technology Development Grounded in Real-World Projects.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              CST's broader project experience includes environmental process, emissions-control, testing and engineering work associated with industrial and municipal organizations.
            </p>
          </div>

          {/* Restrained Editorial Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {/* Intel */}
            <div className="p-6 sm:p-7 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                  HISTORICAL PROJECT
                </div>
                <h3 className="font-display text-xl font-bold text-[#123A63] mb-3">
                  INTEL
                </h3>
                <p className="text-sm text-[#20262B] leading-relaxed">
                  NOx and amine abatement work associated with facilities in Arizona and Oregon.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-slate-500">
                INDUSTRIAL EMISSIONS
              </div>
            </div>

            {/* Sea Launch / Boeing */}
            <div className="p-6 sm:p-7 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                  HISTORICAL PROJECT
                </div>
                <h3 className="font-display text-xl font-bold text-[#123A63] mb-3">
                  SEA LAUNCH / BOEING
                </h3>
                <p className="text-sm text-[#20262B] leading-relaxed">
                  Treatment of toxic and explosive gases associated with a moving platform environment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-slate-500">
                SPECIALIZED GAS TREATMENT
              </div>
            </div>

            {/* Hampton Roads Sanitation */}
            <div className="p-6 sm:p-7 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                  HISTORICAL PROJECT
                </div>
                <h3 className="font-display text-xl font-bold text-[#123A63] mb-3">
                  HAMPTON ROADS SANITATION
                </h3>
                <p className="text-sm text-[#20262B] leading-relaxed">
                  Multiphase odor-control and related control-system, startup and testing work in Williamsburg, Virginia.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-slate-500">
                MUNICIPAL / ODOR CONTROL
              </div>
            </div>

            {/* Orange County Sanitation District */}
            <div className="p-6 sm:p-7 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                  HISTORICAL PROJECT
                </div>
                <h3 className="font-display text-xl font-bold text-[#123A63] mb-3">
                  ORANGE COUNTY SANITATION DISTRICT
                </h3>
                <p className="text-sm text-[#20262B] leading-relaxed">
                  Mobile laboratory work supporting environmental testing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-slate-500">
                MOBILE TESTING LABORATORY
              </div>
            </div>

            {/* City of Oceanside */}
            <div className="p-6 sm:p-7 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                  HISTORICAL PROJECT
                </div>
                <h3 className="font-display text-xl font-bold text-[#123A63] mb-3">
                  CITY OF OCEANSIDE
                </h3>
                <p className="text-sm text-[#20262B] leading-relaxed">
                  Odor-control, laboratory ventilation and testing/maintenance work.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-slate-500">
                VENTILATION &amp; ODOR CONTROL
              </div>
            </div>

            {/* Rock Canyon Oil */}
            <div className="p-6 sm:p-7 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                  HISTORICAL PROJECT
                </div>
                <h3 className="font-display text-xl font-bold text-[#123A63] mb-3">
                  ROCK CANYON OIL
                </h3>
                <p className="text-sm text-[#20262B] leading-relaxed">
                  CO₂ capture work associated with secondary oil recovery, with tertiary oil recovery and carbon-credit considerations documented in CST's project history.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-slate-500">
                CARBON RECOVERY &amp; UTILIZATION
              </div>
            </div>
          </div>

          <div className="pt-4">
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
      </section>

      {/* ==================================================
          SECTION 10: CHOOSE A TECHNOLOGY PATH
          Compact, clean navigational section before final CTA
      ================================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="bg-[#071B2D] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#2F6F9F]/30 shadow-xl">
          <div className="max-w-2xl mb-8">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
              NAVIGATION PORTAL
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Explore the Technology Relevant to Your Challenge.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Route 1 */}
            <div
              onClick={() => onNavigate('/technologies/co2-capture')}
              className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl hover:border-white transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                  CARBON DIOXIDE
                </div>
                <div className="font-display text-base font-bold text-white group-hover:text-[#89B3D3] transition-colors">
                  CO₂ Capture &amp; Repurposing
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-slate-300 group-hover:text-white pt-2 border-t border-white/10">
                <span>Explore Detail</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
              </div>
            </div>

            {/* Route 2 */}
            <div
              onClick={() => onNavigate('/technologies/nox-sox')}
              className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl hover:border-white transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                  AIR EMISSIONS
                </div>
                <div className="font-display text-base font-bold text-white group-hover:text-[#89B3D3] transition-colors">
                  NOx &amp; SOx Abatement
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-slate-300 group-hover:text-white pt-2 border-t border-white/10">
                <span>Explore Detail</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
              </div>
            </div>

            {/* Route 3 */}
            <div
              onClick={() => onNavigate('/technologies/water-treatment')}
              className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl hover:border-white transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                  WATER
                </div>
                <div className="font-display text-base font-bold text-white group-hover:text-[#89B3D3] transition-colors">
                  Advanced Water Treatment
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-slate-300 group-hover:text-white pt-2 border-t border-white/10">
                <span>Explore Detail</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
              </div>
            </div>

            {/* Route 4 */}
            <div
              onClick={() => onNavigate('/technologies/advanced-materials')}
              className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl hover:border-white transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                  MATERIALS
                </div>
                <div className="font-display text-base font-bold text-white group-hover:text-[#89B3D3] transition-colors">
                  Advanced Materials
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-slate-300 group-hover:text-white pt-2 border-t border-white/10">
                <span>Explore Detail</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 11: FINAL CTA
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0">
            <PrddImage
              src={PRDD_IMAGES.finalCta}
              alt="Industrial emissions and environmental process engineering"
              className="w-full h-full object-cover object-center filter saturate-50 brightness-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
            <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>START WITH THE CHALLENGE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Have an Environmental<br />
              <span className="text-[#89B3D3] font-light">Process Problem to Solve?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Talk with CST about your industrial emissions, water-treatment, materials-development or environmental process challenge.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'Technology Inquiries')}
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
