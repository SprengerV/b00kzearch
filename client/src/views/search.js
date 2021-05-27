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
        console.log(res)
        setResults(res.data)
      });
  };

  return (<>
    <SearchForm search={ search }/>
    { results.length ? <Book data={results}/> : <NoBooks/> }
  </>);
};

export default Search;