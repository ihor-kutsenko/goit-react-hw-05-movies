import { PreviousBtn } from './PreviousPageBtn.styled';
import { FcPrevious } from 'react-icons/fc';

const PreviousPageBtn = ({ onPreviousPage }) => {
  return (
    <PreviousBtn
      type="button"
      onClick={() => {
        onPreviousPage();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      <FcPrevious size="24" /> Previous page
    </PreviousBtn>
  );
};

export default PreviousPageBtn;
