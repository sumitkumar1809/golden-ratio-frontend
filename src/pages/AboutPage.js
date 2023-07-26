import styled from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import PageBanner from '../components/pagebanner/PageBanner';
import UpcomingReleases from '../components/upcomingreleases/UpcomingReleases';
import { ContainerCustom, LoadedWrapper } from '../styles/Utils.styled';
import FeatureMovies from '../components/featuremovies/FeatureMovies';
import Footer from '../components/footer/Footer';
import { useEffect, useState } from 'react';
import { API_URL } from '../config';
import axios from 'axios';
import Loader from '../components/Loader/Loader';

const AboutPage = () => {
  const PageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary_black};
    color: ${({ theme }) => theme.colors.primary_white};
  `;
  const MainText = styled.div`
    padding: 2rem 0;
    width: 80%;
    margin: auto;
    text-align: center;
    h3 {
      font-family: ${({ theme }) => theme.font};
      font-weight: ${({ theme }) => theme.fontWeight.light};
      font-size: 2.5rem;
    }
    p,
    a {
      font-family: ${({ theme }) => theme.font};
      font-weight: ${({ theme }) => theme.fontWeight.light};
      font-size: 1.2rem;
      text-decoration: none;
      color: white;
    }
    a {
      color: ${({ theme }) => theme.colors.primary_gold};
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 90%;
      padding: 0 0;
      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
    @media ${({ theme }) => theme.device.tablet} {
      width: 90%;
      padding: 0 0;
      h3 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  `;
  // const HistorySection = styled.div`
  //   padding: 2rem 0;
  //   width: 80%;
  //   margin: auto;
  //   display: flex;
  //   h3 {
  //     font-family: ${({ theme }) => theme.font};
  //     font-weight: ${({ theme }) => theme.fontWeight.light};
  //     font-size: 2.5rem;
  //   }
  //   p {
  //     font-family: ${({ theme }) => theme.font};
  //     font-weight: ${({ theme }) => theme.fontWeight.light};
  //     font-size: 0.9375rem;
  //   }
  //   img {
  //     width: 450px;
  //   }
  //   & > div:last-child {
  //     margin-left: 50px;
  //   }
  //   @media ${({ theme }) => theme.device.mobile} {
  //     width: 90%;
  //     padding: 1rem 0;
  //     flex-direction: column;
  //     text-align: center;
  //     h3 {
  //       font-size: 1.5rem;
  //     }
  //     p {
  //       font-size: 0.8rem;
  //     }
  //     img {
  //       width: 100%;
  //     }
  //     & > div:last-child {
  //       margin-left: 0;
  //     }
  //   }
  //   @media ${({ theme }) => theme.device.tablet} {
  //     width: 90%;
  //     padding: 1rem 0;
  //     align-items: center;
  //     h3 {
  //       font-size: 1.5rem;
  //     }
  //     p {
  //       font-size: 0.8rem;
  //     }
  //     img {
  //       width: 300px;
  //       margin-right: 15px;
  //     }
  //     & > div:last-child {
  //       margin-left: 0;
  //     }
  //   }
  // `;

  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [upcomingReleases, setUpcomingReleases] = useState([]);
  const [isFullyLoadedImage, setIsFullyLoadedImage] = useState(false);

  const [banner, setBanner] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await fetchMovies();
      await fetchAboutBanner();
      setIsFullyLoaded(true);
      setTimeout(() => {
        setIsFullyLoadedImage(true);
      }, 1000);
    })();
  }, []);

  const fetchMovies = async () => {
    const res = await axios.get(`${API_URL}movie/order/view`);
    const newFeatured = res.data.filter((item) => item.type === 'featured');
    setFeaturedMovies(newFeatured);
    const newUpcoming = res.data.filter((item) => item.type === 'upcoming');
    // take only 4
    const upcoming = newUpcoming.slice(0, 4);
    setUpcomingReleases(upcoming);
  };
  const fetchAboutBanner = async () => {
    const res = await axios.get(`${API_URL}banner/about`);
    setBanner(res.data);
  };

  return (
    <>
      {!isFullyLoadedImage && <Loader />}
      <LoadedWrapper isFullyLoadedImage>
        <PageWrapper>
          <Navbar black />
          <PageBanner
            // img={AboutPageImage}
            pagebanner={banner}
            textAlign='left'
            goldText={'About'}
            headText={'Golden Ratio Films'}
            bgText={'About'}
          />
          <ContainerCustom>
            <MainText>
              {/* <h3>The Company</h3> */}
              <p>
                Golden Ratio Films is the content production and distribution
                subsidiary of{' '}
                <a
                  href='https://vistasmediacapital.com/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Vistas Media Capital
                </a>{' '}
                {''}, committed towards promoting the art of moving images,
                original audio-visual content in the form of films, web-series,
                documentaries and more. Over the last 5 years, Golden Ratio
                Films has produced and distributed high quality films and web
                series across Hindi, Marathi, Tamil and Hollywood catering to
                theatrical and digital audiences across the world.
              </p>
            </MainText>

            {/* <HistorySection>
              <div>
                <img src={HistoryImageAbout} alt='Our History' />
              </div>
              <div>
                <h3> History</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetu Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor Lorem ipsum dolor sit amet, consecteturLorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor Lorem ipsum dolor sit amet, consecteturrdolor
                  sit amet, consecteturr
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetu Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor Lorem ipsum dolor sit amet, consecteturLorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor Lorem ipsum dolor sit amet, consecteturrdolor
                  sit amet, consecteturr Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit
                  amet, consectetu Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit
                  amet, consecteturrdolor sit amet, consecteturr
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor Lorem ipsum dolor sit amet, consectetu Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor Lorem ipsum dolor sit amet, consecteturLorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor Lorem ipsum dolor sit amet, consecteturrdolor
                  sit amet, consecteturr
                </p>
              </div>
            </HistorySection> */}
          </ContainerCustom>
          {isFullyLoaded && (
            <>
              <UpcomingReleases
                upcomingReleases={upcomingReleases}
                url={'/movies/upcoming'}
              />
              <FeatureMovies featuredMovies={featuredMovies} />
            </>
          )}

          <Footer />
        </PageWrapper>
      </LoadedWrapper>
    </>
  );
};

export default AboutPage;
