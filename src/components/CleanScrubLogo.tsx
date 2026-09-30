import React from 'react';

interface CleanScrubLogoProps {
  className?: string;
}

export const CleanScrubLogo: React.FC<CleanScrubLogoProps> = ({
  className = 'h-9 w-auto'
}) => {
  return (
    <svg
      viewBox="0 0 460 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-label="Clean Scrub Technologies"
      role="img"
    >
      <defs>
        {/* Blue Water Droplet Gradient */}
        <linearGradient id="cstBlueGrad" x1="10%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#009CDC" />
          <stop offset="45%" stopColor="#0084CD" />
          <stop offset="100%" stopColor="#005B9A" />
        </linearGradient>

        {/* Green Eco Leaf Gradient */}
        <linearGradient id="cstGreenGrad" x1="15%" y1="10%" x2="85%" y2="95%">
          <stop offset="0%" stopColor="#54BA26" />
          <stop offset="50%" stopColor="#43A047" />
          <stop offset="100%" stopColor="#2E881B" />
        </linearGradient>

        {/* Subtle Drop Shadow for High Contrast on Dark Backgrounds */}
        <filter id="cstShadow" x="-15%" y="-15%" width="130%" height="130%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Emblem: Droplet + White Leaf + Eco Arc */}
      <g filter="url(#cstShadow)" transform="translate(6, 2)">
        {/* Blue Droplet (Apex and Left Arc) */}
        <path
          d="M 44 4
             C 41 10, 26 24, 16 40
             C 6 56, 6 70, 11 80
             C 16 88, 24 93, 34 94
             C 26 89, 21 80, 20 68
             C 19 56, 24 45, 31 35
             C 36 28, 41 18, 44 4 Z"
          fill="url(#cstBlueGrad)"
        />

        {/* Main Blue Body */}
        <path
          d="M 44 4
             C 32 18, 12 36, 10 56
             C 8 72, 18 88, 33 93
             C 39 95, 45 94, 49 92
             C 34 88, 25 77, 25 64
             C 25 50, 32 39, 40 28
             C 42 24, 43 14, 44 4 Z"
          fill="url(#cstBlueGrad)"
        />

        {/* Green Leaf / Right Droplet Flank */}
        <path
          d="M 44 4
             C 49 14, 57 24, 65 33
             C 75 44, 84 56, 84 69
             C 84 82, 75 92, 62 96
             C 50 99, 37 96, 28 90
             C 38 95, 50 95, 60 92
             C 71 87, 78 77, 78 65
             C 78 54, 71 43, 63 34
             C 57 26, 49 16, 44 4 Z"
          fill="url(#cstGreenGrad)"
        />

        {/* Green Fill Body */}
        <path
          d="M 50 35
             C 63 47, 79 58, 79 71
             C 79 82, 70 91, 57 95
             C 46 98, 34 95, 27 88
             C 37 93, 49 94, 58 91
             C 68 86, 74 77, 74 66
             C 74 56, 66 46, 56 38
             C 53 36, 51 36, 50 35 Z"
          fill="url(#cstGreenGrad)"
        />

        {/* Crisp White Inner Leaf Silhouette */}
        <path
          d="M 22 84
             C 20 72, 25 59, 33 47
             C 41 35, 52 25, 62 16
             C 58 24, 50 35, 43 46
             C 36 58, 31 71, 29 83
             C 26 85, 23 85, 22 84 Z"
          fill="#FFFFFF"
        />
        <path
          d="M 24 81
             C 23 71, 28 59, 35 49
             C 42 39, 51 29, 60 21
             C 56 28, 49 38, 43 48
             C 37 58, 33 70, 31 80
             C 28 82, 25 82, 24 81 Z"
          fill="#FFFFFF"
          opacity="0.95"
        />
      </g>

      {/* Typography: Wordmark matching the uploaded logo */}
      {/* Line 1: CLEAN SCRUB */}
      <text
        x="108"
        y="53"
        fontFamily="'Plus Jakarta Sans', 'Montserrat', 'Inter', -apple-system, sans-serif"
        fontWeight="900"
        fontSize="46"
        letterSpacing="-0.02em"
        fill="#0084CD"
      >
        CLEAN SCRUB
      </text>

      {/* Line 2: TECHNOLOGIES */}
      <text
        x="109"
        y="87"
        fontFamily="'Plus Jakarta Sans', 'Montserrat', 'Inter', -apple-system, sans-serif"
        fontWeight="700"
        fontSize="28"
        textLength="316"
        lengthAdjust="spacing"
        fill="#43A047"
      >
        TECHNOLOGIES
      </text>
    </svg>
  );
};
