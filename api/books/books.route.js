const express = require('express');
const controller = require('./controllers/books.controller');

const router = express.Router();

// api/v1/books List books
router.route('/').get(controller.list);

module.exports = router;
