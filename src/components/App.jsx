import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SharedLayout from './SharedLayout/SharedLayout';
import Movies from 'pages/Movies';
import Home from 'pages/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
