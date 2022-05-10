const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');

router.get('/', (req, res) => {
  res.json({
    status: 'OK',
  });
});

router.use('/auth', authRouter);

module.exports = router;
