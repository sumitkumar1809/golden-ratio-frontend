import React from 'react';
import { ContainerCustom } from '../../styles/Utils.styled';
import {
  NewsWrapper,
  TitleWrapper,
  TopNewsWrapper,
  RightArrowHolder,
} from './TopNews.styled';
import { Carousel } from '@trendyol-js/react-carousel';
import TopNewsCard from './TopNewsCard';
import { AiFillCaretRight } from 'react-icons/ai';

const TopNews = ({ news }) => {
  return (
    <ContainerCustom>
      <TopNewsWrapper>
        <TitleWrapper>
          <h3>
            In The
            <span>News</span>
          </h3>
        </TitleWrapper>
        <NewsWrapper>
          <Carousel
            responsive={true}
            useArrowKeys={true}
            rightArrow={
              <RightArrowHolder>
                <AiFillCaretRight />
              </RightArrowHolder>
            }
            leftArrow={<></>}
            show={3}
            slide={2}
            transition={0.5}
            swiping={true}>
            {news.map(({ _id, title, image, content }) => (
              <TopNewsCard
                key={_id}
                id={_id}
                image={image}
                content={title}
                path={content}
              />
            ))}
          </Carousel>
        </NewsWrapper>
      </TopNewsWrapper>
    </ContainerCustom>
  );
};

export default TopNews;
