import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';
import { Container, Header, Logo, Link } from './Sharedlayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          FilmHub
          <FcFilmReel />
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page ...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
