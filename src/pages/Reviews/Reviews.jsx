import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import { fetchMoviesReviews } from 'services/themoviedbAPI';
import Loader from 'components/Loader/Loader';
import ReviewsCard from 'components/ReviewsCard/ReviewsCard';
import { ReviewsList, ReviewsItem, Empty } from './Reviews.styled';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        setLoading(true);
        const { results } = await fetchMoviesReviews(movieId);

        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error &&
        toast.error(
          'Ooops... Something went wrong. Please try again later!',
          notifyOptions
        )}
      {reviews.length ? (
        <ReviewsList>
          {reviews.map(({ id, ...reviews }) => {
            return (
              <ReviewsItem key={id}>
                <ReviewsCard {...reviews} />
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <Empty>We don't have any information about cast for this movie</Empty>
      )}
    </>
  );
};

export default Review;
