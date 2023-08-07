import { Route, Routes } from 'react-router-dom';
import Movies from 'pages/Movies';
import Home from 'pages/Home';
import { ToastContainer } from 'react-toastify';
import SharedLayout from './SharedLayout/SharedLayout';

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
