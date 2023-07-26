import styled from 'styled-components';

export const ContactInfoSection = styled.div`
  padding: 2rem 0;
  width: 80%;
  margin: auto;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 1rem 0;
    width: 90%;
  }
`;

export const ContactCardHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 25px 0;
  align-items: stretch;
`;
export const ContactCard = styled.div`
  background: #000;
  position: relative;
  padding: 25px 0;
  text-align: center;
  width: 250px;
  h3 {
    font-size: 1.5625rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.primary_gold};
  }
  span {
    background: #fff;
    margin: auto;
    width: 75px;
    height: 75px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-top: -60px;
    img {
      width: 35px;
    }
  }
  div {
    margin: 25px 0;
    cursor: pointer;
    p {
      margin: 0;
      cursor: pointer;
      font-size: 1rem;
      font-weight: ${({ theme }) => theme.fontWeight.light};
      color: ${({ theme }) => theme.colors.primary_white};
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 32%;
    padding: 0 10px;
    padding-top: 35px;
    h3 {
      font-size: 0.8rem;
    }
    span {
      width: 35px;
      height: 35px;
      img {
        width: 20px;
      }
    }
    div {
      margin: 10px 0;
      p {
        font-size: 0.5rem;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 32%;
    padding: 0 10px;
    padding-top: 35px;
    padding-bottom: 15px;
    h3 {
      font-size: 1.25rem;
    }
    span {
      width: 50px;
      height: 50px;
      img {
        width: 30px;
      }
    }
    div {
      margin: 10px 0;
      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #000;
    background: #fff;
    padding: 3px;
    font-size: 1.5rem;
    border-radius: 50%;
    margin-right: 10px;
  }
  margin: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.primary_white};

  @media ${({ theme }) => theme.device.mobile} {
    svg {
      font-size: 1rem;
      padding: 2px;
      margin-right: 5px;
    }
    font-size: 0.5rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    svg {
      font-size: 1rem;
      padding: 2px;
      margin-right: 5px;
    }
    font-size: 0.8rem;
  }
`;
