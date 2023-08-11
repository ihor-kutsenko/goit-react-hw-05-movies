import styled from 'styled-components';

export const Author = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: 10px;
  color: ${props => props.theme.colors.text};
`;

export const AuthorName = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const Content = styled.p`
  font-size: 14px;
  text-align: justify;
  position: relative;
  padding: 15px 20px;
  border-radius: 12px;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.grey};

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 20px;
    border: 10px solid transparent;
    border-bottom-color: ${props => props.theme.colors.grey};
  }
`;

export const Empty = styled.p`
  text-align: center;
  margin-top: 20px;
  color: ${props => props.theme.colors.text};
`;
