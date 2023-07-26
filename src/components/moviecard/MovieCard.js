import React from 'react';
import {
  BelowContent,
  ContentOverlay,
  MovieCardWrapper,
} from './MovieCard.styled';
import { BsPlayCircle } from 'react-icons/bs';

const MovieCard = ({
  thumbnail,
  title,
  releaseYear,
  content,
  genre,
  language,
  id,
}) => {
  return (
    <MovieCardWrapper>
      {/* <img src={thumbnail} alt='' /> */}
      <span
        className='image'
        style={{ backgroundImage: `url(${thumbnail})` }}></span>
      <ContentOverlay>
        <div>
          {title.length > 13 ? (
            <p className='small'>{title}</p>
          ) : (
            <p>{title}</p>
          )}
          <hr />
          <span>{content}</span>
          <button onClick={() => (window.location.href = `/movie/${id}`)}>
            More Details
          </button>
        </div>
      </ContentOverlay>
      <BelowContent>
        <div>
          <h3>{title.length > 13 ? `${title.substring(0, 13)}...` : title}</h3>
          <h3>{language}</h3>
        </div>
        <div>
          <h2>{genre}</h2>
          <span onClick={() => (window.location.href = `/movie/${id}`)}>
            View Details <BsPlayCircle />
          </span>
        </div>
      </BelowContent>
    </MovieCardWrapper>
  );
};

export default MovieCard;
