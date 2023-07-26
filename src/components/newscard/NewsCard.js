import { useNavigate } from 'react-router-dom';
import { NewsCardContainer, NewsCardWrapper } from './NewsCard.styled';

const NewsCard = ({ thumbnail, content, id, path }) => {
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
    <NewsCardWrapper>
      <NewsCardContainer>
        {/* <img src={thumbnail} alt='News Thumbnail' /> */}
        <span
          className='image'
          style={{ backgroundImage: `url(${thumbnail})` }}></span>
        <div>
          <p>{content}</p>
        </div>
      </NewsCardContainer>
      <button onClick={() => handleClick(path)}>Read the Full News</button>
    </NewsCardWrapper>
  );
};

export default NewsCard;
