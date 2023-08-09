import { CirclesWithBar } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';

const Loader = () => {
  return (
    <Backdrop>
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </Backdrop>
  );
};

export default Loader;
