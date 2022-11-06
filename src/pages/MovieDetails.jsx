import { getMovieDetails } from '../components/api/Api';
import {
  SectionMovieDetails,
  TextWrapper,
  Text,
  OverviewTitle,
  GenresTitle,
  ImageWrapper,
  StyledLink,
  SectionAdditionalInformation,
  TitleAdditionalInformation,
  ListAdditionalInformation,
  ItemAdditionalInformation,
} from './MovieDetails.styled';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { HiArrowSmLeft } from 'react-icons/hi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const location = useLocation();
  const locationRef = useRef(location);
  const backLinkHref = locationRef.current.state?.from ?? '/';

  useEffect(() => {
    const controller = new AbortController();
    const paramsRequest = {
      movieId,
      controller,
    };

    async function fetchMovieById() {
      try {
        if (!movieId) {
          return;
        }
        const result = await getMovieDetails(paramsRequest);

        setMovieById(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieById();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!movieById) {
    return null;
  }

  const { original_title, vote_average, overview, genres, poster_path } =
    movieById;
  const movieGenres = genres.map(genre => genre.name).join(' ');

  return (
    <main>
      <StyledLink to={backLinkHref}>
        <HiArrowSmLeft />
        Go back
      </StyledLink>

      {movieById && (
        <>
          <SectionMovieDetails>
            <ImageWrapper>
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_multi_faces${poster_path}`}
                alt="movie poster"
              />
            </ImageWrapper>
            <TextWrapper>
              <h1>{original_title}</h1>
              <Text>User score: {Math.round(vote_average * 10)}%</Text>
              <OverviewTitle>Overview</OverviewTitle>
              <Text>{overview}</Text>
              <GenresTitle>Genres</GenresTitle>
              <Text>{movieGenres}</Text>
            </TextWrapper>
          </SectionMovieDetails>
          <SectionAdditionalInformation>
            <TitleAdditionalInformation>
              Additional information
            </TitleAdditionalInformation>
            <ListAdditionalInformation>
              <ItemAdditionalInformation>
                <Link to="cast">Cast</Link>
              </ItemAdditionalInformation>
              <ItemAdditionalInformation>
                <Link to="reviews">Reviews</Link>
              </ItemAdditionalInformation>
            </ListAdditionalInformation>
          </SectionAdditionalInformation>
          <Outlet />
        </>
      )}
    </main>
  );
};

export default MovieDetails;
