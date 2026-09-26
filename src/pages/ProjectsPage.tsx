import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { DETAILED_PROJECTS, DetailedProject } from '../data/prddData';
import { InteriorHero } from '../components/interior/InteriorHero';
import { SectionIntro } from '../components/interior/SectionIntro';
import { ProjectCard } from '../components/interior/ProjectCard';
import { PageCTA } from '../components/interior/PageCTA';

interface ProjectsPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');

  const sectors = [
    'All',
    'Industrial Manufacturing',
    'Aerospace & Marine Operations',
    'Municipal Sanitation & Water',
    'Municipal Public Works',
    'Energy & Industrial Operations'
  ];

  const filteredProjects = selectedSector === 'All'
    ? DETAILED_PROJECTS
    : DETAILED_PROJECTS.filter((p) => p.sector.includes(selectedSector));

  return (
    <div className="bg-[#071B2D] text-white">
      {/* Interior Hero with Breadcrumbs */}
      <InteriorHero
        category="TRACK RECORD & VALIDATION"
        title="Selected Project Experience"
        headlineAccent="Demonstrated Industrial Performance."
        description="A record of engineering execution, process support, and project experience across municipal and industrial organizations."
        badgeText="SELECTED PROJECT EXPERIENCE"
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('/') },
          { label: 'Projects' }
        ]}
      />

      {/* Main Showcase Section */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionIntro
            eyebrow="PROJECT EXPERIENCE"
            title="Selected Client &amp; Organizational Experience"
            description="Verified project experience across industrial manufacturing, municipal utilities, marine operations, and resource facilities."
          />

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 pb-2">
            <span className="text-xs font-mono text-[#89B3D3] uppercase mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>
            {sectors.map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => setSelectedSector(sec)}
                className={`px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                  selectedSector === sec
                    ? 'bg-[#123A63] border border-[#2F6F9F] text-white shadow-sm'
                    : 'bg-[#0c263f]/60 border border-white/10 text-slate-300 hover:text-white hover:border-white/25'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDiscuss={(name) => onNavigate('/contact', `Inquiry regarding ${name} Experience`)}
            />
          ))}
        </div>
      </section>

      {/* Page CTA */}
      <PageCTA
        eyebrow="PROJECT INQUIRIES"
        title="Discuss Your Environmental or Process Challenge"
        description="Connect with PRDD to evaluate technical feasibility, project scope, and engineering requirements."
        buttonText="START PROJECT DISCUSSION →"
        onAction={() => onNavigate('/contact', 'Project Consultation')}
        secondaryAction={{
          text: 'EXPLORE TECHNOLOGIES',
          onClick: () => onNavigate('/technologies')
        }}
      />
    </div>
  );
};
