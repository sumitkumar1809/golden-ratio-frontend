import styled from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import PageBanner from '../components/pagebanner/PageBanner';

import Footer from '../components/footer/Footer';
import { ContainerCustom } from '../styles/Utils.styled';
import {
  Filter,
  FilterBody,
  FilterHolder,
  FilterTitle,
  FilterTitleHolder,
  MovieCardHolder,
  MovieCardsContainer,
  SortFilterHolder,
} from '../components/portfoliosection/PortfolioSection.styled';
import { MdFilterListAlt } from 'react-icons/md';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import axios from 'axios';
import { API_URL } from '../config';
import MovieCard from '../components/moviecard/MovieCard';

const SearchPage = () => {
  const PageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary_dark_black};
    color: ${({ theme }) => theme.colors.primary_white};
  `;
  const SearchContainer = styled.div`
    width: ${({ theme }) => theme.size.percentage};
    padding: 2rem ${({ theme }) => theme.size.padding};
    background: ${({ theme }) => theme.colors.primary_black};
    margin: auto;
  `;
  const SearchWrapper = styled.div`
    padding: 2rem 0;
    width: 50%;
    margin: auto;
    display: flex;
    input {
      padding: 1rem 0;
      width: 70%;
      border: none;
      outline: none;
      text-indent: 30px;
      font-size: 1.25rem;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-family: ${({ theme }) => theme.fontPoppins};
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      background: black;
      color: ${({ theme }) => theme.colors.primary_white};
    }
    button {
      width: 30%;
      outline: none;
      border: none;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-family: ${({ theme }) => theme.fontPoppins};
      font-size: 1.25rem;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      background: ${({ theme }) => theme.colors.primary_gold};
      color: ${({ theme }) => theme.colors.primary_white};
      cursor: pointer;
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 90%;
      padding: 1rem 0;
      input {
        padding: 0.5rem 0;
        font-size: 0.8rem;
      }
      button {
        font-size: 0.8rem;
      }
    }
    @media ${({ theme }) => theme.device.tablet} {
      padding: 1rem 0;
      input {
        font-size: 0.8rem;
      }
      button {
        font-size: 0.8rem;
      }
    }
  `;
  const ResultsHeader = styled.div`
    width: ${({ theme }) => theme.size.percentage};
    padding: 1rem ${({ theme }) => theme.size.padding};
    background: ${({ theme }) => theme.colors.primary_black};
    margin: 0 auto;
    h1 {
      font-family: ${({ theme }) => theme.font};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: 20px;
      margin: 0;
    }
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary_gold};
    @media ${({ theme }) => theme.device.mobile} {
      width: 90%;
      margin: 10px auto;
      h1 {
        font-size: 1rem;
      }
    }
    @media ${({ theme }) => theme.device.tablet} {
      h1 {
        font-size: 1.25rem;
      }
    }
  `;
  const MainWrapper = styled.div`
    width: ${({ theme }) => theme.size.percentage};
    padding: 1rem ${({ theme }) => theme.size.padding};
    background: ${({ theme }) => theme.colors.primary_black};
    margin: auto;
    @media ${({ theme }) => theme.device.mobile} {
      width: 90%;
    }
  `;

  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [sortType, setSortType] = useState('Sort By');
  const [isSearched, setIsSearched] = useState(false);
  const [values, setValues] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await fetchMovies();
      // setIsFullyLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    })();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await axios.get(`${API_URL}movie`);
      setMovies(res.data);
      setAllMovies(res.data);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = (type) => {
    switch (type) {
      case 'A-Z':
        //Sort the movies with the title in ascending order
        const sortedMovies = movies.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        setMovies(sortedMovies);
        setSortType('A-Z');
        break;
      case 'Z-A':
        //Sort the movies with the title in descending order
        const sortedMoviesDesc = movies.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
        setMovies(sortedMoviesDesc);
        setSortType('Z-A');
        break;

      case 'Latest':
        //Sort the movies with created at in descending order
        const sortedMoviesLatest = movies.sort((a, b) => {
          return b.createdAt.localeCompare(a.createdAt);
        });
        setMovies(sortedMoviesLatest);
        setSortType('Latest');
        break;
      case 'Oldest':
        //Sort the movies with created at in descending order
        const sortedMoviesOldest = movies.sort((a, b) => {
          return a.createdAt.localeCompare(b.createdAt);
        });
        setMovies(sortedMoviesOldest);
        setSortType('Oldest');
        break;
      default:
        setSortType('Sort By');
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // filter the search key
    const filteredMovies = allMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(values.searchKey.toLowerCase());
    });
    setMovies(filteredMovies);
    setIsSearched(true);
  };
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {isLoaded ? (
        <PageWrapper>
          <Navbar black />
          <PageBanner goldText={'Search'} bgText={'SEARCH'} />
          <ContainerCustom>
            <form method='post' onSubmit={(e) => handleSubmit(e)}>
              <SearchContainer>
                <SearchWrapper>
                  <input
                    type='text'
                    required
                    autoFocus={true}
                    name='searchKey'
                    value={values.searchKey}
                    onChange={(e) => handleChange(e)}
                    placeholder='Type your search word here'
                  />
                  <button>Search Now</button>
                </SearchWrapper>
              </SearchContainer>
            </form>
            <ResultsHeader>
              <h1>Search Results Here</h1>
            </ResultsHeader>
            <MainWrapper>
              <FilterHolder>
                <FilterTitleHolder></FilterTitleHolder>
                <SortFilterHolder>
                  <Filter>
                    <FilterTitle>
                      {sortType} <MdFilterListAlt />
                    </FilterTitle>
                    <FilterBody>
                      <h3 onClick={() => handleSort('CLEAR')}>Clear</h3>
                      <h3 onClick={() => handleSort('A-Z')}>A-Z</h3>
                      <h3 onClick={() => handleSort('Z-A')}>Z-A</h3>
                      <h3 onClick={() => handleSort('Latest')}>Latest</h3>
                      <h3 onClick={() => handleSort('Oldest')}>Oldest</h3>
                    </FilterBody>
                  </Filter>
                </SortFilterHolder>
              </FilterHolder>

              {isLoaded && (
                <>
                  {isSearched && (
                    <MovieCardsContainer>
                      {movies.map(
                        ({
                          image,
                          title,
                          synopsis,
                          genre,
                          _id,
                          production,
                        }) => (
                          <MovieCardHolder key={_id}>
                            <MovieCard
                              id={_id}
                              thumbnail={image}
                              title={title}
                              content={
                                synopsis.length > 130
                                  ? synopsis.substring(0, 130)
                                  : synopsis
                              }
                              language={
                                production[production.length - 1]?.language
                              }
                              genre={genre}
                              releaseYear={new Date(
                                production[production.length - 1]?.release_date
                              ).getFullYear()}
                            />
                          </MovieCardHolder>
                        )
                      )}
                    </MovieCardsContainer>
                  )}
                </>
              )}
            </MainWrapper>
          </ContainerCustom>
          <Footer />
        </PageWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SearchPage;
