import React from 'react';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { InteriorHero } from '../components/interior/InteriorHero';
import { SectionIntro } from '../components/interior/SectionIntro';
import { PageCTA } from '../components/interior/PageCTA';

interface InsightsPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onNavigate,
}) => {
  const topicAreas = [
    {
      number: '01',
      title: 'CO₂ Capture & Repurposing',
      description: 'Technical notes on the capture of CO₂ emissions and conversion into carbonate and bicarbonate products.'
    },
    {
      number: '02',
      title: 'Combustion Emissions Abatement',
      description: 'Approaches to removing harmful combustion emissions, including NOx and SOx, and converting pollutants into useful products.'
    },
    {
      number: '03',
      title: 'Water Reclamation & Desalination',
      description: 'Energy-efficient approaches to water reclamation, mineral separation, and municipal and industrial water treatment.'
    },
    {
      number: '04',
      title: 'Concrete & Materials',
      description: 'Processes utilizing concrete, geopolymer, and CO₂-derived materials for structural and materials applications.'
    }
  ];

  return (
    <div className="bg-[#071B2D] text-white">
      {/* Interior Hero */}
      <InteriorHero
        category="TECHNICAL PERSPECTIVES"
        title="Insights & Perspectives"
        headlineAccent="Environmental Technology & Engineering."
        description="Perspectives on environmental technology, emissions abatement, water reclamation, and process engineering from Pacific Rim Design & Development, Inc."
        badgeText="TECHNICAL PERSPECTIVES"
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('/') },
          { label: 'Insights' }
        ]}
      />

      {/* Main Content-Ready Section */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="PUBLICATIONS & TOPICS"
          title="Technical Focus Areas"
          description="PRDD documents processes and technical perspectives across its primary engineering and environmental focus areas."
        />

        {/* Content-Ready Topic Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {topicAreas.map((topic) => (
            <div
              key={topic.number}
              className="bg-[#0b243d] border border-[#2F6F9F]/30 p-8 shadow-xl relative"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono text-[#89B3D3]">
                <span>TOPIC {topic.number}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">
                {topic.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {topic.description}
              </p>

              <button
                type="button"
                onClick={() => onNavigate('/contact', `Technical Discussion on ${topic.title}`)}
                className="text-xs font-mono uppercase tracking-wider text-[#89B3D3] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Discuss Topic with PRDD</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2F6F9F]" />
              </button>
            </div>
          ))}
        </div>

        {/* Editorial Architecture Notice */}
        <div className="p-8 sm:p-10 bg-[#0c263f] border border-[#2F6F9F]/40 shadow-xl text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
            <span>EDITORIAL PERSPECTIVES</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
            Publications &amp; Technical Documentation
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto mb-6">
            Technical briefs, white papers, and process documentation are selected and prepared for publication. For direct scientific inquiries or technical discussions, contact PRDD engineering directly.
          </p>

          <button
            type="button"
            onClick={() => onNavigate('/contact', 'Technical Documentation Inquiry')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT PRDD ENGINEERING</span>
          </button>
        </div>
      </section>

      {/* Page CTA */}
      <PageCTA
        eyebrow="TECHNICAL INQUIRIES"
        title="Start a Conversation with PRDD"
        description="Whether you're facing an emissions, water treatment, process engineering, or environmental technology challenge, start a conversation with PRDD."
        buttonText="START A CONVERSATION →"
        onAction={() => onNavigate('/contact', 'Technical Inquiry from Insights')}
        secondaryAction={{
          text: 'EXPLORE TECHNOLOGIES',
          onClick: () => onNavigate('/technologies')
        }}
      />
    </div>
  );
};
