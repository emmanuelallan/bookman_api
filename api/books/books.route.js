const express = require('express');
const controller = require('./controllers/books.controller');

const router = express.Router();

// vi/books List books
router.route('/').get(function (req, res) {
  res.send('OK');
});

module.exports = router;
