const httpStatus = require('http-status');
const { omit } = require('lodash');
const Books = require('../models/books.model');

// Get user list
exports.list = async (req, res, next) => {
  try {
    const books = await { title: 'something interesting' };
    res.json(books);
  } catch (error) {
    next(error);
  }
};
