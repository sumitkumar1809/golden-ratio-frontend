import styled from 'styled-components';

export const LocationSectionWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 1rem 0;
    width: 90%;
  }
`;

export const TitleSection = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary_gold};
  h2 {
    font-size: 30px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.primary_gold};
    margin: 15px 0;
  }
  @media ${({ theme }) => theme.device.mobile} {
    h2 {
      font-size: 1.25rem;
      margin: 5px 0;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    h2 {
      font-size: 1.5rem;
      margin: 5px 0;
    }
  }
`;
export const LocationHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 25px 0;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 10px 0;
  }
`;
export const Locations = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 25px 0;
  width: 50%;
  img {
    width: 50px;
    margin-right: 15px;
    margin-top: 15px;
  }
  h3 {
    font-size: 1.8125rem;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-family: ${({ theme }) => theme.fontPoppins};
    margin: 15px 0;
    color: ${({ theme }) => theme.colors.primary_gold};
  }
  p,
  a {
    font-size: 1.125rem;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: #ededed;
    margin: 5px 0;
    text-decoration: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin: 15px 0;
    img {
      width: 25px;
      margin-right: 5px;
      margin-top: 5px;
    }
    h3 {
      font-size: 1.15rem;
      margin: 5px 0;
    }
    p {
      font-size: 0.8rem;
      margin: 3px 0;
      a {
        font-size: 0.8rem;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin: 15px 0;
    img {
      width: 40px;
      margin-right: 5px;
      margin-top: 15px;
    }
    h3 {
      font-size: 1.25rem;
      margin: 5px 0;
    }
    p {
      font-size: 1rem;
      margin: 3px 0;
    }
  }
`;

export const MapHolder = styled.div`
  width: 100%;
  iframe {
    width: 100%;
    border: none;
    height: 400px;
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    iframe {
      height: 200px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    iframe {
      height: 300px;
    }
  }
`;
