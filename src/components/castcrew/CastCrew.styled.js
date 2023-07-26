import styled from 'styled-components';

export const CastCrewWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  h1 {
    color: #fff;
    font-family: ${({ theme }) => theme.fontPoppins};
    font-size: 1.75rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-top: 50px;
  }
  h2 {
    color: #fff;
    font-family: ${({ theme }) => theme.fontPoppins};
    font-size: 1.75rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border-left: 4px solid ${({ theme }) => theme.colors.primary_gold};
    padding-left: 1rem;
  }

  table {
    width: 100%;
    text-align: left;
    margin-bottom: 50px;
    tr {
      th {
        padding: 10px 0;
        font-family: ${({ theme }) => theme.font};
        font-size: 1.25rem;
        font-weight: ${({ theme }) => theme.fontWeight.extraLight};
        color: ${({ theme }) => theme.colors.primary_white};
      }
      td {
        padding: 10px 0;
        font-family: ${({ theme }) => theme.font};
        font-size: 1.125rem;
        font-weight: ${({ theme }) => theme.fontWeight.extraLight};
        color: ${({ theme }) => theme.colors.primary_white};
        width: 15%;
      }
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 1rem 0;
    width: 90%;
    h1 {
      margin-top: 20px;
      font-size: 1.25rem;
    }
    h2 {
      font-size: 1.15rem;
      border-left: 4px solid ${({ theme }) => theme.colors.primary_gold};
      padding-left: 0.5rem;
    }
    table {
      margin-bottom: 25px;
      tr {
        th {
          padding: 5px 0;
          font-size: 1rem;
        }
        td {
          font-size: 0.8rem;
          width: 50%;
        }
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 1rem 0;
    h1 {
      margin-top: 20px;
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.25rem;
    }
    table {
      margin-bottom: 25px;
      tr {
        th {
          padding: 5px 0;
          font-size: 1.15rem;
        }
        td {
          font-size: 1rem;
        }
      }
    }
  }
`;

export const CastTeamHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;
export const CastTeam = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  margin-bottom: 2rem;
  img {
    width: 60px;
    height: 80px;
    border-radius: 18px;
    margin-right: 15px;
  }
  span.image {
    display: block;
    width: 60px;
    height: 80px;
    border-radius: 18px;
    margin-right: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #00000033;
  }
  h3 {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.extraLight};
    color: ${({ theme }) => theme.colors.primary_white};
    font-family: ${({ theme }) => theme.font};
    margin: 0;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fontWeight.extraLight};
    color: ${({ theme }) => theme.colors.primary_white};
    font-family: ${({ theme }) => theme.font};
    margin: 0;
  }
  span {
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fontWeight.extraLight};
    color: ${({ theme }) => theme.colors.primary_white};
    font-family: ${({ theme }) => theme.font};
    margin: 0;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 45%;
    span.image {
      width: 35px;
      height: 50px;
      border-radius: 10px;
      margin-right: 10px;
    }
    h3 {
      font-size: 1rem;
      margin-bottom: 2px;
    }
    p {
      font-size: 0.7rem;
      margin-bottom: 1px;
    }
    span {
      font-size: 0.5rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 33%;
    span.image {
      width: 45px;
      height: 55px;
      border-radius: 10px;
      margin-right: 10px;
    }
    h3 {
      font-size: 1rem;
      margin-bottom: 2px;
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 1px;
    }
    span {
      font-size: 0.6rem;
    }
  }
`;
