import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import { fetchTrailerById } from 'services/themoviedbAPI';
import Loader from 'components/Loader/Loader';
import RenderTrailer from 'components/RenderTrailer/RenderTrailer';
import { Empty } from '../../../components/RenderTrailer/RenderTrailer.styled';

const Trailer = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrailer = async movieId => {
      try {
        setLoading(true);
        const { results } = await fetchTrailerById(movieId);

        setTrailer(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getTrailer(movieId);
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}

      {trailer.length ? (
        <RenderTrailer trailer={trailer} />
      ) : (
        <Empty>No trailer was found for this movie.</Empty>
      )}
    </>
  );
};

export default Trailer;
