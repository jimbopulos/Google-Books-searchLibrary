import React, { useState, useEffect } from 'react';
import './style.css';
// import { useStoreContext } from '../../utils/GlobalState';
import API from '../../utils/API';
import './style.css';

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
      const {
        data: { items },
      } = await API.searchBooks(booksSearch);
      setBooks(items);
    } catch (err) {
      console.log(err);
    }
  };

  const saveBook = async (bookObj) => {
    try {
      console.log(bookObj);
      await API.saveBook(bookObj);
    } catch (err) {
      console.log(err);
    }
  };

  const getBooks = async () => {
    try {
      const {
        data: { items },
      } = await API.searchBooks();
      setBooks(items);
      console.log(items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className='form-inline'>
        <input
          type='text'
          placeholder='Search for books'
          className='form-control'
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='btn btn-primary'
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      <div className='book-cards'>
        {books.map(
          ({
            id,
            volumeInfo: { title, authors, description, infoLink, imageLinks },
          }) => {
            return (
              <div className='card' key={id}>
                <img
                  src={imageLinks.thumbnail}
                  className='card-img-top'
                  alt={title}
                  style={{ width: '20%' }}
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    {title} by {authors}
                  </h5>
                  <span>
                    <a href={infoLink} className='btn btn-primary'>
                      Find it in the Google Books store
                    </a>
                    <button
                      className='btn btn-outline-success'
                      onClick={() =>
                        saveBook({
                          title,
                          authors,
                          description,
                          link: infoLink,
                          image: imageLinks.thumbnail,
                        })
                      }
                    >
                      Save
                    </button>
                  </span>
                  <p className='card-text'>{description}</p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default SearchBooksForm;
