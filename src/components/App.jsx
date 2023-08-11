import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';

const Movies = lazy(() => import('pages/Movies/Movies'));
const Home = lazy(() => import('pages/Home/Home'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Review = lazy(() => import('pages/Reviews/Reviews'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

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
