import {
  CastPhotoWrapper,
  CastPhoto,
  Wrap,
  ActorsName,
  ActorsCharacter,
  MovieHero,
} from './CastCard.styled';

const CastCard = ({ profile_path, name, character }) => {
  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;`;

  return (
    <>
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
    </>
  );
};

export default CastCard;
