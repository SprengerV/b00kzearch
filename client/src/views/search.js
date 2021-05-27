import React, { useState } from 'react';
import SearchForm from '../components/searchForm';
import NoBooks from '../components/noBooks';
import Book from '../components/book';

const Search = () => {
  const [result, setResult] = useState(null);

  return (<>
    <SearchForm/>
    { result ? <Book data={result}/> : <NoBooks/> }
  </>);
};

export default Search;