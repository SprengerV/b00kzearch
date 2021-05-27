import React, { useState } from 'react';
import SearchForm from '../components/searchForm';
import NoBooks from '../components/noBooks';
import Book from '../component/book';

const Search = () => {
  const [result, setResult] = useState(null)

  return (<>
    <SearchForm/>
    { result 
      ? <NoBooks/>
      : <Book data={ result }/> }
  </>);
};

export default Search;