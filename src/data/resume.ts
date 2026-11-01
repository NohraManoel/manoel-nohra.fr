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
      { category: "Programming Languages", items: [{ name: "C#", icon: "skill-icons:cs" }, { name: "C++", icon: "skill-icons:cpp" }, { name: "Python", icon: "skill-icons:python-dark" }, { name: "Java", icon: "skill-icons:java-dark" }, { name: "C", icon: "skill-icons:c" }, { name: "SQL", icon: "mdi:database-search" }] },
      { category: "Framework & APIs", items: [{ name: "WPF", icon: "/images/Logo/Skills/WPF_Logo.png" }, { name: "OpenGL", icon: "logos:opengl" }, { name: "UE C++", icon: "skill-icons:unrealengine" }, { name: "Unity C#", icon: "skill-icons:unity-dark" }] },
      { category: "Software Engineering", items: [{ name: "Debugging", icon: "mdi:bug-check" }, { name: "Teamwork", icon: "mdi:account-group" }, { name: "Data structures", icon: "mdi:file-tree" }, { name: "Testing", icon: "mdi:test-tube" }, { name: "Version control", icon: "mdi:source-branch" }, { name: "Database", icon: "mdi:database" }, { name: "Agile & Scrum", icon: "mdi:sync-circle" }, { name: "Design Patterns", icon: "mdi:puzzle-outline" }, { name: "3D Mathematics", icon: "mdi:math-compass" }, { name: "Problem Solving", icon: "mdi:head-lightbulb-outline" }] },
      { category: "Tools", items: [{ name: "Rider", icon: "skill-icons:rider-dark" }, { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" }, { name: "VS Code", icon: "skill-icons:vscode-dark" }, { name: "AI", icon: "mdi:robot-outline" }, { name: "Office", icon: "mdi:microsoft-office" }, { name: "Git", icon: "skill-icons:git" }, { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" }, { name: "Jira", icon: "logos:jira" }, { name: "Confluence", icon: "logos:confluence" }, { name: "Trello", icon: "logos:trello" }, { name: "GitHub", icon: "skill-icons:github-dark" }, { name: "GitLab", icon: "skill-icons:gitlab-dark" }] },
      { category: "Web Dev", items: [{ name: "Astro", icon: "skill-icons:astro" }, { name: "JS", icon: "skill-icons:javascript" }, { name: "TS", icon: "skill-icons:typescript" }, { name: "Html", icon: "skill-icons:html" }, { name: "CSS", icon: "skill-icons:css" }] },
      { category: "Databases", items: [{ name: "PostgreSQL", icon: "skill-icons:postgresql-dark" }, { name: "MySQL", icon: "skill-icons:mysql-dark" }] },
      { category: "Language", items: [{ name: "French", icon: "twemoji:flag-france" }, { name: "English", icon: "twemoji:flag-united-kingdom" }, { name: "Arabic", icon: "twemoji:flag-lebanon" }] }
    ],
    internships: [
      {
        date: "May 2025 - August 2025 (17 weeks)",
        title: "Gameplay Programmer Intern (NEO Project)",
        subtitle: "Ubisoft Montreal - Montreal, QC",
        companyLogo: "/images/Logo/Company/Logo_UBI_MTL.png",
        technologies: [
          { name: "C++", icon: "skill-icons:cpp" },
          { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" },
          { name: "Debugging", icon: "mdi:bug-check" },
          { name: "Jira", icon: "logos:jira" },
          { name: "Anvil", icon: "/images/Logo/Skills/Anvil_Logo.png" },
          { name: "Confluence", icon: "logos:confluence" },
          { name: "Testing", icon: "mdi:test-tube" },
          { name: "Agile & Scrum", icon: "mdi:sync-circle" },
          { name: "English", icon: "twemoji:flag-united-kingdom" }
        ],
        description: "Fighting Team of 8 | C++, Anvil engine | Agile, tasks from lead, peer-reviewed",
        bullets: [
          "Extended existing combat telemetry to send in-game events to data analysts for enemy and ability balancing.",
          "Built and adapted gameplay features for designers, e.g. a fog ability that grows with an equipped outfit.",
          "Debugged and fixed gameplay issues across health, input, animation, and targeting (line-of-sight)."
        ]
      },
      {
        date: "September 2024 - December 2024 (16 weeks)",
        title: "Software Engineering Intern (Wwise Integration Team)",
        subtitle: "Audiokinetic - Montreal, QC",
        companyLogo: "/images/Logo/Company/Audiokinetic_Logo.png",
        technologies: [
          { name: "Unreal Engine", icon: "skill-icons:unrealengine" },
          { name: "Unity", icon: "skill-icons:unity-dark" },
          { name: "C++", icon: "skill-icons:cpp" },
          { name: "C#", icon: "skill-icons:cs" },
          { name: "Agile & Scrum", icon: "mdi:sync-circle" },
          { name: "French", icon: "twemoji:flag-france" },
          { name: "English", icon: "twemoji:flag-united-kingdom" },
          { name: "Git", icon: "skill-icons:git" },
          { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" },
          { name: "Debugging", icon: "mdi:bug-check" },
          { name: "Testing", icon: "mdi:test-tube" }
        ],
        description: "Solo R&D mandate with mentor | C++/Blueprints, UE5 → Unity (C#)",
        bullets: [
          "Built a Wwise take on Unreal’s Soundscape plugin: a dynamic ambient-audio demo for sound designers.",
          "Learned Unreal Engine 5 on the job; built raycast sound selection and indoor/outdoor zones, then ported it to Unity."
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
          { name: "Git", icon: "skill-icons:git" },
          { name: "English", icon: "twemoji:flag-united-kingdom" },
          { name: "Anvil", icon: "/images/Logo/Skills/Anvil_Logo.png" },
          { name: "Agile & Scrum", icon: "mdi:sync-circle" },
          { name: "Debugging", icon: "mdi:bug-check" },
          { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" },
          { name: "XAML", icon: "mdi:xml" },
          { name: "Confluence", icon: "logos:confluence" },
          { name: "Jira", icon: "logos:jira" }
        ],
        description: "Team of 6 | C#, WPF/XAML, MVVM | Agile | shipped to main",
        bullets: [
          "Built Shortcut Explorer, a tool listing every engine shortcut, previously hard-coded with no way to find them.",
          "Parsed shortcut attributes from the C# code and added search and conflict detection; widely adopted."
        ]
      },
      {
        date: "April 2022 - June 2022 (10 weeks)",
        title: "Programmer Intern (Urbia project)",
        subtitle: "CDRIN - Matane, QC",
        companyLogo: "/images/Logo/Company/CDRIN_Logo.png",
        technologies: [
          { name: "Unity", icon: "skill-icons:unity-dark" },
          { name: "C#", icon: "skill-icons:cs" },
          { name: "Agile & Scrum", icon: "mdi:sync-circle" },
          { name: "Git", icon: "skill-icons:git" },
          { name: "GitHub", icon: "skill-icons:github-dark" },
          { name: "Teamwork", icon: "mdi:account-group" },
          { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" },
          { name: "French", icon: "twemoji:flag-france" },
          { name: "Trello", icon: "logos:trello" },
          { name: "Testing", icon: "mdi:test-tube" }
        ],
        description: "Client project, team of 5, main programmer | Unity/C# | educational city-builder",
        bullets: [
          "Completed a near-finished game: new buildings and rules, residential balance, flooding, and level tuning.",
          "Worked with a 3D artist, a manager, and the client weekly; integrated 3D models and polished the game."
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
      { category: "Langages de programmation", items: [{ name: "C#", icon: "skill-icons:cs" }, { name: "C++", icon: "skill-icons:cpp" }, { name: "Python", icon: "skill-icons:python-dark" }, { name: "Java", icon: "skill-icons:java-dark" }, { name: "C", icon: "skill-icons:c" }, { name: "SQL", icon: "mdi:database-search" }] },
      { category: "Frameworks & APIs", items: [{ name: "WPF", icon: "/images/Logo/Skills/WPF_Logo.png" }, { name: "OpenGL", icon: "logos:opengl" }, { name: "UE C++", icon: "skill-icons:unrealengine" }, { name: "Unity C#", icon: "skill-icons:unity-dark" }] },
      { category: "Génie logiciel", items: [{ name: "Débogage", icon: "mdi:bug-check" }, { name: "Travail d'équipe", icon: "mdi:account-group" }, { name: "Structures de données", icon: "mdi:file-tree" }, { name: "Tests", icon: "mdi:test-tube" }, { name: "Contrôle de version", icon: "mdi:source-branch" }, { name: "Bases de données", icon: "mdi:database" }, { name: "Agile & Scrum", icon: "mdi:sync-circle" }, { name: "Design Patterns", icon: "mdi:puzzle-outline" }, { name: "Mathématiques 3D", icon: "mdi:math-compass" }, { name: "Résolution de problèmes", icon: "mdi:head-lightbulb-outline" }] },
      { category: "Outils", items: [{ name: "Rider", icon: "skill-icons:rider-dark" }, { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" }, { name: "VS Code", icon: "skill-icons:vscode-dark" }, { name: "IA", icon: "mdi:robot-outline" }, { name: "Office", icon: "mdi:microsoft-office" }, { name: "Git", icon: "skill-icons:git" }, { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" }, { name: "Jira", icon: "logos:jira" }, { name: "Confluence", icon: "logos:confluence" }, { name: "Trello", icon: "logos:trello" }, { name: "GitHub", icon: "skill-icons:github-dark" }, { name: "GitLab", icon: "skill-icons:gitlab-dark" }] },
      { category: "Développement Web", items: [{ name: "Astro", icon: "skill-icons:astro" }, { name: "JS", icon: "skill-icons:javascript" }, { name: "TS", icon: "skill-icons:typescript" }, { name: "Html", icon: "skill-icons:html" }, { name: "CSS", icon: "skill-icons:css" }] },
      { category: "Bases de données", items: [{ name: "PostgreSQL", icon: "skill-icons:postgresql-dark" }, { name: "MySQL", icon: "skill-icons:mysql-dark" }] },
      { category: "Langues", items: [{ name: "Français", icon: "twemoji:flag-france" }, { name: "Anglais", icon: "twemoji:flag-united-kingdom" }, { name: "Arabe", icon: "twemoji:flag-lebanon" }] }
    ],
    internships: [
      {
        date: "Mai 2025 - Août 2025 (Stage de 17 semaines)",
        title: "Stagiaire programmeur gameplay (projet NEO)",
        subtitle: "Ubisoft Montréal - Montréal, QC",
        companyLogo: "/images/Logo/Company/Logo_UBI_MTL.png",
        technologies: [
          { name: "C++", icon: "skill-icons:cpp" },
          { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" },
          { name: "Débogage", icon: "mdi:bug-check" },
          { name: "Jira", icon: "logos:jira" },
          { name: "Anvil", icon: "/images/Logo/Skills/Anvil_Logo.png" },
          { name: "Confluence", icon: "logos:confluence" },
          { name: "Tests", icon: "mdi:test-tube" },
          { name: "Agile & Scrum", icon: "mdi:sync-circle" },
          { name: "Anglais", icon: "twemoji:flag-united-kingdom" }
        ],
        description: "Équipe Combat de 8 | C++, moteur Anvil | Agile, tâches confiées par le lead, revue par les pairs",
        bullets: [
          "Extension de la télémétrie de combat pour aider les analystes à équilibrer ennemis et capacités.",
          "Création et adaptation de fonctionnalités pour les designers, ex. un brouillard qui s’étend avec une tenue équipée.",
          "Débogage et correction de problèmes de gameplay : santé, entrées, animations et ciblage."
        ]
      },
      {
        date: "Septembre 2024 - Décembre 2024 (Stage de 16 semaines)",
        title: "Stagiaire ingénieur logiciel (équipe Intégration Wwise)",
        subtitle: "Audiokinetic - Montréal, QC",
        companyLogo: "/images/Logo/Company/Audiokinetic_Logo.png",
        technologies: [
          { name: "Unreal Engine", icon: "skill-icons:unrealengine" },
          { name: "Unity", icon: "skill-icons:unity-dark" },
          { name: "C++", icon: "skill-icons:cpp" },
          { name: "C#", icon: "skill-icons:cs" },
          { name: "Agile & Scrum", icon: "mdi:sync-circle" },
          { name: "Français", icon: "twemoji:flag-france" },
          { name: "Anglais", icon: "twemoji:flag-united-kingdom" },
          { name: "Git", icon: "skill-icons:git" },
          { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" },
          { name: "Débogage", icon: "mdi:bug-check" },
          { name: "Tests", icon: "mdi:test-tube" }
        ],
        description: "Mandat R&D en solo avec mentor | C++/Blueprints, UE5 → Unity (C#)",
        bullets: [
          "Création d’un équivalent Wwise du plugin Soundscape d’Unreal : une démo d’audio ambiant dynamique.",
          "Apprentissage d’UE5 sur le tas ; sons choisis par raycast, zones intérieur/extérieur, portage Unity."
        ]
      },
      {
        date: "Janvier 2024 - Mai 2024 (Stage de 16 semaines)",
        title: "Stagiaire programmeur outils",
        subtitle: "Ubisoft Montréal - Montréal, QC",
        companyLogo: "/images/Logo/Company/Logo_UBI_MTL.png",
        technologies: [
          { name: "C#", icon: "skill-icons:cs" },
          { name: "WPF", icon: "/images/Logo/Skills/WPF_Logo.png" },
          { name: "Perforce", icon: "/images/Logo/Skills/Perforce_Logo.png" },
          { name: "Git", icon: "skill-icons:git" },
          { name: "Anglais", icon: "twemoji:flag-united-kingdom" },
          { name: "Anvil", icon: "/images/Logo/Skills/Anvil_Logo.png" },
          { name: "Agile & Scrum", icon: "mdi:sync-circle" },
          { name: "Débogage", icon: "mdi:bug-check" },
          { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" },
          { name: "XAML", icon: "mdi:xml" },
          { name: "Confluence", icon: "logos:confluence" },
          { name: "Jira", icon: "logos:jira" }
        ],
        description: "Équipe de 6 | C#, WPF/XAML, MVVM | Agile | livré sur la branche principale",
        bullets: [
          "Création de Shortcut Explorer, qui liste les raccourcis du moteur, auparavant introuvables.",
          "Lecture des attributs de raccourcis dans le code C#, recherche et détection de conflits. Outil adopté par les équipes."
        ]
      },
      {
        date: "Avril 2022 - Juin 2022 (Stage de 10 semaines)",
        title: "Stagiaire programmeur (projet Urbia)",
        subtitle: "CDRIN - Matane, QC",
        companyLogo: "/images/Logo/Company/CDRIN_Logo.png",
        technologies: [
          { name: "Unity", icon: "skill-icons:unity-dark" },
          { name: "C#", icon: "skill-icons:cs" },
          { name: "Agile & Scrum", icon: "mdi:sync-circle" },
          { name: "Git", icon: "skill-icons:git" },
          { name: "GitHub", icon: "skill-icons:github-dark" },
          { name: "Travail d'équipe", icon: "mdi:account-group" },
          { name: "Visual Studio", icon: "skill-icons:visualstudio-dark" },
          { name: "Français", icon: "twemoji:flag-france" },
          { name: "Trello", icon: "logos:trello" },
          { name: "Tests", icon: "mdi:test-tube" }
        ],
        description: "Projet client, équipe de 5, programmeur principal | Unity/C# | jeu éducatif de gestion urbaine",
        bullets: [
          "Finalisation d’un jeu presque terminé : bâtiments, règles, équilibre résidentiel, inondations.",
          "Travail hebdomadaire avec un artiste 3D, un gestionnaire et le client ; intégration de modèles 3D et polissage."
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
