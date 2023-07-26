import styled from 'styled-components';

export const PageBannerWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  text-align: center;
  // padding-top: 150px;
  img,
  video {
    width: 100%;
    margin: auto;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    padding: 1rem 0;
    img,
    video {
      width: 90%;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
    padding: 1rem 0;
    img,
    video {
      width: 90%;
    }
  }
`;

export const PageTitle = styled.div`
  text-align: center;
  position: relative;
  h1 {
    font-family: ${({ theme }) => theme.fontPoppins};
    font-size: 3.5rem;
    text-transform: uppercase;
    margin: 0;
    // letter-spacing: unset;
    // color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.primary_gold};
    span {
      color: ${({ theme }) => theme.colors.primary_white};
    }
    ${({ type }) => type === 'SMALL' && `font-size: 3.5rem; `}
  }

  @media ${({ theme }) => theme.device.mobile} {
    h1 {
      font-size: 1.5rem;
      letter-spacing: 10px;
      ${({ type }) =>
        type === 'SMALL' && `font-size: 2rem; letter-spacing:8px;`}
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    h1 {
      font-size: 5rem;
      letter-spacing: 10px;
      ${({ type }) =>
        type === 'SMALL' && `font-size: 5rem; letter-spacing:8px;`}
    }
  }
`;
export const SubTitle = styled.div`
  position: absolute;
  top: -15%;
  left: 0;
  right: 0;
  display: none;
  h3 {
    font-family: ${({ theme }) => theme.fontPoppins};
    font-size: 3.125rem;
    font-weight: ${({ theme }) => theme.fontWeight.extraLight};
    span {
      color: ${({ theme }) => theme.colors.primary_gold};
      margin: 0 10px;
      font-size: 5.75rem;
      font-family: ${({ theme }) => theme.fontFD};
      &.white {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    h3 {
      font-size: 1.25rem;
      span {
        font-size: 2rem;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    h3 {
      font-size: 2rem;
      span {
        font-size: 2.5rem;
      }
    }
  }
`;
