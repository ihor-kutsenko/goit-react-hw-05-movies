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

export const Empty = styled.p`
  text-align: center;
  margin-top: 20px;
  color: ${props => props.theme.colors.text};
`;
