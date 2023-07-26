import styled, { keyframes } from 'styled-components';
import {
  ContentOverlay as StyledContentOverlay,
  BelowContent as StyledBelowContent,
} from '../moviecard/MovieCard.styled';

const SlideInAnimation = keyframes`
    0% {
        transform: translateX(-20%);
        opacity:0
    }
    100% {
        transform: translateX(0);
        opacity:1;
    }
`;

export const ContentOverlay = styled(StyledContentOverlay)`
  text-align: left;
  p {
    font-size: 1.2rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    p {
      font-size: 0.9rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    p {
      font-size: 1rem;
    }
  }
`;
export const TeamCardWrapper = styled.div`
  width: 280px;
  position: relative;
  margin: 25px 10px;
  img {
    width: 100%;
  }
  div.image {
    width: 100%;
    height: 350px;
    background-color: #00000033;
    background-position: center;
    background-size: cover;
    display: block;
  }
  &:hover {
    & > ${ContentOverlay} {
      height: 350px;
      opacity: 1;
      display: block;
      animation: ${SlideInAnimation} 0.5s ease-in-out;
      backdrop-filter: blur(20px);
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 80%;
    margin: 15px auto;
    div.image {
      height: 300px;
    }
    &:hover {
      & > ${ContentOverlay} {
        height: 300px;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
    margin: auto;
    div.image {
      height: 200px;
    }
    &:hover {
      & > ${ContentOverlay} {
        height: 200px;
      }
    }
  }
`;
export const TeamCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const BelowContent = styled(StyledBelowContent)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  & > div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    &:nth-child(1) {
      width: 70%;
    }
    h3 {
      margin: 5px 0;
      font-family: ${({ theme }) => theme.font};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      font-size: 1.15rem;
    }
    p {
      margin: 5px 0;
      font-family: ${({ theme }) => theme.font};
      font-weight: ${({ theme }) => theme.fontWeight.light};
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.primary_gold};
    }
    &:last-child {
      align-items: flex-end;
      span {
        margin-top: 5px;
        color: ${({ theme }) => theme.colors.primary_white};
        font-size: 0.8rem;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    & > div {
      h3 {
        font-size: 1rem;
        margin: 5px 0;
      }
      p {
        font-size: 0.7rem;
        margin: 0 0;
      }
      &:last-child {
        span {
          margin-top: 5px;
          font-size: 0.7rem;
        }
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    & > div {
      h3 {
        font-size: 1rem;
        margin: 5px 0;
      }
      p {
        font-size: 0.6rem;
        margin: 0 0;
      }
      &:last-child {
        span {
          margin-top: 5px;
          font-size: 0.7rem;
        }
      }
    }
  }
`;
