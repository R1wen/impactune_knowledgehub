import DocumentCard from '../components/ArticleCard';
import Link from 'next/link';
import { documentsData, DocumentData } from './data';



const BibliothequeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Titre de la Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Bibliothèque
        </h2>
        
        {/* Description de la Section */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Plonger dans une vaste collection de publications, de données, d'actualités et de ressources multimédias. Vous y trouverez des orientations politiques, des recherches, des études de cas et bien plus encore.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {documentsData.map((doc, index) => (
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
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800 transition duration-150 ease-in-out"
        >
          En savoir plus
        </Link>
        
      </div>
    </section>
  );
};

export default BibliothequeSection;