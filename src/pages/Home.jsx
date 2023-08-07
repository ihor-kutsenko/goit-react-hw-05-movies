import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import { fetchTrendingMovies, fetchGenresMovies } from 'services/themoviedbAPI';
import MoviesList from 'components/MoviesList/MovieList';
import { MainTitle } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();

        setTrendingMovies(data.results);
      } catch (error) {
        setError(error);
      }
    };
    getTrendingMovies();
  }, []);

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
      <MainTitle>The most popular movies today 🔝</MainTitle>

      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}
      <MoviesList movies={trendingMovies} genres={genres} />
    </>
  );
};

export default Home;
