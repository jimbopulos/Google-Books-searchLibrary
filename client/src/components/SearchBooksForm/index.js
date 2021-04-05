import React, { useState, useEffect } from "react";
import "./style.css";
// import { useStoreContext } from '../../utils/GlobalState';
import API from "../../utils/API";
import "./style.css";

function SearchBooksForm() {
  const [books, setBooks] = useState([]);
  const [booksSearch, setBooksSearch] = useState("");

  // useEffect(() => {
  //   getBooks();
  // }, []);

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
      <div className="form-div">
        <h3>Book Search</h3>
        <form className="form">
          <input
            type="text"
            placeholder="Search for a book"
            className="form-control"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="btn btn-primary search-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      {books.length ? (
        <div>
          {books.map(
            ({
              id,
              volumeInfo: { title, authors, description, infoLink, imageLinks },
            }) => {
              return (
                <div className="card" key={id}>
                  {!imageLinks ? (
                    <img
                      src="https://i.pinimg.com/originals/61/c6/c8/61c6c8d08217e513c47518b6895335a4.png"
                      className="card-img-top"
                      alt={title}
                    />
                  ) : (
                    <img
                      src={imageLinks.thumbnail}
                      className="card-img-top"
                      alt={title}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">
                      {title} by {authors}
                    </h5>
                    <p className="card-text">{description}</p>
                    <span>
                      <a href={infoLink} className="btn btn-primary">
                        View in Google Books store
                      </a>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          saveBook({
                            title,
                            authors,
                            description,
                            link: infoLink,
                            image: imageLinks.thumbnail,
                          });
                          alert(`${title} saved to your library!`);
                        }}
                      >
                        Save
                      </button>
                    </span>
                  </div>
                </div>
              );
            }
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchBooksForm;
