import type { Skill } from './resume';

export interface Project {
  title: string;
  description: Record<'en' | 'fr', string | string[]>;
  tags: Record<'en' | 'fr', string[]>;
  technologies: Skill[];
  media: string[];
  link: string;
  date?: string;
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    title: "Echoes of Decay",
    description: {
      en: [
        "A 3rd person game developed in Unreal Engine 5 for the LOG725 university course.",
        "Developed in 8 weeks by a team of 3 programmers starting in February 2025, marking our first experience with the engine.",
        "The theme was \"Mother Nature\" (Mère nature) where the player gathers abandoned items to craft powerful weapons.",
        "The main goal is to purify the city from pollution and the creatures created by it.",
        "Programmed the inventory system, enemy AI and animations, crafting system, and weapon system."
      ],
      fr: [
        "Un jeu à la 3ème personne développé sous Unreal Engine 5 pour le cours universitaire LOG725.",
        "Développé en 8 semaines par une équipe de 3 programmeurs à partir de février 2025, marquant notre première expérience avec le moteur.",
        "Le thème était \"Mère nature\" : le joueur récupère des objets abandonnés pour créer des armes puissantes.",
        "L'objectif principal est de purifier la ville de la pollution et des créatures qu'elle a engendrées.",
        "Programmation du système d'inventaire, de l'IA et des animations ennemies, ainsi que des systèmes de craft et d'armes."
      ]
    },
    tags: {
      en: ["3rd Person", "Action", "University Project", "2025", "LOG725"],
      fr: ["3ème Personne", "Action", "Projet Universitaire", "2025", "LOG725"]
    },
    technologies: [
      { name: "Unreal Engine 5", icon: "skill-icons:unrealengine" },
      { name: "Blueprints", icon: "mdi:file-tree" }
    ],
    media: [
      "https://youtu.be/KRVpX3zIQgg",
      "/images/EOD/TitleScreen.png",
      "/images/EOD/GameStart.png",
      "/images/EOD/InventoryCraft.png",
      "/images/EOD/Craft.png",
      "/images/EOD/GameOver.png"
    ],
    link: "https://github.com/MohETS/Echoes_of_Decay",
    date: "2025-02"
  },
  {
    title: "Panic On Comic City !",
    description: {
      en: [
        "🏆 Won Best Accessibility Award & Nominated for Best Design and Best Technical Innovation at the Ubisoft Gamelab 2026. An asymmetrical co-op game with an 80s-90s theme, developed over 10 weeks.",
        "Collaborated closely with artists and game designers under strict deadlines.",
        "Applied 3D mathematics to calculate custom physics for a player (the roller) sliding along a dynamically moving and deforming mesh (the snake).",
        "Developed the core gameplay architecture inspired by Curve Rush mechanics."
      ],
      fr: [
        "🏆 Prix de la Meilleure Accessibilité & Nommé pour le Meilleur Design et la Meilleure Innovation Technique au Concours Universitaire Ubisoft 2026. Un jeu de coopération asymétrique sur le thème des années 80-90, développé en 10 semaines.",
        "Collaboration étroite avec des artistes et game designers sous des délais serrés.",
        "Application des mathématiques 3D pour calculer la physique personnalisée d'un joueur (le roller) glissant le long d'un maillage en mouvement et en déformation dynamique (le serpent).",
        "Développement de l'architecture de gameplay principale inspirée des mécaniques de Curve Rush."
      ]
    },
    tags: {
      en: ["Co-op", "PC", "GameLab 2026", "Asymmetrical", "Physics"],
      fr: ["Co-op", "PC", "Cubi 2026", "Asymétrique", "Physique"]
    },
    technologies: [
      { name: "Unity", icon: "skill-icons:unity-dark" },
      { name: "C#", icon: "skill-icons:cs" },
      { name: "2D Mathematics", icon: "mdi:math-compass" },
      { name: "Git", icon: "skill-icons:git" }
    ],
    media: [
      "https://youtu.be/0Q0UfIkH1_U?si=NZDiEOollDZ2e6AY",
      "https://youtu.be/5Fc6L_ePNwg",
      "/images/POCC/InGame.png",
      "/images/POCC/MainMenu.png",
      "/images/POCC/CharacterSelelection.png",
      "/images/POCC/NameSelection.png",
      "/images/POCC/Leaderboard.png",
      "/images/POCC/Credits.png"
    ],
    link: "https://manoelnohra.itch.io/panic-on-comic-city",
    date: "2026-05",
    featured: true
  },
  {
    title: "Urbia",
    description: {
      en: "A city-building simulation game developed on Unity for pedagogical purposes within the Urban Planning department at Cégep de Matane. Acted as a Programmer to resume development on an existing codebase where players must grow a city, manage resource constraints, and balance the escalating demands of an expanding population.",
      fr: "Un jeu de simulation de construction de ville développé sur Unity à des fins pédagogiques pour le département d'urbanisme du Cégep de Matane. J'ai agi en tant que programmeur pour reprendre le développement sur une base de code existante, les joueurs doivent agrandir une ville, gérer les contraintes de ressources et équilibrer les demandes croissantes d'une population en pleine expansion."
    },
    tags: {
      en: ["Simulation", "Internship", "2022", "City-Builder", "Management"],
      fr: ["Simulation", "Stage", "2022", "Construction de ville", "Gestion"]
    },
    technologies: [
      { name: "Unity", icon: "skill-icons:unity-dark" },
      { name: "C#", icon: "skill-icons:cs" },
      { name: "Git", icon: "skill-icons:git" }
    ],
    media: [
      "https://youtu.be/nk9_qUVzghE?si=rDdCwFjEgHM44uc4",
      "/images/Urbia/TitleScreen.png",
      "/images/Urbia/InGame.png",
      "/images/Urbia/InGameAdvanced.png"
    ],
    link: "https://dev.timmatane.ca/urbia",
    date: "2022-09"
  },
  {
    title: "The Plague",
    description: {
      en: [
        "🏆 Best Sound Design. A top-down, procedurally generated game developed in 48 hours during the Montreal GameJam. Reversing traditional roles, you play as the Black Plague with the objective of hunting down the doctor before he gathers a cure.",
        "Stepped in as Game Designer to conceptualize mechanics aligned with the jam's constraints and communicated the technical vision to the team.",
        "Programmed core C# mechanics, including camera controllers and base character movement.",
        "Prototyped enemy AI behaviors (the Doctor) and managed project version control by resolving Git merge conflicts."
      ],
      fr: [
        "🏆 Meilleur Sound Design. Un jeu en vue de dessus généré de manière procédurale, développé en 48 heures lors de la Montreal GameJam. Vous incarnez la peste noire avec pour objectif de traquer le médecin avant qu'il ne trouve un remède.",
        "Rôle de Game Designer pour conceptualiser des mécaniques alignées sur les contraintes de la Jam et communiquer la vision technique à l'équipe.",
        "Programmation des mécaniques C# de base, y compris les contrôleurs de caméra et les mouvements fondamentaux des personnages.",
        "Prototype de l'IA ennemie (le Médecin) et gestion du contrôle de version en résolvant les conflits de fusion Git."
      ]
    },
    tags: {
      en: ["GameJam", "2023", "Procedural Generation", "Top-Down", "AI"],
      fr: ["GameJam", "2023", "Génération Procédurale", "Vue de dessus", "IA"]
    },
    technologies: [
      { name: "Unity", icon: "skill-icons:unity-dark" },
      { name: "C#", icon: "skill-icons:cs" },
      { name: "Git", icon: "skill-icons:git" }
    ],
    media: [
      "https://youtu.be/BIpkwAC2xWw?si=C1dIM_8RxTfAh0s6"
    ],
    link: "https://manoelnohra.itch.io/the-plague",
    date: "2023-01"
  },
  {
    title: "Tower Defense Prototype",
    description: {
      en: [
        "Designed and developed gameplay, UI/UX, and code architecture utilizing a combination of C++ and Blueprints under Unreal Engine 5.",
        "Leveraged ChatGPT to accelerate engine onboarding and research optimal architectural patterns.",
        "Developed a scalable foundational base to facilitate easy gameplay extensions and data-driven implementation."
      ],
      fr: [
        "Conception et développement du gameplay, de l'UI/UX et de l'architecture du code à l'aide d'une combinaison de C++ et de Blueprints sous Unreal Engine 5.",
        "Utilisation de ChatGPT pour accélérer la prise en main du moteur et rechercher des patterns architecturaux optimaux.",
        "Développement d'une base évolutive pour faciliter l'extension des fonctionnalités et l'implémentation guidée par les données."
      ]
    },
    tags: {
      en: ["Tower Defense", "On Going", "Strategy"],
      fr: ["Tower Defense", "En cours", "Stratégie"]
    },
    technologies: [
      { name: "Unreal Engine 5", icon: "skill-icons:unrealengine" },
      { name: "C++", icon: "skill-icons:cpp" },
      { name: "Blueprints", icon: "mdi:file-tree" },
      { name: "3D Mathematics", icon: "mdi:math-compass" }
    ],
    media: [
      "https://youtu.be/6oPt-Pxkykk"
    ],
    link: "https://github.com/NohraManoel/TD",
    date: "ongoing"
  },
  {
    title: "The Legend of Jaloux",
    description: {
      en: "A 2D tactical turn-based strategy game set in a medieval fantasy dungeon. Lead a hero through rooms, gain experience, open chests, and manage action points to defeat the final boss. Developed in a team of 6 during my Computer Science degree.",
      fr: "Un jeu de stratégie tactique en 2D au tour par tour se déroulant dans un donjon médiéval-fantastique. Dirigez un héros à travers les salles, gagnez de l'expérience, ouvrez des coffres et gérez vos points d'action pour vaincre le boss final. Développé en équipe de 6 personnes durant mon cursus universitaire en informatique."
    },
    tags: {
      en: ["Turn-based", "2021", "2D", "Tactical RPG"],
      fr: ["Tour par tour", "2021", "2D", "RPG Tactique"]
    },
    technologies: [
      { name: "Unity", icon: "skill-icons:unity-dark" },
      { name: "C#", icon: "skill-icons:cs" },
      { name: "Git", icon: "skill-icons:git" }
    ],
    media: [
      "https://www.youtube.com/watch?v=PtGLqUkL84o",
      "/images/Jaloux/TitleJaloux.png",
      "/images/Jaloux/CarteJaloux.png",
      "/images/Jaloux/MenuJaloux.png",
      "/images/Jaloux/JeuJaloux.png"
    ],
    link: "https://github.com/Chopv1/The-legend-of-Jaloux",
    date: "2021-01"
  },
  {
    title: "Specialized FPS Project",
    description: {
      en: "A solo first-person shooter featuring dynamic movement mechanics such as double jumping, grappling, sliding, and ricochet shooting. Each level restricts or enables specific mechanics, forcing the player to adapt. Developed independently under faculty supervision during my exchange semester at Matane.",
      fr: "Un jeu de tir à la première personne solo mettant en scène des mécaniques de mouvement dynamiques telles que le double saut, le grappin, la glissade et les tirs par ricochet. Chaque niveau restreint ou active des mécaniques spécifiques, forçant le joueur à s'adapter. Développé de manière autonome sous la supervision des professeurs lors de mon semestre d'échange à Matane."
    },
    tags: {
      en: ["FPS", "2022", "Movement Shooter", "Solo"],
      fr: ["FPS", "2022", "Shooter de mouvement", "Solo"]
    },
    technologies: [
      { name: "Unreal Engine 4", icon: "skill-icons:unrealengine" },
      { name: "C++", icon: "skill-icons:cpp" },
      { name: "Blueprints", icon: "mdi:file-tree" }
    ],
    media: [
      "https://youtu.be/r7Ow_lh_vSI?si=llbNVUJL-147jwR5",
      "/images/FPS/gameStart.png"
    ],
    link: "https://github.com/cegepmatane/projet-specialise-2022-ManoelNohra",
    date: "2022-01"
  }
];

export const projects = projectsData.sort((a, b) => {
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  
  if (a.date === "ongoing" && b.date !== "ongoing") return -1;
  if (a.date !== "ongoing" && b.date === "ongoing") return 1;
  if (a.date === "ongoing" && b.date === "ongoing") return 0;
  
  const dateA = a.date ? new Date(a.date).getTime() : 0;
  const dateB = b.date ? new Date(b.date).getTime() : 0;
  return dateB - dateA;
});
