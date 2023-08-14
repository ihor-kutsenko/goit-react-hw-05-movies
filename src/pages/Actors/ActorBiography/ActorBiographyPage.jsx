import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import { fetchActorsDetails } from 'services/themoviedbAPI';
import Loader from 'components/Loader/Loader';

import {
  TextOverview,
  TextTitle,
  Content,
  Empty,
} from 'pages/Actors/ActorBiography/ActorBiographyPage.styled';

const ActorBiographyPage = () => {
  const { actorId } = useParams();
  const [biography, setBiography] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBiography = async actorId => {
      try {
        setLoading(true);
        const results = await fetchActorsDetails(actorId);

        setBiography(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getBiography(actorId);
  }, [actorId]);

  return (
    <>
      {loading && <Loader />}
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}
      {biography.biography ? (
        <TextOverview>
          <TextTitle>Biography</TextTitle>
          <Content>{biography.biography}</Content>
        </TextOverview>
      ) : (
        <Empty>No information available for biography</Empty>
      )}
    </>
  );
};

export default ActorBiographyPage;
