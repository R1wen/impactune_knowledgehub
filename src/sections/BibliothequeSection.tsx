"use client"
import DocumentCard from '../components/ArticleCard';
import Link from 'next/link';
import { documentsData, DocumentData } from '@/app/library/documentData';
import { useTheme } from '@/src/contexts/ThemeContext';

const BibliothequeSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`relative py-24 overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-black' : 'bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30'}`}>
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full gradient-impactune text-white text-sm font-semibold mb-6 shadow-lg">
            <span className="mr-2">📚</span>
            Ressources Premium
          </div>
          
          {/* Titre de la Section */}
          <h2 className={`text-4xl md:text-6xl font-extrabold mb-6 ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
            Explorez Notre Bibliothèque
          </h2>
          
          {/* Description de la Section */}
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Une collection complète de ressources expertes
          </p>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Tutoriels pratiques, guides techniques, analyses statistiques et bien plus pour maîtriser la diffusion interactive
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {documentsData.slice(0, 8).map((doc, index) => (
            <div
              key={index}
              className="transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <DocumentCard
                title={doc.title}
                imageSrc={doc.imageSrc}
                date={doc.date}
                cardLink={doc.cardLink}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className={`inline-block p-8 rounded-3xl ${theme === 'dark' ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'} shadow-2xl`}>
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Prêt à approfondir vos connaissances ?
            </h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Accédez à plus de {documentsData.length} articles et guides complets
            </p>
            <Link 
              href="/library"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl shadow-2xl gradient-impactune text-white hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Voir toute la bibliothèque
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BibliothequeSection;