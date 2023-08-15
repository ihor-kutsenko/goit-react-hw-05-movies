import styled from 'styled-components';

export const PreviousBtn = styled.button`
  display: inline-flex;
  align-items: center;
  width: 200px;
  gap: 10px;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 8px;
  text-align: center;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.accent};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms linear;

  &:hover {
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.grey};
  }
`;
