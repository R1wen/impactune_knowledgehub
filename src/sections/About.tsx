"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/src/contexts/ThemeContext';

interface AboutSectionProps {
  imagePath?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ 
    imagePath = '/images/background_about.jpg' 
}) => {
  const { theme } = useTheme();

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
      {/* Overlay avec gradient pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex flex-col justify-center items-center text-center p-8">
        
        {/* Titre Principal */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm rounded-2xl p-6 mb-4 shadow-2xl">
          Bienvenu sur le Knowledge Hub d'ImpacTune
        </h1>

        {/* Sous-titre */}
        <p className="text-white text-lg sm:text-xl max-w-xl bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          La diffusion numérique simplifiée. Rendez votre contenu visible et interactif grâce à une interface intuitive et des fonctionnalités temps réel
        </p>
      </div>
    </div>
  );

  // --- 2. Section d'Introduction (Texte et Bouton) ---
  const IntroContent = (
    <div className={`relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} pt-16 pb-20 overflow-hidden`}>
      <div 
        className={`absolute inset-0 z-0 opacity-20`}
        style={{ 
          backgroundImage: theme === 'dark' 
            ? 'repeating-linear-gradient(-45deg, #374151, #374151 10px, transparent 10px, transparent 20px)'
            : 'repeating-linear-gradient(-45deg, #f3f4f6, #f3f4f6 10px, transparent 10px, transparent 20px)',
          backgroundSize: '20px 20px',
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-8`}>
          ImpacTune offre une gamme de fonctionnalités innovantes et une multitude de solutions de diffusion, que nous avons conçues et optimisées pour vous. Que vous soyez un créateur de contenu, un formateur, une organisation cherchant de la visibilité, un communicateur ou toute personne souhaitant rendre sa diffusion interactive, vous pouvez utiliser facilement ImpacTune.
        </p>

        {/* Bouton d'Action */}
        <Link 
          href="/about"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg shadow-lg gradient-impactune text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105"
        >
          En savoir plus sur le Knowledge Hub
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
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