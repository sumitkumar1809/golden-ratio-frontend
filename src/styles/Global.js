import { createGlobalStyle } from 'styled-components';
import FD from './fonts/FD.ttf';

const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
    *{
        box-sizing:border-box;
      }
      body{
        padding:0;
        margin:0;
        width: 100%;
       
        font-family:${({ theme }) => theme.font};
    }
    
    button,input,select{
      font-family:${({ theme }) => theme.font};
    }
   
    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
    
      ::-webkit-scrollbar-track {
        background: #edecec;
        border-radius: 50px;
      }
    
      ::-webkit-scrollbar-thumb {
        background: #c4c4c4;
        border-radius: 50px;
      }
    
      ::-webkit-scrollbar-thumb:hover {
        background: #c4c4c4;
      }

      @font-face {
        font-family: 'Fortunates December';
        src: url(${FD}) format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      .swal-button{
        background:${({ theme }) => theme.colors.primary_gold};
        color:${({ theme }) => theme.colors.primary_black};
        outline:none;
        border:none;
        border-radius:0;
        box-shadow:none !important;
        &:hover{
          background:${({ theme }) => theme.colors.primary_gold} !important;

        }
      }
      
`;

export default GlobalStyle;
