import styled from 'styled-components';

export const NewsCardWrapper = styled.div`
  width: 95%;
  height: auto;
  margin: auto;
  text-align: center;
  position: relative;
  img {
    width: 90%;
    margin: auto;
    height: 325px;
    background: black;
    border: 2px solid ${({ theme }) => theme.colors.primary_gold};
    border-bottom: 7px solid ${({ theme }) => theme.colors.primary_gold};
  }
  .image {
    display: inline-block;
    width: 90%;
    margin: auto;
    height: 300px;
    background: #00000033;
    border: 2px solid ${({ theme }) => theme.colors.primary_gold};
    border-bottom: 7px solid ${({ theme }) => theme.colors.primary_gold};
    z-index: 9999;
  }
  p {
    margin-top: -50px;
    background: black;
    padding: 60px 15px 15px 15px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
  @media ${({ theme }) => theme.device.mobile} {
    .image {
      height: 115px;
      background-size: 100%;
      width: 95%;
      boder: 1px solid ${({ theme }) => theme.colors.primary_gold};
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary_gold};
    }
    p {
      min-height: 90px;
      margin-top: -30px;
      font-size: 0.5rem;
      padding: 30px 2px 2px 7px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    .image {
      height: 170px;
      background-size: 100%;
      width: 95%;
      boder: 1px solid ${({ theme }) => theme.colors.primary_gold};
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary_gold};
    }
    p {
      min-height: 90px;
      margin-top: -30px;
      font-size: 0.7rem;
      padding: 30px 2px 2px 7px;
    }
  }
`;
