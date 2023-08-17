import { Option, FormSelect } from '../FilterBar.styled';
const FilterSort = ({ onSelect }) => {
  return (
    <>
      {' '}
      <FormSelect
        name="sort_by"
        onChange={event => onSelect(event.target.value)}
      >
        <Option value="">Sort by</Option>
        <Option value="release_date.desc">Release date</Option>
        <Option value="revenue.desc">Revenue</Option>
        <Option value="vote_average.desc">Average rating</Option>
        <Option value="vote_count.desc">Number of votes</Option>
        <Option value="popularity.desc">Popularity</Option>
      </FormSelect>
    </>
  );
};

export default FilterSort;
