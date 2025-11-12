"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/src/contexts/ThemeContext';

const footerLinks = {
  products: [
    { name: 'Streaming Multi-plateforme', href: '/library' },
    { name: 'Orchestration Centralisée', href: '/library' },
    { name: 'Statistiques en Temps Réel', href: '/library' },
    { name: 'Chat Interactif', href: '/library' },
    { name: 'VOD Optimisé', href: '/library' },
  ],
  resources: [
    { name: 'Bibliothèque', href: '/library' },
    { name: 'Tutoriels', href: '/library' },
    { name: 'Guides', href: '/library' },
    { name: 'Blog', href: '/about' },
    { name: 'Support', href: '/about' },
  ],
  company: [
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/about' },
    { name: 'Carrières', href: '/about' },
    { name: 'Partenaires', href: '/about' },
  ],
  legal: [
    { name: 'Politique de Confidentialité', href: '#privacy' },
    { name: 'Conditions d\'utilisation', href: '#terms' },
    { name: 'Accessibilité', href: '#accessibility' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ), url: '#facebook', color: 'hover:text-blue-500' },
  { name: 'Twitter', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  ), url: '#twitter', color: 'hover:text-cyan-400' },
  { name: 'LinkedIn', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ), url: '#linkedin', color: 'hover:text-blue-600' },
  { name: 'Youtube', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ), url: '#youtube', color: 'hover:text-red-500' },
];

const Footer: React.FC = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  if (pathname === '/login') {
    return null;
  }

  return (
    <footer className={`relative ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-800 to-gray-900'} text-white overflow-hidden`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full gradient-impactune opacity-90"></div>
                  <div className="relative w-8 h-8 rounded-full gradient-impactune"></div>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-white">IMPACTUNE</span>
                  <p className="text-xs text-gray-400">Knowledge Hub</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Agence d'accompagnement à la diffusion multimédia. Transformez vos diffusions en expériences interactives exceptionnelles.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 ${social.color} hover:border-transparent hover:scale-110`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Produits</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Ressources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Entreprise</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-700'} pt-8`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">Adresse</h4>
                <p className="text-gray-400 text-sm">GTA, Lomé - TOGO</p>
                <p className="text-gray-400 text-sm">05 BP XXXX, Lomé, TOGO</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Contact</h4>
                <p className="text-gray-400 text-sm">Tel: +228 90909090</p>
                <p className="text-gray-400 text-sm">
                  Email: <a href="mailto:impacTune@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">impacTune@gmail.com</a>
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Légal</h4>
                <ul className="space-y-1">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-700'} py-6`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 ImpacTune. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/login" className="text-gray-400 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;