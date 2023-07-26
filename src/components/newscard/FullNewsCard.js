import { useNavigate } from 'react-router-dom';
import { FullNewsCardWrapper } from './NewsCard.styled';

const FullNewsCard = ({ id, image, content, category, releaseDate, path }) => {
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
    <FullNewsCardWrapper onClick={() => handleClick(path)}>
      <span
        style={{
          backgroundImage: `url(${image})`,
        }}>
        <span className='overlay'>
          <h3>Read News</h3>
        </span>
      </span>
      <div>
        <p>
          {content.length > 90 ? `${content.substring(0, 90)}...` : content}
        </p>
        <div>
          <p>{category}</p>
          {/* <p>{releaseDate}</p> */}
        </div>
      </div>
      {/* <button onClick={() => handleClick(path)}>Read the Full News</button> */}
    </FullNewsCardWrapper>
  );
};

export default FullNewsCard;
