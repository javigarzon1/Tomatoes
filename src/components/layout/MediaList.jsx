import React, { useState, useMemo } from 'react';
import MediaCard from '../common/MediaCard';
import FilterBar from '../common/FilterBar';

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
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-gray-400">
            Mostrando resultados {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'}
          </p>
        </div>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          years={years}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-500 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No encuentra lo que buscas</h3>
            <p className="text-gray-500">Intenta concretar tu filtro de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaList;