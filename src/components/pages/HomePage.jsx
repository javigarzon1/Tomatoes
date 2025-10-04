import React from 'react';
import { Film, Tv, Search, Star, Calendar, ArrowLeft } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform">
              <span className="text-white font-bold text-4xl">🍅</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Dreadful <span className="text-red-500">Tomates</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubre las peliculas y series más actuales y entretenidas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div 
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            onClick={() => setCurrentPage('tv-shows')}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6 group-hover:bg-opacity-30 transition-all">
              <Tv className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">TV Shows</h2>
            <p className="text-blue-100 mb-6">
              Explora todo el mundo de las series, desde los mejores dramas a las más divertidas comedias.
            </p>
            <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
              <span>Catálogo series</span>
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </div>
          </div>

          <div 
            className="bg-gradient-to-br from-red-600 to-orange-700 rounded-2xl p-8 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            onClick={() => setCurrentPage('movies')}
          ><div 
  className="bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl p-10 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-red-700/40 transition-all duration-500 group"
  onClick={() => setCurrentPage('movies')}
>
  <div className="flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-6 group-hover:bg-white/30">
    <Film className="w-10 h-10 text-white" />
  </div>
            <p className="text-red-100 mb-6">
              Descubre la lista de éxitos cinematográficos.
            </p>
            <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
              <span>Catálogo de películas</span>
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why Choose Dreadful Tomatoes?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Búsqueda</h4>
              <p className="text-gray-300">Busqueda inteligente, marca los filtros de tu selección.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Contenido seleccionado</h4>
              <p className="text-gray-300">La mejor selección de películas actuales para tu entretenimiento.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Siempre actualizadas</h4>
              <p className="text-gray-300">Estamos al dia con las úmtimas novedades.</p>
            </div>
          </div>
        </div>
      </div>
    </div>   
 </div>

  );
};

export default HomePage;