import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import API from '../../utils/API';

function SearchBooksForm() {
  const [state, dispatch] = useStoreContext();

  const handleInputChange = async () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await API.searchBooks();

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default SearchBooksForm;
