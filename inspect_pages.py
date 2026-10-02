import os, re

files = [
    'src/pages/CO2CapturePage.tsx',
    'src/pages/NoxSoxPage.tsx',
    'src/pages/WaterTreatmentPage.tsx',
    'src/pages/AdvancedMaterialsPage.tsx',
    'src/pages/ApplicationsPage.tsx',
    'src/pages/AboutPage.tsx',
    'src/pages/FounderDetailPage.tsx',
    'src/pages/ProjectsPage.tsx',
    'src/pages/InsightsPage.tsx',
    'src/pages/ConcreteMaterialsPage.tsx',
    'src/pages/IndustrialEmissionsPage.tsx',
    'src/pages/ResourceRecoveryPage.tsx',
    'src/pages/WaterWastewaterPage.tsx'
]

for p in files:
    if os.path.exists(p):
        with open(p) as f:
            content = f.read()
            # check hero div
            hero_match = re.search(r'<div className=\"relative[^>]*min-h-\[[^>]*>', content)
            hero_rounded = 'rounded' in (hero_match.group(0) if hero_match else '')
            # check total rounded-none
            rn_count = len(re.findall(r'rounded-none', content))
            print(f"{p}: Hero rounded={hero_rounded}, rounded-none={rn_count}")
