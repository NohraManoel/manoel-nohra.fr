export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string; // Institution or Location
  bullets?: string[];
  description?: string; // Standard paragraph description instead of bullets
}

export interface SkillItem {
  category: string;
  items: string;
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
      { category: "Object oriented language", items: "C#, C++" },
      { category: "Game Engine", items: "Unreal Engine, Unity, Unity VR, Anvil" },
      { category: "Software Engineering", items: "Agile & Scrum, Design Patterns, 3D Mathematics" },
      { category: "Framework & APIs", items: "WPF, OpenGL, Unreal Engine C++, Unity C#" },
      { category: "Tools", items: "Git, Perforce, Jira, Confluence, Trello, GitHub, GitLab" },
      { category: "Language", items: "French (native), English (Bilingual), Arabic (Lebanese dialect)" }
    ],
    internships: [
      {
        date: "May 2025 - August 2025 (17 weeks)",
        title: "Gameplay Programmer Intern - Ubisoft Montreal",
        subtitle: "Montreal, Quebec, Canada",
        bullets: [
          "Integrated within the Combat Team to debug and solve complex gameplay issues in C++, including character animation clipping.",
          "Improved core combat mechanics by adding line-of-sight checks to the player targeting system, preventing locks on hidden enemies.",
          "Developed a data-tracking system to monitor player behavior, enabling designers to analyze difficulty bottlenecks and enemy balancing.",
          "Expanded existing codebases using established patterns to provide game designers with new tools and systems tailored to their needs.",
          "Created and implemented systems to streamline workflows for game designers."
        ]
      },
      {
        date: "September 2024 - December 2024 (15 weeks)",
        title: "Software Engineer Intern - Audiokinetic",
        subtitle: "Montreal, Quebec, Canada",
        bullets: [
          "Developed a dynamic audio environment system for Unreal Engine 5 using C++ and Blueprints, ensuring it was easily adaptable for sound designers.",
          "Ported the dynamic audio system to Unity using C#, effectively leveraging the Wwise integration across both engines.",
          "Worked independently to troubleshoot technical issues and delivered presentations to explain complex technical concepts to the team.",
          "Prepared technical presentations and brought original ideas to production."
        ]
      },
      {
        date: "January 2024 - May 2024 (16 weeks)",
        title: "Tools Programmer Intern - Ubisoft Montreal",
        subtitle: "Montreal, Quebec, Canada",
        bullets: [
          "Developed a comprehensive 'Shortcut Explorer' tool using WPF and XAML, featuring a visual keyboard UI and dynamic dual-column data views to manage engine hotkeys.",
          "Implemented advanced search, filtering, and conflict detection systems, allowing users to press complex key combinations (Shift/Alt/Ctrl) to instantly view assigned bindings.",
          "Engineered a system to dynamically fetch and parse shortcut data directly from the codebase using specific tags.",
          "Adapted to strict safety and coding standards within a team environment."
        ]
      },
      {
        date: "2022 (10 weeks)",
        title: "Programmer Intern (Urbia Video Game Project) - CDRIN",
        subtitle: "Matane, Quebec, Canada",
        bullets: [
          "Adapted and optimized an existing Unity codebase within an Agile environment to deliver client-requested features.",
          "Implemented new gameplay rules and buildings, integrated assets, and adjusted maps to meet specific project needs.",
          "Performed game balancing and communicated technical progress clearly to clients and colleagues"
        ]
      }
    ],
    education: [
      {
        date: "September 2022 - April 2026",
        title: "Bachelor in Software Engineering",
        subtitle: "École de technologie supérieure (ÉTS), Montreal, Quebec, Canada",
        description: "A 4-year program to become a software engineer with 3 internships."
      },
      {
        date: "2022",
        title: "Semester 4 in Quebec (Study Abroad)",
        subtitle: "Cégep de Matane, Matane, Quebec, Canada",
        description: "Spent the last semester of my DUT at a college in Quebec to graduate."
      },
      {
        date: "2022",
        title: "Two-Year University Degree in Computer Science (DUT)",
        subtitle: "Université Claude Bernard Lyon 1, France",
        description: "Learned the foundations of computer science and discovered software development while gaining advanced technical knowledge."
      },
      {
        date: "2020",
        title: "Scientific High School Diploma, Mathematics Specialization",
        subtitle: "Lycée Saint Jean Bosco, Cluses, France",
        description: "Graduated with honors (Mention Bien)."
      }
    ],
    extracurriculars: [
      {
        date: "September 2022 - August 2025",
        title: "Club EsporTS (Esports Club) - Rocket League Team 1 Main Player",
        subtitle: "ÉTS, Montreal, Quebec, Canada"
      },
      {
        date: "2022",
        title: "Club Conjure (Video Game Creation Club) - Member",
        subtitle: "ÉTS, Montreal, Quebec, Canada"
      }
    ]
  },
  fr: {
    skills: [
      { category: "Langages orientés objet", items: "C#, C++" },
      { category: "Moteurs de jeu", items: "Unreal Engine, Unity, Unity VR, Anvil" },
      { category: "Génie logiciel", items: "Agile & Scrum, Design Patterns, Mathématiques 3D" },
      { category: "Frameworks & APIs", items: "WPF, OpenGL, Unreal Engine C++, Unity C#" },
      { category: "Outils", items: "Git, Perforce, Jira, Confluence, Trello, GitHub, GitLab" },
      { category: "Langues", items: "Français (langue maternelle), Anglais (bilingue), Arabe (dialecte libanais)" }
    ],
    internships: [
      {
        date: "Mai 2025 - Août 2025 (Stage de 17 semaines)",
        title: "Stagiaire Programmeur Gameplay - Ubisoft Montréal",
        subtitle: "Montréal, Québec, Canada",
        bullets: [
          "Intégrer au sein de l'équipe de Combat pour déboguer et résoudre des problèmes de gameplay complexes en C++, notamment le clipping d'animations de personnages.",
          "Améliorer les mécaniques de combat de base en ajoutant des vérifications de ligne de vue au système de ciblage du joueur, empêchant le verrouillage d'ennemis cachés.",
          "Développer un système de suivi de données pour surveiller le comportement des joueurs, permettant aux designers d'analyser les goulots d'étranglement de difficulté et l'équilibrage des ennemis.",
          "Étendre les bases de code existantes en utilisant des patterns établis pour fournir aux game designers de nouveaux outils et systèmes adaptés à leurs besoins.",
        ]
      },
      {
        date: "Septembre 2024 - Décembre 2024 (Stage de 15 semaines)",
        title: "Stagiaire Ingénieur Logiciel - Audiokinetic",
        subtitle: "Montréal, Québec, Canada",
        bullets: [
          "Développement d'un système d'environnement d'audio dynamique pour Unreal Engine 5 avec le C++ et les Blueprints, garantissant sa flexibilité et sa facilité d'implémentation pour les sound designers.",
          "Portage du système d'environnement audio dynamique vers Unity en C#, exploitant efficacement l'intégration de Wwise sur les deux moteurs.",
          "Travail en autonomie pour résoudre des problèmes techniques et réalisation de présentations techniques pour vulgariser des concepts complexes auprès de l'équipe.",
          "Préparation de présentations techniques et intégration d'idées originales en production."
        ]
      },
      {
        date: "Janvier 2024 - Mai 2024 (Stage de 16 semaines)",
        title: "Stagiaire Programmeur Outils - Ubisoft Montréal",
        subtitle: "Montréal, Québec, Canada",
        bullets: [
          "Développement d'un outil complet de recherche de raccourcis ('Shortcut Explorer') à l'aide de WPF et XAML, doté d'une interface de clavier visuelle et de vues de données dynamiques en deux colonnes pour gérer les raccourcis clavier du moteur.",
          "Implémentation de systèmes avancés de recherche, de filtrage et de détection de conflits, permettant aux utilisateurs d'appuyer sur des combinaisons de touches complexes (Shift/Alt/Ctrl) pour afficher instantanément les raccourcis associés.",
          "Conception d'un système pour récupérer et analyser dynamiquement les données de raccourcis directement depuis la base de code à l'aide de balises (tags) spécifiques.",
          "Adaptation aux normes strictes de sécurité et de style de code dans un environnement d'équipe."
        ]
      },
      {
        date: "2022 (Stage de 10 semaines)",
        title: "Stagiaire Programmeur (Projet de jeu vidéo Urbia) - CDRIN",
        subtitle: "Matane, Québec, Canada",
        bullets: [
          "Adaptation et optimisation d'une base de code Unity existante dans un environnement Agile pour livrer les fonctionnalités demandées par le client.",
          "Implémentation de nouvelles règles de gameplay et de bâtiments, intégration d'assets et ajustement de cartes pour répondre aux besoins spécifiques du projet.",
          "Équilibrage de jeu et communication claire de l'avancement technique avec les clients et collègues."
        ]
      }
    ],
    education: [
      {
        date: "Septembre 2022 - Avril 2026",
        title: "Baccalauréat en Génie Logiciel",
        subtitle: "École de technologie supérieure (ÉTS), Montréal, Québec, Canada",
        description: "Un programme de 4 ans pour devenir ingénieur logiciel, comprenant 3 stages obligatoires."
      },
      {
        date: "2022",
        title: "Session 4 au Québec (Études à l'étranger)",
        subtitle: "Cégep de Matane, Matane, Québec, Canada",
        description: "Dernier semestre de mon DUT effectué dans un cégep au Québec pour l'obtention du diplôme."
      },
      {
        date: "2022",
        title: "Diplôme Universitaire de Technologie en Informatique (DUT)",
        subtitle: "Université Claude Bernard Lyon 1, France",
        description: "Apprentissage des fondements de l'informatique, découverte du développement logiciel et acquisition de connaissances techniques avancées."
      },
      {
        date: "2020",
        title: "Baccalauréat Scientifique, Spécialité Mathématiques",
        subtitle: "Lycée Saint Jean Bosco, Cluses, France",
        description: "Obtenu avec mention Bien."
      }
    ],
    extracurriculars: [
      {
        date: "Septembre 2022 - Août 2025",
        title: "Club EsporTS - Joueur et capitaine de l'équipe principal de Rocket League",
        subtitle: "ÉTS, Montréal, Québec, Canada"
      },
      {
        date: "2022",
        title: "Club Conjure (Club de création de jeux vidéo) - Membre",
        subtitle: "ÉTS, Montréal, Québec, Canada"
      }
    ]
  }
};
