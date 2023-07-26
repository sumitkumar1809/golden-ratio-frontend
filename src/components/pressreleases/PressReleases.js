import React from 'react';
import { ContainerCustom } from '../../styles/Utils.styled';
import FullNewsCard from '../newscard/FullNewsCard';
import NewsCard from '../newscard/NewsCard';
import { NewsCardHolder } from '../newssection/NewsSection.styled';
import TopNewsCard from '../topnews/TopNewsCard';
import SectionTitle from '../utils/SectionTitle';
import { NewsCardWrapper, PressReleasesWrapper } from './PressReleases.styled';

const PressReleases = ({ news }) => {
  return (
    <ContainerCustom>
      <PressReleasesWrapper>
        <SectionTitle title='Press Releases' url='/news' />
        <NewsCardWrapper>
          {news.map(({ title, image, _id, content }) => (
            <NewsCardHolder key={_id} width={100 / 4}>
              <TopNewsCard
                id={_id}
                image={image}
                content={title}
                path={content}
              />
            </NewsCardHolder>
          ))}
        </NewsCardWrapper>
      </PressReleasesWrapper>
    </ContainerCustom>
  );
};

export default PressReleases;
