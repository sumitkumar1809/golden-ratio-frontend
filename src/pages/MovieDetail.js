import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CastCrew from '../components/castcrew/CastCrew';
import Footer from '../components/footer/Footer';
import Loader from '../components/Loader/Loader';
import MovieGallery from '../components/moviegallery/MovieGallery';
import MovieInfo from '../components/movieinfo/MovieInfo';
import Navbar from '../components/navbar/Navbar';
import ProductionDetails from '../components/productiondetail/ProductionDetails';
import TrailerBanner from '../components/trailerbanner/TrailerBanner';
import UpcomingReleases from '../components/upcomingreleases/UpcomingReleases';
import { API_URL } from '../config';
import { LoadedWrapper } from '../styles/Utils.styled';
// import Footer from '../components/footer/Footer';

const MovieDetail = () => {
  const PageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary_dark_black};
    color: ${({ theme }) => theme.colors.primary_white};
  `;

  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [production, setProduction] = useState([]);
  const [producers, setProducers] = useState([]);
  const [musicers, setMusicers] = useState([]);
  const [cinemotograpies, setCinemotograpies] = useState([]);
  const [filmeditors, setFilmeditors] = useState([]);
  const [artdirectors, setArtdirectors] = useState([]);

  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  const [upcomingReleases, setUpcomingReleases] = useState([]);
  const [isFullyLoadedImage, setIsFullyLoadedImage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await fetchData();
      await fetchMovies();
      setIsFullyLoaded(true);
      setTimeout(() => {
        setIsFullyLoadedImage(true);
      }, 1000);
    })();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}movie/${id}`);
      setMovie(res.data);
      setProduction(res.data.production[res.data.production.length - 1]);
      // const newsData = res.data.filter((item) => item.type === '2');
      setProducers(res.data.other.filter((item) => item.type === '1'));
      setMusicers(res.data.other.filter((item) => item.type === '2'));
      setCinemotograpies(res.data.other.filter((item) => item.type === '3'));
      setFilmeditors(res.data.other.filter((item) => item.type === '4'));
      setArtdirectors(res.data.other.filter((item) => item.type === '5'));
    } catch (error) {
      console.log(error);
    }
  };
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
        {isFullyLoaded && (
          <PageWrapper>
            <Navbar />
            <TrailerBanner banner={movie?.banner} trailer={movie?.trailer} />
            <MovieInfo production={production} movie={movie} />
            <MovieGallery gallery={movie?.gallery} />
            <ProductionDetails
              movie={movie}
              production={production}
              starcasts={movie?.starcast}
            />
            <CastCrew
              seriescasts={movie?.seriescast}
              producers={producers}
              musicers={musicers}
              cinemotograpies={cinemotograpies}
              filmeditors={filmeditors}
              artdirectors={artdirectors}
            />
            <UpcomingReleases
              upcomingReleases={upcomingReleases}
              sectiontitle='More Like This Movie / Series'
              url={'/portfolio'}
            />

            <Footer />
          </PageWrapper>
        )}
      </LoadedWrapper>
    </>
  );
};

export default MovieDetail;
