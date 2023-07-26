import styled from 'styled-components';

export const UpcomingReleaseWrapper = styled.div`
  padding: 2rem 0;
  width: ${({ theme }) => theme.size.percentage};
  padding: 0 ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    padding: 1rem 0;
  }
`;

export const UpcomingCarouselWrapper = styled.div`
  .carousel.carousel-slider .control-arrow {
    padding: 25px;
    background: black;
    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 30px solid #fff;
  }
  .carousel .control-next.control-arrow:before {
    border-left: 30px solid #fff;
  }
  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
  }
  @media ${({ theme }) => theme.device.mobile} {
    .carousel.carousel-slider .control-arrow {
      padding: 0 10px;
    }
    .carousel .control-prev.control-arrow:before {
      border-right: 10px solid #fff;
    }
    .carousel .control-next.control-arrow:before {
      border-left: 10px solid #fff;
    }
    .carousel .control-arrow:before,
    .carousel.carousel-slider .control-arrow:before {
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    .carousel.carousel-slider .control-arrow {
      padding: 0 15px;
    }
    .carousel .control-prev.control-arrow:before {
      border-right: 15px solid #fff;
    }
    .carousel .control-next.control-arrow:before {
      border-left: 15px solid #fff;
    }
    .carousel .control-arrow:before,
    .carousel.carousel-slider .control-arrow:before {
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
    }
  }
`;
export const UpcomingPoster = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  z-index: 999999;
  div {
    position: absolute;
    background: #00000033;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 7rem;
      color: rgba(0, 0, 0, 0.8);
      background: rgba(255, 255, 255, 0.75);
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 200px;
    div {
      svg {
        font-size: 2rem;
        padding: 5px;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 300px;
    div {
      svg {
        font-size: 4rem;
        padding: 5px;
      }
    }
  }
`;

export const MovieListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 25px;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: space-around;
    & > div {
      &:nth-child(3),
      &:nth-child(4) {
        display: none;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    justify-content: space-around;
    // & > div {
    //   &:nth-child(3),
    //   &:nth-child(4) {
    //     display: none;
    //   }
    // }
  }

  // & > div {
  //   margin-right: 2.3rem;
  //   &:nth-child(4) {
  //     margin-right: 0;
  //   }
  // }
`;
