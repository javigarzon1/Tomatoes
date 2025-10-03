import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="bg-gray-900 border-b border-gray-700 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setCurrentPage('home')}
        >
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">🍅</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Dreadful Tomatoes</h1>
        </div>
        
        {currentPage !== 'home' && (
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span className="text-white">Back to Home</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
