import React from 'react';
import { Film, Tv, Search, Star, Calendar, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-red-950">
      {/* Hero Section con efecto de brillo */}
      <div className="relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-sm font-medium">Tu plataforma de entretenimiento</span>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-28 h-28 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300 shadow-2xl">
                  <span className="text-white font-bold text-5xl transform -rotate-6">🍅</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              Dreadful
              <span className="block bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-transparent bg-clip-text">
                Tomatoes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
              Descubre las últimas películas taquilleras y series de televisión más adictivas.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tu compañero definitivo para encontrar entretenimiento de calidad.
            </p>
          </div>

          {/* Action Cards con diseño mejorado */}
          <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
            {/* TV Shows Card */}
            <div 
              className="group relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-3xl p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
              onClick={() => setCurrentPage('tv-shows')}
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <Tv className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-4">Series de TV</h2>
                
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Explora el mundo de las series de televisión, desde dramas cautivadores hasta comedias hilarantes.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explorar Series</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Movies Card */}
            <div 
              className="group relative bg-gradient-to-br from-red-600 via-red-700 to-orange-600 rounded-3xl p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
              onClick={() => setCurrentPage('movies')}
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <Film className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-4">Películas</h2>
                
                <p className="text-red-100 mb-8 text-lg leading-relaxed">
                  Descubre éxitos de taquilla, joyas independientes y todo lo que hay entre medias.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explorar Películas</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section con diseño moderno */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10 shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  ¿Por qué elegir Dreadful Tomatoes?
                </h3>
                <p className="text-gray-400 text-lg">Todo lo que necesitas en un solo lugar</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-red-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Búsqueda Inteligente</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Encuentra exactamente lo que buscas con nuestro sistema avanzado de filtros y búsqueda.
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-red-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Contenido Curado</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Solo el mejor contenido, cuidadosamente seleccionado para tu disfrute y entretenimiento.
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-red-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Siempre Actualizado</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Mantente al día con los últimos estrenos y el contenido más popular del momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;