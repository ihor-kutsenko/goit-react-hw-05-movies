import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerCard = styled.div`
  padding: 15px;
  height: auto;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.text};

  @media screen and (min-width: 767px) {
    display: flex;
    gap: 30px;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
  @media screen and (min-width: 767px) {
    width: 300px;
    margin-bottom: 0;
    margin: 0;
  }
`;
export const TextContainer = styled.div``;

export const TextWrapper = styled.p`
  margin-bottom: 10px;
`;

export const CenteredButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 8px 16px;
  margin-top: 20px;
  border-radius: 25px;
  text-align: center;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.accent};
  font-weight: 600;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;

export const MovieTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.accent};
`;
export const ReleaseYear = styled.span`
  font-weight: 600;
  padding: 0px 10px;
`;

export const TextTitle = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.white};
`;
export const TextOverview = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextTitleInfo = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.accent};
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Section = styled.section`
  background-color: green;
`;

export const InfoText = styled.h3`
  text-align: center;
  margin-top: 120px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.white};
`;

export const InfoItem = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  width: 200px;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.accent};
  opacity: 2;
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;
