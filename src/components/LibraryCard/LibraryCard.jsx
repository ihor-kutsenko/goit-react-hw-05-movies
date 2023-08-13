import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';
import { useLocation } from 'react-router-dom';

import {
  Image,
  MovieTitle,
  TextOverview,
  TextTitle,
  ContainerCard,
  TextTitleInfo,
  TextContainer,
  TextWrapper,
  ReleaseYear,
  InfoText,
  Button,
  InfoItem,
} from './LibraryCard.styled';

import useLocalStorage from 'hooks/UseLocalStorage';

const LibraryMovieCard = ({
  detail: {
    poster_path,
    id,
    title,
    vote_average,
    overview,
    genres,
    release_date,
  },
}) => {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : `https://www.scifi-movies.com/images/site/en/affiche_nondisponible.jpg`;

  const releaseYear = new Date(Date.parse(release_date)).getFullYear() || '';

  const rating = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  const review = overview ? overview : 'Not overview';

  const [movieStorages, setMovieStorages] = useLocalStorage('MovieStorages');
  const location = useLocation();

  const isInLibrary = movieStorages.some(
    existingMovie => existingMovie.id === id
  );

  const toggleLibraryStatus = () => {
    if (isInLibrary) {
      setMovieStorages(movieStorages.filter(movie => movie.id !== id));
      toast.info(`${title} was deleted from your Library`, notifyOptions);
    } else {
      const movie = {
        id,
        poster_path,
        overview,
        title,
        release_date,
        vote_average,
        genres,
      };
      setMovieStorages([...movieStorages, movie]);
      toast.success(
        `${title} was successfully added to your Library`,
        notifyOptions
      );
    }
  };
  // const removeMovieFromLibrary = movieId => {
  //   const updatedMovies = movieStorages.filter(movie => movie.id !== movieId);
  //   setMovieStorages(updatedMovies);
  //   toast.info(`${title} was deleted from your Library`, notifyOptions);
  // };

  return (
    <>
      <ContainerCard>
        <Image src={posterUrl} alt={title} width="200"></Image>

        <TextContainer>
          <MovieTitle>
            {title}
            <ReleaseYear>({releaseYear})</ReleaseYear>
          </MovieTitle>
          <TextTitle>User score: {rating}</TextTitle>
          <TextOverview>
            <TextTitle>Overview</TextTitle>
            {review}
          </TextOverview>
          <TextWrapper>
            <TextTitle>Release date: </TextTitle>
            <TextTitleInfo>{releaseYear}</TextTitleInfo>
          </TextWrapper>
          {genres && genres.length > 0 && (
            <TextWrapper>
              <TextTitle>Genres: </TextTitle>
              <TextTitleInfo>
                {genres.map(genre => genre.name).join(', ')}
              </TextTitleInfo>
            </TextWrapper>
          )}

          <Button type="button" onClick={toggleLibraryStatus} disabled={false}>
            {isInLibrary ? 'Delete Film from Library' : 'Add Film to Library'}
          </Button>

          <InfoText>
            <InfoItem to={`/movies/${id}`} state={{ from: location }}>
              Movie Details
            </InfoItem>
          </InfoText>
        </TextContainer>
      </ContainerCard>
    </>
  );
};

export default LibraryMovieCard;
