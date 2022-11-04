import SearchBox from 'components/searchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovies } from '../components/api/Api';
import MovieList from 'components/movieList/MovieList';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const userQuery = searchParams.get('query');

  useEffect(() => {
    const controller = new AbortController();
    const paramsRequest = {
      userQuery,
      controller,
    };

    async function fetchMovies() {
      try {
        console.log(userQuery);
        if (!userQuery) {
          return;
        }
        const { results } = await getMovies(paramsRequest);

        console.log(results);

        results.length !== 0 && setItems(results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [searchParams]);

  const formSubmitHandler = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    setItems([]);
  };
  return (
    <main>
      <SearchBox onSubmitForm={formSubmitHandler} />
      {items.length !== 0 && <MovieList movies={items} />}
    </main>
  );
};

export default Movies;
