import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/footer/Footer';
import Loader from '../components/Loader/Loader';
import Navbar from '../components/navbar/Navbar';
import NewsSection from '../components/newssection/NewsSection';
import PageBanner from '../components/pagebanner/PageBanner';
import TopNews from '../components/topnews/TopNews';
import { API_URL } from '../config';
import { LoadedWrapper } from '../styles/Utils.styled';

const NewsEventsPage = () => {
  const PageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary_dark_black};
    color: ${({ theme }) => theme.colors.primary_white};
  `;
  const [topNews, setTopNews] = useState([]);
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const [isFullyLoadedImage, setIsFullyLoadedImage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await fetchNews();

      setIsFullyLoaded(true);
      setTimeout(() => {
        setIsFullyLoadedImage(true);
      }, 1000);
    })();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get(`${API_URL}news`);
      const topnewsData = res.data.filter((item) => item.type === '2');
      const newsData = res.data.filter((item) => item.type === '1');
      const categoryData = await axios.get(`${API_URL}category`);
      setCategories(categoryData.data);

      const sortedTopMoviesLatest = topnewsData.sort((a, b) => {
        return b.createdAt.localeCompare(a.createdAt);
      });
      setTopNews(sortedTopMoviesLatest);

      const sortedMoviesLatest = newsData.sort((a, b) => {
        return b.createdAt.localeCompare(a.createdAt);
      });
      setNews(sortedMoviesLatest);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!isFullyLoadedImage && <Loader />}
      <LoadedWrapper isFullyLoadedImage>
        <PageWrapper>
          <Navbar black />
          <PageBanner
            goldText={' Events'}
            whiteText={'Events'}
            headText={'News &'}
            bgText={'Latest News'}
            type='SMALL'
          />
          {isFullyLoaded && (
            <>
              <TopNews news={topNews} />
              <NewsSection mainnews={news} categories={categories} />
            </>
          )}

          <Footer />
        </PageWrapper>
      </LoadedWrapper>
    </>
  );
};

export default NewsEventsPage;
