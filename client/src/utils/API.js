import axios from 'axios';

export default {
  getBooks: function () {
    return axios.get('/api/posts');
  },
  getBook: function (id) {
    return axios.get('/api/posts/' + id);
  },
  deleteBook: function (id) {
    return axios.delete('/api/posts/' + id);
  },
  saveBook: function (bookData) {
    return axios.post('/api/posts', bookData);
  },
};
