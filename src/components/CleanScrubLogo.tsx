import React from 'react';

interface CleanScrubLogoProps {
  className?: string;
  showWordmark?: boolean;
  emblemOnly?: boolean;
}

export const CleanScrubLogo: React.FC<CleanScrubLogoProps> = ({
  className = '',
  showWordmark = true,
  emblemOnly = false,
}) => {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Authentic CST Water Droplet & Leaf Emblem */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 drop-shadow-md transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cstBlueGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A3E8" />
            <stop offset="40%" stopColor="#0088CD" />
            <stop offset="100%" stopColor="#006DAE" />
          </linearGradient>
          <linearGradient id="cstGreenGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#56C329" />
            <stop offset="50%" stopColor="#43A047" />
            <stop offset="100%" stopColor="#2E881B" />
          </linearGradient>
          <filter id="cstEmblemGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        <g filter="url(#cstEmblemGlow)">
          {/* Blue Water Droplet Outer Shell & Body */}
          <path
            d="M 50 4
               C 44 14, 14 42, 10 64
               C 6 80, 18 94, 38 97
               C 24 90, 18 78, 18 64
               C 18 48, 30 30, 48 14
               C 49 10, 50 6, 50 4 Z"
            fill="url(#cstBlueGradIcon)"
          />

          {/* Blue Droplet Core & Leaf Stem/Vein */}
          <path
            d="M 50 4
               C 46 12, 36 26, 32 40
               C 28 54, 28 66, 34 80
               C 38 88, 44 94, 50 96
               C 42 90, 38 82, 38 70
               C 38 56, 42 42, 48 26
               C 49 18, 50 10, 50 4 Z"
            fill="url(#cstBlueGradIcon)"
          />

          {/* Green Leaf Body (Right Droplet Side) */}
          <path
            d="M 50 4
               C 56 14, 72 26, 80 40
               C 90 54, 92 70, 88 84
               C 84 94, 72 99, 54 99
               C 42 99, 32 94, 28 88
               C 38 94, 52 95, 66 90
               C 80 84, 86 72, 86 58
               C 86 44, 76 28, 64 16
               C 58 10, 52 6, 50 4 Z"
            fill="url(#cstGreenGradIcon)"
          />

          {/* Green Leaf Inner Field */}
          <path
            d="M 60 28
               C 74 44, 84 56, 84 70
               C 84 82, 74 92, 58 96
               C 46 98, 36 94, 32 88
               C 44 93, 58 92, 68 85
               C 78 78, 80 66, 78 54
               C 76 42, 68 32, 60 28 Z"
            fill="url(#cstGreenGrad)"
          />

          {/* Left White Leaf Blade / Swoop */}
          <path
            d="M 24 84
               C 20 72, 24 58, 32 46
               C 40 34, 48 20, 50 12
               C 48 20, 42 34, 36 48
               C 30 62, 28 74, 30 84
               C 28 85, 26 85, 24 84 Z"
            fill="#FFFFFF"
          />

          {/* Right White Leaf Blade / Swoop */}
          <path
            d="M 32 86
               C 32 74, 38 60, 48 48
               C 58 36, 68 22, 72 14
               C 66 22, 56 36, 48 48
               C 40 60, 38 72, 38 82
               C 36 85, 34 86, 32 86 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>

      {/* Brand Wordmark matching uploaded logo */}
      {showWordmark && !emblemOnly && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-display text-base sm:text-lg font-black tracking-[-0.01em] text-[#008CD7] group-hover:text-[#2BB7F6] transition-colors leading-[1.05]">
            CLEAN SCRUB
          </span>
          <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#4BB532] group-hover:text-[#5FD843] transition-colors uppercase leading-[1.1] mt-0.5">
            TECHNOLOGIES
          </span>
        </div>
      )}
    </div>
  );
};
