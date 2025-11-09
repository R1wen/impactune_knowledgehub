export interface DocumentData {
  title: string;
  imageSrc: string;
  date: string;
  cardLink?: string;
}

export const documentsData: DocumentData[] = [
  {
    title: "Tutoriel : Maîtriser le Chat Interactif pour Booster l'Engagement de votre Live",
    imageSrc: '/images/guide-chat-interactif.png',
    date: 'Novembre 2025',
    cardLink: '/articles/maitriser-chat',
  },
  {
    title: 'Comment transformer vos données de diffusion en décisions stratégiques',
    imageSrc: '/images/analyse-stats.png',
    date: 'Octobre 2025',
    cardLink: '/articles/data-strategie',
  },
  {
    title: "Le Guide de l'Équipement Simple : Configurer une diffusion de qualité avec un budget serré",
    imageSrc: '/images/guide-materiel.png',
    date: 'Septembre 2025',
    cardLink: '/articles/setup-budget',
  },
  {
    title: "Optimisation de la Relecture (VOD) : Assurer la visibilité de votre contenu après le direct",
    imageSrc: '/images/optimisation-vod.png',
    date: 'Septembre 2025',
    cardLink: '/articles/optimisation-vod',
  },
];