import React, { useState, useMemo } from 'react';
import MediaCard from '../common/MediaCard';
import FilterBar from '../common/FilterBar';
import { Film, Tv } from 'lucide-react';

const MediaList = ({ items, type, title }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const years = useMemo(() => {
    const allYears = items.map(item => item.year);
    return [...new Set(allYears)].sort((a, b) => b - a);
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = selectedYear === '' || item.year.toString() === selectedYear;
      return matchesSearch && matchesYear;
    });
  }, [items, searchTerm, selectedYear]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header mejorado */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
              {type === 'movie' ? (
                <Film className="w-7 h-7 text-white" />
              ) : (
                <Tv className="w-7 h-7 text-white" />
              )}
            </div>
            <div>
              <h1 className="text-5xl font-black text-white tracking-tight">{title}</h1>
              <p className="text-gray-400 text-lg mt-1">
                {filteredItems.length} {filteredItems.length === 1 ? 'resultado' : 'resultados'} encontrados
              </p>
            </div>
          </div>
        </div>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          years={years}
        />

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <MediaCard
                key={item.id}
                item={item}
                type={type}
                onHover={setHoveredCard}
                isHovered={hoveredCard === item.id}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-800/50 rounded-full mb-6">
              <span className="text-5xl">🔍</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-300 mb-3">No se encontraron resultados</h3>
            <p className="text-gray-500 text-lg">Intenta ajustar tus términos de búsqueda o filtros</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaList;