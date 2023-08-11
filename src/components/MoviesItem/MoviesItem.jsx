import { Link, useLocation } from 'react-router-dom';
import Genres from 'components/Genres/Genres';
import {
  GalleryItem,
  GenresBlock,
  MovieCardPoster,
  MovieCardThumb,
  MovieCardWrapp,
  MovieTitle,
  MovieInfoList,
  InfoItemVote,
} from './MoviesItem.styled';

const MoviesItem = ({
  movie: { id, poster_path, title, release_date, vote_average, genre_ids },
  genres,
}) => {
  const location = useLocation();
  const pathName = location.pathname.includes('/movies') ? '' : 'movies/';
  const votes = vote_average.toFixed(1);
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : `https://www.scifi-movies.com/images/site/en/affiche_nondisponible.jpg`;
  const releaseYear = new Date(Date.parse(release_date)).getFullYear() || '';

  return (
    <GalleryItem>
      <Link to={`${pathName}${id}`} state={{ from: location }}>
        <MovieCardThumb>
          <MovieCardPoster src={posterUrl} alt={title} />
        </MovieCardThumb>
        <MovieCardWrapp>
          <MovieTitle> {title}</MovieTitle>
          <MovieInfoList>
            <GenresBlock>
              <Genres data={genre_ids} genres={genres} />
            </GenresBlock>
            <span> | </span>
            <p>{releaseYear}</p>
            <InfoItemVote>{votes}</InfoItemVote>
          </MovieInfoList>
        </MovieCardWrapp>
      </Link>
    </GalleryItem>
  );
};

export default MoviesItem;
