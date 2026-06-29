export interface Project {
  title: string;
  description: Record<'en' | 'fr', string | string[]>;
  tags: Record<'en' | 'fr', string[]>;
  media: string[];
  link: string;
}

export const projects: Project[] = [
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
      en: ["Unity", "Co-op", "PC", "Ubisoft 2026"],
      fr: ["Unity", "Co-op", "PC", "Ubisoft 2026"]
    },
    media: [
      "https://youtu.be/0Q0UfIkH1_U?si=NZDiEOollDZ2e6AY",
      "/images/POCC/InGame.png"
    ],
    link: "https://manoelnohra.itch.io/panic-on-comic-city"
  },
  {
    title: "Urbia",
    description: {
      en: "A city-building simulation game developed on Unity for pedagogical purposes within the Urban Planning department at Cégep de Matane. Acted as a Programmer to resume development on an existing codebase where players must grow a city, manage resource constraints, and balance the escalating demands of an expanding population.",
      fr: "Un jeu de simulation de construction de ville développé sur Unity à des fins pédagogiques pour le département d'urbanisme du Cégep de Matane. J'ai agi en tant que programmeur pour reprendre le développement sur une base de code existante, les joueurs doivent agrandir une ville, gérer les contraintes de ressources et équilibrer les demandes croissantes d'une population en pleine expansion."
    },
    tags: {
      en: ["Unity", "Simulation", "Internship", "2022"],
      fr: ["Unity", "Simulation", "Stage", "2022"]
    },
    media: [
      "https://youtu.be/nk9_qUVzghE?si=rDdCwFjEgHM44uc4",
      "/images/Urbia/TitleScreen.png",
      "/images/Urbia/InGame.png",
      "/images/Urbia/InGameAdvanced.png"
    ],
    link: "https://dev.timmatane.ca/urbia"
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
      en: ["Unity", "GameJam", "2023"],
      fr: ["Unity", "GameJam", "2023"]
    },
    media: [
      "https://youtu.be/BIpkwAC2xWw?si=C1dIM_8RxTfAh0s6"
    ],
    link: "https://manoelnohra.itch.io/the-plague"
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
      en: ["Unreal Engine 5", "Tower Defense", "2025"],
      fr: ["Unreal Engine 5", "Tower Defense", "2025"]
    },
    media: [
      "/images/TD/InGame1.png",
      "/images/TD/InGame.png",
      "/images/TD/InGame3.png"
    ],
    link: "https://github.com/NohraManoel/TD"
  },
  {
    title: "The Legend of Jaloux",
    description: {
      en: "A 2D tactical turn-based strategy game set in a medieval fantasy dungeon. Lead a hero through rooms, gain experience, open chests, and manage action points to defeat the final boss. Developed in a team of 6 during my Computer Science degree.",
      fr: "Un jeu de stratégie tactique en 2D au tour par tour se déroulant dans un donjon médiéval-fantastique. Dirigez un héros à travers les salles, gagnez de l'expérience, ouvrez des coffres et gérez vos points d'action pour vaincre le boss final. Développé en équipe de 6 personnes durant mon cursus universitaire en informatique."
    },
    tags: {
      en: ["Unity", "2021"],
      fr: ["Unity", "2021"]
    },
    media: [
      "https://www.youtube.com/watch?v=PtGLqUkL84o",
      "/images/Jaloux/TitleJaloux.png",
      "/images/Jaloux/CarteJaloux.png",
      "/images/Jaloux/MenuJaloux.png",
      "/images/Jaloux/JeuJaloux.png"
    ],
    link: "https://github.com/Chopv1/The-legend-of-Jaloux"
  },
  {
    title: "Specialized FPS Project",
    description: {
      en: "A solo first-person shooter featuring dynamic movement mechanics such as double jumping, grappling, sliding, and ricochet shooting. Each level restricts or enables specific mechanics, forcing the player to adapt. Developed independently under faculty supervision during my exchange semester at Matane.",
      fr: "Un jeu de tir à la première personne solo mettant en scène des mécaniques de mouvement dynamiques telles que le double saut, le grappin, la glissade et les tirs par ricochet. Chaque niveau restreint ou active des mécaniques spécifiques, forçant le joueur à s'adapter. Développé de manière autonome sous la supervision des professeurs lors de mon semestre d'échange à Matane."
    },
    tags: {
      en: ["Unreal Engine 4", "FPS", "2023"],
      fr: ["Unreal Engine 4", "FPS", "2023"]
    },
    media: [
      "https://youtu.be/r7Ow_lh_vSI?si=llbNVUJL-147jwR5",
      "/images/FPS/gameStart.png"
    ],
    link: "https://github.com/cegepmatane/projet-specialise-2022-ManoelNohra"
  }
];
