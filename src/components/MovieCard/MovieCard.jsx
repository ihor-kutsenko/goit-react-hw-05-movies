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
  InfoItem,
  InfoText,
  InfoList,
} from './MovieCard.styled';

const MovieCard = ({
  detail: { poster_path, title, vote_average, overview, genres, release_date },
}) => {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : `https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png`;
  const releaseYear = new Date(Date.parse(release_date)).getFullYear() || '';
  const rating = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';
  const review = overview ? overview : 'Not overview';

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
          <div></div>
          <InfoText>Additional information</InfoText>
          <InfoList>
            <li>
              <InfoItem to="cast">Cast</InfoItem>
            </li>
            <li>
              <InfoItem to="reviews">Reviews</InfoItem>
            </li>
          </InfoList>
        </TextContainer>
      </ContainerCard>
    </>
  );
};

export default MovieCard;
