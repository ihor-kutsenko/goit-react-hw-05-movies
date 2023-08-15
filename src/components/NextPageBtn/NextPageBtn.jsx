import { NextBtn } from './NextPageBtn.styled';
import { FcNext } from 'react-icons/fc';

const NextPageBtn = ({ onNextPage }) => {
  return (
    <NextBtn
      type="button"
      onClick={() => {
        onNextPage();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      Next page
      <FcNext size="24" />
    </NextBtn>
  );
};

export default NextPageBtn;
