import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SharedLayout from './SharedLayout/SharedLayout';
import Movies from 'pages/Movies';
import Home from 'pages/Home';
import MoviesDetails from 'pages/MoviesDetails';
import Cast from './Cast/Cast';
import Review from './Reviews/Reviews';
import PageNotFound from 'pages/PageNotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
