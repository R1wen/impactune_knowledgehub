export interface DocumentData {
  title: string;
  imageSrc: string;
  date: string;
  cardLink?: string;
}

// Tableau de données exporté pour la section Bibliothèque
export const documentsData: DocumentData[] = [
  {
    title: "Tutoriel : Maîtriser le Chat Interactif pour Booster l'Engagement de votre Live",
    imageSrc: '/images/chat_interactif.jpg',
    date: 'Novembre 2025',
    cardLink: '/library/chat_interactif',
  },
  {
    title: 'Statistiques en Temps Réel : Comment transformer vos données de diffusion en décisions stratégiques',
    imageSrc: '/images/data_driven.jpg',
    date: 'Octobre 2025',
    cardLink: '/library/data_driven',
  },
  {
    title: "Le Guide de l'Équipement Simple : Configurer une diffusion de qualité avec un budget serré",
    imageSrc: '/images/quality_vid.jpg',
    date: 'Septembre 2025',
    cardLink: '/library/quality_vid',
  },
  {
    title: "Optimisation de la Relecture (VOD) : Assurer la visibilité de votre contenu après le direct",
    imageSrc: '/images/vod.jpg',
    date: 'Septembre 2025',
    cardLink: '/library/vod',
  },
  {
    title: "Le Secret des Meilleurs Interviews : Techniques de Cadre et d'Éclairage pour un rendu professionnel",
    imageSrc: '/images/interview_tech.jpg',
    date: 'Novembre 2025',
    cardLink: '/library/interview_techniques',
  },
  {
    title: 'Au-delà du 16:9 : Explorer les formats verticaux et carrés pour les plateformes sociales',
    imageSrc: '/images/vertical_formats.jpg',
    date: 'Octobre 2025',
    cardLink: '/library/vertical_formats',
  },
  {
    title: "L'Art du Sound Design : Améliorer l'immersion de votre production sans équipement coûteux",
    imageSrc: '/images/sound_design_tips.jpg',
    date: 'Septembre 2025',
    cardLink: '/library/sound_design_tips',
  },
  {
    title: 'La 4K est-elle nécessaire ? Un guide pour choisir la bonne résolution de capture pour votre projet',
    imageSrc: '/images/resolution_guide.jpg',
    date: 'Septembre 2025',
    cardLink: '/library/resolution_guide',
  },
  {
    title: 'Les Bases de la Post-Production : Un flux de travail efficace de la dérushage à l\'exportation finale',
    imageSrc: '/images/post_production_basics.jpg',
    date: 'Août 2025',
    cardLink: '/library/post_production_basics',
  } 
];
