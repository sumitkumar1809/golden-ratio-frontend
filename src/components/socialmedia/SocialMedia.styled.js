import styled from 'styled-components';
import {
  RightArrowHolder as StyledRightArrowHolder,
  LeftArrowHolder as StyledLeftArrowHolder,
} from '../featuremovies/FeatureMovies.styled';

export const SocialMediaWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 0 ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};

  margin: auto;
  padding-bottom: 75px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    margin-bottom: 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0;
  }
`;

export const SocialHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 25px 0;
  h2 {
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      margin-left: 10px;
      background: ${({ theme }) => theme.colors.primary_gold};
      color: #000;
      font-size: 2rem;
      padding: 0.3rem;
      border-radius: 50%;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin: 0;
    h2 {
      font-size: 1rem;
    }
    span {
      font-size: 0.8rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0;
    h2 {
      font-size: 1.5rem;
    }
    span {
      font-size: 1rem;
      svg {
        font-size: 2rem;
      }
    }
  }
`;

export const SocialCarouselWrapper = styled.div`
  margin-bottom: 25px;
`;

export const RightArrowHolder = styled(StyledRightArrowHolder)`
  padding: 0;
  // @media ${({ theme }) => theme.device.mobile} {
  //   display: none;
  // }
  svg {
    color: ${({ theme }) => theme.colors.primary_gold};
    filter: opacity(1);
    font-size: 1.2rem;
  }
`;
export const LeftArrowHolder = styled(StyledLeftArrowHolder)`
  padding: 0;
  // @media ${({ theme }) => theme.device.mobile} {
  //   display: none;
  // }
  svg {
    color: ${({ theme }) => theme.colors.primary_gold};
    filter: opacity(1);
    font-size: 1.2rem;
  }
`;
export const SocialImage = styled.div`
  width: 95%;
  margin: auto;
  img {
    width: 95%;
    margin: auto;
  }
  div.image {
    display: block;
    width: 95%;
    margin: auto;
    background-color: #00000033;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 225px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    div.image {
      width: 100%;
      height: 300px;
      margin-top: 20px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    div.image {
      width: 100%;
      height: 125px;
    }
  }
`;
