// import { ImdbIcon } from '../../images';
import { ContainerCustom } from '../../styles/Utils.styled';
import {
  MovieDescription,
  MovieDetailWrapper,
  MovieInfoWrapper,
  // MovieRating,
  MovieTitle,
} from './MovieInfo.styled';

const MovieInfo = ({ movie, production }) => {
  let year = null;
  if (movie?.releaseDate != null) {
    year = new Date(movie?.releaseDate).getFullYear();
  }

  return (
    <ContainerCustom>
      <MovieInfoWrapper>
        <div>
          {/* <img src={movie?.image} alt='Movie Thumbnail' /> */}
          <span
            className='thumbnail'
            style={{ backgroundImage: `url(${movie?.image})` }}></span>
        </div>
        <div>
          <MovieDetailWrapper>
            <MovieTitle>
              <h1>
                {movie?.title} {year ? `(${year})` : ''}
              </h1>
              <p>{movie?.genre}</p>
              <h3>{movie?.category?.title}</h3>
            </MovieTitle>
            {/* <MovieRating>
              <div>
                <img src={ImdbIcon} alt='IMDB' />
                <div>
                  <h3>7.5/10</h3>
                  <p>8900 Votes</p>
                </div>
              </div>
            </MovieRating> */}
          </MovieDetailWrapper>
          <MovieDescription>
            <h3>Synopsis</h3>
            <p>{movie?.synopsis}</p>
          </MovieDescription>
        </div>
      </MovieInfoWrapper>
    </ContainerCustom>
  );
};

export default MovieInfo;
