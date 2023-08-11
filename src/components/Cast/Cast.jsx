import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import { fetchMovieCredits } from 'services/themoviedbAPI';
import Loader from 'components/Loader/Loader';
import {
  CastList,
  CastItem,
  CastPhotoWrapper,
  CastPhoto,
  Wrap,
  ActorsName,
  ActorsCharacter,
  MovieHero,
  Empty,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;`;

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
          {cast.map(({ id, profile_path, name, character }) => (
            <CastItem key={id}>
              <CastPhotoWrapper>
                <CastPhoto
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                  width="120"
                />
              </CastPhotoWrapper>
              <Wrap>
                <ActorsName>{name}</ActorsName>
                {character && (
                  <ActorsCharacter>
                    Character: <MovieHero>{character}</MovieHero>
                  </ActorsCharacter>
                )}
              </Wrap>
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
