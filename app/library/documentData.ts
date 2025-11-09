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
];
