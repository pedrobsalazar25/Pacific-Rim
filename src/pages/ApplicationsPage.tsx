import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Factory,
  Wind,
  Droplets,
  Boxes,
  Sparkles,
  Layers,
  Building2,
  Atom,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Plane,
  Flame,
  Milestone
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface ApplicationsPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Environmental Applications | CST';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore CST application areas spanning industrial emissions, water and wastewater, concrete and materials, and resource recovery.'
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  const handleScrollToApplications = () => {
    const el = document.getElementById('applications-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Applications' }
  ];

  const applicationAreas = [
    {
      number: '01',
      category: 'INDUSTRIAL EMISSIONS',
      headline: 'Addressing Complex Industrial Air Emissions.',
      description:
        "CST's emissions-related work includes process development addressing carbon dioxide, nitrogen oxides, sulfur oxides and other challenging industrial air-quality problems.",
      route: '/applications/industrial-emissions',
      cta: 'EXPLORE INDUSTRIAL EMISSIONS →',
      image: '/images/prdd/applications/prdd-application-emissions.jpg',
      imageAlt: 'Industrial flue gas and air emissions treatment facility',
      icon: Wind,
      relevantTechs: [
        { label: 'CO₂ Capture & Repurposing', route: '/technologies/co2-capture' },
        { label: 'NOx & SOx Abatement', route: '/technologies/nox-sox' }
      ],
      prefillTopic: 'Industrial Emissions'
    },
    {
      number: '02',
      category: 'WATER & WASTEWATER',
      headline: 'Developing Processes Around Water Challenges.',
      description:
        "CST's documented work includes water-treatment process development as well as broader environmental engineering experience in municipal water, wastewater and sanitation environments.",
      route: '/applications/water-wastewater',
      cta: 'EXPLORE WATER & WASTEWATER →',
      image: '/images/prdd/applications/prdd-application-water.jpg',
      imageAlt: 'Municipal and industrial water treatment and reclamation facility',
      icon: Droplets,
      relevantTechs: [
        { label: 'Advanced Water Treatment', route: '/technologies/water-treatment' }
      ],
      prefillTopic: 'Water & Wastewater'
    },
    {
      number: '03',
      category: 'CONCRETE & MATERIALS',
      headline: 'Connecting Process Chemistry With Material Applications.',
      description:
        "CST's materials-development work includes approaches involving concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete.",
      route: '/applications/concrete-materials',
      cta: 'EXPLORE CONCRETE & MATERIALS →',
      image: '/images/prdd/applications/prdd-application-materials.jpg',
      imageAlt: 'Engineered concrete, geopolymers and advanced material surfaces',
      icon: Boxes,
      relevantTechs: [
        { label: 'Advanced Materials', route: '/technologies/advanced-materials' },
        { label: 'CO₂ Capture & Repurposing', route: '/technologies/co2-capture' }
      ],
      prefillTopic: 'Concrete & Materials'
    },
    {
      number: '04',
      category: 'RESOURCE RECOVERY',
      headline: 'Looking Beyond Waste Treatment.',
      description:
        "A recurring theme in CST's environmental process development is the potential to convert pollutants or process streams into useful products or materials where technically appropriate.",
      route: '/applications/resource-recovery',
      cta: 'EXPLORE RESOURCE RECOVERY →',
      image: '/images/prdd/applications/prdd-application-recovery.jpg',
      imageAlt: 'Industrial byproduct stream repurposing and resource recovery',
      icon: Factory,
      relevantTechs: [
        { label: 'CO₂ Capture & Repurposing', route: '/technologies/co2-capture' },
        { label: 'NOx & SOx Abatement', route: '/technologies/nox-sox' },
        { label: 'Advanced Materials', route: '/technologies/advanced-materials' }
      ],
      relevantTechNote: 'Relevant CST technology areas may include:',
      prefillTopic: 'Resource Recovery'
    }
  ];

  return (
    <div className="bg-[#F7F7F3] text-[#20262B] selection:bg-[#2F6F9F]/30 selection:text-[#071B2D]">
      {/* ==================================================
          SECTION 2: HERO — EDITORIAL APPLICATIONS OPENING
      ================================================== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[540px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 shadow-2xl border border-[#2F6F9F]/20">
          {/* Photographic Background with Deep Navy Industrial Scrim */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src={PRDD_IMAGES.approachLab}
              alt="Industrial environmental operating environment and application engineering"
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
              <span>CST APPLICATIONS</span>
            </div>
          </div>

          {/* Hero Middle & Bottom Content */}
          <div className="relative z-10 pt-12 sm:pt-16">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Start With<br />
                <span className="text-[#89B3D3] font-light">the Challenge.</span>
              </h1>
            </div>

            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  CST applies chemistry, process development and practical engineering to environmental challenges involving industrial emissions, water, materials and resource recovery.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={handleScrollToApplications}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
                >
                  <span>EXPLORE APPLICATIONS</span>
                  <ArrowDown className="w-4 h-4 text-[#89B3D3]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Application Discussion')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-black/40 backdrop-blur-md border border-white/20 hover:border-white text-slate-200 hover:text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
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
          SECTION 3: INTRODUCTION
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>APPLICATION-DRIVEN DEVELOPMENT</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
            The Process Begins<br />
            <span className="text-[#2F6F9F] font-light">With the Problem.</span>
          </h2>

          <div className="text-base sm:text-xl text-[#20262B] leading-relaxed space-y-4 font-normal pt-2 max-w-3xl mx-auto">
            <p>
              CST's approach to environmental process development begins by understanding the specific pollutant stream, water challenge, material opportunity or operating environment.
            </p>
            <p className="text-slate-600">
              From there, CST evaluates how its technology development and engineering experience may apply to the challenge.
            </p>
          </div>

          {/* Highlight: CHALLENGE -> PROCESS DEVELOPMENT -> PRACTICAL APPROACH */}
          <div className="pt-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 p-4 sm:p-5 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm font-mono text-xs sm:text-sm font-bold tracking-wider text-[#123A63]">
              <span>CHALLENGE</span>
              <span className="text-[#2F6F9F]">→</span>
              <span>PROCESS DEVELOPMENT</span>
              <span className="text-[#2F6F9F]">→</span>
              <span className="text-[#6D9F45]">PRACTICAL APPROACH</span>
            </div>
          </div>

          {/* Supporting note */}
          <div className="pt-2 text-xs font-mono text-slate-500 max-w-xl mx-auto">
            The appropriate technology and implementation path depend on the specific application.
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4: FOUR APPLICATION AREAS
          Substantial editorial application presentations with distinct 2x2 architecture
      ================================================== */}
      <section id="applications-grid" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>APPLICATION AREAS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Environmental Challenges<br />
            <span className="text-[#2F6F9F] font-light">Across Four Areas.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Explore potential application pathways organized around the specific industrial or environmental problem to be addressed.
          </p>
        </div>

        {/* 2x2 Substantial Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {applicationAreas.map((app) => {
            const AppIcon = app.icon;

            return (
              <div
                key={app.number}
                className="bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:border-[#2F6F9F] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Number, Category & Icon */}
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#DCE8EF]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-[#2F6F9F]">
                        {app.number}
                      </span>
                      <div className="h-4 w-px bg-[#DCE8EF]" />
                      <span className="text-xs font-mono font-bold tracking-widest text-[#123A63] uppercase">
                        {app.category}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F7F7F3] border border-[#DCE8EF] flex items-center justify-center text-[#123A63]">
                      <AppIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Visual Header */}
                  <div
                    onClick={() => onNavigate(app.route)}
                    className="rounded-xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] aspect-[16/9] w-full mb-6 cursor-pointer relative group/img shadow-sm"
                  >
                    <PrddImage
                      src={app.image}
                      alt={app.imageAlt}
                      className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover/img:scale-103 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 right-3 z-10">
                      <span className="px-3 py-1 bg-[#071B2D]/90 border border-white/20 rounded-full text-[11px] font-mono text-white flex items-center gap-1.5 backdrop-blur-sm">
                        <span>Explore Area</span>
                        <ArrowRight className="w-3 h-3 text-[#6D9F45]" />
                      </span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63] mb-4 tracking-tight leading-snug">
                    {app.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-[#20262B] leading-relaxed mb-6 font-normal">
                    {app.description}
                  </p>

                  {/* Relevant CST Technology Section */}
                  <div className="p-4 bg-[#F7F7F3] border border-[#DCE8EF] rounded-xl mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2.5">
                      {app.relevantTechNote || 'Relevant CST technology areas:'}
                    </div>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                      {app.relevantTechs.map((tech, tIdx) => (
                        <button
                          key={tIdx}
                          type="button"
                          onClick={() => onNavigate(tech.route)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-lg text-xs font-mono font-semibold text-[#123A63] hover:text-[#2F6F9F] transition-colors cursor-pointer text-left"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                          <span>{tech.label}</span>
                          <ArrowRight className="w-3 h-3 ml-0.5 opacity-60" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-[#DCE8EF] flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate(app.route)}
                    className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
                  >
                    <span>{app.cta}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('/contact', app.prefillTopic)}
                    className="text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-[#123A63] transition-colors py-2 px-2 cursor-pointer"
                  >
                    Discuss Challenge →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          SECTION 5: CHALLENGE-TO-TECHNOLOGY MAP
          Conceptual navigation visualization
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

          <div className="relative">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>FIND THE RELEVANT PATH</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                From Application<br />
                <span className="text-[#89B3D3] font-light">to Technology.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Connect your environmental or operating challenge to the relevant CST technology areas.
              </p>
            </div>

            {/* Conceptual Challenge-to-Technology Map Grid */}
            <div className="space-y-4 max-w-4xl mx-auto my-8">
              {/* Row 1: Industrial Emissions */}
              <div className="bg-[#0b243d] border border-[#2F6F9F]/40 rounded-xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                    APPLICATION CHALLENGE
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold text-white">
                    INDUSTRIAL EMISSIONS
                  </div>
                </div>

                <div className="md:col-span-2 flex justify-start md:justify-center">
                  <ArrowRight className="w-5 h-5 text-[#2F6F9F] hidden md:block" />
                  <ArrowDown className="w-4 h-4 text-[#2F6F9F] md:hidden" />
                </div>

                <div className="md:col-span-5 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    RELEVANT TECHNOLOGY DIRECTION
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-white flex flex-col gap-1">
                    <span
                      onClick={() => onNavigate('/technologies/co2-capture')}
                      className="text-[#DCE8EF] hover:text-white cursor-pointer underline decoration-[#2F6F9F] underline-offset-4"
                    >
                      CO₂ CAPTURE &amp; REPURPOSING
                    </span>
                    <span className="text-slate-400 text-xs font-sans italic">and/or</span>
                    <span
                      onClick={() => onNavigate('/technologies/nox-sox')}
                      className="text-[#DCE8EF] hover:text-white cursor-pointer underline decoration-[#2F6F9F] underline-offset-4"
                    >
                      NOx &amp; SOx ABATEMENT
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2: Water & Wastewater */}
              <div className="bg-[#0b243d] border border-[#2F6F9F]/40 rounded-xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                    APPLICATION CHALLENGE
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold text-white">
                    WATER &amp; WASTEWATER
                  </div>
                </div>

                <div className="md:col-span-2 flex justify-start md:justify-center">
                  <ArrowRight className="w-5 h-5 text-[#2F6F9F] hidden md:block" />
                  <ArrowDown className="w-4 h-4 text-[#2F6F9F] md:hidden" />
                </div>

                <div className="md:col-span-5 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    RELEVANT TECHNOLOGY DIRECTION
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-white">
                    <span
                      onClick={() => onNavigate('/technologies/water-treatment')}
                      className="text-[#DCE8EF] hover:text-white cursor-pointer underline decoration-[#2F6F9F] underline-offset-4"
                    >
                      ADVANCED WATER TREATMENT
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3: Concrete & Materials */}
              <div className="bg-[#0b243d] border border-[#2F6F9F]/40 rounded-xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                    APPLICATION CHALLENGE
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold text-white">
                    CONCRETE &amp; MATERIALS
                  </div>
                </div>

                <div className="md:col-span-2 flex justify-start md:justify-center">
                  <ArrowRight className="w-5 h-5 text-[#2F6F9F] hidden md:block" />
                  <ArrowDown className="w-4 h-4 text-[#2F6F9F] md:hidden" />
                </div>

                <div className="md:col-span-5 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    RELEVANT TECHNOLOGY DIRECTION
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-white flex flex-col gap-1">
                    <span
                      onClick={() => onNavigate('/technologies/advanced-materials')}
                      className="text-[#DCE8EF] hover:text-white cursor-pointer underline decoration-[#2F6F9F] underline-offset-4"
                    >
                      ADVANCED MATERIALS
                    </span>
                    <span className="text-slate-400 text-xs font-sans italic">and potentially</span>
                    <span
                      onClick={() => onNavigate('/technologies/co2-capture')}
                      className="text-[#DCE8EF] hover:text-white cursor-pointer underline decoration-[#2F6F9F] underline-offset-4"
                    >
                      CO₂ CAPTURE &amp; REPURPOSING
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 4: Resource Recovery */}
              <div className="bg-[#0b243d] border border-[#2F6F9F]/40 rounded-xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                    APPLICATION CHALLENGE
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold text-white">
                    RESOURCE RECOVERY
                  </div>
                </div>

                <div className="md:col-span-2 flex justify-start md:justify-center">
                  <ArrowRight className="w-5 h-5 text-[#2F6F9F] hidden md:block" />
                  <ArrowDown className="w-4 h-4 text-[#2F6F9F] md:hidden" />
                </div>

                <div className="md:col-span-5 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    RELEVANT TECHNOLOGY DIRECTION
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-white">
                    <span>APPLICATION-SPECIFIC CST PROCESS DEVELOPMENT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note requirement */}
            <div className="mt-8 pt-6 border-t border-[#2F6F9F]/30 text-center text-xs font-mono text-slate-400 max-w-2xl mx-auto">
              Technology relevance depends on the characteristics and requirements of the specific application.
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6: INDUSTRIAL & MUNICIPAL EXPERIENCE
          Understated editorial experience strip
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>REAL-WORLD ENVIRONMENTS</span>
            </div>
            <div className="px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-md text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">
              SELECTED HISTORICAL PROJECT EXPERIENCE
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123A63]">
              Experience Beyond the Laboratory.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              CST's environmental work has included process development, testing, emissions control and engineering activities in industrial and municipal operating environments.
            </p>
          </div>

          {/* Understated Editorial Experience Strip (4 Sectors) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {/* Sector 1: Semiconductor Manufacturing */}
            <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-2 font-semibold">
                  OPERATING ENVIRONMENT
                </div>
                <h3 className="font-display text-lg font-bold text-[#123A63] mb-3">
                  SEMICONDUCTOR MANUFACTURING
                </h3>
                <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                  Historical CST work includes NOx and amine abatement associated with Intel facilities in Arizona and Oregon.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-slate-500">
                NOx &amp; AMINE ABATEMENT
              </div>
            </div>

            {/* Sector 2: Aerospace / Maritime */}
            <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-2 font-semibold">
                  OPERATING ENVIRONMENT
                </div>
                <h3 className="font-display text-lg font-bold text-[#123A63] mb-3">
                  AEROSPACE / MARITIME OPERATIONS
                </h3>
                <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                  Historical CST work for Sea Launch / Boeing included treatment of toxic and explosive gases associated with a moving platform environment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-slate-500">
                TOXIC &amp; EXPLOSIVE GASES
              </div>
            </div>

            {/* Sector 3: Municipal Sanitation */}
            <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-2 font-semibold">
                  OPERATING ENVIRONMENT
                </div>
                <h3 className="font-display text-lg font-bold text-[#123A63] mb-3">
                  MUNICIPAL SANITATION
                </h3>
                <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                  CST project experience includes work associated with Hampton Roads Sanitation, Orange County Sanitation District, City of Oceanside and Metro Biosolids Facility in San Diego.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-slate-500">
                WASTEWATER &amp; ODOR SYSTEMS
              </div>
            </div>

            {/* Sector 4: Oil Recovery */}
            <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm hover:border-[#2F6F9F] transition-colors flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-2 font-semibold">
                  OPERATING ENVIRONMENT
                </div>
                <h3 className="font-display text-lg font-bold text-[#123A63] mb-3">
                  OIL RECOVERY
                </h3>
                <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                  CST project history includes CO₂ capture work associated with secondary oil recovery at Rock Canyon Oil, with tertiary oil recovery and carbon-credit considerations documented in the project history.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCE8EF] text-xs font-mono text-slate-500">
                CO₂ RECOVERY
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
          SECTION 7: HOW CST APPROACHES AN APPLICATION (4 STAGES)
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>APPLICATION DEVELOPMENT</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123A63]">
              Understand the Stream.<br />
              <span className="text-[#2F6F9F] font-light">Develop the Approach.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              CST evaluates each challenge from the ground up, starting with stream characterization and operating parameters.
            </p>
          </div>

          {/* Clean 4-Stage Numerical Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#DCE8EF] pt-6">
            <div className="pt-4 sm:pt-0 sm:pr-6">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-2">
                01
              </span>
              <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                CHARACTERIZE
              </h3>
              <p className="text-sm text-[#20262B] leading-relaxed">
                Understand the environmental challenge, process stream and operating requirements.
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-2">
                02
              </span>
              <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                EVALUATE
              </h3>
              <p className="text-sm text-[#20262B] leading-relaxed">
                Determine which CST technology or process-development approach may be relevant.
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block mb-2">
                03
              </span>
              <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                DEVELOP
              </h3>
              <p className="text-sm text-[#20262B] leading-relaxed">
                Develop and evaluate an application-specific approach.
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-6">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#6D9F45] block mb-2">
                04
              </span>
              <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] mb-2 tracking-wider">
                IMPLEMENT
              </h3>
              <p className="text-sm text-[#20262B] leading-relaxed">
                Support engineering, implementation or commercialization where appropriate.
              </p>
            </div>
          </div>

          <div className="pt-2 text-xs font-mono text-slate-500">
            Not every application follows the same technical or commercialization path.
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8: TECHNOLOGY PORTFOLIO CONNECTION
          Editorial transition back to Technologies
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>EXPLORE THE TECHNOLOGY</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123A63]">
                Four Technology Areas.<br />
                <span className="text-[#2F6F9F] font-light">Multiple Application Paths.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                CST's technology portfolio spans CO₂ capture and repurposing, NOx and SOx abatement, advanced water treatment and advanced materials.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/technologies')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-black/10 cursor-pointer"
                >
                  <span>VIEW ALL TECHNOLOGIES</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>
              </div>
            </div>

            {/* Four Compact Text Links */}
            <div className="lg:col-span-5 space-y-3">
              <div
                onClick={() => onNavigate('/technologies/co2-capture')}
                className="p-4 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-xl cursor-pointer group flex items-center justify-between transition-colors"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">AREA 01</div>
                  <div className="font-display text-sm sm:text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors">
                    CO₂ Capture &amp; Repurposing
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#123A63] group-hover:text-[#2F6F9F] group-hover:translate-x-0.5 transition-all" />
              </div>

              <div
                onClick={() => onNavigate('/technologies/nox-sox')}
                className="p-4 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-xl cursor-pointer group flex items-center justify-between transition-colors"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">AREA 02</div>
                  <div className="font-display text-sm sm:text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors">
                    NOx &amp; SOx Abatement
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#123A63] group-hover:text-[#2F6F9F] group-hover:translate-x-0.5 transition-all" />
              </div>

              <div
                onClick={() => onNavigate('/technologies/water-treatment')}
                className="p-4 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-xl cursor-pointer group flex items-center justify-between transition-colors"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">AREA 03</div>
                  <div className="font-display text-sm sm:text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors">
                    Advanced Water Treatment
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#123A63] group-hover:text-[#2F6F9F] group-hover:translate-x-0.5 transition-all" />
              </div>

              <div
                onClick={() => onNavigate('/technologies/advanced-materials')}
                className="p-4 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-xl cursor-pointer group flex items-center justify-between transition-colors"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#2F6F9F] font-semibold">AREA 04</div>
                  <div className="font-display text-sm sm:text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors">
                    Advanced Materials
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#123A63] group-hover:text-[#2F6F9F] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 9: SELECT YOUR APPLICATION
          Clean navigational section before final CTA
      ================================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="bg-[#071B2D] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#2F6F9F]/30 shadow-xl">
          <div className="max-w-2xl mb-8">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-2">
              QUICK NAVIGATION
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What Challenge Are You Working On?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Route 1 */}
            <div
              onClick={() => onNavigate('/applications/industrial-emissions')}
              className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl hover:border-white transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                  AIR EMISSIONS
                </div>
                <div className="font-display text-base font-bold text-white group-hover:text-[#89B3D3] transition-colors">
                  Industrial Emissions
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-slate-300 group-hover:text-white pt-2 border-t border-white/10">
                <span>View Application</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
              </div>
            </div>

            {/* Route 2 */}
            <div
              onClick={() => onNavigate('/applications/water-wastewater')}
              className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl hover:border-white transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                  WATER
                </div>
                <div className="font-display text-base font-bold text-white group-hover:text-[#89B3D3] transition-colors">
                  Water &amp; Wastewater
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-slate-300 group-hover:text-white pt-2 border-t border-white/10">
                <span>View Application</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
              </div>
            </div>

            {/* Route 3 */}
            <div
              onClick={() => onNavigate('/applications/concrete-materials')}
              className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl hover:border-white transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                  MATERIALS
                </div>
                <div className="font-display text-base font-bold text-white group-hover:text-[#89B3D3] transition-colors">
                  Concrete &amp; Materials
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-slate-300 group-hover:text-white pt-2 border-t border-white/10">
                <span>View Application</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
              </div>
            </div>

            {/* Route 4 */}
            <div
              onClick={() => onNavigate('/applications/resource-recovery')}
              className="p-5 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl hover:border-white transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#89B3D3] mb-1">
                  RESOURCE RECOVERY
                </div>
                <div className="font-display text-base font-bold text-white group-hover:text-[#89B3D3] transition-colors">
                  Resource Recovery
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-slate-300 group-hover:text-white pt-2 border-t border-white/10">
                <span>View Application</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 10: FINAL CTA
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
              <span>START WITH YOUR APPLICATION</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Have an Environmental<br />
              <span className="text-[#89B3D3] font-light">Challenge to Discuss?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Talk with CST about the process stream, pollutant, water challenge, material opportunity or environmental problem you are working to address.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'Application Discussion')}
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
