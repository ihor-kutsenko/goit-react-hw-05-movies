import { Paginate } from './Pagination.styled';

const Pagination = ({ pageCount, setSearchParams, params, currentPage }) => {
  const handlePageClick = e => {
    setSearchParams({ ...params, page: e.selected + 1 });
  };
  return (
    <Paginate
      initialPage={currentPage}
      nextLabel="»"
      onPageChange={handlePageClick}
      pageCount={pageCount}
      breakLabel="..."
      previousLabel="«"
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
      onPageActive={window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })}
    />
  );
};

export default Pagination;
