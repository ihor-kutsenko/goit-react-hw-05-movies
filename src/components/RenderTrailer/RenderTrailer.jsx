import YouTube from 'react-youtube';
import { TrailerWrapper } from 'components/RenderTrailer/RenderTrailer.styled';

const RenderTrailer = ({ trailer }) => {
  const officialTrailer = trailer.find(
    item =>
      item.name.includes('Official Trailer') ||
      item.name.includes('Teaser') ||
      item.name.includes('Trailer')
  );

  const opts = {
    height: '700',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <TrailerWrapper id="trailer">
        <YouTube videoId={officialTrailer.key} opts={opts} />
      </TrailerWrapper>
    </>
  );
};

export default RenderTrailer;
