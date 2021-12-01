const httpStatus = require('http-status');
const { omit, indexOf, transform } = require('lodash');
const Book = require('../models/books.model');

// Get books list
exports.list = async (req, res, next) => {
  try {
    const books = await Book.list(req.query);
    console.log(req.query);
    const transformedBooks = books.map((book) => book.transform());
    res.json(transformedBooks);
  } catch (error) {
    next(error);
  }
};

// Load specific book
exports.load = async (req, res, next, id) => {
  try {
    const book = await Book.get(id);
    req.locals = { book };
    return next();
  } catch (error) {
    return next(error);
  }
};

// Get book
exports.get = (req, res) => res.json(req.locals.book.transform());

// create a new book
exports.create = async (req, res, next) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(httpStatus.CREATED);
    res.json(savedBook.transform());
  } catch (error) {
    next(Book.checkDuplicateTitle(error));
  }
};

// Update existsing book
exports.update = async (req, res, next) => {
  const book = Object.assign(req.locals.book, req.body);

  book
    .save()
    .then((savedBook) => res.json(savedBook.transform()))
    .catch((e) => next(Book.checkDuplicateTitle(e)));
};

// Delete Book
exports.remove = async (req, res, next) => {
  const { book } = req.locals;

  book
    .remove()
    .then(() => res.status(httpStatus.NO_CONTENT).end())
    .catch((e) => next(e));
};
