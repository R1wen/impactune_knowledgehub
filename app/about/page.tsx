"use client"
import Link from 'next/link';
import { useTheme } from '@/src/contexts/ThemeContext';

const AboutKnowledgeHubPage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30'} ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
      
      {/* En-tête de la Page (Titre et barre de séparation) */}
      <header className={`py-16 border-b ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
            À propos du Knowledge Hub ImpacTune
          </h1>
          <div className="w-24 h-1 gradient-impactune mx-auto rounded-full"></div>
        </div>
      </header>

      {/* Contenu Principal */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Section 1: Votre ressource centrale */}
        <div className={`rounded-xl shadow-lg p-8 border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <h2 className={`text-3xl font-bold mb-6 pb-3 border-b-2 ${theme === 'dark' ? 'text-white border-gray-700' : 'gradient-impactune-text border-gray-200'}`}>
            Votre ressource centrale pour maîtriser la diffusion interactive
          </h2>
          <p className={`mb-4 text-lg ${theme === 'dark' ? 'text-gray-300' : ''}`}>
            Si vous êtes à la recherche d'outils, de stratégies et de meilleures pratiques pour transformer vos diffusions en ligne en expériences engageantes, vous êtes arrivé à la bonne destination.
          </p>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Chez ImpacTune, nous avons conçu notre Knowledge Hub comme une plateforme dynamique dédiée à la promotion de la communication interactive et de la visibilité de contenu. Notre Hub fournit l'expertise essentielle, des ressources accessibles et éprouvées, du partage solide des connaissances entre les pairs, y compris les créateurs de contenu, les communicateurs, les experts techniques et les décideurs. Le Knowledge Hub regroupe une multitude d'informations en un lieu unique et convivial. En optimisant les outils d'intelligence artificielle que nous avons raffinés et en concevant la plateforme pour plus de clarté et d'accessibilité, nous vous aidons à maîtriser la diffusion numérique.
          </p>
        </div>

        {/* Section 2: Principales caractéristiques */}
        <div className={`rounded-xl shadow-lg p-8 border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <h2 className={`text-3xl font-bold mb-8 pb-3 border-b-2 ${theme === 'dark' ? 'text-white border-gray-700' : 'gradient-impactune-text border-gray-200'}`}>
            Principales caractéristiques du Knowledge Hub
          </h2>

          {/* Caractéristique 1: Articles Stratégiques */}
          <div className={`mb-8 p-6 rounded-lg border-l-4 border-blue-500 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
            <p className={`font-bold text-lg mb-3 ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
              1. Articles et Guides Stratégiques
            </p>
            <p className={theme === 'dark' ? 'text-gray-300 leading-relaxed' : 'text-gray-700 leading-relaxed'}>
              Plongez dans des sujets dédiés, cruciaux pour maximiser l'impact de votre contenu en ligne. Chaque domaine offre une analyse approfondie des stratégies autour de l'engagement, de l'utilisation des statistiques en temps réel, afin d'améliorer votre compréhension des spécificités du secteur du streaming interactif.
            </p>
          </div>
          
          {/* Caractéristique 2: Bibliothèque Technique */}
          <div className={`mb-8 p-6 rounded-lg border-l-4 border-indigo-500 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gradient-to-r from-indigo-50 to-purple-50'}`}>
            <p className={`font-bold text-lg mb-3 ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
              2. Bibliothèque Technique
            </p>
            <p className={theme === 'dark' ? 'text-gray-300 leading-relaxed' : 'text-gray-700 leading-relaxed'}>
              Explorez une collection de ressources précieuses, y compris des documents de recherche, des analyses de situation et des guides de démarrage. Notre bibliothèque électronique sert de dépôt central, facilitant la recherche des derniers développements dans le domaine du matériel et de la configuration logicielle de diffusion.
            </p>
          </div>

          {/* Caractéristique 3: Études de Cas & Exemples */}
          <div className={`mb-6 p-6 rounded-lg border-l-4 border-purple-500 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gradient-to-r from-purple-50 to-pink-50'}`}>
            <p className={`font-bold text-lg mb-3 ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
              3. Études de Cas & Exemples
            </p>
            <p className={theme === 'dark' ? 'text-gray-300 leading-relaxed' : 'text-gray-700 leading-relaxed'}>
              Accédez à des démonstrations concrètes et complètes d'utilisateurs qui ont réussi à atteindre leurs objectifs de visibilité grâce aux outils d'ImpacTune. Ces profils fournissent des données et des informations précieuses pour comprendre les contextes spécifiques, tout en facilitant l'analyse comparative et l'apprentissage par les pairs.
            </p>
          </div>
        </div>

        {/* Section 3: Rejoignez-nous */}
        <div className={`rounded-xl shadow-lg p-8 border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <h2 className={`text-3xl font-bold mb-6 pb-3 border-b-2 ${theme === 'dark' ? 'text-white border-gray-700' : 'gradient-impactune-text border-gray-200'}`}>
            Rejoignez-nous pour façonner l'avenir de la diffusion interactive
          </h2>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Nous vous sommes engagés à soutenir l'avancement de la diffusion numérique en l'alignant sur nos efforts sur l'innovation et la collaboration, en alignant nos efforts sur l'expérience utilisateur et l'accessibilité pour tous.
          </p>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Nous remercions tous ceux qui nous soutiennent dans cette aventure, y compris nos collègues et les spécialistes externes.
          </p>
          <p className={`mb-8 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Nous vous invitons à explorer le Knowledge Hub d'ImpacTune. Découvrez comment cette plateforme peut soutenir vos initiatives de communication, vous aider à tirer le meilleur parti de l'outil et contribuer à vos propres connaissances. Ensemble, nous pouvons façonner notre avenir de l'interaction en direct.
          </p>
          <div className={`mt-8 p-6 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'}`}>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Si vous avez des suggestions, des remarques, ou si vous avez repéré des informations inexactes, veuillez nous contacter par email à <a href="mailto:support@impactune.org" className={`${theme === 'dark' ? 'text-blue-400' : 'gradient-impactune-text'} hover:opacity-80 font-semibold underline`}>support@impactune.org</a>.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutKnowledgeHubPage;