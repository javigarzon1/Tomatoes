import React from 'react';
import MediaList from '../layout/MediaList';
import { getMovies } from '../../services/api';

const MoviesPage = () => {
  const movies = getMovies();
  
  return (
    <MediaList
      items={movies}
      type="movie"
      title="Movies"
    />
  );
};

export default MoviesPage;
