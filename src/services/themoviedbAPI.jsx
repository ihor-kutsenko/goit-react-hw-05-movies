import axios from 'axios';

const API_KEY = 'a0a6c6bb266cce33636e335501d23546';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async page => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: page,
  });
  const { data } = await axios.get('/trending/movie/week', { params });
  return data;
};

export const fetchSearchMovies = async (query, page) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: page,
    query: query,
  });
  const { data } = await axios.get('/search/movie', { params });
  return data;
};

export const fetchMovieDetails = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const { data } = await axios.get(`/movie/${id}`, { params });
  return data;
};

export const fetchMovieCredits = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const { data } = await axios.get(`/movie/${id}/credits`, { params });
  return data;
};

export const fetchMoviesReviews = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const { data } = await axios.get(`/movie/${id}/reviews`, { params });
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

export const fetchTrailerById = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const { data } = await axios.get(`/movie/${id}/videos`, { params });
  return data;
};

export const fetchActors = async (query, page) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: page,
    query,
  });
  const { data } = await axios.get('/search/person', { params });
  return data;
};

export const fetchActorsDetails = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const { data } = await axios.get(`/person/${id}`, { params });
  return data;
};

export const fetchActorsMovies = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const { data } = await axios.get(`/person/${id}/movie_credits`, { params });
  return data.cast;
};

export const fetchTrendingActors = async page => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    page: page,
  });
  const { data } = await axios.get('/trending/person/day', { params });
  return data;
};

// filter bar

export const fetchFilters = async (genre, language, year, sort, page) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    with_genres: genre,
    page: page,
    primary_release_year: year,
    with_original_language: language,
    sort_by: sort,
  });

  const { data } = await axios.get('/discover/movie', { params });
  return data.results;
};
