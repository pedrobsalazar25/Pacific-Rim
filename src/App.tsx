import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Layers, Factory, Droplets, Atom } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Founder } from './components/Founder';
import { CTASection } from './components/CTASection';
import { ContactPage } from './components/ContactPage';
import { ContactModal } from './components/ContactModal';
import { FounderModal } from './components/FounderModal';
import { PrddImage } from './components/PrddImage';
import { TECHNOLOGIES_DATA, APPLICATIONS_DATA, TechnologyItem } from './data/prddData';

// Technology Pages
import { TechnologiesPage } from './pages/TechnologiesPage';
import { CO2CapturePage } from './pages/CO2CapturePage';
import { NoxSoxPage } from './pages/NoxSoxPage';
import { WaterTreatmentPage } from './pages/WaterTreatmentPage';
import { AdvancedMaterialsPage } from './pages/AdvancedMaterialsPage';

// Application Pages
import { ApplicationsPage } from './pages/ApplicationsPage';
import { IndustrialEmissionsPage } from './pages/IndustrialEmissionsPage';
import { WaterWastewaterPage } from './pages/WaterWastewaterPage';
import { ConcreteMaterialsPage } from './pages/ConcreteMaterialsPage';
import { ResourceRecoveryPage } from './pages/ResourceRecoveryPage';

