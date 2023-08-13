import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import SearchBar from 'components/SearchBar/SearchBar';
import Loader from 'components/Loader/Loader';
import ActorsList from 'components/ActorsList/ActorsList';
import { fetchActors } from 'services/themoviedbAPI';
import ActorsNotFound from '../../img/not-found2.png';

const Actors = () => {
  const [searchActors, setSearchActors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [actorsNotFound, setActorsNotFound] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchActor = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchActor) return;

    const getSearchActors = async query => {
      try {
        setLoading(true);
        const { results } = await fetchActors(query);

        if (results.length === 0) {
          toast.info(
            `Sorry, there are no actors matching your query: "${searchActor}". Please try to search something else.`,
            notifyOptions
          );
          setActorsNotFound(true);
          setSearchActors([]);
          setSearchParams({});
        }

        setSearchActors([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchActor) getSearchActors(searchActor);
  }, [searchActor, setSearchParams, actorsNotFound]);

  const onFormSearch = query => {
    setSearchParams({
      query: query,
    });
  };
  return (
    <div>
      <SearchBar onSubmit={onFormSearch} />
      <ActorsList actors={searchActors} />
      {actorsNotFound && <img src={ActorsNotFound} alt="not found" />}
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}
      {loading && <Loader />}
    </div>
  );
};

export default Actors;
