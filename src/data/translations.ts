export interface UIStrings {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutLead: string;
  aboutDetailsTitle: string;
  favoriteGamesTitle: string;
  myGamesTitle: string;
  viewProject: string;
  noMedia: string;
  
  // Details labels
  labelBirth: string;
  labelAge: string;
  labelWebsite: string;
  labelDegree: string;
  labelPhone: string;
  labelEmail: string;
  labelCity: string;
  
  // Details values
  valBirth: string;
  valDegree: string;
  valPhoneFR: string;
  valPhoneCA: string;
  valEmail: string;
  valCity: string;

  // Journey/Resume Strings
  journeyTitle: string;
  skillsTitle: string;
  skillsEngines: string;
  skillsLanguages: string;
  skillsTools: string;
  timelineInternships: string;
  timelineEducation: string;
  timelineExtracurricular: string;
  copyright: string;
}

export const translations: Record<'en' | 'fr', UIStrings> = {
  en: {
    heroTitle: "Welcome ! <br> I am <span class=\"highlight\">Manoël Nohra</span>",
    heroSubtitle: "Welcome to my portfolio where I showcase my projects and experiences.",
    aboutTitle: "About Me",
    aboutLead: "My name is Manoël Nohra, I am 23 years old and I graduated from a Bachelor's degree in Software Engineering at École de technologie supérieure in Montreal in April 2026. My professional goal is to become a gameplay programmer in the video game industry.",
    aboutDetailsTitle: "Software Engineer",
    favoriteGamesTitle: "Favorite Games",
    myGamesTitle: "My Games",
    viewProject: "View Project",
    noMedia: "No media available",
    
    labelBirth: "Date of birth",
    labelAge: "Age",
    labelWebsite: "Website",
    labelDegree: "Degree",
    labelPhone: "Phone",
    labelEmail: "Email",
    labelCity: "City",
    
    valBirth: "October 30, 2002",
    valDegree: "Bachelor in Software Engineering",
    valPhoneFR: "06 26 61 10 36 (FR)",
    valPhoneCA: "438-228-4931 (CA)",
    valEmail: "manoel.nohra@gmail.com",
    valCity: "Montreal, Quebec, Canada",

    journeyTitle: "My Journey",
    skillsTitle: "Technical Skills Overview",
    skillsEngines: "Engines & Audio",
    skillsLanguages: "Languages & Frameworks",
    skillsTools: "Tools & Methods",
    timelineInternships: "Internship Experience",
    timelineEducation: "Education",
    timelineExtracurricular: "Extracurricular Involvement",
    copyright: "My Game Portfolio"
  },
  fr: {
    heroTitle: "Bienvenue ! <br> Je suis <span class=\"highlight\">Manoël Nohra</span>",
    heroSubtitle: "Bienvenue sur mon portfolio où je présente mes projets et mes expériences.",
    aboutTitle: "À Propos de Moi",
    aboutLead: "Je m'appelle Manoël Nohra, j'ai 23 ans et je suis diplômé d'un baccalauréat en génie logiciel à l'École de technologie supérieure de Montréal depuis avril 2026. Mon objectif professionnel est de devenir programmeur gameplay dans l'industrie du jeu vidéo.",
    aboutDetailsTitle: "Ingénieur Logiciel",
    favoriteGamesTitle: "Jeux Favoris",
    myGamesTitle: "Mes Jeux",
    viewProject: "Voir le projet",
    noMedia: "Pas de média disponible",
    
    labelBirth: "Date de naissance",
    labelAge: "Âge",
    labelWebsite: "Site web",
    labelDegree: "Diplôme",
    labelPhone: "Téléphone",
    labelEmail: "Courriel",
    labelCity: "Ville",
    
    valBirth: "30 octobre 2002",
    valDegree: "Baccalauréat en Génie Logiciel",
    valPhoneFR: "06 26 61 10 36 (FR)",
    valPhoneCA: "438-228-4931 (CA)",
    valEmail: "manoel.nohra@gmail.com",
    valCity: "Montréal, Québec, Canada",

    journeyTitle: "Mon Parcours",
    skillsTitle: "Aperçu des compétences techniques",
    skillsEngines: "Moteurs & Audio",
    skillsLanguages: "Langages & Frameworks",
    skillsTools: "Outils & Méthodes",
    timelineInternships: "Expériences de Stage",
    timelineEducation: "Éducation & Formations",
    timelineExtracurricular: "Implication Extrascolaire",
    copyright: "Mon Portfolio de Jeux"
  }
};
