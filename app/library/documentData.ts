export interface DocumentData {
  title: string;
  imageSrc: string;
  date: string;
  cardLink?: string;
  category?: string;
  tags?: string[];
}

// Tableau de données exporté pour la section Bibliothèque
export const documentsData: DocumentData[] = [
  {
    title: "Tutoriel : Maîtriser le Chat Interactif pour Booster l'Engagement de votre Live",
    imageSrc: '/images/chat_interactif.jpg',
    date: 'Novembre 2025',
    cardLink: '/library/chat_interactif',
    category: 'Tutoriel',
    tags: ['Chat', 'Engagement', 'Interactivité', 'ImpacTune'],
  },
  {
    title: 'Statistiques en Temps Réel : Comment transformer vos données de diffusion en décisions stratégiques',
    imageSrc: '/images/data_driven.jpg',
    date: 'Octobre 2025',
    cardLink: '/library/data_driven',
    category: 'Statistiques',
    tags: ['Analytics', 'Données', 'Stratégie', 'ImpacTune'],
  },
  {
    title: "Le Guide de l'Équipement Simple : Configurer une diffusion de qualité avec un budget serré",
    imageSrc: '/images/quality_vid.jpg',
    date: 'Septembre 2025',
    cardLink: '/library/quality_vid',
    category: 'Configuration',
    tags: ['Équipement', 'Budget', 'Qualité', 'Setup'],
  },
  {
    title: "Optimisation de la Relecture (VOD) : Assurer la visibilité de votre contenu après le direct",
    imageSrc: '/images/vod.jpg',
    date: 'Septembre 2025',
    cardLink: '/library/vod',
    category: 'VOD',
    tags: ['VOD', 'Optimisation', 'Visibilité', 'Relecture'],
  },
  {
    title: "Le Secret des Meilleurs Interviews : Techniques de Cadre et d'Éclairage pour un rendu professionnel",
    imageSrc: '/images/interview_tech.jpg',
    date: 'Novembre 2025',
    cardLink: '/library/interview_techniques',
    category: 'Tutoriel',
    tags: ['Interview', 'Cadre', 'Éclairage', 'Production'],
  },
  {
    title: 'Au-delà du 16:9 : Explorer les formats verticaux et carrés pour les plateformes sociales',
    imageSrc: '/images/vertical_formats.jpg',
    date: 'Octobre 2025',
    cardLink: '/library/vertical_formats',
    category: 'Configuration',
    tags: ['Formats', 'Social Media', '16:9', 'Vertical'],
  },
  {
    title: "L'Art du Sound Design : Améliorer l'immersion de votre production sans équipement coûteux",
    imageSrc: '/images/sound_design_tips.jpg',
    date: 'Septembre 2025',
    cardLink: '/library/sound_design_tips',
    category: 'Tutoriel',
    tags: ['Audio', 'Sound Design', 'Production', 'Qualité'],
  },
  {
    title: 'La 4K est-elle nécessaire ? Un guide pour choisir la bonne résolution de capture pour votre projet',
    imageSrc: '/images/resolution_guide.jpg',
    date: 'Septembre 2025',
    cardLink: '/library/resolution_guide',
    category: 'Configuration',
    tags: ['Résolution', '4K', 'Qualité', 'Technique'],
  },
  {
    title: 'Les Bases de la Post-Production : Un flux de travail efficace de la dérushage à l\'exportation finale',
    imageSrc: '/images/post_production_basics.jpg',
    date: 'Août 2025',
    cardLink: '/library/post_production_basics',
    category: 'Tutoriel',
    tags: ['Post-Production', 'Montage', 'Workflow', 'Export'],
  },
  {
    title: 'Orchestration Centralisée : Gérer plusieurs plateformes de streaming simultanément',
    imageSrc: '/images/vod.jpg',
    date: 'Décembre 2025',
    cardLink: '/library/orchestration',
    category: 'Configuration',
    tags: ['Orchestration', 'Multi-plateforme', 'Streaming', 'ImpacTune'],
  },
  {
    title: 'Maximiser votre ROI : Analyse des statistiques post-streaming avec ImpacTune',
    imageSrc: '/images/data_driven.jpg',
    date: 'Décembre 2025',
    cardLink: '/library/roi_analysis',
    category: 'Statistiques',
    tags: ['ROI', 'Analytics', 'Performance', 'ImpacTune'],
  },
  {
    title: 'Streaming Multi-plateforme : Diffuser sur YouTube, Facebook et Twitch en même temps',
    imageSrc: '/images/vertical_formats.jpg',
    date: 'Janvier 2026',
    cardLink: '/library/multiplatform',
    category: 'Configuration',
    tags: ['Multi-plateforme', 'Streaming', 'YouTube', 'Facebook'],
  },
  {
    title: 'Gérer les Pics de Trafic : Optimiser votre infrastructure pour les événements en direct',
    imageSrc: '/images/quality_vid.jpg',
    date: 'Janvier 2026',
    cardLink: '/library/traffic_peaks',
    category: 'Configuration',
    tags: ['Infrastructure', 'Performance', 'Événements', 'Optimisation'],
  },
  {
    title: 'Intégration API : Connecter ImpacTune à vos outils existants',
    imageSrc: '/images/data_driven.jpg',
    date: 'Janvier 2026',
    cardLink: '/library/api_integration',
    category: 'Configuration',
    tags: ['API', 'Intégration', 'Développement', 'ImpacTune'],
  },
  {
    title: 'Monétisation du Streaming : Stratégies pour générer des revenus avec votre contenu',
    imageSrc: '/images/vod.jpg',
    date: 'Décembre 2025',
    cardLink: '/library/monetization',
    category: 'Statistiques',
    tags: ['Monétisation', 'Revenus', 'Stratégie', 'Business'],
  },
];
