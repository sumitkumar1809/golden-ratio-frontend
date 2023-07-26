import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { MovieDetailBannerBG } from '../../images';
import { ContainerCustom } from '../../styles/Utils.styled';
import { TrailerSection } from './TrailerBanner.styled';

const TrailerBanner = ({ banner, trailer }) => {
  const playTrailer = () => {
    if (trailer !== null && trailer !== '') {
      window.open(`${trailer}`, '_blank');
    }
  };
  return (
    <ContainerCustom>
      <TrailerSection>
        <span style={{ backgroundImage: `url(${banner})` }}></span>
        {/* <img src={banner} alt='Movie Banner' /> */}
        <img src={MovieDetailBannerBG} alt='BG' />
        <div onClick={() => playTrailer()}>
          <BsPlayCircle />
        </div>
      </TrailerSection>
    </ContainerCustom>
  );
};

export default TrailerBanner;
