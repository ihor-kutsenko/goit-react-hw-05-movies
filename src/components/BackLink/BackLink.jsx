import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.Styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" /> Go to back
      {children}
    </StyledLink>
  );
};

export default BackLink;
