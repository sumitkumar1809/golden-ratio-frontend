import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TeamModelWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const TeamModel = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
  opacity: 1;
  width: 500px;
  min-height: 300px;
  padding: 25px 15px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  font-family: ${({ theme }) => theme.fontPoppins};
  & > svg {
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 1.3rem;
    opacity: 0.8;
  }
  p {
    width: 90%;
    margin: 15px auto;
    font-size: 1.1rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    height: auto;
    padding: 45px 5px;
    p {
      font-size: 0.8rem;
    }
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  margin: auto;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: auto;
    padding: 5px;
    border: 5px solid ${({ theme }) => theme.colors.primary_gold};
  }
  div {
    margin-left: 15px;
    width: 70%;
    h3 {
      font-size: 1.5rem;
      margin: 0;
    }
    h4 {
      font-size: 1.2rem;
      margin: 0;
      margin-top: 10px;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.primary_gold};
    }
    span {
      font-size: 1rem;
      display: flex;
      align-items: center;
      color: #0e76a8;
      cursor: pointer;
      svg {
        margin-left: 5px;
      }
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 20px;
    img {
      width: 100px;
      height: 100px;
      border-width: 3px;
      padding: 3px;
    }
    div {
      h3 {
        font-size: 1rem;
      }
      h4 {
        font-size: 0.8rem;
      }
      span {
        font-size: 0.7rem;
      }
    }
  }
`;
