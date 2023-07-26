import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import { ContainerCustom } from '../../styles/Utils.styled';
import MovieCard from '../moviecard/MovieCard';
import SectionTitle from '../utils/SectionTitle';
import {
  MovieListWrapper,
  UpcomingCarouselWrapper,
  UpcomingPoster,
  UpcomingReleaseWrapper,
} from './UpcomingReleases.styled';

const UpcomingReleases = ({ sectiontitle, trailer, upcomingReleases, url }) => {
  const handleClick = (path) => {
    window.open(path, '_blank');
  };

  return (
    <ContainerCustom>
      <UpcomingReleaseWrapper>
        <SectionTitle
          title={sectiontitle ? sectiontitle : 'Upcoming Releases'}
          url={url}
        />
        {trailer && (
          <UpcomingCarouselWrapper>
            <Carousel
              showStatus={false}
              showThumbs={false}
              emulateTouch={true}
              infiniteLoop={true}
              autoPlay={true}
              showIndicators={false}
              swipeable={true}>
              {upcomingReleases.map(({ movie }) => (
                <UpcomingPoster key={movie?._id}>
                  <img src={movie.banner} alt='' />
                  <div>
                    <BsPlayCircle onClick={() => handleClick(movie.trailer)} />
                  </div>
                </UpcomingPoster>
              ))}
            </Carousel>
          </UpcomingCarouselWrapper>
        )}

        <MovieListWrapper>
          {upcomingReleases.map(({ movie }) => (
            <MovieCard
              key={movie._id}
              id={movie._id}
              thumbnail={movie.image}
              title={movie.title}
              content={
                movie.synopsis.length > 130
                  ? movie.synopsis.substring(0, 130)
                  : movie.synopsis
              }
              language={movie.production[movie.production.length - 1]?.language}
              genre={movie.genre}
              releaseYear={new Date(
                movie.production[movie.production.length - 1]?.release_date
              ).getFullYear()}
            />
          ))}
        </MovieListWrapper>
      </UpcomingReleaseWrapper>
    </ContainerCustom>
  );
};

export default UpcomingReleases;
