import styled, { keyframes } from 'styled-components';
import Background from './background.png';

export const SlideUp = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-5%);
    }
`;
export const fadeIn = keyframes`
    0% {
       opacity:0;
       transform:scale(-0.8);
    }
    100% {
       opacity:1;
       transform:scale(1);

    }
`;

export const NewsCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  width: 350px;
  button {
    display: block;
    margin: 15px 0;
    padding: 10px 20px;
    border: none;
    background: ${({ theme }) => theme.colors.primary_gold};
    color: ${({ theme }) => theme.colors.black};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    width: 75%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.colors.primary_gold};
    background: linear-gradient(
        to left,
        ${({ theme }) => theme.colors.primary_gold} 50%,
        ${({ theme }) => theme.colors.white} 50%
      )
      right;
    background-size: 200%;
    transition: 0.5s ease-out;
    &:hover {
      background-position: left;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 48%;
    button {
      margin: 5px 0;
      font-size: 0.8rem;
      padding: 10px 0;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 32%;
    margin: 0 0;
    button {
      margin: 5px 0;
      font-size: 0.8rem;
      padding: 10px 0;
    }
  }
`;

export const NewsCardContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    position: relative;
  }
  span.image {
    width: 100%;
    position: relative;
    height: 250px;
    background-color: #00000033;
    background-position: center;
    background-size: cover;
    display: block;
  }
  div {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 5px 15px;
    background: url(${Background}) no-repeat;
    background-size: cover;
    box-shadow: inset 0px -30px 30px #000;
    p {
      color: white;
      font-size: 1rem;
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
  }
  &:hover {
    animation: ${SlideUp} 0.5s ease-in-out;
    transform: translateY(-5%);
  }

  @media ${({ theme }) => theme.device.mobile} {
    span.image {
      height: 150px;
    }
    div {
      position: relative;
      box-shadow: none;
      background: none;
      padding: 5px 0;
      p {
        font-size: 0.7rem;
        margin: 0;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    span.image {
      height: 125px;
    }
    div {
      position: relative;
      box-shadow: none;
      background: none;
      padding: 5px 0;
      p {
        font-size: 0.7rem;
        margin: 0;
      }
    }
  }
`;

export const FullNewsCardWrapper = styled(NewsCardWrapper)`
  width: 100%;
  padding: 15px;
  cursor: pointer;

  button {
    width: 100%;
  }
  & > span {
    display: block;
    width: 100%;
    height: 250px;
    background-color: #00000033;
    background-size: cover;
    background-position: center;
    span {
      background: #00000040;
      display: none;
      width: 100%;
      height: 100%;
      margin-top: -32px;
      h3 {
        color: white;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
    }
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    jusify-content: space-between;
    p {
      width: 70%;
      margin: 0;
      font-size: 1.125rem;
      font-weight: ${({ theme }) => theme.fontWeight.light};
      color: #fff;
    }
    div {
      text-align: left;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-content: flex-end;
      width: 30%;
      flex-direction: column;
      p {
        text-align: right;
        font-size: 12px;
        font-weight: ${({ theme }) => theme.fontWeight.light};
        font-family: ${({ theme }) => theme.font};
        color: rgba(255, 255, 255, 0.46);
        margin: 2px 0;
        &:last-child {
          font-size: 14px;
        }
      }
    }
  }

  &:hover {
    & > span {
      // make the overlay
      span {
        display: flex;
        animation: ${fadeIn} 0.5s ease-in-out;
        opacity: 1;
        margin-top: 0;
        background: #00000080;
        align-items: center;
        justify-content: center;
      }
    }
    & > div {
      p {
        color: ${({ theme }) => theme.colors.primary_gold};
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 5px;
    span {
      height: 100px;
    }
    & > div {
      p {
        font-size: 0.5rem;
      }
      div {
        p {
          font-size: 0.4rem;
          &:last-child {
            font-size: 0.4rem;
          }
        }
      }
    }
    button {
      font-size: 0.6rem;
      padding: 2px 0;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 5px;
    span {
      height: 125px;
    }
    & > div {
      p {
        font-size: 0.7rem;
      }
      div {
        p {
          font-size: 0.6rem;
          &:last-child {
            font-size: 0.5rem;
          }
        }
      }
    }
    button {
      font-size: 0.8rem;
    }
  }
`;
