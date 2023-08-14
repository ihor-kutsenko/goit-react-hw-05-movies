import styled from 'styled-components';

export const TextTitle = styled.span`
  font-weight: 600;
  font-size: 40px;
  padding-left: 10px;
  color: ${props => props.theme.colors.white};
`;
export const TextOverview = styled.span`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 30px;
  gap: 20px;
`;
export const Content = styled.p`
  font-size: 24px;
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
    left: 40px;
    border: 10px solid transparent;
    border-bottom-color: ${props => props.theme.colors.text};
  }
`;
export const Empty = styled.p`
  text-align: center;
  margin-top: 20px;
  color: ${props => props.theme.colors.text};
`;
