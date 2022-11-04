import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../components/api/Api';
import MovieList from '../components/movieList';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPictures() {
      try {
        const { results } = await getTrendingMovies(controller);

        results.length !== 0 && setItems(results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPictures();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {items.length !== 0 && <MovieList movies={items} />}
    </main>
  );
};

export default Home;
