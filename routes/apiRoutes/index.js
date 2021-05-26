const router = require('express').Router();

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