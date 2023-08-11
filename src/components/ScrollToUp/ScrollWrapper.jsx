import { SvgWrapper } from './SvgWrapper.styled';

const ScrollWrapper = ({ children }) => {
  return (
    <>
      <SvgWrapper>{children}</SvgWrapper>
    </>
  );
};

export default ScrollWrapper;
