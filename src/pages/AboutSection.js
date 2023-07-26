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

const AboutSection = () => {
  const PageWrapper = styled.div`
    color: ${({ theme }) => theme.colors.primary_white};
  `;
  const MainText = styled.div`
    width: ${({ theme }) => theme.size.percentage};
    padding: 2rem ${({ theme }) => theme.size.padding};
    background: ${({ theme }) => theme.colors.primary_black};
    margin: auto;
    text-align: center;
    display: flex;
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
      flex-direction: column;
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

  const VideoBannerContainer = styled.div`
    width: 50%;
    video,
    img {
      width: 100%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 100%;
      margin-top: 2rem;
      video,
      img {
        margin-top: 2rem;
      }
    }
    @media ${({ theme }) => theme.device.tablet} {
      video,
      img {
        margin-top: 2rem;
      }
    }
  `;
  const ContentContainer = styled.div`
    width: 50%;
    padding: 2rem 3rem;
    text-align: left;
    @media ${({ theme }) => theme.device.mobile} {
      width: 100%;
      margin-top: 1rem;
      padding: 0;
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
  const [content, setContent] = useState(`<p>
  Golden Ratio Films is the content production and distribution
  subsidiary of 
  <a
    href='https://vistasmediacapital.com/'
    target='_blank'
    rel='noopener noreferrer'>
    Vistas Media Capital
  </a>
  , committed towards promoting the art of moving images, original
  audio-visual content in the form of films, web-series,
  documentaries and more. Over the last 5 years, Golden Ratio
  Films has produced and distributed high quality films and web
  series across Hindi, Marathi, Tamil and Hollywood catering to
  theatrical and digital audiences across the world.
</p>`);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await fetchAboutBanner();
      setIsFullyLoaded(true);
      setTimeout(() => {
        setIsFullyLoadedImage(true);
      }, 1000);
    })();
  }, []);

  const fetchAboutBanner = async () => {
    const res = await axios.get(`${API_URL}banner/about`);
    setBanner(res.data);
    const resAboutContent = await axios.get(`${API_URL}banner/about/content`);
    setContent(resAboutContent.data.content);
    console.log(res.data);
  };

  return (
    <>
      <PageWrapper>
        <ContainerCustom>
          <MainText>
            <VideoBannerContainer>
              {banner && banner?.type === 'image' ? (
                <img src={banner?.image} alt='Page Banner' />
              ) : (
                banner?.type === 'video' && (
                  <video muted autoPlay loop>
                    <source src={banner?.image} type='video/mp4' />
                  </video>
                )
              )}
            </VideoBannerContainer>
            <ContentContainer>
              {/* dangerously html to div */}
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </ContentContainer>
          </MainText>
        </ContainerCustom>
      </PageWrapper>
    </>
  );
};

export default AboutSection;
