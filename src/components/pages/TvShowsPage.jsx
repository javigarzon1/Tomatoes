import React from 'react';
import MediaList from '../layout/MediaList';
import { getTvShows } from '../../services/api';

const TvShowsPage = () => {
  const tvShows = getTvShows();
  
  return (
    <MediaList
      items={tvShows}
      type="tv"
      title="TV Shows"
    />
  );
};

export default TvShowsPage;