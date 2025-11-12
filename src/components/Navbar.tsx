"use client"
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/src/contexts/ThemeContext';
import { useAuth } from '@/src/contexts/AuthContext';

const navLinks = [
  { name: 'À propos', href: '/about' },
  { name: 'Bibliothèque', href: '/library' },
  { name: 'Dashboard', href: '/dashboard' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();

  // Hide navbar on login page
  if (pathname === '/login') {
    return null;
  }

  return (
    <header className={`${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b shadow-sm sticky top-0 z-50 backdrop-blur-sm ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'}`}>
      <nav className="max-w-8xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo et Nom du Hub */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Logo avec gradient circulaire */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full gradient-impactune opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-0.5">
                <div className={`w-full h-full rounded-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}></div>
              </div>
              <div className="relative w-8 h-8 rounded-full gradient-impactune"></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-extrabold leading-tight ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
                IMPACTUNE
              </span>
              <span className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Knowledge Hub</span>
            </div>
          </Link>

          {/* Liens de Navigation (Visible sur Desktop) */}
          <div className="hidden md:flex items-center space-x-6 text-base">
            <Link href="/" className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} flex items-center transition-all duration-200 font-medium group`}>
              <svg className="h-5 w-5 mr-1.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l-2 2m-7 7h7m-12 0h-3m3 0h3m4 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1z"></path></svg>
              Accueil
            </Link>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} font-medium transition-all duration-200 relative group`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-impactune group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Login/Logout Button */}
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors gradient-impactune text-white hover:opacity-90"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors gradient-impactune text-white hover:opacity-90"
              >
                Login
              </Link>
            )}
          </div>

          {/* Bouton pour Mobile (Menu Hamburger) */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button 
              type="button" 
              className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-2 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} pt-4`}>
            <Link 
              href="/" 
              className={`block px-4 py-2 rounded-md transition-colors ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`block px-4 py-2 rounded-md transition-colors ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className="block px-4 py-2 rounded-md transition-colors gradient-impactune text-white text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="block px-4 py-2 rounded-md transition-colors gradient-impactune text-white text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
      
      {/* Barre gradient en bas */}
      <div className="w-full h-1 gradient-impactune" />
    </header>
  );
};

export default Navbar;