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
      en: ["University", "Action", "3rd Person"],
      fr: ["Université", "Action", "3ème personne"]
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
        "🏆 Best Accessibility Award at Ubisoft Game Lab 2026 (also nominated for Best Design and Best Technical Innovation). An 80s-90s themed asymmetrical co-op endless runner, built in 10 weeks by a team of 8, where I was the main programmer.",
        "Wrote custom 2D physics so one player (the roller) rides the other player's ramp (the snake), a mesh that moves and deforms in real time.",
        "Designed and built the tricks, combos, and scoring system.",
        "Exposed difficulty settings for accessibility, and worked closely with artists and game designers under tight deadlines."
      ],
      fr: [
        "🏆 Prix de la Meilleure accessibilité à l'Ubisoft Game Lab 2026 (nommé aussi pour le Meilleur design et la Meilleure innovation technique). Un endless runner coopératif asymétrique sur le thème des années 80-90, réalisé en 10 semaines par une équipe de 8, en tant que programmeur principal.",
        "Physique 2D sur mesure : un joueur (le roller) glisse sur la rampe de l'autre joueur (le serpent), un maillage qui bouge et se déforme en temps réel.",
        "Conception et code des figures, des combos et du système de score.",
        "Réglages de difficulté pour l'accessibilité, en collaboration étroite avec les artistes et game designers sous des délais serrés."
      ]
    },
    tags: {
      en: ["Award-Winning", "University", "Co-op", "Physics"],
      fr: ["Primé", "Université", "Co-op", "Physique"]
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
      en: [
        "An educational city-builder made in Unity for the Urban Planning department at Cégep de Matane. Client project at CDRIN (10-week internship, team of 5), where I was the main programmer on a near-finished game.",
        "Added new buildings, rules, flooding, and residential balance, then tuned the levels.",
        "Worked weekly with a 3D artist, a manager, and the client; integrated 3D models and polished the game."
      ],
      fr: [
        "Un jeu éducatif de gestion urbaine sous Unity pour le département d'urbanisme du Cégep de Matane. Projet client au CDRIN (stage de 10 semaines, équipe de 5), en tant que programmeur principal sur un jeu presque terminé.",
        "Ajout de bâtiments, de règles, d'inondations et de l'équilibrage résidentiel, puis réglage des niveaux.",
        "Travail hebdomadaire avec un artiste 3D, un gestionnaire et le client ; intégration de modèles 3D et polissage du jeu."
      ]
    },
    tags: {
      en: ["Internship", "Simulation", "City-Builder"],
      fr: ["Stage", "Simulation", "Gestion urbaine"]
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
        "🏆 Best Sound Design at the Montreal GameJam. A top-down game made in 48 hours by a team of 7, where you play as the Black Plague hunting down the Doctor before he finds a cure.",
        "Co-designed the core loop: infect civilians to light up the map and track the Doctor.",
        "Programmed the camera, character movement, and the Doctor's enemy AI.",
        "Handled version control and resolved Git merge conflicts under jam pressure."
      ],
      fr: [
        "🏆 Prix du Meilleur design sonore à la Montréal GameJam. Un jeu en vue de dessus réalisé en 48 h par une équipe de 7, où vous incarnez la peste noire qui traque le Docteur avant qu'il ne trouve un remède.",
        "Co-conception de la boucle de jeu : infecter les civils pour éclairer la carte et traquer le Docteur.",
        "Programmation de la caméra, du déplacement des personnages et de l'IA ennemie du Docteur.",
        "Gestion du contrôle de version et résolution des conflits Git sous la pression de la jam."
      ]
    },
    tags: {
      en: ["Award-Winning", "Game Jam", "Top-Down", "AI"],
      fr: ["Primé", "Game Jam", "Vue de dessus", "IA"]
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
        "A solo tower defense game built on my own game idea in Unreal Engine 5 (C++ and Blueprints). Playable from start to finish, now in polish.",
        "Extended the Gameplay Ability System to drive tower, enemy, and boss stats and abilities.",
        "Wrote Python build and test scripts, and an Excel import tool for game data.",
        "Built a scalable, data-driven base so new gameplay content is easy to add."
      ],
      fr: [
        "Un tower defense développé seul à partir de ma propre idée de jeu sous Unreal Engine 5 (C++ et Blueprints). Jouable du début à la fin, en cours de finition.",
        "Extension du Gameplay Ability System pour les stats et capacités des tours, ennemis et boss.",
        "Scripts Python de build et de test, et outil d'import des données de jeu depuis Excel.",
        "Base évolutive et pilotée par les données pour ajouter facilement du contenu de gameplay."
      ]
    },
    tags: {
      en: ["Solo", "Strategy", "Ongoing"],
      fr: ["Solo", "Stratégie", "En cours"]
    },
    technologies: [
      { name: "Unreal Engine 5", icon: "skill-icons:unrealengine" },
      { name: "C++", icon: "skill-icons:cpp" },
      { name: "Blueprints", icon: "mdi:file-tree" },
      { name: "Gameplay Ability System", icon: "mdi:lightning-bolt" },
      { name: "Python", icon: "skill-icons:python-dark" }
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
      en: ["University", "Strategy", "Turn-Based"],
      fr: ["Université", "Stratégie", "Tour par tour"]
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
      en: ["University", "Solo", "Action", "FPS"],
      fr: ["Université", "Solo", "Action", "FPS"]
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
