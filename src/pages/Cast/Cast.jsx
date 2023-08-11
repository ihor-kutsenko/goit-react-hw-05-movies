import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import { fetchMovieCredits } from 'services/themoviedbAPI';
import Loader from 'components/Loader/Loader';
import CastCard from 'components/CastCard/CastCard';
import { CastList, CastItem, Empty } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getcast = async movieId => {
      try {
        setLoading(true);
        const { cast } = await fetchMovieCredits(movieId);

        setCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getcast(movieId);
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}
      {cast.length ? (
        <CastList>
          {cast.map(({ id, ...cast }) => (
            <CastItem key={id}>
              <CastCard {...cast} />
            </CastItem>
          ))}
        </CastList>
      ) : (
        <Empty>We don't have any information about cast for this movie</Empty>
      )}
    </>
  );
};

export default Cast;
