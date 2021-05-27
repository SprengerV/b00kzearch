const router = require('express').Router();
const axios = require('axios');

// environment setup
require('dotenv').config()
process.env.NODE_ENV
  ? require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
  : require('dotenv').config();

router.get('/search/:query', (req, res) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.query}&key=${process.env.GBOOKS_API_KEY}`)
    .then(ans => {
      const handleData = (arr, res) => {
        const resArr = arr.map(({ volumeInfo }) => {
          return volumeInfo;
        })
        .map(({
          title, authors, description,
          imageLinks, infoLink 
        }) => {
          const { thumbnail } = imageLinks;
          const obj = {
            title, authors, description,
            image: thumbnail,
            link: infoLink
          };
          return obj;
        });
        console.log(resArr)
        res.status(200).json(resArr);
      };
      ans.status === 200
        ? handleData(ans.data.items, res)
        : res.status(ans.status).json(ans.statusText);
    })
    .catch(err => {
      res.status(500).json(err);
      console.error(err);
    });
});

router.get('/books', (req, res) => {
  // res.json all saved books
});

router.post('/books', (req, res) => {
  // save a new book to db
});

router.delete('/books/:id', (req, res) => {
  // delete book from db by id
});

module.exports = router;