"use client"
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import DocumentCard from '@/src/components/ArticleCard'; 
import { documentsData, DocumentData } from './documentData'; 

interface DocumentCardProps extends DocumentData {}

const LibraryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  
  // Extract unique categories and tags from documents
  const categories = useMemo(() => {
    const cats = ['Tous', ...Array.from(new Set(documentsData.map(doc => doc.category).filter(Boolean)))];
    return cats as string[];
  }, []);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    documentsData.forEach(doc => {
      doc.tags?.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);
  
  const filteredDocuments = useMemo(() => {
    let results = [...documentsData];

    // 1. Filtrer par terme de recherche (titre, tags, catégorie)
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      results = results.filter(doc => {
        const titleMatch = doc.title.toLowerCase().includes(lowerCaseSearchTerm);
        const tagMatch = doc.tags?.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm));
        const categoryMatch = doc.category?.toLowerCase().includes(lowerCaseSearchTerm);
        return titleMatch || tagMatch || categoryMatch;
      });
    }
    
    // 2. Filtrer par catégorie
    if (activeCategory !== 'Tous') {
      results = results.filter(doc => doc.category === activeCategory);
    }

    // 3. Filtrer par tags
    if (activeTags.length > 0) {
      results = results.filter(doc => 
        activeTags.some(tag => doc.tags?.includes(tag))
      );
    }

    // 4. Trier
    results.sort((a, b) => {
      if (sortBy === 'date') {
        // Simple date comparison (assuming format "Month YYYY")
        return b.date.localeCompare(a.date);
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    return results;
  }, [searchTerm, activeCategory, activeTags, sortBy]);

  // Gestion de la bascule des tags
  const toggleTag = (tag: string) => {
    setActiveTags(prevTags => 
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  const hasActiveFilters = searchTerm || activeCategory !== 'Tous' || activeTags.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 pt-16">
      
      {/* Zone de Titre et Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl md:text-5xl font-bold gradient-impactune-text mb-4">
          Bibliothèque
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl">
          Plongez dans une vaste collection de publications, de données, d'actualités et de ressources multimédias. Vous y trouverez des tutoriels, des guides pratiques, des analyses statistiques et bien plus encore.
        </p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span>{filteredDocuments.length} article{filteredDocuments.length > 1 ? 's' : ''} disponible{filteredDocuments.length > 1 ? 's' : ''}</span>
          {hasActiveFilters && (
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              Filtres actifs
            </span>
          )}
        </div>
      </div>
      
      {/* Zone de Recherche et Filtres */}
      <div className="bg-white py-8 border-t border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Champ de Recherche */}
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">
              Recherche par mot(s) clé(s)
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Rechercher dans les titres, catégories, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-2 border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 pl-12"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Filtres par Catégorie */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Catégories
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'gradient-impactune text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tags de Recherche */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Tags populaires
            </p>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 12).map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
                    activeTags.includes(tag)
                      ? 'gradient-impactune text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Tri et Réinitialisation */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                Trier par:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                className="border-2 border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="date">Date (plus récent)</option>
                <option value="title">Titre (A-Z)</option>
              </select>
            </div>
            {hasActiveFilters && (
              <button
                onClick={() => { 
                  setSearchTerm(''); 
                  setActiveCategory('Tous'); 
                  setActiveTags([]); 
                }}
                className="inline-flex items-center px-4 py-2 border-2 border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Grille des Résultats */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {filteredDocuments.length > 0 ? (
          // Grille responsive
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl font-semibold text-gray-700 mb-2">Aucun résultat trouvé</p>
              <p className="text-gray-500 mb-6">Aucun document ne correspond à votre recherche ou à vos filtres.</p>
              <button
                onClick={() => { 
                  setSearchTerm(''); 
                  setActiveCategory('Tous'); 
                  setActiveTags([]); 
                }}
                className="inline-flex items-center px-6 py-3 gradient-impactune text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        )}
      </main>
      
    </div>
  );
};

export default LibraryPage;
