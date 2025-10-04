import React from 'react';
import { Play, Star, Film, Tv, Calendar } from 'lucide-react';

const MediaCard = ({ item, type, onHover, isHovered }) => {
  return (
    <div 
      className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer border border-gray-700/50 hover:border-red-500/50 ${
        isHovered ? 'scale-105 shadow-2xl shadow-red-500/20 ring-2 ring-red-500/50' : 'hover:scale-105'
      }`}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay oscuro en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Botón de reproducción */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
              <Play className="text-white w-8 h-8 ml-1" fill="white" />
            </div>
          </div>
          
          {/* Información adicional en hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex items-center gap-2 text-white text-sm mb-2">
              <Calendar className="w-4 h-4" />
              <span>{item.year}</span>
            </div>
          </div>
        </div>
        
        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yellow-400/30">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
            <span className="text-white text-sm font-bold">{item.rating}</span>
          </div>
        </div>
        
        {/* Tipo de contenido badge */}
        <div className="absolute top-3 left-3">
          <div className="w-8 h-8 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500">
            {type === 'movie' ? (
              <Film className="w-4 h-4 text-white" />
            ) : (
              <Tv className="w-4 h-4 text-white" />
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-red-400 transition-colors">
          {item.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="px-3 py-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-semibold rounded-full shadow-lg">
            {item.genre}
          </span>
          <span className="text-gray-500 text-xs font-medium">{item.year}</span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
