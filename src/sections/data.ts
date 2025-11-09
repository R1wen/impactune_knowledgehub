export interface DocumentData {
  title: string;
  imageSrc: string;
  date: string;
  cardLink?: string;
}

export const documentsData: DocumentData[] = [
  {
    title: "Tutoriel : Maîtriser le Chat Interactif pour Booster l'Engagement de votre Live",
    imageSrc: '/images/chat_interactif.jpg',
    date: 'Novembre 2025',
  cardLink: '/library/maitriser-chat',
  },
  {
    title: 'Comment transformer vos données de diffusion en décisions stratégiques',
    imageSrc: '/images/data_driven.jpg',
    date: 'Octobre 2025',
  cardLink: '/library/data-strategie',
  },
  {
    title: "Le Guide de l'Équipement Simple : Configurer une diffusion de qualité avec un budget serré",
    imageSrc: '/images/quality_vid.jpg',
    date: 'Septembre 2025',
  cardLink: '/library/setup-budget',
  },
  {
    title: "Optimisation de la Relecture (VOD) : Assurer la visibilité de votre contenu après le direct",
    imageSrc: '/images/vod.jpg',
    date: 'Septembre 2025',
  cardLink: '/library/optimisation-vod',
  },
];