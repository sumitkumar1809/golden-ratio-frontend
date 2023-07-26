import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  width: ${({ theme }) => theme.size.percentage};
  padding: 2rem ${({ theme }) => theme.size.padding};
  background: ${({ theme }) => theme.colors.primary_black};
  margin: auto;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 1rem 0;
    width: 90%;
  }
`;

export const SectionTitle = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary_gold};
  h3 {
    font-size: 35px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary_gold};
    margin: 0;
    margin-bottom: 15px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    h3 {
      font-size: 1.25rem;
      margin-bottom: 10px;
    }
    margin-bottom: 10px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    h3 {
      font-size: 1.5rem;
    }
  }
`;
export const GalleryItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  & > div {
    width: 33%;
    margin: auto;
    padding: 15px 10px;
    &:first-child {
      width: 50%;
    }
    &:nth-child(2) {
      width: 50%;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    & > div {
      padding: 5px 2px;
      div.poster-image {
        background-size: contain;
        height: 70px;
      }
      &:first-child {
        div.poster-image {
          background-size: cover;
          height: 90px;
        }
      }
      &:nth-child(2) {
        div.poster-image {
          background-size: cover;
          height: 90px;
        }
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    & > div {
      padding: 5px 2px;
      div.poster-image {
        background-size: contain;
        height: 100px;
      }
      &:first-child {
        div.poster-image {
          background-size: cover;
          height: 150px;
        }
      }
      &:nth-child(2) {
        div.poster-image {
          background-size: cover;
          height: 150px;
        }
      }
    }
  }
`;

export const Video = styled.div`
  position: relative;
  video {
    width: 100%;
  }
  div {
    position: absolute;
    top: 0;
    background: none;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 3rem;
      color: rgba(0, 0, 0, 0.8);
      background: rgba(255, 255, 255, 0.75);
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    div {
      svg {
        font-size: 1rem;
        padding: 2px;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    div {
      svg {
        font-size: 1.5rem;
        padding: 2px;
      }
    }
  }
`;
export const Image = styled.div`
  img {
    width: 100%;
  }
  div.poster-image {
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #000000;
  }
  @media ${({ theme }) => theme.device.mobile} {
    div.poster-image {
      height: 90px;
    }
  }
`;
