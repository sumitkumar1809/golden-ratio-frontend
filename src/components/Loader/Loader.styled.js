import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary_black};
  background: #10131a;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 9999999999999999;
`;
