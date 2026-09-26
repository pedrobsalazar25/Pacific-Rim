import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FOUNDER_DATA, PRDD_IMAGES } from '../data/prddData';
import { InteriorHero } from '../components/interior/InteriorHero';
import { SectionIntro } from '../components/interior/SectionIntro';
import { PageCTA } from '../components/interior/PageCTA';

interface AboutPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="bg-[#071B2D] text-white">
      {/* Interior Hero with Breadcrumbs */}
      <InteriorHero
        category="ABOUT PRDD"
        title="Pacific Rim Design & Development"
        headlineAccent="Environmental Technology & Engineering."
        description="Pacific Rim Design & Development, Inc. develops environmental processes that address complex industrial problems through chemistry, engineering and practical implementation."
        badgeText="ABOUT PRDD"
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('/') },
          { label: 'About' }
        ]}
      />

      {/* Company Overview & Approach */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <SectionIntro
              eyebrow="OVERVIEW"
              title="Applied Environmental Engineering"
            />

            <div className="text-base text-slate-300 leading-relaxed space-y-4 mb-6 font-normal">
              <p>
                Pacific Rim Design &amp; Development, Inc. (PRDD) develops environmental processes designed to solve difficult industrial emissions, water treatment, and materials challenges.
              </p>
              <p>
                Dr. Robert Richardson, President of PRDD, utilizes a personal laboratory for research and process development, focusing on the chemistry and practical equipment needed to convert pollutants into useful products.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#6D9F45] flex-shrink-0 mt-0.5" />
                <span>Chemistry-first process development</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#6D9F45] flex-shrink-0 mt-0.5" />
                <span>Practical engineering and industrial contracting experience</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#6D9F45] flex-shrink-0 mt-0.5" />
                <span>Processes designed for commercial viability</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative border border-[#2F6F9F]/40 bg-[#0c263f] p-2 shadow-2xl">
              <img
                src={PRDD_IMAGES.approachLab}
                alt="Research and Process Development"
                className="w-full h-80 object-cover object-center filter saturate-90 brightness-95"
              />
              <div className="p-4 bg-[#071B2D] border-t border-[#2F6F9F]/30 text-xs font-mono text-[#DCE8EF] flex items-center justify-between">
                <span>RESEARCH &amp; PROCESS DEVELOPMENT</span>
                <span className="text-[#89B3D3]">PRDD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-[#091F35] border-t border-[#2F6F9F]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#071B2D] border border-[#2F6F9F]/40 p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-4">
                <div className="border border-[#2F6F9F]/50 p-2 bg-[#0c263f]">
                  <img
                    src={FOUNDER_DATA.image}
                    alt={FOUNDER_DATA.name}
                    className="w-full h-80 object-cover object-top filter saturate-95 brightness-95"
                  />
                  <div className="p-3 bg-[#071B2D] border-t border-[#2F6F9F]/30 text-center">
                    <div className="font-display text-base font-bold text-white">
                      {FOUNDER_DATA.name}
                    </div>
                    <div className="text-[11px] font-mono text-[#89B3D3]">
                      {FOUNDER_DATA.title}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  <span>PRESIDENT &amp; INVENTOR</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  Dr. Robert Richardson
                </h3>
                <p className="text-xs font-mono text-[#DCE8EF] mb-4">
                  {FOUNDER_DATA.credentialsDisplay}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {FOUNDER_DATA.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('/about/robert-richardson')}
                    className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] text-white text-xs font-mono font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    <span>VIEW PROFILE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="mailto:robert@prdd.net"
                    className="text-xs font-mono text-[#89B3D3] hover:text-white transition-colors"
                  >
                    robert@prdd.net →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page CTA */}
      <PageCTA
        eyebrow="CONTACT PRDD"
        title="Start a Conversation with PRDD"
        description="Whether you're facing an emissions, water treatment, process engineering, or environmental technology challenge, start a conversation with PRDD."
        buttonText="START A CONVERSATION →"
        onAction={() => onNavigate('/contact', 'General Inquiry')}
        secondaryAction={{
          text: 'VIEW SELECTED PROJECTS',
          onClick: () => onNavigate('/projects')
        }}
      />
    </div>
  );
};
