import { ContainerCustom } from '../../styles/Utils.styled';
import {
  TeamCarouselWrapper,
  TeamComponentWrapper,
  TeamTitle,
  RightArrowHolder,
} from './TeamComponent.styled';
import { Carousel } from '@trendyol-js/react-carousel';

import { AiFillCaretRight } from 'react-icons/ai';
import TeamCard from './TeamCard';
import { useEffect, useState } from 'react';
import { TeamCardContainer } from './TeamCard.styled';

const TeamComponent = ({
  title,
  subtitle,
  teams,
  isMobile,
  handleOpenModel,
}) => {
  const [showCount, setShowCount] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setShowCount(1);
    }
    setIsLoaded(true);
  }, []);

  const handleClick = (id) => {
    handleOpenModel(id);
  };

  return (
    <ContainerCustom>
      <TeamComponentWrapper>
        <TeamTitle>
          <h3>
            <span>{title}</span> {subtitle}
          </h3>
        </TeamTitle>
        <TeamCarouselWrapper>
          {isLoaded && (
            // <Carousel
            //   responsive={true}
            //   useArrowKeys={true}
            //   rightArrow={
            //     <RightArrowHolder>
            //       <AiFillCaretRight />
            //     </RightArrowHolder>
            //   }
            //   leftArrow={<></>}
            //   show={showCount}
            //   slide={2}
            //   transition={0.5}
            //   swiping={true}>
            <TeamCardContainer>
              {teams.map((item) => (
                <TeamCard
                  key={item.id}
                  name={item.name}
                  designation={item.designation}
                  avatar={item.image}
                  content={item.content}
                  linkedin={item.linkedin}
                  handleClick={handleClick}
                  id={item._id}
                />
              ))}
            </TeamCardContainer>
            // </Carousel>
          )}
        </TeamCarouselWrapper>
      </TeamComponentWrapper>
    </ContainerCustom>
  );
};

export default TeamComponent;
