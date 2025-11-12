"use client"
import { useTheme } from '@/src/contexts/ThemeContext';
import Link from 'next/link';

const FeaturesSection = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: '🎯',
      title: 'Orchestration Centralisée',
      description: 'Gérez plusieurs plateformes de streaming simultanément avec une interface unifiée',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '📊',
      title: 'Statistiques en Temps Réel',
      description: 'Analysez vos performances avec des métriques détaillées et des insights actionnables',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '💬',
      title: 'Chat Interactif',
      description: 'Engagez votre audience avec des outils de modération et d\'interaction avancés',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: '🎬',
      title: 'VOD Optimisé',
      description: 'Maximisez la visibilité de votre contenu après le direct avec des outils de relecture',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: '🔧',
      title: 'Configuration Simple',
      description: 'Des guides pratiques pour configurer votre équipement sans expertise technique',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: '📈',
      title: 'ROI Maximisé',
      description: 'Transformez vos données en décisions stratégiques pour améliorer votre impact',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
            Fonctionnalités Puissantes
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Découvrez les outils qui transforment votre façon de diffuser du contenu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600'
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-2xl'
              }`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/library"
            className="inline-flex items-center px-8 py-4 gradient-impactune text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explorer toutes les fonctionnalités
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

