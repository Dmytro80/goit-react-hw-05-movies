import { getMovieCast } from '../api/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ListCast, ItemCast, TextCast } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castById, setCastById] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const paramsRequest = {
      movieId,
      controller,
    };

    async function fetchMovieCast() {
      try {
        if (!movieId) {
          return;
        }
        const { cast } = await getMovieCast(paramsRequest);

        setCastById(cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieCast();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!castById) {
    return null;
  }

  return (
    <ListCast>
      {castById.map(({ profile_path, name, character, id }) => (
        <ItemCast key={id}>
          {profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_multi_faces${profile_path}`}
              alt={`profile of ${name}`}
            />
          ) : (
            <img
              src="https://via.placeholder.com/185x278/?text=Comming_soon"
              alt="profile"
            />
          )}

          <TextCast>{name}</TextCast>
          <TextCast>Character: {character}</TextCast>
        </ItemCast>
      ))}
    </ListCast>
  );
};

export default Cast;
