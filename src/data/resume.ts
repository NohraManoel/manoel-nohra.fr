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

export const resumeData: Record<'en' | 'fr', ResumeData> = {
  en: {
    skills: [
      { category: "Game Engine", items: [{ name: "Unreal Engine", icon: "skill-icons:unrealengine" }, { name: "Unity", icon: "skill-icons:unity-dark" }, { name: "Unity VR", icon: "mdi:virtual-reality" }, { name: "Anvil", icon: "/images/Logo/Skills/Anvil_Logo.png" }] },
      { category: "Object oriented language", items: [{ name: "C#", icon: "skill-icons:cs" }, { name: "C++", icon: "skill-icons:cpp" }, { name: "Python", icon: "skill-icons:python-dark" }, { name: "Java", icon: "skill-icons:java-dark" }, { name: "C", icon: "skill-icons:c" }] },
      { category: "Framework & APIs", items: [{ name: "WPF", icon: "/images/Logo/Skills/WPF_Logo.png" }, { name: "OpenGL", icon: "logos:opengl" }, { name: "UE C++", icon: "skill-icons:unrealengine" }, { name: "Unity C#", icon: "skill-icons:unity-dark" }] },
      { category: "Software Engineering", items: [{ name: "Debugging", icon: "mdi:bug-check" }, { name: "Teamwork", icon: "mdi:account-group" }, { name: "Data structures", icon: "mdi:file-tree" }, { name: "Testing", icon: "mdi:test-tube" }, { name: "Version control", icon: "mdi:source-branch" }, { name: "Database", icon: "mdi:database" }, { name: "Agile & Scrum", icon: "mdi:sync-circle" }, { name: "Design Patterns", icon: "mdi:puzzle-outline" }, { name: "3D Mathematics", icon: "mdi:math-compass" }] },
      { category: "Tools", items: [{ name: "Rider", icon: "skill-icons:rider-dark" }, { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" }, { name: "VS Code", icon: "skill-icons:vscode-dark" }, { name: "AI", icon: "mdi:robot-outline" }, { name: "Office", icon: "mdi:microsoft-office" }, { name: "Git", icon: "skill-icons:git" }, { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" }, { name: "Jira", icon: "logos:jira" }, { name: "Confluence", icon: "logos:confluence" }, { name: "Trello", icon: "logos:trello" }, { name: "GitHub", icon: "skill-icons:github-dark" }, { name: "GitLab", icon: "skill-icons:gitlab-dark" }] },
      { category: "Web Dev", items: [{ name: "Astro", icon: "skill-icons:astro" }, { name: "JS", icon: "skill-icons:javascript" }, { name: "TS", icon: "skill-icons:typescript" }, { name: "Html", icon: "skill-icons:html" }, { name: "CSS", icon: "skill-icons:css" }] },
      { category: "Language", items: [{ name: "French", icon: "twemoji:flag-france" }, { name: "English", icon: "twemoji:flag-united-kingdom" }, { name: "Arabic", icon: "twemoji:flag-lebanon" }] }
    ],
    internships: [
      {
        date: "May 2025 - August 2025 (17 weeks)",
        title: "Gameplay Programmer Intern",
        subtitle: "Ubisoft Montreal - Montreal, QC",
        companyLogo: "/images/Logo/Company/Logo_UBI_MTL.png",
        technologies: [
          { name: "C++", icon: "skill-icons:cpp" },
          { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" },
          { name: "Debugging", icon: "mdi:bug-check" },
          { name: "Jira", icon: "logos:jira" }
        ],
        bullets: [
          "Debugged and resolved complex C++ gameplay issues.",
          "Enhanced combat targeting with line-of-sight checks.",
          "Built a data-tracking system for enemy balancing.",
          "Developed new tools to streamline designer workflows."
        ]
      },
      {
        date: "September 2024 - December 2024 (15 weeks)",
        title: "Software Engineer Intern",
        subtitle: "Audiokinetic - Montreal, QC",
        companyLogo: "/images/Logo/Company/Audiokinetic_Logo.png",
        technologies: [
          { name: "Unreal Engine", icon: "skill-icons:unrealengine" },
          { name: "Unity", icon: "skill-icons:unity-dark" },
          { name: "C++", icon: "skill-icons:cpp" },
          { name: "C#", icon: "skill-icons:cs" },
          { name: "Teamwork", icon: "mdi:account-group" }
        ],
        bullets: [
          "Developed a dynamic audio environment system for Unreal Engine 5.",
          "Ported the dynamic audio system to Unity using Wwise.",
          "Troubleshooted issues and delivered technical presentations."
        ]
      },
      {
        date: "January 2024 - May 2024 (16 weeks)",
        title: "Tools Programmer Intern",
        subtitle: "Ubisoft Montreal - Montreal, QC",
        companyLogo: "/images/Logo/Company/Logo_UBI_MTL.png",
        technologies: [
          { name: "C#", icon: "skill-icons:cs" },
          { name: "WPF", icon: "/images/Logo/Skills/WPF_Logo.png" },
          { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" },
          { name: "Design Patterns", icon: "mdi:puzzle-outline" }
        ],
        bullets: [
          "Developed 'Shortcut Explorer', a WPF/XAML tool for engine hotkeys.",
          "Implemented search, filtering, and conflict detection for bindings.",
          "Engineered a dynamic parsing system for shortcut data."
        ]
      },
      {
        date: "2022 (10 weeks)",
        title: "Programmer Intern",
        subtitle: "CDRIN - Matane, QC",
        companyLogo: "/images/Logo/Company/CDRIN_Logo.png",
        technologies: [
          { name: "Unity", icon: "skill-icons:unity-dark" },
          { name: "C#", icon: "skill-icons:cs" },
          { name: "Agile & Scrum", icon: "mdi:sync-circle" },
          { name: "Git", icon: "skill-icons:git" }
        ],
        bullets: [
          "Optimized an existing Unity codebase for client features.",
          "Implemented new gameplay rules, buildings, and assets.",
          "Performed game balancing and communicated progress."
        ]
      }
    ],
    education: [
      {
        date: "September 2022 - April 2026",
        title: "Bachelor in Software Engineering",
        subtitle: "École de technologie supérieure (ÉTS)",
        companyLogo: "/images/Logo/Company/ETS_Logo.png",
        description: "A 4-year program to become a software engineer with 3 internships."
      },
      {
        date: "2022",
        title: "Semester 4 in Quebec (Study Abroad)",
        subtitle: "Cégep de Matane",
        companyLogo: "/images/Logo/Company/CegepMatane_Logo.png",
        description: "Spent the last semester of my DUT at a college in Quebec to graduate."
      },
      {
        date: "2022",
        title: "Two-Year University Degree in Computer Science (DUT)",
        subtitle: "Université Claude Bernard Lyon 1",
        companyLogo: "/images/Logo/Company/UL1_Logo.png",
        description: "Learned the foundations of computer science and discovered software development while gaining advanced technical knowledge."
      },
      {
        date: "2020",
        title: "Scientific High School Diploma, Mathematics Specialization",
        subtitle: "Lycée Saint Jean Bosco",
        description: "Graduated with honors (Mention Bien)."
      }
    ],
    extracurriculars: [
      {
        date: "September 2022 - August 2025",
        title: "Club EsporTS (Esports Club) - Rocket League Team 1 Main Player",
        subtitle: "ÉTS, Montreal, Quebec, Canada",
        companyLogo: "/images/Logo/Company/ETS_Eports_logo.png"
      },
      {
        date: "September 2022 - April 2026",
        title: "Club Conjure (Video Game Creation Club) - Member",
        subtitle: "ÉTS, Montreal, Quebec, Canada",
        companyLogo: "/images/Logo/Company/Conjure.Logo.png"
      }
    ]
  },
  fr: {
    skills: [
      { category: "Moteurs de jeu", items: [{ name: "Unreal Engine", icon: "skill-icons:unrealengine" }, { name: "Unity", icon: "skill-icons:unity-dark" }, { name: "Unity VR", icon: "mdi:virtual-reality" }, { name: "Anvil", icon: "/images/Logo/Skills/Anvil_Logo.png" }] },
      { category: "Langages orientés objet", items: [{ name: "C#", icon: "skill-icons:cs" }, { name: "C++", icon: "skill-icons:cpp" }, { name: "Python", icon: "skill-icons:python-dark" }, { name: "Java", icon: "skill-icons:java-dark" }, { name: "C", icon: "skill-icons:c" }] },
      { category: "Frameworks & APIs", items: [{ name: "WPF", icon: "/images/Logo/Skills/WPF_Logo.png" }, { name: "OpenGL", icon: "logos:opengl" }, { name: "UE C++", icon: "skill-icons:unrealengine" }, { name: "Unity C#", icon: "skill-icons:unity-dark" }] },
      { category: "Génie logiciel", items: [{ name: "Débogage", icon: "mdi:bug-check" }, { name: "Travail d'équipe", icon: "mdi:account-group" }, { name: "Structures de données", icon: "mdi:file-tree" }, { name: "Tests", icon: "mdi:test-tube" }, { name: "Contrôle de version", icon: "mdi:source-branch" }, { name: "Bases de données", icon: "mdi:database" }, { name: "Agile & Scrum", icon: "mdi:sync-circle" }, { name: "Design Patterns", icon: "mdi:puzzle-outline" }, { name: "Mathématiques 3D", icon: "mdi:math-compass" }] },
      { category: "Outils", items: [{ name: "Rider", icon: "skill-icons:rider-dark" }, { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" }, { name: "VS Code", icon: "skill-icons:vscode-dark" }, { name: "IA", icon: "mdi:robot-outline" }, { name: "Office", icon: "mdi:microsoft-office" }, { name: "Git", icon: "skill-icons:git" }, { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" }, { name: "Jira", icon: "logos:jira" }, { name: "Confluence", icon: "logos:confluence" }, { name: "Trello", icon: "logos:trello" }, { name: "GitHub", icon: "skill-icons:github-dark" }, { name: "GitLab", icon: "skill-icons:gitlab-dark" }] },
      { category: "Développement Web", items: [{ name: "Astro", icon: "skill-icons:astro" }, { name: "JS", icon: "skill-icons:javascript" }, { name: "TS", icon: "skill-icons:typescript" }, { name: "Html", icon: "skill-icons:html" }, { name: "CSS", icon: "skill-icons:css" }] },
      { category: "Langues", items: [{ name: "Français", icon: "twemoji:flag-france" }, { name: "Anglais", icon: "twemoji:flag-united-kingdom" }, { name: "Arabe", icon: "twemoji:flag-lebanon" }] }
    ],
    internships: [
      {
        date: "Mai 2025 - Août 2025 (Stage de 17 semaines)",
        title: "Stagiaire Programmeur Gameplay",
        subtitle: "Ubisoft Montréal - Montréal, QC",
        companyLogo: "/images/Logo/Company/Logo_UBI_MTL.png",
        technologies: [
          { name: "C++", icon: "skill-icons:cpp" },
          { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" },
          { name: "Débogage", icon: "mdi:bug-check" },
          { name: "Jira", icon: "logos:jira" }
        ],
        bullets: [
          "Débogage et résolution de problèmes de gameplay complexes en C++.",
          "Amélioration du ciblage des combats avec des vérifications de ligne de vue.",
          "Création d'un système de suivi de données pour l'équilibrage.",
          "Développement de nouveaux outils pour optimiser le flux de travail des designers."
        ]
      },
      {
        date: "Septembre 2024 - Décembre 2024 (Stage de 15 semaines)",
        title: "Stagiaire Ingénieur Logiciel",
        subtitle: "Audiokinetic - Montréal, QC",
        companyLogo: "/images/Logo/Company/Audiokinetic_Logo.png",
        technologies: [
          { name: "Unreal Engine", icon: "skill-icons:unrealengine" },
          { name: "Unity", icon: "skill-icons:unity-dark" },
          { name: "C++", icon: "skill-icons:cpp" },
          { name: "C#", icon: "skill-icons:cs" },
          { name: "Travail d'équipe", icon: "mdi:account-group" }
        ],
        bullets: [
          "Développement d'un système d'audio dynamique pour Unreal Engine 5.",
          "Portage du système audio dynamique vers Unity avec Wwise.",
          "Résolution de problèmes et réalisation de présentations techniques."
        ]
      },
      {
        date: "Janvier 2024 - Mai 2024 (Stage de 16 semaines)",
        title: "Stagiaire Programmeur Outils",
        subtitle: "Ubisoft Montréal - Montréal, QC",
        companyLogo: "/images/Logo/Company/Logo_UBI_MTL.png",
        technologies: [
          { name: "C#", icon: "skill-icons:cs" },
          { name: "WPF", icon: "/images/Logo/Skills/WPF_Logo.png" },
          { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" },
          { name: "Design Patterns", icon: "mdi:puzzle-outline" }
        ],
        bullets: [
          "Développement de 'Shortcut Explorer', un outil WPF/XAML pour les raccourcis.",
          "Implémentation de recherche, filtrage et détection de conflits.",
          "Conception d'un système d'analyse dynamique des raccourcis du moteur."
        ]
      },
      {
        date: "2022 (Stage de 10 semaines)",
        title: "Stagiaire Programmeur",
        subtitle: "CDRIN - Matane, QC",
        companyLogo: "/images/Logo/Company/CDRIN_Logo.png",
        technologies: [
          { name: "Unity", icon: "skill-icons:unity-dark" },
          { name: "C#", icon: "skill-icons:cs" },
          { name: "Agile & Scrum", icon: "mdi:sync-circle" },
          { name: "Git", icon: "skill-icons:git" }
        ],
        bullets: [
          "Optimisation d'une base de code Unity pour les fonctionnalités client.",
          "Implémentation de nouvelles règles de gameplay et bâtiments.",
          "Équilibrage de jeu et communication de l'avancement technique."
        ]
      }
    ],
    education: [
      {
        date: "Septembre 2022 - Avril 2026",
        title: "Baccalauréat en Génie Logiciel",
        subtitle: "École de technologie supérieure (ÉTS)",
        companyLogo: "/images/Logo/Company/ETS_Logo.png",
        description: "Un programme de 4 ans pour devenir ingénieur logiciel, comprenant 3 stages obligatoires."
      },
      {
        date: "2022",
        title: "Session 4 au Québec (Études à l'étranger)",
        subtitle: "Cégep de Matane",
        companyLogo: "/images/Logo/Company/CegepMatane_Logo.png",
        description: "Dernier semestre de mon DUT effectué dans un cégep au Québec pour l'obtention du diplôme."
      },
      {
        date: "2022",
        title: "Diplôme Universitaire de Technologie en Informatique (DUT)",
        subtitle: "Université Claude Bernard Lyon 1",
        companyLogo: "/images/Logo/Company/UL1_Logo.png",
        description: "Apprentissage des fondements de l'informatique, découverte du développement logiciel et acquisition de connaissances techniques avancées."
      },
      {
        date: "2020",
        title: "Baccalauréat Scientifique, Spécialité Mathématiques",
        subtitle: "Lycée Saint Jean Bosco",
        description: "Obtenu avec mention Bien."
      }
    ],
    extracurriculars: [
      {
        date: "Septembre 2022 - Août 2025",
        title: "Club EsporTS - Joueur et capitaine de l'équipe principal de Rocket League",
        subtitle: "ÉTS, Montréal, Québec, Canada",
        companyLogo: "/images/Logo/Company/ETS_Eports_logo.png"
      },
      {
        date: "2022",
        title: "Club Conjure (Club de création de jeux vidéo) - Membre",
        subtitle: "ÉTS, Montréal, Québec, Canada",
        companyLogo: "/images/Logo/Company/Conjure.Logo.png"
      }
    ]
  }
};
