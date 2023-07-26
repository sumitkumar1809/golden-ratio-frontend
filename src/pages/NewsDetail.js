import styled from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import PageBanner from '../components/pagebanner/PageBanner';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import Loader from '../components/Loader/Loader';

const NewsDetail = () => {
  const { id } = useParams();
  const PageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary_black};
    color: ${({ theme }) => theme.colors.primary_white};
  `;
  const NewsDetailSection = styled.div`
    padding: 2rem 0;
    width: 80%;
    margin: auto;
    img {
      width: 100%;
    }
    span {
      display: block;
      width: 100%;
      height: 425px;
      background-size: cover;
      background-position: center;
      background-color: #00000033;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 90%;
      padding: 1rem 0;
      span {
        height: 200px;
      }
    }
    @media ${({ theme }) => theme.device.tablet} {
      span {
        height: 300px;
      }
    }
  `;
  const NewsTitle = styled.div`
    font-size: 1.6875rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.primary_gold};
    margin-bottom: 1rem;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1.15rem;
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 1.25rem;
    }
  `;
  const NewsContent = styled.div`
    p {
      font-size: 20px;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      color: ${({ theme }) => theme.colors.primary_white};
    }
    @media ${({ theme }) => theme.device.mobile} {
      p {
        font-size: 0.8rem;
      }
    }
    @media ${({ theme }) => theme.device.tablet} {
      p {
        font-size: 1rem;
      }
    }
  `;

  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await fetchData();
      setIsLoaded(true);
    })();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}news/${id}`);
      setNews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoaded ? (
        <PageWrapper>
          <Navbar black />
          <PageBanner
            goldText={'News and Events'}
            bgText={'NEWS EVENTS'}
            type='SMALL'
          />

          <NewsDetailSection>
            <span style={{ backgroundImage: `url(${news.image})` }}></span>
            {/* <img src={FullNewsImage5} alt='News Detail' /> */}
            <NewsTitle>{news.title}</NewsTitle>
            <NewsContent>
              <p>{news.content}</p>
            </NewsContent>
          </NewsDetailSection>

          <Footer />
        </PageWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default NewsDetail;
