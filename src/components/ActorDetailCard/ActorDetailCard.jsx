import {
  Image,
  ActorName,
  TextTitle,
  ContainerCard,
  TextTitleInfo,
  TextContainer,
  TextWrapper,
  InfoItem,
  InfoText,
  InfoList,
  Title,
} from './ActorDetailCard.styled';

const ActorDetailCard = ({
  detail: { profile_path, name, birthday, place_of_birth, popularity },
}) => {
  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;`;
  const actorUrl = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : defaultImg;
  return (
    <>
      <Title> BIOGRAPHY, MOVIES AND FACTS</Title>
      <ContainerCard>
        <Image src={actorUrl} alt={name} width={350}></Image>

        <TextContainer>
          <ActorName>{name}</ActorName>
          <TextWrapper>
            <TextTitle>Date of birth: </TextTitle>
            <TextTitleInfo>{birthday}</TextTitleInfo>
          </TextWrapper>
          <TextWrapper>
            <TextTitle>Place of birth: </TextTitle>
            <TextTitleInfo>{place_of_birth}</TextTitleInfo>
          </TextWrapper>
          <TextWrapper>
            <TextTitle>Popularity: </TextTitle>
            <TextTitleInfo>{popularity}</TextTitleInfo>
          </TextWrapper>

          <InfoText>Additional information</InfoText>
          <InfoList>
            <li>
              <InfoItem to="biography">Biography</InfoItem>
            </li>
            <li>
              <InfoItem to="actors-movie">Movie</InfoItem>
            </li>
          </InfoList>
        </TextContainer>
      </ContainerCard>
    </>
  );
};

export default ActorDetailCard;
