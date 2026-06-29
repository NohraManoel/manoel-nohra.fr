export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string; // Institution or Location
  bullets?: string[];
  description?: string; // Standard paragraph description instead of bullets
}

export interface ResumeData {
  internships: TimelineItem[];
  education: TimelineItem[];
  extracurriculars: TimelineItem[];
}

export const resumeData: Record<'en' | 'fr', ResumeData> = {
  en: {
    internships: [
      {
        date: "May 2025 - August 2025 (17 weeks)",
        title: "Gameplay Programmer Intern - Ubisoft Montreal",
        subtitle: "Montreal, Quebec, Canada",
        bullets: [
          "Learned and worked with an in-house game engine (Anvil).",
          "Debugged and resolved complex issues.",
          "Created systems to streamline feature implementation for designers.",
          "Added functionalities to the game engine and tested the game.",
          "Worked in a team environment and explained technical terms to non-technical stakeholders."
        ]
      },
      {
        date: "September 2024 - December 2024 (15 weeks)",
        title: "Software Engineer Intern - Audiokinetic",
        subtitle: "Montreal, Quebec, Canada",
        bullets: [
          "Deepened knowledge of Unreal Engine 5 and Unity through the Wwise integration.",
          "Created a dynamic audio environment system that is easily customizable for designers.",
          "Worked independently, researched, and documented technical solutions efficiently.",
          "Prepared technical presentations and brought original ideas to production.",
          "Found solutions to complex problems and explained technical terms clearly."
        ]
      },
      {
        date: "January 2024 - May 2024 (16 weeks)",
        title: "Tools Programmer Intern - Ubisoft Montreal",
        subtitle: "Montreal, Quebec, Canada",
        bullets: [
          "Learned and adopted a new framework and programming language (WPF and XAML).",
          "Worked in a team environment, adapting to security and code styling guidelines.",
          "Worked on a mandate and even exceeded expectations.",
          "Found optimization solutions and resolved bugs."
        ]
      },
      {
        date: "2022 (10 weeks)",
        title: "Programmer Intern (Urbia Video Game Project) - CDRIN",
        subtitle: "Matane, Quebec, Canada",
        bullets: [
          "Evaluated and analyzed client requirements and communicated effectively.",
          "Adapted to a pre-existing external codebase.",
          "Contributed innovative ideas and resolved complex development problems.",
          "Explained technical elements clearly to the client."
        ]
      },
      {
        date: "2018 (2 weeks)",
        title: "Helpdesk Technician Intern - Econocom",
        subtitle: "Grenoble, France",
        bullets: [
          "Evaluated and analyzed customer situations.",
          "Proposed appropriate technical solutions."
        ]
      }
    ],
    education: [
      {
        date: "September 2022 - April 2026",
        title: "Bachelor in Software Engineering (Graduated)",
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
        subtitle: "ÉTS, Montreal, Quebec, Canada",
        bullets: [
          "Participated in competitive leagues and tournaments, maintaining composure under pressure.",
          "Organized club events (tournaments, LAN parties) and communicated across teams.",
          "Analyzed gameplay data and prepared individual or team training sessions."
        ]
      },
      {
        date: "2022",
        title: "Club Conjure (Video Game Creation Club) - Member",
        subtitle: "ÉTS, Montreal, Quebec, Canada",
        bullets: [
          "Organized events (Gala, GameJam) and participated in GameJams.",
          "Worked in a team environment to resolve project issues under tight deadlines."
        ]
      }
    ]
  },
  fr: {
    internships: [
      {
        date: "Mai 2025 - Août 2025 (Stage de 17 semaines)",
        title: "Stagiaire Programmeur Gameplay — Ubisoft Montréal",
        subtitle: "Montréal, Québec, Canada",
        bullets: [
          "Apprentissage et travail sur un moteur de jeu interne (Anvil).",
          "Débogage et résolution de problèmes complexes.",
          "Création de systèmes pour simplifier l'intégration des fonctionnalités par les designers.",
          "Ajout de fonctionnalités au moteur de jeu et tests du jeu.",
          "Travail en équipe et vulgarisation de termes techniques pour les parties prenantes non techniques."
        ]
      },
      {
        date: "Septembre 2024 - Décembre 2024 (Stage de 15 semaines)",
        title: "Stagiaire Ingénieur Logiciel — Audiokinetic",
        subtitle: "Montréal, Québec, Canada",
        bullets: [
          "Approfondissement des connaissances sur Unreal Engine 5 et Unity.",
          "Création d'un système d'environnement audio dynamique facilement personnalisable pour les designers.",
          "Travail autonome, recherche et documentation efficace de solutions techniques.",
          "Préparation de présentations techniques et intégration d'idées originales en production.",
          "Recherche de solutions à des problèmes complexes et explications claires des termes techniques."
        ]
      },
      {
        date: "Janvier 2024 - Mai 2024 (Stage de 16 semaines)",
        title: "Stagiaire Programmeur Outils — Ubisoft Montréal",
        subtitle: "Montréal, Québec, Canada",
        bullets: [
          "Apprentissage et adoption d'un nouveau framework et langage de programmation (WPF et XAML).",
          "Travail en équipe, adaptation aux directives de sécurité et aux normes de style de code.",
          "Recherche de solutions d'optimisation et résolution de bugs logiciels complexes."
        ]
      },
      {
        date: "2022 (Stage de 10 semaines)",
        title: "Stagiaire Programmeur (Projet de jeu vidéo Urbia) — CDRIN",
        subtitle: "Matane, Québec, Canada",
        bullets: [
          "Évaluation, analyse des besoins clients et communication efficace avec le client et l'équipe.",
          "Adaptation à une base de code externe préexistante.",
          "Apport d'idées novatrices au projet et résolution de problèmes de développement complexes.",
          "Explications claires des éléments techniques au client."
        ]
      },
      {
        date: "2018 (2 semaines)",
        title: "Stagiaire Technicien Helpdesk — Econocom",
        subtitle: "Grenoble, France",
        bullets: [
          "Évaluation et analyse des situations clients.",
          "Proposition de solutions techniques adaptées."
        ]
      }
    ],
    education: [
      {
        date: "Septembre 2022 - Avril 2026",
        title: "Baccalauréat en Génie Logiciel (Diplômé)",
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
        title: "Club EsporTS — Joueur de l'alignement principal (Équipe 1 Rocket League)",
        subtitle: "ÉTS, Montréal, Québec, Canada",
        bullets: [
          "Participation à des ligues et tournois compétitifs, gestion du stress lors de matchs intenses.",
          "Organisation d'événements du club (tournois, LAN) et communication intra/inter-équipes.",
          "Analyse des données de jeu et préparation de sessions d'entraînement individuelles et collectives."
        ]
      },
      {
        date: "2022",
        title: "Club Conjure (Club de création de jeux vidéo) — Membre",
        subtitle: "ÉTS, Montréal, Québec, Canada",
        bullets: [
          "Organisation d'événements (Gala, GameJam) et participation à des GameJams.",
          "Travail en équipe pour résoudre des problèmes de projet sous des délais serrés."
        ]
      }
    ]
  }
};
