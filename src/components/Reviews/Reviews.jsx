import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import { fetchMoviesReviews } from 'services/themoviedbAPI';
import Loader from 'components/Loader/Loader';
import { Author, AuthorName, Content, Empty } from './Reviews.styled';

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
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <Author>
                  Author: <AuthorName>{author}</AuthorName>
                </Author>
                <Content>{content}</Content>
              </li>
            );
          })}
        </ul>
      ) : (
        <Empty>We don't have any information about cast for this movie</Empty>
      )}
    </>
  );
};

export default Review;
