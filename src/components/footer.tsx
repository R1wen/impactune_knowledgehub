"use client"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/src/contexts/ThemeContext';

const socialLinks = [
  { name: 'Facebook', icon: 'F', url: '#facebook', color: 'text-blue-600' },
  { name: 'Twitter', icon: 'X', url: '#twitter', color: 'text-gray-400' },
  { name: 'LinkedIn', icon: 'L', url: '#linkedin', color: 'text-blue-500' },
  { name: 'Youtube', icon: 'Y', url: '#youtube', color: 'text-red-600' },
];

const Footer: React.FC = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  // Hide footer on login page
  if (pathname === '/login') {
    return null;
  }

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
      
      {/* Section Supérieure (Les 3 colonnes) */}
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-700'} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Colonne 1: Adresse et Contact */}
            <div className="flex flex-col">
              {/* Titre "Adresse" */}
              <div className="gradient-impactune text-white font-bold text-lg p-3 text-center mb-4 rounded-t-lg">
                Adresse
              </div>
              
              {/* Logo/Nom de l'organisation */}
              <div className="flex items-start space-x-3 mb-4">
                <div>
                  <p className="text-sm font-semibold leading-tight">
                    ImpacTune / Agence d'accompagnement à la diffusion multimédia
                  </p>
                  <p className="text-xs text-gray-400">
                    Agence pour la digitalisation du broadcasting
                  </p>
                </div>
              </div>

              <div className="text-sm space-y-1">
                <p>GTA, Lomé - TOGO, 05 BP XXXX,</p>
                <p>Lomé, TOGO</p>
                <p>Tel : +228 90909090</p>
                <p>
                  Email: <a href="mailto:impacTune@gmail.com" className="text-red-400 hover:underline">impacTune@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Colonne 2: Suivez-nous (Follow us) */}
            <div className="flex flex-col">
              <div className="gradient-impactune text-white font-bold text-lg p-3 text-center mb-4 rounded-t-lg">
                Follow us
              </div>
              
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group"
                  >
                    <div className={`w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-sm font-bold ${social.color}`}>
                      {social.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition duration-150">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Colonne 3: Formulaire de Contact */}
            <div className="flex flex-col">
              <div className="gradient-impactune text-white font-bold text-lg p-3 text-center mb-4 rounded-t-lg">
                Contactez-nous
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full bg-gray-700 text-white border border-gray-500 p-3 outline-none focus:border-white transition duration-150"
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full bg-gray-700 text-white border border-gray-500 p-3 outline-none focus:border-white transition duration-150"
                  required
                />
                <input
                  type="text"
                  placeholder="Objet"
                  className="w-full bg-gray-700 text-white border border-gray-500 p-3 outline-none focus:border-white transition duration-150"
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-gray-700 text-white border border-gray-500 p-3 outline-none focus:border-white resize-none transition duration-150"
                  required
                ></textarea>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="gradient-impactune text-white py-2 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 shadow-lg transform hover:scale-105"
                  >
                    ENVOYER
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>

      {/* Section Inférieure (Copyright et Liens Légaux) */}
      <div className={`${theme === 'dark' ? 'bg-black' : 'bg-gray-900'} py-4`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-2 md:mb-0">
            ImpacTune © 2025. All Rights Reserved.
          </p>
          <div className="space-x-3">
            <Link href="#privacy" className="hover:text-white transition duration-150">Privacy policy</Link>
            <span>|</span>
            <Link href="#facebook-policy" className="hover:text-white transition duration-150">Facebook policy</Link>
            <span>|</span>
            <Link href="#login" className="hover:text-white transition duration-150">Login</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;