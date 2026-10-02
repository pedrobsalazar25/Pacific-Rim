import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Building2,
  Factory,
  Layers,
  Sparkles,
  Atom,
  ShieldCheck,
  CheckCircle2,
  Check,
  Compass,
  FileText,
  User,
  FlaskConical,
  Wrench,
  Cog,
  RefreshCw,
  Phone,
  Mail
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES, FOUNDER_DATA } from '../data/prddData';

interface AboutPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'About Clean Scrub Technologies | CST';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about Clean Scrub Technologies, its approach to environmental process development, applied chemistry, practical engineering and technology commercialization.'
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
    const el = document.getElementById('company-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'About' }
  ];

  return (
    <div className="bg-[#F7F7F3] text-[#20262B] selection:bg-[#2F6F9F]/30 selection:text-[#071B2D]">
      {/* ==================================================
          SECTION 2: HERO — EDITORIAL COMPANY OPENING
      ================================================== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 shadow-2xl border border-[#2F6F9F]/30">
          {/* Photographic Background with Deep Navy Scrim */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src={PRDD_IMAGES.approachLab}
              alt="Clean Scrub Technologies environmental process development laboratory"
              priority
              className="w-full h-full object-cover object-center filter saturate-75 contrast-110 brightness-55"
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
              <span>ABOUT CST</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Title & Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Environmental Problems.<br />
                <span className="text-[#89B3D3] font-light">Practical Process Solutions.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  Clean Scrub Technologies develops environmental processes and engineering approaches for challenging industrial and environmental problems.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={handleScrollToOverview}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
                >
                  <span>EXPLORE CST</span>
                  <ArrowDown className="w-4 h-4 text-[#89B3D3]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'General Inquiry')}
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
          SECTION 3 & 4: COMPANY INTRODUCTION & INFORMATION SIDEBAR
          Asymmetric Grid: Left (~70%) & Right (~30%)
      ================================================== */}
      <section id="company-overview" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Company Story & Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>CLEAN SCRUB TECHNOLOGIES</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
                Developing Solutions<br />
                <span className="text-[#2F6F9F] font-light">Where the Problem Begins.</span>
              </h2>
            </div>

            <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
              <p>
                CST develops and commercializes environmental solutions for challenging industrial and environmental problems.
              </p>
              <p>
                Its work combines chemistry, process development and practical engineering to develop approaches around the requirements of the specific environmental challenge.
              </p>
              <p className="text-slate-600">
                CST's documented technology and project experience spans industrial emissions, water treatment, materials development, environmental testing and specialized operating environments.
              </p>
            </div>

            {/* Highlight Statement */}
            <div className="my-8 p-6 sm:p-8 bg-white border border-[#DCE8EF] shadow-sm">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
                INTEGRATED APPROACH
              </div>
              <div className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-wider text-[#123A63] flex flex-wrap items-center gap-2 sm:gap-4">
                <span>SCIENCE</span>
                <span className="text-[#2F6F9F]">+</span>
                <span>PROCESS DEVELOPMENT</span>
                <span className="text-[#2F6F9F]">+</span>
                <span>ENGINEERING</span>
                <span className="text-[#2F6F9F]">+</span>
                <span className="text-[#6D9F45]">IMPLEMENTATION</span>
              </div>
            </div>

            {/* Supporting Image Card */}
            <div className="overflow-hidden border border-[#DCE8EF] shadow-md bg-[#071B2D] relative group">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <PrddImage
                  src={PRDD_IMAGES.approachLab}
                  alt="CST process chemistry and applied engineering laboratory"
                  className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-[#20262B]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
                  <span className="font-semibold text-[#123A63]">APPLIED PROCESS DEVELOPMENT &amp; TESTING ENVIRONMENT</span>
                </span>
                <span className="text-slate-500">[ CST RESEARCH ]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Company Information Sidebar (Section 4) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white border border-[#DCE8EF] p-6 sm:p-8 shadow-sm">
              <div className="font-display text-base sm:text-lg font-bold text-[#123A63] mb-6 pb-4 border-b border-[#DCE8EF] flex items-center justify-between">
                <span>Company Information</span>
                <Building2 className="w-4 h-4 text-[#2F6F9F]" />
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    COMPANY
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Clean Scrub Technologies
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    FOCUS
                  </div>
                  <div className="font-medium text-[#20262B] bg-[#F7F7F3] p-2.5 border border-[#DCE8EF]">
                    Environmental Process Development
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                    TECHNOLOGY AREAS
                  </div>
                  <div className="space-y-1 font-mono text-xs text-[#123A63]">
                    <div className="p-1.5 bg-[#F7F7F3] border border-[#DCE8EF]">CO₂ Capture &amp; Repurposing</div>
                    <div className="p-1.5 bg-[#F7F7F3] border border-[#DCE8EF]">NOx &amp; SOx Abatement</div>
                    <div className="p-1.5 bg-[#F7F7F3] border border-[#DCE8EF]">Advanced Water Treatment</div>
                    <div className="p-1.5 bg-[#F7F7F3] border border-[#DCE8EF]">Advanced Materials</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    PRESIDENT
                  </div>
                  <div className="font-semibold text-[#123A63]">
                    Dr. Robert Richardson
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    EXPERTISE
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div>Chemistry</div>
                    <div>Process Development</div>
                    <div>Practical Engineering</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DCE8EF] space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    CONTACT
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#123A63]">
                    <Phone className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    <a href="tel:530-474-4819" className="hover:underline">
                      530-474-4819
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#123A63]">
                    <Mail className="w-3.5 h-3.5 text-[#2F6F9F]" />
                    <a href="mailto:robert@prdd.net" className="hover:underline">
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
          SECTION 5: THE CST APPROACH
          Four Restrained Stages
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>HOW CST WORKS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Start With<br />
            <span className="text-[#2F6F9F] font-light">the Environmental Problem.</span>
          </h2>

          <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-3 font-normal mt-4">
            <p>
              CST's approach begins with the specific pollutant, process stream, water challenge, material opportunity or operating environment.
            </p>
            <p className="text-slate-600">
              From there, the company evaluates the problem scientifically and develops an application-specific process or engineering approach.
            </p>
          </div>
        </div>

        {/* Four Restrained Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#DCE8EF] bg-white border border-[#DCE8EF] p-6 sm:p-10 shadow-sm">
          <div className="pt-4 sm:pt-0 sm:pr-4 space-y-3">
            <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block">
              01
            </span>
            <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              IDENTIFY
            </h3>
            <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
              Understand the environmental problem, process stream or operating requirement.
            </p>
          </div>

          <div className="pt-6 sm:pt-0 sm:px-4 space-y-3">
            <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block">
              02
            </span>
            <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              DEVELOP
            </h3>
            <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
              Develop and evaluate a process or technical approach around the specific challenge.
            </p>
          </div>

          <div className="pt-6 sm:pt-0 sm:px-4 space-y-3">
            <span className="font-display text-3xl sm:text-4xl font-bold text-[#123A63] block">
              03
            </span>
            <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              ENGINEER
            </h3>
            <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
              Translate the process-development work into a practical engineering approach.
            </p>
          </div>

          <div className="pt-6 sm:pt-0 sm:pl-4 space-y-3">
            <span className="font-display text-3xl sm:text-4xl font-bold text-[#6D9F45] block">
              04
            </span>
            <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              IMPLEMENT
            </h3>
            <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
              Support implementation or commercialization where appropriate.
            </p>
          </div>
        </div>

        <div className="mt-4 text-xs font-mono text-slate-500">
          Not every environmental challenge follows the same technical or commercialization path.
        </div>
      </section>

      {/* ==================================================
          SECTION 6: TURNING ENVIRONMENTAL PROBLEMS INTO OPPORTUNITIES
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#071B2D] text-white border border-[#2F6F9F]/30 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>A RECURRING DEVELOPMENT THEME</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Look Beyond<br />
              <span className="text-[#89B3D3] font-light">Treatment Alone.</span>
            </h2>

            <div className="text-base sm:text-lg text-slate-200 leading-relaxed space-y-4 font-normal">
              <p>
                A recurring theme in CST's documented environmental work is evaluating whether a pollutant or process stream can be treated in a way that also produces a useful product or material.
              </p>
              <p className="text-slate-300">
                This perspective appears across multiple areas of CST's technology development, including carbon capture, emissions treatment and materials applications.
              </p>
            </div>

            {/* Supporting Statement / Progression */}
            <div className="my-8 p-6 bg-[#0c263f] border border-[#2F6F9F]/50">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
                OPPORTUNITY TRANSLATION
              </div>
              <div className="space-y-3 font-mono text-xs sm:text-sm text-center">
                <div className="p-3 bg-[#071B2D] border border-white/10 text-slate-200 font-bold">
                  ENVIRONMENTAL CHALLENGE
                </div>
                <div className="flex justify-center text-[#2F6F9F]">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <div className="p-3 bg-[#071B2D] border border-white/10 text-slate-200 font-bold">
                  PROCESS DEVELOPMENT
                </div>
                <div className="flex justify-center text-[#2F6F9F]">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <div className="p-3 bg-[#123A63] border-2 border-[#6D9F45] text-white font-bold">
                  USEFUL PRODUCT OR MATERIAL WHERE TECHNICALLY APPROPRIATE
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/applications/resource-recovery')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all cursor-pointer shadow-md"
              >
                <span>EXPLORE RESOURCE RECOVERY</span>
                <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7: SCIENCE + PRACTICAL ENGINEERING
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="p-8 sm:p-12 lg:p-14 bg-white border border-[#DCE8EF] shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>A DIFFERENT PERSPECTIVE</span>
            </div>
            <div className="px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-xs font-mono text-[#2F6F9F] font-semibold uppercase">
              SCIENCE + IMPLEMENTATION
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123A63]">
            Chemistry Connected<br />
            <span className="text-[#2F6F9F] font-light">to Practical Implementation.</span>
          </h2>

          <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal max-w-4xl">
            <p>
              CST President Dr. Robert Richardson combines a background as a Ph.D. chemist with experience as a Licensed General Contractor.
            </p>
            <p>
              His documented work includes environmental process development, multidisciplinary research, practical engineering and project implementation across industrial and municipal environments.
            </p>
            <p className="text-slate-600">
              This combination helps connect scientific process development with the practical requirements of real operating environments.
            </p>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => onNavigate('/about/robert-richardson')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>MEET DR. ROBERT RICHARDSON</span>
              <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8: TECHNOLOGY PORTFOLIO
          Four Primary Technology Areas
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>CST TECHNOLOGY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Four Primary<br />
            <span className="text-[#2F6F9F] font-light">Technology Areas.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tech 01 */}
          <div
            onClick={() => onNavigate('/technologies/co2-capture')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <span className="font-display text-2xl font-bold text-[#123A63] block mb-2">01</span>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY AREA</div>
              <h3 className="font-display text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                CO₂ CAPTURE &amp; REPURPOSING
              </h3>
              <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                Capturing carbon dioxide and converting it into identified useful products.
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
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <span className="font-display text-2xl font-bold text-[#123A63] block mb-2">02</span>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY AREA</div>
              <h3 className="font-display text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                NOx &amp; SOx ABATEMENT
              </h3>
              <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                Multiple CST process-development approaches addressing nitrogen and sulfur oxides.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>Explore Technology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Tech 03 */}
          <div
            onClick={() => onNavigate('/technologies/water-treatment')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <span className="font-display text-2xl font-bold text-[#123A63] block mb-2">03</span>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY AREA</div>
              <h3 className="font-display text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                ADVANCED WATER TREATMENT
              </h3>
              <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                Documented process-development directions involving seawater treatment and water reclamation.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>Explore Technology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Tech 04 */}
          <div
            onClick={() => onNavigate('/technologies/advanced-materials')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <span className="font-display text-2xl font-bold text-[#123A63] block mb-2">04</span>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY AREA</div>
              <h3 className="font-display text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                ADVANCED MATERIALS
              </h3>
              <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                Materials-development work involving concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>Explore Technology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4">
          <button
            type="button"
            onClick={() => onNavigate('/technologies')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
          >
            <span>EXPLORE ALL TECHNOLOGIES</span>
            <ArrowRight className="w-4 h-4 text-[#2F6F9F]" />
          </button>
        </div>
      </section>

      {/* ==================================================
          SECTION 9: EXPERIENCE BEYOND THE LABORATORY
          Understated Experience Strip with Context Note
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>REAL-WORLD EXPERIENCE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            From Process Development<br />
            <span className="text-[#2F6F9F] font-light">to Operating Environments.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal mt-4">
            CST's documented historical project experience includes work in industrial facilities, municipal sanitation environments and specialized operating conditions.
          </p>
        </div>

        {/* Understated Experience Strip */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#DCE8EF] bg-white border border-[#DCE8EF] p-6 sm:p-8 shadow-sm">
          {/* Item 1 */}
          <div className="pt-4 md:pt-0 md:pr-4 space-y-2">
            <div className="text-[10px] font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
              SEMICONDUCTOR MANUFACTURING
            </div>
            <div className="font-display text-base font-bold text-[#123A63]">
              Intel
            </div>
            <p className="text-xs text-[#20262B] leading-relaxed">
              NOx and amine abatement work associated with facilities in Arizona and Oregon.
            </p>
          </div>

          {/* Item 2 */}
          <div className="pt-6 md:pt-0 md:px-4 space-y-2">
            <div className="text-[10px] font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
              INDUSTRIAL AIR QUALITY
            </div>
            <div className="font-display text-base font-bold text-[#123A63]">
              Jabil
            </div>
            <p className="text-xs text-[#20262B] leading-relaxed">
              Air-quality process design, testing and project management associated with work in Memphis.
            </p>
          </div>

          {/* Item 3 */}
          <div className="pt-6 md:pt-0 md:px-4 space-y-2">
            <div className="text-[10px] font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
              MUNICIPAL SANITATION
            </div>
            <div className="font-display text-sm font-bold text-[#123A63]">
              Historical work associated with:
            </div>
            <ul className="text-xs text-[#20262B] space-y-1 list-disc list-inside">
              <li>Hampton Roads Sanitation</li>
              <li>Orange County Sanitation District</li>
              <li>City of Oceanside</li>
              <li>Metro Biosolids Facility</li>
            </ul>
          </div>

          {/* Item 4 */}
          <div className="pt-6 md:pt-0 md:px-4 space-y-2">
            <div className="text-[10px] font-mono text-[#2F6F9F] uppercase tracking-wider font-semibold">
              SPECIALIZED OPERATIONS
            </div>
            <div className="font-display text-base font-bold text-[#123A63]">
              Sea Launch / Boeing
            </div>
            <p className="text-xs text-[#20262B] leading-relaxed">
              Treatment of toxic and explosive gases associated with a moving platform environment.
            </p>
          </div>

          {/* Item 5 */}
          <div className="pt-6 md:pt-0 md:pl-4 space-y-2">
            <div className="text-[10px] font-mono text-[#6D9F45] uppercase tracking-wider font-semibold">
              CO₂ / OIL RECOVERY
            </div>
            <div className="font-display text-base font-bold text-[#123A63]">
              Rock Canyon Oil
            </div>
            <p className="text-xs text-[#20262B] leading-relaxed">
              Historical CO₂ capture work associated with an oil-recovery context.
            </p>
          </div>
        </div>

        {/* Mandatory Context Note */}
        <div className="mt-6 p-4 sm:p-5 bg-[#FFFDF5] border border-[#DCE8EF] text-xs font-mono text-slate-600 leading-relaxed flex items-center justify-between flex-wrap gap-4">
          <p>
            The organizations shown represent selected historical CST project experience and should not be interpreted as current customer relationships or endorsements.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold cursor-pointer"
          >
            <span>EXPLORE PROJECT EXPERIENCE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
          </button>
        </div>
      </section>

      {/* ==================================================
          SECTION 10: APPLICATION-DRIVEN DEVELOPMENT
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>START WITH THE CHALLENGE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Technology Is Only<br />
            <span className="text-[#2F6F9F] font-light">Part of the Answer.</span>
          </h2>

          <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-3 font-normal mt-4">
            <p>
              CST's work is organized around both technology development and the requirements of specific environmental applications.
            </p>
            <p className="text-slate-600">
              The appropriate technical path depends on the pollutant, process stream, water challenge, material opportunity and operating environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            onClick={() => onNavigate('/applications/industrial-emissions')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 01</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                INDUSTRIAL EMISSIONS
              </h3>
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
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 02</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                WATER &amp; WASTEWATER
              </h3>
              <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                Process development addressing seawater treatment, water reclamation and municipal sanitation engineering.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>View Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('/applications/concrete-materials')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 03</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                CONCRETE &amp; MATERIALS
              </h3>
              <p className="text-xs text-[#20262B] leading-relaxed mb-4">
                Materials-development work involving concrete, geopolymers, CO₂-derived products and high-surface-area polymer concrete.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>View Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('/applications/resource-recovery')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 04</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                RESOURCE RECOVERY
              </h3>
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

        <div className="mt-8 pt-4">
          <button
            type="button"
            onClick={() => onNavigate('/applications')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
          >
            <span>EXPLORE APPLICATIONS</span>
            <ArrowRight className="w-4 h-4 text-[#2F6F9F]" />
          </button>
        </div>
      </section>

      {/* ==================================================
          SECTION 11: DEVELOPMENT & COMMERCIALIZATION
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#071B2D] text-white border border-[#2F6F9F]/30 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>FROM CONCEPT TO APPLICATION</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Development Does Not<br />
              <span className="text-[#89B3D3] font-light">End With the Chemistry.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              CST's documented work extends beyond laboratory process development into engineering, implementation and commercialization considerations where appropriate.
            </p>
          </div>

          {/* Restrained Progression */}
          <div className="pt-6 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
              <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-center">
                <div className="text-[10px] font-mono text-[#89B3D3] mb-1">STAGE 01</div>
                <div className="font-mono text-xs font-bold text-white">PROCESS DEVELOPMENT</div>
              </div>

              <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-center">
                <div className="text-[10px] font-mono text-[#89B3D3] mb-1">STAGE 02</div>
                <div className="font-mono text-xs font-bold text-white">EVALUATION &amp; TESTING</div>
              </div>

              <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-center">
                <div className="text-[10px] font-mono text-[#89B3D3] mb-1">STAGE 03</div>
                <div className="font-mono text-xs font-bold text-white">ENGINEERING</div>
              </div>

              <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-center">
                <div className="text-[10px] font-mono text-[#89B3D3] mb-1">STAGE 04</div>
                <div className="font-mono text-xs font-bold text-white">IMPLEMENTATION</div>
              </div>

              <div className="p-4 bg-[#123A63] border-2 border-[#6D9F45] text-center">
                <div className="text-[10px] font-mono text-[#6D9F45] mb-1">STAGE 05</div>
                <div className="font-mono text-xs font-bold text-white">COMMERCIALIZATION WHERE APPROPRIATE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 12: DR. ROBERT RICHARDSON FEATURE
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="p-8 sm:p-12 lg:p-16 bg-white border border-[#DCE8EF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Portrait Column */}
            <div className="lg:col-span-4">
              <div className="overflow-hidden border border-[#DCE8EF] bg-[#071B2D] p-2 shadow-lg">
                <PrddImage
                  src={PRDD_IMAGES.founder}
                  alt="Dr. Robert Richardson, President of CST"
                  className="w-full h-80 sm:h-96 object-cover object-top filter saturate-95 brightness-95"
                />
                <div className="p-4 bg-[#071B2D] text-center border-t border-white/10 mt-2">
                  <div className="font-display text-lg font-bold text-white">
                    Dr. Robert Richardson
                  </div>
                  <div className="text-xs font-mono text-[#89B3D3] mt-0.5">
                    President · CST
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Narrative Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>PRESIDENT</span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123A63] tracking-tight">
                  DR. ROBERT RICHARDSON
                </h3>
                <div className="font-mono text-xs sm:text-sm text-[#2F6F9F] font-semibold mt-2 tracking-wide">
                  Ph.D. Chemist · Licensed General Contractor · Inventor
                </div>
              </div>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  Dr. Richardson's work combines chemistry, environmental process development and practical implementation.
                </p>
                <p className="text-slate-600">
                  His documented experience includes developing and commercializing environmental remediation approaches, managing multidisciplinary research and process-development work, and supporting projects in industrial and municipal operating environments.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/about/robert-richardson')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>VIEW ROBERT RICHARDSON PROFILE</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>

                <a
                  href="mailto:robert@prdd.net"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#123A63] hover:text-[#2F6F9F] font-semibold px-4 py-3 transition-colors"
                >
                  <span>robert@prdd.net</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 14: FINAL CTA
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0">
            <PrddImage
              src={PRDD_IMAGES.finalCta}
              alt="Practical environmental process development consultation"
              className="w-full h-full object-cover object-center filter saturate-50 brightness-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
            <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>START WITH THE PROBLEM</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Have an Environmental<br />
              <span className="text-[#89B3D3] font-light">Challenge to Solve?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Talk with CST about the pollutant, process stream, water challenge, material opportunity or environmental engineering problem you are working to address.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'General Inquiry')}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
              >
                <span>DISCUSS YOUR CHALLENGE</span>
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
