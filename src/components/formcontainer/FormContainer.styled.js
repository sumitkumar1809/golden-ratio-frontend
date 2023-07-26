import styled from 'styled-components';

export const FormContainerWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    padding: 1rem 0;
  }
`;

export const FormChooser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FormChooserItem = styled.h3`
  font-size: 1.8125rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary_white};
  font-family: ${({ theme }) => theme.font};
  padding-bottom: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-right: 2rem;
  ${({ active }) =>
    active &&
    `color: #CFA922;
    border-bottom: 3px solid #CFA922;
    `}

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.6rem;
    margin-right: 1rem;
    ${({ active }) =>
      active &&
      `color: #CFA922;
    border-bottom: 1px solid #CFA922;
    `}
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
    margin-right: 1rem;
    ${({ active }) =>
      active &&
      `color: #CFA922;
    border-bottom: 2px solid #CFA922;
    `}
  }
`;

export const FormWrapper = styled.div`
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  img {
    margin: auto;
    width: 80%;
  }
  div {
    width: 50%;
    &:first-child {
      // text-align: center;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin: 15px 0;
  }
`;
export const FormHolder = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: black;
  padding: 50px 25px;

  input,
  textarea {
    width: 100%;
    padding: 15px 0;
    margin: 15px 0;
    text-indent: 15px;
    background: none;
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary_gold};
    font-size: 1.625rem;
    font-family: ${({ theme }) => theme.font};
    font-weight: ${({ theme }) => theme.fontWeight.extraLight};
    color: #fff;
    outline: none;
    transition: all 0.3s ease-in-out;
    &:placeholder {
      color: rgba(237, 237, 237, 0.5);
    }
    &:focus {
      border-bottom: 3px solid ${({ theme }) => theme.colors.primary_white};
    }
  }
  textarea {
    height: 100px;
    resize: none;
    border: 3px solid #707070;
    &:focus {
      border: 3px solid ${({ theme }) => theme.colors.primary_white};
    }
  }
  button {
    outline: none;
    border: none;
    background: ${({ theme }) => theme.colors.primary_gold};
    color: ${({ theme }) => theme.colors.black};
    font-size: 1rem;
    font-family: ${({ theme }) => theme.font};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    padding: 15px 0;
    margin-top: 15px;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 15px 10px;
    input,
    textarea {
      padding: 5px 0;
      margin: 10px 0;
      font-size: 0.8rem;
      text-indent: 5px;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary_gold};
      &:focus {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary_white};
      }
    }
    textarea {
      height: 50px;
      border: 1px solid #707070;
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary_white};
      }
    }
    button {
      font-size: 0.8rem;
      padding: 5px 0;
      margin-top: 5px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 20px 10px;
    input,
    textarea {
      padding: 5px 0;
      margin: 10px 0;
      font-size: 0.8rem;
      text-indent: 5px;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary_gold};
      &:focus {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary_white};
      }
    }
    textarea {
      height: 50px;
      border: 1px solid #707070;
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary_white};
      }
    }
    button {
      font-size: 0.8rem;
      padding: 10px 0;
      margin-top: 5px;
    }
  }
`;
