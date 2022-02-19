const express = require('express');
const booksRouter = require('../../books/books.routes');

const router = express.Router();

// GET v1/status
router.get('/', (req, res) =>
  res.send({
    status: 'OK',
  })
);

router.use('/books', booksRouter);

module.exports = router;
