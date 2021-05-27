import axios from 'axios';

const API = {
  searchBook: (query) => {
    return axios.get(`api/search/${query}`)
  },
  saveBook: (bookObj) => {
    return axios.post('/api/books', {
      body: JSON.stringify(bookObj)
    })
  },
  getBooks: () => {
    return axios.get('/api/books');
  },
  delBook: (bookId) => {
    return axios.delete(`/api/books/${bookId}`);
  }
}

export default API;