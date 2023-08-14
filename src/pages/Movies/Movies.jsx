import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import Loader from 'components/Loader/Loader';
import { fetchSearchMovies, fetchGenresMovies } from 'services/themoviedbAPI';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/Movies/MoviesList/MovieList';
import FilmNotFound from '../../img/not-found-film.jpg';
import { FilmNotFoundImg } from './Movies.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchMovie) return;

    const getSearchMovies = async query => {
      try {
        setLoading(true);
        const { results } = await fetchSearchMovies(query);
        if (results.length === 0) {
          toast.info(
            `Sorry, there are no movies matching your query: "${searchMovie}". Please try to search something else.`,
            notifyOptions
          );
          setMoviesNotFound(true);
          setSearchMovies([]);
          setSearchParams({});
        }

        setSearchMovies([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchMovie) getSearchMovies(searchMovie);
  }, [searchMovie, setSearchParams, moviesNotFound]);

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

  const onFormSearch = query => {
    setSearchParams({
      query: query,
    });
  };

  return (
    <>
      <SearchBar onSubmit={onFormSearch} />

      <MoviesList movies={searchMovies} genres={genres} />
      {moviesNotFound && (
        <FilmNotFoundImg src={FilmNotFound} alt="film not found" />
      )}
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}
      {loading && <Loader />}
    </>
  );
};

export default Movies;
