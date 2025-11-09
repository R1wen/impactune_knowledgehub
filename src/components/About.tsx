import Link from 'next/link';
import Image from 'next/image';

interface AboutSectionProps {
  imagePath?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ 
    imagePath = '/images/background_about.jpg' 
}) => {

  // --- 1. Section Principale (Image de fond avec Texte) ---
  const HeroContent = (
    <div className="relative h-[500px] w-full">
      <Image
        src={imagePath}
        alt="Background Image"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay sombre pour améliorer la lisibilité du texte blanc */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-8">
        
        {/* Titre Principal */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl bg-black bg-opacity-50 p-3 mb-4">
          Bienvenu sur le Knowledge Hub de l'ADEA
        </h1>

        {/* Sous-titre */}
        <p className="text-white text-lg sm:text-xl max-w-xl bg-black bg-opacity-50 p-2">
          Votre portail unique sur l'éducation et les compétences en Afrique
        </p>
      </div>
    </div>
  );

  // --- 2. Section d'Introduction (Texte et Bouton) ---
  const IntroContent = (
    <div className="relative bg-white pt-16 pb-20 overflow-hidden">
      {/* Motif géométrique en fond comme sur l'image (simulé) */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(-45deg, #f3f4f6, #f3f4f6 10px, transparent 10px, transparent 20px)',
          backgroundSize: '20px 20px',
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Texte d'Introduction */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Le Knowledge Hub offre une gamme de **services** et une multitude de **ressources**, que nous avons **produites** et **sélectionnées** pour vous. Que vous soyez un décideur politique, un praticien, un éducateur, un chercheur ou toute personne intéressée par l'éducation et la formation en Afrique, vous pouvez accéder gratuitement au **Knowledge Hub**.
        </p>

        {/* Bouton d'Action */}
        <Link 
          href="/a-propos" // Ajustez le lien vers la page "En savoir plus"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800 transition duration-150 ease-in-out"
        >
          En savoir plus sur le Knowledge Hub
        </Link>
      </div>
    </div>
  );

  return (
    <section>
      {HeroContent}
      {IntroContent}
    </section>
  );
};

export default AboutSection;