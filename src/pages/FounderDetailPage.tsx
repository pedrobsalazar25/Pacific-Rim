import React, { useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Building2,
  Factory,
  Layers,
  Sparkles,
  Atom,
  FlaskConical,
  Wrench,
  Cog,
  FileText,
  MapPin,
  CheckCircle2,
  Check,
  Compass,
  Phone,
  Mail,
  GraduationCap,
  ShieldCheck,
  Award,
  RefreshCw
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

interface FounderDetailPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const FounderDetailPage: React.FC<FounderDetailPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Dr. Robert Richardson | President of CST';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about Dr. Robert Richardson, President of Clean Scrub Technologies, and his work in environmental process development, applied chemistry, technology development and practical implementation.'
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
    const el = document.getElementById('profile-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'About', onClick: () => onNavigate('/about') },
    { label: 'Dr. Robert Richardson' }
  ];

  return (
    <div className="bg-[#F7F7F3] text-[#20262B] selection:bg-[#2F6F9F]/30 selection:text-[#071B2D]">
      {/* ==================================================
          SECTION 2: HERO — TECHNICAL FOUNDER OPENING
      ================================================== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 shadow-2xl border border-[#2F6F9F]/30">
          {/* Photographic Background with Deep Navy Scrim */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src={PRDD_IMAGES.approachLab}
              alt="Environmental process development laboratory and practical engineering environment"
              priority
              className="w-full h-full object-cover object-center filter saturate-75 contrast-110 brightness-50"
            />
            {/* Multi-layered cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/80 to-[#071B2D]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/95 via-[#071B2D]/75 to-transparent" />
            <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />
          </div>

          {/* Hero Top Bar: Breadcrumb & Eyebrow */}
          <div className="relative z-10">
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} className="text-white/80" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123A63]/80 border border-[#2F6F9F]/60 text-xs font-mono tracking-widest text-[#DCE8EF] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>PRESIDENT · INVENTOR · CHEMIST</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Title, Credentials & Supporting Content */}
          <div className="relative z-10 pt-8 sm:pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                  Dr. Robert<br />
                  <span className="text-[#89B3D3] font-light">Richardson</span>
                </h1>

                {/* Credential Line */}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs sm:text-sm text-[#DCE8EF] uppercase tracking-wider font-semibold">
                  <span>Ph.D. Chemist</span>
                  <span className="text-[#2F6F9F]">·</span>
                  <span>Licensed General Contractor</span>
                  <span className="text-[#2F6F9F]">·</span>
                  <span className="text-[#6D9F45]">Inventor</span>
                </div>
              </div>

              {/* Founder Portrait In Hero */}
              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="w-36 sm:w-44 lg:w-52 overflow-hidden border-2 border-[#2F6F9F]/60 bg-[#0c263f] p-1.5 rounded-2xl shadow-2xl">
                  <PrddImage
                    src="/images/prdd/people/prdd-founder-portrait.jpg"
                    alt="Dr. Robert Richardson, President of CST"
                    priority
                    className="w-full h-auto aspect-[4/5] object-cover object-top filter saturate-95 brightness-95"
                  />
                  <div className="p-2 text-center text-[10px] font-mono text-[#89B3D3] uppercase tracking-wider">
                    Dr. Robert Richardson
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs */}
            <div className="mt-8 sm:mt-10 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  Dr. Robert Richardson develops environmental processes that connect applied chemistry, process development and practical implementation.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={handleScrollToOverview}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] text-white text-xs font-sans font-bold tracking-wider uppercase rounded-full transition-all duration-300 active:scale-95 shadow-xl shadow-[#0084CD]/20 hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>EXPLORE HIS WORK</span>
                  <ArrowDown className="w-4 h-4 text-[#89B3D3]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Technical Discussion')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0c263f]/80 backdrop-blur-md border border-white/20 hover:border-[#0084CD] text-slate-200 hover:text-white text-xs font-sans font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>DISCUSS A TECHNICAL CHALLENGE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3 & 4: PROFILE INTRODUCTION & SIDEBAR
          Asymmetric Grid: Left (~70%) & Right (~30%)
      ================================================== */}
      <section id="profile-overview" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Story & Overview */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>TECHNICAL LEADERSHIP</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
                Science With<br />
                <span className="text-[#2F6F9F] font-light">a Practical Path Forward.</span>
              </h2>
            </div>

            <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
              <p>
                Dr. Richardson's documented work centers on developing and commercializing environmental solutions for problems where existing or conventional approaches may not be appropriate.
              </p>
              <p>
                His work combines chemistry, environmental process development, multidisciplinary research and practical implementation.
              </p>
              <p className="text-slate-600">
                As both a scientist and Licensed General Contractor, he brings a perspective that connects process-development requirements with the practical realities of engineering and field implementation.
              </p>
            </div>

            {/* Highlight Statement */}
            <div className="my-8 p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
                INTEGRATED WORKING PERSPECTIVE
              </div>
              <div className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-wider text-[#123A63] flex flex-wrap items-center gap-2 sm:gap-4">
                <span>CHEMISTRY</span>
                <span className="text-[#2F6F9F]">+</span>
                <span>PROCESS DEVELOPMENT</span>
                <span className="text-[#2F6F9F]">+</span>
                <span>ENGINEERING</span>
                <span className="text-[#2F6F9F]">+</span>
                <span className="text-[#6D9F45]">IMPLEMENTATION</span>
              </div>
            </div>

            {/* ==================================================
                SECTION 5: EDUCATION
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>EDUCATION</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                A Foundation in Chemistry.
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-[#F7F7F3] border border-[#DCE8EF] space-y-1">
                  <div className="text-[11px] font-mono text-[#2F6F9F] uppercase font-semibold">
                    UNDERGRADUATE
                  </div>
                  <div className="font-display text-lg font-bold text-[#123A63]">
                    BS, Chemistry
                  </div>
                  <div className="font-mono text-xs text-slate-500">
                    CSULB
                  </div>
                </div>

                <div className="p-5 bg-[#F7F7F3] border border-[#DCE8EF] space-y-1">
                  <div className="text-[11px] font-mono text-[#2F6F9F] uppercase font-semibold">
                    DOCTORAL
                  </div>
                  <div className="font-display text-lg font-bold text-[#123A63]">
                    Ph.D., Chemistry
                  </div>
                  <div className="font-mono text-xs text-slate-500">
                    IAAS
                  </div>
                </div>
              </div>

              <p className="text-base text-[#20262B] leading-relaxed font-normal pt-2">
                Dr. Richardson's chemistry background underpins his work in environmental process development, emissions treatment, water treatment, materials and resource recovery.
              </p>
            </div>

            {/* ==================================================
                SECTION 9: RESEARCH & DEVELOPMENT EXPERIENCE
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>PROCESS DEVELOPMENT</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                Research Built Around Practical Problems.
              </h3>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  Dr. Richardson's documented expertise includes inventing, developing and commercializing environmental remediation processes, managing multidisciplinary collaborative research and process-development projects, and conducting research and process development using a personal laboratory.
                </p>
                <p className="text-slate-600">
                  His resume also describes experience translating scientific and engineering requirements into language contractors can implement.
                </p>
              </div>
            </div>

            {/* ==================================================
                SECTION 10: SCIENTIST + LICENSED GENERAL CONTRACTOR
            ================================================== */}
            <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>SCIENCE + CONSTRUCTION PERSPECTIVE</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
                Connecting Technical Requirements With Practical Implementation.
              </h3>

              <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal">
                <p>
                  Dr. Richardson's combination of scientific training and Licensed General Contractor experience supports his ability to translate scientific and engineering requirements into practical language for contractors and implementation teams.
                </p>
                <p className="text-slate-600">
                  This connection between process science and field implementation is a recurring theme in CST's working approach.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Information Sidebar (Section 4) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white border border-[#DCE8EF] p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm">
              <div className="font-display text-base sm:text-lg font-bold text-[#123A63] mb-6 pb-4 border-b border-[#DCE8EF] flex items-center justify-between">
                <span>Profile</span>
                <FlaskConical className="w-4 h-4 text-[#2F6F9F]" />
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    NAME
                  </div>
                  <div className="font-semibold text-[#123A63] text-base">
                    Dr. Robert Richardson
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    ROLE
                  </div>
                  <div className="font-medium text-[#20262B]">
                    President<br />
                    <span className="text-slate-500 text-xs">Clean Scrub Technologies</span>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    BACKGROUND
                  </div>
                  <div className="font-medium text-[#20262B] space-y-1">
                    <div>Ph.D. Chemist</div>
                    <div>Licensed General Contractor</div>
                    <div>Inventor</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                    EDUCATION
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="p-2 bg-[#F7F7F3] border border-[#DCE8EF] text-[#123A63]">
                      BS, Chemistry — CSULB
                    </div>
                    <div className="p-2 bg-[#F7F7F3] border border-[#DCE8EF] text-[#123A63]">
                      Ph.D., Chemistry — IAAS
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    FOCUS
                  </div>
                  <div className="font-medium text-[#123A63] bg-[#F7F7F3] p-2.5 border border-[#DCE8EF]">
                    Environmental Process Development
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

            {/* Direct Consultation Card */}
            <div className="p-6 bg-[#071B2D] border border-[#2F6F9F]/40 text-white rounded-2xl shadow-xl">
              <h4 className="font-display text-base font-bold mb-2">
                Technical Discussion
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed font-mono">
                Connect directly with Dr. Richardson to discuss chemical formulation, process engineering, or environmental project requirements.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'Technical Discussion')}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>CONTACT DR. RICHARDSON</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D9F45]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 6: INVENTION & PROCESS DEVELOPMENT
          Six Restrained Technical Areas
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>INVENTOR &amp; PROCESS DEVELOPER</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Developing Processes<br />
            <span className="text-[#2F6F9F] font-light">Around Difficult Problems.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal mt-4">
            Dr. Richardson's resume documents environmental process-development work across multiple technical areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Area 01 */}
          <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm space-y-3">
            <span className="font-display text-2xl font-bold text-[#123A63] block">01</span>
            <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              SEAWATER TREATMENT
            </h3>
            <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
              Documented process development addressing the conversion of seawater to potable water.
            </p>
          </div>

          {/* Area 02 */}
          <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm space-y-3">
            <span className="font-display text-2xl font-bold text-[#123A63] block">02</span>
            <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              CO₂ CAPTURE &amp; REPURPOSING
            </h3>
            <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
              Documented processes converting captured CO₂ into identified products, including sodium carbonate, sodium bicarbonate and calcium carbonate related pathways.
            </p>
          </div>

          {/* Area 03 */}
          <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm space-y-3">
            <span className="font-display text-2xl font-bold text-[#123A63] block">03</span>
            <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              NOx &amp; SOx ABATEMENT
            </h3>
            <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
              Multiple documented process approaches addressing nitrogen and sulfur oxides and useful chemical products.
            </p>
          </div>

          {/* Area 04 */}
          <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm space-y-3">
            <span className="font-display text-2xl font-bold text-[#123A63] block">04</span>
            <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              WATER RECLAMATION
            </h3>
            <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
              Documented water-reclamation work involving forward osmosis and chemical forced precipitation.
            </p>
          </div>

          {/* Area 05 */}
          <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm space-y-3">
            <span className="font-display text-2xl font-bold text-[#123A63] block">05</span>
            <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              CONCRETE &amp; MATERIALS
            </h3>
            <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
              Documented work connecting CO₂-derived products with concrete and geopolymer development, together with separate high-surface-area polymer concrete work.
            </p>
          </div>

          {/* Area 06 */}
          <div className="p-6 sm:p-8 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm space-y-3">
            <span className="font-display text-2xl font-bold text-[#123A63] block">06</span>
            <h3 className="font-mono text-xs font-bold uppercase text-[#123A63] tracking-wider">
              BALLAST WATER
            </h3>
            <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
              Documented process-development work involving biological control of invasive species and treatment of ballast water.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7: SELECTED PROCESS DIRECTIONS
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#071B2D] text-white border border-[#2F6F9F]/30 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>SELECTED TECHNICAL DIRECTIONS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Multiple Approaches.<br />
              <span className="text-[#89B3D3] font-light">Application-Specific Development.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-slate-200 rounded-xl">
              SEAWATER → POTABLE WATER
            </div>
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-slate-200 rounded-xl">
              CO₂ → IDENTIFIED CARBONATE PRODUCTS
            </div>
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-slate-200 rounded-xl">
              NOx / SOx → MINERAL ACID PRODUCT PATHS
            </div>
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-slate-200 rounded-xl">
              WATER RECLAMATION → FORWARD OSMOSIS + CHEMICAL FORCED PRECIPITATION
            </div>
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-slate-200 rounded-xl">
              CO₂-DERIVED PRODUCTS → CONCRETE / GEOPOLYMER MATERIAL DEVELOPMENT
            </div>
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-slate-200 rounded-xl">
              HIGH-SURFACE-AREA POLYMER CONCRETE
            </div>
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-slate-200 rounded-xl">
              BALLAST WATER TREATMENT
            </div>
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-slate-200 rounded-xl">
              NOx ABATEMENT → H₂O₂ + METAL-ORGANIC FABRIC
            </div>
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-slate-200 rounded-xl">
              MULTI-POLLUTANT EXHAUST PROCESS DEVELOPMENT
            </div>
            <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 text-slate-200 rounded-xl">
              NOx MINERALIZATION USING H₂O₂ + METAL HYDROXIDES
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
            Selected documented technical directions reflecting Dr. Richardson's process development.
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8: TECHNOLOGY & INVENTION CONTEXT
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="p-8 sm:p-12 lg:p-14 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>PATENT-RELATED DEVELOPMENT</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#123A63]">
            From Process Concept to Protectable Technology.
          </h3>

          <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal max-w-4xl">
            Dr. Richardson's resume identifies selected environmental process development associated with patents and proprietary technology.
          </p>

          <div className="p-5 bg-[#F7F7F3] border border-[#DCE8EF] font-mono text-xs text-[#123A63] font-semibold">
            Selected patents for environmental processes
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/technologies')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>EXPLORE CST TECHNOLOGIES</span>
              <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTIONS 11–15: DOCUMENTED INDUSTRIAL & MUNICIPAL EXPERIENCE
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF] space-y-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>PROJECT &amp; FIELD EXPERIENCE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Historical Engineering<br />
            <span className="text-[#2F6F9F] font-light">&amp; Field Implementation.</span>
          </h2>
        </div>

        {/* Featured Project: Intel (Section 11) */}
        <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-xs font-mono font-bold text-[#123A63] uppercase">
              SELECTED PROJECT EXPERIENCE
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase">
              ARIZONA &amp; OREGON FACILITIES
            </div>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
            INTEL — NOx &amp; Amine Abatement Development.
          </h3>

          <p className="text-base text-[#20262B] leading-relaxed font-normal">
            Dr. Richardson's resume documents development and commercialization of novel solutions for NOx and amine abatement associated with Intel facilities in Arizona and Oregon.
          </p>

          <div className="pt-4 border-t border-[#DCE8EF] flex flex-wrap items-center gap-4 text-xs font-mono">
            <button
              type="button"
              onClick={() => onNavigate('/applications/industrial-emissions')}
              className="inline-flex items-center gap-1.5 text-[#123A63] hover:text-[#2F6F9F] font-semibold cursor-pointer"
            >
              <span>Application: Industrial Emissions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-slate-300">·</span>
            <button
              type="button"
              onClick={() => onNavigate('/technologies/nox-sox')}
              className="inline-flex items-center gap-1.5 text-[#123A63] hover:text-[#2F6F9F] font-semibold cursor-pointer"
            >
              <span>Technology: NOx &amp; SOx Abatement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Featured Project: Jabil (Section 12) */}
        <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-xs font-mono font-bold text-[#123A63] uppercase">
              INDUSTRIAL AIR QUALITY
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase">
              MEMPHIS
            </div>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
            JABIL — Air-Quality Process Design &amp; Testing.
          </h3>

          <p className="text-base text-[#20262B] leading-relaxed font-normal">
            Dr. Richardson's historical work associated with Jabil in Memphis included air-quality process design, testing and project management for a precious-metal recovery facility.
          </p>
        </div>

        {/* Municipal & Sanitation Experience (Section 13) */}
        <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>MUNICIPAL &amp; SANITATION EXPERIENCE</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
            Environmental Engineering Across Operating Facilities.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 bg-[#F7F7F3] border border-[#DCE8EF] space-y-2">
              <div className="font-display text-base font-bold text-[#123A63]">
                HAMPTON ROADS SANITATION
              </div>
              <div className="font-mono text-[11px] text-slate-500 uppercase">
                WILLIAMSBURG, VIRGINIA
              </div>
              <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                Developed a multiphase odor-control process, designed and built an automated control system, and performed startup and testing.
              </p>
            </div>

            <div className="p-5 bg-[#F7F7F3] border border-[#DCE8EF] space-y-2">
              <div className="font-display text-base font-bold text-[#123A63]">
                METRO BIOSOLIDS FACILITY
              </div>
              <div className="font-mono text-[11px] text-slate-500 uppercase">
                SAN DIEGO
              </div>
              <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                Investigated process and materials defects in a new odor-control system and provided performance testing.
              </p>
            </div>

            <div className="p-5 bg-[#F7F7F3] border border-[#DCE8EF] space-y-2">
              <div className="font-display text-base font-bold text-[#123A63]">
                ORANGE COUNTY SANITATION DISTRICT
              </div>
              <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                Mobile laboratory work provided real-time results for field investigation.
              </p>
            </div>

            <div className="p-5 bg-[#F7F7F3] border border-[#DCE8EF] space-y-2">
              <div className="font-display text-base font-bold text-[#123A63]">
                CITY OF OCEANSIDE
              </div>
              <p className="text-xs sm:text-sm text-[#20262B] leading-relaxed">
                Developed and built automation for mist-type odor-control technology, designed and installed a laboratory ventilation system, and performed testing and maintenance activities associated with odor-control equipment.
              </p>
            </div>
          </div>
        </div>

        {/* Specialized Operating Environment: Sea Launch / Boeing (Section 14) */}
        <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-xs font-mono font-bold text-[#123A63] uppercase">
            SPECIALIZED ENVIRONMENT
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
            SEA LAUNCH / BOEING — Treatment Designed for a Moving Platform.
          </h3>

          <p className="text-base text-[#20262B] leading-relaxed font-normal">
            Dr. Richardson's resume documents design and installation of a toxic and explosive gas-treatment system associated with rocket fuels and a moving platform environment.
          </p>
        </div>

        {/* Resource Recovery Experience: Rock Canyon Oil (Section 15) */}
        <div className="p-8 sm:p-10 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] text-xs font-mono font-bold text-[#6D9F45] uppercase">
            CO₂ / RESOURCE RECOVERY
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
            ROCK CANYON OIL — Captured CO₂ Within an Oil-Recovery Context.
          </h3>

          <p className="text-base text-[#20262B] leading-relaxed font-normal">
            Dr. Richardson's resume documents development of a process that captured CO₂ from secondary oil-recovery equipment and made it available for tertiary oil recovery.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            The resume also references carbon-credit value in connection with this historical work.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/applications/resource-recovery')}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#123A63] hover:text-[#2F6F9F] font-semibold cursor-pointer"
            >
              <span>Relevant Application: Resource Recovery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </section>

      {/* ==================================================
          SECTION 16: WORKING ACROSS DISCIPLINES
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>COLLABORATIVE DEVELOPMENT</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Technical Problems<br />
            <span className="text-[#2F6F9F] font-light">Rarely Stay in One Discipline.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal mt-4">
            Dr. Richardson's resume documents experience developing and managing multidisciplinary collaborative research and process-development projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm text-center space-y-2">
            <div className="w-10 h-10 bg-[#F7F7F3] border border-[#DCE8EF] flex items-center justify-center mx-auto text-[#123A63]">
              <FlaskConical className="w-5 h-5 text-[#2F6F9F]" />
            </div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#123A63]">
              CHEMISTRY
            </h3>
          </div>

          <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm text-center space-y-2">
            <div className="w-10 h-10 bg-[#F7F7F3] border border-[#DCE8EF] flex items-center justify-center mx-auto text-[#123A63]">
              <Cog className="w-5 h-5 text-[#2F6F9F]" />
            </div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#123A63]">
              PROCESS DEVELOPMENT
            </h3>
          </div>

          <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm text-center space-y-2">
            <div className="w-10 h-10 bg-[#F7F7F3] border border-[#DCE8EF] flex items-center justify-center mx-auto text-[#123A63]">
              <Compass className="w-5 h-5 text-[#2F6F9F]" />
            </div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#123A63]">
              PROJECT MANAGEMENT
            </h3>
          </div>

          <div className="p-6 bg-white border border-[#DCE8EF] rounded-2xl shadow-sm text-center space-y-2">
            <div className="w-10 h-10 bg-[#F7F7F3] border border-[#DCE8EF] flex items-center justify-center mx-auto text-[#123A63]">
              <Wrench className="w-5 h-5 text-[#6D9F45]" />
            </div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#123A63]">
              IMPLEMENTATION
            </h3>
          </div>
        </div>

        <div className="mt-8 text-base text-[#20262B] leading-relaxed max-w-3xl">
          CST's development approach connects scientific requirements with the practical work needed to evaluate, engineer and implement an environmental process.
        </div>
      </section>

      {/* ==================================================
          SECTION 17 & 18: CONNECTION TO TECHNOLOGIES & PROJECTS
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF] space-y-16">
        
        {/* Section 17: Technologies Connection */}
        <div className="p-8 sm:p-12 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>CST TECHNOLOGY PORTFOLIO</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#123A63] mb-2">
              Technical Development Across Four Primary Areas.
            </h3>
            <p className="text-xs font-mono text-slate-500">
              These pages present CST's current technology areas. The profile above summarizes selected technical development documented in Dr. Richardson's resume.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              onClick={() => onNavigate('/technologies/co2-capture')}
              className="p-6 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY 01</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  CO₂ Capture &amp; Repurposing
                </h4>
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
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY 02</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  NOx &amp; SOx Abatement
                </h4>
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
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY 03</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  Advanced Water Treatment
                </h4>
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
                <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY 04</div>
                <h4 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                  Advanced Materials
                </h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
                <span>Explore Technology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/technologies')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
            >
              <span>EXPLORE ALL TECHNOLOGIES</span>
              <ArrowRight className="w-4 h-4 text-[#2F6F9F]" />
            </button>
          </div>
        </div>

        {/* Section 18: Project Experience Connection */}
        <div className="p-8 sm:p-12 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>HISTORICAL EXPERIENCE</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#123A63]">
            From Technical Development to Real Operating Environments.
          </h3>

          <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal max-w-4xl">
            Dr. Richardson's documented project experience spans semiconductor manufacturing, industrial air quality, municipal sanitation, specialized maritime operations and oil-recovery applications.
          </p>

          <div className="p-4 sm:p-5 bg-[#FFFDF5] border border-[#DCE8EF] text-xs font-mono text-slate-600 leading-relaxed">
            The organizations shown represent selected historical CST project experience and should not be interpreted as current customer relationships or endorsements.
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>EXPLORE PROJECT EXPERIENCE</span>
              <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
            </button>
          </div>
        </div>

      </section>

      {/* ==================================================
          SECTION 19: PROFILE CLOSING STATEMENT
          Restrained Editorial Idea (NOT a quote)
      ================================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="p-8 sm:p-12 bg-[#F7F7F3] border-l-4 border-[#2F6F9F] border border-[#DCE8EF] rounded-2xl max-w-4xl mx-auto shadow-sm">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#2F6F9F] mb-3">
            EDITORIAL PERSPECTIVE
          </div>
          <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#123A63] leading-relaxed">
            Science is most useful when it can be translated into a practical process.
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 20: FINAL CTA
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0">
            <PrddImage
              src={PRDD_IMAGES.finalCta}
              alt="Environmental process development technical discussion"
              className="w-full h-full object-cover object-center filter saturate-50 brightness-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
            <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>DISCUSS A TECHNICAL CHALLENGE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Have a Difficult<br />
              <span className="text-[#89B3D3] font-light">Environmental Problem?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Talk with Dr. Richardson and CST about the pollutant, process stream, water challenge, material opportunity or environmental problem you are working to address.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'Technical Discussion')}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
              >
                <span>CONTACT CST</span>
                <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
              </button>
            </div>

            <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-slate-300">
              <div>
                <span className="text-white font-semibold">Dr. Robert Richardson</span>
                <span className="text-slate-400 block sm:inline sm:ml-2">Clean Scrub Technologies</span>
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
