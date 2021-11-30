const express = require('express');
const controller = require('./controllers/books.controller');

const router = express.Router();

// api/v1/books List books and Create a book
router.route('/').get(controller.list).post(controller.create);

// api/v1/books/:id Load single book based on id, update and delete it
router
  .route('/:id')
  .get(controller.load)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
