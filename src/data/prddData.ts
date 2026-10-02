/**
 * CST Brand & Technology Data Registry
 * Clean Scrub Technologies
 * Verified source content only.
 */

// Image Assets - Production-safe root-relative paths from /public
export const PRDD_IMAGES = {
  hero: '/images/prdd/hero/prdd-hero-industrial.jpg',
  co2Capture: '/images/prdd/technologies/prdd-tech-co2-capture.jpg',
  noxSox: '/images/prdd/technologies/prdd-tech-nox-sox.jpg',
  waterTreatment: '/images/prdd/technologies/prdd-tech-water-treatment.jpg',
  advancedMaterials: '/images/prdd/technologies/prdd-tech-advanced-materials.jpg',
  approachLab: '/images/prdd/technologies/prdd-approach-laboratory.jpg',
  founder: '/images/prdd/people/prdd-founder-portrait.jpg',
  finalCta: '/images/prdd/backgrounds/prdd-final-cta.jpg',
} as const;

export interface TechnologyItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  image: string;
  aspectRatio: string;
  chemicalPathway: string;
  industrialFeedstock: string;
  commercialOutputs: string[];
  keyHighlights: string[];
  equipmentFocus: string;
  detailedOverview?: string;
  applications?: { title: string; route: string; desc: string }[];
}

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  {
    id: 'co2-capture',
    number: '01',
    title: 'CO₂ CAPTURE & REPURPOSING',
    summary: 'Capture CO₂ and convert it into useful carbonate and bicarbonate products.',
    image: PRDD_IMAGES.co2Capture,
    aspectRatio: 'aspect-4/3',
    chemicalPathway: 'Processes that capture CO₂ emissions and convert them into valuable commercial products, with sodium carbonate also usable to produce calcium carbonate.',
    industrialFeedstock: 'Industrial emissions and flue gas streams.',
    commercialOutputs: ['Sodium Carbonate (Na₂CO₃)', 'Sodium Bicarbonate (NaHCO₃)', 'Hydrochloric Acid (HCl)', 'Calcium Carbonate'],
    keyHighlights: [
      'Converts captured CO₂ into commercially useful carbonate and bicarbonate products',
      'Calcium carbonate can also be produced from sodium carbonate',
      'Engineered to transform waste streams into commercially viable resources'
    ],
    equipmentFocus: 'Industrial gas capture and chemical conversion process equipment.',
    detailedOverview: 'CST develops chemical processes designed to capture CO₂ emissions from industrial flue gases and convert the gas into useful carbonate and bicarbonate products, with sodium carbonate also usable to produce calcium carbonate.',
    applications: [
      { title: 'Industrial Emissions', route: '/applications/industrial-emissions', desc: 'Point-source emissions abatement for industrial facilities.' },
      { title: 'Concrete & Materials', route: '/applications/concrete-materials', desc: 'Processes involving concrete, geopolymer and CO₂-derived materials.' },
      { title: 'Resource Recovery', route: '/applications/resource-recovery', desc: 'Converting industrial emissions into useful commercial products.' }
    ]
  },
  {
    id: 'nox-sox',
    number: '02',
    title: 'NOx & SOx ABATEMENT',
    summary: 'Processes designed to remove harmful combustion emissions and convert pollutants into useful products.',
    image: PRDD_IMAGES.noxSox,
    aspectRatio: 'aspect-4/3',
    chemicalPathway: 'Chemical processes designed to remove combustion emissions and convert pollutants into useful products.',
    industrialFeedstock: 'Industrial combustion exhaust and flue gas streams.',
    commercialOutputs: ['Useful Commercial Products', 'Chemical Byproducts'],
    keyHighlights: [
      'Processes designed to remove harmful combustion emissions',
      'Converts pollutants into commercially useful products',
      'Engineered for demanding industrial plant environments'
    ],
    equipmentFocus: 'Industrial emission abatement and conversion equipment.',
    detailedOverview: 'CST develops chemical processes designed to remove harmful combustion emissions, including NOx and SOx, and convert pollutants into useful commercial products.',
    applications: [
      { title: 'Industrial Emissions', route: '/applications/industrial-emissions', desc: 'Emissions abatement for industrial combustion and plant operations.' },
      { title: 'Resource Recovery', route: '/applications/resource-recovery', desc: 'Converting emissions into useful products and chemical byproducts.' }
    ]
  },
  {
    id: 'water-treatment',
    number: '03',
    title: 'ADVANCED WATER TREATMENT',
    summary: 'Energy-efficient approaches to water reclamation and desalination.',
    image: PRDD_IMAGES.waterTreatment,
    aspectRatio: 'aspect-4/3',
    chemicalPathway: 'Energy-efficient approaches to water reclamation, mineral separation, and desalination.',
    industrialFeedstock: 'Industrial wastewater, municipal effluent, and saline water streams.',
    commercialOutputs: ['Reclaimed Water', 'Separated Mineral Products'],
    keyHighlights: [
      'Energy-efficient approaches to water reclamation',
      'Practical solutions for desalination and difficult water challenges',
      'Designed for industrial and municipal water applications'
    ],
    equipmentFocus: 'Water treatment, reclamation, and desalination process equipment.',
    detailedOverview: 'CST develops energy-efficient approaches to water reclamation, mineral separation, and desalination designed to address municipal and industrial water challenges.',
    applications: [
      { title: 'Water & Wastewater', route: '/applications/water-wastewater', desc: 'Water reclamation, desalination, and process water treatment.' },
      { title: 'Resource Recovery', route: '/applications/resource-recovery', desc: 'Separation and recovery of mineral products from water streams.' }
    ]
  },
  {
    id: 'advanced-materials',
    number: '04',
    title: 'ADVANCED MATERIALS',
    summary: 'Processes involving concrete, geopolymer and CO₂-derived materials.',
    image: PRDD_IMAGES.advancedMaterials,
    aspectRatio: 'aspect-4/3',
    chemicalPathway: 'Processes using CO₂-derived materials and proprietary methods for concrete and geopolymer applications.',
    industrialFeedstock: 'CO₂-derived materials and industrial mineral matrices.',
    commercialOutputs: ['Concrete Applications', 'Geopolymer Applications'],
    keyHighlights: [
      'Utilizes materials derived from captured CO₂',
      'Proprietary methods for concrete and geopolymer applications',
      'Bridges laboratory chemistry and physical construction materials'
    ],
    equipmentFocus: 'Materials processing and industrial application equipment.',
    detailedOverview: 'CST develops processes utilizing CO₂-derived materials and proprietary methods for concrete and geopolymer applications.',
    applications: [
      { title: 'Concrete & Materials', route: '/applications/concrete-materials', desc: 'Processes involving concrete, geopolymer and CO₂-derived materials.' },
      { title: 'CO₂ Capture & Repurposing', route: '/technologies/co2-capture', desc: 'Utilization of materials derived from captured CO₂.' }
    ]
  }
];

