import React from 'react';
import { Play, Star, Film, Tv } from 'lucide-react';

const MediaCard = ({ item, type, onHover, isHovered }) => {
  return (
   <div 
  className={`rounded-2xl overflow-hidden shadow-lg shadow-black/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/40 cursor-pointer ${
    isHovered ? 'ring-2 ring-red-500/50' : ''
  }`}
  onMouseEnter={() => onHover(item.id)}
  onMouseLeave={() => onHover(null)}
>
  <div className="relative group">
    <img 
      src={item.image} 
      alt={item.title}
      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-4">
      <Play className="text-white w-10 h-10 mr-3 drop-shadow-lg" />
      <span className="text-white font-semibold">Watch Now</span>
    </div>
    <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
      <Star className="w-4 h-4 text-yellow-400 fill-current" />
      <span className="text-white text-sm">{item.rating}</span>
    </div>
  </div>
  
  <div className="p-5 bg-gray-900/70 backdrop-blur-md">
    <h3 className="text-xl font-bold text-white truncate">{item.title}</h3>
    <p className="text-gray-300 text-sm mt-2 line-clamp-2">{item.description}</p>
    <div className="flex justify-between items-center mt-4">
      <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs rounded-full shadow-md">
        {item.genre}
      </span>
      {type === 'movie' ? <Film className="w-5 h-5 text-gray-400" /> : <Tv className="w-5 h-5 text-gray-400" />}
    </div>
  </div>
</div>
  );
};

export default MediaCard;