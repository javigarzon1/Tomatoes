import React from 'react';

const MediaCard = ({ item, type }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-3 rounded overflow-hidden bg-[#0a0a0a]">
        {/* Badge DESTACADO */}
        <div className="absolute top-2 left-2 z-10">
          <span className="px-2.5 py-1 bg-[#22c55e] text-black text-[10px] font-bold uppercase rounded">
            DESTACADO
          </span>
        </div>
        
        {/* Imagen con altura fija de 320px */}
        <div className="relative h-[320px]">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x450/0a0a0a/666666?text=Sin+Imagen';
            }}
          />
          
          {/* Overlay hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
        </div>

        {/* Badge tipo */}
        <div className="absolute bottom-2 right-2">
          <span className="px-2.5 py-1 bg-[#22c55e] text-black text-[10px] font-bold uppercase rounded">
            {type === 'movie' ? 'PELÍCULA' : 'SERIE'}
          </span>
        </div>
      </div>
      
      {/* Info */}
      <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2 leading-tight">
        {item.title}
      </h3>
      <p className="text-gray-500 text-xs">{item.year}</p>
    </div>
  );
};

export default MediaCard;