const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');
const bookRouter = require('./book.route');

router.get('/', (req, res) => {
  res.json({
    status: 'OK',
  });
});

router.use('/auth', authRouter);
router.use('/book', bookRouter);

module.exports = router;
