import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 20px;
  overflow: hidden;
  background: linear-gradient(
    290deg,
    rgb(81, 28, 0),
    rgb(238, 238, 238),
    rgb(255, 98, 0)
  );
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;
export const ContainerCard = styled.div`
  padding: 15px;
  max-height: 500px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.text};

  @media screen and (min-width: 600px) {
    display: flex;
    gap: 30px;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
  height: auto;
  @media screen and (min-width: 600px) {
    max-width: 100%;
    margin-bottom: 0;
    margin: 0;
  }
`;
export const TextContainer = styled.div``;

export const TextWrapper = styled.p`
  margin-bottom: 16px;
`;

export const ActorName = styled.h2`
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.accent};
`;

export const TextTitle = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.white};
`;
export const TextOverview = styled.span`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextTitleInfo = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.accent};
`;

export const Content = styled.p`
  font-size: 18px;
  max-height: 200px;
  overflow: auto;
  text-align: justify;
  position: relative;
  padding: 15px 20px;
  border-radius: 12px;
  color: ${props => props.theme.colors.grey};
  background-color: ${props => props.theme.colors.text};

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 20px;
    border: 10px solid transparent;
    border-bottom-color: ${props => props.theme.colors.text};
  }
`;

export const InfoText = styled.h3`
  text-align: center;
  margin-top: 120px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.white};
`;
export const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const InfoItem = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  width: 80px;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.accent};
  opacity: 2;
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;
