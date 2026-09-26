import React from 'react';
import { ArrowRight, CheckCircle2, Building2, ShieldCheck } from 'lucide-react';
import { APPLICATIONS_DATA, TECHNOLOGIES_DATA } from '../data/prddData';
import { InteriorHero } from '../components/interior/InteriorHero';
import { SectionIntro } from '../components/interior/SectionIntro';
import { RelatedContent } from '../components/interior/RelatedContent';
import { PageCTA } from '../components/interior/PageCTA';

interface ApplicationDetailPageProps {
  appId: string;
  onNavigate: (path: string, topic?: string) => void;
}

export const ApplicationDetailPage: React.FC<ApplicationDetailPageProps> = ({
  appId,
  onNavigate,
}) => {
  const application = APPLICATIONS_DATA.find((a) => a.id === appId) || APPLICATIONS_DATA[0];

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Applications', onClick: () => onNavigate('/applications') },
    { label: application.title }
  ];

  // Compatible technologies
  const compatibleTechs = TECHNOLOGIES_DATA.filter((t) =>
    application.compatibleTechIds.includes(t.id)
  );

  // Other applications for related content
  const relatedApps = APPLICATIONS_DATA.filter((a) => a.id !== application.id).map((a) => ({
    category: 'APPLICATION AREA',
    title: a.title,
    description: a.summary,
    route: `/applications/${a.id}`,
    tag: `AREA ${a.number}`
  }));

  return (
    <div className="bg-[#071B2D] text-white">
      {/* Interior Hero with Breadcrumbs */}
      <InteriorHero
        category="PRDD APPLICATION"
        title={application.title}
        headlineAccent="Industrial Environmental Process"
        description={application.summary}
        breadcrumbs={breadcrumbs}
        image={application.image}
        badgeText={`AREA ${application.number}`}
      />

      {/* Challenge vs Solution Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="OVERVIEW"
          title="Challenge &amp; Engineering Approach"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Challenge Box */}
          <div className="bg-[#0b243d] border border-white/10 p-8 shadow-xl relative overflow-hidden">
            <div className="text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4 pb-2 border-b border-white/10">
              OPERATIONAL CHALLENGE
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Industrial Problem Context
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {application.challenge}
            </p>
          </div>

          {/* PRDD Solution Box */}
          <div className="bg-[#0c263f] border border-[#2F6F9F]/50 p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4 pb-2 border-b border-[#2F6F9F]/30">
              <ShieldCheck className="w-4 h-4 text-[#6D9F45]" />
              <span>THE PRDD APPROACH</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Chemistry &amp; Engineering Solutions
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {application.solution}
            </p>
            <div className="space-y-2 pt-2 border-t border-white/10">
              {application.fieldOutcomes.map((fo, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#6D9F45] flex-shrink-0 mt-0.5" />
                  <span>{fo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Industrial Sectors */}
      <section className="py-16 bg-[#051422] border-y border-[#2F6F9F]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3]">
              <Building2 className="w-4 h-4 text-[#2F6F9F]" />
              <span>Operating Sectors</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {application.industrialSectors.map((sector, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#071B2D] border border-[#2F6F9F]/35 p-4 sm:p-5 flex flex-col justify-between"
              >
                <span className="font-mono text-[11px] text-[#89B3D3]">
                  0{sIdx + 1}
                </span>
                <span className="font-display text-sm font-semibold text-white mt-2">
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Technologies Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="TECHNOLOGY INTEGRATION"
          title="Related PRDD Technologies"
          description="Technology areas associated with this industrial application."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {compatibleTechs.map((tech) => (
            <div
              key={tech.id}
              className="bg-[#0b243d] border border-[#2F6F9F]/40 p-6 sm:p-8 flex flex-col justify-between group hover:border-[#2F6F9F] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#89B3D3] mb-3">
                  <span className="bg-[#123A63] px-2 py-0.5">AREA {tech.number}</span>
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#DCE8EF] transition-colors">
                  {tech.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {tech.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onNavigate(`/technologies/${tech.id}`)}
                  className="text-xs font-mono uppercase tracking-wider text-[#89B3D3] group-hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Technology</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Applications */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
        <RelatedContent
          title="OTHER APPLICATION AREAS"
          items={relatedApps}
          onNavigate={(route) => onNavigate(route)}
        />
      </div>

      {/* Page CTA */}
      <PageCTA
        eyebrow="APPLICATION CONSULTATION"
        title={`Discuss ${application.title}`}
        description="Whether facing an emissions, water treatment, process engineering, or environmental technology challenge, start a conversation with PRDD."
        buttonText={`START ${application.title.toUpperCase()} DISCUSSION →`}
        onAction={() => onNavigate('/contact', `${application.title} Application Discussion`)}
        secondaryAction={{
          text: 'VIEW ALL APPLICATIONS',
          onClick: () => onNavigate('/applications')
        }}
      />
    </div>
  );
};
