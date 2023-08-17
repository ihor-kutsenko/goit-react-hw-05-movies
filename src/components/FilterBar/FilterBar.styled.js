import styled from 'styled-components';

export const FilterBarWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  gap: 10px;
  @media screen and (min-width: 768px) {
    width: fit-content;
    display: flex;
    justify-content: center;
  }
`;

export const FilterBarContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
`;

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FormList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: stretch;
  gap: 6px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }
`;

export const FormListItem = styled.li`
  display: inline-flex;
  width: calc(50% - 4px);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: max-content;
  }
`;

export const FormSelect = styled.select`
  display: flex;
  align-items: center;
  max-width: 500px;
  min-width: 200px;
  min-height: 44px;
  padding: 12px 6px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  text-align: center;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  outline: none;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.black};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
`;

export const Option = styled.option`
  max-width: 500px;
  min-height: 44px;
  background-color: hsla(34, 14%, 90%, 0.4);
  padding: 12px 6px;
  border: none;
  border-radius: 25px;
  outline: none;
  color: ${props => props.theme.colors.black};
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
`;

export const FilterBarBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 44px;
  padding: 6px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.accent};
  position: relative;

  color: $primary-text-color;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.33;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: none;
    color: ${props => props.theme.colors.white};
    transform: scale(1.1);
  }
`;
