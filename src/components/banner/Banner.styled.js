import styled from 'styled-components';
export const PageWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary_white};
`;

export const FullScreenSlider = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  // padding: 0 ${({ theme }) => theme.size.padding};
  padding: 0;
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  // padding-top: 100px;
  ul.control-dots {
    display: flex;
    margin-left: 40px;
    margin-bottom: 40px;
    .dot {
      width: 15px;
      height: 15px;
      background: none;
      border: 1px solid #fff;
      &.selected {
        background: #fff;
      }
    }
  }

  .banner-image {
    width: 100%;
    height: 90vh;
    // height: 80vh;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #00000033;
    display: block;
  }

  @media ${({ theme }) => theme.device.mobile} {
    ul.control-dots {
      display: flex;
      margin-left: 0;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
      .dot {
        width: 10px;
        height: 10px;
        background: none;
        border: 1px solid #fff;
        margin: 0 4px;
        &.selected {
          background: #fff;
        }
      }
    }
    .banner-image {
      height: 250px;
      background-size: cover;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    ul.control-dots {
      display: flex;
      margin-left: 0;
      align-items: center;
      justify-content: center;
      margin-bottom: 25px;
      .dot {
        width: 15px;
        height: 15px;
        background: none;
        border: 1px solid #fff;
        margin: 0 4px;
        &.selected {
          background: #fff;
        }
      }
    }
    .banner-image {
      height: 500px;
      background-size: contain;
    }
  }
`;
