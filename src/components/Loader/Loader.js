import { LoaderWrapper } from './Loader.styled';
import { Player } from '@lottiefiles/react-lottie-player';
import loaderJson from './preloader.json';
const Loader = () => {
  return (
    <LoaderWrapper>
      <Player
        autoplay
        loop
        src={loaderJson}
        style={{ height: '300px', width: '300px' }}></Player>
    </LoaderWrapper>
  );
};

export default Loader;
