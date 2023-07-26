import React, { useEffect, useState } from 'react';
import { MdFilterListAlt } from 'react-icons/md';
import { ContainerCustom } from '../../styles/Utils.styled';
import SectionTitle from '../utils/SectionTitle';
import {
  Filter,
  FilterBody,
  FilterHolder,
  FilterTitle,
  FilterTitleHolder,
  MovieCardHolder,
  MovieCardsContainer,
  // Pagination,
  // PaginationItem,
  // PaginationLink,
  PortfolioSectionWrapper,
  PortfolioTitleSection,
  SortFilterHolder,
  Title,
} from './PortfolioSection.styled';
import MovieCard from '../moviecard/MovieCard';
// import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import axios from 'axios';
import { API_URL } from '../../config';
const PortfolioSection = () => {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filterableDatas, setFilterableDatas] = useState([]);
  const [filterValues, setFilterValues] = useState({
    genre: 'Genre',
    year: 'Release Year',
    language: 'Language',
  });
  const [sortType, setSortType] = useState('Sort By');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}movie`);
      setMovies(res.data);
      setAllMovies(res.data);
      const filterableData = await axios.get(`${API_URL}movie/data/filter`);
      setFilterableDatas(filterableData.data);
      // console.log(filterableData.data);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (filter, type) => {
    if (type === 'genre') {
      setFilterValues({ ...filterValues, genre: filter });
      if (filter === 'ALL') {
        setFilterValues({
          ...filterValues,
          language: 'Language',
          genre: 'Genre',
          year: 'Release Year',
        });
        setMovies(allMovies);
      } else {
        if (filterValues.genre !== 'Genre') {
          const filteredMovies = allMovies.filter((movie) => {
            return movie.genre.includes(filter);
          });
          setMovies(filteredMovies);
        } else {
          const filteredMovies = movies.filter((movie) => {
            return movie.genre.includes(filter);
          });
          setMovies(filteredMovies);
        }
      }
    }
    if (type === 'year') {
      setFilterValues({ ...filterValues, year: filter });
      if (filter === 'ALL') {
        setFilterValues({
          ...filterValues,
          language: 'Language',
          genre: 'Genre',
          year: 'Release Year',
        });
        setMovies(allMovies);
      } else {
        if (filterValues.year !== 'Release Year') {
          const filteredMovies = allMovies.filter((movie) => {
            // return movie.production[0].release_date === filter;
            // get a release date
            const releaseDate =
              movie.production[movie.production.length - 1].release_date;
            // convert the string into object date
            const releaseDateObj = new Date(releaseDate);
            // get the year from the release date
            const year = releaseDateObj.getFullYear();
            // compare the year with the filter
            return year === parseInt(filter);
          });
          setMovies(filteredMovies);
        } else {
          const filteredMovies = movies.filter((movie) => {
            // return movie.production[0].release_date === filter;
            // get a release date
            const releaseDate =
              movie.production[movie.production.length - 1].release_date;
            // convert the string into object date
            const releaseDateObj = new Date(releaseDate);
            // get the year from the release date
            const year = releaseDateObj.getFullYear();
            // compare the year with the filter
            return year === parseInt(filter);
          });
          setMovies(filteredMovies);
        }
      }
    }
    if (type === 'language') {
      setFilterValues({ ...filterValues, language: filter });
      if (filter === 'ALL') {
        setFilterValues({
          ...filterValues,
          language: 'Language',
          genre: 'Genre',
          year: 'Release Year',
        });
        setMovies(allMovies);
      } else {
        if (filterValues.language !== 'Language') {
          const filteredMovies = allMovies.filter((movie) => {
            // return movie.production[0].release_date === filter;
            // get a release date
            const language =
              movie.production[movie.production.length - 1].language;
            // convert the string into object date
            return language === filter;
          });
          setMovies(filteredMovies);
        } else {
          const filteredMovies = movies.filter((movie) => {
            // return movie.production[0].release_date === filter;
            // get a release date
            const language =
              movie.production[movie.production.length - 1].language;
            // convert the string into object date
            return language === filter;
          });
          setMovies(filteredMovies);
        }
      }
    }

    // Filter the movies based on the genre
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

  return (
    <ContainerCustom>
      <PortfolioSectionWrapper>
        <SectionTitle title={'Our Portfolio'} />
        {/* <PortfolioTitleSection>
          <Title active>Movies</Title>
          <Title>Shows</Title>
        </PortfolioTitleSection> */}
        {isLoaded && (
          <FilterHolder>
            <FilterTitleHolder>
              <h3>Filter By</h3>
              <Filter>
                <FilterTitle>{filterValues.language}</FilterTitle>
                <FilterBody>
                  <h3 onClick={() => handleFilter('ALL', 'language')}>All</h3>

                  {filterableDatas.languages.map((language, index) => (
                    <h3
                      onClick={() => handleFilter(language, 'language')}
                      key={index}>
                      {language}
                    </h3>
                  ))}
                </FilterBody>
              </Filter>
              <Filter>
                <FilterTitle>{filterValues.year}</FilterTitle>
                <FilterBody>
                  <h3 onClick={() => handleFilter('ALL', 'year')}>All</h3>
                  {filterableDatas.years.map((year, index) => (
                    <h3 key={index} onClick={() => handleFilter(year, 'year')}>
                      {year}
                    </h3>
                  ))}
                </FilterBody>
              </Filter>
              <Filter>
                <FilterTitle>{filterValues.genre}</FilterTitle>
                <FilterBody>
                  <h3 onClick={() => handleFilter('ALL', 'genre')}>All</h3>

                  {filterableDatas.genres.map((genre, index) => (
                    <h3
                      key={index}
                      onClick={() => handleFilter(genre, 'genre')}>
                      {genre}
                    </h3>
                  ))}
                </FilterBody>
              </Filter>
            </FilterTitleHolder>
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
        )}

        {isLoaded && (
          <MovieCardsContainer>
            {movies.map(
              ({ image, title, synopsis, genre, _id, production }) => (
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
                    language={production[production.length - 1]?.language}
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

        {/* <Pagination>
          <PaginationItem>
            <PaginationLink>
              <BsFillCaretLeftFill />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href='#'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink active>
              <BsFillCaretRightFill />
            </PaginationLink>
          </PaginationItem>
        </Pagination> */}
      </PortfolioSectionWrapper>
    </ContainerCustom>
  );
};

export default PortfolioSection;
