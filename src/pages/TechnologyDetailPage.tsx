import React from 'react';
import { ArrowRight, CheckCircle2, Factory, Wrench } from 'lucide-react';
import { TECHNOLOGIES_DATA } from '../data/prddData';
import { InteriorHero } from '../components/interior/InteriorHero';
import { SectionIntro } from '../components/interior/SectionIntro';
import { RelatedContent } from '../components/interior/RelatedContent';
import { PageCTA } from '../components/interior/PageCTA';

interface TechnologyDetailPageProps {
  techId: string;
  onNavigate: (path: string, topic?: string) => void;
}

export const TechnologyDetailPage: React.FC<TechnologyDetailPageProps> = ({
  techId,
  onNavigate,
}) => {
  const tech = TECHNOLOGIES_DATA.find((t) => t.id === techId) || TECHNOLOGIES_DATA[0];

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Technologies', onClick: () => onNavigate('/technologies') },
    { label: tech.title }
  ];

  // Related technology areas
  const relatedItems = TECHNOLOGIES_DATA.filter((t) => t.id !== tech.id).map((t) => ({
    category: 'TECHNOLOGY AREA',
    title: t.title,
    description: t.summary,
    route: `/technologies/${t.id}`,
    tag: `AREA ${t.number}`
  }));

  return (
    <div className="bg-[#071B2D] text-white">
      {/* Interior Hero with Breadcrumb Navigation */}
      <InteriorHero
        category="PRDD TECHNOLOGY"
        title={tech.title}
        headlineAccent="Environmental Engineering Process"
        description={tech.summary}
        breadcrumbs={breadcrumbs}
        image={tech.image}
        badgeText={`AREA ${tech.number}`}
      />

      {/* Technical Overview Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <SectionIntro
              eyebrow="OVERVIEW & APPROACH"
              title={tech.title}
            />

            <div className="text-base sm:text-lg text-slate-300 leading-relaxed space-y-5 mb-8 font-normal">
              <p>
                {tech.detailedOverview || tech.summary}
              </p>
              <p>
                {tech.chemicalPathway}
              </p>
            </div>

            {/* Industrial Feedstock & Scope */}
            <div className="bg-[#0c263f] border border-[#2F6F9F]/30 p-6 mb-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#89B3D3] mb-2 flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#2F6F9F]" />
                <span>Industrial Feedstock &amp; Operating Stream</span>
              </h4>
              <p className="text-sm sm:text-base text-slate-200">
                {tech.industrialFeedstock}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#89B3D3] mb-3">
                Key Process Highlights:
              </h4>
              <div className="space-y-2.5">
                {tech.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#0b243d] border border-white/5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#6D9F45] flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Outputs & Equipment Focus */}
          <div className="lg:col-span-4 space-y-6">
            {/* Commercial Outputs */}
            <div className="bg-[#0c263f] border border-[#2F6F9F]/35 p-6 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
                <span>Outputs &amp; Products</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              </div>

              <div className="space-y-2 mb-6">
                {tech.commercialOutputs.map((out, oIdx) => (
                  <div key={oIdx} className="p-2.5 bg-[#071B2D] border border-white/5 text-xs font-mono text-[#DCE8EF] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#6D9F45]" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase text-[#89B3D3] mb-1 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#2F6F9F]" />
                  <span>Equipment Focus:</span>
                </div>
                <div className="text-xs text-slate-300 leading-normal">
                  {tech.equipmentFocus}
                </div>
              </div>
            </div>

            {/* Quick Discussion Card */}
            <div className="p-6 bg-gradient-to-br from-[#123A63]/60 to-[#071B2D] border border-[#2F6F9F]/50 text-white">
              <h4 className="font-display text-base font-bold mb-2">
                Discuss Your Stream
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Connect with PRDD to evaluate technical feasibility and application requirements.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/contact', tech.title)}
                className="w-full py-2.5 bg-[#2F6F9F] hover:bg-[#123A63] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer border border-[#DCE8EF]/40 font-semibold"
              >
                Inquire About {tech.title} →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications for this Technology */}
      {tech.applications && tech.applications.length > 0 && (
        <section className="py-16 bg-[#051422] border-y border-[#2F6F9F]/30">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <SectionIntro
              eyebrow="APPLICATIONS"
              title="Related Application Areas"
              description="Explore industrial applications associated with this technology area."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tech.applications.map((app, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate(app.route)}
                  className="bg-[#0c263f] border border-[#2F6F9F]/30 hover:border-[#2F6F9F] p-6 cursor-pointer group transition-all"
                >
                  <h4 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#DCE8EF] transition-colors">
                    {app.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {app.desc}
                  </p>
                  <div className="text-xs font-mono text-[#89B3D3] group-hover:text-white flex items-center gap-1">
                    <span>View Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Technologies */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <RelatedContent
          title="OTHER TECHNOLOGY AREAS"
          items={relatedItems}
          onNavigate={(route) => onNavigate(route)}
        />
      </div>

      {/* Page CTA */}
      <PageCTA
        eyebrow="DISCUSS THIS TECHNOLOGY"
        title={`Consult PRDD on ${tech.title}`}
        description="Whether you're facing an emissions, water treatment, process engineering, or environmental technology challenge, start a conversation with PRDD."
        buttonText={`START ${tech.title.split(' ')[0]} DISCUSSION →`}
        onAction={() => onNavigate('/contact', tech.title)}
        secondaryAction={{
          text: 'BACK TO ALL TECHNOLOGIES',
          onClick: () => onNavigate('/technologies')
        }}
      />
    </div>
  );
};
