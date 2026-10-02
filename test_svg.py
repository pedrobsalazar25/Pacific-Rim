svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 100" fill="none" aria-label="Clean Scrub Technologies Logo">
  <defs>
    <linearGradient id="cstBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0090D8" />
      <stop offset="100%" stop-color="#0077BE" />
    </linearGradient>
    <linearGradient id="cstGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4CB82D" />
      <stop offset="100%" stop-color="#35981E" />
    </linearGradient>
    <filter id="cstShadow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Droplet & Leaf Emblem -->
  <g filter="url(#cstShadow)" transform="translate(6, 2)">
    <!-- Blue Water Droplet Outer Shell & Body -->
    <path
      d="M 44 4
         C 40 12, 16 38, 12 58
         C 8 74, 18 90, 34 94
         C 22 88, 18 76, 18 62
         C 18 46, 28 30, 42 16
         C 44 12, 44 8, 44 4 Z"
      fill="url(#cstBlueGrad)"
    />
    
    <!-- Blue Droplet Upper Cap & Vein -->
    <path
      d="M 44 4
         C 40 10, 32 22, 28 34
         C 24 46, 24 58, 28 72
         C 30 78, 33 84, 38 88
         C 32 82, 30 74, 30 64
         C 30 52, 34 40, 40 28
         C 43 20, 44 12, 44 4 Z"
      fill="url(#cstBlueGrad)"
    />
    
    <!-- Blue Stem / Vein cutting into center -->
    <path
      d="M 44 4
         C 44 14, 40 26, 36 38
         C 32 50, 30 62, 34 76
         C 33 74, 31 64, 34 52
         C 36 40, 41 24, 44 4 Z"
      fill="url(#cstBlueGrad)"
    />

    <!-- Green Leaf Body (Right Droplet Side) -->
    <path
      d="M 44 4
         C 48 12, 60 22, 68 34
         C 78 48, 82 62, 80 76
         C 78 88, 68 96, 52 97
         C 40 98, 30 94, 26 88
         C 34 93, 46 94, 58 90
         C 70 85, 76 74, 76 62
         C 76 48, 68 34, 58 22
         C 52 14, 46 8, 44 4 Z"
      fill="url(#cstGreenGrad)"
    />
    
    <!-- Green Leaf Inner Field -->
    <path
      d="M 52 28
         C 64 42, 74 54, 74 68
         C 74 80, 66 90, 52 94
         C 42 96, 34 92, 30 86
         C 40 91, 52 90, 60 84
         C 68 78, 70 68, 68 56
         C 66 44, 58 34, 52 28 Z"
      fill="url(#cstGreenGrad)"
    />

    <!-- Left White Leaf Blade / Swoop -->
    <path
      d="M 22 84
         C 18 72, 22 58, 28 46
         C 34 34, 40 22, 44 14
         C 42 22, 36 36, 32 48
         C 28 60, 26 72, 28 82
         C 26 84, 24 84, 22 84 Z"
      fill="#FFFFFF"
    />

    <!-- Right White Leaf Blade / Swoop -->
    <path
      d="M 28 86
         C 28 74, 34 60, 42 48
         C 50 36, 58 24, 62 16
         C 58 24, 48 38, 42 50
         C 36 62, 34 74, 34 84
         C 32 86, 30 86, 28 86 Z"
      fill="#FFFFFF"
    />
  </g>

  <!-- Typography: Wordmark matching uploaded logo -->
  <text
    x="108"
    y="53"
    font-family="'Plus Jakarta Sans', 'Montserrat', 'Inter', -apple-system, sans-serif"
    font-weight="900"
    font-size="46"
    letter-spacing="-0.02em"
    fill="#0084CD"
  >CLEAN SCRUB</text>

  <text
    x="109"
    y="87"
    font-family="'Plus Jakarta Sans', 'Montserrat', 'Inter', -apple-system, sans-serif"
    font-weight="700"
    font-size="28"
    textLength="316"
    lengthAdjust="spacing"
    fill="#43A047"
  >TECHNOLOGIES</text>
</svg>'''

with open('public/images/clean-scrub-logo.svg', 'w') as f:
    f.write(svg_content)
print("Updated public/images/clean-scrub-logo.svg")
