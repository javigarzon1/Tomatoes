import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-lg border-b border-red-900/30 px-6 py-4 shadow-md">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <div 
      className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform"
      onClick={() => setCurrentPage('home')}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg shadow-red-800/40">
        <span className="text-white text-2xl">🍅</span>
      </div>
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
        Dreadful Tomatoes
      </h1>
    </div>
    {currentPage !== 'home' && (
      <button
        onClick={() => setCurrentPage('home')}
        className="flex items-center space-x-2 px-5 py-2 bg-red-600/80 hover:bg-red-500 rounded-xl shadow-md text-white font-semibold transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>
    )}
  </div>
</nav>
  );
};

export default Navigation;
