import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async controller => {
  const response = await axios.get('trending/movie/day', {
    params: {
      api_key: '6f46b11c91adf322aba101aff37aa78d',
    },
    signal: controller.signal,
  });

  return response.data;
};

export const getMovies = async ({ userQuery, controller }) => {
  const response = await axios.get(`search/movie?query=${userQuery}`, {
    params: {
      api_key: '6f46b11c91adf322aba101aff37aa78d',
    },
    signal: controller.signal,
  });

  return response.data;
};

export const getMovieDetails = async ({ movieId, controller }) => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: '6f46b11c91adf322aba101aff37aa78d',
    },
    signal: controller.signal,
  });

  return response.data;
};
export const getMovieCast = async ({ movieId, controller }) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: '6f46b11c91adf322aba101aff37aa78d',
    },
    signal: controller.signal,
  });

  return response.data;
};

export const getMovieReviews = async ({ movieId, controller }) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: '6f46b11c91adf322aba101aff37aa78d',
    },
    signal: controller.signal,
  });

  return response.data;
};
