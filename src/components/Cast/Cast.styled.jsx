import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 100%;
  width: 180px;
  height: 100%;

  border: none;
  outline: none;

  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
`;

export const CastPhotoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const CastPhoto = styled.img`
  display: block;
  min-height: 100%;
  height: 240px;
  width: 100%;

  border-radius: 12px;
  transition: transform 250ms linear;
  transform: scale(1);

  object-fit: cover;
  object-position: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Wrap = styled.div`
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  padding: 4px;
`;

export const ActorsName = styled.h3`
  margin-bottom: 8px;
  text-align: center;
  color: ${props => props.theme.colors.accent};
  font-size: 20px;
  font-weight: 500;
`;

export const ActorsCharacter = styled.p`
  margin-bottom: 6px;
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: 500;
`;

export const MovieHero = styled.span`
  color: ${props => props.theme.colors.text};
`;

export const Empty = styled.p`
  text-align: center;
  margin-top: 20px;
  color: ${props => props.theme.colors.text};
`;
