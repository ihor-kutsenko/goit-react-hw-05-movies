import styled from 'styled-components';

export const ActorsContainer = styled.div`
  padding: 10px;
`;

export const ActorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const ActorListItem = styled.li`
  padding: 10px 10px 110px;
  max-width: 100%;
  width: 220px;
  height: 300px;
  overflow: hidden;

  border: none;
  transform: scale(1);
  border-radius: 12px;
  background-color: transparent;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);
  transition: box-shadow 250ms linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
  }
`;
export const ActorPhoto = styled.img`
  display: block;
  min-height: 100%;
  height: 200px;
  width: 100%;
  margin-bottom: 10px;

  border-radius: 12px;
  transition: transform 250ms linear;
  transform: scale(1);

  object-fit: cover;
  object-position: center;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ActorsName = styled.p`
  max-width: 200px;
  margin-bottom: 6px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
`;

export const Acting = styled.p`
  font-size: 16px;
  margin-bottom: 6px;
  color: ${props => props.theme.colors.white};
`;

export const Known = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

export const PopularityTitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
`;

export const Popularity = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.accent};
`;
