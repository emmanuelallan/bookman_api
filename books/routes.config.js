const express = require('express');
const router = express.Router();

// get all books
router.get('/books', function (req, res, next) {
  res.send({
    title: 'The compound effect',
  });
});

module.exports = router;
