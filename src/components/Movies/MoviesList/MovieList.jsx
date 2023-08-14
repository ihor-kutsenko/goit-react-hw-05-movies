import MoviesItem from 'components/Movies/MoviesItem/MoviesItem';
import { MovieList } from './MovieList.styled';

const MoviesList = ({ movies, genres }) => {
  return (
    <>
      <MovieList>
        {movies.map(movie => (
          <MoviesItem key={movie.id} movie={movie} genres={genres} />
        ))}
      </MovieList>
    </>
  );
};

export default MoviesList;
