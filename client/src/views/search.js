import React, { useState } from 'react';
import SearchForm from '../components/searchForm';
import NoBooks from '../components/noBooks';
import Book from '../components/book';
import API from '../controllers/api';
const { searchBook } = API;

const Search = () => {
  const [results, setResults] = useState([]);

  const search = (event) => {
    event.preventDefault();
    const query = document.querySelector('#search').value;
    searchBook(query)
      .then(res => {
        setResults(JSON.parse(res.data));
      });
  };

  return (<>
    <SearchForm search={ search }/>
    { (results.length === 0) && <NoBooks/> }
    { (results.length > 0) && results.map(book => <Book data={ book }/>) } 
  </>);
};

export default Search;