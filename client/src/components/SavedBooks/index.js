import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function SavedBooks() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    loadSavedBooks();
  }, []);

  const loadSavedBooks = async () => {
    try {
      const { data } = await API.getSavedBooks();
      setSavedBooks(data);
      console.log('saved: ', data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBook = async (id) => {
    try {
      console.log(id);
      await API.deleteBook(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>Saved Books</h3>
      {savedBooks.map(({ _id, authors, description, image, link, title }) => {
        return (
          <div className='card' key={_id}>
            <img
              src={image}
              className='card-img-top'
              alt={title}
              style={{ width: '20%' }}
            />
            <div className='card-body'>
              <h5 className='card-title'>
                {title} by {authors}
              </h5>
              <span>
                <a href={link} className='btn btn-primary'>
                  Find it in the Google Books store
                </a>
                <button
                  className='btn btn-outline-danger'
                  onClick={() => deleteBook(_id)}
                >
                  Delete
                </button>
              </span>
              <p className='card-text'>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SavedBooks;
