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
import NextPageBtn from 'components/NextPageBtn/NextPageBtn';
import PreviousPageBtn from 'components/PreviousPageBtn/PreviousPageBtn';
import { ButtonWrapper } from 'components/Container.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [page, setPage] = useState(1);
  const [nextPageBtn, setNextPageBtn] = useState(false);
  const [previousPageBtn, setPreviousPageBtn] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchMovie) return;

    const getSearchMovies = async query => {
      try {
        setLoading(true);
        const { results } = await fetchSearchMovies(query, page);
        console.log(results);
        if (results.length === 0) {
          toast.info(
            `Sorry, there are no movies matching your query: "${searchMovie}". Please try to search something else.`,
            notifyOptions
          );
          setMoviesNotFound(true);
          setSearchMovies([]);
          setSearchParams({});
        }
        if (results.length === 20) {
          setNextPageBtn(true);
        }
        if (results.length < 20) {
          setNextPageBtn(false);
        }
        if (page < 2) {
          setPreviousPageBtn(false);
        } else {
          setPreviousPageBtn(true);
        }

        setSearchMovies([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchMovie) getSearchMovies(searchMovie);
  }, [searchMovie, setSearchParams, moviesNotFound, page]);

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
      page,
    });
  };

  const handleNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => prevPage - 1);
  };

  return (
    <>
      <SearchBar onSubmit={onFormSearch} />

      <MoviesList movies={searchMovies} genres={genres} />
      <ButtonWrapper>
        {previousPageBtn && (
          <PreviousPageBtn onPreviousPage={handlePreviousPage} />
        )}
        {nextPageBtn && <NextPageBtn onNextPage={handleNextPage} />}
      </ButtonWrapper>
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
