import React, { useState, useEffect } from 'react';
// import { useStoreContext } from '../../utils/GlobalState';
import API from '../../utils/API';

function SearchBooksForm() {
  const [books, setBooks] = useState([]);
  const [booksSearch, setBooksSearch] = useState('');

  useEffect(() => {
    getBooks();
  }, []);

  const handleInputChange = async (e) => {
    const { value } = e.target;

    setBooksSearch(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.searchBooks(booksSearch);
      setBooks(data);
      console.log();
    } catch (err) {
      console.log(err);
    }
  };

  const getBooks = async () => {
    const { data } = await API.searchBooks();

    // console.log(data);
    setBooks(data);
  };

  return (
    <div>
      <form>
        <input type='text' onChange={handleInputChange} />
        <button type='submit' onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBooksForm;
