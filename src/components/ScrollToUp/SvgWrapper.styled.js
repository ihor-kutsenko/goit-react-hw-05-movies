import styled from 'styled-components';

export const SvgWrapper = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 35;

  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  transform: scale(1);
  transition: transform 250ms linear, color 250ms linear,
    background-color 250ms linear;

  &:hover {
    color: ${props => props.theme.colors.accent};
    transform: scale(1.2);
    background-color: ${props => props.theme.colors.grey};
  }
`;