// Other Pages
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { FounderDetailPage } from './pages/FounderDetailPage';
import { InsightsPage } from './pages/InsightsPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });
  const [contactTopic, setContactTopic] = useState<string>('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);

  // Sync navigation on browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string, topicOrHash?: string) => {
    if (path === '/contact' && topicOrHash) {
      setContactTopic(topicOrHash);
    }
    window.history.pushState({}, '', path + (topicOrHash && path !== '/contact' ? `#${topicOrHash}` : ''));
    setCurrentPath(path);
    if (topicOrHash && path !== '/contact') {
      const el = document.getElementById(topicOrHash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleNavigateHome = (hash?: string) => {
    handleNavigate('/', hash);
  };

  const handleOpenContact = (topic?: string) => {
    if (topic) setContactTopic(topic);
    setIsContactModalOpen(true);
  };

  const handleSelectTechnology = (tech: TechnologyItem) => {
    handleNavigate(`/technologies/${tech.id}`);
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      // Technology Routes
      case '/technologies':
        return <TechnologiesPage onNavigate={handleNavigate} />;
      case '/technologies/co2-capture':
        return <CO2CapturePage onNavigate={handleNavigate} />;
      case '/technologies/nox-sox':
        return <NoxSoxPage onNavigate={handleNavigate} />;
      case '/technologies/water-treatment':
        return <WaterTreatmentPage onNavigate={handleNavigate} />;
      case '/technologies/advanced-materials':
        return <AdvancedMaterialsPage onNavigate={handleNavigate} />;

      // Application Routes
      case '/applications':
        return <ApplicationsPage onNavigate={handleNavigate} />;
      case '/applications/industrial-emissions':
        return <IndustrialEmissionsPage onNavigate={handleNavigate} />;
      case '/applications/water-wastewater':
        return <WaterWastewaterPage onNavigate={handleNavigate} />;
      case '/applications/concrete-materials':
        return <ConcreteMaterialsPage onNavigate={handleNavigate} />;
      case '/applications/resource-recovery':
        return <ResourceRecoveryPage onNavigate={handleNavigate} />;

      // Additional Approved Routes
      case '/projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/about/robert-richardson':
        return <FounderDetailPage onNavigate={handleNavigate} />;
      case '/insights':
        return <InsightsPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage initialTopic={contactTopic} onNavigateHome={handleNavigateHome} />;

      // Home Route (and fallback)
      case '/':
      default:
        return (
          <>
            <Hero
              onExploreTechnologies={() => handleNavigate('/technologies')}
              onAboutPrdd={() => handleNavigate('/about')}
            />
            <Introduction onLearnMore={() => handleNavigate('/about')} />

            {/* Core Technologies Editorial Overview */}
            <section className="py-24 sm:py-32 bg-[#071B2D] text-white border-t border-[#2F6F9F]/20 relative tech-grid-pattern">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#2F6F9F]/30">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89B3D3] mb-3">
                      <span className="w-1.5 h-1.5 bg-[#6D9F45]" />
                      <span>PRDD TECHNOLOGY PLATFORM</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                      Patented Chemical &amp;<br />
                      <span className="text-[#89B3D3] font-light">Environmental Processes</span>
                    </h2>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleNavigate('/technologies')}
                      className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#DCE8EF] hover:text-[#89B3D3] transition-colors group cursor-pointer"
                    >
                      <span>View All Technologies</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  {TECHNOLOGIES_DATA.map((tech) => (
                    <div
                      key={tech.id}
                      onClick={() => handleNavigate(`/technologies/${tech.id}`)}
                      className="group bg-[#0c263f] border border-[#2F6F9F]/30 hover:border-[#2F6F9F] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
                    >
                      <div className="relative aspect-16/10 overflow-hidden bg-[#071B2D]">
                        <PrddImage
                          src={tech.image}
                          alt={tech.title}
                          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 filter brightness-90 contrast-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c263f] via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-[#071B2D]/85 border border-[#2F6F9F]/60 text-xs font-mono text-[#DCE8EF]">
                          {tech.number}
                        </div>
                      </div>

                      <div className="p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#89B3D3] transition-colors mb-3">
                            {tech.title}
                          </h3>
                          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                            {tech.summary}
                          </p>

                          <div className="mb-6 pt-4 border-t border-[#2F6F9F]/20">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#89B3D3] block mb-2">
                              Commercial Outputs
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {tech.commercialOutputs.slice(0, 3).map((output, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs font-mono px-2.5 py-1 bg-[#071B2D] border border-[#2F6F9F]/40 text-[#DCE8EF]"
                                >
                                  {output}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#2F6F9F]/20 flex items-center justify-between text-xs font-mono text-[#DCE8EF] group-hover:text-white">
                          <span>Explore Technology Specification</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#89B3D3]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Applications Overview Strip */}
            <section className="py-20 sm:py-28 bg-[#F7F7F3] text-[#20262B] border-t border-[#DCE8EF]">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#DCE8EF]">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#123A63] font-semibold mb-2">
                      <span className="w-2.5 h-0.5 bg-[#6D9F45]" />
                      <span>CROSS-SECTOR APPLICATION</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123A63]">
                      Industrial Application Areas
                    </h2>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleNavigate('/applications')}
                      className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#123A63] hover:text-[#2F6F9F] transition-colors group cursor-pointer"
                    >
                      <span>Explore All Applications</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {APPLICATIONS_DATA.map((app) => (
                    <div
                      key={app.id}
                      onClick={() => handleNavigate(`/applications/${app.id}`)}
                      className="p-6 bg-white border border-[#DCE8EF] hover:border-[#2F6F9F] transition-all cursor-pointer group flex flex-col justify-between shadow-sm"
                    >
                      <div>
                        <div className="text-[11px] font-mono text-[#2F6F9F] uppercase mb-2">
                          AREA {app.number}
                        </div>
                        <h3 className="font-display text-lg font-bold text-[#123A63] group-hover:text-[#2F6F9F] transition-colors mb-3">
                          {app.title}
                        </h3>
                        <p className="text-xs text-[#20262B]/80 leading-relaxed mb-6">
                          {app.summary}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-[#DCE8EF] flex items-center justify-between text-xs font-mono text-[#123A63] group-hover:text-[#2F6F9F]">
                        <span>View Sector Detail</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Founder onMeetFounder={() => handleNavigate('/about/robert-richardson')} />
            <CTASection onDiscussProject={() => handleNavigate('/contact')} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071B2D] text-[#F7F7F3] selection:bg-[#2F6F9F]/35 selection:text-white">
      <Header
        onOpenContact={() => handleOpenContact()}
        onSelectTechnology={handleSelectTechnology}
        currentPath={currentPath}
        onNavigateHome={handleNavigateHome}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      <Footer
        onOpenContact={() => handleOpenContact()}
        onSelectTechnology={handleSelectTechnology}
        currentPath={currentPath}
        onNavigateHome={handleNavigateHome}
        onNavigate={handleNavigate}
      />

      {/* Interactive Global Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialTopic={contactTopic}
      />

      <FounderModal
        isOpen={isFounderModalOpen}
        onClose={() => setIsFounderModalOpen(false)}
        onDiscussProject={() => {
          setIsFounderModalOpen(false);
          handleOpenContact('Founder Inquiry');
        }}
      />
    </div>
  );
}
