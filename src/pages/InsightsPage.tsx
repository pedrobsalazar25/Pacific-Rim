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
  Compass,
  Phone,
  Mail,
  GraduationCap,
  ShieldCheck,
  RefreshCw,
  Library,
  BookOpen
} from 'lucide-react';
import { Breadcrumbs } from '../components/interior/Breadcrumbs';
import { PrddImage } from '../components/PrddImage';
import { PRDD_IMAGES } from '../data/prddData';

// Reusable content architecture for future real publications / technical notes
export interface FutureInsightItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  date?: string;
  author?: string;
  image?: string;
}

interface InsightsPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  // Update document title and meta description for SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Insights & Technical Resources | PRDD';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Explore technical perspectives and resource topics related to PRDD's environmental process development, industrial emissions, water treatment, advanced materials and resource recovery work."
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  const handleScrollToTopics = () => {
    const el = document.getElementById('topics');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Insights' }
  ];

  // Six Editorial Topic Pathways (not fake articles)
  const topicPathways = [
    {
      number: '01',
      title: 'CARBON CAPTURE & REPURPOSING',
      perspective:
        'How captured carbon can be evaluated not only as an emissions problem, but as a potential feedstock for useful products where technically appropriate.',
      links: [
        { label: 'CO₂ Technology', path: '/technologies/co2-capture' },
        { label: 'Resource Recovery', path: '/applications/resource-recovery' }
      ]
    },
    {
      number: '02',
      title: 'INDUSTRIAL EMISSIONS',
      perspective:
        'Application-specific process development for challenging industrial emissions, including CO₂, NOx, SOx and other documented emissions contexts.',
      links: [
        { label: 'NOx & SOx Technology', path: '/technologies/nox-sox' },
        { label: 'Industrial Emissions', path: '/applications/industrial-emissions' }
      ]
    },
    {
      number: '03',
      title: 'WATER TREATMENT & RECLAMATION',
      perspective:
        'Different water challenges may require different technical approaches, from seawater treatment to water-reclamation process development.',
      links: [
        { label: 'Water Treatment', path: '/technologies/water-treatment' },
        { label: 'Water & Wastewater', path: '/applications/water-wastewater' }
      ]
    },
    {
      number: '04',
      title: 'MATERIALS DEVELOPMENT',
      perspective:
        'Connections between process chemistry, CO₂-derived products, concrete, geopolymers and separate polymer-concrete development.',
      links: [
        { label: 'Advanced Materials', path: '/technologies/advanced-materials' },
        { label: 'Concrete & Materials', path: '/applications/concrete-materials' }
      ]
    },
    {
      number: '05',
      title: 'RESOURCE RECOVERY',
      perspective:
        'Evaluating whether a pollutant or process stream can support a useful product or material while addressing the environmental challenge.',
      links: [
        { label: 'Resource Recovery Application', path: '/applications/resource-recovery' }
      ]
    },
    {
      number: '06',
      title: 'FROM PROCESS TO IMPLEMENTATION',
      perspective:
        'The practical path from scientific process development through evaluation, engineering and implementation where appropriate.',
      links: [
        { label: 'About PRDD', path: '/about' },
        { label: 'Dr. Richardson Profile', path: '/about/robert-richardson' },
        { label: 'Project Experience', path: '/projects' }
      ]
    }
  ];

  return (
    <div className="bg-[#F7F7F3] text-[#20262B] selection:bg-[#2F6F9F]/30 selection:text-[#071B2D]">
      {/* ==================================================
          SECTION 2: HERO — EDITORIAL PERSPECTIVE OPENING
      ================================================== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 lg:p-16 shadow-2xl border border-[#2F6F9F]/20">
          {/* Photographic Background with Deep Navy Scrim */}
          <div className="absolute inset-0 bg-[#071B2D]">
            <PrddImage
              src={PRDD_IMAGES.approachLab}
              alt="Applied process chemistry, research and technical investigation environment"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123A63]/80 border border-[#2F6F9F]/60 rounded-full text-xs font-mono tracking-widest text-[#DCE8EF] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>INSIGHTS &amp; TECHNICAL RESOURCES</span>
            </div>
          </div>

          {/* Hero Middle to Lower: Title & Supporting Content */}
          <div className="relative z-10 pt-12 sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-md">
                Ideas Behind<br />
                <span className="text-[#89B3D3] font-light">the Process.</span>
              </h1>
            </div>

            {/* Bottom Row: Supporting Copy & CTAs */}
            <div className="mt-8 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
                  Explore technical perspectives, process-development themes and future resources connected to PRDD's environmental technology work.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:justify-end">
                <button
                  type="button"
                  onClick={handleScrollToTopics}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
                >
                  <span>EXPLORE TOPICS</span>
                  <ArrowDown className="w-4 h-4 text-[#89B3D3]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact', 'Technical Discussion')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-black/40 backdrop-blur-md border border-white/20 hover:border-white text-slate-200 hover:text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
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
          SECTION 3: INTRODUCTION
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>TECHNICAL PERSPECTIVES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63] leading-[1.12]">
            From Environmental Challenge<br />
            <span className="text-[#2F6F9F] font-light">to Practical Process.</span>
          </h2>

          <div className="text-base sm:text-lg text-[#20262B] leading-relaxed space-y-4 font-normal pt-2">
            <p>
              PRDD's work begins with difficult environmental and industrial problems.
            </p>
            <p className="text-slate-600">
              The technical path may involve chemistry, process development, engineering evaluation, materials, field implementation or commercialization considerations depending on the application.
            </p>
            <p className="text-slate-600">
              This Insights section is designed to provide future technical perspectives and resources around those areas.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4: CURRENT STATUS / CONTENT NOTICE
          Restrained, Finished & Premium
      ================================================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="p-8 sm:p-10 lg:p-12 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F3] border border-[#DCE8EF] rounded-full text-xs font-mono font-bold text-[#123A63] uppercase">
              <Library className="w-3.5 h-3.5 text-[#2F6F9F]" />
              <span>RESOURCE LIBRARY</span>
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase">
              CONTENT ARCHITECTURE IN PROGRESS
            </div>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#123A63]">
            Technical Content Is Being Developed.
          </h3>

          <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal max-w-3xl">
            PRDD is developing this section as a resource for technical perspectives, process-development insights and application-focused content. In the meantime, explore the company's existing Technology, Applications and Project Experience sections.
          </p>

          <div className="pt-4 border-t border-[#DCE8EF] flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/technologies')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              <span>EXPLORE TECHNOLOGIES</span>
              <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F7F7F3] border border-[#DCE8EF] hover:border-[#2F6F9F] text-[#123A63] hover:text-[#2F6F9F] text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              <span>VIEW PROJECT EXPERIENCE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5: INSIGHT TOPICS (SIX TOPIC PATHWAYS)
          Editorial Topics (NOT published articles)
      ================================================== */}
      <section id="topics" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>TOPICS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Areas of<br />
            <span className="text-[#2F6F9F] font-light">Technical Focus.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicPathways.map((topic) => (
            <div
              key={topic.number}
              className="p-8 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl sm:rounded-3xl shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#DCE8EF]">
                  <span className="font-display text-2xl font-bold text-[#123A63]">
                    {topic.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#2F6F9F] uppercase font-semibold">
                    TOPIC PATHWAY
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#123A63]">
                  {topic.title}
                </h3>

                <p className="text-sm text-[#20262B] leading-relaxed font-normal">
                  {topic.perspective}
                </p>
              </div>

              {/* Navigation links to existing content */}
              <div className="pt-6 mt-6 border-t border-[#DCE8EF] space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                  RELATED SECTIONS:
                </div>
                <div className="flex flex-col gap-1.5">
                  {topic.links.map((link, lIdx) => (
                    <button
                      key={lIdx}
                      type="button"
                      onClick={() => onNavigate(link.path)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer text-left"
                    >
                      <ArrowRight className="w-3 h-3 text-[#2F6F9F] flex-shrink-0" />
                      <span>{link.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          SECTION 6: FEATURED TECHNICAL PATHWAY
          Process Development Progression
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#071B2D] text-white rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>PROCESS DEVELOPMENT</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              A Technical Question<br />
              <span className="text-[#89B3D3] font-light">Starts With the Problem.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              The technical path depends on the pollutant, process stream, operating environment and intended application.
            </p>
          </div>

          {/* Six-Stage Progression */}
          <div className="pt-6 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-center">
              <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl text-center h-full flex flex-col justify-center">
                <div className="text-[10px] font-mono text-[#89B3D3] mb-1">01</div>
                <div className="font-mono text-xs font-bold text-white">
                  ENVIRONMENTAL CHALLENGE
                </div>
              </div>

              <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl text-center h-full flex flex-col justify-center">
                <div className="text-[10px] font-mono text-[#89B3D3] mb-1">02</div>
                <div className="font-mono text-xs font-bold text-white">
                  CHARACTERIZE THE PROCESS STREAM
                </div>
              </div>

              <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl text-center h-full flex flex-col justify-center">
                <div className="text-[10px] font-mono text-[#89B3D3] mb-1">03</div>
                <div className="font-mono text-xs font-bold text-white">
                  EVALUATE TECHNICAL APPROACHES
                </div>
              </div>

              <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl text-center h-full flex flex-col justify-center">
                <div className="text-[10px] font-mono text-[#89B3D3] mb-1">04</div>
                <div className="font-mono text-xs font-bold text-white">
                  DEVELOP &amp; TEST
                </div>
              </div>

              <div className="p-4 bg-[#0c263f] border border-[#2F6F9F]/40 rounded-xl text-center h-full flex flex-col justify-center">
                <div className="text-[10px] font-mono text-[#89B3D3] mb-1">05</div>
                <div className="font-mono text-xs font-bold text-white">
                  ENGINEER THE APPLICATION
                </div>
              </div>

              <div className="p-4 bg-[#123A63] border-2 border-[#6D9F45] rounded-xl text-center h-full flex flex-col justify-center">
                <div className="text-[10px] font-mono text-[#6D9F45] mb-1">06</div>
                <div className="font-mono text-xs font-bold text-white">
                  IMPLEMENT OR COMMERCIALIZE WHERE APPROPRIATE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7: EXPLORE PRDD TECHNOLOGY
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>TECHNOLOGY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Four Primary<br />
            <span className="text-[#2F6F9F] font-light">Technology Areas.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            onClick={() => onNavigate('/technologies/co2-capture')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY 01</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                CO₂ Capture &amp; Repurposing
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>Explore Technology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('/technologies/nox-sox')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY 02</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                NOx &amp; SOx Abatement
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>Explore Technology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('/technologies/water-treatment')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY 03</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                Advanced Water Treatment
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>Explore Technology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('/technologies/advanced-materials')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">TECHNOLOGY 04</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                Advanced Materials
              </h3>
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
          SECTION 8: EXPLORE BY APPLICATION
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>APPLICATIONS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#123A63]">
            Start With<br />
            <span className="text-[#2F6F9F] font-light">the Challenge.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            onClick={() => onNavigate('/applications/industrial-emissions')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 01</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                Industrial Emissions
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>View Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('/applications/water-wastewater')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 02</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                Water &amp; Wastewater
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>View Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('/applications/concrete-materials')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 03</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                Concrete &amp; Materials
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F] pt-2 border-t border-[#DCE8EF]">
              <span>View Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('/applications/resource-recovery')}
            className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] rounded-2xl shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono text-[#2F6F9F] uppercase mb-1 font-semibold">APPLICATION 04</div>
              <h3 className="font-display text-base font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-2">
                Resource Recovery
              </h3>
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
          SECTION 9: LEARN FROM PROJECT EXPERIENCE
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="p-8 sm:p-12 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>HISTORICAL EXPERIENCE</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#123A63]">
            Technical Work in Real Operating Environments.
          </h3>

          <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal max-w-4xl">
            PRDD's documented historical project experience provides context for how process development, testing, engineering and implementation can intersect with real operating environments.
          </p>

          {/* Restrained Reference Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#DCE8EF] font-mono text-xs text-[#123A63]">
            <div className="p-3 bg-[#F7F7F3] rounded-lg border border-[#DCE8EF]">Intel</div>
            <div className="p-3 bg-[#F7F7F3] rounded-lg border border-[#DCE8EF]">Jabil</div>
            <div className="p-3 bg-[#F7F7F3] rounded-lg border border-[#DCE8EF]">Hampton Roads Sanitation</div>
            <div className="p-3 bg-[#F7F7F3] rounded-lg border border-[#DCE8EF]">Orange County Sanitation District</div>
            <div className="p-3 bg-[#F7F7F3] rounded-lg border border-[#DCE8EF]">City of Oceanside</div>
            <div className="p-3 bg-[#F7F7F3] rounded-lg border border-[#DCE8EF]">Metro Biosolids Facility</div>
            <div className="p-3 bg-[#F7F7F3] rounded-lg border border-[#DCE8EF]">Sea Launch / Boeing</div>
            <div className="p-3 bg-[#F7F7F3] rounded-lg border border-[#DCE8EF]">Rock Canyon Oil</div>
          </div>

          {/* Context Note */}
          <div className="p-4 sm:p-5 bg-[#FFFDF5] border border-[#DCE8EF] rounded-xl text-xs font-mono text-slate-600 leading-relaxed">
            The organizations shown represent selected historical PRDD project experience and should not be interpreted as current customer relationships or endorsements.
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              <span>EXPLORE PROJECT EXPERIENCE</span>
              <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 10: TECHNICAL LEADERSHIP
          Dr. Robert Richardson Feature
      ================================================== */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="p-8 sm:p-12 lg:p-16 bg-white border border-[#DCE8EF] rounded-2xl sm:rounded-3xl shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Portrait Column */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-[#DCE8EF] bg-[#071B2D] p-2 shadow-lg">
                <PrddImage
                  src={PRDD_IMAGES.founder}
                  alt="Dr. Robert Richardson, President of PRDD"
                  className="w-full h-80 sm:h-96 object-cover object-top filter saturate-95 brightness-95 rounded-xl"
                />
                <div className="p-4 bg-[#071B2D] text-center rounded-b-xl border-t border-white/10 mt-2">
                  <div className="font-display text-lg font-bold text-white">
                    Dr. Robert Richardson
                  </div>
                  <div className="text-xs font-mono text-[#89B3D3] mt-0.5">
                    President · PRDD
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Narrative Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>TECHNICAL LEADERSHIP</span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123A63] tracking-tight">
                  The Perspective Behind the Work.
                </h3>
                <div className="font-mono text-xs sm:text-sm text-[#2F6F9F] font-semibold mt-2 tracking-wide">
                  Ph.D. Chemist · Licensed General Contractor · Inventor
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#20262B] leading-relaxed font-normal">
                Dr. Richardson's documented work combines chemistry, environmental process development, multidisciplinary research and practical implementation.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/about/robert-richardson')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  <span>VIEW ROBERT RICHARDSON PROFILE</span>
                  <ArrowRight className="w-4 h-4 text-[#6D9F45]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 12: FUTURE TECHNICAL RESOURCES MODULE
      ================================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-[#DCE8EF]">
        <div className="p-8 sm:p-12 bg-[#F7F7F3] border border-[#DCE8EF] rounded-2xl sm:rounded-3xl space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>FUTURE TECHNICAL RESOURCES</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123A63]">
            Building a More Detailed Technical Library.
          </h3>

          <p className="text-base text-[#20262B] leading-relaxed font-normal">
            Future PRDD resources may include technical perspectives, application-focused discussions and process-development material as content becomes available.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/contact', 'Technical Discussion')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#123A63] hover:text-[#2F6F9F] font-semibold transition-colors cursor-pointer"
            >
              <span>CONTACT PRDD FOR A TECHNICAL DISCUSSION</span>
              <ArrowRight className="w-4 h-4 text-[#2F6F9F]" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 13: CONTACT / DISCUSSION CTA
      ================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-[#2F6F9F]/30 bg-[#071B2D] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0">
            <PrddImage
              src={PRDD_IMAGES.finalCta}
              alt="Practical environmental process development discussion"
              className="w-full h-full object-cover object-center filter saturate-50 brightness-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/85 to-[#071B2D]/60" />
            <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>TECHNICAL QUESTIONS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Have a Process<br />
              <span className="text-[#89B3D3] font-light">Worth Discussing?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Talk with PRDD about the pollutant, process stream, water challenge, material opportunity or environmental problem you are evaluating.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onNavigate('/contact', 'Technical Discussion')}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-white text-white text-xs font-mono font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 active:scale-95 shadow-xl shadow-black/40 cursor-pointer"
              >
                <span>DISCUSS YOUR CHALLENGE</span>
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
