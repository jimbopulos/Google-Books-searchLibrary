import React, { createContext, useReducer, useContext } from 'react';
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SET_CURRENT_BOOK,
  LOADING,
  ADD_SAVED,
  REMOVE_SAVED,
} from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_BOOK:
      return {
        ...state,
        currentBook: action.book,
        loading: false,
      };

    case ADD_BOOK:
      return {
        ...state,
        books: [action.book, ...state.books],
        loading: false,
      };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => {
          return book._id !== action._id;
        }),
      };

    case ADD_SAVED:
      return {
        ...state,
        savedBooks: [action.book, book.favorites],
        loading: false,
      };

    case REMOVE_SAVED:
      return {
        ...state,
        savedBooks: state.savedBooks.filter((book) => {
          return book._id !== action._id;
        }),
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    books: [],
    currentBook: {
      id: 0,
      title: '',
      author: '',
      description: '',
      image: '',
      link: '',
    },
    savedBooks: [],
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
