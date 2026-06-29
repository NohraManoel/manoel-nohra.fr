export interface Project {
  title: string;
  description: Record<'en' | 'fr', string>;
  tags: Record<'en' | 'fr', string[]>;
  media: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Panic On Comic City !",
    description: {
      en: "🏆 Won Best Accessibility Award & Nominated for Best Design and Best Technical Innovation at the Ubisoft Gamelab 2026. An asymmetrical co-op game with an 80s-90s theme, developed over 10 weeks. Players team up as a roller and a snake to maximize their score, featuring flexible controls supporting dual gamepads, keyboard co-op, or solo keyboard play.",
      fr: "🏆 Nous avons remporté le prix de la Meilleure Accessibilité & Nommé pour le Meilleur Design et la Meilleure Innovation Technique au Concours Universitaire Ubisoft 2026. Un jeu de coopération asymétrique sur le thème des années 80-90, développé en 10 semaines. Les joueurs font équipe en incarnant un roller et un serpent pour maximiser leur score. Propose des contrôles flexibles compatibles avec deux manettes, un combo manette/clavier ou un clavier seul."
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
      en: "🏆 Best Sound Design. A top-down, procedurally generated game developed in 48 hours during the Montreal GameJam. Reversing traditional roles, you play as the Black Plague with the objective of hunting down the doctor before he gathers a cure. Features a variety of gameplay abilities including a tracking radar, a dash mechanics, slows, and a passive infection zone to corrupt civilians and expand your vision.",
      fr: "🏆 Meilleur Sound Design. Un jeu en vue de dessus généré de manière procédurale, développé en 48 heures lors de la Montreal GameJam. Vous incarnez la peste noire avec pour objectif de traquer le médecin avant qu'il ne trouve un remède. Propose diverses compétences de gameplay incluant un radar de suivi, une mécanique de dash, des ralentissements et une zone d'infection passive pour corrompre les civils et étendre votre vision."
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
      en: "Used Unreal Engine 5 to create a tower defense prototype during my free time. The game is as basic as a Tower Defense, I may expand the game into a roguelike if the design comes up nice. I developed the core mechanics of the game, including enemy pathfinding, tower placement, and wave management, while also implementing a simple UI to display player health and resources.",
      fr: "Utilisation d'Unreal Engine 5 pour créer un prototype de tower defense pendant mon temps libre. Le jeu repose sur les bases classiques du genre, avec la possibilité de faire évoluer le design vers un roguelike. J'ai développé les mécaniques fondamentales du jeu, notamment le pathfinding des ennemis, le placement des tours et la gestion des vagues, tout en implémentant une interface utilisateur simple pour afficher la santé et les ressources du joueur."
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
