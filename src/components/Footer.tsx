import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import { TECHNOLOGIES_DATA, APPLICATIONS_DATA, TechnologyItem } from '../data/prddData';

interface FooterProps {
  onOpenContact: () => void;
  onSelectTechnology?: (tech: TechnologyItem) => void;
  currentPath?: string;
  onNavigateHome?: (hash?: string) => void;
  onNavigate?: (path: string, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onSelectTechnology,
  currentPath = '/',
  onNavigateHome,
  onNavigate,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRouteClick = (path: string, hash?: string) => {
    if (onNavigate) {
      onNavigate(path, hash);
    } else if (path === '/' && onNavigateHome) {
      onNavigateHome(hash);
    } else {
      window.history.pushState({}, '', path + (hash ? `#${hash}` : ''));
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer className="bg-[#071B2D] text-white border-t border-[#2F6F9F]/20 tech-grid-pattern pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-[#2F6F9F]/20">
          
          {/* Brand Info (2 columns on large screens) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-[#123A63] border border-[#2F6F9F]/60 flex items-center justify-center text-xs font-mono font-bold text-[#DCE8EF]">
                PR
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  CLEAN SCRUB
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#DCE8EF]/70 -mt-1 font-mono">
                  TECHNOLOGIES
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed mb-6 font-normal">
              Developing and commercializing environmental processes and engineering approaches that address complex industrial and municipal environmental challenges.
            </p>

            <div className="font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>Chemistry-First Process Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>Licensed General Contractor</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
                <span>Practical Field Implementation</span>
              </div>
            </div>
          </div>

          {/* Group 1: Technologies */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#DCE8EF] mb-5 flex items-center gap-2">
              <span>TECHNOLOGIES</span>
              <span className="w-1 h-1 rounded-full bg-[#6D9F45]" />
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-300">
              {TECHNOLOGIES_DATA.map((t) => (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => handleRouteClick(`/technologies/${t.id}`)}
                    className="hover:text-[#DCE8EF] transition-colors text-left flex items-start gap-1.5 cursor-pointer"
                  >
                    <span>{t.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => handleRouteClick('/technologies')}
                  className="text-xs font-mono text-[#89B3D3] hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>All Technologies</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Group 2: Applications & Company */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#DCE8EF] mb-5 flex items-center gap-2">
              <span>APPLICATIONS</span>
              <span className="w-1 h-1 rounded-full bg-[#6D9F45]" />
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-300 mb-6">
              {APPLICATIONS_DATA.map((a) => (
                <li key={a.id}>
                  <button
                    type="button"
                    onClick={() => handleRouteClick(`/applications/${a.id}`)}
                    className="hover:text-[#DCE8EF] transition-colors text-left cursor-pointer"
                  >
                    <span>{a.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => handleRouteClick('/applications')}
                  className="text-xs font-mono text-[#89B3D3] hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>All Applications</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Group 3: Company & Direct Contact Info */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#DCE8EF] mb-5 flex items-center gap-2">
              <span>COMPANY &amp; CONTACT</span>
              <span className="w-1 h-1 rounded-full bg-[#6D9F45]" />
            </div>
            <div className="space-y-3.5 text-xs font-mono text-slate-300">
              <div className="space-y-1.5 pb-2 border-b border-white/10">
                <div>
                  <button
                    type="button"
                    onClick={() => handleRouteClick('/about')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About PRDD Overview
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => handleRouteClick('/about/robert-richardson')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Dr. Robert Richardson Profile
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => handleRouteClick('/projects')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Project Experience
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => handleRouteClick('/insights')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Insights &amp; Resources
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2F6F9F] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  PO Box 146, Shingletown, CA 96088
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2F6F9F] shrink-0" />
                <a href="tel:530-474-4819" className="hover:text-[#DCE8EF] transition-colors">
                  530-474-4819
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2F6F9F] shrink-0" />
                <a href="mailto:robert@prdd.net" className="hover:text-[#DCE8EF] transition-colors">
                  robert@prdd.net
                </a>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleRouteClick('/contact')}
                  className="w-full py-2.5 px-3 text-center text-[11px] uppercase tracking-wider font-mono font-semibold bg-[#123A63] hover:bg-[#2F6F9F] border border-[#2F6F9F] hover:border-[#DCE8EF] text-[#DCE8EF] hover:text-white transition-all shadow-md shadow-[#071B2D] cursor-pointer"
                >
                  START A CONVERSATION →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Clean Scrub Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px]">Industrial Environmental Solutions</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:underline cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#2F6F9F]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
