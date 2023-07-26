import styled from 'styled-components';

const StarCast = ({ starcasts }) => {
  const StarCastWrapper = styled.div`
    display: flex;
    @media ${({ theme }) => theme.device.mobile} {
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
    }
    @media ${({ theme }) => theme.device.tablet} {
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;
    }
  `;
  const StarCastItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    flex-direction: column;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    span.image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #00000033;
    }
    p {
      font-size: 13px;
      font-weight: ${({ theme }) => theme.fontWeight.extraLight};
      font-family: ${({ theme }) => theme.font};
    }
    @media ${({ theme }) => theme.device.mobile} {
      text-align: center;
      margin: 0;
      width: 25%;
      img {
        width: 25px;
        height: 25px;
      }
      span.image {
        width: 25px;
        height: 25px;
      }
      p {
        font-size: 0.5rem;
      }
    }
    @media ${({ theme }) => theme.device.tablet} {
      img {
        width: 50px;
        height: 50px;
      }
      span.image {
        width: 50px;
        height: 50px;
      }
      p {
        font-size: 0.8rem;
      }
    }
  `;

  return (
    <StarCastWrapper>
      {starcasts.map(({ cast }) => (
        <StarCastItem>
          <span
            className='image'
            style={{ backgroundImage: `url(${cast.image})` }}></span>
          {/* <img draggable={false} src={cast.image} alt={cast.name} /> */}
          <p>{cast.name}</p>
        </StarCastItem>
      ))}
    </StarCastWrapper>
  );
};

export default StarCast;
