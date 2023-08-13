import { Link, useLocation } from 'react-router-dom';
import {
  ActorListItem,
  ActorsName,
  Acting,
  PopularityTitle,
  Known,
  ActorsContainer,
  ActorPhoto,
  Popularity,
} from './ActorsItem.Styled';

const ActorsItem = ({
  actor: {
    profile_path,
    name,
    known_for,
    known_for_department,
    popularity,
    id,
  },
}) => {
  const location = useLocation();
  const pathName = location.pathname.includes('/actors') ? '' : 'actors/';
  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;`;

  return (
    <>
      <ActorsContainer>
        <Link to={`${pathName}${id}`} state={{ from: location }} key={id}>
          <ActorListItem>
            <ActorPhoto
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : defaultImg
              }
              alt={name}
              width={200}
            />
            <ActorsName>{name}</ActorsName>
            <Acting>
              {known_for_department}:{' '}
              {known_for[0] && (
                <>
                  <Known>{known_for[0]?.title}</Known>
                </>
              )}
            </Acting>

            <PopularityTitle>
              Popularity : <Popularity>{popularity.toFixed(3)}</Popularity>
            </PopularityTitle>
          </ActorListItem>
        </Link>
      </ActorsContainer>
    </>
  );
};

export default ActorsItem;
