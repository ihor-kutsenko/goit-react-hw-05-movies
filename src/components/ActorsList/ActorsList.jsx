import ActorsItem from 'components/ActorsItem/ActorsItem';
import { ActorList } from './ActorsList.styled';
const ActorsList = ({ actors }) => {
  return (
    <>
      <ActorList>
        {actors.map(actor => (
          <ActorsItem key={actor.id} actor={actor} />
        ))}
      </ActorList>
    </>
  );
};

export default ActorsList;
