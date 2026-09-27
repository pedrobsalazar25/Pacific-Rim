import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { TECHNOLOGIES_DATA, TechnologyItem } from '../data/prddData';
import { InteriorHero } from '../components/interior/InteriorHero';
import { SectionIntro } from '../components/interior/SectionIntro';
import { PageCTA } from '../components/interior/PageCTA';
import { PrddImage } from '../components/PrddImage';

interface TechnologiesPageProps {
  onNavigate: (path: string, topic?: string) => void;
  onOpenTechModal?: (tech: TechnologyItem) => void;
}

export const TechnologiesPage: React.FC<TechnologiesPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="bg-[#071B2D] text-white">
      {/* Interior Hero */}
      <InteriorHero
        category="PRDD TECHNOLOGIES"
        title="Environmental Technology"
        headlineAccent="Designed for Industry."
        description="PRDD develops environmental processes that address complex industrial problems through chemistry, engineering and practical implementation."
        badgeText="FOUR PRIMARY TECHNOLOGY AREAS"
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('/') },
          { label: 'Technologies' }
        ]}
        stats={[
          { label: 'Technology Scope', value: '4 Primary Areas' },
          { label: 'Engineering Basis', value: 'Applied Chemistry' },
          { label: 'Focus', value: 'Industrial Implementation' }
        ]}
      />

      {/* Main Technology Presentation Section */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="PRIMARY TECHNOLOGY AREAS"
          title="Environmental Technology Designed for Industry"
          description="PRDD develops environmental processes that address complex industrial problems through chemistry, engineering and practical implementation."
        />

        {/* 4 Large Premium Technology Presentations */}
        <div className="space-y-12 sm:space-y-16">
          {TECHNOLOGIES_DATA.map((tech) => (
            <div
              key={tech.id}
              className="bg-[#0b243d] border border-[#2F6F9F]/35 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:border-[#2F6F9F] transition-all"
            >
              {/* Subtle top indicator bar */}
              <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-[#2F6F9F]/20 gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 bg-[#123A63] border border-[#2F6F9F]/50 text-[#DCE8EF]">
                    AREA {tech.number}
                  </span>
                  <span className="text-xs font-mono text-[#89B3D3] uppercase tracking-wider">
                    PRDD Technology Area
                  </span>
                </div>
              </div>

              {/* Grid: Details on Left, Visual & Specs on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                    {tech.title}
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
                    {tech.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    {tech.keyHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#6D9F45] flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Commercial Outputs */}
                  <div className="p-4 bg-[#071B2D] border border-white/10 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#89B3D3] mb-2">
                      Commercial Outputs &amp; Products:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.commercialOutputs.map((out, oIdx) => (
                        <span
                          key={oIdx}
                          className="px-2.5 py-1 text-xs font-mono bg-[#123A63]/60 border border-[#2F6F9F]/40 text-[#DCE8EF]"
                        >
                          {out}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link to Detail Page */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onNavigate(`/technologies/${tech.id}`)}
                      className="inline-flex items-center gap-3 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-md shadow-[#071B2D]"
                    >
                      <span>EXPLORE {tech.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('/contact', tech.title)}
                      className="text-xs font-mono uppercase tracking-wider text-[#89B3D3] hover:text-white transition-colors cursor-pointer py-2 px-3 border border-transparent hover:border-[#2F6F9F]/40"
                    >
                      Discuss Project →
                    </button>
                  </div>
                </div>

                {/* Media Column */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => onNavigate(`/technologies/${tech.id}`)}
                    className="relative border border-[#2F6F9F]/40 bg-[#071B2D] p-2 shadow-2xl cursor-pointer group/img overflow-hidden"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <PrddImage
                        src={tech.image}
                        alt={tech.title}
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 filter saturate-90 brightness-95"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-3 bg-[#071B2D] border-t border-[#2F6F9F]/30 flex items-center justify-between text-xs font-mono text-[#DCE8EF]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                        <span>PROCESS PRESENTATION</span>
                      </span>
                      <span className="text-[#89B3D3] group-hover/img:text-white transition-colors flex items-center gap-1">
                        View Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Page CTA */}
      <PageCTA
        eyebrow="PROJECT INQUIRIES"
        title="Discuss Your Environmental or Process Challenge"
        description="Whether facing an emissions, water treatment, process engineering, or environmental technology challenge, start a conversation with PRDD."
        buttonText="REQUEST TECHNICAL CONSULTATION →"
        onAction={() => onNavigate('/contact', 'Technology Inquiries')}
        secondaryAction={{
          text: 'VIEW INDUSTRIAL APPLICATIONS',
          onClick: () => onNavigate('/applications')
        }}
      />
    </div>
  );
};
