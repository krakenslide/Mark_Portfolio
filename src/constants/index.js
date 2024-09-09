export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const workExperiences = [
  {
    id: 1,
    name: 'Vodafone Idea Limited',
    pos: 'Software Developer II',
    duration: '2022 - Present',
    title: "Developed and optimized critical software systems, including a centralized middleware portal for authentication and access management using FastAPI, React, and LDAP. Led projects for large-scale network monitoring and software upgrades, enhancing security, scalability, and real-time tracking. Additionally, mentored trainees and contributed to cross-functional team efficiency by building dynamic portals for KPI and data trend analysis using advanced tech stacks such as Python, Django, PostgreSQL, and React, earning the prestigious Rockstar award as the youngest and first trainee recipient.",
    icon: '/assets/Vodafone_Idea_logo.svg.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Bonzai Digital Pvt Ltd',
    pos: 'Python Developer',
    duration: '2021',
    title: "Engineered robust Python automation frameworks to replace manual test cases, reducing test execution time by 70% and increasing overall test coverage and accuracy through Selenium.",
    icon: '/assets/bonzai-logo1.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Aalborg University, Copenhagen, Denmark',
    pos: 'Python Developer',
    duration: '2019',
    title: "Cleaned and processed datasets using Python and Pandas, and built a RESTful API with FastAPI to provide efficient access to the cleaned data for application use.",
    icon: '/assets/aalborg.svg',
    animation: 'salute',
  },
];