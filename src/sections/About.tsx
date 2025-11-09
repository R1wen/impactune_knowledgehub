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
        sizes="100vw"
        className="object-cover"
        priority
      />
      {/* Overlay sombre pour améliorer la lisibilité du texte blanc */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
        
        {/* Titre Principal */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl bg-gray-800/50 rounded-2xl p-3 mb-4">
          Bienvenu sur le Knowledge Hub d'ImpacTune
        </h1>

        {/* Sous-titre */}
        <p className="text-white text-lg sm:text-xl max-w-xl bg-gray-800/50 rounded-2xl p-2">
          La diffusion numérique simplifiée. Rendez votre contenu visible et interactif grâce à une interface intuitive et des fonctionnalités temps réel
        </p>
      </div>
    </div>
  );

  // --- 2. Section d'Introduction (Texte et Bouton) ---
  const IntroContent = (
    <div className="relative bg-white pt-16 pb-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(-45deg, #f3f4f6, #f3f4f6 10px, transparent 10px, transparent 20px)',
          backgroundSize: '20px 20px',
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          ImpacTune offre une gamme de fonctionnalités innovantes et une multitude de solutions de diffusion, que nous avons conçues et optimisées pour vous. Que vous soyez un créateur de contenu, un formateur, une organisation cherchant de la visibilité, un communicateur ou toute personne souhaitant rendre sa diffusion interactive, vous pouvez utiliser facilement ImpacTune.
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