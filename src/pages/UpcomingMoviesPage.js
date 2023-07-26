import styled from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import PageBanner from '../components/pagebanner/PageBanner';
import UpcomingPortfolioSection from '../components/portfoliosection/UpcomingPortfolioSection';
// import UpcomingReleases from '../components/upcomingreleases/UpcomingReleases';

import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../components/Loader/Loader';
import { LoadedWrapper } from '../styles/Utils.styled';
import { useParams } from 'react-router-dom';

const UpcomingMoviesPage = () => {
  const PageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary_black};
    color: ${({ theme }) => theme.colors.primary_white};
  `;
  const { movietype } = useParams();
  // const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const [isFullyLoadedImage, setIsFullyLoadedImage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      // setIsFullyLoaded(true);
      setTimeout(() => {
        setIsFullyLoadedImage(true);
      }, 1000);
    })();
  }, []);

  return (
    <>
      {!isFullyLoadedImage && <Loader />}
      <LoadedWrapper isFullyLoadedImage>
        <PageWrapper>
          <Navbar black />
          {movietype === 'upcoming' ? (
            <PageBanner
              goldText={'Releases'}
              headText={'Upcoming'}
              bgText={'MOVIES'}
            />
          ) : (
            movietype === 'featured' && (
              <PageBanner
                goldText={'Movies'}
                headText={'Featured'}
                bgText={'MOVIES'}
              />
            )
          )}

          <UpcomingPortfolioSection />
          <Footer />
        </PageWrapper>
      </LoadedWrapper>
    </>
  );
};

export default UpcomingMoviesPage;
