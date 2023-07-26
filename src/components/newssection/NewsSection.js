import React, { useState, useEffect } from 'react';
import { MdFilterListAlt } from 'react-icons/md';
import { GoSettings } from 'react-icons/go';
import { ContainerCustom } from '../../styles/Utils.styled';
import {
  Filter,
  FilterBody,
  FilterHolder,
  FilterTitle,
  FilterTitleHolder,
  SortFilterHolder,
} from '../portfoliosection/PortfolioSection.styled';
import {
  NewsCardHolder,
  NewsCardsContainer,
  NewsSectionWrapper,
} from './NewsSection.styled';
import FullNewsCard from '../newscard/FullNewsCard';

const NewsSection = ({ mainnews, categories }) => {
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortType, setSortType] = useState('Sort By');

  useEffect(() => {
    setNews(mainnews);
    setIsLoaded(true);
  }, []);

  const handleFilter = (id) => {
    const filteredNews = mainnews.filter((news) => news.category._id === id);
    setNews(filteredNews);
  };
  const handleSort = (type) => {
    switch (type) {
      case 'A-Z':
        //Sort the news with the title in ascending order
        const sortedMovies = news.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        setNews(sortedMovies);
        setSortType('A-Z');
        break;
      case 'Z-A':
        //Sort the news with the title in descending order
        const sortedMoviesDesc = news.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
        setNews(sortedMoviesDesc);
        setSortType('Z-A');
        break;

      case 'Latest':
        //Sort the news with created at in descending order
        const sortedMoviesLatest = news.sort((a, b) => {
          return b.createdAt.localeCompare(a.createdAt);
        });
        setNews(sortedMoviesLatest);
        setSortType('Latest');
        break;
      case 'Oldest':
        //Sort the news with created at in descending order
        const sortedMoviesOldest = news.sort((a, b) => {
          return a.createdAt.localeCompare(b.createdAt);
        });
        setNews(sortedMoviesOldest);
        setSortType('Oldest');
        break;
      default:
        setSortType('Sort By');
        break;
    }
  };

  return (
    <ContainerCustom>
      <NewsSectionWrapper>
        <FilterHolder>
          <FilterTitleHolder></FilterTitleHolder>
          <SortFilterHolder>
            <Filter>
              <FilterTitle>
                Filter By Category <MdFilterListAlt />
              </FilterTitle>
              <FilterBody>
                {categories.map((category) => (
                  <h3 onClick={() => handleFilter(category._id)}>
                    {category.title}
                  </h3>
                ))}
              </FilterBody>
            </Filter>
            <Filter>
              <FilterTitle>
                {sortType}
                <GoSettings />
              </FilterTitle>
              <FilterBody>
                <h3 onClick={() => handleSort('CLEAR')}>Clear</h3>
                <h3 onClick={() => handleSort('A-Z')}>A-Z</h3>
                <h3 onClick={() => handleSort('Z-A')}>Z-A</h3>
                <h3 onClick={() => handleSort('Latest')}>Latest</h3>
                <h3 onClick={() => handleSort('Oldest')}>Oldest</h3>
              </FilterBody>
            </Filter>
          </SortFilterHolder>
        </FilterHolder>

        {isLoaded && (
          <NewsCardsContainer>
            {news.map(({ _id, image, title, category, createdAt, content }) => (
              <NewsCardHolder key={_id} width={100 / 3}>
                <FullNewsCard
                  id={_id}
                  image={image}
                  category={category?.title}
                  content={title}
                  path={content}
                  releaseDate={new Date(createdAt).toLocaleDateString()}
                />
              </NewsCardHolder>
            ))}
          </NewsCardsContainer>
        )}
      </NewsSectionWrapper>
    </ContainerCustom>
  );
};

export default NewsSection;
