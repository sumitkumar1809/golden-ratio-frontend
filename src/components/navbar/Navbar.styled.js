import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
 to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
 to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const widthIncrease = keyframes`
  from{
    width:0%;
  }
  to{
    width:80%;
  }
`;

// ${({ black }) =>
//   black
//     ? `background:#1E1E1E;`
//     : `background: linear-gradient(#000000b5, transparent);position:fixed;`};

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  var pos = 'relative';
  var width = ({ theme }) => theme.size.percentage;
  // if route is / pos is fixed
  if (window.location.pathname === '/') {
    pos = 'fixed';
    width = '50%';
  }
} else {
  var pos = 'fixed';
  var width = '60%';
}

export const PageWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary_white};
  width: 100%;
`;

export const NavbarStyled = styled.div`

  z-index: 3;
  width: ${({ theme }) => theme.size.percentage};
  padding: 25px ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: 0 auto;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
    & >div:first-child {
      img {
       width:150px;
      }
    }
  }

  ${({ sticky }) => sticky && `background:#1E1E1E;`};

  @media ${({ theme }) => theme.device.mobile} {
    padding:25px 20px;
    justify-content:space-between;
    & >div:first-child img{
      width:100px;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding:25px 20px;
    justify-content:space-between;
    & >div:first-child img{
      width:133px;
    }
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
export const MobileNavbarMenu = styled(NavbarMenu)`
  display: none;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  background: #1e1e1e;
  padding-top: 0;
  padding-bottom: 15px;
  z-index: 2;
  ${({ sticky }) => sticky && `padding-top:100px;`};
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    // slide up animation inverse
    // animation: ${slideDown} 0.3s linear;
    ${({ black }) => black && `position:unset; padding-top:15px;`};
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    // slide up animation inverse
    animation: ${slideDown} 0.3s linear;
    ${({ black }) => black && `position:unset; padding-top:15px;`};
  }
`;

export const MobileNavbar = styled.div`
  display: none;
  height: 40px;
  width: 50px;
  // border: 2px solid ${({ theme }) => theme.colors.primary_gold};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 7px 0;
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
  }
  span {
    display: block;
    height: 3px;
    width: 25px;
    background: white;
    border-radius: 30px;
  }
`;

export const NavbarMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  color: #fff;
  transition: 0.2s ease all;
  cursor: pointer;
  position: relative;
  font-family: ${({ theme }) => theme.fontPoppins};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 1rem;
  img {
    width: 15px;
    height: 15px;
    position: absolute;
    top: -8px;
    display: none;
  }
  span {
    background: ${({ theme }) => theme.colors.primary_gold};
    height: 1px;
    display: none;
    width: 80%;
    margin: auto;
    position: absolute;
    bottom: 8px;
  }
  &:hover {
    img {
      display: unset;
      animation: ${slideUp} 0.5s linear;
    }
    span {
      display: block;
      animation: ${widthIncrease} 0.5s linear;
    }
  }
  ${({ active }) =>
    active &&
    `color:#CFA922;
    &:hover{

      img{
        display:none;
      }
      span{
        display:none;
      }
    }
    `}
`;
