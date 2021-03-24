import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import './style.css';

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
      <div className='title'>
        <h3>Your Saved Books:</h3>
      </div>
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
              <p className='card-text'>{description}</p>
              <span>
                <a href={link} className='btn btn-primary'>
                  View in Google Books store
                </a>
                <button
                  className='btn btn-outline-danger'
                  onClick={() => deleteBook(_id)}
                >
                  Delete
                </button>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SavedBooks;