export interface ApplicationItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  challenge: string;
  solution: string;
  compatibleTechIds: string[];
  industrialSectors: string[];
  fieldOutcomes: string[];
  image: string;
}

export const APPLICATIONS_DATA: ApplicationItem[] = [
  {
    id: 'industrial-emissions',
    number: '01',
    title: 'Industrial Emissions',
    subtitle: 'Point-source emissions abatement and process solutions.',
    summary: 'Point-source emissions abatement for manufacturing, power generation, chemical plants, and heavy industrial facilities.',
    challenge: 'Industrial operations require dependable, effective systems to abate harmful combustion emissions and meet environmental standards.',
    solution: 'CST develops chemical processes and equipment designed to capture emissions and convert pollutants into useful products.',
    compatibleTechIds: ['co2-capture', 'nox-sox'],
    industrialSectors: ['Power Generation', 'Industrial Manufacturing', 'Chemical Plants', 'Industrial Boilers'],
    fieldOutcomes: [
      'Point-source emissions capture',
      'Conversion of emissions into useful products',
      'Engineered for plant operating environments'
    ],
    image: PRDD_IMAGES.hero
  },
  {
    id: 'water-wastewater',
    number: '02',
    title: 'Water & Wastewater',
    subtitle: 'Water reclamation, desalination, and process water treatment.',
    summary: 'Energy-efficient approaches to water reclamation, mineral separation, and desalination for municipal and industrial applications.',
    challenge: 'Municipalities and industrial operations face water treatment challenges requiring practical, energy-efficient solutions.',
    solution: 'CST develops energy-efficient chemical and process approaches to reclaim water and separate minerals from complex water streams.',
    compatibleTechIds: ['water-treatment'],
    industrialSectors: ['Municipal Wastewater', 'Industrial Process Water', 'Desalination Facilities'],
    fieldOutcomes: [
      'Energy-efficient water reclamation',
      'Separation of mineral products',
      'Practical solutions for challenging water streams'
    ],
    image: PRDD_IMAGES.waterTreatment
  },
  {
    id: 'concrete-materials',
    number: '03',
    title: 'Concrete & Materials',
    subtitle: 'Processes involving concrete, geopolymer and CO₂-derived materials.',
    summary: 'Practical methods utilizing CO₂-derived materials and proprietary approaches for concrete and geopolymer applications.',
    challenge: 'Materials and construction applications require practical approaches to utilizing captured emissions and mineral streams.',
    solution: 'CST bridges chemical research and physical materials, developing processes that integrate CO₂-derived materials into concrete and geopolymers.',
    compatibleTechIds: ['advanced-materials', 'co2-capture'],
    industrialSectors: ['Concrete Production', 'Materials Manufacturing', 'Construction Applications'],
    fieldOutcomes: [
      'Processes utilizing CO₂-derived materials',
      'Concrete and geopolymer applications',
      'Practical materials engineering'
    ],
    image: PRDD_IMAGES.advancedMaterials
  },
  {
    id: 'resource-recovery',
    number: '04',
    title: 'Resource Recovery',
    subtitle: 'Converting emissions and byproduct streams into useful products.',
    summary: 'Approaches to transforming industrial emissions, waste streams, and process effluents into commercially useful resources.',
    challenge: 'Industrial operations generate emission streams and process byproducts that are traditionally treated as disposal burdens.',
    solution: 'CST focuses on converting pollutants and waste streams into useful carbonate products, chemical byproducts, and reclaimed resources.',
    compatibleTechIds: ['co2-capture', 'nox-sox', 'water-treatment'],
    industrialSectors: ['Chemical Processing', 'Industrial Manufacturing', 'Resource Utilization'],
    fieldOutcomes: [
      'Conversion of pollutants into useful products',
      'Transformation of waste streams into resources',
      'Commercially oriented process solutions'
    ],
    image: PRDD_IMAGES.approachLab
  }
];

