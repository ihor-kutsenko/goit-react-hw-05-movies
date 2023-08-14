import styled from 'styled-components';

export const Card = styled.div`
  margin-bottom: 20px;
`;

export const TitleLibrary = styled.h2`
  position: relative;
  margin: 40px auto;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 20px;
  overflow: hidden;
  background: linear-gradient(
    290deg,
    rgb(81, 28, 0),
    rgb(238, 238, 238),
    rgb(255, 98, 0)
  );
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

export const LibraryImg = styled.img`
  width: 100%;
  margin: 0 auto 20px;
`;
