import { toast } from 'react-toastify';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';

import useLocalStorage from 'hooks/UseLocalStorage';
import LibraryMovie from '../../img/movie.png';
import LibraryMovieCard from 'components/LibraryCard/LibraryCard';
import { Card, LibraryImg, TitleLibrary } from './Library.styled';

const Library = () => {
  const [movieStorages, setMovieStorages] = useLocalStorage('MovieStorages');

  const removeMovieFromLibrary = movieId => {
    setMovieStorages(movieStorages.filter(movie => movie.id !== movieId));
    const deletedContact = movieStorages.find(movie => movie.id === movieId);
    if (deletedContact) {
      toast.info(
        `${deletedContact.title} was deleted from your Library`,
        notifyOptions
      );
    }
  };

  return (
    <>
      {movieStorages.map(movie => (
        <Card key={movie.id}>
          <LibraryMovieCard
            key={movie.id}
            detail={movie}
            isInLibrary={true}
            removeFromLibrary={() => removeMovieFromLibrary(movie.id)}
          />
        </Card>
      ))}
      {movieStorages.length === 0 && (
        <>
          <TitleLibrary>Your Library is empty...</TitleLibrary>
          <LibraryImg src={LibraryMovie} alt="cinema" />
        </>
      )}
    </>
  );
};

export default Library;
