import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import Loader from 'components/Loader/Loader';
import { fetchTrendingMovies, fetchGenresMovies } from 'services/themoviedbAPI';
import MoviesList from 'components/Movies/MoviesList/MovieList';
import { MainTitle } from './Home.styled';
import NextPageBtn from 'components/NextPageBtn/NextPageBtn';
import PreviousPageBtn from 'components/PreviousPageBtn/PreviousPageBtn';
import { ButtonWrapper, Container } from 'components/Container.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPageBtn, setNextPageBtn] = useState(false);
  const [previousPageBtn, setPreviousPageBtn] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies(page);

        setTrendingMovies(data.results);

        if (data.results.length === 20) {
          setNextPageBtn(true);
        }
        if (data.results.length < 20) {
          setNextPageBtn(false);
        }
        if (page < 2) {
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
    getTrendingMovies();
  }, [page]);

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

  const handleNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => prevPage - 1);
  };

  return (
    <>
      <MainTitle>The most popular movies today 🔝</MainTitle>
      <Container>
        <MoviesList movies={trendingMovies} genres={genres} />
        <ButtonWrapper>
          {previousPageBtn && (
            <PreviousPageBtn onPreviousPage={handlePreviousPage} />
          )}
          {nextPageBtn && <NextPageBtn onNextPage={handleNextPage} />}
        </ButtonWrapper>

        {error &&
          toast.error(
            'Ooops... Something went wrong. Please try again later!',
            notifyOptions
          )}
        {loading && <Loader />}
      </Container>
    </>
  );
};

export default Home;
