import type { Lang } from './translations';

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string; // Institution or Location
  bullets?: string[];
  description?: string; // Standard paragraph description instead of bullets
  companyLogo?: string;
  technologies?: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillItem {
  category: string;
  items: Skill[];
}

export interface ResumeData {
  skills: SkillItem[];
  internships: TimelineItem[];
  education: TimelineItem[];
  extracurriculars: TimelineItem[];
}

// ---------------------------------------------------------------------------
// Source data: everything is written once, only the text differs per language.
// ---------------------------------------------------------------------------

type Text = Record<Lang, string>;
const tr = (en: string, fr: string): Text => ({ en, fr });

// Every skill/technology, referenced by key from the skill categories and timeline entries
const skills = {
  unreal: { name: "Unreal Engine", icon: "skill-icons:unrealengine" },
  unity: { name: "Unity", icon: "skill-icons:unity-dark" },
  unityVr: { name: "Unity VR", icon: "mdi:virtual-reality" },
  anvil: { name: "Anvil", icon: "/images/Logo/Skills/Anvil_Logo.png" },

  cs: { name: "C#", icon: "skill-icons:cs" },
  cpp: { name: "C++", icon: "skill-icons:cpp" },
  python: { name: "Python", icon: "skill-icons:python-dark" },
  java: { name: "Java", icon: "skill-icons:java-dark" },
  c: { name: "C", icon: "skill-icons:c" },
  sql: { name: "SQL", icon: "mdi:database-search" },

  wpf: { name: "WPF", icon: "/images/Logo/Skills/WPF_Logo.png" },
  xaml: { name: "XAML", icon: "mdi:xml" },
  opengl: { name: "OpenGL", icon: "logos:opengl" },
  ueCpp: { name: "UE C++", icon: "skill-icons:unrealengine" },
  unityCs: { name: "Unity C#", icon: "skill-icons:unity-dark" },

  debugging: { name: tr("Debugging", "Débogage"), icon: "mdi:bug-check" },
  teamwork: { name: tr("Teamwork", "Travail d'équipe"), icon: "mdi:account-group" },
  dataStructures: { name: tr("Data structures", "Structures de données"), icon: "mdi:file-tree" },
  testing: { name: tr("Testing", "Tests"), icon: "mdi:test-tube" },
  versionControl: { name: tr("Version control", "Contrôle de version"), icon: "mdi:source-branch" },
  database: { name: tr("Database", "Bases de données"), icon: "mdi:database" },
  agile: { name: "Agile & Scrum", icon: "mdi:sync-circle" },
  designPatterns: { name: "Design Patterns", icon: "mdi:puzzle-outline" },
  math3d: { name: tr("3D Mathematics", "Mathématiques 3D"), icon: "mdi:math-compass" },
  problemSolving: { name: tr("Problem Solving", "Résolution de problèmes"), icon: "mdi:head-lightbulb-outline" },

  rider: { name: "Rider", icon: "skill-icons:rider-dark" },
  visualStudio: { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" },
  vscode: { name: "VS Code", icon: "skill-icons:vscode-dark" },
  ai: { name: tr("AI", "IA"), icon: "mdi:robot-outline" },
  office: { name: "Office", icon: "mdi:microsoft-office" },
  git: { name: "Git", icon: "skill-icons:git" },
  wwise: { name: "Wwise", icon: "/images/Logo/Skills/Wwise_Logo.png" },
  blueprints: { name: "Blueprints", icon: "mdi:file-tree" },
  perforce: { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" },
  jira: { name: "Jira", icon: "logos:jira" },
  confluence: { name: "Confluence", icon: "logos:confluence" },
  trello: { name: "Trello", icon: "logos:trello" },
  github: { name: "GitHub", icon: "skill-icons:github-dark" },
  gitlab: { name: "GitLab", icon: "skill-icons:gitlab-dark" },

  astro: { name: "Astro", icon: "skill-icons:astro" },
  js: { name: "JS", icon: "skill-icons:javascript" },
  ts: { name: "TS", icon: "skill-icons:typescript" },
  html: { name: "Html", icon: "skill-icons:html" },
  css: { name: "CSS", icon: "skill-icons:css" },

  postgresql: { name: "PostgreSQL", icon: "skill-icons:postgresql-dark" },
  mysql: { name: "MySQL", icon: "skill-icons:mysql-dark" },

  french: { name: tr("French", "Français"), icon: "twemoji:flag-france" },
  english: { name: tr("English", "Anglais"), icon: "twemoji:flag-united-kingdom" },
  arabic: { name: tr("Arabic", "Arabe"), icon: "twemoji:flag-lebanon" },
} satisfies Record<string, { name: string | Text; icon: string }>;

type SkillKey = keyof typeof skills;

const skillCategories: { category: Text; items: SkillKey[] }[] = [
  { category: tr("Game Engine", "Moteurs de jeu"), items: ["unreal", "unity", "unityVr", "anvil"] },
  { category: tr("Programming Languages", "Langages de programmation"), items: ["cs", "cpp", "python", "java", "c", "sql"] },
  { category: tr("Framework & APIs", "Frameworks & APIs"), items: ["wpf", "opengl", "ueCpp", "unityCs"] },
  { category: tr("Software Engineering", "Génie logiciel"), items: ["debugging", "teamwork", "dataStructures", "testing", "versionControl", "database", "agile", "designPatterns", "math3d", "problemSolving"] },
  { category: tr("Tools", "Outils"), items: ["rider", "visualStudio", "vscode", "ai", "office", "git", "perforce", "wwise", "jira", "confluence", "trello", "github", "gitlab"] },
  { category: tr("Web Dev", "Développement Web"), items: ["astro", "js", "ts", "html", "css"] },
  { category: tr("Databases", "Bases de données"), items: ["postgresql", "mysql"] },
  { category: tr("Language", "Langues"), items: ["french", "english", "arabic"] },
];

interface Entry {
  date: Text;
  title: Text;
  subtitle: Text;
  companyLogo?: string;
  technologies?: SkillKey[];
  description?: Text;
  bullets?: Text[];
}

const internships: Entry[] = [
  {
    date: tr("May 2025 - August 2025 (17 weeks)", "Mai 2025 - Août 2025 (Stage de 17 semaines)"),
    title: tr("Gameplay Programmer Intern (NEO Project)", "Stagiaire programmeur gameplay (projet NEO)"),
    subtitle: tr("Ubisoft Montreal - Montreal, QC", "Ubisoft Montréal - Montréal, QC"),
    companyLogo: "/images/Logo/Company/Logo_UBI_MTL.png",
    technologies: ["cpp", "perforce", "debugging", "jira", "anvil", "confluence", "testing", "agile", "english"],
    description: tr(
      "Fighting Team of 8 | C++, Anvil engine | Agile, tasks from lead, peer-reviewed",
      "Équipe Combat de 8 | C++, moteur Anvil | Agile, tâches confiées par le lead, revue par les pairs",
    ),
    bullets: [
      tr("Extended existing combat telemetry to send in-game events to data analysts for enemy and ability balancing.",
         "Extension de la télémétrie de combat pour aider les analystes à équilibrer ennemis et capacités."),
      tr("Built and adapted gameplay features for designers, e.g. a fog ability that grows with an equipped outfit.",
         "Création et adaptation de fonctionnalités pour les designers, ex. un brouillard qui s’étend avec une tenue équipée."),
      tr("Debugged and fixed gameplay issues across health, input, animation, and targeting.",
         "Débogage et correction de problèmes de gameplay : santé, entrées, animations et ciblage."),
    ],
  },
  {
    date: tr("September 2024 - December 2024 (16 weeks)", "Septembre 2024 - Décembre 2024 (Stage de 16 semaines)"),
    title: tr("Software Engineering Intern (Wwise Integration Team)", "Stagiaire ingénieur logiciel (équipe Intégration Wwise)"),
    subtitle: tr("Audiokinetic - Montreal, QC", "Audiokinetic - Montréal, QC"),
    companyLogo: "/images/Logo/Company/Audiokinetic_Logo.png",
    technologies: ["unreal", "unity", "cpp", "blueprints", "cs", "wwise", "agile", "french", "english", "git", "visualStudio", "debugging", "testing"],
    description: tr(
      "Solo R&D mandate with mentor | C++/Blueprints, UE5 → Unity (C#)",
      "Mandat R&D en solo avec mentor | C++/Blueprints, UE5 → Unity (C#)",
    ),
    bullets: [
      tr("Built a Wwise take on Unreal’s Soundscape plugin: a dynamic ambient-audio demo for sound designers.",
         "Création d’un équivalent Wwise du plugin Soundscape d’Unreal : une démo d’audio ambiant dynamique."),
      tr("Built raycast sound selection and indoor/outdoor zones, then ported the demo to Unity.",
         "Sélection des sons par raycast et zones intérieur/extérieur, puis portage de la démo sous Unity."),
    ],
  },
  {
    date: tr("January 2024 - May 2024 (16 weeks)", "Janvier 2024 - Mai 2024 (Stage de 16 semaines)"),
    title: tr("Tools Programmer Intern", "Stagiaire programmeur outils"),
    subtitle: tr("Ubisoft Montreal - Montreal, QC", "Ubisoft Montréal - Montréal, QC"),
    companyLogo: "/images/Logo/Company/Logo_UBI_MTL.png",
    technologies: ["cs", "wpf", "perforce", "git", "english", "anvil", "agile", "debugging", "visualStudio", "xaml", "confluence", "jira"],
    description: tr(
      "Team of 6 | C#, WPF/XAML, MVVM | Agile | shipped to main",
      "Équipe de 6 | C#, WPF/XAML, MVVM | Agile | livré sur la branche principale",
    ),
    bullets: [
      tr("Built Shortcut Explorer, a tool listing every engine shortcut, previously hard-coded with no way to find them.",
         "Création de Shortcut Explorer, qui liste les raccourcis du moteur, auparavant introuvables."),
      tr("Parsed shortcut attributes from the C# code and added search and conflict detection; widely adopted.",
         "Lecture des attributs de raccourcis dans le code C#, recherche et détection de conflits. Outil adopté par les équipes."),
    ],
  },
  {
    date: tr("April 2022 - June 2022 (10 weeks)", "Avril 2022 - Juin 2022 (Stage de 10 semaines)"),
    title: tr("Programmer Intern (Urbia project)", "Stagiaire programmeur (projet Urbia)"),
    subtitle: tr("CDRIN - Matane, QC", "CDRIN - Matane, QC"),
    companyLogo: "/images/Logo/Company/CDRIN_Logo.png",
    technologies: ["unity", "cs", "agile", "git", "github", "teamwork", "visualStudio", "french", "trello", "testing"],
    description: tr(
      "Client project, team of 5, main programmer | Unity/C# | educational city-builder",
      "Projet client, équipe de 5, programmeur principal | Unity/C# | jeu éducatif de gestion urbaine",
    ),
    bullets: [
      tr("Added new buildings, rules, flooding, residential balance, and level tuning to a near-finished game.",
         "Ajout de bâtiments, règles, inondations et équilibrage résidentiel à un jeu presque terminé."),
      tr("Worked with a 3D artist, a manager, and the client weekly; integrated 3D models and polished the game.",
         "Travail hebdomadaire avec un artiste 3D, un gestionnaire et le client ; intégration de modèles 3D et polissage."),
    ],
  },
];

const education: Entry[] = [
  {
    date: tr("September 2022 - April 2026", "Septembre 2022 - Avril 2026"),
    title: tr("Bachelor in Software Engineering", "Baccalauréat en Génie Logiciel"),
    subtitle: tr("École de technologie supérieure (ÉTS)", "École de technologie supérieure (ÉTS)"),
    companyLogo: "/images/Logo/Company/ETS_Logo.png",
    description: tr(
      "A 4-year program to become a software engineer with 3 internships.",
      "Un programme de 4 ans pour devenir ingénieur logiciel, comprenant 3 stages obligatoires.",
    ),
  },
  {
    date: tr("2022", "2022"),
    title: tr("Semester 4 in Quebec (Study Abroad)", "Session 4 au Québec (Études à l'étranger)"),
    subtitle: tr("Cégep de Matane", "Cégep de Matane"),
    companyLogo: "/images/Logo/Company/CegepMatane_Logo.png",
    description: tr(
      "Spent the last semester of my DUT at a college in Quebec to graduate.",
      "Dernier semestre de mon DUT effectué dans un cégep au Québec pour l'obtention du diplôme.",
    ),
  },
  {
    date: tr("2022", "2022"),
    title: tr("Two-Year University Degree in Computer Science (DUT)", "Diplôme Universitaire de Technologie en Informatique (DUT)"),
    subtitle: tr("Université Claude Bernard Lyon 1", "Université Claude Bernard Lyon 1"),
    companyLogo: "/images/Logo/Company/UL1_Logo.png",
    description: tr(
      "Learned the foundations of computer science and discovered software development while gaining advanced technical knowledge.",
      "Apprentissage des fondements de l'informatique, découverte du développement logiciel et acquisition de connaissances techniques avancées.",
    ),
  },
  {
    date: tr("2020", "2020"),
    title: tr("Scientific High School Diploma, Mathematics Specialization", "Baccalauréat Scientifique, Spécialité Mathématiques"),
    subtitle: tr("Lycée Saint Jean Bosco", "Lycée Saint Jean Bosco"),
    description: tr("Graduated with honors (Mention Bien).", "Obtenu avec mention Bien."),
  },
];

const extracurriculars: Entry[] = [
  {
    date: tr("September 2022 - August 2025", "Septembre 2022 - Août 2025"),
    title: tr(
      "Club EsporTS (Esports Club) - Rocket League Team 1 Main Player",
      "Club EsporTS - Joueur et capitaine de l'équipe principale de Rocket League",
    ),
    subtitle: tr("ÉTS, Montreal, Quebec, Canada", "ÉTS, Montréal, Québec, Canada"),
    companyLogo: "/images/Logo/Company/ETS_Eports_logo.png",
  },
  {
    date: tr("September 2022 - April 2026", "Septembre 2022 - Avril 2026"),
    title: tr("Club Conjure (Video Game Creation Club) - Member", "Club Conjure (Club de création de jeux vidéo) - Membre"),
    subtitle: tr("ÉTS, Montreal, Quebec, Canada", "ÉTS, Montréal, Québec, Canada"),
    companyLogo: "/images/Logo/Company/Conjure.Logo.png",
  },
];

// ---------------------------------------------------------------------------
// Per-language view consumed by the components
// ---------------------------------------------------------------------------

function skill(key: SkillKey, lang: Lang): Skill {
  const { name, icon } = skills[key];
  return { name: typeof name === 'string' ? name : name[lang], icon };
}

function localize(entry: Entry, lang: Lang): TimelineItem {
  return {
    date: entry.date[lang],
    title: entry.title[lang],
    subtitle: entry.subtitle[lang],
    companyLogo: entry.companyLogo,
    technologies: entry.technologies?.map((key) => skill(key, lang)),
    description: entry.description?.[lang],
    bullets: entry.bullets?.map((bullet) => bullet[lang]),
  };
}

function build(lang: Lang): ResumeData {
  return {
    skills: skillCategories.map(({ category, items }) => ({
      category: category[lang],
      items: items.map((key) => skill(key, lang)),
    })),
    internships: internships.map((e) => localize(e, lang)),
    education: education.map((e) => localize(e, lang)),
    extracurriculars: extracurriculars.map((e) => localize(e, lang)),
  };
}

export const resumeData: Record<Lang, ResumeData> = {
  en: build('en'),
  fr: build('fr'),
};
