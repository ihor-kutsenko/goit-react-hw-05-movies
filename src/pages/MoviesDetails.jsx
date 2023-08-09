import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import Loader from 'components/Loader/Loader';
import { fetchMovieDetails } from 'services/themoviedbAPI';
import MovieCard from 'components/MovieCard/MovieCard';

const MoviesDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [genres, setGenres] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

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
      <MovieCard detail={movieDetails} />
      <Suspense fallback={<div>Loading page ...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
