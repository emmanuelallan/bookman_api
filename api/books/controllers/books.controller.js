const httpStatus = require('http-status');
const { omit, indexOf, transform } = require('lodash');
const Book = require('../models/books.model');

const data = [
  {
    id: '1',
    imgUrl: '/storage/books/grit/grit.png',
    author: 'Angela DuckWorth',
    rating: {
      average: '4.6',
      global: '9,925',
    },
    url: 'https://amzn.to/31eyJn1',
    price: '1000',
    title: 'Grit',
    subTitle: 'The Power of Passion and Perseverance',
    description: `In this instant New York Times bestseller, pioneering psychologist Angela Duckworth shows anyone striving to succeed—be it parents, students, educators, athletes, or business people—that the secret to outstanding achievement is not talent but a special blend of passion and persistence she calls “grit.”`,
    pdf: {
      fileSize: '200',
      src: '/storage/books/grit/grit.pdf',
      pdfPrice: '100',
      available: false,
    },
    quantity: '200',
    pubDate: 'May 1, 2016',
    pages: '352',
    createdAt: new Date().getDate(),
    language: 'English',
    ISBN10: '1501111108',
    ISBN13: '978-1501111105',
  },
];

// Get user list
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

// Get specific
exports.load = async (req, res, next) => {
  try {
    const userId = req.params.id;
    res.json(data[0]);
  } catch (error) {
    next(error);
  }
};

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
  return;
};

// Delete Book
exports.remove = async (req, res, next) => {
  return;
};
