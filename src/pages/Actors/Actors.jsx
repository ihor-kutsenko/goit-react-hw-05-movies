import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import SearchBar from 'components/SearchBar/SearchBar';
import Loader from 'components/Loader/Loader';
import ActorsList from 'components/Actors/ActorsList/ActorsList';
import { fetchActors } from 'services/themoviedbAPI';
import { Container } from 'components/Container.styled';
import ActorsTrending from 'components/Actors/ActorsTrending/ActorsTrending';
import NextPageBtn from 'components/NextPageBtn/NextPageBtn';
import PreviousPageBtn from 'components/PreviousPageBtn/PreviousPageBtn';
import { ButtonWrapper } from 'components/Container.styled';

const Actors = () => {
  const [searchActors, setSearchActors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [nextPageBtn, setNextPageBtn] = useState(false);
  const [previousPageBtn, setPreviousPageBtn] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchActor = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchActor) return;

    const getSearchActors = async query => {
      try {
        setLoading(true);
        const { results } = await fetchActors(query, page);

        if (results.length === 0) {
          toast.info(
            `Sorry, there are no actors matching your query: "${searchActor}". Please try to search something else.`,
            notifyOptions
          );
          setSearchActors([]);
          setSearchParams({});
        }
        if (results.length === 20) {
          setNextPageBtn(true);
        }
        if (page < 2) {
          setPreviousPageBtn(false);
        } else {
          setPreviousPageBtn(true);
        }

        setSearchActors([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchActor) getSearchActors(searchActor);
  }, [searchActor, setSearchParams, page]);

  const onFormSearch = query => {
    setSearchParams({
      query: query,
      page,
    });
  };

  const handleNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => prevPage - 1);
  };

  return (
    <>
      <SearchBar onSubmit={onFormSearch} />
      <Container>
        {!searchActor ? <ActorsTrending /> : null}
        <ActorsList actors={searchActors} />
        <ButtonWrapper>
          {previousPageBtn && (
            <PreviousPageBtn onPreviousPage={handlePreviousPage} />
          )}
          {nextPageBtn && <NextPageBtn onNextPage={handleNextPage} />}
        </ButtonWrapper>
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

export default Actors;
