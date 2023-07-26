import styled from 'styled-components';

export const ContainerCustom = styled.div`
  @media ${({ theme }) => theme.responsive.mobileS} {
    // background: purple;
    max-width: 540px;
    margin: auto;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    max-width: 720px;
    margin: auto;
    // background: grey;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    max-width: 960px;
    margin: auto;
    // background: orange;
  }
  @media ${({ theme }) => theme.responsive.laptop} {
    max-width: 1140px;
    margin: auto;
    // background: blue;
  }
  @media ${({ theme }) => theme.responsive.laptopL} {
    // max-width: 1320px;
    max-width: 100%;
    margin: auto;
    // background: #ff00001a;
  }
  @media ${({ theme }) => theme.responsive.desktop} {
    max-width: 1500px;
    margin: auto;
    // background: #10ff1029;
  }
`;

export const DropDown = styled.div`
  background: #e5e2fe;
  padding: 5px 10px;
  border-radius: 25px;
  width: fit-content;
  select {
    background: none;
    outline: none;
    border: none;
    font-size: 1.25rem;
    color: #5e5ccd;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 2px 5px;
    border-radius: 15px;
    select {
      font-size: 0.8rem;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`;
export const Col50 = styled.div`
  width: 50%;
  padding: 15px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 15px 5px;
  }
`;
export const Col25 = styled.div`
  width: 25%;
  padding: 15px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 15px 5px;
  }
`;
export const Col20 = styled.div`
  width: 20%;
  padding: 15px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: ${({ blank }) => (blank ? 'none' : '#fff')};
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0px 0px 50px #2a599805;
`;

export const CardTitle = styled.h4``;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: ${({ theme }) => theme.fontPoppins};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 1.125rem;
  cursor: pointer;
`;

export const LoadedWrapper = styled.div`
  opacity: ${({ isFullyLoadedImage }) => (isFullyLoadedImage ? '1' : '0')};
`;
