import React from 'react';
import { NewsCardWrapper } from './TopNewsCard.styled';

const TopNewsCard = ({ image, id, content }) => {
  return (
    <NewsCardWrapper>
      <img src={image} alt={content} />
      <p>{content}</p>
    </NewsCardWrapper>
  );
};

export default TopNewsCard;
