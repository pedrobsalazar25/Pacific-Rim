import React from 'react';
import { Mail, CheckCircle2, Award } from 'lucide-react';
import { FOUNDER_DATA } from '../data/prddData';
import { InteriorHero } from '../components/interior/InteriorHero';
import { SectionIntro } from '../components/interior/SectionIntro';
import { PageCTA } from '../components/interior/PageCTA';

interface FounderDetailPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const FounderDetailPage: React.FC<FounderDetailPageProps> = ({
  onNavigate,
}) => {
  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'About PRDD', onClick: () => onNavigate('/about') },
    { label: 'Dr. Robert Richardson' }
  ];

  return (
    <div className="bg-[#071B2D] text-white">
      {/* Interior Hero */}
      <InteriorHero
        category="PRESIDENT & INVENTOR"
        title="Dr. Robert Richardson"
        headlineAccent="Ph.D. Chemist · Licensed General Contractor · Inventor"
        description="Dr. Robert Richardson is the founder and president of Pacific Rim Design & Development, Inc. As a Ph.D. chemist, licensed general contractor, and inventor, Dr. Richardson conducts research and process development to address challenging industrial environmental problems."
        breadcrumbs={breadcrumbs}
        image={FOUNDER_DATA.image}
        badgeText="PRESIDENT"
      />

      {/* Biography & Background */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <SectionIntro
              eyebrow="BACKGROUND & APPROACH"
              title="Applied Chemistry & Engineering"
            />

            <div className="text-base sm:text-lg text-slate-300 leading-relaxed space-y-6 mb-8 font-normal">
              {FOUNDER_DATA.biography.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Operating Philosophy Section */}
            <div className="mt-8 p-6 bg-[#0c263f] border border-[#2F6F9F]/35">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#89B3D3] mb-2">
                Engineering Philosophy
              </h4>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {FOUNDER_DATA.philosophy}
              </p>
            </div>
          </div>

          {/* Right Column: Verified Credentials */}
          <div className="lg:col-span-4 space-y-6">
            {/* Credentials Card */}
            <div className="bg-[#0b243d] border border-[#2F6F9F]/40 p-6 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-[#89B3D3] pb-3 mb-4 border-b border-white/10 flex items-center justify-between">
                <span>Credentials</span>
                <Award className="w-4 h-4 text-[#6D9F45]" />
              </div>

              <div className="space-y-3">
                {FOUNDER_DATA.credentials.map((cred, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6D9F45] flex-shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 bg-gradient-to-br from-[#123A63] to-[#071B2D] border border-[#2F6F9F]/60 text-white">
              <h4 className="font-display text-base font-bold mb-2">
                Contact Dr. Richardson
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Direct inquiry regarding technical discussions or project evaluation.
              </p>
              <a
                href="mailto:robert@prdd.net"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#2F6F9F] hover:bg-white hover:text-[#071B2D] text-white text-xs font-mono uppercase tracking-wider transition-colors border border-[#DCE8EF]/40 font-semibold"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL DR. RICHARDSON</span>
              </a>
              <div className="text-center mt-2 text-[11px] font-mono text-[#89B3D3]">
                robert@prdd.net
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page CTA */}
      <PageCTA
        eyebrow="FOUNDER CONSULTATION"
        title="Start a Conversation with PRDD"
        description="Whether you're facing an emissions, water treatment, process engineering, or environmental technology challenge, start a conversation with PRDD."
        buttonText="DISCUSS WITH DR. RICHARDSON →"
        onAction={() => onNavigate('/contact', 'Direct Consultation with Dr. Robert Richardson')}
        secondaryAction={{
          text: 'VIEW ALL TECHNOLOGIES',
          onClick: () => onNavigate('/technologies')
        }}
      />
    </div>
  );
};
