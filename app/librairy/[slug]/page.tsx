import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { documentsData, DocumentData } from '../documentData'; 
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

const fetchArticleContent = (document: DocumentData) => {
  
  let mainContent = '';
  
  if (document.title.includes('Tutoriel : Maîtriser le Chat Interactif')) {
    mainContent = `
      <p class="mb-6">Le chat interactif d'ImpacTune est votre meilleur allié pour transformer une simple diffusion en une expérience communautaire dynamique. Ce tutoriel vous guidera à travers les meilleures pratiques pour encourager la participation, maintenir un environnement positif et utiliser les fonctionnalités de modération en temps réel.</p>
      
      <h3 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-red-600 pl-3">I. Encourager l'Ouverture</h3>
      <p class="mb-4">Commencez toujours votre diffusion par une question ouverte, invitant les spectateurs à se présenter ou à partager leurs attentes. Plus la première minute est interactive, plus le taux d'engagement restera élevé.</p>
      
      <h3 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-red-600 pl-3">II. Utiliser les Sondages Intégrés</h3>
      <p class="mb-4">Lancez un sondage toutes les 10-15 minutes pour maintenir l'attention. Les statistiques montrent que les utilisateurs qui participent à un sondage restent en moyenne 25% plus longtemps sur le stream.</p>
      
      <h3 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-red-600 pl-3">III. Stratégies de Modération</h3>
      <p class="mb-4">ImpacTune vous offre des outils de modération puissants. Définissez des mots-clés interdits et désignez au moins un modérateur pour les flux avec plus de 50 spectateurs. Un chat bien modéré est la clé de la fidélisation.</p>
    `;
  } else if (document.title.includes('Statistiques en Temps Réel')) {
    mainContent = `
      <p class="mb-6">L'une des forces d'ImpacTune réside dans la clarté et la granularité de ses statistiques en temps réel. Cet article décortique comment interpréter le Taux d'Abandon, le Taux d'Engagement Moyen et le Pic de Connexion pour affiner votre stratégie de diffusion.</p>
      
      <h3 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-red-600 pl-3">Le Taux d'Engagement Moyen (TEM)</h3>
      <p class="mb-4">Le TEM mesure le nombre moyen de messages envoyés par spectateur actif. Un TEM élevé est un excellent indicateur de la qualité de votre contenu et de l'efficacité de vos appels à l'action interactifs.</p>

      <h3 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-red-600 pl-3">Analyser les Pics de Connexion</h3>
      <p class="mb-4">Un pic de connexion indique le moment exact où votre contenu a été le plus attractif. En croisant cette donnée avec votre script, vous pouvez identifier les thèmes ou les segments qui résonnent le plus auprès de votre audience, vous permettant ainsi d'optimiser le contenu futur.</p>
    `;
  } else {
    mainContent = `
      <p class="mb-6">Ce document important a été sélectionné par le Knowledge Hub ImpacTune pour sa pertinence dans l'écosystème de la communication et de l'impact social. Il propose une analyse détaillée et des recommandations pour transformer les pratiques actuelles.</p>
      
      <p class="mb-4">Le rapport examine les enjeux majeurs liés à la ${document.title.split('-')[0].trim().toLowerCase()} et fournit des données basées sur des recherches approfondies. Il est une lecture essentielle pour tout décideur ou créateur de contenu visant à maximiser son influence.</p>
      
      <p class="mb-4"><strong>L'extrait clé du rapport :</strong> "Les mécanismes de diffusion en temps réel, lorsqu'ils sont couplés à des outils analytiques précis comme ImpacTune, offrent une opportunité sans précédent d'atteindre et d'engager les audiences là où elles se trouvent, transformant la consommation passive en participation active."</p>
    `;
  }
  
  return mainContent;
};


const ArticlePage = async ({ params }: ArticlePageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const fullSlug = `/library/${slug}`;

  const document = documentsData.find(doc => doc.cardLink === fullSlug);

  if (!document) {
    notFound(); 
  }

  const articleContent = fetchArticleContent(document);
  
  return (
    <div className="bg-white min-h-screen">
      {/* En-tête de la Page (Zone grise supérieure) */}
      <header className="py-12 bg-gray-100 border-t-8 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-800">
            {document.title}
          </h1>
          <p className="text-sm text-gray-500 mt-2">Publié le : {document.date}</p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-10">
        
        {/* Colonne Gauche: Couverture, Téléchargement et Métadonnées */}
        <aside className="lg:w-1/4 w-full lg:sticky top-0 h-full">
          
          {/* Couverture du Document */}
          <div className="w-full bg-white p-4 rounded-lg shadow-xl mb-6">
            <Image
              src={document.imageSrc}
              alt={`Couverture de ${document.title}`}
              width={300}
              height={400}
              className="w-full h-auto object-cover rounded"
              priority
            />
          </div>
          
          {/* Section Téléchargement */}
          <div className="mb-6 p-4 border-l-4 border-green-600 bg-green-50 rounded-r-md">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Téléchargement</h3>
            <p className="mt-3 text-xs text-green-800 font-medium">Accédez à la ressource sans frais.</p>
          </div>
          
          {/* Métadonnées (Inspiré par votre image) */}
          <div className="text-sm space-y-1 p-4 bg-gray-50 rounded-md border border-gray-200">
            <h3 className="font-bold text-gray-700 mb-2">Informations Clés</h3>
            <p><span className="font-medium">Type de Document:</span> {document.title.includes('Tutoriel') ? 'Guide Pratique' : 'Rapport Stratégique'}</p>
            <p><span className="font-medium">Thème:</span> Diffusion Interactive, {document.title.includes('Statistiques') ? 'Analyse de Données' : 'Communication'}</p>
            <p><span className="font-medium">Date de Publication:</span> {document.date}</p>
          </div>
          
        </aside>
        
        {/* Colonne Droite: Résumé et Contenu Détaillé */}
        <article className="lg:w-3/4 w-full prose prose-lg max-w-none">
          
          {/* Résumé/Introduction */}
          <div className="text-gray-600 mb-8 border-b pb-4">
            <p className="italic text-lg">
            Ce document, essentiel pour notre Knowledge Hub ImpacTune, présente des idées clés sur la manière de maximiser votre impact en ligne. Il est conçu pour les créateurs de contenu, les communicateurs et les spécialistes techniques qui souhaitent exploiter au maximum l'interactivité d'ImpacTune.
            </p>
          </div>
          
          {/* Contenu Détaillé (injecté dynamiquement) */}
          <div 
            className="article-content text-gray-700 leading-relaxed" 
            dangerouslySetInnerHTML={{ __html: articleContent }} 
          />
          
          {/* Lien Retour */}
          <div className="mt-12 pt-6 border-t">
            <Link href="/library" className="text-red-600 hover:text-red-800 font-semibold flex items-center">
              {/* Utilisation d'un symbole pour le retour en arrière */}
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Retour à la Bibliothèque
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ArticlePage;