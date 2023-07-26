import styled, { keyframes } from 'styled-components';

const SlideDownAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);

  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PortfolioSectionWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 1rem 0;
    width: 90%;
  }
`;

export const PortfolioTitleSection = styled.div`
  display: flex;
`;
export const Title = styled.h3`
  margin-right: 2rem;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary_white};
  padding-bottom: 2px;
  cursor: pointer;

  ${({ active }) =>
    active && `color: #CFA922;  border-bottom: 3px solid #CFA922;`}
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
    margin-right: 1rem;
    ${({ active }) =>
      active && `color: #CFA922;  border-bottom: 1px solid #CFA922;`}
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.2rem;
    margin-right: 1rem;
    ${({ active }) =>
      active && `color: #CFA922;  border-bottom:2px solid #CFA922;`}
  }
`;

export const FilterHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    flex-wrap: wrap;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-wrap: wrap;
  }
`;
export const FilterTitleHolder = styled.div`
  display: flex;
  align-items: center;
  & > h3 {
    font-family: ${({ theme }) => theme.font};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary_white};
  }
  @media ${({ theme }) => theme.device.mobile} {
    & > h3 {
      font-size: 0.5rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    & > h3 {
      font-size: 1rem;
    }
  }
`;
export const SortFilterHolder = styled.div`
  display: flex;
`;

export const FilterBody = styled.div`
  display: none;
  position: absolute;
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 1rem;
  z-index: 999999;
  h3 {
    font-family: ${({ theme }) => theme.font};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    margin: 0;
    padding: 0.2rem 0;
    text-transform: Capitalize;
    &:hover {
      color: ${({ theme }) => theme.colors.primary_gold};
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 3px 3px;
    h3 {
      font-size: 0.6rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    h3 {
      font-size: 0.7rem;
    }
  }
`;

export const Filter = styled.div`
  margin: 0 10px;
  cursor: pointer;
  position: relative;
  min-width: 150px;
  &:hover {
    ${FilterBody} {
      display: block;
      animation: ${SlideDownAnimation} 0.5s ease-in-out;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin: 0 5px;
    min-width: 50px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 5px;
    min-width: 100px;
  }
`;

export const FilterTitle = styled.div`
  padding: 10px 15px;
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary_white};
  border: 2px solid ${({ theme }) => theme.colors.primary_gold};
  transition: all 0.3s ease-in-out;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-left: 5px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary_gold};
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.7rem;
    padding: 4px 6px;
    border: 1px solid ${({ theme }) => theme.colors.primary_gold};
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 0.8rem;
    padding: 6px 6px;
    border: 1px solid ${({ theme }) => theme.colors.primary_gold};
  }
`;

export const MovieCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 25px 0;
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: space-around;
  }
  @media ${({ theme }) => theme.device.tablet} {
    justify-content: space-around;
  }
`;
export const MovieCardHolder = styled.div`
  margin: 25px 0;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
`;
export const PaginationItem = styled.div`
  margin: 0 10px;
  height: 35px;
  width: 35px;
  a {
    color: #e5e5e552;
  }
  ${({ active, theme }) =>
    active && `background: ${theme.colors.primary_gold}; a{color:#fff;}`}

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  &:first-child,
  &:last-child {
    background: none;
  }
`;
export const PaginationLink = styled.a`
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 1.25rem;
  text-decoration: none;
  svg {
    color: ${({ active }) => (active ? '#fff' : '#e5e5e552')};
  }
`;
