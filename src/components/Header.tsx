import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Plus, Minus } from 'lucide-react';
import { TECHNOLOGIES_DATA, APPLICATIONS_DATA, TechnologyItem } from '../data/prddData';
import { CleanScrubLogo } from './CleanScrubLogo';

interface HeaderProps {
  onOpenContact: () => void;
  onSelectTechnology?: (tech: TechnologyItem) => void;
  currentPath?: string;
  onNavigateHome?: (hash?: string) => void;
  onNavigate?: (path: string, hash?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  onSelectTechnology,
  currentPath = '/',
  onNavigateHome,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop Dropdown States
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const [appDropdownOpen, setAppDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  // Mobile Accordion States
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [mobileAppOpen, setMobileAppOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Timers for desktop hover dropdowns to avoid flickering
  const techTimer = useRef<number | null>(null);
  const appTimer = useRef<number | null>(null);
  const aboutTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRouteClick = (path: string, hash?: string) => {
    setMobileMenuOpen(false);
    setTechDropdownOpen(false);
    setAppDropdownOpen(false);
    setAboutDropdownOpen(false);

    if (onNavigate) {
      onNavigate(path, hash);
    } else if (path === '/' && onNavigateHome) {
      onNavigateHome(hash);
    } else {
      window.history.pushState({}, '', path + (hash ? `#${hash}` : ''));
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    handleRouteClick('/');
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071B2D]/95 backdrop-blur-md border-b border-[#2F6F9F]/25 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#071B2D]/90 via-[#071B2D]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Zone: Authentic Clean Scrub Technologies Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6F9F] rounded-md transition-all py-0.5"
            aria-label="Clean Scrub Technologies Home"
          >
            <CleanScrubLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-sm font-medium text-slate-200" aria-label="Main Navigation">
            {/* Home */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleRouteClick('/');
              }}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                currentPath === '/'
                  ? 'text-white font-semibold bg-white/10 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </a>

            {/* Technologies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (techTimer.current) clearTimeout(techTimer.current);
                setTechDropdownOpen(true);
              }}
              onMouseLeave={() => {
                techTimer.current = window.setTimeout(() => setTechDropdownOpen(false), 150);
              }}
            >
              <button
                type="button"
                onClick={() => handleRouteClick('/technologies')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive('/technologies')
                    ? 'text-white font-semibold bg-white/10 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={techDropdownOpen}
              >
                <span>Technologies</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    techDropdownOpen ? 'rotate-180 text-[#38BDF8]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Technologies Dropdown Menu */}
              {techDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-84 z-50">
                  <div className="bg-[#0c263f]/95 backdrop-blur-xl border border-[#2F6F9F]/30 shadow-2xl p-2.5 rounded-2xl">
                    <div className="px-3 py-2 border-b border-white/10 text-[11px] font-mono uppercase tracking-wider text-[#DCE8EF] flex items-center justify-between">
                      <span>Primary Technology Areas</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#52C41A] shadow-[0_0_6px_#52C41A]" />
                    </div>
                    <div className="space-y-1 mt-1.5">
                      {TECHNOLOGIES_DATA.map((tech) => (
                        <button
                          key={tech.id}
                          type="button"
                          onClick={() => handleRouteClick(`/technologies/${tech.id}`)}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#123A63]/70 transition-all flex items-center justify-between group/item cursor-pointer"
                        >
                          <div>
                            <div className="text-[11px] font-mono text-[#89B3D3] group-hover/item:text-[#38BDF8]">
                              TECH {tech.number}
                            </div>
                            <div className="text-xs font-semibold text-white group-hover/item:text-white">
                              {tech.title}
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-[#38BDF8] group-hover/item:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>

                    <div className="pt-2 mt-1 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => handleRouteClick('/technologies')}
                        className="w-full py-2.5 px-4 rounded-xl text-left text-xs font-semibold text-[#DCE8EF] bg-gradient-to-r from-[#123A63] to-[#0c263f] hover:from-[#0084CD] hover:to-[#123A63] border border-[#2F6F9F]/40 flex items-center justify-between cursor-pointer transition-all shadow-sm"
                      >
                        <span>VIEW ALL TECHNOLOGIES</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#52C41A]" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Applications Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (appTimer.current) clearTimeout(appTimer.current);
                setAppDropdownOpen(true);
              }}
              onMouseLeave={() => {
                appTimer.current = window.setTimeout(() => setAppDropdownOpen(false), 150);
              }}
            >
              <button
                type="button"
                onClick={() => handleRouteClick('/applications')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive('/applications')
                    ? 'text-white font-semibold bg-white/10 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={appDropdownOpen}
              >
                <span>Applications</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    appDropdownOpen ? 'rotate-180 text-[#38BDF8]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Applications Dropdown Menu */}
              {appDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-84 z-50">
                  <div className="bg-[#0c263f]/95 backdrop-blur-xl border border-[#2F6F9F]/30 shadow-2xl p-2.5 rounded-2xl">
                    <div className="px-3.5 py-2 border-b border-white/10 text-[11px] font-mono uppercase tracking-wider text-[#DCE8EF] flex items-center justify-between">
                      <span>Industrial Sectors</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#52C41A] shadow-[0_0_6px_#52C41A]" />
                    </div>
                    <div className="space-y-1 mt-1.5">
                      {APPLICATIONS_DATA.map((app) => (
                        <button
                          key={app.id}
                          type="button"
                          onClick={() => handleRouteClick(`/applications/${app.id}`)}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#123A63]/70 transition-all flex items-center justify-between group/item cursor-pointer"
                        >
                          <div>
                            <div className="text-[11px] font-mono text-[#89B3D3] group-hover/item:text-[#38BDF8]">
                              SECTOR 0{app.number}
                            </div>
                            <div className="text-xs font-semibold text-white group-hover/item:text-white">
                              {app.title}
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-[#38BDF8] group-hover/item:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>

                    <div className="pt-2 mt-1 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => handleRouteClick('/applications')}
                        className="w-full py-2.5 px-4 rounded-xl text-left text-xs font-semibold text-[#DCE8EF] bg-gradient-to-r from-[#123A63] to-[#0c263f] hover:from-[#0084CD] hover:to-[#123A63] border border-[#2F6F9F]/40 flex items-center justify-between cursor-pointer transition-all shadow-sm"
                      >
                        <span>VIEW ALL APPLICATIONS</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#52C41A]" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Projects */}
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                handleRouteClick('/projects');
              }}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                isActive('/projects')
                  ? 'text-white font-semibold bg-white/10 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Projects
            </a>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (aboutTimer.current) clearTimeout(aboutTimer.current);
                setAboutDropdownOpen(true);
              }}
              onMouseLeave={() => {
                aboutTimer.current = window.setTimeout(() => setAboutDropdownOpen(false), 150);
              }}
            >
              <button
                type="button"
                onClick={() => handleRouteClick('/about')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive('/about')
                    ? 'text-white font-semibold bg-white/10 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={aboutDropdownOpen}
              >
                <span>About</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    aboutDropdownOpen ? 'rotate-180 text-[#38BDF8]' : 'text-slate-400'
                  }`}
                />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                  <div className="bg-[#0c263f]/95 backdrop-blur-xl border border-[#2F6F9F]/30 shadow-2xl p-2.5 rounded-2xl space-y-1">
                    <button
                      type="button"
                      onClick={() => handleRouteClick('/about')}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#123A63]/70 transition-all block cursor-pointer"
                    >
                      <div className="text-xs font-semibold text-white">About CST</div>
                      <div className="text-[11px] text-slate-300">Company Story &amp; Approach</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRouteClick('/about/robert-richardson')}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#123A63]/70 transition-all block cursor-pointer border-t border-white/5"
                    >
                      <div className="text-xs font-semibold text-white">Dr. Robert Richardson</div>
                      <div className="text-[11px] font-mono text-slate-300">President &amp; Inventor</div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Insights */}
            <a
              href="/insights"
              onClick={(e) => {
                e.preventDefault();
                handleRouteClick('/insights');
              }}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                isActive('/insights')
                  ? 'text-white font-semibold bg-white/10 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Insights
            </a>
          </nav>

          {/* Action Zone: CST Blue/Navy CONTACT US Pill Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleRouteClick('/contact')}
              className={`inline-flex items-center gap-2.5 px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-white transition-all duration-200 active:scale-95 cursor-pointer rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                currentPath === '/contact'
                  ? 'bg-gradient-to-r from-[#009EE3] to-[#0084CD] border border-white/40 shadow-[#0084CD]/30'
                  : 'bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 hover:from-[#009EE3] hover:to-[#0084CD] shadow-[#0084CD]/20'
              }`}
            >
              <span>CONTACT US</span>
              <span className="w-2 h-2 rounded-full bg-[#52C41A] shadow-[0_0_8px_#52C41A]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button with WCAG 44px touch target */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => handleRouteClick('/contact')}
              className="px-4 py-2 text-xs font-bold uppercase text-white bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 rounded-full sm:hidden cursor-pointer min-h-[40px] flex items-center shadow-md"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#DCE8EF]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Hierarchical Expandable Groups */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#071B2D]/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto">
          <div className="text-xs font-mono tracking-widest text-[#89B3D3] uppercase mb-4 flex items-center justify-between pb-3 border-b border-[#2F6F9F]/30">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D9F45]" />
              <span>CST Navigation Menu</span>
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex flex-col space-y-2 text-base font-medium">
            {/* Home */}
            <button
              type="button"
              onClick={() => handleRouteClick('/')}
              className={`text-left py-2.5 px-4 rounded-full hover:bg-[#123A63]/40 transition-colors ${
                currentPath === '/' ? 'text-[#DCE8EF] font-bold bg-[#123A63]/60' : 'text-slate-200'
              }`}
            >
              Home
            </button>

            {/* Expandable Technologies Group */}
            <div className="border border-[#2F6F9F]/30 bg-[#0c263f]/75 rounded-2xl overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setMobileTechOpen(!mobileTechOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-left text-slate-200 hover:text-[#DCE8EF]"
              >
                <span className="font-semibold">Technologies</span>
                {mobileTechOpen ? (
                  <Minus className="w-4 h-4 text-[#38BDF8]" />
                ) : (
                  <Plus className="w-4 h-4 text-[#38BDF8]" />
                )}
              </button>

              {mobileTechOpen && (
                <div className="px-3 pb-3 space-y-1.5 pt-1 border-t border-white/5">
                  {TECHNOLOGIES_DATA.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleRouteClick(`/technologies/${t.id}`)}
                      className="w-full text-left py-2 px-3 text-xs text-slate-300 hover:text-white hover:bg-[#123A63]/60 rounded-xl block font-mono"
                    >
                      TECH {t.number}: {t.title}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleRouteClick('/technologies')}
                    className="w-full text-left py-2 px-3 text-xs font-mono text-[#DCE8EF] font-semibold bg-[#123A63] hover:bg-[#0084CD] rounded-xl mt-2 block transition-colors"
                  >
                    VIEW ALL TECHNOLOGIES →
                  </button>
                </div>
              )}
            </div>

            {/* Expandable Applications Group */}
            <div className="border border-[#2F6F9F]/30 bg-[#0c263f]/75 rounded-2xl overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setMobileAppOpen(!mobileAppOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-left text-slate-200 hover:text-[#DCE8EF]"
              >
                <span className="font-semibold">Applications</span>
                {mobileAppOpen ? (
                  <Minus className="w-4 h-4 text-[#38BDF8]" />
                ) : (
                  <Plus className="w-4 h-4 text-[#38BDF8]" />
                )}
              </button>

              {mobileAppOpen && (
                <div className="px-3 pb-3 space-y-1.5 pt-1 border-t border-white/5">
                  {APPLICATIONS_DATA.map((app) => (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => handleRouteClick(`/applications/${app.id}`)}
                      className="w-full text-left py-2 px-3 text-xs text-slate-300 hover:text-white hover:bg-[#123A63]/60 rounded-xl block font-mono"
                    >
                      AREA {app.number}: {app.title}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleRouteClick('/applications')}
                    className="w-full text-left py-2 px-3 text-xs font-mono text-[#DCE8EF] font-semibold bg-[#123A63] hover:bg-[#0084CD] rounded-xl mt-2 block transition-colors"
                  >
                    VIEW ALL APPLICATIONS →
                  </button>
                </div>
              )}
            </div>

            {/* Projects */}
            <button
              type="button"
              onClick={() => handleRouteClick('/projects')}
              className={`text-left py-2.5 px-4 rounded-full hover:bg-[#123A63]/40 transition-colors ${
                currentPath === '/projects' ? 'text-[#DCE8EF] font-bold bg-[#123A63]/60' : 'text-slate-200'
              }`}
            >
              Projects
            </button>

            {/* Expandable About Group */}
            <div className="border border-[#2F6F9F]/30 bg-[#0c263f]/75 rounded-2xl overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-left text-slate-200 hover:text-[#DCE8EF]"
              >
                <span className="font-semibold">About</span>
                {mobileAboutOpen ? (
                  <Minus className="w-4 h-4 text-[#38BDF8]" />
                ) : (
                  <Plus className="w-4 h-4 text-[#38BDF8]" />
                )}
              </button>

              {mobileAboutOpen && (
                <div className="px-3 pb-3 space-y-1.5 pt-1 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => handleRouteClick('/about')}
                    className="w-full text-left py-2 px-3 text-xs text-slate-300 hover:text-white hover:bg-[#123A63]/60 rounded-xl block font-mono"
                  >
                    About CST Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRouteClick('/about/robert-richardson')}
                    className="w-full text-left py-2 px-3 text-xs text-slate-300 hover:text-white hover:bg-[#123A63]/60 rounded-xl block font-mono"
                  >
                    Dr. Robert Richardson Profile
                  </button>
                </div>
              )}
            </div>

            {/* Insights */}
            <button
              type="button"
              onClick={() => handleRouteClick('/insights')}
              className={`text-left py-2.5 px-4 rounded-full hover:bg-[#123A63]/40 transition-colors ${
                currentPath === '/insights' ? 'text-[#DCE8EF] font-bold bg-[#123A63]/60' : 'text-slate-200'
              }`}
            >
              Insights
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() => handleRouteClick('/contact')}
              className={`text-left py-2.5 px-4 rounded-full hover:bg-[#123A63]/40 transition-colors ${
                currentPath === '/contact' ? 'text-[#DCE8EF] font-bold bg-[#123A63]/60' : 'text-slate-200'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Bottom Quick Action */}
          <div className="mt-auto pt-6 border-t border-[#2F6F9F]/30 space-y-3">
            <button
              type="button"
              onClick={() => handleRouteClick('/contact')}
              className="w-full py-3.5 bg-gradient-to-r from-[#0084CD] to-[#123A63] border border-[#009EE3]/40 rounded-full text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <span>START A CONVERSATION</span>
              <span className="w-2 h-2 rounded-full bg-[#52C41A] shadow-[0_0_8px_#52C41A]" />
            </button>
            <div className="text-[11px] font-mono text-center text-slate-400">
              robert@prdd.net · 530-474-4819
            </div>
          </div>
        </div>
      )}
    </>
  );
};
