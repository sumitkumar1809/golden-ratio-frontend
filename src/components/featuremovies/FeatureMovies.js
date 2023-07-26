import React, { useEffect, useState } from 'react';
import {
  FeatureMovieCardDetail,
  FeatureMoviesWrapper,
  ImageInfo,
  MovieInfo,
  TitleInformation,
  Button,
  FeaturedMovieCarouselWrapper,
  FeaturedMovieThumbnail,
  RightArrowHolder,
  LeftArrowHolder,
} from './FeatureMovies.styled';
import { ContainerCustom } from '../../styles/Utils.styled';
import SectionTitle from '../utils/SectionTitle';
import { BsPlayCircle } from 'react-icons/bs';
import { Carousel } from '@trendyol-js/react-carousel';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const FeatureMovies = ({ featuredMovies }) => {
  const [currentMovie, setCurrentMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(featuredMovies);
    setCurrentMovie(featuredMovies[0].movie);
  }, [featuredMovies]);

  const handleClick = (id) => {
    // filter the data by id
    const movie = featuredMovies.filter((item) => item._id === id);
    setCurrentMovie(movie[0].movie);
  };
  const openMovie = (id) => {
    navigate(`/movie/${id}`);
  };
  const openTrailer = (path) => {
    window.open(path, '_blank');
  };
  return (
    <ContainerCustom>
      <FeatureMoviesWrapper>
        <SectionTitle title='Featured Movies / Shows' url='/movies/featured' />
        <FeatureMovieCardDetail>
          <MovieInfo>
            <TitleInformation>
              <div>
                <h1>{currentMovie?.title}</h1>
                <h3>{currentMovie?.genre}</h3>
              </div>
              <div>
                {currentMovie?.production && (
                  <h2>
                    {new Date(
                      currentMovie?.production[
                        currentMovie?.production?.length - 1
                      ]?.release_date
                    ).getFullYear()}
                  </h2>
                )}

                <BsPlayCircle
                  onClick={() => openTrailer(currentMovie?.trailer)}
                />
              </div>
            </TitleInformation>
            {currentMovie?.synopsis && (
              <p>
                {currentMovie?.synopsis?.length > 400
                  ? currentMovie?.synopsis?.substring(0, 400)
                  : currentMovie?.synopsis}
              </p>
            )}

            <Button
              varient='white'
              onClick={() => openMovie(currentMovie?._id)}>
              View Full Details
            </Button>
          </MovieInfo>
          <ImageInfo>
            {/* <img src={currentMovie?.banner} alt='Banner' /> */}
            <span
              style={{
                backgroundImage: `url(${currentMovie?.banner})`,
              }}></span>
          </ImageInfo>
        </FeatureMovieCardDetail>

        <FeaturedMovieCarouselWrapper>
          <Carousel
            responsive={true}
            useArrowKeys={true}
            rightArrow={
              <RightArrowHolder>
                <AiFillCaretRight />
              </RightArrowHolder>
            }
            leftArrow={
              <LeftArrowHolder>
                <AiFillCaretLeft />
              </LeftArrowHolder>
            }
            show={3}
            slide={2}
            transition={0.5}
            swiping={true}>
            {featuredMovies.map(({ movie, _id }) => (
              <FeaturedMovieThumbnail
                key={movie._id}
                onClick={() => handleClick(_id)}>
                <div
                  className='image'
                  style={{
                    backgroundImage: `url(${movie?.banner})`,
                  }}></div>
                {/* <img src={movie?.banner} alt='Banner' /> */}
              </FeaturedMovieThumbnail>
            ))}
          </Carousel>
        </FeaturedMovieCarouselWrapper>
      </FeatureMoviesWrapper>
    </ContainerCustom>
  );
};

export default FeatureMovies;
