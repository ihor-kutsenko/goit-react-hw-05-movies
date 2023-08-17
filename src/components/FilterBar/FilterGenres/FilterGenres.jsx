import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import { fetchGenresMovies } from 'services/themoviedbAPI';

import { Option, FormSelect } from '../FilterBar.styled';

const FilterGenres = ({ onSelect }) => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGenresMovies = async () => {
      try {
        const genresData = await fetchGenresMovies();

        setGenres(genresData);
      } catch (error) {
        setError(error);
      }
    };
    getGenresMovies();
  }, []);

  return (
    <>
      {' '}
      <FormSelect
        name="with_genres"
        onChange={event => onSelect(event.target.value)}
      >
        <Option value="">Select Genres</Option>
        {genres.map(genre => (
          <Option key={genre.id} value={genre.id}>
            {genre.name}
          </Option>
        ))}
      </FormSelect>
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}
    </>
  );
};

export default FilterGenres;
