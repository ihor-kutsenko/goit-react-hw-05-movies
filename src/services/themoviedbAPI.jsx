import axios from 'axios';

const API_KEY = 'a0a6c6bb266cce33636e335501d23546';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: 1,
  });
  const { data } = await axios.get('/trending/movie/week', { params });
  return data;
};

export const fetchSearchMovies = async query => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: 1,
    query: query,
  });
  const { data } = await axios.get('/search/movie', { params });
  return data;
};

export const fetchMovieDetails = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    id: id,
  });
  const { data } = await axios.get('/movie', { params });
  return data;
};

export const fetchMovieCredits = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    id: id,
  });
  const { data } = await axios.get('/movie/credits', { params });
  return data;
};

export const fetchMoviesReviews = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    id: id,
  });
  const { data } = await axios.get('/movie/reviews', { params });
  return data;
};

export const fetchGenresMovies = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    id: id,
  });
  const { data } = await axios.get('/genre/movie/list', { params });
  return data.genres;
};
