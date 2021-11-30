const express = require('express');
const booksRouter = require('../../books/books.routes');

const router = express.Router();

// GET v1/status
router.get('/status', (req, res) => res.send('OK'));

router.use('/books', booksRouter);

module.exports = router;
