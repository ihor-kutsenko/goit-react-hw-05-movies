import styled from 'styled-components';
export const GenresBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 16px) / 3);
    margin-bottom: 32px;
  }

  @media screen and (min-width: 980px) {
    flex-basis: calc((100% - 2 * 16px) / 3);
    margin-bottom: 32px;
  }

  transition-property: scale;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active,
  &:focus {
    scale: 1.03;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const MovieCardThumb = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

export const MovieCardPoster = styled.img`
  margin: 0;
  width: 280px;
  height: 402px;

  display: block;
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;

  transition-property: scale;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 1s ease-out;

  cursor: pointer;

  &:hover {
    scale: 1.15;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 455px;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
    height: 574px;
  }
`;

export const MovieCardWrapp = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: 5px;

  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 336px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const MovieTitle = styled.h2`
  flex-grow: 1;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;

  font-size: 12px;
  line-height: 1.2;
  text-align: left;

  @media screen and (min-width: 768px) {
    line-height: 1.3;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const MovieInfoList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  color: ${props => props.theme.colors.accent};
`;

export const InfoItemVote = styled.p`
  max-width: 40px;
  max-height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 3px 11px;
  background: ${props => props.theme.colors.accent};
  border-radius: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  color: ${props => props.theme.colors.white};
`;
