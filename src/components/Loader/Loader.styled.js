import styled from 'styled-components';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 102;
`;
