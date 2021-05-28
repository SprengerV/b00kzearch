import React, { useEffect, useState } from 'react';
import NoBooks from '../components/noBooks';
import Book from '../components/book';
import API from '../controllers/api';
const { getBooks } = API;

const Saved = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then(({ data }) => {
        setBooks(data);
      });
  });

  return (<>
    { !books.length && <NoBooks/> }
    { books.length && books.map((book, index) => <Book key={ index } data={ book }/>) }
  </>);
};

export default Saved;