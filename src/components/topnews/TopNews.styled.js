import styled from 'styled-components';
import { RightArrowHolder as StyledRightArrowHolder } from '../featuremovies/FeatureMovies.styled';

export const TopNewsWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    padding: 1rem 0;
  }
`;
export const TitleWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontPoppins};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 20%;
  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary_white};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    margin: 0;
    span {
      display: block;
      font-size: 4.375rem;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 15%;
    h3 {
      font-size: 1rem;
      span {
        font-size: 1.25rem;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    h3 {
      font-size: 1.5rem;
      span {
        font-size: 2rem;
      }
    }
  }
`;
export const NewsWrapper = styled.div`
  display: block;
  width: 80%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 85%;
  }
`;
export const RightArrowHolder = styled(StyledRightArrowHolder)`
  margin-top: 0;
  height: 97%;
  @media ${({ theme }) => theme.device.tablet} {
    height: 95%;
  }
`;