export interface DetailedProject {
  id: string;
  name: string;
  sector: string;
  location?: string;
  scope: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  technologiesUsed?: string[];
}

// Verified Selected Project Experience list (Strictly verified only)
export const DETAILED_PROJECTS: DetailedProject[] = [
  {
    id: 'intel',
    name: 'Intel',
    sector: 'Industrial Manufacturing',
    scope: 'Industrial process engineering and environmental solutions.',
    technologiesUsed: ['Process Engineering', 'Environmental Solutions']
  },
  {
    id: 'jabil',
    name: 'Jabil',
    sector: 'Industrial Manufacturing',
    scope: 'Industrial environmental engineering and process support.',
    technologiesUsed: ['Industrial Engineering', 'Process Development']
  },
  {
    id: 'sea-launch-boeing',
    name: 'Sea Launch / Boeing',
    sector: 'Aerospace & Marine Operations',
    scope: 'Specialized marine and process engineering support.',
    technologiesUsed: ['Process Engineering', 'Materials & Chemical Systems']
  },
  {
    id: 'ocsd',
    name: 'Orange County Sanitation District',
    sector: 'Municipal Sanitation & Water',
    scope: 'Municipal sanitation and water treatment process evaluation.',
    technologiesUsed: ['Water Treatment', 'Process Engineering']
  },
  {
    id: 'city-oceanside',
    name: 'City of Oceanside',
    sector: 'Municipal Public Works',
    scope: 'Municipal environmental and public works engineering.',
    technologiesUsed: ['Municipal Water', 'Environmental Engineering']
  },
  {
    id: 'hampton-roads',
    name: 'Hampton Roads Sanitation',
    sector: 'Regional Sanitation Authority',
    scope: 'Regional sanitation and wastewater engineering consultation.',
    technologiesUsed: ['Wastewater Treatment', 'Process Optimization']
  },
  {
    id: 'metro-biosolids',
    name: 'Metro Biosolids Facility — San Diego',
    sector: 'Municipal Environmental Facility',
    scope: 'Municipal biosolids processing and emission controls.',
    technologiesUsed: ['Emissions Abatement', 'Environmental Systems']
  },
  {
    id: 'rock-canyon-oil',
    name: 'Rock Canyon Oil',
    sector: 'Energy & Industrial Operations',
    scope: 'Energy and industrial process engineering solutions.',
    technologiesUsed: ['Industrial Process Engineering', 'Resource Management']
  }
];

