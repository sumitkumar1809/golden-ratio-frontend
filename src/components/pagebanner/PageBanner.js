import React from 'react';
import { ContainerCustom } from '../../styles/Utils.styled';
import { PageBannerWrapper, PageTitle, SubTitle } from './PageBanner.styled';

const PageBanner = ({
  textAlign,
  goldText,
  whiteText,
  headText,
  bgText,
  pagebanner,
  type,
}) => {
  return (
    <ContainerCustom>
      <PageBannerWrapper>
        <PageTitle type={type ? type : 'BIG'}>
          <h1>
            <span>{headText}</span> {goldText}
          </h1>
          {/* <SubTitle>
            {textAlign === 'left' ? (
              <h3>
                <span>
                  {goldText} <span className='white'>{whiteText}</span>{' '}
                </span>
                {headText}
              </h3>
            ) : (
              <h3>
                {headText}
                <span>
                  {goldText} <span className='white'>{whiteText}</span>{' '}
                </span>
              </h3>
            )}
          </SubTitle> */}
        </PageTitle>

        {pagebanner && pagebanner?.type === 'image' ? (
          <img src={pagebanner?.image} alt='Page Banner' />
        ) : (
          pagebanner?.type === 'video' && (
            <video muted autoPlay loop>
              <source src={pagebanner?.image} type='video/mp4' />
            </video>
          )
        )}
      </PageBannerWrapper>
    </ContainerCustom>
  );
};

export default PageBanner;
