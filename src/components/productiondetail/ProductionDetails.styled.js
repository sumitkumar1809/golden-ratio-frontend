import styled from 'styled-components';

export const ProductionDetailsWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  table {
    width: 100%;
    text-align: left;
    margin-top: 2rem;
    tr {
      th {
        font-size: 1.25rem;
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        font-family: ${({ theme }) => theme.fontPoppins};
        color: ${({ theme }) => theme.colors.primary_gold};
        padding: 1rem 0;
      }
      td {
        font-size: 1.125rem;
        font-family: ${({ theme }) => theme.fontPoppins};
        color: ${({ theme }) => theme.colors.primary_white};
        font-weight: ${({ theme }) => theme.fontWeight.extraLight};
      }
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 1rem 0;
    width: 90%;
    table {
      margin-top: 1rem;
      tr {
        th {
          font-size: 0.8rem;
          padding: 0.5rem 0;
        }
        td {
          font-size: 0.7rem;
        }
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    table {
      margin-top: 1rem;
      tr {
        th {
          font-size: 1rem;
          padding: 0.5rem 0;
        }
        td {
          font-size: 1rem;
        }
      }
    }
  }
`;
