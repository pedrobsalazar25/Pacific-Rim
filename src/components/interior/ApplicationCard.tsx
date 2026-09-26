import React from 'react';
import { ArrowRight, Layers, Building2 } from 'lucide-react';
import { ApplicationItem } from '../../data/prddData';

interface ApplicationCardProps {
  application: ApplicationItem;
  onSelect: (app: ApplicationItem) => void;
  theme?: 'dark' | 'light';
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({
  application,
  onSelect,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      onClick={() => onSelect(application)}
      className={`group cursor-pointer border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isDark
          ? 'bg-[#0c263f] border-[#2F6F9F]/30 hover:border-[#2F6F9F] shadow-xl hover:-translate-y-1'
          : 'bg-white border-[#DCE8EF] hover:border-[#2F6F9F] shadow-md hover:-translate-y-1'
      }`}
    >
      <div>
        {/* Card Header Media */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#071B2D]">
          <img
            src={application.image}
            alt={application.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter saturate-90 brightness-95"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-transparent to-transparent opacity-80" />
          <div className="absolute top-3 left-3 bg-[#071B2D]/90 border border-[#2F6F9F]/50 px-2.5 py-1 text-xs font-mono font-bold text-[#DCE8EF]">
            AREA {application.number}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3
            className={`font-display text-xl font-bold tracking-tight mb-2 group-hover:text-[#DCE8EF] transition-colors ${
              isDark ? 'text-white' : 'text-[#123A63]'
            }`}
          >
            {application.title}
          </h3>

          <p
            className={`text-xs font-mono mb-3 ${
              isDark ? 'text-[#89B3D3]' : 'text-[#2F6F9F]'
            }`}
          >
            {application.subtitle}
          </p>

          <p
            className={`text-sm leading-relaxed mb-5 ${
              isDark ? 'text-slate-300' : 'text-[#20262B]'
            }`}
          >
            {application.summary}
          </p>

          {/* Key Sectors */}
          <div className="pt-4 border-t border-white/10">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Building2 className="w-3 h-3 text-[#2F6F9F]" />
              <span>Target Sectors:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {application.industrialSectors.slice(0, 3).map((sec, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[11px] font-mono bg-[#123A63]/50 border border-[#2F6F9F]/30 text-slate-200"
                >
                  {sec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="p-4 px-6 bg-[#071B2D]/70 border-t border-[#2F6F9F]/20 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider text-[#89B3D3] group-hover:text-white transition-colors">
          Explore Application
        </span>
        <ArrowRight className="w-4 h-4 text-[#2F6F9F] group-hover:text-[#DCE8EF] group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};
