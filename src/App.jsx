import React, { useState } from 'react';
import Navigation from './components/common/Navigation';
import HomePage from './components/pages/HomePage';
import TvShowsPage from './components/pages/TvShowsPage';
import MoviesPage from './components/pages/MoviesPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'INICIO':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'SERIES':
        return <TvShowsPage />;
      case 'PELICULAS':
        return <MoviesPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-red-950">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
    </div>
  );
};

export default App;