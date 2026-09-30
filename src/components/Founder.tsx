import React from 'react';
import { ArrowRight, Award, GraduationCap, HardHat, FileText } from 'lucide-react';
import { PRDD_IMAGES } from '../data/prddData';
import { PrddImage } from './PrddImage';

interface FounderProps {
  onMeetFounder: () => void;
}

export const Founder: React.FC<FounderProps> = ({ onMeetFounder }) => {
  return (
    <section id="about" className="relative bg-[#071B2D] text-white py-24 sm:py-32 lg:py-40 border-t border-[#2F6F9F]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-3/4 max-w-md mx-auto lg:max-w-none overflow-hidden bg-[#0c263f] border border-[#2F6F9F]/30 group">
              <PrddImage
                src={PRDD_IMAGES.founder}
                alt="Dr. Robert Richardson - Founder & President of Clean Scrub Technologies"
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-transparent to-transparent opacity-80" />

              {/* Founder Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0c263f]/95 border border-[#2F6F9F]/40 backdrop-blur-md">
                <div className="text-xs font-mono text-[#DCE8EF] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                  Executive Leadership
                </div>
                <div className="text-base font-bold text-white">
                  Dr. Robert Richardson
                </div>
                <div className="text-[11px] font-mono text-slate-300 mt-0.5">
                  Ph.D. Chemist · Licensed General Contractor · Inventor
                </div>
              </div>
            </div>

            {/* Architectural frame accent in PRDD Blue */}
            <div className="hidden lg:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#2F6F9F]/50 pointer-events-none" />
          </div>

          {/* Biography & Editorial Content */}
          <div className="lg:col-span-7 lg:pl-6">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] uppercase text-[#DCE8EF] font-semibold mb-4">
              <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
              <span>FOUNDER &amp; PRESIDENT</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-4 [text-wrap:balance]">
              Dr. Robert Richardson
            </h2>

            {/* Credential line */}
            <div className="text-sm sm:text-base font-mono text-[#DCE8EF] font-medium mb-8 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Ph.D. Chemist</span>
              <span className="text-[#2F6F9F]">·</span>
              <span>Licensed General Contractor</span>
              <span className="text-[#2F6F9F]">·</span>
              <span>Inventor</span>
            </div>

            {/* Supporting Content */}
            <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                Dr. Richardson combines scientific process development with practical construction and implementation knowledge, allowing PRDD to bridge laboratory chemistry and industrial deployment.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                This background brings together rigorous laboratory investigation and hands-on construction experience to design environmental technologies that can operate successfully in demanding industrial environments.
              </p>
            </div>

            {/* Core Background Pillars */}
            <div className="mt-8 pt-6 border-t border-[#2F6F9F]/20 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-300">
              <div className="flex items-start gap-2.5 p-3 bg-[#0c263f] border border-[#2F6F9F]/20">
                <GraduationCap className="w-4 h-4 text-[#2F6F9F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Ph.D. Chemist</span>
                  <span className="text-[11px] text-slate-400">Scientific Process Development</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#0c263f] border border-[#2F6F9F]/20">
                <HardHat className="w-4 h-4 text-[#2F6F9F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">General Contractor</span>
                  <span className="text-[11px] text-slate-400">Practical Construction Knowledge</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#0c263f] border border-[#2F6F9F]/20">
                <Award className="w-4 h-4 text-[#2F6F9F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Inventor</span>
                  <span className="text-[11px] text-slate-400">Patented Technologies</span>
                </div>
              </div>
            </div>

            {/* CTA: Blue/Navy primary treatment */}
            <div className="mt-10">
              <button
                type="button"
                onClick={onMeetFounder}
                className="inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase text-white bg-[#123A63] border border-[#2F6F9F] hover:bg-[#2F6F9F] hover:border-[#DCE8EF] transition-all duration-200 cursor-pointer active:scale-98 shadow-lg shadow-[#071B2D]"
              >
                <span>MEET DR. RICHARDSON</span>
                <ArrowRight className="w-4 h-4 text-[#DCE8EF]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
