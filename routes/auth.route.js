const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');

// register
router.post('/register', register, (req, res) => {});

login;
router.post('/login', login, (req, res) => {});

// reset password
// router.patch("/reset", reset);

module.exports = router;
