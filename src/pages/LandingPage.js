import React, { useEffect } from 'react';
import Banner from '../components/banner/Banner';
// import FeatureMovies from '../components/featuremovies/FeatureMovies';
import UpcomingReleases from '../components/upcomingreleases/UpcomingReleases';
import PressReleases from '../components/pressreleases/PressReleases';
import SocialMedia from '../components/socialmedia/SocialMedia';
import Footer from '../components/footer/Footer';
import styled from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import { useState } from 'react';
import Loader from '../components/Loader/Loader';
import { API_URL } from '../config';
import axios from 'axios';
import { LoadedWrapper } from '../styles/Utils.styled';
import AboutSection from './AboutSection';

// const Footer = React.lazy(() => import('../components/footer/Footer'));
// const Navbar = React.lazy(() => import('../components/navbar/Navbar'));
// const Banner = React.lazy(() => import('../components/banner/Banner'));
// const FeatureMovies = React.lazy(() =>
//   import('../components/featuremovies/FeatureMovies')
// );
// const UpcomingReleases = React.lazy(() =>
//   import('../components/upcomingreleases/UpcomingReleases')
// );
// const PressReleases = React.lazy(() =>
//   import('../components/pressreleases/PressReleases')
// );
// const SocialMedia = React.lazy(() =>
//   import('../components/socialmedia/SocialMedia')
// );

const LandingPage = () => {
  const LandingPageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary_dark_black};
    color: ${({ theme }) => theme.colors.primary_white};
  `;

  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const [isFullyLoadedImage, setIsFullyLoadedImage] = useState(false);
  // child data
  const [banners, setBanners] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [upcomingReleases, setUpcomingReleases] = useState([]);
  const [news, setNews] = useState([]);
  const [Twitter, SetTwitter] = useState([]);
  const [Instagram, SetInstagram] = useState([]);
  const [facebook, setFacebook] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await fetchBanners();
      await fetchMovies();
      await fetchPressReleases();
     // await fetchSocialMedia();
      setIsFullyLoaded(true);
      setTimeout(() => {
        setIsFullyLoadedImage(true);
      }, 0);
    })();
  }, []);

  const fetchBanners = async () => {
    try {
      const res = await axios.get(`${API_URL}banner`);
      setBanners(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchMovies = async () => {
    const res = await axios.get(`${API_URL}movie/order/view`);
    const newFeatured = res.data.filter((item) => item.type === 'featured');
    setFeaturedMovies(newFeatured);
    const newUpcoming = res.data.filter((item) => item.type === 'upcoming');
    // take only 4
    const upcoming = newUpcoming.slice(0, 4);
    setUpcomingReleases(upcoming);
  };

  const fetchPressReleases = async () => {
    try {
      const res = await axios.get(`${API_URL}news/update/press`);
      setNews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

//   const fetchSocialMedia = async () => {
//     try {
//       const res = await axios.get(`${API_URL}social`);

//      // get only data which is having type of twitter
//      console.log(res.data)
//       const twitterData = res.data.filter((item) => item.type === 'twitter');
//       const instagramData = res.data.filter(
//         (item) => item.type === 'instagram'
//       );
//  console.log(instagramData)
//        SetInstagram(instagramData);

//       const twitter_response = await axios.get(`${API_URL}social/get/twitter`);
//       console.log(twitter_response.data)
//       SetTwitter(twitter_response.data);

//       const facebook_response = await axios.get(
//         `${API_URL}social/get/facebook`
//       );
//       setFacebook(facebook_response?.data?.posts?.data);
//     } catch (error) {}
//   };

  return (
    <>
      {!isFullyLoadedImage && <Loader />}
      <LoadedWrapper isFullyLoadedImage>
        {isFullyLoaded && (
          <LandingPageWrapper>
            <Navbar />
            <Banner banners={banners} />
            <AboutSection />
            {/* <FeatureMovies featuredMovies={featuredMovies} /> */}
            <UpcomingReleases
              trailer={false}
              upcomingReleases={featuredMovies}
              sectiontitle='Featured Movies'
              url='/movies/featured'
            />
            <UpcomingReleases
              trailer={true}
              upcomingReleases={upcomingReleases}
              url='/movies/upcoming'
            />
            <PressReleases news={news} />
            {/* <SocialMedia
              Instagram={Instagram}
              Twitter={Twitter}
              facebooks={facebook}
            /> */}
            <Footer />
          </LandingPageWrapper>
        )}
      </LoadedWrapper>
    </>
  );
};

export default LandingPage;
