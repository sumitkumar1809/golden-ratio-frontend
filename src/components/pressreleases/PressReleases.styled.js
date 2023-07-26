import styled from 'styled-components';

export const PressReleasesWrapper = styled.div`
  padding: 1rem 0;
  width: ${({ theme }) => theme.size.percentage};
  padding: 0 ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

export const NewsCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    & > div {
      &:nth-child(3) {
        display: none;
      }
    }
  }
`;
