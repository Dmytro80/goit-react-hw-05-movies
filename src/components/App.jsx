import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from '../pages/Movies';
import SharedLayout from './sharedLayout/SharedLayout';
import MovieDetails from '../pages/MovieDetails';
import Cast from './cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
