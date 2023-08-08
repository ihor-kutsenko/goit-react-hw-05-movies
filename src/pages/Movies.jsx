import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import { fetchSearchMovies, fetchGenresMovies } from 'services/themoviedbAPI';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MovieList';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('film') ?? '';

  useEffect(() => {
    const getSearchMovies = async query => {
      try {
        const { results } = await fetchSearchMovies(query);
        if (results.length === 0) {
          toast.info(
            `Sorry, there are no movies matching your query: "${searchMovie}". Please try to search something else.`,
            notifyOptions
          );
          setSearchMovies([]);
          setSearchParams({});
        }

        setSearchMovies([...results]);
      } catch (error) {
        setError(error);
      }
    };

    if (searchMovie) getSearchMovies(searchMovie);
  }, [searchMovie, setSearchParams]);

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
  }, [genres]);

  const onFormSearch = query => {
    setSearchParams({
      film: query,
    });
  };

  return (
    <>
      <SearchBar onSubmit={onFormSearch} />
      <MoviesList movies={searchMovies} genres={genres} />
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}
    </>
  );
};

export default Movies;
