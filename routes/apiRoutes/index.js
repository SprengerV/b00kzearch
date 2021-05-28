const router = require('express').Router();
const axios = require('axios');
const { Book } = require('../../models');

// environment setup
require('dotenv').config();
process.env.NODE_ENV
  ? require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
  : require('dotenv').config();

router.get('/search/:query', (req, res) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${ req.params.query }&key=${ process.env.GBOOKS_API_KEY }`)
    .then(ans => {
      const handleData = (arr, res) => {
        const resArr = arr.map(({ volumeInfo }) => {
          return volumeInfo;
        })
        .filter(({ title, authors, description,
          imageLinks, infoLink }) => {
            return (title && authors && description && imageLinks && infoLink);
          })
        .map(({
          title, authors, description,
          imageLinks, infoLink 
        }) => {
          const { smallThumbnail } = imageLinks;
          const obj = {
            title, authors, description,
            image: smallThumbnail,
            link: infoLink
          };
          return obj;
        });
        res.status(200).json(JSON.stringify(resArr));
        return;
      };
      ans.status === 200
        ? handleData(ans.data.items, res)
        : res.status(ans.status).json(ans.statusText);
      return;
    })
    .catch(err => {
      res.status(500).json(err);
      console.error(err);
    });
});

router.get('/books', (req, res) => {
  Book
    .find()
    .then(docs => res.status(200).json(docs))
    .catch(err => res.status(400).json(err));
});

router.post('/books', (req, res) => {
  Book
    .create(req.body)
    .then(doc => {
      console.log(doc)
      res.status(200).json(doc)
    })
    .catch(err => res.status(400).json(err));
});

router.delete('/books/:id', (req, res) => {
  Book
    .findById({ _id: req.params.id })
    .then(doc => doc.remove())
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(400).json(err));
});

module.exports = router;