export interface SelectedProject {
  name: string;
  sector: string;
}

export const SELECTED_PROJECTS: SelectedProject[] = [
  { name: 'Intel', sector: 'Industrial Manufacturing' },
  { name: 'Jabil', sector: 'Industrial Manufacturing' },
  { name: 'Sea Launch / Boeing', sector: 'Aerospace & Marine Operations' },
  { name: 'Orange County Sanitation District', sector: 'Municipal Sanitation & Water' },
  { name: 'City of Oceanside', sector: 'Municipal Public Works' },
  { name: 'Hampton Roads Sanitation', sector: 'Regional Sanitation Authority' },
  { name: 'Metro Biosolids Facility — San Diego', sector: 'Municipal Environmental Facility' },
  { name: 'Rock Canyon Oil', sector: 'Energy & Industrial Operations' }
];

export interface FounderBio {
  name: string;
  title: string;
  credentialsDisplay: string;
  image: string;
  summary: string;
  biography: string[];
  credentials: string[];
  philosophy: string;
}

export const FOUNDER_DATA: FounderBio = {
  name: 'Dr. Robert Richardson',
  title: 'President',
  credentialsDisplay: 'Ph.D. Chemist · Licensed General Contractor · Inventor',
  image: PRDD_IMAGES.founder,
  summary: 'Dr. Robert Richardson is the founder and president of Clean Scrub Technologies. As a Ph.D. chemist, licensed general contractor, and inventor, Dr. Richardson conducts research and process development to address challenging industrial environmental problems.',
  biography: [
    'Dr. Robert Richardson is President of Clean Scrub Technologies (CST).',
    'As a Ph.D. chemist, licensed general contractor, and inventor, Dr. Richardson combines chemical research with practical engineering and construction experience.',
    'Dr. Richardson utilizes a personal laboratory for research and process development, focusing on practical technologies for emissions abatement, water treatment, and materials engineering.'
  ],
  credentials: [
    'Ph.D. Chemist',
    'Licensed General Contractor',
    'Inventor',
    'President, Clean Scrub Technologies'
  ],
  philosophy: 'Environmental processes that address complex industrial problems through chemistry, engineering and practical implementation.'
};

export interface ApproachStep {
  number: string;
  name: string;
  tagline: string;
  description: string;
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    name: 'IDENTIFY',
    tagline: 'Understand the environmental and industrial problem.',
    description: 'Analyze the specific chemical challenge, emission profile, and real-world plant constraints.'
  },
  {
    number: '02',
    name: 'DEVELOP',
    tagline: 'Create and test the underlying chemical process.',
    description: 'Develop and evaluate the chemical process in the laboratory to ensure reliable conversion.'
  },
  {
    number: '03',
    name: 'ENGINEER',
    tagline: 'Translate the process into practical industrial equipment.',
    description: 'Design practical, robust equipment built to operate effectively in demanding industrial conditions.'
  },
  {
    number: '04',
    name: 'COMMERCIALIZE',
    tagline: 'Deploy, license and support commercially viable technology.',
    description: 'Deploy, license and support commercially viable environmental solutions for industrial implementation.'
  }
];

export interface CommercializationStep {
  number: string;
  phase: string;
  deliverable: string;
}

export const COMMERCIALIZATION_STEPS: CommercializationStep[] = [
  {
    number: '01',
    phase: 'PILOT STUDY',
    deliverable: 'Chemical process testing and site feasibility evaluation.'
  },
  {
    number: '02',
    phase: 'FULL-SCALE DESIGN',
    deliverable: 'Equipment engineering and industrial process scale-up.'
  },
  {
    number: '03',
    phase: 'DESIGN & BUILD',
    deliverable: 'Practical fabrication oversight and equipment implementation.'
  },
  {
    number: '04',
    phase: 'LICENSING',
    deliverable: 'Commercial deployment and proprietary process licensing.'
  },
  {
    number: '05',
    phase: 'TECHNICAL SUPPORT',
    deliverable: 'Process commissioning and ongoing technical support.'
  }
];
