import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FullScreenSlider, PageWrapper } from './Banner.styled';
import { styled } from 'styled-components';
import { ContainerCustom } from '../../styles/Utils.styled';

const Banner = ({ banners }) => {
  return (
    <PageWrapper>
      <ContainerCustom>
        <FullScreenSlider>
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            swipeable={true}
            useKeyboardArrows={true}
            showStatus={false}
            autoPlay={true}
            emulateTouch={true}>
            {banners.map((item, index) => (
              <div key={index}>
                <span
                  className='banner-image'
                  style={{ backgroundImage: `url(${item.image})` }}></span>
                {/* <img src={item.image} alt='Banner' /> */}
              </div>
            ))}
          </Carousel>
        </FullScreenSlider>
      </ContainerCustom>
    </PageWrapper>
  );
};

export default Banner;
