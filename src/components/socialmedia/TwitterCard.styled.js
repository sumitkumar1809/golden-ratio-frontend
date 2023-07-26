import styled from 'styled-components';

// const colors = {
//   backgroundColor: '#fff',
//   boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
//   textColor: '#000',
//   twitterBlueColor: '#1da1f2',
// };
const colors = {
  backgroundColor: '#000',
  boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
  textColor: '#fff',
  twitterBlueColor: ({ theme }) => theme.colors.primary_gold,
};

export const TwitterCardWrapper = styled.div`
  background: ${colors.backgroundColor};
  border-radius: 5px;
  padding: 20px 10px;
  margin: 10px;
  box-shadow: ${colors.boxShadow};
  color: ${colors.textColor};

  @media ${({ theme }) => theme.device.mobile} {
    padding: 10px 5px;
  }
`;

export const TwitterHeaderHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TwitterHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
`;

export const TwitterProfileImage = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  @media ${({ theme }) => theme.device.mobile} {
    height: 40px;
    width: 40px;
  }
`;

export const TwitterProfileTitleHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  h3 {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  span {
    font-size: 0.8rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    opacity: 0.7;
    ::before {
      content: '@ ';
    }
  }
  svg {
    color: ${colors.twitterBlueColor};
    font-size: 2rem;
    padding: 0.3rem;
    border-radius: 50%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 5px;
    h3 {
      font-size: 0.8rem;
    }
    span {
      font-size: 0.6rem;
    }
    svg {
      font-size: 1.5rem;
    }
  }
`;

export const TwitterIcon = styled.div`
  text-align: right;
  svg {
    margin-left: 10px;
    font-size: 2rem;
    padding: 0.3rem;
    color: ${colors.twitterBlueColor};
  }
    @media ${({ theme }) => theme.device.mobile} {
    svg {
        font-size: 1.5rem;
    }
`;

export const TwitterContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  @media ${({ theme }) => theme.device.mobile} {
    min-height: 300px;
  }
`;

export const TwitterBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  padding: 0;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
  }
`;

export const TwitterContent = styled.div`
  width: ${({ widthContent }) => widthContent};
  p {
    font-size: 1rem;
    span {
      color: ${colors.twitterBlueColor};
      cursor: pointer;
      margin-left: 5px;
    }
    a {
      color: ${colors.twitterBlueColor};
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 0 10px;
    p {
      font-size: 0.8rem;
    }
  }
`;

export const TwitterImage = styled.div`
  width: 30%;
  max-height: 200px;
  border-radius: 15px;
  background: white;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  margin-top: 10px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    height: 150px;
    margin: auto;
    margin-top: 15px;
  }
`;
