import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;
