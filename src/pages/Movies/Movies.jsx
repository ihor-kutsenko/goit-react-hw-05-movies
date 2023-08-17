import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import Loader from 'components/Loader/Loader';
import {
  fetchSearchMovies,
  fetchGenresMovies,
  fetchFilters,
} from 'services/themoviedbAPI';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/Movies/MoviesList/MovieList';
import FilmNotFound from '../../img/not-found-film.jpg';
import { FilmNotFoundImg } from './Movies.styled';
import NextPageBtn from 'components/NextPageBtn/NextPageBtn';
import PreviousPageBtn from 'components/PreviousPageBtn/PreviousPageBtn';
import { ButtonWrapper, Container } from 'components/Container.styled';
// filter
import FilterGenres from 'components/FilterBar/FilterGenres/FilterGenres';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [page] = useState(1);
  const [nextPageBtn, setNextPageBtn] = useState(false);
  const [previousPageBtn, setPreviousPageBtn] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({ page: page });
  const searchMovie = searchParams.get('query') ?? '';

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchPage, setSearchPage] = useState(1); // Page for search
  const [genrePage, setGenrePage] = useState(1); // Page for genre filter

  useEffect(() => {
    if (!searchMovie) return;

    const getSearchMovies = async query => {
      try {
        setLoading(true);
        setSelectedGenre(null);
        const { results } = await fetchSearchMovies(query, searchPage);

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
        if (searchPage < 2) {
          setPreviousPageBtn(false);
        } else {
          setPreviousPageBtn(true);
        }
        setSelectedGenre(null);
        setSearchMovies([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchMovie) getSearchMovies(searchMovie);
  }, [searchMovie, setSearchParams, moviesNotFound, searchPage, page]);

  // get genres
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

  // get movies by genres (filter)

  useEffect(() => {
    if (!selectedGenre) return;

    const getSearchMoviesByFilter = async genre => {
      try {
        const data = await fetchFilters(genre, genrePage);

        setSearchMovies(data);
        if (data.length === 20) {
          setNextPageBtn(true);
        }
        if (data.length < 20) {
          setNextPageBtn(false);
        }
        if (genrePage < 2) {
          setPreviousPageBtn(false);
        } else {
          setPreviousPageBtn(true);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getSearchMoviesByFilter(selectedGenre);
  }, [selectedGenre, genrePage]);

  // pagination
  const onFormSearch = query => {
    setSearchParams({
      query: query,
      page,
    });
    setSearchPage(1); // Reset the search page
    setGenrePage(1); // Reset the genre filter page
    setSelectedGenre(null);
  };

  const handleNextPage = () => {
    if (selectedGenre) {
      setGenrePage(prevPage => prevPage + 1);
    } else {
      setSearchPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (selectedGenre) {
      setGenrePage(prevPage => prevPage - 1);
    } else {
      setSearchPage(prevPage => prevPage - 1);
    }
  };

  return (
    <>
      <SearchBar onSubmit={onFormSearch} />
      <FilterGenres genres={genres} onSelect={setSelectedGenre} />
      <Container>
        {<MoviesList movies={searchMovies} genres={genres} />}

        <ButtonWrapper>
          {previousPageBtn && (
            <PreviousPageBtn onPreviousPage={handlePreviousPage} />
          )}
          {nextPageBtn && <NextPageBtn onNextPage={handleNextPage} />}
        </ButtonWrapper>

        {moviesNotFound && (
          <FilmNotFoundImg src={FilmNotFound} alt="film not found" />
        )}
      </Container>
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
