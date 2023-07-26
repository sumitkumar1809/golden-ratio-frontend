import { useNavigate } from 'react-router-dom';
import { NewsCardWrapper } from './TopNewsCard.styled';

const TopNewsCard = ({ image, id, content, path }) => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    if (
      path.match(
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
      )
    ) {
      window.open(path, '_blank');
    } else {
      navigate(`/news/${id}`);
    }
  };
  return (
    <NewsCardWrapper onClick={() => handleClick(path)}>
      {/* <img src={image} alt='Top News' /> */}
      <span
        className='image'
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}></span>
      <p>{content.length > 50 ? `${content.substring(0, 50)}...` : content}</p>
    </NewsCardWrapper>
  );
};

export default TopNewsCard;
