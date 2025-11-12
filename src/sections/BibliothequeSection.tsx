"use client"
import DocumentCard from '../components/ArticleCard';
import Link from 'next/link';
import { documentsData, DocumentData } from '@/app/library/documentData';
import { useTheme } from '@/src/contexts/ThemeContext';



const BibliothequeSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-16 sm:py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Titre de la Section */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
          Bibliothèque
        </h2>
        
        {/* Description de la Section */}
        <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Plongez dans une vaste collection de publications, de données, d'actualités et de ressources multimédias. Vous y trouverez des tutoriels, des guides pratiques, des analyses statistiques et bien plus encore.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documentsData.slice(0, 8).map((doc, index) => (
            <DocumentCard
              key={index}
              title={doc.title}
              imageSrc={doc.imageSrc}
              date={doc.date}
              cardLink={doc.cardLink}
            />
          ))}
        </div>

        <Link 
          href="/library"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg shadow-lg gradient-impactune text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105"
        >
          Voir toute la bibliothèque
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        
      </div>
    </section>
  );
};

export default BibliothequeSection;