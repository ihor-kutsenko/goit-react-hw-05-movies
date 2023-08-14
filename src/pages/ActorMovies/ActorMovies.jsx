import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import Loader from 'components/Loader/Loader';
import { fetchActorsMovies } from 'services/themoviedbAPI';
import MoviesList from 'components/MoviesList/MovieList';

const ActorMovies = () => {
  const { actorId } = useParams();
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getActorMovies = async actorId => {
      try {
        setLoading(true);
        const dataMovies = await fetchActorsMovies(actorId);
        setMovies(dataMovies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getActorMovies(actorId);
  }, [actorId]);

  return (
    <>
      {loading && <Loader />}
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}

      {movies && Object.keys(movies).length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <p>No movies available for this actor.</p>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ActorMovies;
