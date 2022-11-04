import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from 'pages/Home';
import Movies from '../pages/Movies';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
