import styled, { keyframes } from 'styled-components';

const SlideInAnimation = keyframes`
    0% {
        transform: translateY(-10%);
        opacity:0
    }
    100% {
        transform: translateY(0);
        opacity:1;
    }
`;

export const ContentOverlay = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 350px;
  overflow: hidden;
  opacity: 0;

  top: 0;
  padding: 15px 20px;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  //   adding as overlay before

  p {
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
  }
  hr {
    width: 80%;
    margin: 25px auto;
  }
  span {
    display: block;
    font-size: 0.9rem;
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }

  button {
    display: block;
    margin: 15px auto;
    margin-top: 25px;
    padding: 10px 20px;
    border: none;
    border: 1px solid ${({ theme }) => theme.colors.primary_gold};
    background: none;
    color: ${({ theme }) => theme.colors.primary_gold};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: ${({ theme }) => theme.colors.primary_gold};
      color: ${({ theme }) => theme.colors.primary_white};
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 200px;
    padding: 5px 10px;
    p {
      font-size: 0.9rem;
      &.small {
        font-size: 0.8rem;
      }
    }
    hr {
      margin: 5px auto;
    }
    span {
      font-size: 0.7rem;
    }
    button {
      margin-top: 15px;
      padding: 0.2rem 0.7rem;
      font-size: 0.6rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 200px;
    padding: 5px 10px;
    p {
      font-size: 0.9rem;
      &.small {
        font-size: 0.7rem;
      }
    }
    hr {
      margin: 5px auto;
    }
    span {
      font-size: 0.7rem;
    }
    button {
      margin-top: 15px;
      padding: 0.2rem 0.7rem;
      font-size: 0.6rem;
    }
  }
`;
export const MovieCardWrapper = styled.div`
  width: 250px;
  position: relative;
  cursor: pointer;
  margin-bottom: 30px;
  img {
    width: 100%;
    margin: auto;
  }
  span.image {
    width: 100%;
    margin: auto;
    display: block;
    height: 350px;
    background-color: #00000033;
    background-position: center;
    //need to change this contain to cover if you want to make it full size
    background-size: 100%;
    background-repeat: no-repeat;
  }
  &:hover {
    & > ${ContentOverlay} {
      opacity: 1;
      display: block;
      animation: ${SlideInAnimation} 0.5s ease-in-out;
      // backdrop-filter: blur(20px);
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 150px;
    span.image {
      height: 200px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 140px;
    span.image {
      height: 200px;
    }
  }
`;

export const BelowContent = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-family: ${({ theme }) => theme.fontPoppins};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: 1.25rem;
      margin: 10px 0;
    }
    h2 {
      font-family: ${({ theme }) => theme.fontPoppins};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: 0.8rem;
      border-left: 1px solid ${({ theme }) => theme.colors.primary_gold};
      padding-left: 5px;
      color: rgba(237, 237, 237, 0.5);
      margin: 0;
    }
    span {
      font-family: ${({ theme }) => theme.fontPoppins};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: 0.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.primary_gold};
      svg {
        margin-left: 5px;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    div {
      h3 {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 0.5rem;
      }
      svg {
        font-size: 0.5rem;
      }
      span {
        font-size: 0.5rem;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    div {
      h3 {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 0.5rem;
      }
      svg {
        font-size: 0.5rem;
      }
      span {
        font-size: 0.5rem;
      }
    }
  }
`;
