import React from 'react';
import { Genre } from './Genres.styled';

const Genres = ({ data, genres }) => {
  if (!Array.isArray(genres)) {
    return null;
  }

  const selectedGenres = genres.filter(genre => data.includes(genre.id));

  return (
    <div>
      {selectedGenres.slice(0, 2).map((genre, index) => (
        <React.Fragment key={genre.id}>
          {index > 0 && ', '}
          <Genre>{genre.name}</Genre>
        </React.Fragment>
      ))}
      {selectedGenres.length > 2 && ', Others'}
    </div>
  );
};

export default Genres;
