import React, { useState } from 'react';
import NoBooks from '../components/noBooks';

const Saved = () => {
  const [books, setBooks] = useState([]);

  return (<>
    { !books.length && <NoBooks/> }
  </>);
};

export default Saved