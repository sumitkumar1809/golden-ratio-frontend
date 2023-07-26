import styled from 'styled-components';

export const TrailerSection = styled.div`
  display: flex;
  position: relative;
  width: ${({ theme }) => theme.size.percentage};
  padding: 0;
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;

  span {
    // margin-top: 100px;
    display: block;
    min-height: 90vh;
    background-size: cover;
    background-position: center;
    background-color: #00000033;
    height: 100%;
    width: 100%;
  }
  img {
    position: absolute;
    bottom: 0;
    height: 200px;
    width: 100%;

    // &:last-child {
    // }
  }
  div {
    position: absolute;
    background: #00000033;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 10rem;
      color: rgba(0, 0, 0, 0.8);
      background: rgba(255, 255, 255, 0.75);
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    span {
      min-height: 250px;
      margin-top: 0px;
    }
    img {
      width: 100%;
      height: auto;
    }
    div {
      svg {
        font-size: 4rem;
        padding: 7px;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    span {
      min-height: 450px;
      margin-top: 0px;
    }
    img {
      width: 100%;
      height: auto;
    }
    div {
      svg {
        font-size: 5rem;
        padding: 7px;
      }
    }
  }
`;
