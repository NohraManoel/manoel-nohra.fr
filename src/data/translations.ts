export type Lang = 'en' | 'fr';

// Same in both languages
export const links = {
  email: "manoel.nohra@gmail.com",
  github: "https://github.com/NohraManoel",
  itch: "https://manoelnohra.itch.io",
  linkedin: "https://www.linkedin.com/in/manoel-nohra/",
};

export interface UIStrings {
  // Navigation
  navHome: string;
  navResume: string;
  navAbout: string;
  navGames: string;
  navSkills: string;
  navExperience: string;
  navEducation: string;
  navExtras: string;
  langSwitchLabel: string;
  langSwitchText: string;

  // Home
  heroTitle: string;
  heroSubtitle: string;
  heroCtaGames: string;
  heroCtaContact: string;
  aboutTitle: string;
  aboutLead: string;
  aboutDetailsTitle: string;
  favoriteGamesTitle: string;
  myGamesTitle: string;
  viewProject: string;
  noMedia: string;

  // Details
  labelDegree: string;
  labelEmail: string;
  labelWork: string;
  labelLinks: string;
  downloadCv: string;
  cvHref: string;
  valDegree: string;
  valDegreeMeta: string;
  valWorkCA: string;
  valWorkEU: string;

  // Project filter
  searchPlaceholder: string;
  clearFilters: string;
  filtersToggle: string;
  filterTechs: string;
  filterTags: string;

  // Journey/Resume
  journeyTitle: string;
  skillsTitle: string;
  timelineInternships: string;
  timelineEducation: string;
  timelineExtracurricular: string;

  // Layout
  metaDescription: string;
  footer: string;
}

export const translations: Record<Lang, UIStrings> = {
  en: {
    navHome: "Home",
    navResume: "Resume",
    navAbout: "About Me",
    navGames: "My Games",
    navSkills: "Skills",
    navExperience: "Experience",
    navEducation: "Education",
    navExtras: "Extras",
    langSwitchLabel: "Switch website language to French",
    langSwitchText: "FR 🇫🇷",

    heroTitle: "Hi, I'm <span class=\"highlight\">Manoël Nohra</span>",
    heroSubtitle: "Gameplay Programmer · Building game systems in Unreal (C++) and Unity (C#) · Open to gameplay roles in Canada and Europe.",
    heroCtaGames: "See my games",
    heroCtaContact: "Contact me",
    aboutTitle: "About Me",
    aboutLead: "My name is Manoël Nohra, I graduated from a Bachelor's degree in Software Engineering at École de technologie supérieure in Montreal in April 2026. My professional goal is to become a gameplay programmer in the video game industry.",
    aboutDetailsTitle: "Software Engineer",
    favoriteGamesTitle: "Favorite Games",
    myGamesTitle: "My Games",
    viewProject: "View Project",
    noMedia: "No media available",

    labelDegree: "Degree",
    labelEmail: "Email",
    labelWork: "Work Eligibility",
    labelLinks: "Links",
    downloadCv: "Download CV",
    cvHref: "/Manoel_Nohra_CV.pdf",
    valDegree: "Bachelor in Software Engineering",
    valDegreeMeta: "École de technologie supérieure · Graduated 2026",
    valWorkCA: "Canada (until 2031, PGWP)",
    valWorkEU: "Europe (French citizen)",

    searchPlaceholder: "Search projects (title, skill, etc...)",
    clearFilters: "Clear All",
    filtersToggle: "Filters",
    filterTechs: "Technologies:",
    filterTags: "Tags:",

    journeyTitle: "My Journey",
    skillsTitle: "Technical Skills Overview",
    timelineInternships: "Professional Experience",
    timelineEducation: "Education",
    timelineExtracurricular: "Extracurricular Involvement",

    metaDescription: "Manoël Nohra - Software Engineer & Gameplay Programmer Portfolio. Explore game development projects and professional journey.",
    footer: "Manoël Nohra",
  },
  fr: {
    navHome: "Accueil",
    navResume: "Parcours",
    navAbout: "À Propos",
    navGames: "Mes Jeux",
    navSkills: "Compétences",
    navExperience: "Expériences",
    navEducation: "Formations",
    navExtras: "Extras",
    langSwitchLabel: "Changer la langue du site en Anglais",
    langSwitchText: "EN 🇬🇧",

    heroTitle: "Bonjour, je suis <span class=\"highlight\">Manoël Nohra</span>",
    heroSubtitle: "Programmeur Gameplay · Création de systèmes de jeu sous Unreal (C++) et Unity (C#) · Ouvert aux postes gameplay au Canada et en Europe.",
    heroCtaGames: "Voir mes jeux",
    heroCtaContact: "Me contacter",
    aboutTitle: "À Propos de Moi",
    aboutLead: "Je m'appelle Manoël Nohra, je suis diplômé d'un baccalauréat en génie logiciel à l'École de technologie supérieure de Montréal depuis avril 2026. Mon objectif professionnel est de devenir programmeur gameplay dans l'industrie du jeu vidéo.",
    aboutDetailsTitle: "Ingénieur Logiciel",
    favoriteGamesTitle: "Jeux Favoris",
    myGamesTitle: "Mes Jeux",
    viewProject: "Voir le projet",
    noMedia: "Pas de média disponible",

    labelDegree: "Diplôme",
    labelEmail: "Courriel",
    labelWork: "Autorisation de travail",
    labelLinks: "Liens",
    downloadCv: "Télécharger mon CV",
    cvHref: "/Manoel_Nohra_CV_FR.pdf",
    valDegree: "Baccalauréat en Génie Logiciel",
    valDegreeMeta: "École de technologie supérieure · Diplômé en 2026",
    valWorkCA: "Canada (jusqu'en 2031, PTPD)",
    valWorkEU: "Europe (nationalité française)",

    searchPlaceholder: "Rechercher des projets (titre, compétence, etc...)",
    clearFilters: "Tout effacer",
    filtersToggle: "Filtres",
    filterTechs: "Technologies :",
    filterTags: "Tags :",

    journeyTitle: "Mon Parcours",
    skillsTitle: "Aperçu des compétences techniques",
    timelineInternships: "Expérience Professionnelle",
    timelineEducation: "Éducation & Formations",
    timelineExtracurricular: "Implication Extrascolaire",

    metaDescription: "Manoël Nohra - Portfolio de Génie Logiciel & Programmation Gameplay. Découvrez ses projets de jeu et son parcours professionnel.",
    footer: "Manoël Nohra",
  }
};
