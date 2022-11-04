import { Routes, Route } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Home from 'pages/Home';
import Movies from '../pages/Movies';
import SharedLayout from './sharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
