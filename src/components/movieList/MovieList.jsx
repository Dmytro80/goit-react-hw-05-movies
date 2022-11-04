import { Link, useLocation } from 'react-router-dom';
import { MovieItem } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movies => (
        <MovieItem key={movies.id}>
          <Link to={`${movies.id}`} state={{ from: location }}>
            {movies.original_title}
          </Link>
        </MovieItem>
      ))}
    </ul>
  );
};

export default MovieList;
