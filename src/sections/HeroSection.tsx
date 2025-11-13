"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/src/contexts/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    width: string;
    height: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate particle data only on the client to avoid hydration mismatch
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 10 + 10}s`
      }))
    );
  }, []);

  return (
    <section className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 50%)`,
          transition: 'background 0.3s ease-out'
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.width,
              height: particle.height,
              background: `linear-gradient(135deg, #3b82f6, #8b5cf6)`,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Logo/Badge */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full gradient-impactune blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-24 h-24 rounded-full gradient-impactune flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl font-bold text-white">IT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading with Animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 animate-fade-in-up">
          <span className={`block mb-2 ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
            Knowledge Hub
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-light gradient-impactune-text">
            ImpacTune
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl sm:text-2xl mb-4 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          Transformez vos diffusions en expériences interactives exceptionnelles
        </p>
        <p className={`text-lg mb-12 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Une plateforme complète pour maîtriser la diffusion numérique avec des outils puissants et des ressources expertes
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/library"
            className="group relative px-8 py-4 gradient-impactune text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Explorer la Bibliothèque
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
          
          <Link
            href="/about"
            className={`px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
              theme === 'dark'
                ? 'border-white/30 text-white hover:bg-white/10 hover:border-white/50'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            En savoir plus
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Articles', value: '24+', icon: '📚' },
            { label: 'Vues', value: '12K+', icon: '👁️' },
            { label: 'Utilisateurs', value: '342+', icon: '👥' },
            { label: 'Ressources', value: '50+', icon: '🎯' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700/50'
                  : 'bg-white/80 border-gray-200/50'
              }`}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'gradient-impactune-text'}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

