import styled from 'styled-components';

export const NewsSectionWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    padding: 1rem 0;
  }
`;
export const NewsCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0;
`;
export const NewsCardHolder = styled.div`
  width: ${({ width }) => width && `${width}%`};
`;
