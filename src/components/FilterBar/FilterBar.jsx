// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { fetchFilters } from 'services/themoviedbAPI';

// import FilterGenres from './FilterGenres/FilterGenres';
// import FilterLanguage from './FilterLanguage/FilterLanguage';
// import FilterReleaseYear from './FilterReleaseYear/FilterReleaseYear';
// import FilterSortBy from './FilterSortBy/FilterSortBy';
// import MoviesList from 'components/Movies/MoviesList/MovieList';

// import {
//   FilterBarWrapper,
//   FilterBarContainer,
//   Form,
//   FormList,
//   FormListItem,
//   FormSelect,
//   FilterBarBtn,
//   Option,
// } from './FilterBar.styled';

// const FilterBar = ({ onSubmit }) => {
//   const [filterMovies, setFilterMovies] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const [language, setLanguage] = useState([]);
//   const [releaseYear, setReleaseYear] = useState([]);
//   const [sortBy, setSortBy] = useState([]);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const movie = searchParams.get('query') ?? '';

//   useEffect(() => {
//     const getSearchMoviesByFilter = async (genre, year, language, page) => {
//       try {
//         const data = await fetchFilters(genre, year, language, page);
//         console.log(data);
//         console.log(data.total_pages);
//         console.log(data.results);

//         setFilterMovies(data.results);
//       } catch (error) {
//       } finally {
//       }
//     };

//     getSearchMoviesByFilter(genres, releaseYear, language);
//   }, [movie, genres, releaseYear, language]);

//   const handleGenreChange = e => {
//     setGenres(e.target.value);
//     console.log(e.target.value);
//   };

//   const handleLanguageChange = selectedLanguage => {
//     setLanguage(selectedLanguage);
//   };

//   const handleReleaseYearChange = selectedYear => {
//     setReleaseYear(selectedYear);
//   };

//   const onFilterSearch = (genre, year, language) => {
//     setSearchParams({
//       genre,
//       year,
//       language,
//     });
//   };

//   const onFilterFormSubmit = event => {
//     event.preventDefault();
//     if (!query) {
//       toast.error('Enter the name of the Movies 🎥 , please!', notifyOptions);
//       return;
//     }
//     onSubmit(filterMovies);
//     setFilterMovies('');
//   };

//   return (
//     <>
//       <FilterBarWrapper>
//         <FilterBarContainer>
//           <Form onSubmit={onFilterSearch}>
//             <FormList>
//               <FormListItem>
//                 <FormSelect name="with_genres" id="mySelect">
//                   <Option value="">Genres</Option>
//                   <FilterGenres onSelectGenre={handleGenreChange} />
//                 </FormSelect>
//               </FormListItem>
//               <FormListItem>
//                 <FormSelect name="with_original_language" id="">
//                   <Option value="">Language</Option>
//                   <FilterLanguage onSelectLanguage={handleLanguageChange} />
//                 </FormSelect>
//               </FormListItem>
//               <FormListItem>
//                 <FormSelect name="primary_release_year" id="">
//                   <Option value="">Release Year</Option>
//                   <FilterReleaseYear onSelectYear={handleReleaseYearChange} />
//                 </FormSelect>
//               </FormListItem>
//               <FormListItem>
//               <FormSelect name="sort_by" id="">
//                 <Option value="">Sort by</Option>

//                 <Option value="release_date.desc">Release date</Option>
//                 <Option value="revenue.desc">Revenue</Option>
//                 <Option value="vote_average.desc">Average rating</Option>
//                 <Option value="vote_count.desc">Number of votes</Option>
//                 <Option value="popularity.desc">Popularity</Option>
//               </FormSelect>
//             </FormListItem>
//             </FormList>
//             <div>
//               <FilterBarBtn type="submit">Let's Go</FilterBarBtn>
//             </div>
//           </Form>
//         </FilterBarContainer>
//       </FilterBarWrapper>
//     </>
//   );
// };

// export default FilterBar;
