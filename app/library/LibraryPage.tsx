"use client"
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import DocumentCard from '@/src/components/ArticleCard'; 
import { documentsData, DocumentData } from './documentData'; 

interface DocumentCardProps extends DocumentData {}

const LibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  // Simulation des options de recherche / tags (inspiré de l'image)
  const searchTags = ['Tutoriel', 'Statistiques', 'Configuration', 'VOD', 'ImpacTune'];
  
  const filteredDocuments = useMemo(() => {
    let results = documentsData;

    // 1. Filtrer par terme de recherche
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      results = results.filter(doc => 
        doc.title.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    
    if (activeFilters.length > 0) {
      results = results.filter(doc => {
        const titleLower = doc.title.toLowerCase();
        return activeFilters.some(filter => titleLower.includes(filter.toLowerCase()));
      });
    }

    return results;
  }, [searchTerm, activeFilters]);

  // Gestion de la bascule des filtres (tags)
  const toggleFilter = (tag: string) => {
    setActiveFilters(prevFilters => 
      prevFilters.includes(tag)
        ? prevFilters.filter(f => f !== tag)
        : [...prevFilters, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      
      {/* Zone de Titre et Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-light text-gray-800 mb-2">
          Bibliothèque
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl">
          Plongez dans une vaste collection de publications, de données, d'actualités et de ressources multimédias. Vous y trouverez des orientations politiques, des recherches, des études de cas et bien plus encore.
        </p>
      </div>
      
      {/* Zone de Recherche et Filtres */}
      <div className="bg-white py-8 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Champ de Recherche */}
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Recherche par mot(s) clé(s)
            </label>
            <input
              type="text"
              id="search"
              placeholder="Entrer mot(s) clé(s)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-black w-full border border-gray-300 p-3 rounded-md focus:ring-red-600 focus:border-red-600"
            />
          </div>
          
          {/* Tags de Recherche Associée */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">
              • Recherche associée
            </p>
            <div className="flex flex-wrap gap-2">
              {searchTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleFilter(tag)}
                  className={`px-3 py-1 text-sm rounded-full transition duration-150 ${
                    activeFilters.includes(tag)
                      ? 'bg-red-600 text-white font-semibold'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Bouton de Réinitialisation */}
          <div className="flex justify-end">
             <button
                onClick={() => { setSearchTerm(''); setActiveFilters([]); }}
                // Changement de la couleur pour être cohérent avec l'esthétique Hub
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150"
              >
                Réinitialiser
              </button>
          </div>
        </div>
      </div>
      
      {/* Grille des Résultats */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {filteredDocuments.length > 0 ? (
          // Grille responsive
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredDocuments.map((doc, index) => (
              <DocumentCard
                key={index}
                title={doc.title}
                imageSrc={doc.imageSrc}
                date={doc.date}
                cardLink={doc.cardLink}
              />
            ))}
          </div>
        ) : (
          // Message si aucun résultat
          <div className="text-center py-10 text-gray-500">
            <p className="text-xl">Aucun document ne correspond à votre recherche ou à vos filtres.</p>
            <button
                onClick={() => { setSearchTerm(''); setActiveFilters([]); }}
                className="mt-4 text-red-600 hover:underline"
              >
                Effacer les filtres
              </button>
          </div>
        )}
        
        {/* Simulation de la pagination future (laisse de l'espace pour le bouton "En savoir plus") */}
        <div className="flex justify-center mt-12">
          {/* Vous pouvez ajouter ici un bouton "En savoir plus" ou des contrôles de pagination */}
        </div>
      </main>
      
    </div>
  );
};

export default LibraryPage;
