import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import Loader from 'components/Loader/Loader';
import { fetchTrendingActors } from 'services/themoviedbAPI';
import ActorsList from '../ActorsList/ActorsList';
import { Title } from '../ActorDetailCard/ActorDetailCard.styled';

import NextPageBtn from 'components/NextPageBtn/NextPageBtn';
import PreviousPageBtn from 'components/PreviousPageBtn/PreviousPageBtn';
import { ButtonWrapper } from 'components/Container.styled';

const ActorsTrending = () => {
  const [actorsTrending, setActorsTrending] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const [nextPageBtn, setNextPageBtn] = useState(false);
  const [previousPageBtn, setPreviousPageBtn] = useState(false);

  useEffect(() => {
    const getTrendingActors = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendingActors(page);

        setActorsTrending(data.results);
        if (data.results.length === 20) {
          setNextPageBtn(true);
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
    getTrendingActors();
  }, [page]);

  const handleNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => prevPage - 1);
  };

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
      <ButtonWrapper>
        {previousPageBtn && (
          <PreviousPageBtn onPreviousPage={handlePreviousPage} />
        )}
        {nextPageBtn && <NextPageBtn onNextPage={handleNextPage} />}
      </ButtonWrapper>
    </>
  );
};

export default ActorsTrending;
