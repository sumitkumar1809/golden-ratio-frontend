import styled, { keyframes } from 'styled-components';
import { StyledButton } from '../../styles/Utils.styled';

export const FeatureMoviesWrapper = styled.div`
  padding: 2rem 0;
  width: 80%;
  margin: auto;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    padding: 1rem 0;
  }
`;

export const FeatureMovieCardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.tablet} {
    align-items: center;
  }
`;
export const MovieInfo = styled.div`
  padding-right: 1.5rem;
  p {
    font-family: ${({ theme }) => theme.fontPoppins};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text_white};
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding-right: 1rem;
    width: 50%;
    p {
      font-size: 0.5rem;
    }
    button {
      font-size: 0.7rem;
      margin: 0 auto;
      padding: 0.2rem 1rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding-right: 1rem;
    width: 50%;
    p {
      font-size: 0.7rem;
    }
    button {
      font-size: 0.7rem;
      margin: 0 auto;
    }
  }
`;
export const TitleInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  & > div {
    color: ${({ theme }) => theme.colors.text_white};
    h1 {
      font-family: ${({ theme }) => theme.font};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: 2.4375rem;
      margin: 0;
    }
    h3 {
      font-family: ${({ theme }) => theme.fontPoppins};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: 1.6875rem;
      filter: opacity(0.52);
      margin: 0;
    }
    h2 {
      font-family: ${({ theme }) => theme.fontPoppins};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: 2rem;
      margin: 0;
    }
    svg {
      color: ${({ theme }) => theme.colors.primary_gold};
      font-size: 1.25rem;
    }
    &:last-child {
      text-align: right;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    & > div {
      h1 {
        font-size: 1.25rem;
      }
      h3 {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 1rem;
      }
      svg {
        font-size: 0.8rem;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    & > div {
      h1 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1rem;
      }
      h2 {
        font-size: 1.2rem;
      }
      svg {
        font-size: 1rem;
      }
    }
  }
`;
export const ImageInfo = styled.div`
  width: 50%;
  img {
    width: 600px;
    height: 100%;
  }
  span {
    display: block;
    width: 600px;
    height: 95%;
    background-repeat: no-repeat;
    background-size: contain;
    // background-color: #00000033;
    background-position: center;
  }
  @media ${({ theme }) => theme.device.mobile} {
    span {
      width: 100%;
      height: 80%;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    span {
      width: 100%;
      height: 180px;
    }
  }
`;

export const Button = styled(StyledButton)`
  margin: 25px 0;
  width: 100%;
  color: #000;
`;

// carousel wrapper
export const FeaturedMovieCarouselWrapper = styled.div`
  margin: 25px 0;
`;
const ThumbnailAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    100%{
        transform: translateY(-10px);
    }
`;
export const FeaturedMovieThumbnail = styled.div`
  text-align: center;
  position: relative;
  img {
    width: 90%;
    margin: auto;
  }
  div.image {
    display: block;
    width: 90%;
    margin: auto;
    height: 200px;
    background-color: #00000033;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  &:hover {
    div.image {
      transform: translateY(-10px);
      animation: ${ThumbnailAnimation} 0.5s ease-in-out;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    div.image {
      height: 75px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    div.image {
      height: 110px;
    }
  }
`;

const ArrowAnimationLeft = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-10px);
    }
`;
const ArrowAnimationRight = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(10px);
    }
`;

export const LeftArrowHolder = styled.div`
  height: 100%;
  display: flex;
  background: #000000;
  jusify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
  svg {
    color: #ffffff;
    filter: opacity(0.36);
    font-size: 2.5rem;
  }
  &:hover {
    svg {
      transform: translateX(-10px);
      animation: ${ArrowAnimationLeft} 0.5s ease-in-out;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0;
    svg {
      font-size: 1rem;
    }
    &:hover {
      svg {
        transform: translateX(-3px);
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0;
    svg {
      font-size: 2rem;
    }
    &:hover {
      svg {
        transform: translateX(-3px);
      }
    }
  }
`;
export const RightArrowHolder = styled(LeftArrowHolder)`
  &:hover {
    svg {
      transform: translateX(10px);
      animation: ${ArrowAnimationRight} 0.5s ease-in-out;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0;
    svg {
      font-size: 1rem;
    }
    &:hover {
      svg {
        transform: translateX(3px);
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0;
    svg {
      font-size: 2rem;
    }
    &:hover {
      svg {
        transform: translateX(3px);
      }
    }
  }
`;
