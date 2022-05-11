const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authJWT');
const {
  create,
  edit,
  remove,
  list,
  get,
} = require('../controllers/book.controller');

// list all books
router.get('/list', list);

// get a book
router.get('/get:bookId', get);

// create a new book
router.post('/new', verifyToken, create);

// edit a book
router.patch('/edit:bookId', verifyToken, edit);

// delete a book
router.delete('/remove:bookId', verifyToken, remove);

module.exports = router;
