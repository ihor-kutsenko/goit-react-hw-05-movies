import useLocalStorage from 'hooks/UseLocalStorage';
import LibraryMovie from '../../img/movie.png';
import LibraryMovieCard from 'components/LibraryCard/LibraryCard';
import { Card, LibraryImg, TitleLibrary } from './Library.styled';
import { Container } from 'components/Container.styled';

const Library = () => {
  const [movieStorages, setMovieStorages] = useLocalStorage('MovieStorages');

  return (
    <>
      <Container>
        {' '}
        {movieStorages.map(movie => (
          <Card key={movie.id}>
            <LibraryMovieCard
              detail={movie}
              updateMovieStorages={setMovieStorages}
            />
          </Card>
        ))}
        {movieStorages.length === 0 && (
          <>
            <TitleLibrary>Your Library is empty...</TitleLibrary>
            <LibraryImg src={LibraryMovie} alt="cinema" />
          </>
        )}
      </Container>
    </>
  );
};

export default Library;
