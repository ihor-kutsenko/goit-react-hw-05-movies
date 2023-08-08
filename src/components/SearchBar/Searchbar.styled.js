import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  border-radius: 25px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  margin-left: 2px;
  width: 50px;
  height: 45px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 2;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.accent};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover svg {
    opacity: 0.9;
    scale: 1.2;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  height: 48px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
    padding-left: 5px;
  }
`;
