import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notifyOptions from 'components/NotifyOptions/NotifyOptions';
import { Form, Button, Input } from './Searchbar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const onInputChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (!query) {
      toast.error('Enter the name of the Movies 🎥 , please!', notifyOptions);
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Input
          name="query"
          type="text"
          autoFocus
          placeholder="Search movies"
          onChange={onInputChange}
          value={query}
        />
        <Button type="submit">
          <span>
            <FcSearch size={28} />
          </span>
        </Button>
      </Form>
    </>
  );
};

export default SearchBar;
