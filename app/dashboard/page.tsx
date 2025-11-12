"use client"
import React from 'react';

const DashboardPage: React.FC = () => {
  // Simulated data for dashboard statistics
  const stats = {
    totalArticles: 24,
    totalViews: 12450,
    activeUsers: 342,
    monthlyGrowth: 18.5,
    popularCategories: [
      { name: 'Tutoriels', count: 8, percentage: 33 },
      { name: 'Statistiques', count: 6, percentage: 25 },
      { name: 'Configuration', count: 5, percentage: 21 },
      { name: 'VOD', count: 3, percentage: 13 },
      { name: 'Autres', count: 2, percentage: 8 },
    ],
    recentActivity: [
      { article: 'Maîtriser le Chat Interactif', views: 1240, date: '2025-01-15' },
      { article: 'Statistiques en Temps Réel', views: 980, date: '2025-01-14' },
      { article: 'Guide de l\'Équipement Simple', views: 756, date: '2025-01-13' },
      { article: 'Optimisation VOD', views: 642, date: '2025-01-12' },
    ],
    engagementMetrics: {
      averageReadTime: '4.2 min',
      bounceRate: '32%',
      returnVisitors: '68%',
      searchQueries: 1240,
    },
    monthlyTrends: [
      { month: 'Oct', views: 8200 },
      { month: 'Nov', views: 9500 },
      { month: 'Déc', views: 10800 },
      { month: 'Jan', views: 12450 },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold gradient-impactune-text mb-2">
                Dashboard Staff
              </h1>
              <p className="text-gray-600">
                Statistiques et métriques du Knowledge Hub ImpacTune
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Dernière mise à jour</p>
                <p className="text-sm font-semibold text-gray-700">
                  {new Date().toLocaleDateString('fr-FR', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Articles Totaux</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalArticles}</p>
              </div>
              <div className="w-12 h-12 rounded-full gradient-impactune flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm text-green-600 font-medium">+{stats.monthlyGrowth}%</span>
              <span className="text-sm text-gray-500 ml-2">ce mois</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Vues Totales</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm text-green-600 font-medium">+12.3%</span>
              <span className="text-sm text-gray-500 ml-2">vs mois dernier</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Utilisateurs Actifs</p>
                <p className="text-3xl font-bold text-gray-900">{stats.activeUsers}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm text-green-600 font-medium">+8.2%</span>
              <span className="text-sm text-gray-500 ml-2">ce mois</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Taux d'Engagement</p>
                <p className="text-3xl font-bold text-gray-900">{stats.engagementMetrics.returnVisitors}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm text-gray-500">Visiteurs récurrents</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Categories Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Répartition par Catégories</h2>
            <div className="space-y-4">
              {stats.popularCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-3 h-3 rounded-full" style={{
                      background: `linear-gradient(135deg, ${['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#ec4899'][index]} 0%, ${['#2563eb', '#4f46e5', '#7c3aed', '#9333ea', '#db2777'][index]} 100%)`
                    }}></div>
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  </div>
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full gradient-impactune"
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 w-12 text-right">{category.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Métriques d'Engagement</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Temps de lecture moyen</p>
                <p className="text-2xl font-bold gradient-impactune-text">{stats.engagementMetrics.averageReadTime}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Taux de rebond</p>
                <p className="text-2xl font-bold text-gray-900">{stats.engagementMetrics.bounceRate}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Requêtes de recherche</p>
                <p className="text-2xl font-bold text-gray-900">{stats.engagementMetrics.searchQueries.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-pink-50 to-red-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Visiteurs récurrents</p>
                <p className="text-2xl font-bold text-gray-900">{stats.engagementMetrics.returnVisitors}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Trends */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tendances Mensuelles</h2>
            <div className="space-y-4">
              {stats.monthlyTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="text-sm font-medium text-gray-700 w-12">{trend.month}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-4 relative overflow-hidden">
                      <div 
                        className="h-4 rounded-full gradient-impactune transition-all duration-500"
                        style={{ width: `${(trend.views / stats.monthlyTrends[stats.monthlyTrends.length - 1].views) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-20 text-right">{trend.views.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Activité Récente</h2>
            <div className="space-y-4">
              {stats.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-1">{activity.article}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(activity.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold gradient-impactune-text">{activity.views.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">vues</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

