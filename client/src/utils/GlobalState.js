import React, { createContext, useReducer, useContext } from 'react';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case 'AN_ACTION':
      return state;

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
