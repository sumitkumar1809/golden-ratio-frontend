import styled from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import PageBanner from '../components/pagebanner/PageBanner';
import PortfolioSection from '../components/portfoliosection/PortfolioSection';
import UpcomingReleases from '../components/upcomingreleases/UpcomingReleases';

import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import Loader from '../components/Loader/Loader';
import { LoadedWrapper } from '../styles/Utils.styled';

const MoviesPage = () => {
  const PageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary_dark_black};
    color: ${({ theme }) => theme.colors.primary_white};
  `;

  // const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const [upcomingReleases, setUpcomingReleases] = useState([]);
  const [isFullyLoadedImage, setIsFullyLoadedImage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await fetchMovies();
      // setIsFullyLoaded(true);
      setTimeout(() => {
        setIsFullyLoadedImage(true);
      }, 1000);
    })();
  }, []);

  const fetchMovies = async () => {
    const res = await axios.get(`${API_URL}movie/order/view`);
    const newUpcoming = res.data.filter((item) => item.type === 'upcoming');
    // take only 4
    const upcoming = newUpcoming.slice(0, 4);
    setUpcomingReleases(upcoming);
  };

  return (
    <>
      {!isFullyLoadedImage && <Loader />}
      <LoadedWrapper isFullyLoadedImage>
        <PageWrapper>
          <Navbar black />
          <PageBanner
            goldText={'PORTFOLIO'}
            headText={'Our'}
            bgText={'PORTFOLIO'}
          />
          <UpcomingReleases
            upcomingReleases={upcomingReleases}
            url={'/movies/upcoming'}
          />
          <PortfolioSection />
          <Footer />
        </PageWrapper>
      </LoadedWrapper>
    </>
  );
};

export default MoviesPage;
