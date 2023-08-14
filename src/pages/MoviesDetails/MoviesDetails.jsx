import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import Loader from 'components/Loader/Loader';
import { fetchMovieDetails } from 'services/themoviedbAPI';
import MovieCard from 'components/MovieCard/MovieCard';
import BackLink from 'components/BackLink/BackLink';
import { Container } from 'components/Container.styled';

const MoviesDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  // const backLink = location.state?.from ?? '/';
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        setLoading(true);
        const movieDetailData = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetailData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}
      <Container>
        <BackLink to={backLink.current} />
        <MovieCard detail={movieDetails} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MoviesDetails;
