import { BsLinkedin } from 'react-icons/bs';
import {
  BelowContent,
  ContentOverlay,
  TeamCardWrapper,
} from './TeamCard.styled';

const TeamCard = ({
  avatar,
  name,
  designation,
  content,
  linkedin,
  handleClick,
  id,
}) => {
  var mainContent = content;

  return (
    <TeamCardWrapper>
      {/* <img src={avatar} alt='' /> */}
      <div
        className='image'
        style={{ backgroundImage: `url(${avatar})` }}></div>
      <ContentOverlay onClick={() => handleClick(id)}>
        <div>
          <p>
            {content.length > 200 ? `${content.substring(0, 200)}...` : content}
          </p>
          <button onClick={() => handleClick(id)}>View More Details</button>
        </div>
      </ContentOverlay>
      <BelowContent>
        <div>
          <h3>{name}</h3>
          <p>{designation}</p>
        </div>
        <div>
          {linkedin && linkedin != undefined && linkedin != 'undefined' && (
            <span onClick={() => window.open(linkedin, '_blank')}>
              Linkedin
              <BsLinkedin />
            </span>
          )}
        </div>
      </BelowContent>
    </TeamCardWrapper>
  );
};

export default TeamCard;
