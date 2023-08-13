import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import ScrollToTop from 'react-scroll-up';
import { RxThickArrowUp } from 'react-icons/rx';

import SharedLayout from './SharedLayout/SharedLayout';
import scrollToTopStyle from './ScrollToUp/ScrollToUpStyled';
import ScrollWrapper from './ScrollToUp/ScrollWrapper';
import Trailer from 'pages/Trailer/Trailer';
import Library from 'pages/Library/Library';

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
            <Route path="trailer" element={<Trailer />} />
          </Route>
          <Route path="library" element={<Library />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <ScrollToTop showUnder={120} style={scrollToTopStyle}>
        <ScrollWrapper>
          <RxThickArrowUp size="28" strokeWidth="0.2px" />
        </ScrollWrapper>
      </ScrollToTop>

      <ToastContainer />
    </>
  );
};
