import React, { useEffect, useState } from 'react';
import { ContainerCustom } from '../../styles/Utils.styled';
import {
  MovieCardHolder,
  MovieCardsContainer,
  PortfolioSectionWrapper,
} from './PortfolioSection.styled';
import MovieCard from '../moviecard/MovieCard';
// import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import axios from 'axios';
import { API_URL } from '../../config';
import { useNavigate, useParams } from 'react-router-dom';
const UpcomingPortfolioSection = () => {
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { movietype } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}movie/order/view`);
      if (movietype === 'upcoming') {
        const newUpcoming = res.data.filter((item) => item.type === 'upcoming');
        setMovies(newUpcoming);
      } else if (movietype === 'featured') {
        const newUpcoming = res.data.filter((item) => item.type === 'featured');
        setMovies(newUpcoming);
      } else {
        navigate('/portfolio');
      }

      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerCustom>
      <PortfolioSectionWrapper>
        {isLoaded && (
          <MovieCardsContainer>
            {movies.map(({ _id, movie }) => (
              <MovieCardHolder key={_id}>
                <MovieCard
                  id={movie._id}
                  thumbnail={movie.image}
                  title={movie.title}
                  content={
                    movie.synopsis.length > 100
                      ? movie.synopsis.substring(0, 100)
                      : movie.synopsis
                  }
                  language={
                    movie.production[movie.production.length - 1]?.language
                  }
                  genre={movie.genre}
                  releaseYear={new Date(
                    movie.production[movie.production.length - 1]?.release_date
                  ).getFullYear()}
                />
              </MovieCardHolder>
            ))}
          </MovieCardsContainer>
        )}
      </PortfolioSectionWrapper>
    </ContainerCustom>
  );
};

export default UpcomingPortfolioSection;
