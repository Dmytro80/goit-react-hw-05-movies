import { getMovieDetails } from '../components/api/Api';
import {
  SectionMovieDetails,
  TextWrapper,
  Text,
  OverviewTitle,
  GenresTitle,
} from './MovieDetails.styled';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  console.log('id from params', movieId);

  useEffect(() => {
    const controller = new AbortController();
    const paramsRequest = {
      movieId,
      controller,
    };

    async function fetchMovies() {
      try {
        if (!movieId) {
          return;
        }
        const result = await getMovieDetails(paramsRequest);

        console.log('консоль в фетче', result);

        setMovieById(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();

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
      <button type="button">Go back</button>
      {movieById && (
        <SectionMovieDetails>
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_multi_faces${poster_path}`}
            alt="movie poster"
          />
          <TextWrapper>
            <h1>{original_title}</h1>
            <Text>User score: {Math.round(vote_average * 10)}%</Text>
            <OverviewTitle>Overview</OverviewTitle>
            <Text>{overview}</Text>
            <GenresTitle>Genres</GenresTitle>
            <Text>{movieGenres}</Text>
          </TextWrapper>
        </SectionMovieDetails>
      )}
    </main>
  );
};

export default MovieDetails;
