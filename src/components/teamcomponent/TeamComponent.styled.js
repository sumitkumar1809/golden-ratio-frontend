import styled from 'styled-components';
import { RightArrowHolder as StyledRightArrowHolder } from '../featuremovies/FeatureMovies.styled';

export const TeamComponentWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  // align-items: flex-start;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary_gold};
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    padding: 1rem 0;
  }
`;
export const TeamCarouselWrapper = styled.div`
  display: block;
  width: 80%;
`;
export const TeamTitle = styled.div`
  font-family: ${({ theme }) => theme.fontPoppins};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 20%;
  h3 {
    font-size: 3rem;
    text-transform: uppercase;
    margin-top: 220px;
    transform: rotate(-90deg);
    span {
      color: ${({ theme }) => theme.colors.primary_gold};
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 2.5rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 50px;
    }
  }
`;

export const RightArrowHolder = styled(StyledRightArrowHolder)`
  margin-top: 0;
  height: 90%;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 71%;
  }
`;
