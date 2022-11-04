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
