import styled from 'styled-components';

export const MovieInfoWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  display: flex;
  justify-content: space-between;
  & > div {
    img {
      width: 85%;
      border: 2px solid #fff;
    }
    span.thumbnail {
      width: 300px;
      height: 450px;
      display: block;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #000000;
      border: 2px solid #fff;
    }
    &:nth-child(1) {
      width: 30%;
    }
    &:nth-child(2) {
      width: 70%;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 1rem 0;
    width: 90%;
    & > div {
      span.thumbnail {
        width: 90px;
        height: 130px;
        border: 1px solid #fff;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    & > div {
      span.thumbnail {
        width: 150px;
        height: 250px;
        border: 1px solid #fff;
      }
    }
  }
`;
export const MovieDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MovieTitle = styled.div`
  * {
    font-family: ${({ theme }) => theme.font};
    font-weight: ${({ theme }) => theme.fontWeight.extraLight};
    color: #e5e5e5;
    margin: 10px 0;
  }
  h1 {
    font-size: 3.5rem;
    margin-bottom: 15px;
  }
  p {
    font-size: 1.5rem;
  }
  h3 {
    margin: 15px 0;
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    h1 {
      font-size: 1.25rem;
      margin-bottom: 5px;
    }
    p {
      font-size: 1rem;
    }
    h3 {
      font-size: 1rem;
      margin: 0;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    h1 {
      font-size: 2rem;
      margin-bottom: 5px;
    }
    p {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1.2rem;
      margin: 0;
    }
  }
`;
export const MovieRating = styled.div`
  & > div {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      border: none;
      border-radius: 10px;
      margin-right: 15px;
    }
    div {
      h3 {
        font-size: 29px;
        margin: 0;
        font-family: ${({ theme }) => theme.fontPoppins};
        font-weight: ${({ theme }) => theme.fontWeight.light};
        color: #fff;
      }
      p {
        text-align: center;
        font-size: 1rem;
        margin: 0;
        font-family: ${({ theme }) => theme.font};
        font-weight: ${({ theme }) => theme.fontWeight.extraLight};
        color: rgba(229, 229, 229, 0.5);
      }
    }
  }
`;
export const MovieDescription = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
  h3 {
    font-size: 2rem;
    font-family: ${({ theme }) => theme.font};
    font-weight: ${({ theme }) => theme.fontWeight.extraLight};
    color: ${({ theme }) => theme.colors.primary_gold};
    display: block;
    margin: 0;
  }
  p {
    width: 80%;
    font-size: 20px;
    font-family: ${({ theme }) => theme.font};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: #fff;
    margin: 0;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 5px;
    flex-direction: column;
    h3 {
      font-size: 1rem;
      margin-right: 7px;
      margin-top: 10px;
    }
    p {
      font-size: 0.7rem;
      margin-top: 10px;
      width: 100%;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    h3 {
      font-size: 1.25rem;
      margin-right: 7px;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
