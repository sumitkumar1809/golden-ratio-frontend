import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  border-top: 2px solid ${({ theme }) => theme.colors.primary_gold};
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    h3 {
      font-family: ${({ theme }) => theme.fontPoppins};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      font-size: 1.25rem;
      margin: 10px 0;
    }
    p {
      font-family: ${({ theme }) => theme.fontPoppins};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: 0.8rem;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    div {
      h3 {
        font-size: 1rem;
        margin-top: 10px;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
    padding-bottom: 0;
    & > div {
      width: 25%;
    }
    div {
      h3 {
        font-size: 1rem;
        margin-top: 10px;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
`;
export const FooterFull = styled.footer`
  margin: auto;
`;
export const LogoWrapper = styled.div`
  img {
    width: 200px;
    margin-top: 15px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    img {
      width: 150px;
    }
  }
`;
export const QuickLinksWrapper = styled.div`
  p {
    cursor: pointer;
  }
  & > div {
    display: flex;
    justify-content: space-evenly;

    div {
      margin-right: 20px;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    & > div {
      flex-direction: column;
      div {
        margin: 0;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    & > div {
      flex-direction: column;
      div {
        margin: 0;
      }
    }
  }
`;

export const EmailWrapper = styled.div`
  p {
    cursor: pointer;
  }
  div {
    display: flex;
    margin-top: 10px;

    svg {
      margin-right: 10px;
      background: ${({ theme }) => theme.colors.primary_gold};
      color: ${({ theme }) => theme.colors.primary_black};
      font-size: 2rem;
      padding: 5px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    div {
      justify-content: center;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    div {
      svg {
        font-size: 1.2rem;
        padding: 2px;
      }
    }
  }
`;

export const AddressWrapper = styled.div`
  address {
    p {
      font-style: normal;
      margin: 10px 0;
    }
  }
`;

export const CopyrightWrapper = styled.div`
  background: red;
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  p {
    font-family: ${({ theme }) => theme.fontPoppins};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 0.8rem;
    span {
      cursor: pointer;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    flex-direction: column;
    text-align: center;
    padding-bottom: 25px;
    p {
      font-size: 0.8rem;
      margin: 2.5px 0;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
  }
`;
