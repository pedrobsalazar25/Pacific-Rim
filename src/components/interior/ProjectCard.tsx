import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { DetailedProject } from '../../data/prddData';

interface ProjectCardProps {
  project: DetailedProject;
  onDiscuss?: (projectName: string) => void;
  theme?: 'dark' | 'light';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onDiscuss,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        isDark
          ? 'bg-[#0c263f] border-[#2F6F9F]/30 hover:border-[#2F6F9F] shadow-xl'
          : 'bg-white border-[#DCE8EF] hover:border-[#2F6F9F] shadow-md'
      }`}
    >
      <div>
        {/* Top Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#89B3D3]">
            <Building2 className="w-3.5 h-3.5 text-[#2F6F9F]" />
            <span>{project.sector}</span>
          </div>
          <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-[#123A63] border border-[#2F6F9F]/40 text-[#DCE8EF]">
            SELECTED EXPERIENCE
          </span>
        </div>

        {/* Project / Client Name */}
        <h3
          className={`font-display text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
            isDark ? 'text-white' : 'text-[#123A63]'
          }`}
        >
          {project.name}
        </h3>

        {/* Factual Scope */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {project.scope}
        </p>

        {project.challenge && (
          <div className="p-3 bg-[#071B2D]/80 border border-white/5 mb-3 text-xs sm:text-sm text-slate-300">
            {project.challenge}
          </div>
        )}
      </div>

      {/* Footer Tags & Discuss Button */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.technologiesUsed && project.technologiesUsed.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 bg-[#071B2D] border border-[#2F6F9F]/30 text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        {onDiscuss && (
          <button
            type="button"
            onClick={() => onDiscuss(project.name)}
            className="text-xs font-mono uppercase tracking-wider text-[#89B3D3] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer ml-auto"
          >
            <span>Discuss Experience</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
