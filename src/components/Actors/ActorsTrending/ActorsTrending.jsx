import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import Loader from 'components/Loader/Loader';
import { fetchTrendingActors } from 'services/themoviedbAPI';
import ActorsList from '../ActorsList/ActorsList';
import { Title } from '../ActorDetailCard/ActorDetailCard.styled';

const ActorsTrending = () => {
  const [actorsTrending, setActorsTrending] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrendingActors = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendingActors();

        setActorsTrending(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getTrendingActors();
  }, []);
  return (
    <>
      <Title>Trending Actors</Title>
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}
      {loading && <Loader />}
      <ActorsList actors={actorsTrending} />
    </>
  );
};

export default ActorsTrending;
