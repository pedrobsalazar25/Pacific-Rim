/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Technologies } from './components/Technologies';
import { Approach } from './components/Approach';
import { FeaturedCO2 } from './components/FeaturedCO2';
import { Experience } from './components/Experience';
import { Founder } from './components/Founder';
import { Commercialization } from './components/Commercialization';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { TechModal } from './components/TechModal';
import { FounderModal } from './components/FounderModal';
import { ContactPage } from './components/ContactPage';

// Interior Multi-Page Views
import { TechnologiesPage } from './pages/TechnologiesPage';
import { TechnologyDetailPage } from './pages/TechnologyDetailPage';
import { CO2CapturePage } from './pages/CO2CapturePage';
import { NoxSoxPage } from './pages/NoxSoxPage';
import { WaterTreatmentPage } from './pages/WaterTreatmentPage';
import { AdvancedMaterialsPage } from './pages/AdvancedMaterialsPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ApplicationDetailPage } from './pages/ApplicationDetailPage';
import { IndustrialEmissionsPage } from './pages/IndustrialEmissionsPage';
import { WaterWastewaterPage } from './pages/WaterWastewaterPage';
import { ConcreteMaterialsPage } from './pages/ConcreteMaterialsPage';
import { ResourceRecoveryPage } from './pages/ResourceRecoveryPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { FounderDetailPage } from './pages/FounderDetailPage';
import { InsightsPage } from './pages/InsightsPage';

import { TechnologyItem } from './data/prddData';

