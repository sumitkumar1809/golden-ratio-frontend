import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import PageBanner from '../components/pagebanner/PageBanner';
import TeamComponent from '../components/teamcomponent/TeamComponent';
import { API_URL } from '../config';
import { TeamBanner } from '../images';
import Loader from '../components/Loader/Loader';
import { LoadedWrapper } from '../styles/Utils.styled';
import {
  DetailContainer,
  TeamModel,
  TeamModelWrapper,
} from './TeamPage.styled';
import { FaTimes } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const TeamPage = () => {
  const PageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary_dark_black};
    color: ${({ theme }) => theme.colors.primary_white};
  `;

  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [team3, setTeam3] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullyLoadedImage, setIsFullyLoadedImage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [fullTeam, setFullTeam] = useState([]);

  useEffect(() => {
    // get data from API
    const fetchTeam = async () => {
      const teamData = await axios.get(`${API_URL}team`);
      // get a teamData from API
      const data = teamData.data;
      setFullTeam(data);
      // filter teamData by type
      data.filter(checkTeam);

      setIsLoaded(true);
      setTimeout(() => {
        setIsFullyLoadedImage(true);
      }, 1000);
    };
    fetchTeam();
    // find is mobile
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.scrollTo(0, 0);
  }, []);

  const checkTeam = (team) => {
    switch (team.type) {
      case '1':
        setTeam1((team1) => [...team1, team]);
        break;
      case '2':
        setTeam2((team2) => [...team2, team]);
        break;
      case '3':
        setTeam3((team3) => [...team3, team]);
        break;
      default:
        break;
    }
  };

  const [current, setCurrent] = useState();
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleOpenModel = (id) => {
    // filter a team from full team
    const team = fullTeam.filter((team) => team._id === id);
    setCurrent(team[0]);

    setIsModelOpen(true);
  };

  return (
    <>
      {!isFullyLoadedImage && <Loader />}
      <LoadedWrapper isFullyLoadedImage>
        <PageWrapper>
          <Navbar black />
          <PageBanner
            img={TeamBanner}
            goldText={'Team'}
            headText={'Our'}
            bgText={'TEAM'}
          />

          {isLoaded && (
            <>
              <TeamComponent
                title='MANAGEMENT'
                teams={team1}
                isMobile={isMobile}
                handleOpenModel={handleOpenModel}
              />
              <TeamComponent
                title='Executives'
                teams={team2}
                isMobile={isMobile}
                handleOpenModel={handleOpenModel}
              />
              <TeamComponent
                title='ADVISORY BOARD'
                teams={team3}
                isMobile={isMobile}
                handleOpenModel={handleOpenModel}
              />
            </>
          )}

          <Footer />
        </PageWrapper>
      </LoadedWrapper>

      {isModelOpen && (
        <TeamModelWrapper>
          <TeamModel>
            <FaTimes onClick={() => setIsModelOpen(false)} />
            <DetailContainer>
              <img src={current.image} alt='' />
              <div>
                <h3>{current.name}</h3>
                <h4>{current.designation}</h4>
                {current.linkedin && (
                  <span onClick={() => window.open(current.linkedin, '_blank')}>
                    Linkedin
                    <BsLinkedin />
                  </span>
                )}
              </div>
            </DetailContainer>
            <p>{current.content}</p>
          </TeamModel>
        </TeamModelWrapper>
      )}
    </>
  );
};

export default TeamPage;
