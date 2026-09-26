import React from 'react';
import { APPLICATIONS_DATA } from '../data/prddData';
import { InteriorHero } from '../components/interior/InteriorHero';
import { SectionIntro } from '../components/interior/SectionIntro';
import { ApplicationCard } from '../components/interior/ApplicationCard';
import { PageCTA } from '../components/interior/PageCTA';

interface ApplicationsPageProps {
  onNavigate: (path: string, topic?: string) => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="bg-[#071B2D] text-white">
      {/* Interior Hero */}
      <InteriorHero
        category="PRDD APPLICATIONS"
        title="Environmental Engineering"
        headlineAccent="Applied Industrial Solutions."
        description="PRDD develops environmental processes that address complex industrial problems through chemistry, engineering and practical implementation."
        badgeText="INDUSTRIAL APPLICATIONS"
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('/') },
          { label: 'Applications' }
        ]}
      />

      {/* Applications Grid Presentation */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="APPLICATION AREAS"
          title="Practical Engineering for Industrial Operations"
          description="Explore PRDD's primary application areas across emissions, water treatment, materials, and resource recovery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {APPLICATIONS_DATA.map((app) => (
            <ApplicationCard
              key={app.id}
              application={app}
              onSelect={(selected) => onNavigate(`/applications/${selected.id}`)}
            />
          ))}
        </div>
      </section>

      {/* Page CTA */}
      <PageCTA
        eyebrow="APPLICATION INQUIRIES"
        title="Discuss Your Environmental Challenge"
        description="Whether facing an emissions, water treatment, process engineering, or environmental technology challenge, start a conversation with PRDD."
        buttonText="START A CONVERSATION →"
        onAction={() => onNavigate('/contact', 'Application Discussion')}
        secondaryAction={{
          text: 'VIEW TECHNOLOGIES',
          onClick: () => onNavigate('/technologies')
        }}
      />
    </div>
  );
};