export default function App() {
  const [selectedTech, setSelectedTech] = useState<TechnologyItem | null>(null);
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const [contactInitialTopic, setContactInitialTopic] = useState<string>('');

  // Client-side router path state
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Listen to browser navigation (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Centralized navigation handler
  const navigateTo = (path: string, topic?: string, hash?: string) => {
    if (topic) {
      setContactInitialTopic(topic);
    }
    const targetUrl = path + (hash ? `#${hash}` : '');
    if (window.location.pathname !== path || (hash && window.location.hash !== `#${hash}`)) {
      window.history.pushState({}, '', targetUrl);
    }
    setCurrentPath(path);

    if (path === '/') {
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentPath !== '/') {
      navigateTo('/', undefined, sectionId);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Route Resolution
  const renderCurrentView = () => {
    // 1. Contact Page
    if (currentPath === '/contact') {
      return (
        <ContactPage
          initialTopic={contactInitialTopic}
          onNavigateHome={(hash) => navigateTo('/', undefined, hash)}
        />
      );
    }

    // 2. Technologies Landing Page
    if (currentPath === '/technologies') {
      return (
        <TechnologiesPage
          onNavigate={navigateTo}
          onOpenTechModal={(tech) => setSelectedTech(tech)}
        />
      );
    }

    // 3. Technology Detail Pages: /technologies/:id
    if (currentPath.startsWith('/technologies/')) {
      const techId = currentPath.replace('/technologies/', '');
      if (techId === 'co2-capture') {
        return (
          <CO2CapturePage
            onNavigate={navigateTo}
          />
        );
      }
      if (techId === 'nox-sox') {
        return (
          <NoxSoxPage
            onNavigate={navigateTo}
          />
        );
      }
      if (techId === 'water-treatment') {
        return (
          <WaterTreatmentPage
            onNavigate={navigateTo}
          />
        );
      }
      if (techId === 'advanced-materials') {
        return (
          <AdvancedMaterialsPage
            onNavigate={navigateTo}
          />
        );
      }
      return (
        <TechnologyDetailPage
          techId={techId}
          onNavigate={navigateTo}
        />
      );
    }

    // 4. Applications Landing Page
    if (currentPath === '/applications') {
      return (
        <ApplicationsPage
          onNavigate={navigateTo}
        />
      );
    }

    // 5. Application Detail Pages: /applications/:id
    if (currentPath.startsWith('/applications/')) {
      const appId = currentPath.replace('/applications/', '');
      if (appId === 'industrial-emissions') {
        return (
          <IndustrialEmissionsPage
            onNavigate={navigateTo}
          />
        );
      }
      if (appId === 'water-wastewater') {
        return (
          <WaterWastewaterPage
            onNavigate={navigateTo}
          />
        );
      }
      if (appId === 'concrete-materials') {
        return (
          <ConcreteMaterialsPage
            onNavigate={navigateTo}
          />
        );
      }
      if (appId === 'resource-recovery') {
        return (
          <ResourceRecoveryPage
            onNavigate={navigateTo}
          />
        );
      }
      return (
        <ApplicationDetailPage
          appId={appId}
          onNavigate={navigateTo}
        />
      );
    }

    // 6. Projects Page
    if (currentPath === '/projects') {
      return (
        <ProjectsPage
          onNavigate={navigateTo}
        />
      );
    }

    // 7. Founder Detail Page: /about/robert-richardson
    if (currentPath === '/about/robert-richardson') {
      return (
        <FounderDetailPage
          onNavigate={navigateTo}
        />
      );
    }

    // 8. About Landing Page: /about
    if (currentPath === '/about') {
      return (
        <AboutPage
          onNavigate={navigateTo}
        />
      );
    }

    // 9. Insights Page: /insights
    if (currentPath === '/insights') {
      return (
        <InsightsPage
          onNavigate={navigateTo}
        />
      );
    }

    // Default: Full Homepage Experience (Preserved completely intact!)
    return (
      <>
        {/* Section 1: Hero */}
        <Hero
          onExploreTechnologies={() => handleScrollToSection('technologies')}
          onAboutPrdd={() => setIsFounderModalOpen(true)}
        />

        {/* Section 2: Introduction / Brand Statement */}
        <Introduction
          onLearnMore={() => handleScrollToSection('approach')}
        />

        {/* Section 3: Technologies Presentation */}
        <Technologies
          onSelectTechnology={(tech) => setSelectedTech(tech)}
        />

        {/* Section 4: The PRDD Approach */}
        <Approach />

        {/* Section 5: Featured CO2 Technology */}
        <FeaturedCO2
          onExploreCO2={(tech) => setSelectedTech(tech)}
        />

        {/* Section 6: Proven Experience & Project Credibility */}
        <Experience />

        {/* Section 7: Founder & President Profile */}
        <Founder
          onMeetFounder={() => setIsFounderModalOpen(true)}
        />

        {/* Section 8: Commercialization Pathway */}
        <Commercialization
          onDiscussProject={() => navigateTo('/contact', 'Commercial Pilot Assessment')}
        />

        {/* Section 9: Final Dramatic Call to Action */}
        <CTASection
          onDiscussProject={() => navigateTo('/contact', 'Environmental Challenge Consultation')}
        />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#071B2D] text-[#F7F7F3] flex flex-col font-sans selection:bg-[#2F6F9F]/35 selection:text-white">
      {/* Primary Sticky Header with Multi-Route Awareness & Dropdowns */}
      <Header
        currentPath={currentPath}
        onNavigateHome={(hash) => navigateTo('/', undefined, hash)}
        onNavigate={(path, hash) => navigateTo(path, undefined, hash)}
        onOpenContact={() => navigateTo('/contact')}
        onSelectTechnology={(tech) => setSelectedTech(tech)}
      />

      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Primary Architectural Footer (Reused identically across all routes) */}
      <Footer
        currentPath={currentPath}
        onNavigateHome={(hash) => navigateTo('/', undefined, hash)}
        onNavigate={(path, hash) => navigateTo(path, undefined, hash)}
        onOpenContact={() => navigateTo('/contact')}
        onSelectTechnology={(tech) => setSelectedTech(tech)}
      />

      {/* Interactive Modals */}
      <TechModal
        technology={selectedTech}
        onClose={() => setSelectedTech(null)}
        onDiscussTech={(techTitle) => {
          setSelectedTech(null);
          navigateTo('/contact', techTitle);
        }}
      />

      <FounderModal
        isOpen={isFounderModalOpen}
        onClose={() => setIsFounderModalOpen(false)}
        onDiscussProject={() => {
          setIsFounderModalOpen(false);
          navigateTo('/contact', 'Executive Technical Discussion');
        }}
      />
    </div>
  );
}
