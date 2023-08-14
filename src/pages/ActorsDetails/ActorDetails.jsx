import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import Loader from 'components/Loader/Loader';
import { fetchActorsDetails } from 'services/themoviedbAPI';
import BackLink from 'components/BackLink/BackLink';
import ActorDetailCard from 'components/ActorDetailCard/ActorDetailCard';
import { Container } from 'components/Container.styled';

const ActorDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [actorDetails, setActorDetails] = useState({});
  const { actorId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getActorDetails = async actorId => {
      try {
        setLoading(true);
        const actorDetailData = await fetchActorsDetails(actorId);
        setActorDetails(actorDetailData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getActorDetails(actorId);
  }, [actorId]);
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
        <ActorDetailCard detail={actorDetails} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default ActorDetails;
